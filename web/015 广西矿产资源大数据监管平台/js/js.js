
$(function () {
	echarts_1()
	echarts_2()
	echarts_3()
	echarts_4()
	echarts_5()
	echarts_map()
	echarts_map2()
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
var data = [683, 234, 234, 523, 345, 320, 280, 271, 254, 229, 210, 190, 182]
var titlename = ['有机物污染', '机物污染', '重金属污染', '固体废物污染', '汽车尾气污染', '工业废水污染', '生活垃圾', '农药化肥污染', '微生物污染', '噪音污染', '辐射污染', '氧化物污染', '硫氧化物污染'];
option = {
	grid: {
        left: '10',
		top:'15',
        right: '10',
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
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));	
	
	option = {
		    "legend": {
        "orient": "horizontal",
        "y": "bottom",
        "x": "center",
        "data": ["黑名单查询", "红名单查询", "法人行政处罚", "其它查询"],
        "itemWidth": 10,
        "itemHeight": 10,
        "textStyle": {
            "color": "#fff"
        }, 
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
        name: '访问来源',
        type: 'pie',
        radius: ['20%', '55%'],
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], 
        data: [{
                value: 285,
                name: '黑名单查询'
            },
            {
                value: 410,
                name: '红名单查询'
            },
            {
                value: 274,
                name: '法人行政处罚'
            },
            {
                value: 235,
                name: '其它查询'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{d}%}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 20,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        height: 40
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
                length2: 10,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};
		myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));	
	var name_flag = 0;
var data = [{
        "value": "1046",
        "name": "增值税",
      
    },
    {
        "value": "903",
        "name": "资源税",
      
    },
    {
        "value": "784",
        "name": "个人所得税",
     
    },
    {
        "value": "683",
        "name": "城建税",
      
    },
    {
        "value": "659",
        "name": "教育费附加",
      
    },
    {
        "value": 1488,
        "name": "地方教育费附加",
        
    }
];
var option = {
    "legend": {
        "orient": "horizontal",
        "y": "bottom",
        "x": "center",
        "data": ["增值税", "资源税", "个人所得税", "城建税", "教育费附加", "地方教育费附加"],
        "itemWidth": 10,
        "itemHeight": 10,
        "textStyle": {
            "color": "#fff"
        }, 
    },
    "title": [{
            "show": true,
            "text": "",
            "textStyle": {
                "color": "white",
                "fontSize": 14,
                "fontStyle": "normal",
                
            },
            "top": "44%",
            "left": "center"
        },
        {
            "show": true,
            "text": "",
            "textStyle": {
                "color": "white",
                "fontSize": 20,
                "fontStyle": "normal",
               "fontWeight": "bold"
            },
            "top": "50%",
            "left": "center"
        },
    ],
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>数量:{c} ({d}%)",
        textStyle: {
            // fontSize: 36,
            fontWeight: 'bold',
            color: 'white',
        },
    },
    //自己设置扇形图颜色
    series: [{
            name: '税种明细',
            type: 'pie',
            //位置
            center: ['50%', '50%'],
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            selectedOffset: 25,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                }
            },
            labelLine: {
				
                length: 7,
                length2: 30,
                lineStyle: {
                    width:1
                }
            },
            label: {
                fontSize: '16',
                color: 'white'
            },
            data: data
        },
        {
            name: '税种明细',
            type: 'pie',
            radius: '30%',
            z: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            color: ['rgba(0,0,0,0)'],
            data: [{
                value: 100,
                tooltip: {
                    show: false
                }
            }, ]
        }
    ]
};
var timeTicket = null;
timeTicket = setInterval(() => {
    if (name_flag > 5) {
        myChart.dispatchAction({
            type: 'pieUnSelect',
            seriesIndex: 0,
            dataIndex: 5
        });
        name_flag = 0;
    }
    myChart.dispatchAction({
        type: 'pieSelect',
        seriesIndex: 0,
        dataIndex: name_flag
    });
    if (name_flag !== 0) {
        myChart.dispatchAction({
            type: 'pieUnSelect',
            seriesIndex: 0,
            dataIndex: name_flag - 1
        });
    }
    option.title[0].text = option.series[0].data[name_flag].name;
    option.title[1].text = option.series[0].data[name_flag].value;
    myChart.setOption(option);
    name_flag++;
}, 2000);

		myChart.setOption(option);
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
   	tooltip: {
		trigger: 'axis',
		axisPointer: {
			lineStyle: {
				color: '#57617B'
			}
		}
	},
    "legend": {
		


      "data": [
        {"name": "税收"},
        {"name": "折线"},

      ],
      "top": "0%",
      "textStyle": {
       "color": "rgba(255,255,255,0.9)"//图例文字
      }
    },
	
    "xAxis": [
      {
        "type": "category",
		
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
		 axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
        axisLabel:  { textStyle: {color: "rgba(255,255,255,.6)", fontSize: '14', },
            },
		
        },
	],
    "yAxis": [
      {
        "type": "value",
        "name": "单位1",
        "min": 0,
        "max": 50,
        "interval": 10,
        "axisLabel": {
          "show": true,
         
        },
        axisLine: {lineStyle: {color: 'rgba(255,255,255,.2)'}},//左线色
        
      },
      {
        "type": "value",
        "name": "单位2",
        "show": true,
        "axisLabel": {
          "show": true,
        
        },
		  axisLine: {lineStyle: {color: 'rgba(255,255,255,.2)'}},//右线色
		   splitLine: {show:true,lineStyle: {color:"#001e94"}},//x轴线
      },
    ],
    "grid": {
      "top": "10%",
		"right":"30",
		"bottom":"30",
		"left":"30",
    },
    "series": [
      {
        "name": "税收",
        "type": "bar",
        "data": [4,2,34,6,8,6],
        "barWidth": "auto",
		
        "itemStyle": {
          "normal": {
            "color": {
              "type": "linear",
              "x": 0,
              "y": 0,
              "x2": 0,
              "y2": 1,
              "colorStops": [
                {
                  "offset": 0,
                  "color": "#66b8a7"
                },
                {
                  "offset": 1,
                  "color": "#66b8a7"
                }
              ],
              "globalCoord": false
            }
          }
        },
        "barGap": "0"
      },
      {
        "name": "折线",
        "type": "line",
        "yAxisIndex": 1,
		
        "data": [100,50,80,30,90,40],
		  lineStyle: {
			normal: {
				width: 2
			},
		},
        "itemStyle": {
          "normal": {
            "color": "#cdba00",
			 
          }
        },
        "smooth": true
      }
    ]
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
		    "legend": {
        "orient": "horizontal",
        "y": "bottom",
        "x": "center",
        "data": ["设备", "建材", "食品"],
        "itemWidth": 10,
        "itemHeight": 10,
        "textStyle": {
            "color": "#fff"
        }, 
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
        name: '访问来源',
        type: 'pie',
        radius: ['20%', '60%'],
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], 
        data: [{



                value: 285,
                name: '设备'
            },
            {
                value: 410,
                name: '建材'
            },
            {
                value: 274,
                name: '食品'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{d}%}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 20,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        height: 40
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
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};
		myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
	
	function echarts_map() {
var myChart = echarts.init(document.getElementById('map'));
var uploadedDataURL = "js/chenxi.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('chenxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
       '岑城': [111.003903,22.922207]
            ,'糯垌':[103.803298,25.496407]
            ,'诚谏':[111.245935,23.020671]
            ,'归义':[111.096911,22.906905]
            ,'筋竹':[111.29382,22.904241]
            ,'大业':[111.203045,22.907082]
            ,'梨木':[111.12996,22.80186]
            ,'大隆':[111.011196,22.767551]
            ,'南渡':[110.83674,22.854247]
            ,'马路':[110.909045,22.893586]
            ,'三堡':[110.929096,23.109585]
            ,'波塘':[110.861756,23.017674]
            ,'安平':[111.097183,23.113398]
            ,'水汶':[110.994962,22.685379]
    }
    var data1 = [{
            name: '糯垌',
            value: 80
        },{
            name: '梨木',
            value: 70
        }, {
            name: '南渡',
            value: 75
        }, {
            name: '水汶',
            value: 80
        }
    ];
	var data2 = [{
            name: '大隆',
            value: 80
        },{
            name: '筋竹',
            value: 180
        }
    ];
	
		var data3 = [{
            name: '安平',
            value: 80
        },{
            name: '波塘',
            value: 70
        }, {
            name: '马路',
            value: 75
        }, {
            name: '大业',
            value: 80
        }
    ];
	
    
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option = {
      
      tooltip: {

               formatter : function(e){
                   if (typeof(e.value)[2] == "undefined") {
                       return e.name;

                   }else{
                       return e.name + ':' + e.value[2] + '家';
                   }
               }
           },
        legend: {
            
            orient: 'vertical',
            top: '50',
            right: '50',
            data: ['开采企业','管理站','加工企业'],
            textStyle: {
                color: '#fff',
				fontSize:18,
            }
        },

        geo: {
            map: 'chenxi',
			  zoom: 1,
			 itemStyle: {
            normal: {
                areaColor: 'rgba(0,97,225,.3)',
                borderColor: 'rgba(255,255,255,.6)'
            },
            emphasis: {
                areaColor: 'rgba(0,97,225,.5)',
            }
        }
           
        },
        series: [
			{
            name: '开采企业',
            type: 'scatter',
				  data: data1,
            coordinateSystem: 'geo',
            data: convertData(data1),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffe400',
                }
            },
            zlevel: 1
        },
			{
            name: '管理站',
            type: 'scatter',
				  data: data2,
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#07e5ff',
                }
            },
            zlevel: 1
        },{
            name: '加工企业',
            type: 'scatter',

				  data: data3,
            coordinateSystem: 'geo',
            data: convertData(data3),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff6316',

                }
            },
            zlevel: 1
        },
			{
            type: 'map',
         
            roam: false, //是否开启鼠标缩放和平移漫游
           
          
        }]
    };
    myChart.setOption(option);
});
      
    }
function echarts_map2() {
var myChart = echarts.init(document.getElementById('guangxi'));
var uploadedDataURL = "js/45.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function(geoJson) {
    echarts.registerMap('guangxi', geoJson);
    myChart.hideLoading();
    var geoCoordMap = {
       '岑溪': [111.003154,22.925685],
       '藤县': [110.989913,23.350225],
       '合浦': [109.214017,21.66593],
       '田阳': [106.920265,23.740418],
       '兴业': [109.883847,22.743869],
       '平桂': [111.502419,24.448841],
       '覃塘': [109.464024,23.127934]
    }
    var data1 = [{
            name: '藤县',
            value: 70
        }, {
            name: '合浦',
            value: 70
        }, {
            name: '田阳',
            value: 70
        }, {
            name: '平桂',
            value: 70
        } , {
            name: '覃塘',
            value: 70
        }
    ];
	var data2 = [{
            name: '岑溪',
            value: 100
        },
    ];
	
	
    
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option = {  
    /**
	  tooltip: {

               formatter : function(e){
                   if (typeof(e.value)[2] == "undefined") {
                       return e.name;

                   }else{
                       return e.name + ':' + e.value[2] + '家';
                   }
               }
           },
	**/
        legend: {
            
            orient: 'vertical',
            top: '50',
            right: '50',
            data: ['开采企业','管理站'],
            textStyle: {
                color: '#fff',
				fontSize:18,
            }
        },

        geo: {
            map: 'guangxi',
			  zoom: 1,
			 itemStyle: {
            normal: {
                areaColor: 'rgba(0,97,225,.3)',
                borderColor: 'rgba(255,255,255,.6)'
            },
            emphasis: {
                areaColor: 'rgba(0,97,225,.5)',
            }
        }
           
        },
        series: [
			{
            name: '开采企业',
            type: 'scatter',
				  data: data1,
            coordinateSystem: 'geo',
            data: convertData(data1),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffe400',
                }
            },
            zlevel: 1
        },
			{
            name: '管理站',
            type: 'scatter',
				  data: data2,
            coordinateSystem: 'geo',
            data: convertData(data2),
            symbolSize: function(val) {
                return val[2] / 5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'bottom',
                    color: '#fff',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ff3300',
                }
            },
            zlevel: 1
        },
			{
            type: 'map',
         
            roam: false, //是否开启鼠标缩放和平移漫游
           
          
        }]
    };
    myChart.setOption(option);
});
      
    }
})



		
		
		


		









