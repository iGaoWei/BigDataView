// ----------中2的配置项-------------------
//
var option = {
    title: {
        text: '',
    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: { // 左侧小导航图标
        show: true,
        x: 'left',
        y: 'bottom',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 9 },
            {start: 10, end: 99 },
			{ start: 100, end: 999 },
            {  start: 1000, end: 9999 },
            { start: 10000 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    series: [{
        name: '累计确诊人数',
        type: 'map',
        mapType: 'china',
        roam: false, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                fontSize: 8,
            }
        },
        data:[] // [{'name': '上海', 'value': 318}, {'name': '云南', 'value': 162}]
    }]
};


// ----------左1的配置项-------------------
var option = {
	title: {
		text: "全国累计趋势",
		textStyle: {
			color: 'white',
		},
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
    },
    //图例
	legend: {
		data: ['累计确诊', "累计治愈", "累计死亡"],
		left: "right"
	},
	//图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: [] //['03.20', '03.21', '03.22']
	}],
	yAxis: [{
		type: 'value',
		//y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
		//y轴线设置显示
		axisLine: {
			show: true
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				color: '#17273B',
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
		name: "累计确诊",
		type: 'line',
		smooth: true,
		data: []//[260, 406, 529]
	}, {
		name: "累计治愈",
		type: 'line',
		smooth: true,
		data: []//[25, 25, 25]
	}, {
		name: "累计死亡",
		type: 'line',
		smooth: true,
		data: []//[6, 9, 17]
	}]
};


// ----------左2的配置项-------------------
var option = {
	title: {
		text: '全国新增趋势',
		textStyle: {
			color: 'white',
		},
		left: 'left',
	},
	tooltip: {
		trigger: 'axis',
		//指示器
		axisPointer: {
			type: 'line',
			lineStyle: {
				color: '#7171C6'
			}
		},
    },
    //图例
	legend: {
		data: ['新增确诊', '新增疑似'],
		left: 'right'
	},
	//图形位置
	grid: {
		left: '4%',
		right: '6%',
		bottom: '4%',
		top: 50,
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: [] // ['03.20', '03.21', '03.22']
	}],
	yAxis: [{
		type: 'value',
		//y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
		//y轴线设置显示
		axisLine: {
			show: true
		},
		//与x轴平行的线样式
		splitLine: {
			show: true,
			lineStyle: {
				color: '#17273B',
				width: 1,
				type: 'solid',
			}
		}
	}],
	series: [{
		name: '新增确诊',
		type: 'line',
		smooth: true,
		data: [] // [20, 406, 529]
	}, {
		name: '新增疑似',
		type: 'line',
		smooth: true,
		data: [] // [25, 75, 122]
	}]
};


// ----------右1的配置项-------------------
var option = {
    title: {
        text: "全国确诊省市TOP10",
        textStyle: {
            color: 'white',
        },
        left: 'left'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: [] // ['湖北','广州','北京']
    },
    yAxis: {
        type: 'value',
        //y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
    },
    series: [{
        data: [], // [582, 300, 100]
        type: 'bar',
        barMaxWidth: "50%"
    }]
};


// ----------右2的配置项-------------------
var option = {
    title: {
        text: "境外输入省市TOP5",
        textStyle: {
            color: 'white',
        },
        left: 'left'
    },
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        data: [] // ['湖北','广州','北京']
    },
    yAxis: {
        type: 'value',
        //y轴字体设置
		axisLabel: {
			show: true,
			color: 'white',
			fontSize: 12,
			formatter: function(value) {
				if (value >= 1000) {
					value = value / 1000 + 'k';
				}
				return value;
			}
		},
    },
    series: [{
        data: [], // [582, 300, 100]
        type: 'bar',
        barMaxWidth: "50%"
    }]
};
