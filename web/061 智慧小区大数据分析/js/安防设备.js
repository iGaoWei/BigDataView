var myChart = echarts.init(document.getElementById('aleftboxtmidd'));
option = {
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#2C8179' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#18C4B9' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#ACBF95' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#7CBF2B' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#508097' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#1C3979' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#4d72d9' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#75489F' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }],
    backgroundColor: 'rgba(1,202,217,.2)',
    title: [{ 
        text: '设备数量',
        textStyle: {
            color: '#a0b3c7',
            fontWeight: 'normal',
            fontSize: 14
        },
        top: 'top',
        left: '15%'
    },{
        text: '运行状态',
        textStyle: {
            color: '#a0b3c7',
            fontWeight: 'normal',
            fontSize: 14
        },
        top: 'top',
        left: '65%'
    }],
    grid: {
        left: 10,
        right: 40,
        top: 20,
        bottom: 0,
        containLabel: true
    },
    legend: {
        x: 'center',
        y: '70%',
        textStyle: {
            fontSize: 10,
            color: 'rgba(255,255,255,.7)'
        },
        data: ['门禁设备', '安防设备', '在线设备', '离线设备']
    },
    calculable: true,
    series: [

        {
            name: '面积模式',
            type: 'pie',
            radius: [5, 50],
            center: ['25%', '40%'],
            roseType: 'area',
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            itemStyle: {
                // normal: {
                //     color: new echarts.graphic.LinearGradient(
                //         1, 0, 0, 1, [{
                //             offset: 0,
                //             color: '#76c4bf'
                //         }, {
                //             offset: 1,
                //             color: '#ACBF95'
                //         }]
                //     )
                // }
            },

            data: [{
                value: 540,
                name: '门禁设备'
            }, {
                value: 480,
                name: '安防设备'
            }]
        }, {
            name: '面积模式',
            type: 'pie',
            radius: [5, 50],
            center: ['75%', '40%'],
            roseType: 'area',
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            data: [
                { value: 1027, name: '在线设备' },
                { value: 3, name: '离线设备' },

            ]
        }
    ]
};



myChart.setOption(option);