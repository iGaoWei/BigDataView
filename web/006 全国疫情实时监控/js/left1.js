// 初始化echart实例对象
var left1Chart = echarts.init(document.getElementById('left1'), 'dark');

// 指定图表的配置项和数据
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
        data: [] //[260, 406, 529]
    }, {
        name: "累计治愈",
        type: 'line',
        smooth: true,
        data: [] //[25, 25, 25]
    }, {
        name: "累计死亡",
        type: 'line',
        smooth: true,
        data: [] //[6, 9, 17]
    }]
};


var chinaDayList = data.chinaDayList

// 遍历每一天的数据
for (var day of chinaDayList) {
    // 将每天的累计确诊病例数添加到配置项的data中
    option.xAxis[0].data.push(day.date)
    option.series[0].data.push(day.confirm)
    option.series[1].data.push(day.heal)
    option.series[2].data.push(day.dead)
}

// 使用刚指定的配置项和数据显示图表。
left1Chart.setOption(option);