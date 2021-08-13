/*#############  学历  岗位  ###############*/
var dom = document.getElementById("xueli");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '学历',
		show:false,
		textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
		// 标题的位置，此时放在图的底边
        //left: 'center',
        //top: 'bottom',
		
    },
	tooltip: {},
    legend: {
		textStyle: {
		color: '#0ff',
		},
		//图表上方显示的分类的位置定义
		top: "0%",
		left: "2%", // 图例组件离容器右侧的距离
		data: ['学历', '岗位'],
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
     },
	 // 设置雷达图中间射线的颜色
	axisLine: {
		lineStyle: {
			color: 'rgba(131,141,158,.1)',
			},
	},
        indicator: [
           { name: '初中及以下', max: 500},
           { name: '高中', max: 660},
           { name: '大专', max: 300},
           { name: '本科', max: 900},
           { name: '本科', max: 900},
		   { name: '博士及以上', max: 900},
        ],
		 //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
		//splitLine : {
//            show : true,
//            lineStyle : {
//                width : 1,
//                color : 'rgba(0,0,0,.1)', // 设置网格的颜色
//            },
//        },		
		
    },
    series: [{
        name: '学历',  // tooltip中的标题
        type: 'radar',  //表示是雷达图
        // areaStyle: {normal: {}},
        data : [
            {
                value : [430, 100, 280, 350, 500, 190],
                name : '学历',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            }, {
                value : [230, 300, 180, 450, 300, 290],
                name : '岗位',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            }
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#############  工种  ###############*/
var dom = document.getElementById("gongzhong");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '工种',
		show:false,
		textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
		// 标题的位置，此时放在图的底边
        //left: 'center',
        //top: 'bottom',
		
    },
	tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
     },
	 // 设置雷达图中间射线的颜色
	axisLine: {
		lineStyle: {
			color: 'rgba(131,141,158,.1)',
			},
	},
        indicator: [
           { name: '木工', max: 500},
           { name: '钢筋工', max: 660},
           { name: '瓦泥工', max: 900},
           { name: '电焊工', max: 900},
           { name: '起重工', max: 900},
		 ],
		 //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
		//splitLine : {
//            show : true,
//            lineStyle : {
//                width : 1,
//                color : 'rgba(0,0,0,.1)', // 设置网格的颜色
//            },
//        },		
		
    },
    series: [{
        name: '工种',  // tooltip中的标题
        type: 'radar',  //表示是雷达图
        // areaStyle: {normal: {}},
        data : [
            {
                value : [100, 280, 350, 500, 190],
                name : '工种',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            },
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


var dom = document.getElementById("nianlin");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '年龄',
		show:false,
		textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
		// 标题的位置，此时放在图的底边
        //left: 'center',
        //top: 'bottom',
		
    },
	tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
     },
	 // 设置雷达图中间射线的颜色
	axisLine: {
		lineStyle: {
			color: 'rgba(131,141,158,.1)',
			},
	},
        indicator: [
           { name: '25', max: 500},
           { name: '30', max: 660},
           { name: '35', max: 900},
           { name: '40', max: 900},
           { name: '45', max: 900},
		   { name: '50', max: 900},
		 ],
		 //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
		//splitLine : {
//            show : true,
//            lineStyle : {
//                width : 1,
//                color : 'rgba(0,0,0,.1)', // 设置网格的颜色
//            },
//        },		
		
    },
    series: [{
        name: '年龄',  // tooltip中的标题
        type: 'radar',  //表示是雷达图
        // areaStyle: {normal: {}},
        data : [
            {
                value : [150, 230, 450, 100,300,190],
                name : '年龄',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            },
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#############  工种  ###############*/
var dom = document.getElementById("gongzhong");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '工种',
		show:false,
		textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
		// 标题的位置，此时放在图的底边
        //left: 'center',
        //top: 'bottom',
		
    },
	tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
     },
	 // 设置雷达图中间射线的颜色
	axisLine: {
		lineStyle: {
			color: 'rgba(131,141,158,.1)',
			},
	},
        indicator: [
           { name: '木工', max: 500},
           { name: '钢筋工', max: 660},
           { name: '瓦泥工', max: 900},
           { name: '电焊工', max: 900},
           { name: '起重工', max: 900},
		 ],
		 //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
		//splitLine : {
//            show : true,
//            lineStyle : {
//                width : 1,
//                color : 'rgba(0,0,0,.1)', // 设置网格的颜色
//            },
//        },		
		
    },
    series: [{
        name: '工种',  // tooltip中的标题
        type: 'radar',  //表示是雷达图
        // areaStyle: {normal: {}},
        data : [
            {
                value : [100, 280, 350, 500, 190],
                name : '工种',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            },
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#############  经验  #############*/
var dom = document.getElementById("jingyan");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '经验',
		show:false,
		textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
		// 标题的位置，此时放在图的底边
        //left: 'center',
        //top: 'bottom',
		
    },
	tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
     },
	 // 设置雷达图中间射线的颜色
	axisLine: {
		lineStyle: {
			color: 'rgba(131,141,158,.1)',
			},
	},
        indicator: [
           { name: '初级（工龄）', max: 500},
           { name: '中级（工龄）', max: 360},
           { name: '高级（工龄）', max: 200},
		 ],
		 //雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
        splitArea : {
            show : false,
            areaStyle : {
                color: 'rgba(255,0,0,0)', // 图表背景的颜色
            },
        },
		//splitLine : {
//            show : true,
//            lineStyle : {
//                width : 1,
//                color : 'rgba(0,0,0,.1)', // 设置网格的颜色
//            },
//        },		
		
    },
    series: [{
        name: '年龄',  // tooltip中的标题
        type: 'radar',  //表示是雷达图
        // areaStyle: {normal: {}},
        data : [
            {
                value : [150, 230,190],
                name : '年龄',
				 // 设置区域边框和区域的颜色
                itemStyle: {
                    normal: {
                        color: '#009991',
                        lineStyle: {
                            color: 'rgba(3,78,80,.3)',
                        },
                    },
                },
            },
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

/*#############  人员能力提升  ###############*/
var dom = document.getElementById("rynlts");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '人员能力提升',
		textStyle: {
            color: '#fff', //标题颜色
            fontSize: 12,
        },
		// 标题的位置，此时放在图的底边
        left: '0%',
       top: '0%',
    },
    tooltip: {},
    legend: {
        data: []
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#333',
                borderRadius: 3,
                padding: [3, 5]
           },
        },
        indicator: [
           { name: '项目编号', max: 800},
           { name: '项目组', max: 800},
           { name: '人名', max: 800},
           { name: '知识', max: 800},
           { name: '技能', max: 800},
           { name: '态度', max: 800},
		   { name: '特质', max: 800},
		   { name: '动机', max: 800}
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [430, 100, 280, 350, 500, 450, 200, 190],
                name : 'aa'
            },
             
        ]
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}



/*#############  项目成本管理  ###############*/

var dom = document.getElementById("xmcbgl");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: '项目成本管理',
		 textStyle: {
            color: 'rgba(221,221,221,1)', //标题颜色
            fontSize: 14,
            lineHeight: 20,
        },
        // 标题的位置，此时放在图的底边
		top: "20px",
		left: "2%",
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['项目编号','项目名称','工作量投入（量化）'],
		textStyle: {
			color: '#fff',
		},
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7','8','9','10','11','12'],
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			}
        },
		
		
    ],	
    yAxis : [
        {
            type : 'value',
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff'
				}
			}
        }
    ],
    series : [
        {
            name:'项目编号',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 132, 101]
        },
        {
            name:'项目名称',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330,101]
        },
        {
            name:'工作量投入（量化）',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[150, 232, 201, 154, 190, 330, 410, 201, 154, 190, 330,101]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
/*################  目标与计  划##############*/
var chart1 = echarts.init(document.getElementById("duzhu"));
var dataX = ['项目编号', '项目名称', '投入人力', '目标人力', '投入时间', '目标时间', '投入费用', '目标费用'];
var dataY1 = [100,350,500,680,,340,290,180];	
var dataY2 = [80,250,350,480,580,240,200,95];	
var dataY3 = [20,100,150,200,300,300,240,260];	
var dataY4 = [40,120,100,260,380,120,110,360];	

option = {

title : { 
	text : '各教育阶段人数统计', 
	show:false
},
legend: {
	textStyle: {
		color: '#fff',
	},
	top: "0%",
	left: "0%", 
	orient: 'horizontal', 
	data: ['工程项目一','工程项目二','工程项目四', '工程项目三']
},
grid: {
containLabel: false
},
tooltip: {
	show: "true",
	trigger: 'item',
	formatter : "{a}<br/>{b} : {c}人"
},
xAxis: {
	type: 'category',
	axisTick: {
	show: true
},
axisLine: {
	show: true,
	lineStyle: {
	color: '#333333',
}
},
axisLabel: {
	inside: false,
	textStyle: {
	color: '#fff',
	fontWeight: 'normal',
	fontSize: '12',
},
formatter:function(value){
	return value.split("").join("\n")
},
},
data: dataX
},
yAxis: {
	type: 'value',
	axisTick: {
	show: true
},
axisLine: {
	show: true,
	lineStyle: {
	color: '#0997c1',
}
},
splitLine: {
	show: true,
	lineStyle: {
	color: '#333',
	type: 'dashed',
	opacity: 0.5
}
},
axisLabel: {
	textStyle: {
	color: '#fff',
	fontWeight: 'normal',
	fontSize: '12',
},
},
},
series: [{
name: '工程项目一',
type: 'bar',
itemStyle: {
normal: {
show: true,
color:'#0997c1',
barBorderRadius: 0,
borderWidth: 0,
}
},
zlevel: 2,
barWidth: '10%',
data: dataY1
}, {
name: '工程项目二',
type: 'bar',
itemStyle: {
normal: {
show: true,
color: '#c22167',
}
},
zlevel: 2, 
barGap: '100%', 
data: dataY2
}, {
name: '工程项目四',
type: 'bar',
itemStyle: {
normal: {
show: true,
color: '#082773',
}
},
zlevel: 2, 
barGap: '100%', 
data: dataY2
}, {
name: '工程项目三',
type: 'bar',
barWidth: '10%',
itemStyle: {
normal: {
show: true,
color: '#604fb9',
barBorderRadius: 0,
borderWidth: 0,
}
},
zlevel: 2,
barGap: '100%',
data: dataY3
}
]
};
// 使用刚指定的配置项和数据显示图表
chart1.setOption(option)

/*#############  项目管理（事务）  ###############*/
var dom = document.getElementById("xmgl");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['项目编号','投入人力量化指标', '投入资金（万元）','工期时间（量化）'],
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
    xAxis:  {
        type: 'value',
		axisLabel: {
			interval:0,
			rotate:10,
			color:'#fff'
		}
    },
    yAxis: {
        type: 'category',
        data: ['项目项目项目项目项目项目 ','项目二','项目三','项目四','项目五','项目六','项目日'],
		axisLabel: {
			interval:0,
			rotate:10,
			color:'#fff'
		}
    },
    series: [
	  {
            name: '项目编号',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '投入人力量化指标',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '投入资金（万元）',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '工期时间（量化）',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
