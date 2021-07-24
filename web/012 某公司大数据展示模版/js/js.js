 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_2()
echarts_3()
echarts_4()
echarts_5()
echarts_6()

function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
var data = [683, 234, 234, 523, 345, 320, 280, 271, 254, 229, 210, 190, 182]
var titlename = ['北京', '上海', '广州', '郑州', '武汉', '南京', '杭州', '东莞', '深圳', '虎门', '青岛', '石家庄', '安阳'];
option = {
	grid: {
        left: '0',
		top:'0',
        right: '0',
        bottom: '0%',
       containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick:{ show: false},
        axisLabel: {
            textStyle: {
                color:'#fff'
            },
        },

    }, {
        show: false,
        inverse: true,
        data: data,
        axisLabel: {textStyle: {color: '#fff'}},
        axisLine: { show: false},
        splitLine:{ show: false},
        axisTick: { show: false},
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        itemStyle: {
            normal: {
               barBorderRadius: 50,
                color:'#1089E7',
            }
        },
        label: {
           normal: {
                show: true,
                position: 'right',
                formatter: '{c}',
			   textStyle: {color: 'rgba(255,255,255,.5)'}
            }
        },
    }]
};
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
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '10',
		top: '20',
        right: '30',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:14,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
		splitNumber: 4,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:16,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)',
	  type: 'dotted',
            }
        }
    }],
    series: [
		{
        name: '结算率',
        type: 'line',
       smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: 'rgba(31, 174, 234, 1)',
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(31, 174, 234, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(31, 174, 234, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#1f7eea',
				borderColor: 'rgba(31, 174, 234, .1)',
				borderWidth: 5
			}
		},
        data: [3, 6, 3, 6, 3, 9, 3,12, 6, 8, 3, 5, 9, 3]

    }, 

		 ]

};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
 var option = {



       
 grid: {
        left: '0',
		top: '30',
        right: '0',
        bottom: '10',
        containLabel: true
    },
        legend: {

            top: 0,

            textStyle: {

            color: "#fff",

        },

        itemWidth: 10,  // 设置宽度

        itemHeight: 10, // 设置高度

        },

        tooltip: {

            trigger: 'axis',

            axisPointer: { // 坐标轴指示器，坐标轴触发有效

                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

            }

        },

        xAxis: {

            type: 'category',

            data: ["西进口右转","北进口直行","南进口直行",],

            axisTick: { //---坐标轴 刻度

                show: true, //---是否显示

            },

            axisLine: { //---坐标轴 轴线

                show: true, //---是否显示

                lineStyle: {

                    color: 'rgba(255,255,255,.1)',

                    width: 1,

                    type: 'dotted',

                },

            },

            axisLabel: {//X轴文字

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

        },

        yAxis: {

            type: 'value',

            splitLine: {//分割线

                show: true,

                lineStyle: {
 color: 'rgba(255,255,255,.1)',

                    width: 1,
                    type: 'dotted'

                }

            },

            axisLabel: {//Y轴刻度值

                formatter: '{value}',

                textStyle: {

                    fontSize: 12,

                    color: '#fff'

                },

            },

            axisLine: { //---坐标轴 轴线

                show: false, //---是否显示

            },

        },

        series: [{

            name: '原方案',

            type: 'bar',

            data: [3, 7,4],

            barWidth: 15,
	
            barGap: 1, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

            itemStyle: {

                normal: {
barBorderRadius: 50,
                    color: "#446ACF",

                }

            },

        }, {

            name: '建议方案',

            type: 'bar',

            data: [6, 2,5],

            barWidth: 15, //柱图宽度
	
            itemStyle: {

                normal: { //设置颜色的渐变
barBorderRadius: 50,
                    color: "#4fb69d",

                }

            },

        }]

    };
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
          legend: {
           orient: 'vertical',
            itemWidth: 10,
            itemHeight: 10,
            textStyle:{
                color:'rgba(255,255,255,.5)'
            },
              top:'20%',
          right:30,
            data:['已入驻','已出售','已租赁','闲置房产']
        },
        color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
       
        calculable : true,
        series : [
            {
              
                type:'pie',
                radius : [20, 70],
                center: ["35%", "50%"],
                roseType : 'area',
                data:[ 
                    {value:300, name:'已入驻'},
                    {value:200, name:'已出售'},
                    {value:205, name:'已租赁'},
                    {value:180, name:'闲置房产'},
               
                ],
                 label: {
                 normal: {
                     formatter: function(param) {
                         return param.name +':\n' + param.value +'\n';
                     }
    
                 }
             },
             labelLine: {
                 normal: {
                      length:5,
                      length2:15,
                     lineStyle: { width: 1}
                 }
             },
    
             itemStyle: {
                 normal: {
                     shadowBlur: 30,
                     shadowColor: 'rgba(0, 0, 0, 0.4)'
                 }
    
             },
            }
        ]
    };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
option = {
    
    tooltip: {
        trigger: 'axis'
    },
    radar: [{
        indicator: [{
            text: '盈利能力',
            max: 100
        }, {
            text: '发展水平',
            max: 100
        }, {
            text: '融资能力',
            max: 100
        }, {
            text: '技术能力',
            max: 100
        }, {
            text: '企业规模',
            max: 100
        }],
        textStyle: {
            color: 'red'
        },
        center: ['50%', '50%'],
        radius: '70%',
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
    
        name: {
            padding:-5,
            formatter: '{value}',
            textStyle: {
              
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.05)'
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        tooltip: {
            trigger: 'item'
        },
        data: [{
            name: '园区平均值',
            value: [90, 80, 20, 10, 30],
            lineStyle: {
                normal: { 
                    color:'#03b48e',
                    width:2,
                }
            },
            areaStyle: {
                normal: {
                    color: '#03b48e',
                    opacity:.4
                }
            },
            symbolSize: 0,
          
        }, {
            name: '当前园区',
            value: [30, 20, 75, 80, 70],
            symbolSize: 0,
            lineStyle: {
                normal: { 
                    color:'#3893e5',
                    width:2,
                }
            },
                 areaStyle: {
                normal: {
                    color: 'rgba(19, 173, 255, 0.5)'
                }
            }
        }]
    }, ]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









