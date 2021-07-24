/*大屏*/
(function () {
    var hchart1 = echarts.init(document.getElementById('hchart1'));
    var hchart2 = echarts.init(document.getElementById('hchart2'));
    var hchart3 = echarts.init(document.getElementById('hchart3'));


    var option = [{
            tooltip: {},
            series: [{
                name: '故障次数',
                type: 'pie',
                radius: '65%',
                labelLine: {
                    show: false
                },
                selectedOffset: 30,
                markPoint: {
                    label: {
                        positon: 'inside',
                        color: '#fff'
                    }
                },
                data: [{
                        value: 26,
                        itemStyle: {
                            color: '#1eb0dc'
                        }
                    },
                    {
                        value: 71,
                        itemStyle: {
                            color: '#4b5d71'
                        }
                    },

                ]
            }]
        },
        // huan2
        {
            tooltip: {},
            legend: [{
                // 设置布局方向
                orient: 'vertical',
                // 文字和图形对齐方式
                align: 'left',
                left: '0%',
                top: '30%',
                // 图形形状
                icon: 'circle',
                padding: [0, 0, 0, 0],
                itemGap: 18,
                itemWidth:4,
                temHeight:4,
                textStyle: {
                    borderRadius: 100,
                    color: '#a5dbf7',
                    fontSize: 8
                },
                data: ["ZM01", 'ZM02', "ZM03", "ZM04"]
            }],
            series: [{
                type: 'pie',
                radius: '65%',
                left: '20%',
                labelLine: {
                    show: false
                },
                data: [{
                        value: 200,
                        name: 'ZM01',
                        itemStyle: {
                            color: '#19ffec'
                        }
                    },
                    {
                        value: 156,
                        name: 'ZM02',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 400,
                        name: 'ZM03',
                        itemStyle: {
                            color: '#1eb0dc'
                        }
                    },
                    {
                        value: 991,
                        name: 'ZM04',
                        itemStyle: {
                            color: '#ff9c00'
                        }
                        
                    }
                ]
            }]
        },
        // huan3
        {
            tooltip: {},
            legend: [{
                // 设置布局方向
                orient: 'vertical',
                // 文字和图形对齐方式
                align: 'left',
                left: '0%',
                top: '30%',
                // 图形形状
                icon: 'circle',
                padding: [0, 0, 0, 0],
                itemGap: 18,
                itemWidth:4,
                temHeight: 4,
                textStyle: {
                    borderRadius: 100,
                    color: '#a5dbf7',
                    fontSize: 8
                },
                data: ["100", '200', "201", "203"]
            }],
            series: [{
                type: 'pie',
                radius: '65%',
                left: '20%',
                labelLine: {
                    show: false
                },
                data: [{
                        value: 100,
                        name: '100',
                        itemStyle: {
                            color: '#19ffec'
                        }
                    },
                    {
                        value: 200,
                        name: '200',
                        itemStyle: {
                            color: '#ffcc00'
                        }
                    },
                    {
                        value: 201,
                        name: '201',
                        itemStyle: {
                            color: '#1eb0dc'
                        }
                    },
                    {
                        value: 203,
                        name: '203',
                        itemStyle: {
                            color: '#ff9c00'
                        }
                    }
                ]
            }]
        }
    ];

    // 使用刚指定的配置项和数据显示图表
    hchart1.setOption(option[0])
    hchart2.setOption(option[1])
    hchart3.setOption(option[2])

    window.addEventListener('resize', function () {
        hchart1.resize();
        hchart2.resize();
        hchart3.resize();
    })
})()