// 初始化echart实例对象
//
var right1Chart = echarts.init(document.getElementById('right1'), 'dark');


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

// 获取中国各省市特区
var provinces = data.areaTree[0].children

var topData = []
    // 遍历每一个省自治区、直辖市
for (var province of provinces) {
    // 将每个省的累计确诊病例数添加到配置项的data中
    topData.push({
        'name': province.name,
        'value': province.children[0].total.confirm
    })
}

topData.sort(function(a, b) {
    return b.value - a.value
})
topData.length = 10

// console.log(topData)

for (var province of topData) {
    // 将每个省的累计确诊病例数添加到配置项的data中
    option.xAxis.data.push(province.name)
    option.series[0].data.push(province.value)

}


// 使用刚指定的配置项和数据显示图表。
right1Chart.setOption(option);
