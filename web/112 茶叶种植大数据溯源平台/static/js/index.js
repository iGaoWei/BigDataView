function fontSize(res) {
    let clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}


// 产量溯源
var day_cl = document.getElementsByClassName('day_cl')[0]
var month_cl = document.getElementsByClassName('month_cl')[0]
var year_cl = document.getElementsByClassName('year_cl')[0]
var span_cl1 = document.getElementsByClassName('span_cl1')[0]
var span_cl2 = document.getElementsByClassName('span_cl2')[0]
var span_cl3 = document.getElementsByClassName('span_cl3')[0]
var span_cl4 = document.getElementsByClassName('span_cl4')[0]
console.log(span_cl1.getAttribute("data-value"));

cldata = [
    // 日
    [10, 10, 10, 10],
    // 月
    [300, 300, 300, 300],
    // 年
    [3650, 3650, 3650, 3650]
]

span_cl1.innerHTML = cldata[0][0]
span_cl2.innerHTML = cldata[0][1]
span_cl3.innerHTML = cldata[0][2]
span_cl4.innerHTML = cldata[0][3]

function cl1() {
    day_cl.classList.add('span_c')
    month_cl.classList.remove('span_c')
    year_cl.classList.remove('span_c')
    span_cl1.setAttribute("data-value", cldata[0][0])
    span_cl2.setAttribute("data-value", cldata[0][1])
    span_cl3.setAttribute("data-value", cldata[0][2])
    span_cl4.setAttribute("data-value", cldata[0][3])
    init();

}

function cl2() {
    day_cl.classList.remove('span_c')
    month_cl.classList.add('span_c')
    year_cl.classList.remove('span_c')
    span_cl1.setAttribute("data-value", cldata[1][0])
    span_cl2.setAttribute("data-value", cldata[1][1])
    span_cl3.setAttribute("data-value", cldata[1][2])
    span_cl4.setAttribute("data-value", cldata[1][3])
    init();
}

function cl3() {
    day_cl.classList.remove('span_c')
    month_cl.classList.remove('span_c')
    year_cl.classList.add('span_c')
    span_cl1.setAttribute("data-value", cldata[2][0])
    span_cl2.setAttribute("data-value", cldata[2][1])
    span_cl3.setAttribute("data-value", cldata[2][2])
    span_cl4.setAttribute("data-value", cldata[2][3])
    init();
}


// 银针溯源

// 当年的平均值 企业码
yzdata_r = [
    [2, 9, 13, 9, 20],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
yzdata_y = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
yzdata_n = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]


// 农产品码
yzdata_r2 = [
    [3, 2, 6, 13, 10],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
yzdata_y2 = [
    [1, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
yzdata_n2 = [
    [1, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]

// 日期数据
datedata1 = ['2019', '2020', '2021', '2022', '2023'];

// 输入数据
yzdatabox = yzdata_r[0];

// 判断企业码、农产品码
var yzstatusx = 0;

// 判断日月年
var yzstatus = 1;

var day_yz = document.getElementsByClassName('day_yz')[0]
var month_yz = document.getElementsByClassName('month_yz')[0]
var year_yz = document.getElementsByClassName('year_yz')[0]
var li1_yz = document.getElementsByClassName('li1_yz')[0]
var li2_yz = document.getElementsByClassName('li2_yz')[0]
var li3_yz = document.getElementsByClassName('li3_yz')[0]
var qiye_yz = document.getElementsByClassName('qiye_yz')[0]
var nongchan_yz = document.getElementsByClassName('nongchan_yz')[0]

// 获取li1_yz内的span便签的value值
console.log(li1_yz.children[0].children[0].setAttribute("data-value", ''));

// 企业码
function qiye_yz1() {
    qiye_yz.classList.add('span_c');
    nongchan_yz.classList.remove('span_c');
    yzstatusx = 0;
    yzstatus = 1;
    yzdatabox = yzdata_r[0];
    line1();
    console.log('企业码');
    day_yz.classList.add('span_c1')
    month_yz.classList.remove('span_c1')
    year_yz.classList.remove('span_c1')
}

// 农产品码
function nongchan_yz1() {
    qiye_yz.classList.remove('span_c')
    nongchan_yz.classList.add('span_c')
    yzstatusx = 1;
    yzstatus = 1;
    yzdatabox = yzdata_r2[0];
    line1();
    console.log('农产品码');
    day_yz.classList.add('span_c1')
    month_yz.classList.remove('span_c1')
    year_yz.classList.remove('span_c1')
}

function yz1() {
    if (yzstatusx == 0) {
        yzstatus = 1;
        yzdatabox = yzdata_r[0];
        console.log('日企业码赋码量');
    } else {
        yzstatus = 1;
        yzdatabox = yzdata_r2[0];
        console.log('日农产品赋码量');
    }
    day_yz.classList.add('span_c1')
    month_yz.classList.remove('span_c1')
    year_yz.classList.remove('span_c1')
    li1_yz.classList.add('li-sel1')
    li2_yz.classList.remove('li-sel1')
    li3_yz.classList.remove('li-sel1')
    line1();
}

function yz2() {
    if (yzstatusx == 0) {
        yzstatus = 2;
        yzdatabox = yzdata_y[0];
        console.log('月企业码赋码量');
    } else {
        yzstatus = 2;
        yzdatabox = yzdata_y2[0];
        console.log('月农产品赋码量');
    }
    day_yz.classList.remove('span_c1')
    month_yz.classList.add('span_c1')
    year_yz.classList.remove('span_c1')
    li1_yz.classList.add('li-sel1')
    li2_yz.classList.remove('li-sel1')
    li3_yz.classList.remove('li-sel1')
    line1();
}

function yz3() {
    if (yzstatusx == 0) {
        yzstatus = 3;
        yzdatabox = yzdata_n[0];
        console.log('年企业码赋码量');
    } else {
        yzstatus = 3;
        yzdatabox = yzdata_n2[0];
        console.log('年农产品赋码量');
    }
    day_yz.classList.remove('span_c1')
    month_yz.classList.remove('span_c1')
    year_yz.classList.add('span_c1')
    li1_yz.classList.add('li-sel1')
    li2_yz.classList.remove('li-sel1')
    li3_yz.classList.remove('li-sel1')
    line1();
}

function yz4() {
    // 日
    // yzstatus = 1;
    if (yzstatusx == 0 && yzstatus == 1) {
        yzdatabox = yzdata_r[0]
        console.log('日企业码赋码量');
    } else if (yzstatusx == 0 && yzstatus == 2) {
        yzdatabox = yzdata_y[0]
        console.log('月企业码赋码量');
    } else if (yzstatusx == 0 && yzstatus == 3) {
        yzdatabox = yzdata_n[0]
        console.log('年企业码赋码量');
    } else if (yzstatusx == 1 && yzstatus == 1) {
        yzdatabox = yzdata_r2[0]
        console.log('日农产品赋码量');
    } else if (yzstatusx == 1 && yzstatus == 2) {
        yzdatabox = yzdata_y2[0]
        console.log('月农产品赋码量');
    } else if (yzstatusx == 1 && yzstatus == 3) {
        yzdatabox = yzdata_n2[0]
        console.log('年农产品赋码量');
    }
    li1_yz.classList.add('li-sel1')
    li2_yz.classList.remove('li-sel1')
    li3_yz.classList.remove('li-sel1')
    line1();
}

function yz5() {
    // yzstatus = 2;
    if (yzstatusx == 0 && yzstatus == 1) {
        yzdatabox = yzdata_r[1]
        console.log('日企业码销售额');
    } else if (yzstatusx == 0 && yzstatus == 2) {
        yzdatabox = yzdata_y[1]
        console.log('月企业码销售额');
    } else if (yzstatusx == 0 && yzstatus == 3) {
        yzdatabox = yzdata_n[1]
        console.log('年企业码销售额');
    } else if (yzstatusx == 1 && yzstatus == 1) {
        yzdatabox = yzdata_r2[1]
        console.log('日农产品销售额');
    } else if (yzstatusx == 1 && yzstatus == 2) {
        yzdatabox = yzdata_y2[1]
        console.log('月农产品销售额');
    } else if (yzstatusx == 1 && yzstatus == 3) {
        yzdatabox = yzdata_n2[1]
        console.log('年农产品销售额');
    }
    console.log(yzdatabox);
    li1_yz.classList.remove('li-sel1')
    li2_yz.classList.add('li-sel1')
    li3_yz.classList.remove('li-sel1')
    line1();
}

function yz6() {
    // yzstatus = 3;
    if (yzstatusx == 0 && yzstatus == 1) {
        yzdatabox = yzdata_r[2]
        console.log('日企业码消费者追溯量');
    } else if (yzstatusx == 0 && yzstatus == 2) {
        yzdatabox = yzdata_y[2]
        console.log('月企业码消费者追溯量');
    } else if (yzstatusx == 0 && yzstatus == 3) {
        yzdatabox = yzdata_n[2]
        console.log('年企业码消费者追溯量');
    } else if (yzstatusx == 1 && yzstatus == 1) {
        yzdatabox = yzdata_r2[2]
        console.log('日农产品消费者追溯量');
    } else if (yzstatusx == 1 && yzstatus == 2) {
        yzdatabox = yzdata_y2[2]
        console.log('月农产品消费者追溯量');
    } else if (yzstatusx == 1 && yzstatus == 3) {
        yzdatabox = yzdata_n2[2]
        console.log('年农产品消费者追溯量');
    }
    li1_yz.classList.remove('li-sel1')
    li2_yz.classList.remove('li-sel1')
    li3_yz.classList.add('li-sel1')
    line1();
}

function line1() {
    var myChart = echarts.init(document.querySelector(".line1"));
    data = yzdatabox
    console.log(data, 'data');
    console.log('2?');

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    option = {
        grid: {
            show: false,
            top: '7%',
            right: '3%',
            bottom: '20%',
            left: '8%'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                // show: false
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#adf3e6"
                }
            },
            data: datedata1
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            axisLabel: {
                color: "#adf3e6"
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
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
};

line1();




// 牡丹溯源

// 当年的平均值 企业码
mddata_r = [
    [2, 9, 13, 9, 20],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
mddata_y = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
mddata_n = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]


// 农产品码
mddata_r2 = [
    [1, 2, 6, 13, 10],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
mddata_y2 = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
mddata_n2 = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]

// 日期数据
datedata2 = ['2019', '2020', '2021', '2022', '2023'];

// 输入数据
mddatabox = mddata_r[0]

// 判断企业码、农产品码
var mdstatusx = 0;

// 判断日月年
mdstatus = 1;

var day_md = document.getElementsByClassName('day_md')[0]
var month_md = document.getElementsByClassName('month_md')[0]
var year_md = document.getElementsByClassName('year_md')[0]
var li1_md = document.getElementsByClassName('li1_md')[0]
var li2_md = document.getElementsByClassName('li2_md')[0]
var li3_md = document.getElementsByClassName('li3_md')[0]
var qiye_md = document.getElementsByClassName('qiye_md')[0]
var nongchan_md = document.getElementsByClassName('nongchan_md')[0]

function qiye_md1() {
    qiye_md.classList.add('span_c');
    nongchan_md.classList.remove('span_c');
    mdstatusx = 0;
    mdstatus = 1;
    mddatabox = mddata_r[0];
    line2();
    // console.log('企业码');
    day_md.classList.add('span_c1')
    month_md.classList.remove('span_c1')
    year_md.classList.remove('span_c1')
}

function nongchan_md1() {
    qiye_md.classList.remove('span_c')
    nongchan_md.classList.add('span_c')
    mdstatusx = 1;
    mdstatus = 1;
    mddatabox = mddata_r2[0];
    line2();
    // console.log('农产品码');
    day_md.classList.add('span_c1')
    month_md.classList.remove('span_c1')
    year_md.classList.remove('span_c1')
}

function md1() {
    if (mdstatusx == 0) {
        mdstatus = 1;
        mddatabox = mddata_r[0];
        // console.log('日企业码赋码量');
    } else {
        mdstatus = 1;
        mddatabox = mddata_r2[0];
        // console.log('日农产品赋码量');
    }
    day_md.classList.add('span_c1')
    month_md.classList.remove('span_c1')
    year_md.classList.remove('span_c1')
    li1_md.classList.add('li-sel1')
    li2_md.classList.remove('li-sel1')
    li3_md.classList.remove('li-sel1')
    line2();
}

function md2() {
    if (mdstatusx == 0) {
        mdstatus = 2;
        mddatabox = mddata_y[0];
        // console.log('月企业码赋码量');
    } else {
        mdstatus = 2;
        mddatabox = mddata_y2[0];
        // console.log('月农产品赋码量');
    }
    day_md.classList.remove('span_c1')
    month_md.classList.add('span_c1')
    year_md.classList.remove('span_c1')
    mddatabox = mddata_y[0];
    li1_md.classList.add('li-sel1')
    li2_md.classList.remove('li-sel1')
    li3_md.classList.remove('li-sel1')
    line2();
}

function md3() {
    if (mdstatusx == 0) {
        mdstatus = 3;
        mddatabox = mddata_n[0];
        // console.log('年企业码赋码量');
    } else {
        mdstatus = 3;
        mddatabox = mddata_n2[0];
        // console.log('年农产品赋码量');
    }
    day_md.classList.remove('span_c1')
    month_md.classList.remove('span_c1')
    year_md.classList.add('span_c1')
    mddatabox = mddata_n[0];
    li1_md.classList.add('li-sel1')
    li2_md.classList.remove('li-sel1')
    li3_md.classList.remove('li-sel1')
    line2();
}

function md4() {
    if (mdstatusx == 0 && mdstatus == 1) {
        mddatabox = mddata_r[0]
        // console.log('日企业码赋码量');
    } else if (mdstatusx == 0 && mdstatus == 2) {
        mddatabox = mddata_y[0]
        // console.log('月企业码赋码量');
    } else if (mdstatusx == 0 && mdstatus == 3) {
        mddatabox = mddata_n[0]
        // console.log('年企业码赋码量');
    } else if (mdstatusx == 1 && mdstatus == 1) {
        mddatabox = mddata_r2[0]
        // console.log('日农产品赋码量');
    } else if (mdstatusx == 1 && mdstatus == 2) {
        mddatabox = mddata_y2[0]
        // console.log('月农产品赋码量');
    } else if (mdstatusx == 1 && mdstatus == 3) {
        mddatabox = mddata_n2[0]
        // console.log('年农产品赋码量');
    }
    li1_md.classList.add('li-sel1')
    li2_md.classList.remove('li-sel1')
    li3_md.classList.remove('li-sel1')
    line2();
}

function md5() {
    if (mdstatusx == 0 && mdstatus == 1) {
        mddatabox = mddata_r[1]
        // console.log('日企业码销售额');
    } else if (mdstatusx == 0 && mdstatus == 2) {
        mddatabox = mddata_y[1]
        // console.log('月企业码销售额');
    } else if (mdstatusx == 0 && mdstatus == 3) {
        mddatabox = mddata_n[1]
        // console.log('年企业码销售额');
    } else if (mdstatusx == 1 && mdstatus == 1) {
        mddatabox = mddata_r2[1]
        // console.log('日农产品销售额');
    } else if (mdstatusx == 1 && mdstatus == 2) {
        mddatabox = mddata_y2[1]
        // console.log('月农产品销售额');
    } else if (mdstatusx == 1 && mdstatus == 3) {
        mddatabox = mddata_n2[1]
        // console.log('年农产品销售额');
    }
    li1_md.classList.remove('li-sel1')
    li2_md.classList.add('li-sel1')
    li3_md.classList.remove('li-sel1')
    line2();
}

function md6() {
    if (mdstatusx == 0 && mdstatus == 1) {
        mddatabox = mddata_r[2]
        // console.log('日企业码消费者追溯量');
    } else if (mdstatusx == 0 && mdstatus == 2) {
        mddatabox = mddata_y[2]
        // console.log('月企业码消费者追溯量');
    } else if (mdstatusx == 0 && mdstatus == 3) {
        mddatabox = mddata_n[2]
        // console.log('年企业码消费者追溯量');
    } else if (mdstatusx == 1 && mdstatus == 1) {
        mddatabox = mddata_r2[2]
        // console.log('日农产品消费者追溯量');
    } else if (mdstatusx == 1 && mdstatus == 2) {
        mddatabox = mddata_y2[2]
        // console.log('月农产品消费者追溯量');
    } else if (mdstatusx == 1 && mdstatus == 3) {
        mddatabox = mddata_n2[2]
        // console.log('年农产品消费者追溯量');
    }
    li1_md.classList.remove('li-sel1')
    li2_md.classList.remove('li-sel1')
    li3_md.classList.add('li-sel1')
    line2();
}

function line2() {
    var myChart = echarts.init(document.querySelector(".line2"));
    data = mddatabox

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    option2 = {
        grid: {
            show: false,
            top: '7%',
            right: '3%',
            bottom: '20%',
            left: '8%'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                // show: false
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#adf3e6"
                }
            },
            data: datedata2
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            // splitNumber: 5,
            axisLabel: {
                color: "#adf3e6"
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
    myChart.setOption(option2);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

line2()


// 寿眉溯源

// 当年的平均值 企业码
smdata_r = [
    [2, 9, 13, 9, 20],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
smdata_y = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
smdata_n = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]


// 农产品码
smdata_r2 = [
    [3, 2, 6, 13, 10],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
smdata_y2 = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
smdata_n2 = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]

// 日期数据
datedata3 = ['2019', '2020', '2021', '2022', '2023'];

// 输入数据
smdatabox = smdata_r[0]

// 判断企业码、农产品码
var smstatusx = 0;

// 判断日月年
smstatus = 1;

var day_sm = document.getElementsByClassName('day_sm')[0]
var month_sm = document.getElementsByClassName('month_sm')[0]
var year_sm = document.getElementsByClassName('year_sm')[0]
var li1_sm = document.getElementsByClassName('li1_sm')[0]
var li2_sm = document.getElementsByClassName('li2_sm')[0]
var li3_sm = document.getElementsByClassName('li3_sm')[0]
var qiye_sm = document.getElementsByClassName('qiye_sm')[0]
var nongchan_sm = document.getElementsByClassName('nongchan_sm')[0]


function qiye_sm1() {
    qiye_sm.classList.add('span_c');
    nongchan_sm.classList.remove('span_c');
    smstatusx = 0;
    smstatus = 1;
    smdatabox = smdata_r[0];
    line3();
    // console.log('企业码');
    day_sm.classList.add('span_c1')
    month_sm.classList.remove('span_c1')
    year_sm.classList.remove('span_c1')
}

function nongchan_sm1() {
    qiye_sm.classList.remove('span_c')
    nongchan_sm.classList.add('span_c')
    smstatusx = 1;
    smstatus = 1;
    smdatabox = smdata_r2[0];
    line3();
    // console.log('农产品码');
    day_sm.classList.add('span_c1')
    month_sm.classList.remove('span_c1')
    year_sm.classList.remove('span_c1')
}


function sm1() {
    if (smstatusx == 0) {
        smstatus = 1;
        smdatabox = smdata_r[0];
        // console.log('日企业码赋码量');
    } else {
        smstatus = 1;
        smdatabox = smdata_r2[0];
        // console.log('日农产品赋码量');
    }
    day_sm.classList.add('span_c1')
    month_sm.classList.remove('span_c1')
    year_sm.classList.remove('span_c1')
    li1_sm.classList.add('li-sel1')
    li2_sm.classList.remove('li-sel1')
    li3_sm.classList.remove('li-sel1')
    line3();
}

function sm2() {
    if (smstatusx == 0) {
        smstatus = 2;
        smdatabox = smdata_y[0];
        // console.log('月企业码赋码量');
    } else {
        smstatus = 2;
        smdatabox = smdata_y2[0];
        // console.log('月农产品赋码量');
    }
    day_sm.classList.remove('span_c1')
    month_sm.classList.add('span_c1')
    year_sm.classList.remove('span_c1')
    li1_sm.classList.add('li-sel1')
    li2_sm.classList.remove('li-sel1')
    li3_sm.classList.remove('li-sel1')
    line3();
}

function sm3() {
    if (smstatusx == 0) {
        smstatus = 3;
        smdatabox = smdata_n[0];
        // console.log('年企业码赋码量');
    } else {
        smstatus = 3;
        smdatabox = smdata_n2[0];
        // console.log('年农产品赋码量');
    }
    day_sm.classList.remove('span_c1')
    month_sm.classList.remove('span_c1')
    year_sm.classList.add('span_c1')
    li1_sm.classList.add('li-sel1')
    li2_sm.classList.remove('li-sel1')
    li3_sm.classList.remove('li-sel1')
    line3();
}

function sm4() {
    if (smstatusx == 0 && smstatus == 1) {
        smdatabox = smdata_r[0]
        // console.log('日企业码赋码量');
    } else if (smstatusx == 0 && smstatus == 2) {
        smdatabox = smdata_y[0]
        // console.log('月企业码赋码量');
    } else if (smstatusx == 0 && smstatus == 3) {
        smdatabox = smdata_n[0]
        // console.log('年企业码赋码量');
    } else if (smstatusx == 1 && smstatus == 1) {
        smdatabox = smdata_r2[0]
        // console.log('日农产品赋码量');
    } else if (smstatusx == 1 && smstatus == 2) {
        smdatabox = smdata_y2[0]
        // console.log('月农产品赋码量');
    } else if (smstatusx == 1 && smstatus == 3) {
        smdatabox = smdata_n2[0]
        // console.log('年农产品赋码量');
    }
    li1_sm.classList.add('li-sel1')
    li2_sm.classList.remove('li-sel1')
    li3_sm.classList.remove('li-sel1')
    line3();
}

function sm5() {
    if (smstatusx == 0 && smstatus == 1) {
        smdatabox = smdata_r[1]
        // console.log('日企业码销售额');
    } else if (smstatusx == 0 && smstatus == 2) {
        smdatabox = smdata_y[1]
        // console.log('月企业码销售额');
    } else if (smstatusx == 0 && smstatus == 3) {
        smdatabox = smdata_n[1]
        // console.log('年企业码销售额');
    } else if (smstatusx == 1 && smstatus == 1) {
        smdatabox = smdata_r2[1]
        // console.log('日农产品销售额');
    } else if (smstatusx == 1 && smstatus == 2) {
        smdatabox = smdata_y2[1]
        // console.log('月农产品销售额');
    } else if (smstatusx == 1 && smstatus == 3) {
        smdatabox = smdata_n2[1]
        // console.log('年农产品销售额');
    }
    li1_sm.classList.remove('li-sel1')
    li2_sm.classList.add('li-sel1')
    li3_sm.classList.remove('li-sel1')
    line3();
}

function sm6() {
    if (smstatusx == 0 && smstatus == 1) {
        smdatabox = smdata_r[2]
        // console.log('日企业码消费者追溯量');
    } else if (smstatusx == 0 && smstatus == 2) {
        smdatabox = smdata_y[2]
        // console.log('月企业码消费者追溯量');
    } else if (smstatusx == 0 && smstatus == 3) {
        smdatabox = smdata_n[2]
        // console.log('年企业码消费者追溯量');
    } else if (smstatusx == 1 && smstatus == 1) {
        smdatabox = smdata_r2[2]
        // console.log('日农产品消费者追溯量');
    } else if (smstatusx == 1 && smstatus == 2) {
        smdatabox = smdata_y2[2]
        // console.log('月农产品消费者追溯量');
    } else if (smstatusx == 1 && smstatus == 3) {
        smdatabox = smdata_n2[2]
        // console.log('年农产品消费者追溯量');
    }
    li1_sm.classList.remove('li-sel1')
    li2_sm.classList.remove('li-sel1')
    li3_sm.classList.add('li-sel1')
    line3();
}

function line3() {
    var myChart = echarts.init(document.querySelector(".line3"));
    data = smdatabox

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    option3 = {
        grid: {
            show: false,
            top: '7%',
            right: '3%',
            bottom: '20%',
            left: '8%'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                // show: false
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#adf3e6"
                }
            },
            data: datedata3
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            // splitNumber: 5,
            axisLabel: {
                color: "#adf3e6"
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
    myChart.setOption(option3);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

line3()

// 贡眉溯源

// 当年的平均值 企业码
gmdata_r = [
    [2, 9, 13, 9, 20],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
gmdata_y = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
gmdata_n = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]


// 农产品码
gmdata_r2 = [
    [3, 2, 6, 13, 10],
    [2.12, 1.23, 3.11, 2.21, 3.23],
    [423, 529, 543, 639, 420]
]
gmdata_y2 = [
    [22, 93, 3, 94, 120],
    [22.12, 31.23, 23.11, 12.21, 43.23],
    [422, 529, 543, 139, 420]
]
gmdata_n2 = [
    [221, 321, 123, 521, 210],
    [221.22, 331.23, 523.11, 112.21, 343.23],
    [323, 229, 454, 339, 343]
]

// 日期数据
datedata4 = ['2019', '2020', '2021', '2022', '2023'];

// 输入数据
gmdatabox = gmdata_r[0]

// 判断企业码、农产品码
var gmstatusx = 0;

// 判断日月年
gmstatus = 1;

var day_gm = document.getElementsByClassName('day_gm')[0]
var month_gm = document.getElementsByClassName('month_gm')[0]
var year_gm = document.getElementsByClassName('year_gm')[0]
var li1_gm = document.getElementsByClassName('li1_gm')[0]
var li2_gm = document.getElementsByClassName('li2_gm')[0]
var li3_gm = document.getElementsByClassName('li3_gm')[0]
var qiye_gm = document.getElementsByClassName('qiye_gm')[0]
var nongchan_gm = document.getElementsByClassName('nongchan_gm')[0]

function qiye_gm1() {
    qiye_gm.classList.add('span_c');
    nongchan_gm.classList.remove('span_c');
    gmstatusx = 0;
    gmstatus = 1;
    gmdatabox = gmdata_r[0];
    line4();
    // console.log('企业码');
    day_gm.classList.add('span_c1')
    month_gm.classList.remove('span_c1')
    year_gm.classList.remove('span_c1')
}

function nongchan_gm1() {
    qiye_gm.classList.remove('span_c')
    nongchan_gm.classList.add('span_c')
    gmstatusx = 1;
    gmstatus = 1;
    gmdatabox = gmdata_r2[0];
    line4();
    // console.log('农产品码');
    day_gm.classList.add('span_c1')
    month_gm.classList.remove('span_c1')
    year_gm.classList.remove('span_c1')
}

function gm1() {
    if (gmstatusx == 0) {
        gmstatus = 1;
        gmdatabox = gmdata_r[0];
        // console.log('日企业码赋码量');
    } else {
        gmstatus = 1;
        gmdatabox = gmdata_r2[0];
        // console.log('日农产品赋码量');
    }
    day_gm.classList.add('span_c1')
    month_gm.classList.remove('span_c1')
    year_gm.classList.remove('span_c1')
    li1_gm.classList.add('li-sel1')
    li2_gm.classList.remove('li-sel1')
    li3_gm.classList.remove('li-sel1')
    line4();
}

function gm2() {
    if (gmstatusx == 0) {
        gmstatus = 2;
        gmdatabox = gmdata_y[0];
        // console.log('月企业码赋码量');
    } else {
        gmstatus = 2;
        gmdatabox = gmdata_y2[0];
        // console.log('月农产品赋码量');
    }
    day_gm.classList.remove('span_c1')
    month_gm.classList.add('span_c1')
    year_gm.classList.remove('span_c1')
    line4();
    li1_gm.classList.add('li-sel1')
    li2_gm.classList.remove('li-sel1')
    li3_gm.classList.remove('li-sel1')
}

function gm3() {
    if (gmstatusx == 0) {
        gmstatus = 3;
        gmdatabox = gmdata_n[0];
        // console.log('年企业码赋码量');
    } else {
        gmstatus = 3;
        gmdatabox = gmdata_n2[0];
        // console.log('年农产品赋码量');
    }
    day_gm.classList.remove('span_c1')
    month_gm.classList.remove('span_c1')
    year_gm.classList.add('span_c1')
    line4();
    li1_gm.classList.add('li-sel1')
    li2_gm.classList.remove('li-sel1')
    li3_gm.classList.remove('li-sel1')
}

function gm4() {
    if (gmstatusx == 0 && gmstatus == 1) {
        gmdatabox = gmdata_r[0]
        // console.log('日企业码赋码量');
    } else if (gmstatusx == 0 && gmstatus == 2) {
        gmdatabox = gmdata_y[0]
        // console.log('月企业码赋码量');
    } else if (gmstatusx == 0 && gmstatus == 3) {
        gmdatabox = gmdata_n[0]
        // console.log('年企业码赋码量');
    } else if (gmstatusx == 1 && gmstatus == 1) {
        gmdatabox = gmdata_r2[0]
        // console.log('日农产品赋码量');
    } else if (gmstatusx == 1 && gmstatus == 2) {
        gmdatabox = gmdata_y2[0]
        // console.log('月农产品赋码量');
    } else if (gmstatusx == 1 && gmstatus == 3) {
        gmdatabox = gmdata_n2[0]
        // console.log('年农产品赋码量');
    }
    li1_gm.classList.add('li-sel1')
    li2_gm.classList.remove('li-sel1')
    li3_gm.classList.remove('li-sel1')
    line4();
}

function gm5() {
    if (gmstatusx == 0 && gmstatus == 1) {
        gmdatabox = gmdata_r[1]
        // console.log('日企业码销售额');
    } else if (gmstatusx == 0 && gmstatus == 2) {
        gmdatabox = gmdata_y[1]
        // console.log('月企业码销售额');
    } else if (gmstatusx == 0 && gmstatus == 3) {
        gmdatabox = gmdata_n[1]
        // console.log('年企业码销售额');
    } else if (gmstatusx == 1 && gmstatus == 1) {
        gmdatabox = gmdata_r2[1]
        // console.log('日农产品销售额');
    } else if (gmstatusx == 1 && gmstatus == 2) {
        gmdatabox = gmdata_y2[1]
        // console.log('月农产品销售额');
    } else if (gmstatusx == 1 && gmstatus == 3) {
        gmdatabox = gmdata_n2[1]
        // console.log('年农产品销售额');
    }
    li1_gm.classList.remove('li-sel1')
    li2_gm.classList.add('li-sel1')
    li3_gm.classList.remove('li-sel1')
    line4();
}

function gm6() {
    if (gmstatusx == 0 && gmstatus == 1) {
        gmdatabox = gmdata_r[2]
        // console.log('日企业码消费者追溯量');
    } else if (gmstatusx == 0 && gmstatus == 2) {
        gmdatabox = gmdata_y[2]
        // console.log('月企业码消费者追溯量');
    } else if (gmstatusx == 0 && gmstatus == 3) {
        gmdatabox = gmdata_n[2]
        // console.log('年企业码消费者追溯量');
    } else if (gmstatusx == 1 && gmstatus == 1) {
        gmdatabox = gmdata_r2[2]
        // console.log('日农产品消费者追溯量');
    } else if (gmstatusx == 1 && gmstatus == 2) {
        gmdatabox = gmdata_y2[2]
        // console.log('月农产品消费者追溯量');
    } else if (gmstatusx == 1 && gmstatus == 3) {
        gmdatabox = gmdata_n2[2]
        // console.log('年农产品消费者追溯量');
    }
    li1_gm.classList.remove('li-sel1')
    li2_gm.classList.remove('li-sel1')
    li3_gm.classList.add('li-sel1')
    line4();
}

function line4() {
    var myChart = echarts.init(document.querySelector(".line4"));

    data = gmdatabox

    function fontSize(res) {
        let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
    };

    option4 = {
        grid: {
            show: false,
            top: '7%',
            right: '3%',
            bottom: '20%',
            left: '8%'
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                // show: false
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#adf3e6"
                }
            },
            data: datedata4
        },

        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#4B7EFE'
                }
            },
            // splitNumber: 5,
            axisLabel: {
                color: "#adf3e6"
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
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

line4()