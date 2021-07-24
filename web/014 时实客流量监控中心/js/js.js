 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();

function echarts_1() {
 // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart1'));
option = {
    legend: {
        //orient: 'vertical',
		top:'20',
		left:'center',
       itemWidth: 10,
        itemHeight: 10,
        data:['男','女'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
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
        name: '性别分布',
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '60%'],
        color: ['#0086e5', '#30c5ed', '#9fe7b8', '#fedb5b', '#ff9f7d', '#fb7293', '#e7bcf2'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 10,
                name: '男'
            },
            {
                value: 40,
                name: '女'
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
function echarts_2() {
 // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart2'));
option = {
    legend: {
        //orient: 'vertical',
		top:'20',
		left:'center',
       itemWidth: 10,
        itemHeight: 10,
        data:['20-30岁','30-40岁','40-50岁','50-60岁'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
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
        center: ['50%', '60%'],
        color: ['#0086e5', '#30c5ed', '#9fe7b8', '#fedb5b', '#ff9f7d', '#fb7293', '#e7bcf2'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 10,
                name: '20-30岁'
            },
            {
                value: 40,
                name: '30-40岁'
            },
            {
                value: 20,
                name: '40-50岁'
            },
            {
                value: 30,
                name: '50-60岁'
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
        splitLine: {
			 lineStyle: {
                 color: 'rgba(255,255,255,.1)',
	  type: 'dotted',
            }
		},
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
})



		
		
		


		









