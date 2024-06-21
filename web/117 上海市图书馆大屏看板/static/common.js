// 新增馆藏/新增读者分析
var dom = document.getElementById("echarts_1");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985',
				Color: '#fff'
			}
		}
	},
	legend: {
		textStyle: {
			fontSize: 14,
			color: '#a7cdff'
		},
		bottom: 0,
		data: ['新增馆藏', '新增读者']
	},
	grid: {
		top: '3%',
		left: '5%',
		right: '5%',
		bottom: '15%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		//刻度线
		axisTick: {
			show: false
		},
		// boundaryGap: false,
		data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
		axisLine: {
			lineStyle: {
				color: '#a7cdff',
				width: 0, //这里是为了突出显示加上的
			}
		},
	}, ],
	yAxis: [{
		type: 'value',
		boundaryGap: [0.2, 0.2],
		//刻度线
		axisTick: { //y轴刻度线
			show: false
		},
		//字体颜色
		axisLine: {
			lineStyle: {
				color: '#a7cdff',
				width: 0, //这里是为了突出显示加上的
			}
		},
		//网格线
		splitLine: {
			show: true,
			lineStyle: {
				color: ['#23569b'],
				width: 1,
				type: 'dashed'
			}
		}
	}],
	color: ['#6dc1ff', '#f9b008'],
	series: [{
			name: '新增馆藏',
			type: 'line',

			areaStyle: {
				normal: {
					//颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

						offset: 0,
						color: 'rgba(109,193,255,0.6)'
					}, {
						offset: .8,
						color: 'rgba(56,155,255,0.4)'
					}, {
						offset: 1,
						color: 'rgba(38,197,254,0.00)'
					}])

				}
			},
			data: [25000, 30000, 55000, 70000, 90000, 105000, 111111]
		},
		{
			name: '新增读者',
			type: 'line',
			areaStyle: {
				normal: {
					//颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

						offset: 0,
						color: 'rgba(249,176,8,0.8)'
					}, {
						offset: .34,
						color: 'rgba(249,176,8,0.4)'
					}, {
						offset: 1,
						color: 'rgba(249,176,8,0.1)'
					}])
				}
			},
			data: [19000, 24000, 35000, 49000, 70000, 85000, 91111]
		}
	],

};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}



// 到馆人次/借阅册次分析 年
var dom2 = document.getElementById("echarts_2");
var myChart = echarts.init(dom2);
var app = {};
option = null;
option = {
	title: {
		text: ''
	},

	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985',
				Color: '#fff'
			}
		}
	},
	legend: {
		textStyle: {
			fontSize: 13,
			color: '#a7cdff'
		},
		bottom: 0,
		data: ['新增馆藏', '新增读者']
	},

	grid: {
		top: '3%',
		left: '5%',
		right: '5%',
		bottom: '15%',
		containLabel: true
	},
	xAxis: [{
			type: 'category',
			// boundaryGap: false,
			//刻度线
			axisTick: {
				show: false
			},
			data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
			axisLine: {
				lineStyle: {
					color: '#a7cdff',
					width: 0, //这里是为了突出显示加上的
				}
			},
		},
	],
	yAxis: [{
			type: 'value',
			boundaryGap: [0.2, 0.2],
			//刻度线
			axisTick: { //y轴刻度线
				show: false
			},
			//字体颜色
			axisLine: {
				lineStyle: {
					color: '#a7cdff',
					width: 0, //这里是为了突出显示加上的
				}
			},
			//网格线
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#23569b'],
					width: 1,
					type: 'dashed'
				}
			}
		}
	],
	color: ['#00c5d1', '#007dec'],
	series: [{
			name: '新增馆藏',
			type: 'bar',
			barWidth: '15',
			barGap: 0,
			data: [45000, 35000, 70000, 80200, 55800, 62200, 43000],
			itemStyle: {
				normal: {
					barBorderRadius: [40, 40, 0, 0],
					color: new echarts.graphic.LinearGradient(
						1, 0, 1, 1,
						[{
								offset: 0,
								color: '#00c7d2'
							}, {
								offset: 0.5,
								color: '#0389b2'
							},
							{
								offset: 1,
								color: '#045595'
							}
						]
					)
				},
			}
		},
		{
			name: '新增读者',
			type: 'bar',
			barWidth: '15',
			barGap: 0,
			itemStyle: {
				normal: {
					barBorderRadius: [40, 40, 0, 0],
					color: new echarts.graphic.LinearGradient(
						1, 0, 1, 1,
						[{
								offset: 0,
								color: '#0083f5'
							}, {
								offset: 0.5,
								color: '#0964c1'
							},
							{
								offset: 1,
								color: '#04479b'
							}
						]
					)
				},
			},
			data: [56000, 65540, 69900, 45500, 52800, 62800, 59000]
		}
	],


};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}

// 到馆人次/借阅册次分析  月
var dom21 = document.getElementById("echarts_21");
var myChart = echarts.init(dom21);
var app = {};
option = null;
option = {
	title: {
		text: ''
	},

	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985',
				Color: '#fff'
			}
		}
	},
	legend: {
		textStyle: {
			fontSize: 13,
			color: '#a7cdff'
		},
		bottom: 0,
		data: ['新增馆藏', '新增读者']
	},

	grid: {
		top: '3%',
		left: '5%',
		right: '5%',
		bottom: '15%',
		containLabel: true
	},
	xAxis: [{
			type: 'category',
			// boundaryGap: false,
			//刻度线
			axisTick: {
				show: false
			},
			data: ['01', '02', '03', '04', '05', '06', '07'],
			axisLine: {
				lineStyle: {
					color: '#a7cdff',
					width: 0, //这里是为了突出显示加上的
				}
			},
		},
	],
	yAxis: [{
			type: 'value',
			boundaryGap: [0.2, 0.2],
			//刻度线
			axisTick: { //y轴刻度线
				show: false
			},
			//字体颜色
			axisLine: {
				lineStyle: {
					color: '#a7cdff',
					width: 0, //这里是为了突出显示加上的
				}
			},
			//网格线
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#23569b'],
					width: 1,
					type: 'dashed'
				}
			}
		}
	],
	color: ['#00c5d1', '#007dec'],
	series: [{
			name: '新增馆藏',
			type: 'bar',
			barWidth: '15',
			barGap: 0,
			data: [9800, 12000, 10000, 10200, 8800, 12200, 13000],
			itemStyle: {
				normal: {
					barBorderRadius: [40, 40, 0, 0],
					color: new echarts.graphic.LinearGradient(
						1, 0, 1, 1,
						[{
								offset: 0,
								color: '#00c7d2'
							}, {
								offset: 0.5,
								color: '#0389b2'
							},
							{
								offset: 1,
								color: '#045595'
							}
						]
					)
				},
			}
		},
		{
			name: '新增读者',
			type: 'bar',
			barWidth: '15',
			barGap: 0,
			itemStyle: {
				normal: {
					barBorderRadius: [40, 40, 0, 0],
					color: new echarts.graphic.LinearGradient(
						1, 0, 1, 1,
						[{
								offset: 0,
								color: '#0083f5'
							}, {
								offset: 0.5,
								color: '#0964c1'
							},
							{
								offset: 1,
								color: '#04479b'
							}
						]
					)
				},
			},
			data: [5800, 11100, 12100, 9200, 11800, 12800, 7000]
		}
	],


};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}


// 到馆人次/借阅册次分析  日
var dom22 = document.getElementById("echarts_22");
var myChart = echarts.init(dom22);
var app = {};
option = null;
option = {
	title: {
		text: ''
	},

	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985',
				Color: '#fff'
			}
		}
	},
	legend: {
		textStyle: {
			fontSize: 13,
			color: '#a7cdff'
		},
		bottom: 0,
		data: ['新增馆藏', '新增读者']
	},

	grid: {
		top: '3%',
		left: '5%',
		right: '5%',
		bottom: '15%',
		containLabel: true
	},
	xAxis: [{
			type: 'category',
			// boundaryGap: false,
			//刻度线
			axisTick: {
				show: false
			},
			data: ['01', '02', '03', '04', '05', '06', '07'],
			axisLine: {
				lineStyle: {
					color: '#a7cdff',
					width: 0, //这里是为了突出显示加上的
				}
			},
		},
	],
	yAxis: [{
			type: 'value',
			boundaryGap: [0.2, 0.2],
			//刻度线
			axisTick: { //y轴刻度线
				show: false
			},
			//字体颜色
			axisLine: {
				lineStyle: {
					color: '#a7cdff',
					width: 0, //这里是为了突出显示加上的
				}
			},
			//网格线
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#23569b'],
					width: 1,
					type: 'dashed'
				}
			}
		}
	],
	color: ['#00c5d1', '#007dec'],
	series: [{
			name: '新增馆藏',
			type: 'bar',
			barWidth: '15',
			barGap: 0,
			data: [1500, 2000, 1000, 1200, 800, 2200, 3000],
			itemStyle: {
				normal: {
					barBorderRadius: [40, 40, 0, 0],
					color: new echarts.graphic.LinearGradient(
						1, 0, 1, 1,
						[{
								offset: 0,
								color: '#00c7d2'
							}, {
								offset: 0.5,
								color: '#0389b2'
							},
							{
								offset: 1,
								color: '#045595'
							}
						]
					)
				},
			}
		},
		{
			name: '新增读者',
			type: 'bar',
			barWidth: '15',
			barGap: 0,
			itemStyle: {
				normal: {
					barBorderRadius: [40, 40, 0, 0],
					color: new echarts.graphic.LinearGradient(
						1, 0, 1, 1,
						[{
								offset: 0,
								color: '#0083f5'
							}, {
								offset: 0.5,
								color: '#0964c1'
							},
							{
								offset: 1,
								color: '#04479b'
							}
						]
					)
				},
			},
			data: [500, 1500, 900, 500, 1800, 2800, 2000]
		}
	],


};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}



// 7小时内读者滞馆情况
var dom3 = document.getElementById("echarts_3");
var myChart = echarts.init(dom3);
var app = {};
option = null;
option = {
	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			label: {
				backgroundColor: '#6a7985',
				Color: '#fff'
			}
		}
	},
	legend: {
		textStyle: {
			fontSize: 14,
			color: '#a7cdff'
		},
		bottom: 0,
		data: ['总数据']
	},
	grid: {
		top: '3%',
		left: '5%',
		right: '5%',
		bottom: '12%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		//刻度线
		axisTick: {
			show: false
		},
		// boundaryGap: false,
		data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
		axisLine: {
			lineStyle: {
				color: '#a7cdff',
				width: 0, //这里是为了突出显示加上的
			}
		},
	}, ],
	yAxis: [{
		type: 'value',
		boundaryGap: [0.2, 0.2],
		//刻度线
		axisTick: { //y轴刻度线
			show: false
		},
		//字体颜色
		axisLine: {
			lineStyle: {
				color: '#a7cdff',
				width: 0, //这里是为了突出显示加上的
			}
		},
		//网格线
		splitLine: {
			show: true,
			lineStyle: {
				color: ['#23569b'],
				width: 1,
				type: 'dashed'
			}
		}
	}],
	color: ['#6dc1ff', '#f9b008'],
	series: [{
		name: '总数据',
		type: 'line',
		smooth: true,
		areaStyle: {
			normal: {
				//颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

					offset: 0,
					color: 'rgba(100,182,245,0.6)'
				}, {
					offset: .8,
					color: 'rgba(100,182,245,0.3)'
				}, {
					offset: 1,
					color: 'rgba(100,182,245,0.0)'
				}])

			}
		},
		data: [35, 56, 41, 35, 49, 60, 70]
	}],

};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}





// 男女比例

var dom4 = document.getElementById("echarts_4");
var myChart = echarts.init(dom4);
var app = {};
var option;
option = {
	// title: {
	//   text: '男女比例'
	// },
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},

	legend: {
		type: 'scroll',
		// orient: 'vertical',
		// right: 20,
		// top: 0,
		bottom: 20,
		textStyle: {
			color: "#fff", // 文字的颜色。
		},
		data: ['女', '男', ]
	},
	color: ['#fc8cc6', '#1c9fff'],

	series: [

		{
			name: '男女比例',
			type: 'pie',
			radius: ['30%', '55%'],

			labelLine: {
				length: -10
			},
			label: {
				formatter: ' {b}{d}%  ',
			},
			data: [{
					value: 550,
					name: '女'
				},
				{
					value: 450,
					name: '男'
				},
			]
		}
	]
};


if (option && typeof option === 'object') {
	myChart.setOption(option);
}


// 年龄段比例

var dom5 = document.getElementById("echarts_5");
var myChart = echarts.init(dom5);
var app = {};
var option;
option = {
	 tooltip: {
	    trigger: 'item',
	    formatter: '{a} <br/>{b} {c} '
	  },
	// title: {
	//   text: '年龄段比例'
	// },

	textStyle: {
		color: "#fff", // 文字的颜色。
	},
	legend: {
		type: 'scroll',
		orient: 'vertical',
		// right: 20,
		// top: 0,
		bottom: 20,
		textStyle: {
			color: "#fff", // 文字的颜色。
		},
		data: ['年龄段比例']
	},
	color: ['#2df3f2'],
	radar: {
		radius: 80, //大小
		textStyle: {
			color: "#fff", // 文字的颜色。
			
		},
		  //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
		        splitArea : {
		            show : false,
		            areaStyle : {
		                color: 'rgba(255,0,0,0)', // 图表背景的颜色
		            },
		        },
		        splitLine : {
		            show : true,
		            lineStyle : {
		                width : 1,
		                color : 'rgba(255,255,255,.7)', // 设置网格的颜色
		            },
		        },
				 // 设置雷达图中间射线的颜色
				        axisLine: {
				            lineStyle: {
				                color: 'rgba(131,141,158,.0)',
				                },
				        },
		
		// center:[150,130],//雷达图位置：中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
		// shape: 'circle',

		indicator: [{
				name: '0-6岁\n儿童',
				max: 100
			},
			{
				name: '7-17岁\n少年  ',
				max: 100
			},
			{
				name: '18-40岁\n青年  ',
				max: 100
			},
			{
				name: '41-65岁\n  中年',
				max: 100
			},
			{
				name: '65以上\n  老年',
				max: 100
			}
		]
	},
	series: [{
		
		name: '年龄段比例',
		type: 'radar',
		symbolRotate: 0,
		symbolSize: 0,

		data: [{
			areaStyle: {
				color: 'rgba(45, 243, 242, 0.5)'
			},
			value: [80, 98, 45, 78, 55],
			
		}]
	}]
};
if (option && typeof option === 'object') {
	myChart.setOption(option);
}
