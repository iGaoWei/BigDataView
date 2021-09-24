layui.define(['jquery','echartsMin','macarons'],function(exports){
	var $ = layui.$,
	echartsMin = layui.echartsMin,
	macarons = layui.macarons;
	
	window.mainBar = function(){
		var myChart = echarts.init(document.getElementById('mainBar'),'macarons');
		option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
		        textStyle:{//图例文字的样式
		            color:'#FFFFFF',
		        }
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['40%', '50%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '18',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
		};
		myChart.setOption(option);
	};
	
	
	window.mainBlend = function(){
		var myChart = echarts.init(document.getElementById('mainBlend'));
		var category = [];
		var dottedBase = +new Date();
		var lineData = [];
		var barData = [];
		for (var i = 0; i < 20; i++) {
		    var date = new Date(dottedBase += 1000 * 3600 * 24);
		    category.push([
		        date.getFullYear(),
		        date.getMonth() + 1,
		        date.getDate()
		    ].join('-'));
		    var b = Math.random() * 200;
		    var d = Math.random() * 200;
		    barData.push(b)
		    lineData.push(d + b);
		}
		option = {
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow',
		            label: {
		                show: true,
		                backgroundColor: '#333'
		            }
		        }
		    },
		    legend: {
		        data: ['line', 'bar'],
		        textStyle: {
		            color: '#ccc'
		        }
		    },
		    xAxis: {
		        data: category,
		        axisLine: {
		            lineStyle: {
		                color: '#ccc'
		            }
		        }
		    },
		    yAxis: {
		        splitLine: {show: false},
		        axisLine: {
		            lineStyle: {
		                color: '#ccc'
		            }
		        }
		    },
		    series: [{
		        name: 'line',
		        type: 'line',
		        smooth: true,
		        showAllSymbol: true,
		        symbol: 'emptyCircle',
		        symbolSize: 15,
		        data: lineData
		    }, {
		        name: 'bar',
		        type: 'bar',
		        barWidth: 10,
		        itemStyle: {
		            normal: {
		                barBorderRadius: 5,
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                        {offset: 0, color: '#14c8d4'},
		                        {offset: 1, color: '#43eec6'}
		                    ]
		                )
		            }
		        },
		        data: barData
		    }, {
		        name: 'line',
		        type: 'bar',
		        barGap: '-100%',
		        barWidth: 10,
		        itemStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
		                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
		                        {offset: 1, color: 'rgba(20,200,212,0)'}
		                    ]
		                )
		            }
		        },
		        z: -12,
		        data: lineData
		    }, {
		        name: 'dotted',
		        type: 'pictorialBar',
		        symbol: 'rect',
		        itemStyle: {
		            normal: {
		                color: '#0f375f'
		            }
		        },
		        symbolRepeat: true,
		        symbolSize: [12, 4],
		        symbolMargin: 1,
		        z: -10,
		        data: lineData
		    }]
		};
		
		myChart.setOption(option);
	};
	
	
	
	window.mainPie = function(){
		var myChart = echarts.init(document.getElementById('mainPie'));
		
		const color = ['#32e3ec', '#6df2c5', '#3da0ff', '#c1f488'];
		const data = [{
		    name: '备用1',
		    value: 50
		}, {
		    name: '备用2',
		    value: 70
		}, {
		    name: '车辆',
		    value: 50
		}, {
		    name: '通信',
		    value: 40
		}];
		
		const seriesData = [];
		const seriesData2 = [];
		
		data.map((item, idx) => {
		    seriesData.push({
		        name: item.name,
		        value: item.value,
		    });
		
		    seriesData2.push({
		        name: item.name,
		        value: item.value,
		        symbolSize: item.value,
		        itemStyle: {
		            normal: {
		                color: color[idx % 7]
		            }
		        }
		    })
		})
		
		function roundDatas(num) {
		    var datas = [];
		    for (var i = 0; i < num; i++) {
		        datas.push({
		            name: 'circle' + i
		        });
		    }
		    return datas;
		}
		
		option = {
		    color: color,
		    animationDurationUpdate: 1500,
		    animationEasingUpdate: 'quinticInOut',
		    roam: false, //鼠标缩放及平移
		    focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
		    series: [{
		        name: '',
		        type: 'pie',
		        startAngle: 0,
		        hoverAnimation: false,
		        radius: ['40%', '40%'],
		        center: ['50%', '50%'],
		        data: seriesData,
		        itemStyle: {
		            normal: {
		                borderWidth: 5,
		                borderColor: 'rgba(0,0,0,0)',
		                label: {
		                    show: true,
		                    color: '#FFFFFF',
		                    fontSize: 12,
		                    formatter: function(params) {
		                        return params.name + ' '+ params.value + '%'
		                    }
		                },
		                labelLine: {
		                    show: true,
		                    length: 30,
		                    lineStyle: {
		                        type: 'dotted'
		                    }
		                }
		            }
		        }
		    }, {
		        type: 'graph',
		        tooltip: {},
		        ribbonType: true,
		        layout: 'circular',
		        hoverAnimation: false,
		        width: '40%',
		        height: '40%',
		        circular: {
		            rotateLabel: true
		        },
		        symbolSize: 5,
		        data: roundDatas(20),
		        itemStyle: {
		            normal: {
		                label: {
		                    show: false
		                },
		                color: '#264c7f',
		            },
		            emphasis: {
		                label: {
		                    show: false,
		                }
		            }
		        },
		    }, {
		        type: 'graph',
		        tooltip: {},
		        ribbonType: true,
		        layout: 'circular',
		        width: '40%',
		        height: '40%',
		
		        circular: {
		            rotateLabel: true
		        },
		        symbolSize: 30,
		        label: {
		            normal: {
		                show: false
		            }
		        },
		
		        edgeSymbol: ['circle'],
		        edgeSymbolSize: [8, 30],
		        edgeLabel: {
		            normal: {
		                textStyle: {
		                    fontSize: 8,
		                    fontWeight: 'bold',
		                    fontFamily: '宋体'
		                }
		            }
		        },
		
		        itemStyle: {
		            normal: {
		                label: {
		                    rotate: true,
		                    show: false,
		                },
		                borderColor: '#7C9ECD',
		                borderWidth: 0
		
		            },
		            emphasis: {
		                label: {
		                    show: false,
		                }
		            }
		        },
		
		        data: seriesData2,
		    }]
		};
		
		myChart.setOption(option);
	};
	
	
	//模块输出
	exports('echartsMain', null);
});