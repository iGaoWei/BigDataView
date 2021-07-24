/*#################    项目人员信息状态  #####################*/
var dom = document.getElementById("lytj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:[]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 12,
                    fontWeight : 'bolder'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                   textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 15,
                    fontWeight : 'bolder'
                 }

                },
            },
            data:[
                {value:335, name:'质量'},
                {value:310, name:'安全'},
               
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#################    务工人员工种统计  #####################*/

var dom = document.getElementById("gztj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['木工','钢筋工','瓦泥工','电焊工','起重工'],
		textStyle: {
			color: '#fff',
		},
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                   	textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 12,
                    fontWeight : 'normal'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
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
                {value:335, name:'木工'},
                {value:310, name:'钢筋工'},
                {value:234, name:'瓦泥工'},
                {value:135, name:'电焊工'},
                {value:1548, name:'起重工'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#################    各公司现场人员统计  #####################*/

var dom = document.getElementById("xcrytj");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['中国建筑','万科','金地','韩村河建筑','中国铁建'],
		textStyle: {
			color: '#fff',
		},
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                   	textStyle : {                   
                    align : 'center',
                    baseline : 'middle',
                    fontFamily : '微软雅黑',
                    fontSize : 12,
                    fontWeight : 'normal'
                 }

                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '12',
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
                {value:335, name:'中国建筑'},
                {value:310, name:'万科'},
                {value:234, name:'金地'},
                {value:135, name:'韩村河建筑'},
                {value:148, name:'中国铁建'}
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*##################  巡检风险状态     ##################*/
var  option = {
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data:['所属工地','风险程度'],
		textStyle: {
			color: '#fff',
		},
	},
	xAxis: [
		{
			type: 'category',
			data: ['内蒙','玉树自治区','河北省张家口','吉林省'],
			axisLabel: {
			show: true,
				textStyle: {
					color: '#657c97'
				}
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '风险程度',
			nameTextStyle : {
			color: "#657c97",
		
			},
			min: 0,
			max: 100,
			interval: 50,
			axisLabel: {
				
				textStyle: {
					color: '#657c97'
				}
			}
		}
	],
	series: [
		 
		{
			name:'所属工地',
			type:'bar',
						
			/*设置柱状图颜色*/
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#0ff'},
                            {offset: 1, color: '#188df0'}
                        ]
                    ),
					/*信息显示方式*/
					label: {
						show: false,
						position: 'top',
						formatter: '{b}\n{c}'
					}
				}
			},
			data:[50, 75, 40, 70]
		},
		{
			name:'风险程度',
			type:'line',
			itemStyle : {  /*设置折线颜色*/
				normal : {
				   //color:'#0ff'
				}
			},
			data:[50, 75, 40, 70]
		}
	]
};
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('xjfxzt'));
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option); 


/*##############  风险变化趋势    #####################*/

var dom = document.getElementById("fxbhqs");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '风险变化趋势',
		//是否显示标题组件
		show:false
    },
	tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['项目起始时间','安全问题','质量问题','环保问题'],
		top: "3%",
		textStyle: {
			color: '#fff',
		},
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2018/1','2018/2','2018/3','2018/4','2018/5','2018/6','2018/7'],
		axisLabel: {
			show: true,
			textStyle: {
				color: '#657c97'
			}
		}
    },
    yAxis: {
        type: 'value',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#657c97'
			}
		}
    },
    series: [
        {
            name:'项目起始时间',
            type:'line',
            
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210],
             // 显示数值
        	itemStyle : { normal: {label : {show: true}}}
        },
        {
            name:'安全问题',
            type:'line',
            stack: '总量',
            data:[100, 182, 191, 104, 290,130,200],
			// 显示数值
        	itemStyle : { normal: {label : {show: true}}}
        },
		 {
            name:'质量问题',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310],
			// 显示数值
        	itemStyle : { normal: {label : {show: true}}}
        },
		 {
            name:'环保问题',
            type:'line',
            stack: '总量',
            data:[120, 102, 121, 124, 110, 120, 110],
			// 显示数值
        	itemStyle : { normal: {label : {show: true}}}
        }
       
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


/*################### 问题等级    ###################*/
var dom = document.getElementById("wentidj");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:[]
    },
    series: [
        {
            name:'问题类别',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                },
                emphasis: {
                    show: true,
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    position: 'inside',  //让文字显示在柱子上
                     formatter: '{d}%',//模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                },
            },
            data:[
                {value:335, name:'质量问题'},
                {value:310, name:'安全问题'},
               
            ]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}