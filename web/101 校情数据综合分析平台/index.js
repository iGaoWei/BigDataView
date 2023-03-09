// 人员编制数
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1_a .chart"));
    data = [{
            name: "空闲数",
            value: 58
        },
        {
            name: "已预约数",
            value: 64
        }
    ];
    arrName = getArrayValue(data, "name");
    arrValue = getArrayValue(data, "value");
    sumValue = eval(arrValue.join('+'));
    objData = array2obj(data, "name");
    optionData = getData(data)

    function getArrayValue(array, key) {
        var key = key || "value";
        var res = [];
        if (array) {
            array.forEach(function(t) {
                res.push(t[key]);
            });
        }
        return res;
    }

    function array2obj(array, key) {
        var resObj = {};
        for (var i = 0; i < array.length; i++) {
            resObj[array[i][key]] = array[i];
        }
        return resObj;
    }

    function getData(data) {
        var res = {
            series: [],
            yAxis: []
        };
        for (let i = 0; i < data.length; i++) {
            // console.log([70 - i * 15 + '%', 67 - i * 15 + '%']);
            res.series.push({
                name: '',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: data[i].value,
                    name: data[i].name
                }, {
                    value: sumValue - data[i].value,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.series.push({
                name: '',
                type: 'pie',
                silent: true,
                z: 1,
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
                center: ["30%", "55%"],
                label: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false
                    },
                    borderWidth: 5,
                },
                data: [{
                    value: 7.5,
                    itemStyle: {
                        color: "rgb(9, 54, 109)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }, {
                    value: 2.5,
                    name: '',
                    itemStyle: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }]
            });
            res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%");
        }
        return res;
    }

    option = {

        legend: {
            show: true,
            icon: "circle",
            top: '10%',
            bottom: '53%',
            left: "30%",
            data: arrName,
            width: 40,
            padding: [0, 6],
            itemGap: 5,
            formatter: function(name) {
                return "{title|" + name + "}{value|" + (objData[name].value) + "}  "
            },

            textStyle: {
                rich: {
                    title: {
                        fontSize: 14,
                        lineHeight: 15,
                        color: "#fff"
                    },
                    value: {
                        fontSize: 12,
                        lineHeight: 15,
                        color: "rgb(0, 178, 246)"
                    }
                }
            },
        },
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
        },
        color: ['rgb(24, 183, 142)', 'rgb(1, 179, 238)', 'rgb(22, 75, 205)', 'rgb(52, 52, 176)'],
        xAxis: [{
            show: false
        }],
        series: optionData.series
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();
//装备平均使用寿命
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1_b .chart"));
    // 指定配置和数据
    var maxData = 200;
    var ydata = ["统招本科", "大专", "高职", "高职2+3", "专升本", ]; //y轴
    var dataArr = [1000, 4002, 2500, 2081, 2586, ]; //色块
    var whiteBar = [15, 31, 34, 40, 42];
    var balckBar = [4895, 4895, 4895, 4895, 4895]; //背景色
    var rich = { //富文本
        white: {
            color: '#2ad1d2',
            fontSize: 14,
            // padding: [0, 25]
        }
    };
    option = {

        "grid": {
            "left": "30%",
            "top": 10,
            "bottom": 10
        },
        "tooltip": {
            "trigger": "item",
            "textStyle": {
                "fontSize": 12
            },
            "formatter": "{b0}:{c0}"
        },
        "xAxis": {
            "max": 5000,
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
                "data": ydata,
                "axisLine": {
                    "show": false
                },
                "axisTick": {
                    "show": false
                },
                "axisLabel": {
                    "margin": 10,
                    "textStyle": {
                        "color": "#e4e7e7",
                        "fontSize": 10
                    }
                }
            },

        ],
        "series": [{ //内
                type: 'bar',
                barWidth: 20,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        textStyle: {
                            color: '#fff'
                        },
                    }
                },
                legendHoverLink: false,
                silent: true,
                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#3279e2' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#45b9e7' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    } //底色
                },
                data: dataArr,
                z: 100
            },
            { //外
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: function(data) {
                            return '{white|' + whiteBar[data.dataIndex] + '}'
                        },
                        rich: rich
                    }
                },
                legendHoverLink: false,
                silent: true,
                data: balckBar,
                itemStyle: {
                    color: 'rgba(31, 66, 132,0.2)',
                },
                z: 98
            },
            { //分隔
                "type": "pictorialBar",
                "animationDuration": 0,
                itemStyle: {
                    color: "rgba(0,0,0,0.7)"
                },
                "symbolRepeat": "fixed",
                "symbolMargin": "8",
                symbol: 'rect',
                "symbolClip": true,
                "symbolSize": [2, 20],
                "symbolPosition": "start",
                "symbolOffset": [
                    0, 0
                ],
                // "symbolBoundingData": 5000,
                "data": balckBar,
                z: 101
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });


})();

//装备保养情况
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1_c .chart"));
    // 指定配置和数据
    //数据

    let xLabel = ['红旗校区', '青山湖校区', '瑶湖校区']
    let goToSchool = ["40", "60", "22", "85", "50", "40"]
    let goOutSchool = ["20", "50", "12", "65", "30", "60"]

    option = {
        backgroundColor: '',
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'transparent',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(126,199,255,0)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(126,199,255,1)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(126,199,255,0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            },
            formatter: (p) => {
                let dom = `<div style="width: 79px;
	height: 50px;;color:#fff;position: relative;">
        <svg style="position: absolute;top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);" class="svg" xmlns="http://www.w3.org/2000/svg" width="100" height="71" viewBox="0 0 84 55">
      <defs>
        <style>
          .cls-1 {
            fill: #07172c;
            fill-opacity: 0.8;
            stroke: #a7d8ff;
            stroke-linejoin: round;
            stroke-opacity: 0.2;
            stroke-width: 1px;
            fill-rule: evenodd;
          }

        </style>
      </defs>
      <path id="矩形_419" data-name="矩形 419" class="cls-1" d="M266,595h74v50H266V624.046L261,620l5-3.984V595Z"
        transform="translate(-258.5 -592.5)" />
    </svg>
        <div style="padding: 4px 8px 4px 14px;display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;position: relative;z-index: 1;">
            <div style="margin-bottom: 4px;width:100%;display:${p[0]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[0]?p[0].seriesName:''}</span>
                <span style="font-size:14px;color:#fff;">${p[0]?p[0].data:''}</span>
            </div>
            <div style="width:100%;height:100%;display:${p[1]?'flex':'none'};justify-content:space-between;align-items:center;">
                <span style="font-size:14px;color:#7ec7ff;">${p[1]?p[1].seriesName:''}</span>
                <span style="font-size:14px;color:#fff;">${p[1]?p[1].data:''}</span>
            </div>
        </div>
    </div>`
                return dom
            }
        },
        legend: {
            align: "left",
            right: '10%',
            top: '',
            type: 'plain',
            textStyle: {
                color: '#7ec7ff',
                fontSize: 12
            },
            // icon:'rect',
            itemGap: 25,
            itemWidth: 18,
            icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

            data: [{
                    name: '已入住'
                },
                {
                    name: '未入住'
                }
            ]
        },
        grid: {
            top: '15%',
            left: '10%',
            right: '10%',
            bottom: '15%',
            // containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#062A63'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ececec',
                    padding: 0,
                    fontSize: 12
                },
                formatter: function(data) {
                    return data
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#062A63'
                },
            },
            axisTick: {
                show: false,
            },
            data: xLabel
        }],
        yAxis: [{
            name: '',
            nameTextStyle: {
                color: "#7ec7ff",
                fontSize: 12,
                padding: 0
            },
            min: 0,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#062A63'
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#062A63"
                }

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ececec',
                    padding: 0
                },
                formatter: function(value) {
                    if (value === 0) {
                        return value
                    }
                    return value
                }
            },
            axisTick: {
                show: false,
            },
        }],
        series: [{
            name: '已入住',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: "rgba(25,163,223,1)", // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color: "rgba(25,163,223,1)",
                borderColor: "#646ace",
                borderWidth: 2

            },
            tooltip: {
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(25,163,223,.3)"


                        },
                        {
                            offset: 1,
                            color: "rgba(25,163,223, 0)"
                        }
                    ], false),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: goToSchool
        }, {
            name: '未入住',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: "rgba(10,219,250,1)", // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
                color: "rgba(10,219,250,1)",
                borderColor: "#62C0B3",
                borderWidth: 2

            },
            tooltip: {
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(10,219,250,.3)"
                        },
                        {
                            offset: 1,
                            color: "rgba(10,219,250, 0)"
                        }
                    ], false),
                    shadowColor: 'rgba(98,192,179, 0.5)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: goOutSchool
        }]
    };
    let len = 0
    setInterval(() => {
        if (len === xLabel.length) {
            len = 0
        }
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: len,
        })
        len++
    }, 1000)

    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });


})();



//装备备件充足率

(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line2_a .chart"));
    var plantCap = [{
        name: '147',
        value: '听课'
    }, {
        name: '15',
        value: '看手机 '
    }, {
        name: '23',
        value: '交头接耳 '
    }, {
        name: '7',
        value: '睡觉'
    }];

    var datalist = [{
        offset: [85, 80],
        symbolSize: 40,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#29c0fb'
        }, {
            offset: 1,
            color: '#2dc5b9'
        }]),
    }, {
        offset: [15, 70],
        symbolSize: 38,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#35d17e'
        }, {
            offset: 1,
            color: '#49ddb2'
        }]),
    }, {
        offset: [68, 40],
        symbolSize: 35,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#277aec'
        }, {
            offset: 1,
            color: '#57c5ec'
        }]),
    }, {
        offset: [18, 20],
        symbolSize: 35,
        opacity: .95,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#e54948'
        }, {
            offset: 1,
            color: '#f08456'
        }]),
    }];
    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.name + '\n' + item.value,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 13,
                        lineHeight: 17,
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }
    option = {

        grid: {
            show: false,
            top: 0,
            bottom: 0
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
        }],
        series: [{
            type: 'effectScatter',
            // symbol: 'circle',
            // symbolSize: 120,
            symbolSize: function(val) {
                return Math.max(val[2] / 100, 8);
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#fff',
                    textStyle: {
                        fontSize: '14',

                    }
                },
            },
            itemStyle: {
                normal: {
                    color: '#00acea'
                }
            },
            data: datas
        }, {
            // name: 'pm2.5',
            type: 'effectScatter',
            data: datas,
            symbolSize: function(val) {
                return Math.max(val[2] / 200, 8);
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#fff',
                    textStyle: {
                        fontSize: '14'
                    }
                },
            },
            itemStyle: {
                normal: {
                    color: '#FF8C00',
                    position: 'right',
                    show: true
                }
            }
        }]
    };

    // 指定配置和数据
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();

//故障上报率
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line2_b .chart"));
    // 指定配置和数据
    var myColor = ['#ad90e2', '#1765d1', '#da3829', '#d0a00e', '#34da62', '#00e9db'];
    option = {

        grid: {
            left: '11%',
            top: '12%',
            right: '0%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '13',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '10',
                }
            },
            data: ['林业学院', '商学院', '通信与信息学院', '工业与设计学院', '园林与建筑学院', '汽车机电学院']
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '14',
                }
            },
            data: ['4', '13', '25', '29', '38', '44']
        }, {
            name: '分拨延误TOP 10',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '14',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }],
        series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [3, 11, 21, 23, 29, 32],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '16',
                        }
                    }
                },
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 10,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100, 100],
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 10,
                    }
                },
                z: 0
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: [0, 0, 0, 0, 0, 0, ],
                yAxisIndex: 2,
                symbolSize: 20,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        opacity: 1,
                    }
                },
                z: 2
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//装备质量
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line2_c .chart"));
    // 指定配置和数据
    option = {

            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true
                    }
                }
            },
            grid: {
                left: "4%",
                top: "18%",
                right: "5%",
                bottom: "22%"
            },
            legend: {
                data: ["总课数", "被巡课人数", "巡课教师人数"],
                top: "1%",
                textStyle: {
                    color: "#fff",
                    fontSize: 10
                }
            },
            xAxis: {
                data: [
                    "授课教师1",
                    "授课教师2",
                    "授课教师3",
                    "授课教师4",
                    "授课教师5"

                ],
                offset: '27',
                axisLine: {
                    show: true, //隐藏X轴轴线
                    lineStyle: {
                        color: "#3d5269",
                        width: 1
                    }
                },
                axisTick: {
                    show: true, //隐藏X轴刻度
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff", //X轴文字颜色
                        fontSize: 10
                    },
                    interval: 0,
                    rotate: 20
                }
            },
            yAxis: [{
                    type: "value",
                    name: "",
                    nameTextStyle: {
                        color: "#fff",
                        fontSize: 10
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "#3d5269"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    offset: '-10',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#fff",
                            fontSize: 10
                        }
                    }
                },
                {
                    type: "value",
                    name: "",
                    nameTextStyle: {
                        color: "#fff",
                        fontSize: 10
                    },
                    position: "right",
                    right: 15,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "#fff",
                            width: 2
                        }
                    },

                    axisLabel: {
                        show: false,
                        textStyle: {
                            color: "#fff",
                            fontSize: 10
                        }
                    }
                }
            ],
            series: [{
                    name: "被巡课人数",
                    type: "bar",
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#00FFFF"
                                },
                                {
                                    offset: 1,
                                    color: "#0080FF"
                                }
                            ])
                        }
                    },
                    data: [24, 45, 43, 35, 76]
                },
                {
                    name: "总课数",
                    type: "bar",
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#E29052"
                                },
                                {
                                    offset: 1,
                                    color: "#FA5A53"
                                }
                            ])
                        }
                    },
                    data: [133, 23, 114, 67, 89]
                },
                {
                    name: "巡课教师人数",
                    type: "line",
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 6, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#26D9FF",
                        borderColor: "#26D9FF",
                        width: 2,
                        shadowColor: "#26D9FF",
                        shadowBlur: 2
                    },
                    lineStyle: {
                        color: "#26D9FF",
                        width: 2,
                        shadowBlur: 2
                    },
                    data: [13, 18, 11, 6, 9]
                }
            ]
        }
        // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });


})();

//现有装备数
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".line3_e .chart"));
    option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#dddc6b"
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },

        xAxis: [{
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.9)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

                data: [
                    "教室1",
                    "教室2",
                    "教室3",
                    "教室4",
                    "教室5",
                    "教室6",
                    "教室7",
                    "教室8",
                    "教室9",
                    "教室10",

                ]
            },
            {
                axisPointer: { show: false },
                axisLine: { show: false },
                position: "bottom",
                offset: 20
            }
        ],

        yAxis: [{
            type: "value",
            axisTick: { show: false },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.9)",
                    fontSize: 12
                }
            },

            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: "实到人数",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(1, 132, 213, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(1, 132, 213, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0184d5",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40,
                    30,
                    60,
                    20,
                    40,
                    20,
                    40
                ]
            },
            {
                name: "应到人数",
                type: "line",
                smooth: true,
                symbol: "circle",
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1, [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#00d887",
                        borderColor: "rgba(221, 220, 107, .1)",
                        borderWidth: 12
                    }
                },
                data: [
                    50,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    50,
                    60,
                    40,
                    60,
                    40,
                    80,
                    30,
                    50,
                    60,
                    10,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40,
                    50,
                    30,
                    70,
                    20,
                    50,
                    10,
                    40
                ]
            }
        ]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();






//建议补充装备数
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line3_f .chart"));
    // 指定配置和数据
    option = {

        color: ['#287CEB', '#3CD58F', '#28BFF3', '#E7564B'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['助教', '讲师', '副教授', '教授'],
            textStyle: {
                fontSize: 12,
                color: 'rgb(255,255,255,0.8)'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: '10',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(255,255,255,0.2)',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    opacity: 0.3,
                },
            },
            axisTick: {
                show: false,
            },
        },
        yAxis: {
            axisLine: {

                lineStyle: {
                    // color: '#fff',
                    color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: 'rgba(255,255,255,0.8)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(255,255,255,0)',
                        },
                    ]),
                    width: 1,
                },
            },
            axisLabel: { textStyle: { fontSize: 10, color: '#fff' } },
            type: 'category',
            data: ['A学院', 'B学院', 'C学院', 'D学院']
        },
        series: [{
                name: '助教',
                type: 'bar',
                barWidth: 10,
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [32, 39, 46, 58]
            },
            {
                name: '讲师',
                type: 'bar',
                barWidth: 10,
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [56, 36, 85, 66]
            },
            {
                name: '副教授',
                type: 'bar',
                barWidth: 10,
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [22, 36, 45, 38]
            },
            {
                name: '教授',
                type: 'bar',
                barWidth: 10,
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [15, 21, 18, 14]
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });


})();

(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1_d .chart"));

    var option = {
        color: ['#d0a00e', '#da3829'],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center' ,
            textStyle: {
                color: '#7ec7ff',
                fontSize: 12
            }
        },
        series: [
            {
                name: '男女比例',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: 1048, name: '男', textStyle:{
                            color: '#1765d1'
                        }
                    },
                    {
                        value: 735, name: '女', textStyle:{
                            color: '#da3829'
                        } }

                ]
            }
        ]
    };
    // 指定配置和数据
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();




(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".line1_f .chart"));

    var option = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '60%'],
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                splitNumber: 10,
                itemStyle: {
                    color: '#FFAB91'
                },
                progress: {
                    show: true,
                    width: 30
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 20
                    }
                },
                axisTick: {
                    distance: -35,
                    splitNumber: 10,
                    lineStyle: {
                        width: 2,
                        color: '#999'
                    }
                },
                splitLine: {
                    distance: -42,
                    length: 10,
                    lineStyle: {
                        width: 3,
                        color: '#999'
                    }
                },
                axisLabel: {
                    distance: -10,
                    color: '#999',
                    fontSize: 20
                },
                anchor: {
                    show: false
                },
                title: {
                    show: false
                },
                detail: {
                    valueAnimation: true,
                    width: '90%',
                    lineHeight: 40,
                    borderRadius: 8,
                    offsetCenter: [0, '-15%'],
                    fontSize: 20,
                    fontWeight: 'bolder',
                    formatter: '{value} %',
                    color: 'auto'
                },
                data: [
                    {
                        value: 34.7
                    }
                ]
            },
            {
                type: 'gauge',
                center: ['50%', '60%'],
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 100,
                itemStyle: {
                    color: '#FD7347'
                },
                progress: {
                    show: true,
                    width: 8
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                detail: {
                    show: false
                },
                data: [
                    {
                        value: 34.7
                    }
                ]
            }
        ]
    };
    // 指定配置和数据
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    setInterval(function () {
        const random = +(Math.random() * 60).toFixed(2);
        myChart.setOption({
            series: [
                {
                    data: [
                        {
                            value: random
                        }
                    ]
                },
                {
                    data: [
                        {
                            value: random
                        }
                    ]
                }
            ]
        });
    }, 2000);

})();
