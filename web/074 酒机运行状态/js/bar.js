/*大屏*/
(function () {
    var chart1 = echarts.init(document.getElementById('bchart1'));
    var chart2 = echarts.init(document.getElementById('bchart2'));
    var chart3 = echarts.init(document.getElementById('bchart3'));
    var chart4 = echarts.init(document.getElementById('bchart4'));
    var chart5 = echarts.init(document.getElementById('bchart5'));


    var option = [{
        //故障代码
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
                data: ["74", "729", "1308", "1405", "247", "613", "87"],
                axisLabel: {
                    // X 轴标签
                    
                    rotate: 40,
                    fontSize: 10
                },
                // 坐标轴线相关设置设置
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }

            },
            yAxis: {
                show:false,
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '10%',
                containLabel: true
            },
            series: [{
                    name: '浅蓝',
                    type: 'bar',
                    data: [30, 50, 70, 30, 40, 50, 60],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                    barWidth: 15,
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 10,
                        color: '#19ffe9'
                    }
                },
                {
                    name: '折线',
                    type: 'line',
                    smooth: true,
                    data: [30, 50, 70, 30, 40, 50, 60],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                }
            ],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        //酒机停机趋势
        {
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
                data: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
                axisLabel: {
                    // X 轴标签
                    // rotate: 30,
                    fontSize: 10
                },
                // 坐标轴线相关设置设置
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }

            },
            yAxis: {
                show:false,
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '24%',
                containLabel: true
            },
            series: [{
                    name: '浅蓝',
                    type: 'bar',
                    data: [30, 50, 70, 30, 40, 50, 60, 30, 50, 70, 30, 40, 50, 60, 30, 10, 60],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                    barWidth: 10,
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 10,
                        color: '#19ffe9'
                    }
                },
                {
                    name: '折线',
                    type: 'line',
                    smooth: true,
                    data: [30, 50, 70, 30, 40, 50, 60, 30, 50, 70, 30, 40, 50, 60, 30, 10, 60],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                }
            ],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        //当班TOP状态
        {
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
                data: ["137", "120", "83", "75", "73", "45", "129", "87", "56", "11", "128", "48", "48", "28", "65"],
                axisLabel: {
                    // X 轴标签
                    // rotate: 30,
                    fontSize: 10
                },
                // 坐标轴线相关设置设置
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1eb0dc'
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
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '20%',
                containLabel: true
            },
            series: [{
                    name: '浅蓝',
                    type: 'bar',
                    data: [30, 50, 70, 30, 40, 50, 60, 30, 50, 70, 30, 40, 50, 60, 30],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                    barWidth: 10,
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 10,
                        color: '#19ffe9'
                    }
                }
            ],
            textStyle: {
                color: "#1eb0dc"
            }
        },
         //当班液位状态
        {
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
                data: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19","20","21","22","23","24","25"],
                axisLabel: {
                    // X 轴标签
                    // rotate: 30,
                    fontSize: 10
                },
                // 坐标轴线相关设置设置
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1eb0dc'
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
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '20%',
                containLabel: true
            },
            series: [{
                    name: '浅蓝',
                    type: 'bar',
                    data: [550, 605, 556, 570, 584, 556, 587,594, 578, 571, 560, 569, 574, 566, 577,550, 605, 556, 570, 584, 556, 587,594, 578, 571],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                    barWidth: 10,
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 10,
                        color: '#19ffe9'
                    }
                }
            ],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        //酒机费用趋势
        {
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
                data: ["18", "20", "24", "30", "35", "25", "38", "40", "42", "44", "43", "45", "47", "49", "50"],
                axisLabel: {
                    // X 轴标签
                    // rotate: 30,
                    fontSize: 10
                },
                // 坐标轴线相关设置设置
                axisLine: {
                    show:true,
                    lineStyle: {
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }

            },
            yAxis: {
                show:false,
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1eb0dc'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: '2%',
                right: '2%',
                bottom: '2%',
                top: '29%',
                containLabel: true
            },
            series: [{
                    name: '浅蓝',
                    type: 'bar',
                    data: [0, 30, 20, 15, 30, 10, 20, 30, 28, 20, 22, 27, 16, 18, 0],
                    itemStyle: {
                        color: '#19ffe9'
                    },
                    barWidth: 10,
                    label: {
                        show: true,
                        position: 'top',
                        fontSize: 10,
                        color: '#19ffe9'
                    }
                }
            ],
            textStyle: {
                color: "#1eb0dc"
            }
        },
       
    ];


    // 使用刚指定的配置项和数据显示图表
    chart1.setOption(option[0])
    chart2.setOption(option[1])
    chart3.setOption(option[2])
    chart4.setOption(option[3])
    chart5.setOption(option[4])

    window.addEventListener('resize', function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
        
    })
    // 屏幕适配
})()