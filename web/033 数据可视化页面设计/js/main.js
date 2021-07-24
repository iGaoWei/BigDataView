
$(function () {
    // 定义字体大小
    function placeholderPic() {
        w = document.documentElement.clientWidth / 80;
        document.documentElement.style.fontSize = w + 'px';
    }
    placeholderPic()

    // TOP5颜色循环
    function topColor() {
        var ele = $('.top5-content ul').children();
        var length = ele.length;
        var i = 1;
        setInterval(function () {
            $(ele[i]).find('.cicle').css({
                'background': 'url(./images/orange.png) no-repeat center',
                'backgroundSize': '100%'
            })
            $(ele[i]).find('.li-content').css({
                'background': 'url(./images/border2.png) no-repeat center',
                'backgroundSize': 'contain'
            })
            $(ele[i]).siblings().find('.cicle').css({
                'background': 'url(./images/green.png) no-repeat center',
                'backgroundSize': '100%'
            })
            $(ele[i]).siblings().find('.li-content').css({
                'background': 'url(./images/border.png) no-repeat center',
                'backgroundSize': 'contain'
            })
            i++
            if (i == length) {
                i = 0
            }
        }, 3000)
    }
    topColor()

    // 水波图
    function waterChart(ele) {
        var myChart = echarts.init(document.querySelector(ele));
        option = {
            series: [{
                color:['#09828e','#09c2c8'],
                type: 'liquidFill',
                data: [0.78, 0.78],
                radius: '90%',
                outline: {
                    show: false
                },
                backgroundStyle: {
                    color:'transparent',
                    borderColor: '#0ac1c7',
                    borderWidth: 1,
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                },
                shape: 'path://"M61.3,2c6.2,0,12.1,1.1,17.5,3.4C84.3,7.7,89,10.8,93,14.6c4.1,4,7.3,8.6,9.7,13.8c2.4,5.2,3.5,10.9,3.5,16.9c0,8.1-2.4,16.9-7.1,26.4c-4.7,9.4-9.9,18.2-15.5,26.2c-5.6,8-13.1,17.4-22.4,28.1c-9.3-10.7-16.8-20-22.4-28.1c-5.6-8-10.8-16.8-15.5-26.2c-4.7-9.4-7.1-18.2-7.1-26.4c0-6,1.2-11.6,3.5-16.9c2.4-5.2,5.6-9.8,9.7-13.8c4-3.9,8.8-7,14.2-9.2C49.2,3.1,55,2,61.3,2L61.3,2z"',
                label: {
                    normal: {
                        position: ['50%', '50%'],
                        formatter: function () {
                            return '78%';
                        },
                        textStyle: {
                            fontSize: 0.5 * w,
                            color: '#D94854'
                        }
                    }
                }
            }]
        }
        myChart.setOption(option)
    }
    waterChart('.chart1')
    waterChart('.chart2')


    function draw(ele, val, con, max, color) {
        var chart = echarts.init(document.querySelector(ele))
        var value = val
        option = {
            grid: {
                left: '20%',
                top: '0',
                right: '20%',
                bottom: '0'
            },
            "xAxis": {
                type: 'value',
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    "show": false
                },
                "axisLabel": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                }
            },
            "yAxis": [{
                "type": "category",
                "inverse": false,
                "data": [],
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    show: false
                }
            }],
            "series": [
                {
                    type: 'pictorialBar',
                    data: [value],
                    itemStyle: {
                        normal: {
                            color: color
                        }
                    },
                    symbolRepeat: 'fixed',
                    symbolClip: true,
                    symbolSize: [0.5 * w, w],
                    symbol: 'roundRect',
                    label: {
                        show: true,
                        position: 'left',
                        formatter: function () {
                            return con
                        },
                        color: '#fff',
                        fontSize: 0.7 * w,
                    },
                    z: 1000
                },
                {
                    type: 'pictorialBar',
                    itemStyle: {
                        normal: {
                            color: '#193040'
                        }
                    },
                    data: [max],
                    animationDuration: 0,
                    symbolRepeat: 'fixed',
                    // symbolMargin: '20%',
                    symbol: 'roundRect',
                    symbolSize: [0.5 * w, w],
                    label: {
                        show: true,
                        position: 'right',
                        formatter: function () {
                            return Math.floor(val * 100 / max) + '%'
                        },
                        color: '#fff',
                        fontSize: 0.7 * w,
                    }
                }
            ]
        };
        chart.setOption(option)
    }
    draw('.shoeChart', 52563, '完成率', 65000, '#09c4ca')
    draw('.clothesChart', 32563, '完成率', 45000, '#09c4ca')
    draw('.mzChart', 12563, '完成率', 35000, '#09c4ca')


    // 折线图
    function lineChart(ele) {
        var chart = echarts.init(document.querySelector(ele));

        var xdata = [];
        var dataArr = [];
        for (var i = 1; i < 30; i++) {
            xdata.push(i);
            dataArr.push(Math.floor(Math.random() * 20 + 5))
        }
        var max = Math.max.apply(null, dataArr);

        var seriesName = '';
        option = {
            grid: {
                left: "5%",
                //   right: "2%",
                bottom: "5%",
                top: "15%",
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: xdata,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 0.5 * w
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'transparent',
                        width: 2 //这里是为了突出显示加上的
                    }
                }
            },
            tooltip: {
                show: true,
                trigger: 'item'
            },
            yAxis: [{
                type: 'value',
                // name: '立方米',
                min: 0,
                max: 25,
                axisLabel: {
                    formatter: '{value}k',
                    textStyle: {
                        color: '#fff',
                        fontSize: 0.5 * w
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'transparent',
                        width: 2 //这里是为了突出显示加上的
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: seriesName,
                type: 'line',
                stack: '总量',
                symbol: 'none',
                smooth: false,
                symbol: "circle",
                itemStyle: {
                    normal: {
                        color: '#34a39a',
                        lineStyle: {
                            color: "#34a39a",
                            width: 2
                        },
                        areaStyle: {
                            //color: '#94C9EC'
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#08808b"
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0,0.2)',
                            }
                            ])

                        }
                    }
                },
                data: dataArr
            },]
        };

        var index = 0; //播放所在下标
        var mTime = setInterval(function () {
            chart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: index
            });
            index++;
            if (index > xdata.length) {
                index = 0;
            }
        }, 1500);


        chart.setOption(option)
    }
    lineChart('.lineChart')

    // 中间背景雨
    function rainBg() {
        var c = document.querySelector(".rain");
        var ctx = c.getContext("2d");//获取canvas上下文
        var w = c.width = document.querySelector('.total').clientWidth;
        var h = c.height = document.querySelector('.total').clientHeight;
        //设置canvas宽、高

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        function RainDrop() { }
        //雨滴对象 这是绘制雨滴动画的关键
        RainDrop.prototype = {
            init: function () {
                this.x = random(0, w);//雨滴的位置x
                this.y = h;//雨滴的位置y
                this.color = 'hsl(180, 100%, 50%)';//雨滴颜色 长方形的填充色
                this.vy = random(4, 5);//雨滴下落速度
                this.hit = 0;//下落的最大值
                this.size = 2;//长方形宽度
            },
            draw: function () {
                if (this.y > this.hit) {
                    var linearGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.size * 30)
                    // 设置起始颜色
                    linearGradient.addColorStop(0, '#14789c')
                    // 设置终止颜色
                    linearGradient.addColorStop(1, '#090723')
                    // 设置填充样式
                    ctx.fillStyle = linearGradient
                    ctx.fillRect(this.x, this.y, this.size, this.size * 50);//绘制长方形，通过多次叠加长方形，形成雨滴下落效果
                }
                this.update();//更新位置
            },
            update: function () {
                if (this.y > this.hit) {
                    this.y -= this.vy;//未达到底部，增加雨滴y坐标
                } else {
                    this.init();
                }
            }
        };

        function resize() {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
        }

        //初始化一个雨滴

        var rs = []
        for (var i = 0; i < 10; i++) {
            setTimeout(function () {
                var r = new RainDrop();
                r.init();
                rs.push(r);
            }, i * 300)
        }

        function anim() {
            ctx.clearRect(0, 0, w, h);//填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
            for (var i = 0; i < rs.length; i++) {
                rs[i].draw();//绘制雨滴
            }
            requestAnimationFrame(anim);//控制动画帧
        }

        window.addEventListener("resize", resize);
        //启动动画
        anim()

    }
    rainBg()

    // 中间虚线
    function dashed() {
        var canvas = document.querySelector('.dashed')
        var ctx = canvas.getContext('2d')
        var w = canvas.width = document.querySelector('.total').clientWidth
        var h = canvas.height = document.querySelector('.total').clientHeight / 3 * 2
        ctx.lineWidth = 3
        ctx.setLineDash([3, 3]);
        ctx.fillStyle = '#93f8fb'
        ctx.shadowOffsetX = 0;
        // 阴影的y偏移
        ctx.shadowOffsetY = 0;
        // 阴影颜色
        ctx.shadowColor = '#93f8fb';
        // 阴影的模糊半径
        ctx.shadowBlur = 15;
        ctx.save()  //缓存初始状态
        // 绘制第一条曲线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 11 * 2, h / 3, w / 5 * 2, h);
        grd.addColorStop(0, "#54e2e6");
        grd.addColorStop(1, "#065261");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 2, h)
        ctx.quadraticCurveTo(w / 5, h / 6 * 5, w / 11 * 2, h / 3);
        ctx.stroke();
        // 绘制第一条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 11 * 2, h / 3)
        ctx.arc(w / 11 * 2, h / 3, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第二条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 11 * 3.3, h / 2, w / 3 * 1.1, h / 6 * 5);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 3 * 1.1, h / 6 * 5)
        ctx.quadraticCurveTo(w / 5 * 1.5, h / 6 * 4.2, w / 11 * 3.3, h / 2);
        ctx.stroke();
        // 绘制第二条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 11 * 3.3, h / 2)
        ctx.arc(w / 11 * 3.3, h / 2, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第三条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 3 * 1.4, h / 5, w / 5 * 2, h / 2);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 2, h / 2 )
        ctx.quadraticCurveTo(w / 3 * 1.2, h / 4 * 1.4, w / 3 * 1.4, h / 5);
        ctx.stroke();
        // 绘制第三条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 3 * 1.4, h / 5)
        ctx.arc(w / 3 * 1.4, h / 5, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第四条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 5 * 3.1, h / 3*1.2, w / 5 * 3.2, h / 2 * 1.5);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 3.2, h / 2 * 1.5)
        ctx.quadraticCurveTo(w / 5 * 3.35, h / 2 * 1.2, w / 5 * 3.1, h / 3*1.2);
        ctx.stroke();
        // 绘制第四条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo( w / 5 * 3.1, h / 3*1.2)
        ctx.arc( w / 5 * 3.1, h / 3*1.2, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第五条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 5 * 3.3, h / 4, w / 5 * 3.2, h / 2 * 1.9);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 3.03, h / 2 * 1.9)
        ctx.quadraticCurveTo(w / 5 * 3.8, h / 2 * 1.2, w / 5 * 3.3, h / 4);
        ctx.stroke();
        // 绘制第五条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 5 * 3.3, h / 4)
        ctx.arc(w / 5 * 3.3, h / 4, 5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        ctx.save()
        // 绘制第六条线
        ctx.beginPath()
        var grd = ctx.createLinearGradient(w / 5 * 3.8, h / 2*1.2, w / 5 * 2.9, h);
        grd.addColorStop(0, "#e08d03");
        grd.addColorStop(1, "#2e6a5c");
        ctx.strokeStyle = grd;
        ctx.moveTo(w / 5 * 2.9, h)
        ctx.quadraticCurveTo(w / 5 * 3.7, h / 2 * 1.6, w / 5 * 3.8, h / 2*1.2);
        ctx.stroke();
        // 绘制第六条曲线上的圆光效果
        ctx.beginPath()
        ctx.moveTo(w / 5 * 3.8, h / 2*1.2)
        ctx.arc(w / 5 * 3.8, h / 2*1.2, 5, 0, Math.PI * 2)
        ctx.fill()
    }
    dashed()
})