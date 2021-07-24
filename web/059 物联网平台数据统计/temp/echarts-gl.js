/**
 * echarts-gl
 * Extension pack of ECharts providing 3d plots and globe visualization
 *
 * Copyright (c) 2014, echarts-gl
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module echarts-gl
 * @author Yi Shen(http://github.com/pissang)
 */

// PENDING Use a single canvas as layer or use image element?
var echartsGl = {
    version: '1.1.1',
    dependencies: {
        echarts: '4.1.0',
        claygl: '1.2.1'
    }
};
import echarts from 'echarts/lib/echarts';
import clayVersion from 'claygl/src/version';
import LayerGL from './core/LayerGL';
import backwardCompat from './preprocessor/backwardCompat';
import graphicGL from './util/graphicGL';

// Version checking
var deps = echartsGl.dependencies;
function versionTooOldMsg(name) {
    throw new Error(
        name + ' version is too old, needs ' + deps[name] + ' or higher'
    );
}
function checkVersion(version, name) {
    if ((version.replace('.', '') - 0) < (deps[name].replace('.', '') - 0)) {
        versionTooOldMsg(name);
    }
    // console.log('Loaded ' + name + ', version ' + version);
}
checkVersion(clayVersion, 'claygl');
checkVersion(echarts.version, 'echarts');

function EChartsGL (zr) {
    this._layers = {};

    this._zr = zr;
}

EChartsGL.prototype.update = function (ecModel, api) {
    var self = this;
    var zr = api.getZr();

    if (!zr.getWidth() || !zr.getHeight()) {
        console.warn('Dom has no width or height');
        return;
    }

    function getLayerGL(model) {
        var zlevel;
        // Host on coordinate system.
        if (model.coordinateSystem && model.coordinateSystem.model) {
            zlevel = model.get('zlevel');
        }
        else {
            zlevel = model.get('zlevel');
        }

        var layers = self._layers;
        var layerGL = layers[zlevel];
        if (!layerGL) {
            layerGL = layers[zlevel] = new LayerGL('gl-' + zlevel, zr);

            if (zr.painter.isSingleCanvas()) {
                layerGL.virtual = true;
                // If container is canvas, use image to represent LayerGL
                // FIXME Performance
                var img = new echarts.graphic.Image({
                    z: 1e4,
                    style: {
                        image: layerGL.renderer.canvas
                    },
                    silent: true
                });
                layerGL.__hostImage = img;

                zr.add(img);
            }

            zr.painter.insertLayer(zlevel, layerGL);
        }
        if (layerGL.__hostImage) {
            layerGL.__hostImage.setStyle({
                width: layerGL.renderer.getWidth(),
                height: layerGL.renderer.getHeight()
            });
        }

        return layerGL;
    }

    function setSilent(groupGL, silent) {
        if (groupGL) {
            groupGL.traverse(function (mesh) {
                if (mesh.isRenderable && mesh.isRenderable()) {
                    mesh.ignorePicking = mesh.$ignorePicking != null
                        ? mesh.$ignorePicking : silent;
                }
            });
        }
    }

    for (var zlevel in this._layers) {
        this._layers[zlevel].removeViewsAll();
    }

    ecModel.eachComponent(function (componentType, componentModel) {
        if (componentType !== 'series') {
            var view = api.getViewOfComponentModel(componentModel);
            var coordSys = componentModel.coordinateSystem;
            // View with __ecgl__ flag is a echarts-gl component.
            if (view.__ecgl__) {
                var viewGL;
                if (coordSys) {
                    if (!coordSys.viewGL) {
                        console.error('Can\'t find viewGL in coordinateSystem of component ' + componentModel.id);
                        return;
                    }
                    viewGL = coordSys.viewGL;
                }
                else {
                    if (!componentModel.viewGL) {
                        console.error('Can\'t find viewGL of component ' + componentModel.id);
                        return;
                    }
                    viewGL = coordSys.viewGL;
                }

                viewGL = coordSys.viewGL;
                var layerGL = getLayerGL(componentModel);

                layerGL.addView(viewGL);

                view.afterRender && view.afterRender(
                    componentModel, ecModel, api, layerGL
                );

                setSilent(view.groupGL, componentModel.get('silent'));
            }
        }
    });

    ecModel.eachSeries(function (seriesModel) {
        var chartView = api.getViewOfSeriesModel(seriesModel);
        var coordSys = seriesModel.coordinateSystem;
        if (chartView.__ecgl__) {
            if ((coordSys && !coordSys.viewGL) && !chartView.viewGL) {
                console.error('Can\'t find viewGL of series ' + chartView.id);
                return;
            }
            var viewGL = (coordSys && coordSys.viewGL) || chartView.viewGL;
            // TODO Check zlevel not same with component of coordinate system ?
            var layerGL = getLayerGL(seriesModel);
            layerGL.addView(viewGL);

            chartView.afterRender && chartView.afterRender(
                seriesModel, ecModel, api, layerGL
            );

            setSilent(chartView.groupGL, seriesModel.get('silent'));
        }
    });
};

// Hack original getRenderedCanvas. Will removed after new echarts released
// TODO
var oldInit = echarts.init;
echarts.init = function () {
    var chart = oldInit.apply(this, arguments);
    chart.getZr().painter.getRenderedCanvas = function (opts) {
        opts = opts || {};
        if (this._singleCanvas) {
            return this._layers[0].dom;
        }

        var canvas = document.createElement('canvas');
        var dpr = opts.pixelRatio || this.dpr;
        canvas.width = this.getWidth() * dpr;
        canvas.height = this.getHeight() * dpr;
        var ctx = canvas.getContext('2d');
        ctx.dpr = dpr;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (opts.backgroundColor) {
            ctx.fillStyle = opts.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        var displayList = this.storage.getDisplayList(true);

        var scope = {};
        var zlevel;

        var self = this;
        function findAndDrawOtherLayer(smaller, larger) {
            var zlevelList = self._zlevelList;
            if (smaller == null) {
                smaller = -Infinity;
            }
            var intermediateLayer;
            for (var i = 0; i < zlevelList.length; i++) {
                var z = zlevelList[i];
                var layer = self._layers[z];
                if (!layer.__builtin__ && z > smaller && z < larger) {
                    intermediateLayer = layer;
                    break;
                }
            }
            if (intermediateLayer && intermediateLayer.renderToCanvas) {
                ctx.save();
                intermediateLayer.renderToCanvas(ctx);
                ctx.restore();
            }
        }
        var layer = {
            ctx: ctx
        };
        for (var i = 0; i < displayList.length; i++) {
            var el = displayList[i];

            if (el.zlevel !== zlevel) {
                findAndDrawOtherLayer(zlevel, el.zlevel);
                zlevel = el.zlevel;
            }
            this._doPaintEl(el, layer, true, scope);
        }

        findAndDrawOtherLayer(zlevel, Infinity);

        return canvas;
    };
    return chart;
};


echarts.registerPostUpdate(function (ecModel, api) {
    var zr = api.getZr();

    var egl = zr.__egl = zr.__egl || new EChartsGL(zr);

    egl.update(ecModel, api);
});

echarts.registerPreprocessor(backwardCompat);

echarts.graphicGL = graphicGL;

export default EChartsGL;