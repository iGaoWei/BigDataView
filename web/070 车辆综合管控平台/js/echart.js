$(function () {
    /*echart_1();*/
    echart_2();

    echart_3();
    /*echart_4();*/

    /*echart_map();*/
    echarts_1();
    echarts_4();
    echarts_2();
    char4();


    //echart_1
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));

        var data = [
            {value: 335,name: '客运车'},
            {value: 335,name: '危险品运输车'},
            {value: 315,name: '网约车'},
            {value: 200,name: '学生班车'}
        ];

        option = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            legend: { //图例组件，颜色和名字
                left: '65%',
                top: '95',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 16,
                itemHeight: 12,

                icon: 'rect',
                data: ['客运车', '危险品运输车', '网约车', '学生班车'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '车辆类型',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 80], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                    },
                },

                label: { //标签的位置
                    normal: {
                        show: false,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 45], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts_1'));

        var data = [
            {value: 12,name: '行业一'},
            {value: 13,name: '行业二'},
            {value: 70,name: '行业三'},
            {value: 52,name: '行业四'},
            {value: 35,name: '行业五'}
        ];

        option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/>{c} ({d}%)"
            },
            color: ['#af89d6', '#4ac7f5', '#0089ff', '#f36f8a', '#f5c847'],
            legend: { //图例组件，颜色和名字
                x: '70%',
                y: 'center',
                orient: 'vertical',
                itemGap: 12, //图例每项之间的间隔
                itemWidth: 10,
                itemHeight: 10,
                icon: 'rect',
                data: ['行业一', '行业二', '行业三', '行业四', '行业五'],
                textStyle: {
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            series: [{
                name: '行业占比',
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [50, 75], //饼图的半径
                avoidLabelOverlap: true, ////是否启用防止标签重叠
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 2,
                    },
                },
                label: { //标签的位置
                    normal: {
                        show: true,
                        position: 'inside', //标签的位置
                        formatter: "{d}%",
                        textStyle: {
                            color: '#fff',
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bold'
                        }
                    }
                },
                data: data
            }, {
                name: '',
                type: 'pie',
                clockwise: false,
                silent: true,
                minAngle: 20, //最小的扇区角度（0 ~ 360）
                center: ['35%', '50%'], //饼图的中心（圆心）坐标
                radius: [0, 40], //饼图的半径
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#1e2239',
                        borderWidth: 1.5,
                        opacity: 0.21,
                    }
                },
                label: { //标签的位置
                    normal: {
                        show: false,
                    }
                },
                data: data
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    //echart_2
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },

            legend: {
                // align: 'center',
                // left: '65%',
                top: '28',
                data: ['行驶', '停车', '熄火', '离线'],
                itemWidth:16,
                itemHeight:12,
                // borderRadius: 0, // 统一设置四个角的圆角大小
                icon: 'rect',
                textStyle: {
                    itemGap: 12, //图例每项之间的间隔
                    color: [],
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },

            xAxis: {
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                data: ['学生班车', '网约车', '危险品运输车', '客运车'],
                axisTick : {show: true},
                axisLabel: { //调整x轴的lable
                    textStyle: {
                        color: '#fff',
                        fontSize: 13,
                    }
                },
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '行驶',
                type: 'bar',
                stack: '总量',
                color:'#0035f9',
                barWidth : 18,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [4, 10, 8, 7]
            }, {
                name: '停车',
                type: 'bar',
                stack: '总量',
                color:'#f36f8a',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [10, 4, 5, 6]
            }, {
                name: '熄火',
                type: 'bar',
                stack: '总量',
                color:'#efe39b',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [4, 10, 8, 7]
            }, {
                name: '离线',
                type: 'bar',
                stack: '总量',
                color:'#25f3e6',
                barWidth : 20,
                label: {
                    normal: {
                        show: false,
                        position: 'insideRight'
                    }
                },
                data: [4, 10, 8, 7]
            }

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    // echart_map
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        /*var name_title = "投票统计"
        var subname = ''
        var nameColor = " rgb(55, 75, 113)"
        var name_fontFamily = '楷体'
        var name_fontSize = 52
        var mapName = 'china'
        var data = []
        var geoCoordMap = {};
        var toolTipData = [];

        /!*获取地图数据*!/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;
            data.push({
                name: name,
                value: Math.round(Math.random() * 100 + 10)
            })
            toolTipData.push({
                name: name,
                value: [{
                    name: "客运车",
                    value: Math.round(Math.random() * 100 + 10)
                },
                    {
                        name: "危险品运输车",
                        value: Math.round(Math.random() * 100 + 10)
                    },
                    {
                        name: "网约车",
                        value: Math.round(Math.random() * 100 + 10)
                    },
                    {
                        name: "学生班车",
                        value: Math.round(Math.random() * 100 + 10)
                    }
                ]
            })
        });

        var max = 480,
            min = 9; // todo
        var maxSize4Pin = 100,
            minSize4Pin = 20;

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };
        option = {
            title: {
                show:false,
                text: name_title,
                subtext: subname,
                x: 'center',
                textStyle: {
                    color: nameColor,
                    fontFamily: name_fontFamily,
                    fontSize: name_fontSize
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (typeof(params.value)[2] == "undefined") {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        return toolTiphtml;
                    } else {
                        var toolTiphtml = ''
                        for(var i = 0;i<toolTipData.length;i++){
                            if(params.name==toolTipData[i].name){
                                toolTiphtml += toolTipData[i].name+':<br>'
                                for(var j = 0;j<toolTipData[i].value.length;j++){
                                    toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"
                                }
                            }
                        }
                        return toolTiphtml;
                    }
                }
            },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['credit_pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    // color: ['#3B5077', '#031525'] // 蓝黑
                    // color: ['#ffc0cb', '#800080'] // 红紫
                    // color: ['#3C3B3F', '#605C3C'] // 黑绿
                    color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                    // color: ['#23074d', '#cc5333'] // 紫红
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#1488CC', '#2B32B2'] // 浅蓝
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿
                    // color: ['#00467F', '#A5CC82'] // 蓝绿

                }
            },
            /!*工具按钮组*!/
            toolbox: {
                show: false,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series: [{
                name: '散点',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9'
                    }
                }
            },
                {
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#0227ad',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin', //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    label: {
                        //气泡上的文字
                        normal: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F62157', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#05C3F9',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    },
                    zlevel: 1
                },

            ]
        };
        myChart.setOption(option);*/
        //var myChart = echarts.init(dom);
        var app = {};
        option = null;
        var posList = [
            'left', 'right', 'top', 'bottom',
            'inside',
            'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
            'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        ];

        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: echarts.util.reduce(posList, function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };

        app.config = {
            rotate: 90,
            align: 'left',
            verticalAlign: 'middle',
            position: 'insideBottom',
            distance: 15,
            onChange: function () {
                var labelOption = {
                    normal: {
                        rotate: app.config.rotate,
                        align: app.config.align,
                        verticalAlign: app.config.verticalAlign,
                        position: app.config.position,
                        distance: app.config.distance
                    }
                };
                myChart.setOption({
                    series: [{
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }, {
                        label: labelOption
                    }]
                });
            }
        };


        var labelOption = {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        };

        option = {
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Forest', 'Steppe', 'Desert', 'Wetland']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['2012', '2013', '2014', '2015', '2016']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Forest',
                    type: 'bar',
                    barGap: 0,
                    label: labelOption,
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: 'Steppe',
                    type: 'bar',
                    label: labelOption,
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'Desert',
                    type: 'bar',
                    label: labelOption,
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: 'Wetland',
                    type: 'bar',
                    label: labelOption,
                    data: [98, 77, 101, 99, 40]
                }
            ]
        };;
        /*if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }*/
        myChart.setOption(option);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    //echart_3
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var xAxisData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
        var legendData= ['','',''];
        var title = "";
        var serieData = [];
        var metaDate = [
            [120, 140, 100, 120, 300, 230, 130, 170,140, 120, 300, 230,120, 140, 100, 120, 300, 230, 130, 170,140, 120, 300, 230]

        ]
        for(var v=0; v < legendData.length ; v++){
            var serie = {
                name:legendData[v],
                type: 'line',
                symbol:"circle",
                symbolSize:10,
                data: metaDate[v]
            };
            serieData.push(serie)
        }
        var colors = ["#ffff43"];
        var option = {
            backgroundColor: 'transparent',
            title : {text: title,textAlign:'left',textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},

            color:colors,
            grid: {left: '4%',top:"30%",bottom: "5%",right:"4%",containLabel: true},
            tooltip : { trigger: 'axis',axisPointer : { type : 'shadow'}},
            xAxis: [
                {
                    type: 'category',
                    axisLine: { show: true,lineStyle:{ color:'#2c3459' }},
                    axisLabel:{interval:0,textStyle:{color:'#fff',fontSize:12} },
                    axisTick : {show: false},
                    data:xAxisData,
                },
            ],
            yAxis: [
                {
                    axisTick : {show: false},
                    splitLine: {show:false},
                    axisLabel:{textStyle:{color:'#fff',fontSize:12} },
                    axisLine: { show: true,lineStyle:{ color:'#2c3459'}},
                },
            ],
            series:serieData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));

        /*中间显示的数据*/
        /*中间显示的数据*/
        var myData = ['超速', 'SOS', '偏移', '其他']
        var databeast = {
            1: [38, 25, 26, 32]
        }
        var databeauty = {
            1: [11, 38, 23, 30]
        }
        var timeLineData = [1]

        var option = {
            baseOption: {
                backgroundColor: 'transparent',
                timeline: {
                    show: false,
                    top: 0,
                    data: []
                },
                legend: {
                    show:true,
                    // align: 'center',
                    left: '30%',
                    top: 30,
                    // data: ['行驶', '停车'],
                    // itemWidth:16,
                    // itemHeight:12,
                    // // borderRadius: 0, // 统一设置四个角的圆角大小
                    icon: 'rect',
                    textStyle: {
                        itemGap: 12, //图例每项之间的间隔
                        color: [],
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 14,
                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    formatter: '{b}<br/>{a}: {c}',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                grid: [{
                    show: false,
                    left: '8%',
                    top: 60,
                    bottom: 0,
                    containLabel: true,
                    width: '30%'
                }, {
                    show: false,
                    left: '57%',
                    top: 60,
                    bottom: 0,
                    width: '0%'
                }, {
                    show: false,
                    right: '8%',
                    top: 60,
                    bottom: 0,
                    containLabel: true,
                    width: '30%'
                }],

                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    gridIndex: 1,
                    show: false
                }, {
                    gridIndex: 2,
                    nameTextStyle: {
                        color: '#50afff',
                        fontSize: 14
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: myData
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }

                    },
                    data: myData.map(function(value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center'
                            }
                        }
                    })
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false

                    },
                    data: myData
                }],
                series: [

                ]

            },
            options: []
        }

        option.baseOption.timeline.data.push(timeLineData[0])
        option.options.push({
            tooltip: {
                trigger: 'axis',
                formatter: '{b}<br/>{c} {a}'
            },
            series: [{
                name: '昨天',
                type: 'bar',
                barWidth: 17,
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#0035f9',
                        // barBorderRadius: 50
                    }
                },

                data: databeast[timeLineData[0]]
            }, {
                name: '今天',
                type: 'bar',
                barWidth: 18,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#25f3e6',
                        // barBorderRadius: 50
                    }
                },
                data: databeauty[timeLineData[0]]
            }]
        })
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        
    }


    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            "legend": {

                "data": [
                    {"name": "图例1"},
                    {"name": "图例2"},
                    {"name": "完成率"}
                ],
                "top": "0%",
                "textStyle": {
                    "color": "rgba(255,255,255,0.9)"//图例文字
                }
            },

            "xAxis": [
                {
                    "type": "category",

                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLine: { lineStyle: {color: "rgba(255,255,255,.1)"}},
                    axisLabel:  { textStyle: {color: "rgba(255,255,255,1)", fontSize: '14', },
                    },

                },
            ],
            "yAxis": [
                {
                    "type": "value",
                    "name": "金额",
                    "min": 0,
                    "max": 50,
                    "interval": 10,
                    "axisLabel": {
                        "show": true,

                    },
                    axisLine: {lineStyle: {color: 'rgba(255,255,67,.8)'}},//左线色

                },
                {
                    "type": "value",
                    "name": "完成率",
                    "show": true,
                    "axisLabel": {
                        "show": true,

                    },
                    axisLine: {lineStyle: {color: 'rgba(255,255,67,.8)'}},//右线色
                    splitLine: {show:true,lineStyle: {color:"#ffffff"}},//x轴线
                },
            ],
            "grid": {
                "top": "10%",
                "right":"30",
                "bottom":"30",
                "left":"30",
            },
            "series": [
                {
                    "name": "图例1",

                    "type": "bar",
                    "data": [4,6,36,6,8,6,4,6,30,6,8,12],
                    "barWidth": "auto",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "#609db8"
                                    },

                                    {
                                        "offset": 1,
                                        "color": "#609db8"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    }
                },
                {
                    "name": "图例2",
                    "type": "bar",
                    "data": [
                        4,2,34,6,8,6,4,2,32,6,8,18
                    ],
                    "barWidth": "auto",

                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "#66b8a7"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "#66b8a7"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    },
                    "barGap": "0"
                },
                {
                    "name": "完成率",
                    "type": "line",
                    "yAxisIndex": 1,

                    "data": [100,50,80,30,90,40, 70,33,100,40,80,20],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    "itemStyle": {
                        "normal": {
                            "color": "#cdba00",

                        }
                    },
                    "smooth": true
                }
            ]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }




})


function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts_2'));

    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
            trigger: 'item',
            formatter: "{b}  <br/>{c}辆"
        },
        legend: {
            x: 'center',
            y: '2%',
            data: ['车型一', '车型二', '车型三', '车型四', '车型五'],
            icon: 'circle',
            textStyle: {
                color: '#fff',
            }
        },
        calculable: true,
        series: [{
            name: '车型',
            type: 'pie',
            //起始角度，支持范围[0, 360]
            startAngle: 0,
            //饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: [41, 110],
            //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
            center: ['50%', '20%'],
            //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
            // 'radius' 面积展现数据的百分比，半径展现数据的大小。
            //  'area' 所有扇区面积相同，仅通过半径展现数据大小
            roseType: 'area',
            //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}辆'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length2: 1,
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 600,
                name: '车型一',
                itemStyle: {
                    normal: {
                        color: '#f845f1'
                    }
                }
            },
                {
                    value: 1100,
                    name: '车型二',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 1200,
                    name: '车型三',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 1300,
                    name: '车型四',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1400,
                    name: '车型五',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },

                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


function char4() {

    var myChart = echarts.init($("#char4")[0]);

    option = {
        grid: {show:'true',borderWidth:'0'},
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },

            formatter: function (params) {
                var tar = params[0];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },

        xAxis : [
            {
                type : 'category',
                splitLine: {show:false},
                data : ['客运车','危险品车','网约车','学生校车'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine: {show:false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [

            {
                name:'报警数量',
                type:'bar',
                stack: '总量',
                itemStyle : {
                    normal: {
                        label : {show: true, position: 'inside'},
                        color: '#44aff0'
                    }
                    },
                data:[2900, 1200, 300, 200]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})

}
