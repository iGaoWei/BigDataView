$(function () {

    ceshis();
    ceshis1();
    ceshis2();
    ceshis3();
    ceshis4();

    function ceshis() {
        var myChart = echarts.init(document.getElementById('chart1'));

        option = {
            /*backgroundColor: '#05163B',*/
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            grid: {
                top: 'middle',
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '10%',
                containLabel: true
            },
            legend: {
                data: ['压力', '温度', '累计', '累计2'],
                textStyle: {
                    color: "#fff"
                }

            },
            xAxis: [{
                type: 'category',
                data: ['挖土方(m³)', '挖石方(m³)', '填方(m³)', '涵洞通道(道)', '桩基(根)', '承台(个)', '墩柱（含肋板）(根)', '台帽盖梁(个)', '梁板预制(片)', '梁板安装(片)', '桥面铺装(㎡)', '防撞护栏(m)',
                    '明洞(米)', '主动掘进(米)', '初期支护(米)', '二次衬砌(米)', '水稳底基层(米)', '水稳基层(第一层)(米)', '水稳基层(第二层)(米)', '上基层(米)', '沥青下面层(米)', '沥青上面层(米)',
                ],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac" //X轴文字颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                name: '压力',
                axisLabel: {
                    formatter: '{value} KPa',
                    textStyle: {
                        color: "#2EC7C9" //X轴文字颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                    }
                },
            },
                {
                    type: 'value',
                    name: '温度',
                    axisLabel: {
                        formatter: '{value} °C',
                        textStyle: {
                            color: "#2EC7C9" //X轴文字颜色
                        }
                    },axisLine: {
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                }
            ],
            series: [

                {
                    name: '压力',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFE3"
                            },
                                {
                                    offset: 1,
                                    color: "#4693EC"
                                }
                            ])
                        }
                    },
                    /*data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]*/
                    data: [26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3, 41.3, 15.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3, 42.3, 36.6],
                },
                {
                    name: '温度',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#C1B2EA"
                            },
                                {
                                    offset: 1,
                                    color: "#8362C6"
                                }
                            ])
                        }
                    },
                    data: [26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3, 41.3, 15.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3, 42.3, 36.6],
                },
                {
                    name: '累计',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3, 41.3, 15.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3, 42.3, 36.6],
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: {
                                type: 'linear',

                                colorStops: [{
                                    offset: 0,
                                    color: '#AAF487' // 0% 处的颜色
                                },
                                    {
                                        offset: 0.4,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#AAF487',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#AAF487"
                        }
                    },
                    smooth: true,
                },
                {
                    name: '累计2',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 58.8, 16.0, 32.3, 30.3, 21.3, 66.3, 41.3, 15.3, 30.3, 22.3, 12.3, 82.3, 72.3, 62.3, 52.3, 42.3, 36.6],
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: {
                                type: 'linear',

                                colorStops: [{
                                    offset: 0,
                                    color: '#F8B854' // 0% 处的颜色
                                },
                                    {
                                        offset: 0.4,
                                        color: '#DE801C' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#DE801C' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F7AD3E',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#F7AD3E"
                        }
                    },
                    smooth: true,
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function ceshis1() {
        var myChart = echarts.init(document.getElementById('chart2'));

        var ydata = [{
            name: '财务管理决策实训',
            value: 18
        },
            {
                name: '商品流通业实训',
                value: 16
            },
            {
                name: '暖心陪伴（津乐园20cm定制蛋糕）',
                value: 15
            },
            {
                name: '嘉果荟萃（津乐园20cm定制蛋糕）',
                value: 14
            },
            {
                name: '优雅圆舞曲（津乐园20cm）',
                value: 10
            },
            {
                name: '巧克力之夏（津乐园20cm定制蛋糕）',
                value: 7.9
            },
            {
                name: '财税宝4G',
                value: 6.7
            },
            {
                name: '成本会计',
                value: 6
            },
            {
                name: '纳税会计与筹划',
                value: 4.5
            },
            {
                name: '金融担保业实训',
                value: 3
            }
        ];
        var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301", "#57e7ec", "#cf9ef1"]
        var xdata = ['财务管理决策实训', "商品流通业实训", "暖心陪伴（津乐园20cm定制蛋糕）", "嘉果荟萃（津乐园20cm定制蛋糕）", '优雅圆舞曲（津乐园20cm）', '巧克力之夏（津乐园20cm定制蛋糕）', '财税宝4G', '成本会计', '纳税会计与筹划', '金融担保业实训'];


        option = {
            /*backgroundColor: "rgba(255,255,255,1)",*/
            color: color,
            legend: {
                orient: "vartical",
                x: "left",
                top: "center",
                left: "53%",
                bottom: "0%",
                data: xdata,
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#fff'
                },
                /*itemGap: 16,*/
                /*formatter:function(name){
                  var oa = option.series[0].data;
                  var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
                  for(var i = 0; i < option.series[0].data.length; i++){
                      if(name==oa[i].name){
                          return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
                      }
                  }
                }*/

                formatter: function(name) {
                    return '' + name
                }
            },
            series: [{
                type: 'pie',
                clockwise: false, //饼图的扇区是否是顺时针排布
                minAngle: 2, //最小的扇区角度（0 ~ 360）
                radius: ["20%", "60%"],
                center: ["30%", "45%"],
                avoidLabelOverlap: false,
                itemStyle: { //图形样式
                    normal: {
                        borderColor: '#ffffff',
                        borderWidth: 1,
                    },
                },
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '{text|{b}}\n{c} ({d}%)',
                        rich: {
                            text: {
                                color: "#fff",
                                fontSize: 14,
                                align: 'center',
                                verticalAlign: 'middle',
                                padding: 8
                            },
                            value: {
                                color: "#8693F3",
                                fontSize: 24,
                                align: 'center',
                                verticalAlign: 'middle',
                            },
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: 24,
                        }
                    }
                },
                data: ydata
            }]
        };
        myChart.setOption(option);

        setTimeout(function() {
            myChart.on('mouseover', function(params) {
                if (params.name == ydata[0].name) {
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                } else {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: 0
                    });
                }
            });

            myChart.on('mouseout', function(params) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: 0
                });
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: 0
            });
        }, 1000);

        // 使用刚指定的配置项和数据显示图表。
        /*myChart.setOption(option);*/
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis2() {
        var myChart = echarts.init(document.getElementById('chart3'));

        option = {
            /*backgroundColor: '#000',*/
            "animation": true,
            "title": {
                /*"text": 24,*/
               /* "subtext": "沥青工",*/
                "x": "center",
                "y": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 10,
                    "fontWeight": "normal",
                    "align": "center",
                    "width": "200px"
                },
                "subtextStyle": {
                    "color": "#fff",
                    "fontSize": 12,
                    "fontWeight": "normal",
                    "align": "center"
                }
            },
            "legend": {
                "width": "100%",
                "left": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 12
                },
                "icon": "circle",
                "right": "0",
                "bottom": "0",
                "padding": [70, 20],
                "itemGap": 5,
                "data": ["测量工", "电焊工", "钢筋工", "沥青工", "安装工", "起重工", "养护工", "其它"]
            },
            "series": [{
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["20%", "43%"],
                "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
                "startAngle": 135,
                "labelLine": {
                    "normal": {
                        "length": 15
                    }
                },
                "label": {
                    "normal": {
                        "formatter": "{b|{b}:}  {per|{d}%} ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 12,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#b3e5ff",
                                "fontSize": 16,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 8],
                                "borderRadius": 2
                            }
                        },
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 16
                        }
                    }
                },
                "emphasis": {
                    "label": {
                        "show": true,
                        "formatter": "{b|{b}:}  {per|{d}%}  ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 22,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#fff",
                                "fontSize": 14,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 6],
                                "borderRadius": 2
                            }
                        }
                    }
                },
                "data": [{
                    "name": "测量工",
                    "value": 3
                }, {
                    "name": "电焊工",
                    "value": 2
                }, {
                    "name": "钢筋工",
                    "value": 26
                }, {
                    "name": "沥青工",
                    "value": 24
                }, {
                    "name": "安装工",
                    "value": 12
                }, {
                    "name": "起重工",
                    "value": 11
                }, {
                    "name": "养护工",
                    "value": 3
                }, {
                    "name": "其它",
                    "value": 2
                }]
            }, {
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["15%", "14%"],
                "label": {
                    "show": false
                },
                "data": [{
                    "value": 78,
                    "name": "实例1",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 1,
                                "y2": 0,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "#9F17FF"
                                }, {
                                    "offset": 0.2,
                                    "color": "#01A4F7"
                                }, {
                                    "offset": 0.5,
                                    "color": "#FE2C8A"
                                }, {
                                    "offset": 0.8,
                                    "color": "#FEE449"
                                }, {
                                    "offset": 1,
                                    "color": "#00FFA8"
                                }]
                            }
                        }
                    }
                }]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis3() {
        var myChart = echarts.init(document.getElementById('chart4'));

        var colors = ['rgb(46, 199, 201)', 'rgb(90, 177, 239)', 'rgb(255, 185, 128)'];

        option = {
            color: colors,

            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                formatter: function(params) {
                    // 系列
                    let html = params[0].name + "<br>";

                    for (var i = 0; i < params.length; i++) {

                        // 获取每个系列对应的颜色值
                        html += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + params[i].color + ';"></span>';

                        // 通过判断指定系列增加 % 符号
                        if (option.series[params[i].seriesIndex].type == "line") {
                            html += params[i].seriesName + ": " + params[i].value + "%<br>";
                        } else {
                            html += params[i].seriesName + ": " + params[i].value + "<br>";
                        }
                    }
                    return html;
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            legend: {
                textStyle: {
                    color: '#fff'
                },
                data: ['蒸发量', '降水量', '平均温度']
            },
            // 缩放组件
            /*dataZoom: {
                type: 'slider'
            },*/
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    formatter: '{value} ',
                    textStyle: {
                        color: "#ffffff" //X轴文字颜色
                    }
                },
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                name: '蒸发量',
                min: 0,
                max: 250,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
                {
                    type: 'value',
                    name: '降水量',
                    min: 0,
                    max: 250,
                    position: 'right',
                    offset: 80,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    min: 0,
                    max: 25,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [{
                name: '蒸发量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                itemStyle: {
                    normal: {
                        barBorderRadius: 2
                    }
                }
            },
                {
                    barGap: '-50%', // 增加偏移量使重叠显示
                    name: '降水量',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            barBorderRadius: 2
                        }
                    }
                },
                {
                    name: '平均温度',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function ceshis4() {
        var myChart = echarts.init(document.getElementById('chart5'));

        var labelimg = "/asset/get/s/data-1575019476644-Rak5eXt1.png";

        option = {
            /*backgroundColor: "#0E233E",*/
            "grid": {
                "left": "6%",
                "top": "10%",
                "right": "3%",
                "bottom": "15%"
            },
            "legend": {
                "data": [
                    "信息",
                    "往下场所",
                    "关系",
                    "关联",
                    "人",
                    "物",
                    "组织"
                ],
                "top": "92%",
                "icon": "circle",
                "textStyle": {
                    "color": "#0DCAD2"
                }
            },
            "color": [
                "#534EE1",
                "#ECD64F",
                "#00E4F0",
                "#44D16D",
                "#124E91",
                "#BDC414",
                "#C8CCA5"
            ],
            "tooltip": {
                "position": "top",
            },
            "xAxis": {
                "type": "category",
                "data": [
                    "信息",
                    "往下场所",
                    "关系",
                    "关联",
                    "人",
                    "物",
                    "组织"
                ],
                "axisLabel": {
                    "show": false,
                    "color": "#999999",
                    "fontSize": 16
                },
                "axisTick": {
                    "show": false
                },
                "axisLine": {
                    "show": false
                },
                "splitLine": {
                    "show": false
                }
            },
            "yAxis": {
                "type": "value",
                "axisLabel": {
                    "show": false,
                    "color": "#999999",
                    "fontSize": 16
                },
                "axisTick": {
                    "show": false
                },
                "axisLine": {
                    "show": false
                },
                "splitLine": {
                    "show": false
                }
            },
            "series": [{
                "name": "信息",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "stack": "a",
                "type": "bar"
            },
                {
                    "name": "往下场所",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "关系",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "关联",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "人",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "物",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "name": "组织",
                    "data": [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    "stack": "a",
                    "type": "bar"
                },
                {
                    "type": "pictorialBar",
                    "name": "提示框值",
                    "data": [{
                        "name": "",
                        "value": 868,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function(params) {
                                var index = params.dataIndex;
                                var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                return str;
                            },
                            "rich": {
                                "a": {
                                    "fontSize": 18,
                                    "color": "#534EE1",
                                    "align": "center",
                                    "height": 40
                                },
                                "c": {
                                    "fontSize": 18,
                                    "color": "#fff",
                                    "padding": [
                                        -2,
                                        0,
                                        2,
                                        0
                                    ],
                                    "backgroundColor": {
                                        "image": labelimg
                                    },
                                    "align": "center",
                                    "verticalAlign": "bottom",
                                    "height": 50,
                                    "lineHeight": 40,
                                    "width": 100
                                }
                            }
                        },
                        "itemStyle": {
                            "normal": {
                                "color": {
                                    "type": "linear",
                                    "x": 0,
                                    "y": 0,
                                    "x2": 0,
                                    "y2": 1,
                                    "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(83,78,225,1)"
                                    },
                                        {
                                            "offset": 1,
                                            "color": "rgba(83,78,225,0)"
                                        }
                                    ],
                                    "global": false
                                }
                            }
                        }
                    },
                        {
                            "name": "",
                            "value": 306,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#ECD64F",
                                        "align": "center",
                                        "height": 40
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(236,214,79,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(236,214,79,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 162,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#00E4F0",
                                        "align": "center",
                                        "height": 40
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(0,228,240,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(0,228,240,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 362,
                            "label": {
                                "show": true,
                                formatter: function(params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                    return str;
                                },
                                "position": "top",
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#44D16D",
                                        "align": "center",
                                        "height": 40
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(68,209,109,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(68,209,109,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 460,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#124E91",
                                        "align": "center",
                                        "height": 30
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(18,78,145,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(18,78,145,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 606,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#BDC414",
                                        "align": "center",
                                        "height": 30
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(189,196,20,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(189,196,20,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        },
                        {
                            "name": "",
                            "value": 506,
                            "label": {
                                "show": true,
                                "position": "top",
                                formatter: function(params) {
                                    var index = params.dataIndex;
                                    var str = "{a|" + params.value + "}\n{c|" + params.value + "个}";
                                    return str;
                                },
                                "rich": {
                                    "a": {
                                        "fontSize": 18,
                                        "color": "#C8CCA5",
                                        "align": "center",
                                        "height": 30
                                    },
                                    "c": {
                                        "fontSize": 18,
                                        "color": "#fff",
                                        "padding": [
                                            -4,
                                            0,
                                            8,
                                            0
                                        ],
                                        "backgroundColor": {
                                            "image": labelimg
                                        },
                                        "align": "center",
                                        "verticalAlign": "bottom",
                                        "height": 45,
                                        "lineHeight": 40,
                                        "width": 100
                                    }
                                }
                            },
                            "itemStyle": {
                                "normal": {
                                    "color": {
                                        "type": "linear",
                                        "x": 0,
                                        "y": 0,
                                        "x2": 0,
                                        "y2": 1,
                                        "colorStops": [{
                                            "offset": 0,
                                            "color": "rgba(200,204,165,1)"
                                        },
                                            {
                                                "offset": 1,
                                                "color": "rgba(200,204,165,0)"
                                            }
                                        ],
                                        "global": false
                                    }
                                }
                            }
                        }
                    ],
                    "stack": "a",
                    "symbol": "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z"
                }
            ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function ceshis5() {
        var myChart = echarts.init(document.getElementById('chart_1'));


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


});