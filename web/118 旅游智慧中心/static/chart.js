function pieChart(data) {
    var data = data
    var titleArr = [], seriesArr = [];
    colors = [['#389af4', '#dfeaff'], ['#ff8c37', '#ffdcc3'], ['#ff0036', '#ffdcc3'], ['#ffc257', '#ffedcc'], ['#fd6f97', '#fed4e0'], ['#a181fc', '#e3d9fe']]
    data.forEach(function (item, index) {
        titleArr.push(
            {
                text: item.name,
                left: index < 3 ? index * 30 + 17.5 + '%' : (index - 3) * 40 + 17.5 + '%',
                top: index < 3 ? '35%' : '87%',
                bottom: 10,
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '12',
                    color: colors[index][0],
                    textAlign: 'center',

                    left: 10
                },
            }
        );
        seriesArr.push(
            {
                name: item.name,
                type: 'pie',
                clockWise: false,
                radius: [17, 22],
                itemStyle: {
                    normal: {
                        color: colors[index][0],
                        shadowColor: colors[index][0],
                        shadowBlur: 0,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,
                center: [index < 3 ? index * 30 + 20 + '%' : (index - 3) * 40 + 20 + '%', index < 3 ? '18%' : '70%'],
                data: [{
                    value: item.value,
                    label: {
                        normal: {
                            formatter: function (params) {
                                return params.value + '%';
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: colors[index][0]
                            }
                        }
                    },
                }, {
                    value: 100 - item.value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[index][1]
                        },
                        emphasis: {
                            color: colors[index][1]
                        }
                    }
                }]
            }
        )
    });
    return {
        title: titleArr,
        series: seriesArr
    }
}
function barChart(data) {
    return {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '0',
            top: '18%',
            containLabel: true
        },
        legend: {
            data: data.legend,
            right: '2%',
            top: '-4%',
            textStyle: {
                color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
            type: 'category',
            data: data.xAxis,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'

                }
            },
            axisLabel: {
                textStyle: {
                    fontFamily: 'Microsoft YaHei'
                }
            },
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            axisLabel: {}
        },
        series: [{
            name: data.legend[0],
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 12,
                },
            },
            data: data.data[0]
        },
        {
            name: data.legend[1],
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#09bcb7'
                    }]),
                    barBorderRadius: 11,
                }

            },
            data: data.data[1]
        }]
    };
}
function carSpaceNumChart(data) {
    var myColor = ['#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3'];
    return {
        grid: {
            left: '11%',
            top: '12%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        tooltip: {
            trigger: 'axis',
            formatter: v => {
                console.log(v)
                return `
                    <div class=' u-p-2'>
                        <div>${v[0].name}车位占比：${v[0].value}%</div>
                    </div>
                `
            }
        },
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '17',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '13',
                }
            },
            data: data.yAxisName
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '13',
                }
            },
            data: data.yAxisData
        }, {
            name: '车位占比：%',
            nameGap: '50',
            nameTextStyle: {
                color: '#ffffff',
                fontSize: '13',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [],
        }],
        series: [{
            type: 'bar',
            yAxisIndex: 0,
            data: data.data,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: function (param) {
                        return param.value + '%';
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '13',
                    }
                }
            },
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        }, {
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 18,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }]
    };
}
function consumptionChart(data) {
    var scale = 1;
    var echartData = data
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 30 * scale,
            padding: [5, 4],
            align: 'center'
        },
        total: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 14 * scale,
            padding: [21, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 16 * scale,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '100%',
            borderWidth: 1,
            height: 0,
        }
    }
    var color = ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4']
    return {
        tooltip: {
            trigger: 'item',

        },
        legend: {
            selectedMode: false,
            formatter: function (name) {
                // var total = 0; 
                // var averagePercent;
                // echartData.forEach(function(value, index, array) {
                //     total += value.value;
                // });
                // return '{total|' + total + '}';
            },
            data: [echartData[0].name],
            left: 'center',
            top: 'center',
            icon: 'none',
            align: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 13,
                rich: rich
            },
        },
        series: [{
            name: '总消费',
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        var total = 0;
                        var percent = 0; //消费占比
                        echartData.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich
                },
                textStyle: {
                    lineHeight: 0
                }
            },
            labelLine: {
                normal: {
                    length: 14,
                    length2: 3,
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            data: echartData
        }]
    };
}
function lineChart(data) {
    var xData = function () {
        var data = [];
        for (var i = 1; i < 24; i++) {
            data.push(i + "时");
        }
        return data;
    }();

    return {
        tooltip: {
            show: true,
            trigger: 'item'
        },
        grid: {
            borderWidth: 0,
            top: '10%',
            bottom: '30%',
            textStyle: {
                color: "#fff"
            }
        },
        legend: {
            x: '46%',
            top: '0%',
            textStyle: {
                color: '#90979c',
            },
            data: data.legend
        },


        calculable: true,
        xAxis: [{
            type: "category",
            axisLine: {
                lineStyle: {
                    color: "rgba(204,187,225,0.5)",
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            data: xData,
        }],

        yAxis: [{
            type: "value",
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(204,187,225,0.5)",
                }
            },

        }],
        dataZoom: [{
            show: true,
            height: 10,
            xAxisIndex: [0],
            bottom: '10%',

            "start": 0,
            "end": 70,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: "#5B3AAE",
            },
            textStyle: {
                color: "rgba(204,187,225,0.5)",
            },
            fillerColor: "rgba(67,55,160,0.4)",
            borderColor: "rgba(204,187,225,0.5)",

        }, {
            type: "inside",
            show: true,
            height: 10,
            start: 1,
            end: 35
        }],
        series: [{
            name: data.legend[0],
            type: "line",
            symbolSize: 5,
            symbol: 'circle',
            itemStyle: {
                color: "#6f7de3",
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }

            },
            data: data.data[0],
        }, {
            name: data.legend[1],
            type: "line",
            symbolSize: 5,
            symbol: 'circle',
            itemStyle: {
                color: "#c257F6",
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }

            },
            data: data.data[1]
        },]
    }
}
function pieChart1() {
    var scaleData = [{
        'name': '2018年男生',
        'value': 38
    },
    {
        'name': '2017年男生',
        'value': 31
    },
    {
        'name': '2016年男生',
        'value': 29
    },
    {
        'name': '2016年女生',
        'value': 12
    },
    {
        'name': '2017年女生',
        'value': 34
    },
    {
        'name': '2018年女生',
        'value': 39
    },

    ];
    var rich = {
        white: {
            color: '#ddd',
            align: 'center',
            padding: [3, 0]
        }
    };
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };
    var data = [];
    var color = ['red', 'yellow', 'black', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
    for (var i = 0; i < scaleData.length; i++) {
        data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    shadowBlur: 200,
                    borderColor: color[i],
                    shadowColor: color[i]
                }
            }
        }, {
            value: 2,
            name: '',
            itemStyle: placeHolderStyle
        });
    }
    var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [100, 200],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + params.value + '人' + '\n{white|' + '占比' + percent + '%}';
                        } else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    length: 30,
                    length2: 100,
                    show: true,
                    color: '#00ffff'
                }
            }
        },
        data: data
    }];
    option = {
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        series: seriesObj
    }
}
function touristsFlowChart(data) {
    // mock
    let dataArr = data

    // 排序
    let dataArray = dataArr.sort((a, b) => a.NUM - b.NUM)

    // 计算总数
    let total = dataArray.reduce((data, v) => { return data + +v.NUM }, 0)

    // color
    let color = { 0: '#ff5676', 1: '#ffd83e', 2: '#fbff94', 3: '#7daeff' }

    // x轴
    let xdataName = dataArray.map(v => v.NAME)

    // y轴
    let dataNum = dataArray.map((v, i) => ({
        value: +v.NUM,
        itemStyle: {
            color: {
                type: 'linear', x: 1, y: 0, x2: 0, y2: 0, colorStops: [{
                    offset: 0,
                    color: dataArray.length - i - 1 < 3 ? '#ffdae1' : '#ecf3ff' //  0%  处的颜色
                }, {
                    offset: 0.07,
                    color: dataArray.length - i - 1 < 3 ? color[dataArray.length - i - 1] : color['3']  //  93%  处的颜色  
                }, {
                    offset: 1,
                    color: dataArray.length - i - 1 < 3 ? 'rgba(255, 86, 118, .1)' : 'rgba(125,174,255, .1)' //  100%  处的颜色
                }
                ]
            },
        }
    }))

    // 背景色值数据，比最大值多200即可
    let bgData = dataNum.map(v => (+dataNum[dataNum.length - 1].value + 200))

    // tooltip
    let tooltip = {
        trigger: 'axis',
        // formatter: v => {
        //     return `
        //         <div class=' u-p-2'>
        //             <div>${v[0].name}：${v[0].value}</div>
        //         </div>
        //     `
        // }
    }

    // grid
    let grid = { top: '10%', left: '20%', right: '14%', bottom: 0 }

    // xAxis
    let xAxis = {
        splitLine: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false }
    }

    // yAxis
    let yAxis = [{
        type: "category",
        inverse: false,
        data: xdataName,
        axisLabel: {
            formatter: (params, index) => {
                return `{a|${params}}`
            },
            rich: {
                a: {
                    width: 160,
                    fontSize: 12,
                    color: '#fff',
                    padding: [5, 4, 5, 0],
                    align: 'right',
                }
            }
        },
        // 把坐标轴、刻度、坐标线统统不要
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
    }, {
        type: 'category',
        data: dataNum,
        axisLabel: {
            formatter: (params, index) => {
                console.log(params)
                return params
            },
            textStyle: {
                color: '#4fc8d0'
            },
            // align: 'right',
            rich: {
                a: { fontSize: 24, color: '#98bfff', verticalAlign: 'bottom' },
                a1: { fontSize: 28, color: '#ff7f97', verticalAlign: 'bottom' },
                a2: { fontSize: 24, color: '#ffce64', verticalAlign: 'bottom' },
                a3: { fontSize: 24, color: '#e8ed66', verticalAlign: 'bottom' },

                b: { fontSize: 12, color: '#98bfff', verticalAlign: 'bottom' },
                b1: { fontSize: 12, color: '#ff7f97', verticalAlign: 'bottom' },
                b2: { fontSize: 12, color: '#ffce64', verticalAlign: 'bottom' },
                b3: { fontSize: 12, color: '#e8ed66', verticalAlign: 'bottom' },
            }
        },
        // 把坐标轴、刻度、坐标线统统不要
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
    }
    ]

    // series
    let series = [{
        // 背景
        z: 6,
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            color: 'rgba(255,255,255,.1)',
            barBorderRadius: [0, 20, 20, 0]
        },
        data: bgData
    }, {
        type: 'bar',
        barWidth: 10,
        barGap: '-100%',
        itemStyle: {
            color: {
                type: 'linear', x: 1, y: 0, x2: 0, y2: 0, colorStops: [{
                    offset: 0,
                    color: 'rgba(255, 218, 220)' //  0%  处的颜色
                }, {
                    offset: 0.07,
                    color: 'rgba(255, 86, 118)' //  93%  处的颜色
                },
                {
                    offset: 1,
                    color: 'rgba(255, 86, 118, 0)' //  100%  处的颜色
                }
                ],
                global: false //  缺省为  false
            },
            barBorderRadius: [0, 20, 20, 0],
        },
        textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 14
        },
        data: dataNum
    }
    ]

    // 渲染
    return { tooltip, grid, xAxis, yAxis, series }

}
function helpCellChart(datas) {
    var names = ['咨询', '投诉', '其他'];
var values = [300, 200, 50];
var colorList = ['#03acd1', '#fce348', '#fc2d8a'];
var data1 = [];
var data2 = [];
for (var i = 0; i < names.length; i++) {
    data1.push({
        name: names[i],
        value: datas[0][i]
    })
}
    for (var i = 0; i < names.length; i++) {
    data2.push({
        name: names[i],
        value: datas[1][i]
    })
}
    data1.reverse();
    data2.reverse();
// 公用调整
var itemStyle = {
    normal: {
        borderWidth: 5,
        color: function(params) {
            return colorList[params.dataIndex]
        }
    }
}
var leftCenter = ['25%', '50%'],
    rightCenter = ['75%', '50%'],
    radius1 = ['50%', '55%'], // 饼图
    radius3 = ['70%', '71%'] // 线圈
    // 公用调整-end

    return {
        tooltip: {
            trigger: 'item',
        },
        title: [{
                text: '呼入',
                x: '20.7%',
                y: '42%',
                textStyle: {
                    color: '#559dbd',
                    fontSize: 14
                }
            },
            {
                text: '呼出',
                x: '70.3%',
                y: '42%',
                textStyle: {
                    color: '#559dbd',
                    fontSize: 14
                }
            }
        ],
        series: [
            // 左饼图
            {
                // 饼图圈
                type: 'pie',
                zlevel: 3,
                radius: radius1,
                center: leftCenter,
                itemStyle: itemStyle,
                labelLine: {
                    show: false,
                    normal: {
                        length: 5,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: params => {
                            return '';
                        }
                    }
                },
                data: data1,
            },
            {
                // 最外圆圈
                type: 'pie',
                zlevel: 1,
                silent: true, //取消高亮
                radius: radius3,
                center: leftCenter,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 10,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    show: true
                },
                data: data1,
            },

            // 右饼图
            {
                // 饼图圈
                type: 'pie',
                zlevel: 3,
                radius: radius1,
                center: rightCenter,
                itemStyle: itemStyle,
                labelLine: {
                    show: false,
                    normal: {
                        length: 5,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: params => {
                            return '';
                        }
                    }
                },
                data: data2,
            },
            {
                // 线圆圈
                type: 'pie',
                zlevel: 1,
                silent: true, //取消高亮
                radius: radius3,
                center: rightCenter,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex]
                        }
                    }
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 10,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent'
                        }
                    }
                },
                label: {
                    show: true
                },
                data: data2,
            },
        ]
    };
}