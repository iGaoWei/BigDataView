var echarts = require('echarts/lib/echarts');

module.exports = echarts.graphic.extendShape({
    type: 'ec-liquid-fill',

    shape: {
        waveLength: 0,
        radius: 0,
        radiusY: 0,
        cx: 0,
        cy: 0,
        waterLevel: 0,
        amplitude: 0,
        phase: 0,
        inverse: false
    },

    buildPath: function (ctx, shape) {
        if (shape.radiusY == null) {
            shape.radiusY = shape.radius;
        }

        /**
         * We define a sine wave having 4 waves, and make sure at least 8 curves
         * is drawn. Otherwise, it may cause blank area for some waves when
         * wave length is large enough.
         */
        var curves = Math.max(
            Math.ceil(2 * shape.radius / shape.waveLength * 4) * 2,
            8
        );

        // map phase to [-Math.PI * 2, 0]
        while (shape.phase < -Math.PI * 2) {
            shape.phase += Math.PI * 2;
        }
        while (shape.phase > 0) {
            shape.phase -= Math.PI * 2;
        }
        var phase = shape.phase / Math.PI / 2 * shape.waveLength;

        var left = shape.cx - shape.radius + phase - shape.radius * 2;

        /**
         * top-left corner as start point
         *
         * draws this point
         *  |
         * \|/
         *  ~~~~~~~~
         *  |      |
         *  +------+
         */
        ctx.moveTo(left, shape.waterLevel);

        /**
         * top wave
         *
         * ~~~~~~~~ <- draws this sine wave
         * |      |
         * +------+
         */
        var waveRight = 0;
        for (var c = 0; c < curves; ++c) {
            var stage = c % 4;
            var pos = getWaterPositions(c * shape.waveLength / 4, stage,
                shape.waveLength, shape.amplitude);
            ctx.bezierCurveTo(pos[0][0] + left, -pos[0][1] + shape.waterLevel,
                pos[1][0] + left, -pos[1][1] + shape.waterLevel,
                pos[2][0] + left, -pos[2][1] + shape.waterLevel);

            if (c === curves - 1) {
                waveRight = pos[2][0];
            }
        }

        if (shape.inverse) {
            /**
             * top-right corner
             *                  2. draws this line
             *                          |
             *                       +------+
             * 3. draws this line -> |      | <- 1. draws this line
             *                       ~~~~~~~~
             */
            ctx.lineTo(waveRight + left, shape.cy - shape.radiusY);
            ctx.lineTo(left, shape.cy - shape.radiusY);
            ctx.lineTo(left, shape.waterLevel);
        }
        else {
            /**
             * top-right corner
             *
             *                       ~~~~~~~~
             * 3. draws this line -> |      | <- 1. draws this line
             *                       +------+
             *                          ^
             *                          |
             *                  2. draws this line
             */
            ctx.lineTo(waveRight + left, shape.cy + shape.radiusY);
            ctx.lineTo(left, shape.cy + shape.radiusY);
            ctx.lineTo(left, shape.waterLevel);
        }

        ctx.closePath();
    }
});



/**
 * Using Bezier curves to fit sine wave.
 * There is 4 control points for each curve of wave,
 * which is at 1/4 wave length of the sine wave.
 *
 * The control points for a wave from (a) to (d) are a-b-c-d:
 *          c *----* d
 *     b *
 *       |
 * ... a * ..................
 *
 * whose positions are a: (0, 0), b: (0.5, 0.5), c: (1, 1), d: (PI / 2, 1)
 *
 * @param {number} x          x position of the left-most point (a)
 * @param {number} stage      0-3, stating which part of the wave it is
 * @param {number} waveLength wave length of the sine wave
 * @param {number} amplitude  wave amplitude
 */
function getWaterPositions(x, stage, waveLength, amplitude) {
    if (stage === 0) {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2, amplitude / 2],
            [x + 1 / 2 * waveLength / Math.PI,     amplitude],
            [x + waveLength / 4,                   amplitude]
        ];
    }
    else if (stage === 1) {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
            amplitude],
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
            amplitude / 2],
            [x + waveLength / 4,                   0]
        ]
    }
    else if (stage === 2) {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2, -amplitude / 2],
            [x + 1 / 2 * waveLength / Math.PI,     -amplitude],
            [x + waveLength / 4,                   -amplitude]
        ]
    }
    else {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
            -amplitude],
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
            -amplitude / 2],
            [x + waveLength / 4,                   0]
        ]
    }
}
