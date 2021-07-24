/*
 * GeoMap v0.4.4
 * https://github.com/x6doooo/GeoMap
 *
 * Copyright 2013 Dx. Yang
 * Released under the MIT license
 */

(function($, undefined){
var version = "0.4.4"

var convertor = {
  "xmin": 360,
  "xmax": 0,
  "ymin": 180,
  "ymax": 0,
  /*!Private
      让阿拉斯加地区在地图右侧显示
   */
  "formatPoint": function(p){
    return [
      (p[0] < -168.5 ? p[0] + 360 : p[0]) + 170, 
      90 - p[1]
    ];
  },
  "makePoint": function(p){
    var self = this,
      point = self.formatPoint(p),
      x = point[0],
      y = point[1];
    if(self.xmin > x) self.xmin = x;
    if(self.xmax < x) self.xmax = x;
    if(self.ymin > y) self.ymin = y;
    if(self.ymax < y) self.ymax = y;
    return [x, y];
  },
  "Point": function(coordinates){
    coordinates = this.makePoint(coordinates);
    return coordinates.join(',');
  },
  "LineString": function(coordinates){
    var str = '',
      self = this,
      i = 0,
      len = coordinates.length,
      point;

    for( ; i < len; i++){
      point = self.makePoint(coordinates[i]);
      if(i == 0){
        str = 'M' + point.join(',');
      }else{
        str = str + 'L' + point.join(',');
      }
    }
    return str;
  },
  "Polygon": function(coordinates){
    var str = '',
      i = 0,
      len = coordinates.length;

    for(; i < len; i++){
      str = str + convertor.LineString(coordinates[i]) + 'z';
    }
    return str;
  },
  "MultiPoint": function(coordinates){
    var arr = [],
      i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      arr.push(convertor.Point(coordinates[i]));
    }
    return arr;
  },
  "MultiLineString": function(coordinates){
    var str = '',
      i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      str += convertor.LineString(coordinates[i]);
    }
    return str;
  },
  "MultiPolygon": function(coordinates){
    var str = '',
      i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      str += convertor.Polygon(coordinates[i]);
    }
    return str;
  }
};

function json2path(json){
  var
    shapes = json.features,
    shapeType,
    shapeCoordinates,
    str,
    geometries,
    pathArray = [],
    i, j,
    len, len2,
    val,
    shape;

  convertor.xmin = 360;
  convertor.xmax = 0;
  convertor.ymin = 180;
  convertor.ymax = 0;

  for(i = 0, len = shapes.length; i < len; i++){
    shape = shapes[i];
    if(shape.type == 'Feature'){
      pushApath(shape.geometry, shape);
    }else if(shape.type = 'GeometryCollection'){
      geometries = shape.geometries;
      for(j = 0, len2 = geometries.length; j < len2; j++){
        val = geometries[j];
        pushApath(val, val);
      }
    }
  }
  function pushApath(gm, shape){
    shapeType = gm.type;
    shapeCoordinates = gm.coordinates;
    str = convertor[shapeType](shapeCoordinates);
    pathArray.push({
      type: shapeType,
      path: str,
      properties: shape.properties,
      id: shape.id
    });
  }
  return pathArray;
}
var GeoMap = function(cfg){
  var self = this,
    defaultCfg = {
      container: 'body',
      offset: null,
      scale: null,
      mapStyle: {
        'fill': '#fff',
        'stroke': '#999',
        'stroke-width': 0.7
      },
      crossline:{
        enable: false,
        color: '#ccc'
      },
      background:'#fff'
    };

  $.extend(true, defaultCfg, cfg);

  self.container = $(defaultCfg.container);

  if(self.container.length == 0){
    throw new Error('map container is not defined!');
  }

  self.width = defaultCfg.width || self.container.width();
  self.height = defaultCfg.height || self.container.height();
  self.left = self.container.offset().left;
  self.top = self.container.offset().top;
  self.canvas = new Raphael(self.container.get(0), self.width, self.height);
  self.shapes = self.canvas.set();
  self.config = defaultCfg;
  self.paths = null;
};

GeoMap.prototype = {
  load: function(json){
    this.paths = json2path(json);
  },
  render: function(){
    var self = this,
      shapes = self.shapes,
      paths = self.paths,
      canvas = self.canvas,
      config = self.config,
      style = config.mapStyle,
      offset = config.offset,
      scale = config.scale,
      background = config.background,
      crossline = config.crossline,
      width = self.width,
      height = self.height,
      left = self.left + 5,
      top = self.top + 7,
      mapleft = convertor.xmin,
      maptop = convertor.ymin,
      mapwidth = convertor.xmax - convertor.xmin,
      mapheight = convertor.ymax - convertor.ymin,
      aPath = null, linehead, linex, liney, back, i, len, currentPath;

    if(!scale){
      var temx = width / mapwidth,
        temy = height / mapheight;
      temx > temy ? temx = temy : temy = temx;
      temx = temy * 0.73;
      self.config.scale = scale = {
        x: temx,
        y: temy
      };
    }

    if(!offset){
      self.config.offset = offset = {
        x: mapleft,
        y: maptop
      };
    }

    back = canvas.rect(mapleft, maptop, mapwidth, mapheight).scale(scale.x, scale.y, 0, 0).attr({
      'fill': background, 'stroke-width': 0
    });

    linehead = 'M' + (mapleft) + ',' + (maptop);
    linex = linehead + 'H' + convertor.xmax * scale.x;
    liney = linehead + 'V' + convertor.ymax * scale.y;

    self.crosslineX = canvas.path(linex).attr({'stroke': crossline.color, 'stroke-width': '1px'}).hide();
    self.crosslineY = canvas.path(liney).attr({'stroke': crossline.color, 'stroke-width': '1px'}).hide();

    for(i = 0, len = paths.length; i < len; i++){
      currentPath = paths[i];
      if(currentPath.type == 'point' || currentPath.type == 'MultiPoint'){
        //TODO
      }else{
        aPath = canvas.path(currentPath.path).data({'properties': currentPath.properties, 'id': currentPath.id});
      }
      shapes.push(aPath);
    }

    canvas.setViewBox(offset.x, offset.y, width, height, false);
    shapes.attr(style).scale(scale.x, scale.y, mapleft, maptop);

    //TODO: crossline的位置计算，由于要做一点偏移，所以偏移量要考虑到缩放问题，类似getGeoPosition方法，计算出图上偏移的实际值
    if(crossline.enable === true){
      shapes.mouseover(function(){
        showCrossLine();
      }).mousemove(function(e){
          moveCrossLine(e);
        }).mouseout(function(){
          hideCrossLine();
        });
      back.mouseover(function(){
        showCrossLine();
      }).mousemove(function(e){
          moveCrossLine(e);
        }).mouseout(function(){
          hideCrossLine();
        });
    }
    function showCrossLine(){
      self.crosslineX.toFront().show();
      self.crosslineY.toFront().show();
    }
    function moveCrossLine(e){
      var pos = getEventPos(e);
      self.crosslineX.transform('T0,'+pos.y);
      self.crosslineY.transform('T'+ pos.x + ',0');
    }
    function hideCrossLine(){
      self.crosslineX.hide();
      self.crosslineY.hide();
    }
    function getEventPos(e){
      return {
        x: parseInt(e.pageX - left) + 0.4,
        y: parseInt(e.pageY - top) + 0.4
      };
    }
  },
  /*!
      将平面上的一个点的坐标，转换成实际经纬度坐标
   */
  getGeoPosition: function(p){
    var x1 = p[0],
      y1 = p[1],
      m = this.shapes[0].matrix,
      x, y,
      a = m.a,
      b = m.b,
      c = m.c,
      d = m.d,
      e = m.e,
      f = m.f;

    y = (y1 - f - x1 / a * b + e / a * b)/(d - c / a * b);
    x = (x1 - e - y * c) / a;
    y = 90 - y;
    x = x - 170;
    x = x > 180 ? x - 360 : x;
    return [x, y];
  },
  geo2pos: function(p){
    var	self = this,
      a = {
        "x": 0,
        "y": 0,
        "r": 1,
        "opacity": 0.5,
        "fill": "#238CC3",
        "stroke": "#238CC3",
        "stroke-width": 0,
        "stroke-linejoin": "round"
      },
      matrixTrans = self.shapes[0].matrix;
    $.extend(true, a, p);
    p = convertor.makePoint([a.x, a.y]);
    //通过matrix去计算点变换后的坐标
    p[0] = matrixTrans.x(p[0], p[1]);
    p[1] = matrixTrans.y(p[0], p[1]);
    return p;
  },
  setPoint: function(p){
    // 点的默认样式
    var	self = this,
      a = {
        "x": 0,
        "y": 0,
        "r": 1,
        "opacity": 0.5,
        "fill": "#238CC3",
        "stroke": "#238CC3",
        "stroke-width": 0,
        "stroke-linejoin": "round"
      },
      matrixTrans = self.shapes[0].matrix;
    $.extend(true, a, p);
    p = convertor.makePoint([a.x, a.y]);
    //通过matrix去计算点变换后的坐标
    p[0] = matrixTrans.x(p[0], p[1]);
    p[1] = matrixTrans.y(p[0], p[1]);
    a.x = p[0];
    a.y = p[1];
    return self.canvas.circle(p[0], p[1], a.r).attr(a);
  }
};

//TODO: heat map

GeoMap.version = version;
this.GeoMap = GeoMap;
})(jQuery);
