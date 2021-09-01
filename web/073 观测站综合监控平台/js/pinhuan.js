/*大屏*/
(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('left-bottom-nong'));
    // 指定图表的配置项和数据
    var option = {
        tooltip: {},
        series: [{
            name: '销量',
            type: 'pie',
            radius: ['30%', '60%'],
            right: '20%',
            data: [{
                    value: 200,
                    name: '在线',
                    itemStyle: {
                        color: '#5ba3ed'
                    }
                },
                {
                    value: 30,
                    name: '不在线',
                    itemStyle: {
                        color: '#a0fffe'
                    }
                },

            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})()