var myChart = echarts.init(document.querySelector(".rightUp .chart"));
var option = {
    title: {
        text: '00:00',
        left: '0%',
        bottom: '-3%',
        textStyle: {
            fontSize: 30,
            color: '#d7d7d7'
        }
    },
    grid: {
        left: '10%',
        right: '0%',
        bottom: '0%',
        top: '4%',
        containLabel: true
    },
    xAxis: {
        max: 'dataMax',
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#fcbad3',
                fontSize: 11,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fcbad3'
            },
        },
        position: 'top',
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        inverse: true,
        position: 'right',
        axisLabel: {
            textStyle: {
                color: function (params, index) {
                    var colorList = [
                        '#6bc0fb', '#b0a0d4', '#fedd8b', '#92dcd7',
                        '#b8edff', '#ffb5a6', '#ff8d8d'];
                    var i = 5;
                    return colorList[i]
                },
            },
        },
        axisLine: {
            lineStyle: {
                color: '#dfdfce'
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
            data: [111,555,444,111,222,666,777],
            label: {
                show: true,
                position: 'left',
                color: '#fff',
                valueAnimation: true,
            },
            itemStyle: {
                color: function (params) {
                    var colorList = [
                        '#6bc0fb', '#b0a0d4', '#fedd8b', '#92dcd7',
                        '#b8edff', '#ffb5a6', '#ff8d8d'];
                    var i = 6;
                    var col = new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(165, 159, 215, .7)',
                    }, {
                        offset: 1,
                        color: colorList[i]
                    }
                    ]);
                    return col
                },
                barBorderRadius: [7, 0, 0, 7],
            },
            barWidth: 17,
        }
    ],
    animationEasingUpdate: 'quinticInOut',
    animationDurationUpdate: 1000,

};
var i = 5;
function run() {

    if(!option.title) {
        option.title = {}; // 确保 option.title 是一个空对象
    }

    option.series[0].data = [111,555,444,111,222,666,777];
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

    // setTimeout(function () {
    //     run();
    // }, 0);
    // setInterval(function () {
    //     run();
    //     console.log(2345678);
    // }, 3000);
});