$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    echarts_6();
    echarts_7();
    echarts_8();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
	option = {
    title: {
        text: '14%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, .1)'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
            radius: ['75%', '85%'],
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
            }
        },

        hoverAnimation: false, 
        data: [{
            value: 14,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {show: false},
                    labelLine: {show: false}
                } 
            }
        }, {
            name: '86',
            value: 20
        }]

    }]

}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
	option = {
    title: {
        text: '22%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
          fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, .1)'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['75%', '85%'],
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
            }
        },

        hoverAnimation: false, 
        data: [{
            value: 22,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {show: false},
                    labelLine: {show: false}
                } 
            }
        }, {
            name: '78',
            value: 20
        }]

    }]

}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
	option = {
    title: {
        text: '10%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, .1)'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
         radius: ['75%', '85%'],
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
            }
        },

        hoverAnimation: false, 
        data: [{
            value: 10,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {show: false},
                    labelLine: {show: false}
                } 
            }
        }, {
            name: '02',
            value: 90
        }]

    }]

}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
	option = {
    title: {
        text: '30%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, .1)'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
            radius: ['75%', '85%'],
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
            }
        },

        hoverAnimation: false, 
        data: [{
            value: 30,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {show: false},
                    labelLine: {show: false}
                } 
            }
        }, {
            name: '02',
            value: 70
        }]

    }]

}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
	option = {
    title: {
        text: '12%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
          fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, .1)'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['75%', '85%'],
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
            }
        },

        hoverAnimation: false, 
        data: [{
            value: 12,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {show: false},
                    labelLine: {show: false}
                } 
            }
        }, {
            name: '02',
            value: 88
        }]

    }]

}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
	option = {
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '24'
        }
    },
    color: ['rgba(176, 212, 251, .1)'], 
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
         radius: ['75%', '85%'],
        itemStyle: {
            normal: {
                label: {show: false},
                labelLine: {show: false},
            }
        },

        hoverAnimation: false, 
        data: [{
            value: 80,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {show: false},
                    labelLine: {show: false}
                } 
            }
        }, {
            name: '02',
            value: 20
        }]

    }]

}
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart7'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	 grid: {
        left: '0%',
		top:'15px',
        right: '0%',
        bottom: '0%',
       containLabel: true
    },
    xAxis: {
        data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        axisLine: {show:false,},
        axisLabel: {
            color: '#fff',
            fontSize: 12
        }
    },
    yAxis: {
        name: "（人）",
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        axisLine: { show:false, },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {show:false, },
        interval:100,
        max:500

    },
    series: [{
        type: 'bar',
        barWidth: '30%',
		
        itemStyle:{
			
            normal:{
				 barBorderRadius: 50,
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#01fdcc'
                }, {
                    offset: 0.8,
                    color: '#11a1d8'
                }], false)
            }
        },
        data: [25, 325, 164, 245, 475, 201, 121]
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_8() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart8'));


option = {
    color: ['#ec704a', '#2e4453', '#249cf9', '#fdb629', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        right:0,
        y:'center',
        itemWidth: 12,
        itemHeight: 12,
        align: 'left',
        textStyle: {
            fontSize:12,
            color: '#fff'
        },
        data:  ['test1','test2','test3','test4','test5'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['20%', '50%'],
            label: {
                normal: {
                    formatter: '{c|{d}%}',
					
                    rich: {
                      
                        c: {
                            fontSize: 12,
                            color: '#fff',
  
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length:2,
                    length2:5,
                    lineStyle: {
					
                        width:1
                    }
                }
            },
             roseType : 'area',
		

            data: [{
                    value:10,
                    name: 'test1'
                },
                {
                    value: 20,
                    name: 'test2'
                },
                {
                    value: 5,
                    name: 'test3'
                },
                {
                    value:15,
                    name: 'test4'
                },
				   {
                    value:15,
                    name: 'test5'
                }
            ]
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})



		
		
		


		









