// $.get('http://127.0.0.1:5000/data-api/task4').done(function (data) {
//
// });


var myChart = echarts.init(document.querySelector(".midUp .chart"));
var colorList = ['#cd4692', '#9658c3', '#6c6be2', '#01aebf', '#18b794'];
var option = {
    title: [
        {
            subtext: '注册与未注册用户的占比',
            left: '16.67%',
            top: '84.5%',
            bottom: '1%',
            textAlign: 'center',
            subtextStyle: {
                color: colorList[2],
                fontSize: 12,
            },
        },{
            subtext: '工作日-注册与未注册用户的占比',
            left: '50%',
            top: '84.5%',
            bottom: '1%',
            textAlign: 'center',
            subtextStyle: {
                color: colorList[0],
                fontSize: 12,
                lineHeight: 20,
            }
        },{
            subtext: '假期-注册与未注册用户的占比',
            left: '83.33%',
            top: '84.5%',
            bottom: '1%',
            textAlign: 'center',
            subtextStyle: {
                color: colorList[3],
                fontSize: 12,
                lineHeight: 20,
            }
        }
    ],
    tooltip: {
        formatter: function (params) {
            f = params.marker + params.name +
                '<br> <b>'+ params.value +'</b>' +
                '<br> <b>'+ params.percent +'</b>' + '%';
            return f
        }
    },
    grid: {
        //top: '2%',
        containLabel: true
    },
    series: [
        {
            type: 'pie',
            radius: '50%',
            center: ['20%', '42%'],
            data: [22,55,78,56,98,25],
            label: {
                position: 'outer',
                color: colorList[2],
                distanceToLabelLine: 50,
                formatter: function (params) {
                    var str = '' + params.name + ' :  ' + params.percent + '%\n\n';
                    if (params.dataIndex == 0) {
                        str = '\n\n\n' + params.name + ' :  ' + params.percent + '%'
                    }
                    return str
                },
                fontSize: 12,
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 3,
                }
            },
            left: 0,
            right: '66.6667%',
            top: 0,
            bottom: 0,
            itemStyle: {
                normal: {
                    borderColor: '#2c343c',
                    borderWidth: 5,
                    color: function (params) {
                        return colorList[params.dataIndex + 2]
                    }
                }
            },
        },
        {
            type: 'pie',
            radius: '50%',
            center: ['50%', '42%'],
            data: [58,84,25,95,65,102],
            label: {
                position: 'outer',
                color: colorList[0],
                distanceToLabelLine: -10,
                formatter: function (params) {
                    var str = '' + params.name + ' :  ' + params.percent + '%\n';
                    if (params.dataIndex == 0) {
                        str = '\n\n' + params.name + ' : ' + params.percent + '%'
                    }
                    return str
                },
                fontSize: 12
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 3,
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#2c343c',
                    borderWidth: 5,
                    color: function (params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0
        },
        {
            type: 'pie',
            radius: '50%',
            center: ['80%', '42%'],
            data: [100,80,158,49,66,33],
            label: {
                position: 'outer',
                color: colorList[3],
                distanceToLabelLine: -70,
                formatter: function (params) {
                    var str = '' + params.name + ' :  ' + params.percent + '%\n\n\n\n';
                    if (params.dataIndex == 0) {
                        str = '\n\n\n\n\n' + params.name + ' :  ' + params.percent + '%'
                    }
                    return str
                },
                fontSize: 12,
            },
            labelLine: {
                normal: {
                    length: 10,
                    length2: 3,
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#2c343c',
                    borderWidth: 5,
                    color: function (params) {
                        return colorList[params.dataIndex + 3]
                    }
                }
            },
            left: '66.6667%',
            right: 0,
            top: 0,
            bottom: 0
        }
    ]
};
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});