var myChart = echarts.init(document.querySelector(".rightMid .chart"));
var option = {
    color: ['#9658c3', '#6c6be2', '#01aebf', '#18b794'],
    tooltip: {},
    grid: {
        containLabel: true,
    },
    legend: {
        orient: 'vertical',
        right: '2%',
        bottom: '2%',
        textStyle: {
            color: '#d7d7d7'
        }
    },
    series: [
        {
            type: 'funnel',
            right: '5%',
            top: 10,
            bottom: 0,
            width: '80%',
            minSize: '1%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            data: [11,22,55,8,5,6,82,5,6,6].sort(function (a, b) {
                return a.value - b.value
            }),
            label: {
                normal: {
                    formatter: function (params) {
                        return params.name + ' : ' + params.value +
                            '   \n' + params.percent + '%';
                    },
                    position: 'left',
                    textBorderColor: 'transparent',
                    fontSize: 13,
                    lineHeight: 17,
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 30,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.2)'
                }
            }
        }
    ]


};
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});