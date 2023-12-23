var myChart = echarts.init(document.querySelector(".leftUp .chart"));
var option = {
    title: {
        text: '00:00',
        right: '1%',
        bottom: '0%',
        textStyle: {
            fontSize: 30,
            color: '#cecece'
        }
    },
    tooltip: {},
    grid: {
        left: '2%',
        right: '8%',
        bottom: '8%',
        top: '0%',
        containLabel: true
    },
    xAxis: {
        max: 'dataMax',
        axisLabel: {
            textStyle: {
                color: '#fcbad3',
                fontSize: 10,
            }
        },
        position: 'top',
        splitLine: {
            lineStyle: {
                color: '#848484'
            }
        },
    },
    yAxis: {
        type: 'category',
        data: [1,2,3,5,8,6],
        inverse: true,
        axisLabel: {
            textStyle: {
                color: function (params, index) {
                    var colorList = ['#6bc0fb', '#b0a0d4', '#fedd8b', '#92dcd7'];
                    var i = 2;
                    return colorList[i]
                },
                fontSize: 12,
            },
        },
        axisLine: {
            lineStyle: {
                color: '#d7d7d7'
            },
        },
        axisTick: {
            show: false
        },
        animationDuration: 300,
        animationDurationUpdate: 300,
    },
    series: [
        {
            realtimeSort: true,
            type: 'bar',
            data: [88,22,44,55,66,99],
            label: {
                show: true,
                position: 'right',
                fontSize: 10,
                valueAnimation: true,
                color: '#fff'
            },
            itemStyle: {
                color: function (params) {
                    var colorList = ['#6bc0fb', '#b0a0d4', '#fedd8b', '#92dcd7'];
                    var i = 1;
                    var col = new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                        offset: 0,
                        color: 'rgba(165, 159, 215, .7)',
                    }, {
                        offset: 1,
                        color: colorList[i]
                    }
                    ]);
                    return col
                },
                barBorderRadius: [0, 7, 7, 0],
            },
            barWidth: 18,
        }
    ],
    animationEasingUpdate: 'quinticInOut',
    animationDurationUpdate: 1000,

};
var i = 0;
function run() {
    option.series[0].data = [7,8,9,10,15,28];
    option.title.text = '0' + i + ':00';
    if (i > 9) {
        option.title.text = i + ':00';
    }
    i += 1;
    if (i > 23) {
        i = 0;
    }
    myChart.setOption(option);
}
myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();


});

setTimeout(function () {
    run();
}, 0);
setInterval(function () {
    run();
}, 1000);
