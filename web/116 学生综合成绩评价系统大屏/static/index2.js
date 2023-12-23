(function (fn) {
    fn();
    setInterval(fn, 1000);
})(function () {
    var dt = new Date();
    document.getElementById("show_time").innerHTML =
        dt.getFullYear() + "-" +
        (dt.getMonth() + 1) + "-" +
        (dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate()) + " " +
        (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ":" +
        (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ":" +
        (dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds()) + "";
});
(function () {
    var myChart = echarts.init(document.getElementById('center_bar'));
    const xData = ["洪英妹", "薛安琪", "陈静语", "邓雪萍", "蔡梅花", "欧文熙", "黄淑榕", "田鑫玲", "李鼎炜", "蔡婷婷", "余添招", "林明雪", "黄思菡", "张冉冉", "黄丽君", "陈智勇", "李静", "李舒媛", "陈奕", "陈佳怡"]
    const yData = [10, 10, 8, 9, 13, 13, 15, 8, 11, 7, 15, 14, 13, 10, 8, 10, 14, 13, 12, 8]
    const yData2 = [5, 6, 2, 5, 8, 8, 7, 5, 5, 3, 8, 6, 6, 4, 3, 4, 6, 6, 6, 3]

    const option = {
        tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: 15,
            top: 50,
            right: 15,
            bottom: 20,
            containLabel: true
        },
        // legend: {
        //     itemGap: 50,
        //     data: ["膳食指南", "增值"],
        //     textStyle: {
        //         color: "#fff",
        //     },
        // },
        xAxis: [
            {
                type: "category",
                boundaryGap: true,
                axisLine: {
                    //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: "#f9f9f9",
                    },
                },
                axisLabel: {
                    interval: 0,
                    color: "#00FFE3",
                    rotate: 45,
                    fontSize: 14,
                },
                axisTick: {
                    show: false,
                },
                data: xData,
            },
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: "#0a3256",
                    },
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: "#d1e6eb",
                    },
                },
                axisTick: {
                    show: false,
                },
            },
        ],
        series: [
            {
                name: "膳食指南",
                type: "bar",
                label: {
                    show: true,
                    position: "top",
                    formatter: function (param) {
                        return param.value;
                    },
                    textStyle: {
                        color: "#ffffff",
                    },
                },
                barWidth: 12,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                        {
                            offset: 0,
                            color: "#00FFE3",
                        },
                        {
                            offset: 1,
                            color: "#4693EC",
                        },
                    ]),
                    barBorderRadius: [30, 30, 30, 30],
                },
                data: yData,
            },
            {
                name: "增值",
                type: "line",
                showAllSymbol: true,
                symbol: "emptyCircle",
                symbolSize: 6,
                lineStyle: {
                    normal: {
                        color: "#28ffb3", // 线条颜色
                    },
                    borderColor: "#f0f",
                },
                label: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "#fff",
                    },
                },
                itemStyle: {
                    normal: {
                        color: "#28ffb3",
                    },
                },
                areaStyle: {
                    //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0,154,120,1)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0,0,0, 0)",
                                },
                            ],
                            false
                        ),
                        shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                        shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    },
                },
                data: yData2,
            },

        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    var myChart = echarts.init(document.getElementById('center_pie'));
    var img =
        "data:image/png;base64,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";
    var trafficWay = [
        {
            name: "第一组",
            value: 50,
            value1: 26,
        },
        {
            name: "第二组",
            value: 54,
            value1: 28,
        },
        {
            name: "第三组",
            value: 60,
            value1: 27,
        },
        {
            name: "第四组",
            value: 57,
            value1: 25,
        },
    ];
    const countObj = {
        0: 26,
        2: 28,
        4: 27,
        6: 25,
    }

    var data = [];
    var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000",
    ];
    for (var i = 0; i < trafficWay.length; i++) {
        data.push(
            {
                value: trafficWay[i].value,
                name: trafficWay[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        shadowBlur: 20,
                        borderColor: color[i],
                        shadowColor: color[i],
                    },
                },
            },
            {
                value: 2,
                name: "",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        color: "rgba(0, 0, 0, 0)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        borderWidth: 0,
                    },
                },
            }
        );
    }
    const option = {
        color: color,
        graphic: {
            elements: [
                {
                    type: "image",
                    z: 3,
                    style: {
                        image: img,
                        width: 100,
                        height: 100,
                    },
                    left: "center",
                    top: "center",
                    position: [100, 100],
                },
            ],
        },
        tooltip: {
            show: false,
        },
        series: [
            {
                name: "",
                type: "pie",
                clockWise: false,
                radius: [65, 69],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "outside",
                            color: "#fff",
                            formatter: function (params) {
                                if (params.name !== "") {
                                    return (
                                        // "膳食指南" + 
                                        params.name + '：' + params.value + '分' +
                                        "\n" +
                                        "\n" +
                                        "增值：" +
                                        countObj[params.dataIndex]
                                    );
                                } else {
                                    return "";
                                }
                            },
                        },
                        labelLine: {
                            length: 10,
                            length2: 25,
                            show: true,
                            color: "#00ffff",
                        },
                    },
                },
                data: data,
            },
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    var myChart = echarts.init(document.getElementById('one_echarts'));
    const xData = ["第一组", "第二组", "第三组", "第四组"]
    const yData = [251, 271, 260, 265]
    const option = {
        grid: {
            left: 15,
            top: 20,
            right: 15,
            bottom: 0,
            containLabel: true
        },
        tooltip: {
            show: true
        },
        xAxis: {
            data: xData,
            //坐标轴
            axisLine: {
                lineStyle: {
                    color: "#3eb2e8",
                },
            },
            //坐标值标注
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                },
            },
        },
        yAxis: {
            //坐标轴
            axisLine: {
                show: false,
            },
            //坐标值标注
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                },
            },
            //分格线
            splitLine: {
                lineStyle: {
                    color: "#4784e8",
                },
            },
        },
        series: [
            {
                name: "",
                tooltip: {
                    show: true,
                },
                type: "bar",
                barWidth: 24.5,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            1,
                            0,
                            0,
                            [
                                {
                                    offset: 0,
                                    color: "#0B4EC3", // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#138CEB", // 60% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#17AAFE", // 100% 处的颜色
                                },
                            ],
                            false
                        ),
                    },
                },
                data: yData,
                barGap: 0,
            },
            {
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            1,
                            0,
                            0,
                            [
                                {
                                    offset: 0,
                                    color: "#09337C", // 0% 处的颜色
                                },
                                {
                                    offset: 0.6,
                                    color: "#0761C0", // 60% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#0575DE", // 100% 处的颜色
                                },
                            ],
                            false
                        ),
                    },
                },
                barGap: 0,
                data: yData,
            },
            {
                name: "b",
                tooltip: {
                    show: false,
                },
                type: "pictorialBar",
                itemStyle: {
                    borderWidth: 1,
                    borderColor: "#0571D5",
                    color: "#1779E0",
                },
                symbol: "path://M 0,0 l 120,0 l -30,60 l -120,0 z",
                symbolSize: ["33", "8"],
                symbolOffset: ["0", "-5"],
                //symbolRotate: -5,
                symbolPosition: "end",
                data: yData,
                z: 3,
            },
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    var myChart1 = echarts.init(document.getElementById('pie1'));
    var myChart2 = echarts.init(document.getElementById('pie2'));
    var myChart3 = echarts.init(document.getElementById('pie3'));
    var myChart4 = echarts.init(document.getElementById('pie4'));
    const obj1 = {
        radius: ["30%", "34%"],
        center: ["50%", "65%"],
        type: "pie",
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
        },
        animation: false,
        tooltip: {
            show: false,
        },
        data: [
            {
                value: 1,
                itemStyle: {
                    color: "rgba(250,250,250,0.3)",
                },
            },
        ],
    }

    const obj2 = {
        name: "外边框",
        type: "pie",
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        center: ["50%", "65%"],
        radius: ["65%", "65%"],
        label: {
            normal: {
                show: false,
            },
        },
        data: [
            {
                value: 9,
                name: "",
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: "#0b5263",
                    },
                },
            },
        ],
    }
    const pie1Data = [
        { name: '洪英妹', value: 10 },
        { name: '薛安琪', value: 10 },
        { name: '陈静语', value: 8 },
        { name: '邓雪萍', value: 9 },
        { name: '蔡梅花', value: 13 },
    ]
    const pie2Data = [
        { name: '欧文熙', value: 13 },
        { name: '黄淑榕', value: 15 },
        { name: '田鑫玲', value: 8 },
        { name: '李鼎炜', value: 11 },
        { name: '蔡婷婷', value: 7 },
    ]
    const pie3Data = [
        { name: '余添招', value: 15 },
        { name: '林明雪', value: 14 },
        { name: '黄思菡', value: 13 },
        { name: '张冉冉', value: 10 },
        { name: '黄丽君', value: 8 },
    ]
    const pie4Data = [
        { name: '陈智勇', value: 10 },
        { name: '李静', value: 14 },
        { name: '李舒媛', value: 13 },
        { name: '陈奕', value: 12 },
        { name: '陈佳怡', value: 8 },
    ]
    const option1 = {
        color: ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"],
        title: {
            text: "第一组",
            textStyle: {
                color: "#fff",
                fontSize: 10,
            },
            x: "center",
            y: "60%",
        },
        legend: {
            show: true,
            top: 5,
            left: 'center',
            textStyle: {
                color: "#f2f2f2",
                fontSize: 10,
            },
            itemWidth: 10,
            itemHeight: 10,
            data: pie1Data
        },
        tooltip: {
            show: true
        },
        series: [
            // 主要展示层的
            {
                radius: ["30%", "61%"],
                center: ["50%", "65%"],
                type: "pie",
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 10,
                            color: "#fff"
                        },
                        position: "outside",
                    },
                    emphasis: {
                        show: true,
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                name: "",
                data: pie1Data
            },
            obj1,
            obj2
        ],
    };
    const option2 = {
        color: ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"],

        title: {
            text: "第二组",
            textStyle: {
                color: "#fff",
                fontSize: 10,
            },
            x: "center",
            y: "60%",
        },
        legend: {
            show: true,
            top: 5,
            left: 'center',
            textStyle: {
                color: "#f2f2f2",
                fontSize: 10,
            },
            itemWidth: 10,
            itemHeight: 10,
            data: pie2Data
        },
        tooltip: {
            show: true
        },
        series: [
            // 主要展示层的
            {
                radius: ["30%", "61%"],
                center: ["50%", "65%"],
                type: "pie",
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 10,
                            color: "#fff"
                        },
                        position: "outside",
                    },
                    emphasis: {
                        show: true,
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                name: "",
                data: pie2Data
            },
            obj1,
            obj2
        ],
    };
    const option3 = {
        color: ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"],
        title: {
            text: "第三组",
            textStyle: {
                color: "#fff",
                fontSize: 10,
            },
            x: "center",
            y: "60%",
        },
        legend: {
            show: true,
            top: 5,
            left: 'center',
            textStyle: {
                color: "#f2f2f2",
                fontSize: 10,
            },
            itemWidth: 10,
            itemHeight: 10,
            data: pie3Data
        },
        tooltip: {
            show: true
        },
        series: [
            // 主要展示层的
            {
                radius: ["30%", "61%"],
                center: ["50%", "65%"],
                type: "pie",
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 10,
                            color: "#fff"
                        },
                        position: "outside",
                    },
                    emphasis: {
                        show: true,
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                name: "",
                data: pie3Data
            },
            obj1,
            obj2
        ],
    };
    const option4 = {
        color: ["#00ffff", "#00cfff", "#006ced", "#ffe000", "#ffa800", "#ff5b00", "#ff3000"],
        title: {
            text: "第四组",
            textStyle: {
                color: "#fff",
                fontSize: 10,
            },
            x: "center",
            y: "60%",
        },
        legend: {
            show: true,
            top: 5,
            left: 'center',
            textStyle: {
                color: "#f2f2f2",
                fontSize: 10,
            },
            itemWidth: 10,
            itemHeight: 10,
            data: pie4Data
        },
        tooltip: {
            show: true
        },
        series: [
            // 主要展示层的
            {
                radius: ["30%", "61%"],
                center: ["50%", "65%"],
                type: "pie",
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            fontSize: 10,
                            color: "#fff"
                        },
                        position: "outside",
                    },
                    emphasis: {
                        show: true,
                    },
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 5,
                        length2: 5,
                    },
                    emphasis: {
                        show: true,
                    },
                },
                name: "",
                data: pie4Data
            },
            obj1,
            obj2
        ],
    };
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    window.addEventListener("resize", function () {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
    });
})();




(function () {
    var myChart = echarts.init(document.getElementById('three_echarts'));
    const xData = ["蔡梅花", "余添招", "欧文熙", "黄淑榕", "薛安琪"]
    const yData = [8, 8, 8, 7, 6]
    const option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: 15,
            top: 10,
            right: 15,
            bottom: 0,
            containLabel: true
        },
        xAxis: {
            show: false,
            type: "value",
        },
        yAxis: [
            {
                type: "category",
                inverse: true,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 15
                    },
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                data: xData,
            },
            {
                type: "category",
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                show: true,
                axisLabel: {
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 15,
                    },
                },
                data: yData,
            },
        ],
        series: [
            {
                name: "金额",
                type: "bar",
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: "rgb(57,89,255,1)",
                            },
                            {
                                offset: 1,
                                color: "rgb(46,200,207,1)",
                            },
                        ]),
                    },
                },
                barWidth: 10,
                data: yData,
            },
        ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    var list = document.getElementById('list');
    var list2 = document.getElementById('list2');
    var rule = document.getElementById('rule');
    const dataOne = ["第1组", "第1组", "第1组", "第1组", "第1组", "第2组", "第2组", "第2组", "第2组", "第2组", "第3组", "第3组", "第3组", "第3组", "第3组", "第4组", "第4组", "第4组", "第4组", "第4组"]
    const dataTwo = ["洪英妹", "薛安琪", "陈静语", "邓雪萍", "蔡梅花", "欧文熙", "黄淑榕", "田鑫玲", "李鼎炜", "蔡婷婷", "余添招", "林明雪", "黄思菡", "张冉冉", "黄丽君", "陈智勇", "李静", "李舒媛", "陈奕", "陈佳怡"]
    const dataThree = ["+2", "+3", "+3", "+3", "+3", "+5", "+5", "+5", "+5", "+5", "+3", "+3", "+3", "+3", "+3", "+4", "+4", "+4", "+4", "+4"]
    const htmlArr = []
    dataOne.map((item, index) => {
        htmlArr.push(`<div><span>${dataOne[index]}</span><span>${dataTwo[index]}</span>
        <span style="color: #4bd8ba; font-weight:900">${dataThree[index]}</span>
        </div>`)
    })
    list.innerHTML = htmlArr
    list2.innerHTML = list.innerHTML;
    var speed = 50;
    function Marquee() {
        if (list2.offsetTop - rule.scrollTop <= 0)
            rule.scrollTop -= list.offsetHeight;
        else {
            rule.scrollTop++;
        }
    }
    var MyMar = setInterval(Marquee, speed);
    rule.addEventListener('mouseover', function () {
        clearInterval(MyMar)
    });
    rule.addEventListener('mouseout', function () {
        MyMar = setInterval(Marquee, speed)
    });
})();