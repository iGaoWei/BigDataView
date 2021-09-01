/*大屏*/
(function () {
    'use strict';
    var myChart = echarts.init(document.getElementById('left-mid-nong'));

    // 指定图表的配置项和数据
    var option = {
        tooltip: {},
        legend: [{
                // 设置布局方向
                orient: 'vertical',
                // 文字和图形对齐方式
                align: 'left',
                right: '25%',
                top: '10%',
                // 图形形状
                icon: 'circle',
                padding: [20, 0, 0, 0],
                itemGap: 20,
                textStyle: {
                    borderRadius: 100,
                    color:'#fff'
                },
                data: ["荔枝", '黄瓜', "白菜", "蘑菇", "草莓"]
            },
            {
                orient: 'vertical',
                right: '6%',
                top: '10%',
                padding: [20, 0, 0, 0],
                itemGap: 20,
                // 文字和图形对齐方式
                align: 'left',
                // 图形形状
                icon: 'circle',
                textStyle: {
                    borderRadius: 100,
                    color:'#fff'
                },
                data: ["南果梨", "大葱", "西瓜", "花生", "棚"]
            }
        ],
        series: [{
            name: '销量',
            type: 'pie',
            radius: '50%',
            right: '40%',
            bottom:'10%',
            data: [{
                    value: 200,
                    name: '荔枝'
                },
                {
                    value: 156,
                    name: '黄瓜'
                },
                {
                    value: 400,
                    name: '白菜'
                },
                {
                    value: 991,
                    name: '蘑菇'
                },
                {
                    value: 332,
                    name: '草莓'
                },
                {
                    value: 100,
                    name: '南果梨'
                },
                {
                    value: 455,
                    name: '大葱'
                },
                {
                    value: 378,
                    name: '西瓜'
                },
                {
                    value: 230,
                    name: '花生'
                },
                {
                    value: 50,
                    name: '棚'
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })

    
})()