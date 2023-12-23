var myChart = echarts.init(document.querySelector(".leftDown .chart"));
var option = {
    tooltip: {
        trigger: 'axis',
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
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        left: '20%',
        top: '-2%',
        textStyle: {
            color: '#e6e6e6',
            fontSize: 11,
        }
    },
    grid: {
        top: '12%',
        left: '5%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff',
            interval: 0,
            textStyle: {
                fontSize: 10
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: 'Registered',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 15,
        lineStyle: {
            normal: {
                color: "#00b3f4",
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 5,
                shadowOffsetX: 5,
            },
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#00b3f4',
            }
        },
        itemStyle: {
            color: "#00b3f4",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,179,244,0.3)'
                },
                    {
                        offset: 1,
                        color: 'rgba(0,179,244,0)'
                    }
                ], false),
                shadowColor: 'rgba(0,179,244, 0.9)',
                shadowBlur: 20
            }
        },
        data: [1211,2122,1233,444,555,2158,2801],
        emphasis: {
            focus: 'series'
        }
    }],

};
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});