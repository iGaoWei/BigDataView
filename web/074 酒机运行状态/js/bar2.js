(function () {
    var chart1 = echarts.init(document.getElementById('bbchart1'));
    var chart2 = echarts.init(document.getElementById('bbchart2'));
    var chart3 = echarts.init(document.getElementById('bbchart3'));
    var chart4 = echarts.init(document.getElementById('bbchart4'));
    var chart5 = echarts.init(document.getElementById('bbchart5'));


    var option = [{
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
                data: ["18", "20", "24", "30", "35", "25", "38", "40"],

                axisLabel: {
                    show: false,
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
                show: false,
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
                right: '10%',
                bottom: '0%',
                top: '30%',
                containLabel: true
            },
            series: [{

                name: '浅蓝',
                type: 'bar',
                data: [10, 30, 20, 15, 30, 10, 20, 30],
                itemStyle: {
                    color: '#19ffe9'
                },
                barCategoryGap: '30%',
                barWidth: 15,
                label: {
                    show: false,
                    position: 'top',
                    fontSize: 10,
                    color: '#19ffe9'
                }
            }],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        // bar2
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
                data: ["18", "20", "24", "30", "35", "25", "38", "40"],

                axisLabel: {
                    show: false,
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
                show: false,
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
                right: '10%',
                bottom: '0%',
                top: '30%',
                containLabel: true
            },
            series: [{

                name: '浅蓝',
                type: 'bar',
                data: [10, 30, 20, 15, 30, 10, 20, 30],
                itemStyle: {
                    color: '#19ffe9'
                },
                barCategoryGap: '30%',
                barWidth: 15,
                label: {
                    show: false,
                    position: 'top',
                    fontSize: 10,
                    color: '#19ffe9'
                }
            }],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        // bar3
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
                data: ["18", "20", "24", "30", "35", "25", "38", "40"],

                axisLabel: {
                    show: false,
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
                show: false,
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
                right: '10%',
                bottom: '0%',
                top: '30%',
                containLabel: true
            },
            series: [{

                name: '浅蓝',
                type: 'bar',
                data: [10, 30, 20, 15, 30, 10, 20, 30],
                itemStyle: {
                    color: '#19ffe9'
                },
                barCategoryGap: '30%',
                barWidth: 15,
                label: {
                    show: false,
                    position: 'top',
                    fontSize: 10,
                    color: '#19ffe9'
                }
            }],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        // bar4
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
                data: ["18", "20", "24", "30", "35", "25", "38", "40"],

                axisLabel: {
                    show: false,
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
                show: false,
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
                right: '10%',
                bottom: '0%',
                top: '30%',
                containLabel: true
            },
            series: [{

                name: '浅蓝',
                type: 'bar',
                data: [10, 30, 20, 15, 30, 10, 20, 30],
                itemStyle: {
                    color: '#19ffe9'
                },
                barCategoryGap: '30%',
                barWidth: 15,
                label: {
                    show: false,
                    position: 'top',
                    fontSize: 10,
                    color: '#19ffe9'
                }
            }],
            textStyle: {
                color: "#1eb0dc"
            }
        },
        // bar5 
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
                data: ["18", "20", "24", "30", "35", "25", "38", "40"],

                axisLabel: {
                    show: false,
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
                show: false,
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
                right: '10%',
                bottom: '0%',
                top: '30%',
                containLabel: true
            },
            series: [{

                name: '浅蓝',
                type: 'bar',
                data: [10, 30, 20, 15, 30, 10, 20, 30],
                itemStyle: {
                    color: '#19ffe9'
                },
                barCategoryGap: '30%',
                barWidth: 15,
                label: {
                    show: false,
                    position: 'top',
                    fontSize: 10,
                    color: '#19ffe9'
                }
            }],
            textStyle: {
                color: "#1eb0dc"
            }
        },
    ]

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
})()