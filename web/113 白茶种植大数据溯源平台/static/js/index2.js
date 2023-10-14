function fontSize(res) {
    let clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}

// 图形数据1
var datacl1 = [
    [50, 150, 180, 135, 95, 70],
    [140, 350, 380, 335, 295, 270],
    [330, 1150, 1180, 1235, 995, 2170]
]

// 交易产量value
var value_data1 = [150.9, 251.8, 350.7]

datacl_box = datacl1[0];

var cl1_1 = document.getElementsByClassName('day1_cl')[0]
var cl1_2 = document.getElementsByClassName('month1_cl')[0]
var cl1_3 = document.getElementsByClassName('year1_cl')[0]
var cl1_jy = document.getElementsByClassName('jyl_1')[0]
    // console.log(cl1_1);

cl1_1.onclick = function() {
    datacl_box = datacl1[0];
    bar1();
    cl1_1.classList.add('span_c');
    cl1_2.classList.remove('span_c');
    cl1_3.classList.remove('span_c');
    cl1_jy.setAttribute('data-value', value_data1[0]);
    init7();
}

cl1_2.onclick = function() {
    datacl_box = datacl1[1];
    bar1();
    cl1_1.classList.remove('span_c');
    cl1_2.classList.add('span_c');
    cl1_3.classList.remove('span_c');
    cl1_jy.setAttribute('data-value', value_data1[1]);
    init7();
}

cl1_3.onclick = function() {
    datacl_box = datacl1[2];
    bar1();
    cl1_1.classList.remove('span_c');
    cl1_2.classList.remove('span_c');
    cl1_3.classList.add('span_c');
    cl1_jy.setAttribute('data-value', value_data1[2]);
    init7();
}

function bar1() {
    var myChart = echarts.init(document.querySelector(".bar1"));

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    var xData = ['2019', '2020', '2021', '2022', '2023'];
    var data1 = datacl_box;
    var data5 = [];

    for (let i = 0; i < data1.length; i++) {
        data5.push(data1[i]);
    }

    optionbar1 = {
        // backgroundColor: '#000E1A', //背景色
        tooltip: {
            trigger: 'axis',
            borderColor: 'rgba(255,255,255,.3)',
            backgroundColor: 'rgba(13,5,30,.6)',
            textStyle: {
                color: 'white', //设置文字颜色
            },
            borderWidth: 1,
            padding: fontSize(0.05),
            formatter: function(parms) {
                var str =
                    '年份：' +
                    parms[0].axisValue +
                    '</br>' +
                    parms[0].marker +
                    '产量：' +
                    parms[0].value;
                return str;
            },
        },
        textStyle: {
            color: '#C9C9C9',
        },
        grid: {
            containLabel: true,
            left: '2%',
            top: '15%',
            bottom: '2%',
            right: '5%',
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: fontSize(0.20), //刻度标签与轴线之间的距离。
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
                // fontStyle: 'bold',
            },
        },
        yAxis: [{
            type: 'value',
            name: '单位：千克',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                // lineStyle: {
                //     // 使用深浅的间隔色
                //     color: ["#B5B5B5"],
                //     type: "dashed",
                //     opacity: 0.5,
                // },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
            },
        }, ],
        series: [{
                type: 'bar',
                name: '产量',
                type: 'bar',
                data: data1,
                stack: 'zs',
                barMaxWidth: 'auto',
                barWidth: fontSize(0.32),
                itemStyle: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [{
                                offset: 0,
                                color: '#00e2cf',
                            },
                            {
                                offset: 1,
                                color: '#0c1f55',
                            }
                        ],
                    },
                },
            },

            // 顶
            {
                data: data5,
                type: 'pictorialBar',
                barMaxWidth: '20',
                symbolPosition: 'end',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [fontSize(0.32), fontSize(0.2)],
                zlevel: 2,
                itemStyle: {
                    normal: {
                        color: '#6dfff3',
                    },
                },
            },

        ],
    };

    myChart.setOption(optionbar1);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

bar1()


// 图形数据2
var datacl2 = [
    [50, 150, 180, 135, 95, 70],
    [140, 350, 380, 335, 295, 270],
    [330, 1150, 1180, 1235, 995, 2170]
]

// 交易产量value
var value_data2 = [150.9, 251.8, 350.7]

datacl_box2 = datacl2[0];

var cl2_1 = document.getElementsByClassName('day2_cl')[0]
var cl2_2 = document.getElementsByClassName('month2_cl')[0]
var cl2_3 = document.getElementsByClassName('year2_cl')[0]
var cl2_jy = document.getElementsByClassName('jyl_2')[0]
    // console.log(cl1_1);

cl2_1.onclick = function() {
    datacl_box2 = datacl2[0];
    bar2();
    cl2_1.classList.add('span_c');
    cl2_2.classList.remove('span_c');
    cl2_3.classList.remove('span_c');
    cl2_jy.setAttribute('data-value', value_data2[0]);
    init8();
}

cl2_2.onclick = function() {
    datacl_box2 = datacl2[1];
    bar2();
    cl2_1.classList.remove('span_c');
    cl2_2.classList.add('span_c');
    cl2_3.classList.remove('span_c');
    cl2_jy.setAttribute('data-value', value_data2[1]);
    init8();
}

cl2_3.onclick = function() {
    datacl_box2 = datacl2[2];
    bar2();
    cl2_1.classList.remove('span_c');
    cl2_2.classList.remove('span_c');
    cl2_3.classList.add('span_c');
    cl2_jy.setAttribute('data-value', value_data2[2]);
    init8();
}


function bar2() {
    var myChart = echarts.init(document.querySelector(".bar2"));

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    var xData = ['2019', '2020', '2021', '2022', '2023'];
    var data1 = datacl_box2;
    var data5 = [];

    for (let i = 0; i < data1.length; i++) {
        data5.push(data1[i]);
    }
    // var maxnum1 = Math.max.apply(null);
    // var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
    // if (maxnum1 >= 5) {
    //     var max1 = Math.ceil(maxnum1 / (10 * maxlen1)) * maxlen1 * 10;
    // } else {
    //     var max1 = 5;
    // }
    optionbar2 = {
        // backgroundColor: '#000E1A', //背景色
        tooltip: {
            trigger: 'axis',
            borderColor: 'rgba(255,255,255,.3)',
            backgroundColor: 'rgba(13,5,30,.6)',
            textStyle: {
                color: 'white', //设置文字颜色
            },
            borderWidth: 1,
            padding: 5,
            formatter: function(parms) {
                var str =
                    '年份：' +
                    parms[0].axisValue +
                    '</br>' +
                    parms[0].marker +
                    '产量：' +
                    parms[0].value;
                return str;
            },
        },
        textStyle: {
            color: '#C9C9C9',
        },
        grid: {
            containLabel: true,
            left: '2%',
            top: '15%',
            bottom: '2%',
            right: '5%',
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: fontSize(0.20), //刻度标签与轴线之间的距离。
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
                // fontStyle: 'bold',
            },
        },
        yAxis: [{
            type: 'value',
            name: '单位：千克',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                // lineStyle: {
                //     // 使用深浅的间隔色
                //     color: ["#B5B5B5"],
                //     type: "dashed",
                //     opacity: 0.5,
                // },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
            },
        }, ],
        series: [{
                type: 'bar',
                name: '产量',
                type: 'bar',
                data: data1,
                stack: 'zs',
                barMaxWidth: 'auto',
                barWidth: fontSize(0.32),
                itemStyle: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [{
                                offset: 0,
                                color: '#5985f4',
                            },
                            {
                                offset: 1,
                                color: '#0c1f53',
                            }
                        ],
                    },
                },
            },

            // 顶
            {
                data: data5,
                type: 'pictorialBar',
                barMaxWidth: '20',
                symbolPosition: 'end',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [fontSize(0.32), fontSize(0.2)],
                zlevel: 2,
                itemStyle: {
                    normal: {
                        color: '#729aff',
                    },
                },
            },

        ],
    };

    myChart.setOption(optionbar2);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
bar2()


// 图形数据3
var datacl3 = [
    [50, 150, 180, 135, 95, 70],
    [140, 350, 380, 335, 295, 270],
    [330, 1150, 1180, 1235, 995, 2170]
]

// 交易产量value
var value_data3 = [150.9, 251.8, 350.7]

datacl_box3 = datacl3[0];

var cl3_1 = document.getElementsByClassName('day3_cl')[0]
var cl3_2 = document.getElementsByClassName('month3_cl')[0]
var cl3_3 = document.getElementsByClassName('year3_cl')[0]
var cl3_jy = document.getElementsByClassName('jyl_3')[0]
    // console.log(cl1_1);

cl3_1.onclick = function() {
    datacl_box3 = datacl3[0];
    bar3();
    cl3_1.classList.add('span_c');
    cl3_2.classList.remove('span_c');
    cl3_3.classList.remove('span_c');
    cl3_jy.setAttribute('data-value', value_data3[0]);
    init9();
}

cl3_2.onclick = function() {
    datacl_box3 = datacl3[1];
    bar3();
    cl3_1.classList.remove('span_c');
    cl3_2.classList.add('span_c');
    cl3_3.classList.remove('span_c');
    cl3_jy.setAttribute('data-value', value_data3[1]);
    init9();
}

cl3_3.onclick = function() {
    datacl_box3 = datacl3[2];
    bar3();
    cl3_1.classList.remove('span_c');
    cl3_2.classList.remove('span_c');
    cl3_3.classList.add('span_c');
    cl3_jy.setAttribute('data-value', value_data3[2]);
    init9();
}

function bar3() {
    var myChart = echarts.init(document.querySelector(".bar3"));

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    var xData = ['2019', '2020', '2021', '2022', '2023'];
    var data1 = datacl_box3;
    var data5 = [];

    for (let i = 0; i < data1.length; i++) {
        data5.push(data1[i]);
    }
    // var maxnum1 = Math.max.apply(null);
    // var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
    // if (maxnum1 >= 5) {
    //     var max1 = Math.ceil(maxnum1 / (10 * maxlen1)) * maxlen1 * 10;
    // } else {
    //     var max1 = 5;
    // }
    optionbar3 = {
        // backgroundColor: '#000E1A', //背景色
        tooltip: {
            trigger: 'axis',
            borderColor: 'rgba(255,255,255,.3)',
            backgroundColor: 'rgba(13,5,30,.6)',
            textStyle: {
                color: 'white', //设置文字颜色
            },
            borderWidth: 1,
            padding: 5,
            formatter: function(parms) {
                var str =
                    '年份：' +
                    parms[0].axisValue +
                    '</br>' +
                    parms[0].marker +
                    '产量：' +
                    parms[0].value;
                return str;
            },
        },
        textStyle: {
            color: '#C9C9C9',
        },
        grid: {
            containLabel: true,
            left: '2%',
            top: '15%',
            bottom: '2%',
            right: '5%',
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: fontSize(0.20), //刻度标签与轴线之间的距离。
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
                // fontStyle: 'bold',
            },
        },
        yAxis: [{
            type: 'value',
            name: '单位：千克',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                // lineStyle: {
                //     // 使用深浅的间隔色
                //     color: ["#B5B5B5"],
                //     type: "dashed",
                //     opacity: 0.5,
                // },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
            },
        }, ],
        series: [{
                type: 'bar',
                name: '产量',
                type: 'bar',
                data: data1,
                stack: 'zs',
                barMaxWidth: 'auto',
                barWidth: fontSize(0.32),
                itemStyle: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [{
                                offset: 0,
                                color: '#e0ab14',
                            },
                            {
                                offset: 1,
                                color: '#0c1f56',
                            }
                        ],
                    },
                },
            },

            // 顶
            {
                data: data5,
                type: 'pictorialBar',
                barMaxWidth: '20',
                symbolPosition: 'end',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [fontSize(0.32), fontSize(0.2)],
                zlevel: 2,
                itemStyle: {
                    normal: {
                        color: '#ffce46',
                    },
                },
            },

        ],
    };

    myChart.setOption(optionbar3);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
bar3()


// 图形数据4
var datacl4 = [
    [50, 150, 180, 135, 95, 70],
    [140, 350, 380, 335, 295, 270],
    [330, 1150, 1180, 1235, 995, 2170]
]

// 交易产量value
var value_data4 = [150.9, 251.8, 350.7]

datacl_box4 = datacl4[0];

var cl4_1 = document.getElementsByClassName('day4_cl')[0]
var cl4_2 = document.getElementsByClassName('month4_cl')[0]
var cl4_3 = document.getElementsByClassName('year4_cl')[0]
var cl4_jy = document.getElementsByClassName('jyl_4')[0]
    // console.log(cl1_1);

cl4_1.onclick = function() {
    datacl_box4 = datacl4[0];
    bar4();
    cl4_1.classList.add('span_c');
    cl4_2.classList.remove('span_c');
    cl4_3.classList.remove('span_c');
    cl4_jy.setAttribute('data-value', value_data4[0]);
    init10();
}

cl4_2.onclick = function() {
    datacl_box4 = datacl4[1];
    bar4();
    cl4_1.classList.remove('span_c');
    cl4_2.classList.add('span_c');
    cl4_3.classList.remove('span_c');
    cl4_jy.setAttribute('data-value', value_data4[1]);
    init10();
}

cl4_3.onclick = function() {
    datacl_box4 = datacl4[2];
    bar4();
    cl4_1.classList.remove('span_c');
    cl4_2.classList.remove('span_c');
    cl4_3.classList.add('span_c');
    cl4_jy.setAttribute('data-value', value_data4[2]);
    init10();
}

function bar4() {
    var myChart = echarts.init(document.querySelector(".bar4"));

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    var xData = ['2019', '2020', '2021', '2022', '2023'];
    var data1 = datacl_box4;
    var data5 = [];

    for (let i = 0; i < data1.length; i++) {
        data5.push(data1[i]);
    }
    // var maxnum1 = Math.max.apply(null);
    // var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
    // if (maxnum1 >= 5) {
    //     var max1 = Math.ceil(maxnum1 / (10 * maxlen1)) * maxlen1 * 10;
    // } else {
    //     var max1 = 5;
    // }
    optionbar4 = {
        // backgroundColor: '#000E1A', //背景色
        tooltip: {
            trigger: 'axis',
            borderColor: 'rgba(255,255,255,.3)',
            backgroundColor: 'rgba(13,5,30,.6)',
            textStyle: {
                color: 'white', //设置文字颜色
            },
            borderWidth: 1,
            padding: 5,
            formatter: function(parms) {
                var str =
                    '年份：' +
                    parms[0].axisValue +
                    '</br>' +
                    parms[0].marker +
                    '产量：' +
                    parms[0].value;
                return str;
            },
        },
        textStyle: {
            color: '#C9C9C9',
        },
        grid: {
            containLabel: true,
            left: '2%',
            top: '15%',
            bottom: '2%',
            right: '5%',
        },
        xAxis: {
            type: 'category',
            data: xData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: fontSize(0.20), //刻度标签与轴线之间的距离。
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
                // fontStyle: 'bold',
            },
        },
        yAxis: [{
            type: 'value',
            name: '单位：千克',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3d4c75',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                // lineStyle: {
                //     // 使用深浅的间隔色
                //     color: ["#B5B5B5"],
                //     type: "dashed",
                //     opacity: 0.5,
                // },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#adf3e6',
                },
                fontSize: fontSize(0.14),
            },
        }, ],
        series: [{
                type: 'bar',
                name: '产量',
                type: 'bar',
                data: data1,
                stack: 'zs',
                barMaxWidth: 'auto',
                barWidth: 32,
                itemStyle: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [{
                                offset: 0,
                                color: '#826fe5',
                            },
                            {
                                offset: 1,
                                color: '#0c1f56',
                            }
                        ],
                    },
                },
            },

            // 顶
            {
                data: data5,
                type: 'pictorialBar',
                barMaxWidth: '20',
                symbolPosition: 'end',
                symbol: 'diamond',
                symbolOffset: [0, '-50%'],
                symbolSize: [fontSize(0.32), fontSize(0.2)],
                zlevel: 2,
                itemStyle: {
                    normal: {
                        color: '#ae9fff',
                    },
                },
            },

        ],
    };

    myChart.setOption(optionbar4);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
bar4()



function line5() {
    var myChart = echarts.init(document.querySelector(".line5"));

    data = [10, 6, 11, 14, 12]
    datedata5 = ['2019', '2020', '2021', '2022', '2023']

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    option4 = {
        grid: {
            show: false,
            top: '25%',
            right: '3%',
            bottom: '20%',
            left: '10%'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                // show: false
                lineStyle: {
                    color: '#3d4c78'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#6d7997"
                }
            },
            data: datedata5
        },

        yAxis: {
            type: 'value',
            name: '单位/(千克)',
            nameTextStyle: {
                color: "#6d7997",
                fontSize: fontSize(0.12),
                padding: [0, 0, 0, 20]
            },
            min: 0,
            max: 25,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1f3164'
                }
            },
            splitNumber: 4,
            axisLabel: {
                color: "#6d7997",
                padding: [0, 0, 0, 3]
            }
        },
        series: [{
            data: data,
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: "#4B7EFE",
                width: 1
            },
        }]
    };
    myChart.setOption(option4);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

line5()