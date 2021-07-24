
var myChart = echarts.init(document.getElementById('aleftboxtbott'));
option = {
    color: ['#7ecef4'],
    backgroundColor: 'rgba(1,202,217,.2)',
    title: {
        top: 5,
        left: 20,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.6)'
        },
        text: '环比类型：月环比'
    },
    legend: {
        right: 10,
        top: 5,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.6)'
        },
        data: ['2020年5月', '2020年6月']
    },
    grid: {
        left: 20,
        right: 20,
        top: 30,
        bottom: 2,
        containLabel: true
    },

    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,0)"
        },
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
    
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.5)"
        },
        data: ['用水量 (m³)', '用电量 (°)', '水费 (元)', '电费 (元)']
    },
    series: [{
        name: '2020年5月',
        type: 'bar',
        barWidth: 15,
        label: {
            show: true,
            position: 'inside'
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(77,114,217,.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(117,72,159,.7'
                    }]
                )
            }
        },
        data: [18203, 23489, 29034, 39098]
    }, {
        name: '2020年6月',
        type: 'bar',
        barWidth: 15,
        label: {
            show: true,
            position: 'inside'
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(230,253,139,.7)'
                    }, {
                        offset: 1,
                        color: 'rgba(41,220,205,.7)'
                    }]
                )
            }
        },
        data: [19203, 24489, 30034, 40098]
    }]
};
myChart.setOption(option);