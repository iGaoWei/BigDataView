 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});

 
$(function () {

echarts_1()
echarts_2()
echarts_3()

function echarts_1() {
var myChart = echarts.init(document.getElementById('echart1'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '分布',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
        color: ['#f8b62c', '#FE5050', '#0086e5', '#57bc2f'], 
        data: [{
                value: 70,
                name: '微信'
            },
            {
                value: 50,
                name: '支付宝'
            },
            {
                value: 20,
                name: '银行卡'
            },
            {
                value: 15,
                name: '其它'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{d|{d}%}', '{b|{b}}'].join('\n'),
                rich: {
                    d: {
                        color: 'rgb(241,246,104)',
                        fontSize: 14,
                        fontWeight:'bold',
                 
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 12,
               
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 5,
                length2: 9,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 50,
            }
        }
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
	color: ['#1aa1ff', '#31c17b', '#ff6535'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	 grid: {
        left: '10',
		top:'10%',
        right: '0%',
        bottom: '3%',
       containLabel: true
    },
    xAxis: {
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
        axisLine: {show:false,},
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 14
        }
    },
    yAxis: {
        //name: "（人）",
		 splitNumber:4,
        nameTextStyle: {
             color: 'rgba(255,255,255,.6)',
            fontSize: 14
        },
        axisLine: { show:false, },
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 14
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
				 type: "dotted"
            }
        },
        //interval:100,
        //max:500

    },
    series: [{
        type: 'bar',
        barWidth: '30',
		  itemStyle: {
                normal: {
 		barBorderRadius: 2,	
                    color: function(params) {
                        var colorList = [
                          '#0074c2','#00b59d','#00be2b','#abd300','#f4e000',
                           '#ffab00','#ff7100','#f00c00','#c90061', '#c900c7','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];

                        return colorList[params.dataIndex]

                    },

                    label: {

                        show: true,
                        position: 'top',
                        formatter: '{c}',
   color: 'rgba(255,255,255,.4)',
            fontSize: 12
                    }

                }

            },
 		data: [ 5, 12, 35, 100, 150, 235]
       
    }]
};
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
	color: ['#1aa1ff', '#31c17b', '#ff6535'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
	 grid: {
        left: '10',
		top:'10%',
        right: '0%',
        bottom: '3%',
       containLabel: true
    },
    xAxis: {
        data: ['商超', '零销', '餐饮', '百货', '其它'], 
        axisLine: {show:false,},
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 14
        }
    },
    yAxis: {
        //name: "（人）",
		 splitNumber:4,
        nameTextStyle: {
             color: 'rgba(255,255,255,.6)',
            fontSize: 14
        },
        axisLine: { show:false, },
        axisLabel: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 14
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
				 type: "dotted"
            }
        },
        //interval:100,
        //max:500

    },
    series: [{
        type: 'bar',
        barWidth: '30',
		itemStyle: {
                normal: {
					barBorderRadius: 2,	
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#4693EC"
                        },
                        {
                            offset: 1,
                            color: "#00FFE3"
                        }
                    ]),
					 label: {

                        show: true,
                        position: 'top',
                        formatter: '{c}',
   color: 'rgba(255,255,255,.4)',
            fontSize: 12
                    }
                },
			
            },
		
 		data: [1250, 605, 264, 445, 125]
       
    }]
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
})












