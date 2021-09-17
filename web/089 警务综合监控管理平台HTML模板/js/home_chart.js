
	$(function () {
		var myChart = echarts.init(document.getElementById('con2'));
		var option = {

			tooltip : {
				trigger: 'axis'
			},
			legend: {
				x : 'left',
				orient : 'vertical',
				data:['主观动机','附着动机','潜藏危机'],
				textStyle:{
					color:"#0089f3"
				}
			},


			calculable : true,
			polar : [
				{
					indicator : [
						{text : 'CASENO01', max  : 100},
						{text : 'CASENO02', max  : 100},
						{text : 'CASENO03', max  : 100},
						{text : 'CASENO04', max  : 100},
						{text : 'CASENO05', max  : 100},
						{text : 'CASENO06', max  : 100}
					],
					splitArea : {
						show : true,
						areaStyle : {
							color: ['rgba(250,0,250,0)','rgba(250,0,250,0)','rgba(250,0,250,0)']
						}
					},
					axisLine: {            // 坐标轴线
						show: true,        // 默认显示，属性show控制显示与否
						lineStyle: {       // 属性lineStyle控制线条样式
							color: '#08ffff',
							width: 2,
							type: 'solid'
						}
					},

					splitLine : {
						show : true,
						lineStyle : {
							width : 2,
							color : '#165ec5'
						}
					},
					name: {
						textStyle: { color: '#0193f6' }
					},
					radius : 100
				}
			],
			series : [
				{
					name: '',
					type: 'radar',
					itemStyle: {
						normal: {
							areaStyle: {
								type: 'default'
							}
						}
					},
					data : [
						{
							value : [97, 42, 88, 94, 90, 86],
							name : '主观动机',
							itemStyle: {
								normal: {
									color: function(params) {
										var value = params.data
										return isNaN(value)
											? undefined
											: (value >= 90 ? '#08fdfe' : '#fdd32')
									}}},

						},
						{
							value : [97, 32, 74, 95, 88, 92],
							name : '附着动机',
							itemStyle: {
								normal: {
									color: function(params) {
										var value = params.data
										return isNaN(value)
											? undefined
											: (value >= 100 ? 'yellow' : 'bule')
									}}},
						},
						{
							value : [77, 32, 75, 95, 88, 88],
							name : '潜藏危机'
						}
					]
				}
			]
		};
		myChart.setOption(option);
		window.onresize = myChart.resize
	});


$(function(){
	var myChart = echarts.init($("#left02")[0]);
	option = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
//            color:['#f54100',"#474feb","34d5fc","#f4fbfd","37467b"],
		legend: {
			textStyle:{
				color:"#0089f3"
			},
			orient : 'vertical',
			x : 'left',
			data:['案件NO01','案件NO02','案件NO03'],

		},
		color:['#f54100', '#3953ed','#34d5fc'],
//
		calculable : false,

		series : [
			{
				name:'案件NO01',
				type:'pie',
				radius : ['50%', '80%'],
				itemStyle : {
					normal : {
						label : {
							show : false
						},
						labelLine : {
							show : false
						}
					},
					emphasis : {
						label : {
							show : true,
							position : 'center',
							textStyle : {
								fontSize : '13',
								fontWeight : 'bold',
								color:"#0089f3"
							}
						}
					}
				},
				data:[
					{value:335, name:'案件NO01'},
					{value:310, name:'案件NO02'},
					{value:234, name:'案件NO03'}

				]
			}
		]
	};
	myChart.setOption(option);
	window.onresize = myChart.resize
});


$(function(){
	var myChart = echarts.init($("#con1")[0]);
	option = {

		tooltip : {
			trigger: 'axis'
		},
		grid:{
			x:3,
			y:3,
			x2:3,
			y2:3
		},
		color:['#f40e0e','#1586ee'],
//            toolbox: {
//                show : false,
//                feature : {
//                    mark : {show: true},
//                    dataView : {show: true, readOnly: false},
//                    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
//                    restore : {show: true},
//                    saveAsImage : {show: true}
//                }
//            },
		calculable : true,
		xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				data : ['周一','周二','周三','周四','周五','周六','周日'],
				shown:false,
				splitLine:{show: false},
			}
		],
		yAxis : [
			{
				type : 'value',
				shown:false,
				splitLine:{show: false},//去掉网格线
				splitArea : {show : true}//保留网格区域
			}
		],
		series : [
			{
				name:'拥堵',
				type:'line',
				smooth:true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:[10, 12, 21, 54, 260, 830, 710]
			},

			{
				name:'畅通',
				type:'line',
				smooth:true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:[1320, 1132, 601, 234, 120, 90, 20]
			}
		]
	};
	myChart.setOption(option);
	window.onresize = myChart.resize
});


$(function(){
	var myChart = echarts.init($("#left01")[0]);
	option = {
		tooltip : {
			trigger: 'axis'
		},


//                    toolbox: {
//                        show : true,
//                        feature : {
//                            mark : {show: true},
//                            dataView : {show: true, readOnly: false},
//                            magicType: {show: true, type: ['line', 'bar']},
//                            restore : {show: true},
//                            saveAsImage : {show: true}
//                        }
//                    },
		grid:{
			x:'27%',
			y:'8%',
			x2:'10%',
			y2:'25%'
		},


		calculable : true,
		legend: {
			data:['总量预测','受理量','总量'],
			textStyle:{
				color:"#0089f3"
			},
			orient: 'vertical',
			x: 'left'
		},
		xAxis : [
			{
				type : 'category',
				data : ['前天','昨日','今日','明日'],
				splitLine:{show: false},//去掉网格线
				axisLabel: {
					show: true,
					textStyle: {
						color: '#0089f3'
					}
				}
			}
		],
		yAxis : [
			{
				type : 'value',
				name : '',
				min:10,
				max:800,
				splitLine:{show: false},//去掉网格线
				axisLabel : {
					formatter: '{value} ',
					textStyle: {
						color: '#0089f3'
					}
				}
			},
			{
				type : 'value',
				name : '',

				axisLabel : {
					formatter: '{value} '
				}
			}
		],
		series : [

			{
				name:'总量预测',
				type:'line',

				itemStyle: {
					normal:{color:'#03a1cb'}
				},
				data:[120, 200, 500, 150]
			},
			{
				name:'受理量',
				type:'bar',
				stack:'受理量',
				barWidth:20,//设置柱的宽度
				itemStyle: {
					normal:{color:'#5ef8fc'}
				},
				data:[100, 115, 390, 130],

			},
			{
				name:'总量',
				type:'bar',
				stack:'受理量',
				itemStyle: {
					normal:{color:'#fcf45e'}
				},
				yAxisIndex: 1,
				data:[130, 220, 260, 210]
			}
		]
	};
	myChart.setOption(option);
	window.onresize = myChart.resize
});

