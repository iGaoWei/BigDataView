/*大屏*/
(function () {

    var chart1 = echarts.init(document.getElementById('ychart1'));
    var chart2 = echarts.init(document.getElementById('ychart2'));
    var chart3 = echarts.init(document.getElementById('ychart3'));
    var chart4 = echarts.init(document.getElementById('ychart4'));
    var data1 = [{
            name: "运行速度",
            value: 109,
        },
        {
            name: "单机效率",
            value: 109,
        },
        {
            name: "温度值",
            value: 109,
        },
        {
            name: "震动值",
            value: 109,
        }
    ];



    var colorTemplate1 = [
        [0.2, "#13dcea"],
        [0.8, "#13dcea"],
        [1, "#13dcea"]
    ];

    var option = [{

            series: [{
                name: "yuxingshudu",
                type: "gauge",
                radius: "100%",
                center: ["50%", "55%"],
                min: 0,
                max: 240,
                splitNumber: 8,

                axisLine: {
                    show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {
                        color: colorTemplate1,
                        width: 6
                    }
                },
                pointer: {
                    width: 4
                },

                axisLabel: {
                    show: true,
                    distance: 4,
                    color: "#0fa5b6",
                    fontSize: 6,
                    formatter: "{value}",
                },
                splitLine: { // 分隔线样式。
                    show: true,
                    length: 6,
                },

                itemStyle: {
                    color: "#056094",
                    opacity: 1,
                },
                title: { // 仪表盘标题。
                    show: true,
                    offsetCenter: [0,
                        "80%"
                    ],
                    color: "#13dcea",
                    fontSize: 12,
                },

                detail: {
                    show: true,
                    offsetCenter: [0,
                        "40%"
                    ],
                    color: "auto",
                    fontSize: 10,
                },

                data: [
                    data1[0]
                ]
            }]

        },
        // biaopan2
        {

            series: [{
                name: "单机效率",
                type: "gauge",
                radius: "100%",
                center: ["50%", "55%"],
                min: 0,
                max: 240,
                splitNumber: 8,

                axisLine: {
                    show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {
                        color: colorTemplate1,
                        width: 6
                    }
                },
                pointer: {
                    width: 4
                },

                axisLabel: {
                    show: true,
                    distance: 4,
                    color: "#0fa5b6",
                    fontSize: 6,
                    formatter: "{value}",
                },
                splitLine: { // 分隔线样式。
                    show: true,
                    length: 6,
                },

                itemStyle: {
                    color: "#056094",
                    opacity: 1,
                },
                title: { // 仪表盘标题。
                    show: true,
                    offsetCenter: [0,
                        "80%"
                    ],
                    color: "#13dcea",
                    fontSize: 12,
                },

                detail: {
                    show: true,
                    offsetCenter: [0,
                        "40%"
                    ],
                    color: "auto",
                    fontSize: 10,
                },

                data: [
                    data1[1]
                ]
            }]

        },
        // biao 3
        {

            series: [{
                name: "单机效率",
                type: "gauge",
                radius: "100%",
                center: ["50%", "55%"],
                min: 0,
                max: 240,
                splitNumber: 8,

                axisLine: {
                    show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {
                        color: colorTemplate1,
                        width: 6
                    }
                },
                pointer: {
                    width: 4
                },

                axisLabel: {
                    show: true,
                    distance: 4,
                    color: "#0fa5b6",
                    fontSize: 6,
                    formatter: "{value}",
                },
                splitLine: { // 分隔线样式。
                    show: true,
                    length: 6,
                },

                itemStyle: {
                    color: "#056094",
                    opacity: 1,
                },
                title: { // 仪表盘标题。
                    show: true,
                    offsetCenter: [0,
                        "80%"
                    ],
                    color: "#13dcea",
                    fontSize: 12,
                },

                detail: {
                    show: true,
                    offsetCenter: [0,
                        "40%"
                    ],
                    color: "auto",
                    fontSize: 10,
                },

                data: [
                    data1[2]
                ]
            }]

        },
        // biao 4
        {

            series: [{
                name: "单机效率",
                type: "gauge",
                radius: "100%",
                center: ["50%", "55%"],
                min: 0,
                max: 240,
                splitNumber: 8,

                axisLine: {
                    show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
                    lineStyle: {
                        color: colorTemplate1,
                        width: 6
                    }
                },
                pointer: {
                    width: 4
                },

                axisLabel: {
                    show: true,
                    distance: 4,
                    color: "#0fa5b6",
                    fontSize: 6,
                    formatter: "{value}",
                },
                splitLine: { // 分隔线样式。
                    show: true,
                    length: 6,
                },

                itemStyle: {
                    color: "#056094",
                    opacity: 1,
                },
                title: { // 仪表盘标题。
                    show: true,
                    offsetCenter: [0,
                        "80%"
                    ],
                    color: "#13dcea",
                    fontSize: 12,
                },

                detail: {
                    show: true,
                    offsetCenter: [0,
                        "40%"
                    ],
                    color: "auto",
                    fontSize: 10,
                },

                data: [
                    data1[3]
                ]
            }]

        },
    ];

    // 使用刚指定的配置项和数据显示图表
    chart1.setOption(option[0])
    chart2.setOption(option[1])
    chart3.setOption(option[2])
    chart4.setOption(option[3])

    window.addEventListener('resize', function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
    })


})()