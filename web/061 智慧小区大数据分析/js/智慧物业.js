var myChart = echarts.init(document.getElementById('amiddboxtbott2'));

var wy_data = [];
for (var i = 0; i < 5; i++) {   // 五个类别         '物业', '电费', '停车', '燃气', '水费'
    var _data = [];
    for (var j = 0; j < 30; j++) {
        if (i === 0) { // 物业
            _data.push(2000 + randomNum(1900, 2100));       // 2000 * 30
        }   
        if (i === 1) { // 电费  
            _data.push(1333 + randomNum(1000, 1666));       // 2000 * 20
        }
        if (i === 2) { // 停车
            _data.push(10000 + randomNum(500, 2000));    // 1000 * 300
        }
        if (i === 3) { // 燃气
            _data.push(666 + randomNum(333, 999));          // 2000 * 10
        }
        if (i === 4) { // 水费
            _data.push(2000 + randomNum(500, 3500));        // 2000 * 30
        }
    }
    wy_data.push(_data);
}


option = {
    backgroundColor: 'rgba(1,202,217,.2)',
    grid: {
        left: 60,
        right: 50,
        top: 100,
        bottom: 25
    },
    title: [{
        top: 70,
        left: 150,
        textStyle: {
            fontSize: 14,
            color: 'rgba(255,255,255,.6)'
        },
        text: '物业月缴费金额统计'
    }],
    legend: [{
        top: 10,
        left: 20,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['物业', '电费', '停车']
    }, {
        top: 30,
        left: 20,
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['燃气', '水费']
    }],
    xAxis: [{
        name: '日期',
        type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.7)"
        },

        data: ['6-01', '6-02', '6-03', '6-04', '6-05', '6-06', '6-07', '6-08', '6-09', '6-010',
            '6-11', '6-12', '6-13', '6-14', '6-15', '6-16', '6-17', '6-18', '6-19', '6-20',
            '6-21', '6-22', '6-23', '6-24', '6-25', '6-26', '6-27', '6-28', '6-29', '6-30'
        ],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        // type: 'value',
        type: 'log',
        name: '金额 ￥',
        // interval: 50,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.3)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.01)'
            }
        },
    }],
    series: [{
            name: '缴费占比',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ['80%', '20%'],
            avoidLabelOverlap: true,
            minAngle: 30,
            label: {
                // show: false,
                position: 'inner',
                formatter: '{b} {d}%'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 300000, name: '停车', itemStyle: { color: '#edc1a5', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                { value: 65000, name: '物业', itemStyle: { color: '#bcd3bb', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                { value: 63000, name: '水费', itemStyle: { color: '#e1e8c8', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                { value: 42000, name: '电费', itemStyle: { color: '#e88f70', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
                { value: 21000, name: '燃气', itemStyle: { color: '#9dc5c8', opacity: 0.8, shadowBlur: 10, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: 'rgba(0, 0, 0, 0.5)', } },
            ]
        },
        {
            name: '物业',
            type: 'line',
            data: wy_data[0],
            smooth: true,
            itemStyle: {
                color: '#bcd3bb',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }, {
            name: '电费',
            type: 'line',
            data: wy_data[1],
            smooth: true,
            itemStyle: {
                color: '#e88f70',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }, {
            name: '停车',
            type: 'line',
            data: wy_data[2],
            smooth: true,
            itemStyle: {
                color: '#edc1a5',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }, {
            name: '燃气',
            type: 'line',
            data: wy_data[3],
            smooth: true,
            itemStyle: {
                color: '#9dc5c8',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }, {
            name: '水费',
            type: 'line',
            data: wy_data[4],
            smooth: true,
            itemStyle: {
                color: '#e1e8c8',
                opacity: 0.8,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            }
        }
    ]
};
myChart.setOption(option);