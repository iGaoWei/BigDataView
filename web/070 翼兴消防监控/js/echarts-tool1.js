 $(window).load(function(){  
             $(".loading").fadeOut();
})  
			

$(document).ready(function(){
	var whei=$(window).width();
	$("html").css({fontSize:whei/20});
	$(window).resize(function(){
	var whei=$(window).width();
	 $("html").css({fontSize:whei/20});
	});
	wbzl();
	yqbj();
	wxyg();
	wwbzl();
	sbj();
	dbj();
});

function wbzl(){
	var wbzl = echarts.init(document.getElementById('wbzl'));
	var hours = [ '做饭', '误报', '粉尘', '其它'];
	var days = ['12月', '10月', '9月', '8月'];
	var data = [
		[0, 0, 5],
		[0, 1, 1],
		[0, 2, 2],
		[0, 3, 8],
		[1, 0, 3],
		[1, 1, 5],
		[1, 2, 1],
		[1, 3, 9],
		[2, 0, 4],
		[2, 1, 8],
		[2, 2, 4],
		[2, 3, 8],
		[3, 0, 6],
		[3, 1, 7],
		[3, 2, 4],
		[3, 3, 9],
	];
	option = {
		title: {
			text: '',
			textStyle: {
				fontSize: 18,
				fontWeight: 600,
				fontFamily: 'siyuanheiti_Thin'
			},
			subtext: '',
			subtextStyle: {
				fontSize: 16,
			}
		},
		tooltip: {
			show: false
		},
		visualMap: {
			show: false,
			max: 20,
			inRange: {
				color: ['#FF4500', '#FF6347', '#CD5C5C', '#B22222', '#CD5C5C', '#F08080', '#FA8072']
			}
		},
		xAxis3D: {
			name: '',
			type: 'category',
			data: hours
		},
		yAxis3D: {
			name: '',
			type: 'category',
			data: days
		},
		zAxis3D: {
			name: '',
			type: 'value'
		},
		grid3D: {
			boxWidth: 200,
			boxDepth: 120,
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#ccc',
					width: 1
				}
			},
			axisLabel: {
				color: "rgba(255,255,255,.6)",
                    fontSize: '12',
			},
			light: {
				main: {
					intensity: 1.2,
					shadow: true
				},
				ambient: {
					intensity: 0.7,
					shadow: true
				}
			},
			viewControl: {
				alpha: 15,
				beta: 40,
				autoRotate: true,
				zoomSensitivity: 0,
				autoRotateAfterStill: 5,
				distance: 250
			}
		},
		series: [{
			type: 'bar3D',
			name: '数量',
			data: data.map(function(item) {
				return {
					value: [item[0], item[1], item[2]]
				}
			}),
			shading: 'lambert',
			label: {
				show: true,
				distance: 1,
				textStyle: {
					color: '#32CD32',
					fontSize: 18,
					borderWidth: 0,
					borderColor: 'none',
					backgroundColor: 'rgba(255,255,255,0)',
					fontFamily: 'impact, Simhei'
				},
			},
			itemStyle: {
				opacity: 1
			},
			/*emphasis: {
				label: {
					textStyle: {
						fontSize: 20,
						color: '#900'
					}
				},
				itemStyle: {
					color: '#900'
				}
			}*/
		}]
	}
	 // 使用刚指定的配置项和数据显示图表。
        wbzl.setOption(option);
        window.addEventListener("resize",function(){
            wbzl.resize();
        });
}
//无线烟感
function wxyg() {
        // 基于准备好的dom，初始化echarts实例
        var wxyg = echarts.init(document.getElementById('wxyg'));

       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['设备数量', '本月报警', '上月报警'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
       
        type: 'bar',
        data: [ 600, 200, 900],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#27d08a',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        wxyg.setOption(option);
        window.addEventListener("resize",function(){
            wxyg.resize();
        });
}


function yqbj() {
	var yqbj = echarts.init(document.getElementById('yqbj'));
	option = {
    //backgroundColor: '#000',
    color: ["#37b70c", "#fae521", "#d0a00e"],
    
    tooltip: {
        show: false,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },
    xAxis3D: {
        type: 'category',
        data: ['设备数量', '本月报警', '上月报警'],
       axisLine: {
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            rotate: 45,
            textStyle: {
                color: '#fff',
                fontSize: 12,
            }
        },
    },
    yAxis3D: {
		
        type: 'category',
        data: [''],
         axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
    },
    zAxis3D: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#0f0',
                width: 1
            }
        },
    },
    grid3D: {
        boxWidth: 250,
        boxDepth: 2,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl: {
            alpha: 20,
            beta: 0,
            autoRotate: true,
            zoomSensitivity: 0,
            autoRotateAfterStill: 10,
            distance: 200
        }
    },
    series: [{
        type: 'bar3D',
        name: '1',
        barSize: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        "#37b70c",  "#dd3f36", "#d0a00e"
                    ];
                    return colorList[params.dataIndex]
                },
            }
        },
        data: [
            [0, 0, 100],
            [1, 0, 20],
            [2, 0, 60],
        ],
        stack: 'stack',
        shading: 'lambert',
        emphasis: {
            label: {
                show: true
            }
        }

    }]
};

	 yqbj.setOption(option);
	  window.addEventListener("resize",function(){
            yqbj.resize();
        });
}

//无线烟感
function wwbzl() {
        // 基于准备好的dom，初始化echarts实例
        var wwbzl = echarts.init(document.getElementById('wwbzl'));

	// 小气泡
	var img = 'data:image/png;base64,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';
	var img2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGUCAYAAAAbLnTaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM4RTBFOTkxQTI1MTFFQUJBNkVGOUMyQzU5NDIxNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM4RTBFOUExQTI1MTFFQUJBNkVGOUMyQzU5NDIxNzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzhFMEU5NzFBMjUxMUVBQkE2RUY5QzJDNTk0MjE3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzhFMEU5ODFBMjUxMUVBQkE2RUY5QzJDNTk0MjE3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiqU+98AAIGQSURBVHja7L2HkzTZ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'
	//字符串截取
	var wordLength = (value) => {
		var ret = ""; //拼接加\n返回的类目项
		var maxLength = 4; //每项显示文字个数
		var valLength = value.length; //X轴类目项的文字个数
		var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
		if (rowN > 1) //如果类目项的文字大于3,
		{
			for (var i = 0; i < rowN; i++) {
				var temp = ""; //每次截取的字符串
				var start = i * maxLength; //开始截取的位置
				var end = start + maxLength; //结束截取的位置
				//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
				temp = value.substring(start, end) + "\n";
				ret += temp; //凭借最终的字符串
			}
			return ret;
		} else {
			return value;
		}
	}
	//
	var data = [{
			name: "做饭",
			value: "355"
		},
		{
			name: "粉尘",
			value: "193"
		},
		{
			name: "误报",
			value: "874"
		},
		{
			name: "其它",
			value: "427"
		},
		{
			name: "吸烟",
			value: "308"
		},

	];
	//偏移量
	var offsetData = [
		[80, 53],
		[35, 73],
		[30, 33],
		[60, 33],
		[10, 48]
	];
	//symbolSize 散点气泡大小
	var symbolSizeData = [100, 85, 75, 65, 35];
	//
	//循环定义series的data值
	var datas = [];
	for (var i = 0; i < data.length; i++) {
		var item = data[i];
		//var itemToStyle = datalist[i];

		datas.push({
			name: wordLength(item.name) + "\n" + item.value + "人",
			value: offsetData[i],
			symbolSize: symbolSizeData[i],
			label: {
				normal: {
					textStyle: {
						fontSize: 12
					}
				}
			},
			itemStyle: {
				normal: {
					color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
							offset: 0,
							color: "#8B0000"
						},
						{
							offset: 1,
							color: "#FF0000"
						}
					]),
					opacity: 0.8,
					shadowColor: '#2e78eca8',
					shadowBlur: 10,
					shadowOffsetX: 1,
					shadowOffsetY: 1,
				},

			}
		});
	}

	var option = {
		//   backgroundColor: "transparent",
		//backgroundColor: '#0e2147',
		grid: {
			show: false,
			top: 10,
			bottom: 10
		},
		xAxis: [{
			gridIndex: 0,
			type: "value",
			show: false,
			min: 0,
			max: 100,
			nameLocation: "middle",
			nameGap: 5
		}],
		yAxis: [{
			gridIndex: 0,
			min: 0,
			show: false,
			max: 100,
			nameLocation: "middle",
			nameGap: 30
		}],
	   
		series: [{
			type: "scatter",
			symbol: "circle",
			symbolSize: 120,
			label: {
				normal: {
					show: true,
					formatter: "{b}",
					color: "#fff",
					textStyle: {
						fontSize: "20"
					}
				}
			},
			animationDurationUpdate: 1000,
			animationEasingUpdate: 1000,
			animationDelay: function(idx) {
				// 越往后的数据延迟越大
				return  100;
			},
			itemStyle: {
				normal: {
					color: "#00acea"
				}
			},
			data: datas
		}],
		 graphic: [
			{
				type: 'image',
				id: 'logo',
				left: '45%',
				bottom: '30%',
				z: -10,
				bounding: 'raw',
				origin: [675, 5],
				//  position: [100, 0], // 平移，默认值为 [0, 0]。
				style: {
					image: img2,
					width: 120,
					height: 120,
					opacity: 0.4
				}
			},
			{
				type: 'image',
				id: 'logo1',
				right: '14%',
				bottom: '0',
				z: -10,
				bounding: 'raw',
				origin: [275, 5],
				style: {
					image: img2,
					width: 80,
					height: 80,
					opacity: 0.4
				}
			},
			 {
				type: 'image',
				id: 'logo2',
				left: '10%',
				bottom: '2%',
				z: -10,
				bounding: 'raw',
				origin: [875, 15],
				style: {
					image: img2,
					width: 60,
					height: 60,
					opacity: 0.4
				}
			}, {
				type: 'image',
				id: 'logo3',
				left: '36%',
				bottom: 0,
				z: -10,
				bounding: 'raw',
				origin: [975, 5],
				style: {
					image: img2,
					width: 40,
					height: 40,
					opacity: 0.4
				}
			},
			 {
				type: 'image',
				id: 'logo4',
				left: '32%',
				bottom: '10%',
				z: -10,
				bounding: 'raw',
				origin: [76, 76],
				style: {
					image: img2,
					width: 50,
					height: 50,
					opacity: 0.4
				}
			},
			 {
				type: 'image',
				id: 'logo5',
				left: '40%',
				bottom: '35%',
				z: -10,
				bounding: 'raw',
				origin: [76, 76],
				style: {
					image: img2,
					width: 90,
					height: 90,
					opacity: 0.4
				}
			},
			],
	};

	var rotation = 0;
	setInterval(function () {
		wwbzl.setOption({
			graphic:[
				 {
				id: 'logo',
				rotation: -(rotation += Math.PI / 860) % (Math.PI * 2),
				},
				{
				id: 'logo1',
				rotation: -(rotation += Math.PI / 640) % (Math.PI * 2),
				},
				{
				 id: 'logo2',
				rotation: -(rotation += Math.PI / 360) % (Math.PI * 2),
				},
				 {
				id: 'logo3',
				rotation: -(rotation += Math.PI / 720) % (Math.PI * 2),
				},
				]
		});
	}, 30);


// 使用刚指定的配置项和数据显示图表。
        wwbzl.setOption(option);
        window.addEventListener("resize",function(){
            wwbzl.resize();
        });
}


function test(){
var myChart = echarts.init(document.getElementById('echarts4'));
        var plantCap = [{
            name: '工业',
            value: '222'
        }, {
            name: '农业',
            value: '115'
        }, {
            name: '互联网',
            value: '113'
        }, {
            name: '医疗',
            value: '95'
        }, {
            name: '文学',
            value: '92'
        }, {
            name: '服装',
            value: '87'
        }];
        var datalist = [{
            offset: [56, 48],
            symbolSize: 110,
   
            color: 'rgba(73,188,247,.14)',

        }, {

            offset: [30, 70],
            symbolSize: 70,
            color: 'rgba(73,188,247,.14)'
        }, {
            offset: [0, 43],
            symbolSize: 60,
            color: 'rgba(73,188,247,.14)'

        }, {
            offset: [93, 30],
            symbolSize: 70,
            color: 'rgba(73,188,247,.14)'
        }, {
            offset: [26, 19],
            symbolSize: 65,
            color: 'rgba(73,188,247,.14)'
        }, {
            offset: [75, 75],
            symbolSize: 60,
            color: 'rgba(73,188,247,.14)'

        }];

        var datas = [];
        for (var i = 0; i < plantCap.length; i++) {
            var item = plantCap[i];
            var itemToStyle = datalist[i];
            datas.push({
                name: item.value + '\n' + item.name,
                value: itemToStyle.offset,
                symbolSize: itemToStyle.symbolSize,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },

                itemStyle: {
                    normal: {
                        color: itemToStyle.color,
                        opacity: itemToStyle.opacity
                    }
                },
            })
        }
        option = {
            grid: {
                show: false,
                top: 10,
                bottom: 10
            },

            xAxis: [{
                gridIndex: 0,
                type: 'value',
                show: false,
                min: 0,
                max: 100,
                nameLocation: 'middle',
                nameGap: 5
            }],

            yAxis: [{
                gridIndex: 0,
                min: 0,
                show: false,
                max: 100,
                nameLocation: 'middle',
                nameGap: 30
            }],
            series: [{
                type: 'scatter',
                symbol: 'circle',
                symbolSize: 120,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        color: '#FFF',
                        textStyle: {
                            fontSize: '30'
                        }
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#F30'
                    }
                },
                data: datas
            }]

        };
        myChart.setOption(option);
        $(document).ready(function () {
            myChart.resize();

        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
}

//水报警
function sbj(){
	var myChart = echarts.init(document.getElementById('sbj'));
	let [in_new, in_min, in_max, in_avg] = ['0', '0', '0', '0', ]
	let [out_new, out_min, out_max, out_avg] = ['0', '0', '0', '0', ]
	let {
		date,
		in_data,
		out_data
	} = {
		date: [],
		in_data: [],
		out_data: []
	}
	// 格式化时间
	function getTime() {
		var ts = arguments[0] || 0;
		var t, h, i, s;
		t = ts ? new Date(ts * 1000) : new Date();
		h = t.getHours();
		i = t.getMinutes();
		s = t.getSeconds();
		// 可根据需要在这里定义时间格式
		return (h < 10 ? '0' + h : h) + ':' + (i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
	}
	// 生成初始数据
	for (var i = 0; i < 100; i++) {
		in_data.push(Math.ceil(Math.random() * 500));
		out_data.push(Math.ceil(Math.random() * 800));
		date.push(getTime(Math.round(new Date().getTime() / 1000) - i))
	}
	option = {
		title: [{
			text: '',
			x: 15,
			y: '20',
			textBaseline: 'middle',
			textStyle: {
				fontSize: 20,
				fontWeight: '500'
			}
		}, {
			text: '',
			x: 15,
			y: '40',
			textBaseline: 'middle',
			textStyle: {
				color:'#cccccc',
				fontSize: 16,
				fontWeight: '100'
			}
		}, {
			text: '最新',
			x2: 215,
			y: '10',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: '最小',
			x2: 145,
			y: '10',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: '最大',
			x2: 75,
			y: '10',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: '平均',
			x2: 5,
			y: '10',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: in_new,
			x2: 215,
			y: '26',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: in_min,
			x2: 145,
			y: '26',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: in_max,
			x2: 75,
			y: '25',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: in_avg,
			x2: 5,
			y: '25',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: out_new,
			x2: 215,
			y: '40',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: out_min,
			x2: 145,
			y: '40',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {
			text: out_max,
			x2: 75,
			y: '40',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}, {

			text: out_avg,
			x2: 5,
			y: '40',
			textBaseline: 'middle',
			textStyle: {
				color: "#fff",
				fontSize: 12,
				fontWeight: '100'
			}
		}],
		legend: [{
			x2: 260,
			y: 20,
			icon: 'rect',
			itemGap: 3,
			itemWidth: 11,
			textStyle: {
 					color: "#fff",
                    fontSize: '12',
                },

			itemHeight: 11,
			orient: 'vertical',
			data: ['压力', '液压']
		}],
		grid: [{
			left: 20,
			right: 20,
			top: 80,
			bottom: 20,
			containLabel: true
		}],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#57617B'
				}
			}
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel:  {
               // rotate:50,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
			data: date
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				formatter: '{value}MPa',
				textStyle: {
					color: "rgba(255,255,255,.6)",
					fontSize: 12
				}
			},
			splitLine: {
				lineStyle: {
					color: '#cccccc'
				}
			}
		}],
		series: [{
			name: '压力',
			type: 'line',
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 0
				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(0,0,255)'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0,0,255, 1)'
					}, {
						offset: 0.8,
						color: 'rgba(0,0,255, 0.5)'
					}])
				},
			},
			data: out_data
		}, {
			name: '液压',
			type: 'line',
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 0
				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(0,255,0)'
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0,255,0,1)'
					}, {
						offset: 0.8,
						color: 'rgba(0,255,0, 0.5)'
					}])
				},
			},
			data: in_data
		}]
	};
	setInterval(function() {
		date.shift()
		in_data.shift();
		out_data.shift();
		in_data.push(Math.ceil(Math.random() * 500));
		out_data.push(Math.ceil(Math.random() * 800));
		date.push(getTime(Math.round(new Date().getTime() / 1000)))

		in_new = in_data[in_data.length - 1]
		out_new = out_data[out_data.length - 1]
		in_min = Math.min.apply(null, in_data);
		in_max = Math.max.apply(null, in_data);
		out_min = Math.min.apply(null, out_data);
		out_max = Math.max.apply(null, out_data);
		in_avg = in_data.reduce(function(tmp, item, index) {
			if (index != in_data.length - 1) {
				return tmp + item;
			} else {
				return (tmp + item) / out_data.length;
			}
		});
		out_avg = out_data.reduce(function(tmp, item, index) {
			if (index != out_data.length - 1) {
				return tmp + item;
			} else {
				return (tmp + item) / out_data.length;
			}
		});

		myChart.setOption({
			title: [{
				text: ''
			}, {
				text: ''
			}, {
				text: '最新'
			}, {
				text: '最小',
			}, {
				text: '最大'
			}, {
				text: '平均'
			}, {
				text: in_new 
			}, {
				text: in_min
			}, {
				text: in_max
			}, {
				text: in_avg
			}, {
				text: out_new
			}, {
				text: out_min
			}, {
				text: out_max
			}, {
				text: out_avg
			}],
			series: [{
				data: out_data
			}, {
				data: in_data
			}],
			xAxis: [{
				data: date
			}],
		});
	}, 1000)
	
	 myChart.setOption(option);
        $(document).ready(function () {
            myChart.resize();

        })
        window.addEventListener("resize", function () {
            myChart.resize();
        });
}

function dbj(){
	var dbj = echarts.init(document.getElementById('dbj'));
option = {
tooltip : {
	formatter: "{a} <br/>{c} {b}"
},
toolbox: {
	show: false,
	feature: {
		restore: {show: true},
		saveAsImage: {show: true}
	}
},
series : [
	{
		name: '温度1',
		type: 'gauge',
		center: ['30%', '31%'], 
		z: 3,
		min: 0,
		max: 20,
		splitNumber: 10,
		radius: '60%',
		axisLine: {            // 坐标轴线
			lineStyle: {       // 属性lineStyle控制线条样式
				color: [[0.2, '#7FFF00'], [0.8, '#00FFFF'], [1, '#FF0000']],
				width: 6
			}
		},
		axisTick: {            // 坐标轴小标记
			length: 5,        // 属性length控制线长
			lineStyle: {       // 属性lineStyle控制线条样式
				color: 'auto'
			}
		},
		splitLine: {           // 分隔线
			length: 20,         // 属性length控制线长
			lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
				color: 'auto'
			}
		},
		pointer: {
			width:2
		},
		title : {
			textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				fontWeight: 'normal',
				color: '#fff',
				fontSize: 12,
				offsetCenter: ['15%', '-20%'],       // x, y，单位px
				// fontStyle: 'italic'
			}
		},
		detail : {
			textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				fontWeight: 'normal',
				fontSize: 12
			}
		},
		data:[{value: 1, name: '温度1'}]
	},
	{
		name: 'A相电流',
		type: 'gauge',
		center: ['60%', '31%'], 
		z: 3,
		min: 0,
		max: 8,
		splitNumber:8,
		radius: '60%',
		axisLine: {            // 坐标轴线
			lineStyle: {       // 属性lineStyle控制线条样式
				color: [[0.2, '#7CFC00'], [0.8, '#00FFFF'], [1, '#FF0000']],
				width: 6
			}
		},
		axisTick: {            // 坐标轴小标记
			length: 15,        // 属性length控制线长
			lineStyle: {       // 属性lineStyle控制线条样式
				color: 'auto'
			}
		},
		splitLine: {           // 分隔线
			length: 20,         // 属性length控制线长
			lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
				color: 'auto'
			}
		},
		pointer: {
			width:4
		},
		title : {
			textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				fontWeight: 'normal',
				color: '#fff',
				fontSize: 12,
				// fontStyle: 'italic'
			}
		},
		detail : {
			textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				fontWeight: 'normal',
				fontSize: 12
			}
		},
		data:[{value: 4, name: 'A相电流'}]
	},
	{
		name: 'A相电压',
		type: 'gauge',
		center: ['10%', '60%'],    // 默认全局居中
		radius: '35%',
		min:0,
		max:540,
		startAngle: 180,
		endAngle: 0,
		splitNumber:2,
		axisLine: {            // 坐标轴线
			lineStyle: {       // 属性lineStyle控制线条样式
				color: [[0.2, '#7CFC00'], [0.8, '#00FFFF'], [1, '#FF0000']],
				width: 4
			}
		},
		axisTick: {            // 坐标轴小标记
			length:12,        // 属性length控制线长
			lineStyle: {       // 属性lineStyle控制线条样式
				color: 'auto'
			}
		},
		splitLine: {           // 分隔线
			length:20,         // 属性length控制线长
			lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
				color: 'auto'
			}
		},
		pointer: {
			width:3
		},
		title: {
			offsetCenter: ['5%', '-20%'],       // x, y，单位px
			color: '#fff',
				fontSize: 12,
		},
		detail: {
			textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
				fontSize: 12,
				fontWeight: 'normal'
			}
		},
		data:[{value:270, name: 'A相电压'}]
	},
	{
		name: '剩余电流',
		type: 'gauge',
		center: ['80%', '60%'],    // 默认全局居中
		radius: '35%',
		min: 0,
		max: 2,
		startAngle: 180,
		endAngle: 0,
		splitNumber: 2,
		axisLine: {            // 坐标轴线
			lineStyle: {       // 属性lineStyle控制线条样式
				color: [[0.2, '#7CFC00'], [0.8, '#00FFFF'], [1, '#FF0000']],
				width: 4
			}
		},
		axisTick: {            // 坐标轴小标记
			splitNumber: 5,
			length: 10,        // 属性length控制线长
			lineStyle: {       // 属性lineStyle控制线条样式
				color: 'auto'
			}
		},
		axisLabel: {
			formatter:function(v){
				switch (v + '') {
					case '0' : return 'E';
					case '1' : return '1/2';
					case '2' : return 'F';
				}
			}
		},
		splitLine: {           // 分隔线
			length: 15,         // 属性length控制线长
			lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
				color: 'auto'
			}
		},
		pointer: {
			width:2
		},
	   title: {
			offsetCenter: ['5%', '35%'],       // x, y，单位px
			color: '#fff',
				fontSize: 12,
		},
		detail : {
			show: false
		},
		data:[{value: 270, name: '剩余电流'}]
	}
]
};
setInterval(function (){
option.series[0].data[0].value = (Math.random()*30).toFixed(2) - 0;
option.series[1].data[0].value = (Math.random()*8).toFixed(2) - 0;
option.series[2].data[0].value = (Math.random()*300).toFixed(2) - 0;
option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
dbj.setOption(option,true);
},2000);	
   dbj.setOption(option);
        $(document).ready(function () {
            dbj.resize();

        })
        window.addEventListener("resize", function () {
            dbj.resize();
        });
}
