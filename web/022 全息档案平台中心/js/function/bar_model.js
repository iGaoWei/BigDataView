
//var datax=['1号店','2号店','3号店','4号店','5号店','6号店','7号店','8号店'];
//var datay1=[3709, 2417, 755, 2610, 1719, 433, 2544,  4285];
//var datay2=[386,386, 386, 122, 261, 171, 386, 40];
//var datay3= [220, 376, 1727, 220,  220, 220, 220, 220];
function setBar_ln(datax,datay1,datay2,datay3){
var option = {
	    "title": {
	        "text": "人流环比图", 
	        "subtext": "昨天 vs 前天", 
	        "x": "center",
	        show:false
	    }, 
	    "tooltip": {
	        "trigger": "axis", 
	        "axisPointer": {
	            "type": "shadow"
	        },
	    }, 
	    "grid": {
	        "borderWidth": 0, 
	        "y2": 40,
	        "y":10
	    }, 
	    "legend": {
	        "x": "right", 
	        "data": [ ]
	    }, 
	    "toolbox": {
	        "show": false, 
	        "feature": {
	            "restore": { }, 
	            "saveAsImage": { }
	        }
	    }, 
	    "calculable": true, 
	    "xAxis": [
	        {
	            "type": "category", 
	            "splitLine": {
	                "show": false
	            }, 
	            "axisTick": {
	                "show": false
	            }, 
	            "splitArea": {
	                "show": false
	            }, 
	            "axisLabel": {
	                "interval": 0, 
	                "rotate": -45, 
	                "show": true, 
	                "splitNumber": 15, 
	                "textStyle": {
	                    "fontFamily": "微软雅黑", 
	                    "fontSize": 14,
	                    "color":'#00b2ff'
	                }
	            }, 
	            "data": datax,
	        }
	    ], 
	    "yAxis": [
	        {
	            "type": "value", 
	            "splitLine": {
	                "show": true,
	                "lineStyle":{
	                	"color":'#2D68D0'
	                }
	            }, 
	            "axisLine": {
	                "show": false
	            }, 
	            "axisTick": {
	                "show": false
	            }, 
	            "splitArea": {
	                "show": false
	            },
	             "axisLabel": {
	                "interval": 0, 
//	                "rotate": 45, 
	                "show": true, 
	                "splitNumber": 15, 
	                "textStyle": {
	                    "fontFamily": "微软雅黑", 
	                    "fontSize": 16,
	                    "color":'#00b2ff'
	                }
	            }, 
	        }
	    ], 
//	    "dataZoom": [
//	        {
//	            "show": false, 
//	            "height": 30, 
//	            "xAxisIndex": [
//	                0
//	            ], 
//	            bottom:40,
//	            "start": 0, 
//	            "end": 80
//	        }, 
//	        {
//	            "type": "inside", 
//	            "show": true, 
//	            "height": 15, 
//	            "xAxisIndex": [
//	                0
//	            ], 
//	            "start": 1, 
//	            "end": 35
//	        }
//	    ], 
	    "series": [
	        {
	            "name": "昨日", 
	            "type": "bar", 
	            "stack": "总量", 
	            "barMaxWidth": 30, 
	            "barGap": "10%", 
	            "itemStyle": {
	                "normal": {
	                    "barBorderRadius": 0, 
	                   "color": new echarts.graphic.LinearGradient(0,0,0,1,[{
	                        offset:0,
	                        color:'rgba(15,108,193,.8)'
	                        
	                    },{
	                         offset:0.8,
	                        color:'rgba(3,70,118,1)'
	                    }
	                    ]), 
	                    "label": {
	                        "show": true, 
	                        "textStyle": {
	                            "color": "white"
	                        }, 
	                        "position": "insideTop",
	                        formatter : function(p) {
		                                                return p.value > 0 ? (p.value ): '';
		                                            }
	                    }
	                }
	            }, 
	            "data": datay1, 
	        }, 
	        {
	            "name": "人流减少", 
	            "type": "bar", 
	            "stack": "总量", 
	            "itemStyle": {
	                "normal": {
	                    "color": new echarts.graphic.LinearGradient(0,0,0,1,[{
	                        offset:0,
	                        color:'rgba(51,204,112,.5)'
	                        
	                    },{
	                         offset:0.8,
	                        color:'rgba(51,204,112,1)'
	                    }
	                    ]), 
	                    "barBorderRadius": 0, 
	                    "label": {
	                        "show": true, 
	                        "textStyle": {
	                            "color": "white"
	                        }, 
	                        "position": "insideTop",
	                        formatter : function(p) {
		                                                return p.value > 0 ? (
		                                                         p.value + '')
		                                                        : '';
		                                            }
	                    }
	                }
	            }, 
	            "data": datay2
	        }, 
	        {
	            "name": "人流增长", 
	            "type": "bar", 
	            "stack": "总量", 
	            "itemStyle": {
	                "normal": {
	                    "color": new echarts.graphic.LinearGradient(0,0,0,1,[{
	                        offset:0,
	                        color:'rgba(15,108,193,.8)'
	                        
	                    },{
	                         offset:0.8,
	                        color:'rgba(3,70,118,1)'
	                    }
	                    ]),  
	                    "barBorderRadius": 0, 
	                    "label": {
	                        "show": true, 
	                        "textStyle": {
	                            "color": "white"
	                        }, 
	                        "position": "insideTop",
	                        formatter : function(p) {
		                                                return p.value > 0 ? (
		                                                        p.value + '')
		                                                        : '';
		                                            }
	                    }
	                }
	            }, 
	            "data":datay3
	        }
	    ],
	    animationDuration:7000,  
	      animationEasing:'elasticOut',
		  animationDelayupdate:function(idx){
			return idx * 15;
		}
	}
	return option;
}
