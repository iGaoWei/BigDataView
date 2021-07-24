
var myChart = echarts.init(document.getElementById('amiddboxtbott1'));

var sqds_category = ['双创便利店', '跨境优品','智慧冷链','民情通便利店',
'心喜宜家裕华店','迈绿达农产品','豫兰粮油旗舰店','兰州欣海天然绿色食品','佳家乐家政服务',
'油条司令','兰飞酱猪蹄','快乐星汉堡店','艾梵希美容美发','三维年货铺','华兰美烧烤','三合居串串香火锅店', 
'朝亮蔬菜水果店','百花香温馨花店','顶牛拉面'];

var data = 
    [
        [28604, 77, 17099, '双创便利店', '2020年6月'],
        [31163, 77.4, 2440, '跨境优品', '2020年6月'],
        [1516, 68, 1605773, '智慧冷链', '2020年6月'],
        [13670, 74.7, 10082, '民情通便利店', '2020年6月'],
        [28599, 75, 49805, '心喜宜家裕华店', '2020年6月'],
        [29476, 77.1, 569499, '迈绿达农产品', '2020年6月'],
        [31476, 75.4, 789237, '豫兰粮油旗舰店', '2020年6月'],
        [28666, 78.1, 254830, '兰州欣海天然绿色食品', '2020年6月'],
        [1777, 57.7, 870776, '佳家乐家政服务', '2020年6月'],
        [29550, 79.1, 129285, '油条司令', '2020年6月'],
        [2076, 67.9, 201954, '兰飞酱猪蹄', '2020年6月'],
        [12087, 72, 42954, '快乐星汉堡店', '2020年6月'],
        [24021, 75.4, 33934, '艾梵希美容美发', '2020年6月'],
        [43296, 76.8, 4240375, '三维年货铺', '2020年6月'],
        [10088, 70.8, 381958, '华兰美烧烤', '2020年6月'],
        [19349, 69.6, 1475652, '三合居串串香火锅店', '2020年6月'],
        [10670, 67.3, 53905, '朝亮蔬菜水果店', '2020年6月'],
        [26424, 75.7, 57117, '百花香温馨花店', '2020年6月'],
        [37062, 75.4, 252810, '顶牛拉面', '2020年6月']
    ]
;

option = {
    backgroundColor: 'rgba(1,202,217,.2)',
    grid: {
        left: 40,
        right: 50,
        top: 30,
        bottom: 25,
    },
    // title: {
    //     top: 5,
    //     left: 20,
    //     textStyle: {
    //         fontSize: 10,
    //         color: 'rgba(255,255,255,.6)'
    //     },
    //     text: '环比类型：日环比'
    // },

    // legend: {
    //     right: 10,
    //     top: 5,
    //     textStyle: {
    //         fontSize: 10,
    //         color: 'rgba(255,255,255,.6)'
    //     },
    //     data: ['双创便利店', '跨境优品', '智慧冷链', '民情通便利店', '心喜宜家裕华店', '迈绿达农产品', '豫兰粮油旗舰店']
    // },
    xAxis: {
        name: '交易\n金额',
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
        }
    },
    yAxis: {
        name: '交易量',
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
        scale: true
    },
    visualMap: [
        {
            show: false,
            dimension: 3,
            categories: sqds_category,
            calculable: true,
            precision: 0,
            textGap: 30,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                // color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                color: (function () {
                    var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
                    return colors.concat(colors);
                })()
            }
        }
    ],
    series: [{
        name: '2020年6月',
        data: data,
        type: 'scatter',
        symbolSize: function(data) {
            // console.info(Math.sqrt(data[2]) / 5e1);
            return Math.sqrt(data[2]) / 5e1;
        },
        label: {
            show: true,
            position: 'right',
            formatter: function(param){
                if (Math.sqrt(param.data[2]) / 5e1 > 10) {
                    return param.data[3];
                } else {
                    return '';
                }
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'right'
            }
        },
        itemStyle: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
        }
    }]
};
myChart.setOption(option);


