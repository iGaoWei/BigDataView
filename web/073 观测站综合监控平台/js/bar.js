/*大屏*/
(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('left-header-nong'));


    var option = {
        title: {
            textStyle: {
                color: '#2b8fff',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        tooltip: {},
        legend: {
            show: false
        },
        xAxis: {
            data: ["日至市", "烟台市", "无锡市", "北京市", "抚顺市", "海城市", "葫芦岛市", "上海市", "上海市", "盘锦市", "沈阳市", "铁岭市", "广州市"],
            axisLabel: {
                // X 轴标签
                rotate: 40,
                fontSize: 10
            },
            // 坐标轴线相关设置设置
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }

        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
                name: '浅蓝',
                type: 'bar',
                data: [2, 4, 6, 2, 8, 12, 7, 10, 15, 4, 6, 4, 7],
                itemStyle: {
                    color: '#52d2ff'
                },
                barWidth: 10,
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 10,
                    color: '#52d2ff'
                }
            },
            {
                name: '深蓝',
                type: 'bar',
                data: [5, 8, 6, 5, 10, 12, 3, 6, 8, 3, 7, 9, 10],
                itemStyle: {
                    color: '#1763ff'
                },
                barWidth: 10,
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 10,
                    color: '#1763ff'
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
    // 屏幕适配
})()