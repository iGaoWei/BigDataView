(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('data-content-line'));

    var option = {
        xAxis: {
            type: 'category',
            data: ['2010.03.01', '2010.03.01', '2010.03.01', '2010.03.01', '2010.03.01', '2010.03.01', '2010.03.01','2010.03.01','2010.03.01','2010.03.01','2010.03.01','2010.03.01'],
            axisLabel: {
                // X 轴标签
                rotate: 40,
                fontSize: 10
            },
            // 坐标轴线相关设置设置
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick:{
                inside:true
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            name:'℃', 
            nameTextStyle:{
                color:'#52d2ff',
                fontSize:20
            },
            scale:true,
            axisTick:{
                inside:true
            }
        },
        series: [{
            data: [27.5, 30, 32.5, 26, 25, 30,26.5, 30.5, 26.8, 35, 29.7, 30],
            type: 'line',
            smooth: true,
            lineStyle:{
                color:'#4ab188',
            },
            areaStyle:{
                color:{
                    x: 0,
                    y: 0,
                    x2:0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#4ab188' // 0% 处的颜色
                    }, {
                        offset: 0.5, color: '#085099' // 100% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(8,80,153,0.05)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false},
                }
            },
            itemStyle:{
                color:'#4ab188'
            }
        }]
    };


    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})()