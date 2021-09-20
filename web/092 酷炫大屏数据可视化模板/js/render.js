/*
 * 2017.7.24
 * author:acdSeen
 * */
(function(window, factory) {

    if (typeof define === "function" && define.amd) {
        //AMD
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        //CMD
        module.exports = factory();
    } else {
        //window
        window.WaterPolo = factory();
    }

}(typeof window !== "undefined" ? window : this, function(selector, userOptions) {
    //采用window作为参数传入，将功能函数挂载到window上

    var WaterPolo = function(selector, userOptions) {

        'user strict';

        userOptions = userOptions || {};


        var options = {
            //容器距边缘的距离
            wrapW: 3,

            //canvas属性
            cW: 300,
            cH: 300,
            lineWidth: 2,

            //液面位置 百分比表示
            baseY: 20,

            //页面起始位置
            nowRange: 0,

            //线条颜色
            lineColor: 'rgb(176,204,53)',
            //上层颜色
            oneColor: 'rgba(176,204,53,.6)',

            //下层颜色
            twoColor: 'rgba(176,204,53,.4)',

            //上层波浪宽度，数越小越宽
            oneWaveWidth: 0.06,

            //下层波浪宽度
            twoWaveWidth: 0.06,

            //上层波浪高度，数越大越高
            oneWaveHeight: 4,

            //下层波浪高度
            twoWaveHeight: 4,

            //上层波浪x轴偏移量
            oneOffsetX: 10,

            //下层波浪x轴偏移量
            twoOffsetX: 20,

            //波浪滚动速度，数越大越快
            speed: 0.2
        };


        var canvas = null,
            ctx = null,
            W = null,
            H = null;


        Object.defineProperty(this, 'options', {
            get: function() {
                return options;
            },
            set: function(value) {

                mergeOption(value, options);
            }
        });


        //参数混合相当于$.extend([old],[new])
        var mergeOption = function(userOptions, options) {
            Object.keys(userOptions).forEach(function(key) {
                options[key] = userOptions[key];
            })
        };

        //生成液面
        var makeLiquaid = function(ctx, xOffset, waveWidth, waveHeight, color) {
            ctx.save();
            var points = []; //用于存放绘制Sin曲线的点
            ctx.beginPath();
            //在x轴上取点
            for (var x = 0; x < options.cW; x += 20 / options.cW) {
                //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
                var y = -Math.sin(x * waveWidth + xOffset);

                //液面高度百分比改变
                var dY = options.cH * (1 - options.nowRange / 100);

                points.push([x, dY + y * waveHeight]);
                ctx.lineTo(x, dY + y * waveHeight);
            }
            //封闭路径
            ctx.lineTo(options.cW, options.cH);
            ctx.lineTo(0, options.cH);
            ctx.lineTo(points[0][0], points[0][1]);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
        };

        //初始化设置

        var init = function() {

            mergeOption(userOptions, options);

            canvas = document.getElementById(selector);
            ctx = canvas.getContext('2d');

            canvas.width = options.cW;
            canvas.height = options.cH;

            ctx.lineWidth = options.lineWidth;
            
            //圆属性
            var r = options.cH / 2; //圆心
            var cR = r - 6; //圆半径 决定圆的大小

            var drawCircle = function(ctx) {
                ctx.beginPath();
                ctx.strokeStyle = options.lineColor;
                ctx.arc(r, r, cR + options.wrapW, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(r, r, cR, 0, 2 * Math.PI);
                ctx.clip();

            };
            drawCircle(ctx); //画圆

            (function drawFrame() {

                window.requestAnimationFrame(drawFrame);

                ctx.clearRect(0, 0, options.cW, options.cH);

                //高度改变动画参数

                if (options.nowRange <= options.baseY) {
                    var tmp = 1;
                    options.nowRange += tmp;
                }

                if (options.nowRange > options.baseY) {
                    var tmp = 1;
                    options.nowRange -= tmp;
                }
                makeLiquaid(ctx, options.oneOffsetX, options.oneWaveWidth, options.oneWaveHeight, options.oneColor);
                makeLiquaid(ctx, options.twoOffsetX, options.twoWaveWidth, options.twoWaveHeight, options.twoColor);

                options.oneOffsetX += options.speed;
                options.twoOffsetX += options.speed;

            }());


        };
        init();

    };
    return WaterPolo;
}));