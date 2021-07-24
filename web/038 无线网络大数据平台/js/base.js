
$(function () {
    echart_map();
    //echart_1湖南各市货运量
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        myChart.clear();
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万元"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '娄底', '怀化', '湘西'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 280.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}万元'
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
                    value: 900.58,
                    name: '怀化',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 1100.58,
                    name: '永州',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 1200.58,
                    name: '张家界',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 1300.58,
                    name: '邵阳',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 1400.58,
                    name: '常德',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },
                {
                    value: 1500.58,
                    name: '岳阳',
                    itemStyle: {
                        normal: {
                            color: '#45dbf7'
                        }
                    }
                },
                {
                    value: 1500.58,
                    name: '湘潭',
                    itemStyle: {
                        normal: {
                            color: '#f6d54a'
                        }
                    }
                },
                {
                    value: 1600.58,
                    name: '株洲',
                    itemStyle: {
                        normal: {
                            color: '#f69846'
                        }
                    }
                },
                {
                    value: 1800,
                    name: '长沙',
                    itemStyle: {
                        normal: {
                            color: '#ff4343'
                        }
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: '#transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //echart_0湖南省飞机场
    function echart_0() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_0'));

        function showProvince() {
                var geoCoordMap = {
                    '长沙黄花国际机场': [113.226512,28.192929],
                    '张家界荷花机场': [110.454598,29.107223],
                    '常德桃花源机场': [111.651508,28.921516],
                    '永州零陵机场': [111.622869,26.340994],
                    '怀化芷江机场': [109.714784,27.44615],
                };
                var data = [{
                        name: '长沙黄花国际机场',
                        value: 100
                    },
                    {
                        name: '张家界荷花机场',
                        value: 100
                    },
                    {
                        name: '常德桃花源机场',
                        value: 100
                    },
                    {
                        name: '永州零陵机场',
                        value: 100
                    },
                    {
                        name: '怀化芷江机场',
                        value: 100
                    }
                ];
                var max = 480,
                    min = 9; // todo 
                var maxSize4Pin = 100,
                    minSize4Pin = 20;
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = geoCoordMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };

                myChart.setOption(option = {
                    title: {
                        top: 20,
                        text: '',
                        subtext: '',
                        x: 'center',
                        textStyle: {
                            color: '#ccc'
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        data: ['pm2.5'],
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
                        }
                    },
                    geo: {
                        show: true,
                        map:'hunan',
                        mapType: 'hunan',
                        label: {
                            normal: {
                            },
                            //鼠标移入后查看效果
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        //鼠标缩放和平移
                        roam: true,
                        itemStyle: {
                            normal: {
                                //          	color: '#ddd',
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    },
                    series: [{
                            name: 'light',
                            type: 'map',
                            coordinateSystem: 'geo',
                            data: convertData(data),
                            itemStyle: {
                                normal: {
                                    color: '#F4E925'
                                }
                            }
                        },
                        {
                            name: '点',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            symbol: 'pin',
                            symbolSize: function(val) {
                                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                                var b = minSize4Pin - a * min;
                                b = maxSize4Pin - a * max;
                                return a * val[2] + b;
                            },
                            label: {
                                normal: {
                                    // show: true,
                                    // textStyle: {
                                    //     color: '#fff',
                                    //     fontSize: 9,
                                    // }
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
                            name: 'light',
                            type: 'map',
                            mapType: 'hunan',
                            geoIndex: 0,
                            aspectScale: 0.75, //长宽比
                            showLegendSymbol: false, // 存在legend时显示
                            label: {
                                normal: {
                                    show: false
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
                                    borderColor: '#FFFFFF',
                                },
                                emphasis: {
                                    areaColor: '#2B91B7'
                                }
                            },
                            animation: false,
                            data: data
                        },
                        {
                            name: ' ',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            data: convertData(data.sort(function (a, b) {
                                return b.value - a.value;
                            }).slice(0, 5)),
                            symbolSize: function (val) {
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
                });
        }
        showProvince();

        // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2湖南省高速公路
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));

            myChart.setOption({
                series: [{
                    type: 'map',
                    mapType: 'hunan'
                }]
            });

            var geoCoordMap = {
                '怀化': [109.999867,27.518949],
                '吉首': [109.741528,28.332629],
                '张家界': [110.491722,29.112001],
                '常德': [111.701486,29.076683],
                '益阳': [112.348741,28.544124],
                '岳阳': [113.126486,29.382401],
                '长沙': [113.019455,28.200103],
                '株洲': [113.163141,27.8418],
                '湘潭': [112.91977,27.882141],
                '邵阳': [111.467859,27.21915],
                '娄底': [112.012438,27.745506],
                '衡阳': [112.63809,26.895225],
                '永州': [111.577632,26.460144],
                '郴州': [113.039396,25.81497]
            };

            var goData = [
                [{
                    name: '张家界'

                }, {
                    id: 1,
                    name: '常德',
                    value: 86
                }],
                [{
                    name: '吉首'

                }, {
                    id: 1,
                    name: '常德',
                    value: 86
                }],
                [{
                    name: '常德'

                }, {
                    id: 1,
                    name: '益阳',
                    value: 70
                }],
                [{
                    name: '益阳'

                }, {
                    id: 1,
                    name: '长沙',
                    value: 95
                }],
                [{
                    name: '长沙'

                }, {
                    id: 1,
                    name: '岳阳',
                    value: 70
                }],
                [{
                    name: '长沙'

                }, {
                    id: 1,
                    name: '湘潭',
                    value: 80
                }],
                [{
                    name: '长沙'

                }, {
                    id: 1,
                    name: '株洲',
                    value: 80
                }],
                [{
                    name: '长沙'

                }, {
                    id: 1,
                    name: '衡阳',
                    value: 80
                }],
                [{
                    name: '衡阳'

                }, {
                    id: 1,
                    name: '郴州',
                    value: 70
                }],
                [{
                    name: '衡阳'

                }, {
                    id: 1,
                    name: '永州',
                    value: 70
                }],
                [{
                    name: '湘潭'

                }, {
                    id: 1,
                    name: '娄底',
                    value: 60
                }],
                [{
                    name: '娄底'

                }, {
                    id: 1,
                    name: '邵阳',
                    value: 75
                }],
                [{
                    name: '邵阳'

                }, {
                    id: 1,
                    name: '怀化',
                    value: 75
                }],
            ];
            //值控制圆点大小
            var backData = [
                [{
                    name: '常德'

                }, {
                    id: 1,
                    name: '张家界',
                    value: 80
                }],
                [{
                    name: '常德'

                }, {
                    id: 1,
                    name: '吉首',
                    value: 66
                }],
                [{
                    name: '益阳'

                }, {
                    id: 1,
                    name: '常德',
                    value: 86
                }],
                [{
                    name: '长沙'

                }, {
                    id: 1,
                    name: '益阳',
                    value: 70
                }],
                [{
                    name: '岳阳'

                }, {
                    id: 1,
                    name: '长沙',
                    value: 95
                }],
                [{
                    name: '湘潭'

                }, {
                    id: 1,
                    name: '长沙',
                    value: 95
                }],
                [{
                    name: '株洲'

                }, {
                    id: 1,
                    name: '长沙',
                    value: 95
                }],
                [{
                    name: '衡阳'

                }, {
                    id: 1,
                    name: '长沙',
                    value: 95
                }],
                [{
                    name: '郴州'

                }, {
                    id: 1,
                    name: '衡阳',
                    value: 80
                }],
                [{
                    name: '永州'

                }, {
                    id: 1,
                    name: '衡阳',
                    value: 80
                }],
                [{
                    name: '娄底'

                }, {
                    id: 1,
                    name: '湘潭',
                    value: 80
                }],
                [{
                    name: '邵阳'

                }, {
                    id: 1,
                    name: '娄底',
                    value: 60
                }],
                [{
                    name: '怀化'

                }, {
                    id: 1,
                    name: '邵阳',
                    value: 75
                }],
            ];

            var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
            var arcAngle = function(data) {
                var j, k;
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    if (dataItem[1].id == 1) {
                        j = 0.2;
                        return j;
                    } else if (dataItem[1].id == 2) {
                        k = -0.2;
                        return k;
                    }
                }
            }

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = geoCoordMap[dataItem[0].name];
                    var toCoord = geoCoordMap[dataItem[1].name];
                    if (dataItem[1].id == 1) {
                        if (fromCoord && toCoord) {
                            res.push([{
                                coord: fromCoord,
                            }, {
                                coord: toCoord,
                                value: dataItem[1].value //线条颜色

                            }]);
                        }
                    } else if (dataItem[1].id == 2) {
                        if (fromCoord && toCoord) {
                            res.push([{
                                coord: fromCoord,
                            }, {
                                coord: toCoord
                            }]);
                        }
                    }
                }
                return res;
            };

            var color = ['#fff', '#FF1493', '#0000FF'];
            var series = [];
            [
                ['1', goData],
                ['2', backData]
            ].forEach(function(item, i) {
                series.push({
                    name: item[0],
                    type: 'lines',
                    zlevel: 2,
                    symbol: ['arrow', 'arrow'],
                    //线特效配置
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0.1,
                        symbol: 'arrow', //标记类型
                        symbolSize: 5
                    },
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.4,
                            curveness: arcAngle(item[1]), //弧线角度
                            color: '#fff'
                        }
                    },
                    edgeLabel: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 14
                            },
                            formatter: function(params) {
                                var txt = '';
                                if (params.data.speed !== undefined) {
                                    txt = params.data.speed;
                                }
                                return txt;
                            },
                        }
                    },
                    data: convertData(item[1])
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    //波纹效果
                    rippleEffect: {
                        period: 2,
                        brushType: 'stroke',
                        scale: 3
                    },
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            position: 'right',
                            formatter: '{b}'
                        }
                    },
                    //终点形象
                    symbol: 'circle',
                    //圆点大小
                    symbolSize: function(val) {
                        return val[2] / 8;
                    },
                    itemStyle: {
                        normal: {
                            show: true
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[1].name,
                            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                        };
                    })

                });

            });

            option = {
                title: {
                    text: '',
                    subtext: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}'
                },
                //线颜色及飞行轨道颜色
                visualMap: {
                    show: false,
                    min: 0,
                    max: 100,
                    color: ['#31A031','#31A031']
                },
                //地图相关设置
                geo: {
                    map: 'hunan',
                    //视角缩放比例
                    zoom: 1,
                    //显示文本样式
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    //鼠标缩放和平移
                    roam: true,
                    itemStyle: {
                        normal: {
                            //          	color: '#ddd',
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0
                        }
                    }
                },
                series: series
            };
            myChart.setOption(option);
    }
    // echart_map中国地图
    function echart_map() {
         // 基于准备好的dom，初始化echarts实例
         var myChart = echarts.init(document.getElementById('chart_map'));

         var mapName = 'china'
         var data = []
         var toolTipData = [];
 
         /*获取地图数据*/
         myChart.showLoading();
         var mapFeatures = echarts.getMap(mapName).geoJson.features;
         myChart.hideLoading();
         var geoCoordMap = {
             '福州': [119.4543, 25.9222],
             '长春': [125.8154, 44.2584],
             '重庆': [107.7539, 30.1904],
             '西安': [109.1162, 34.2004],
             '成都': [103.9526, 30.7617],
             '常州': [119.4543, 31.5582],
             '北京': [116.4551, 40.2539],
             '北海': [109.314, 21.6211],
             '海口': [110.3893, 19.8516],
             '长沙': [113.019455,28.200103],
             '上海': [121.40, 31.73],
             '内蒙古': [106.82, 39.67]
         };
 
         var GZData = [
             [{
                 name: '长沙'
             }, {
                 name: '福州',
                 value: 95
             }],
             [{
                 name: '长沙'
             }, {
                 name: '长春',
                 value: 80
             }],
             [{
                 name: '长沙'
             }, {
                 name: '重庆',
                 value: 70
             }],
             [{
                 name: '长沙'
             }, {
                 name: '西安',
                 value: 60
             }],
             [{
                 name: '长沙'
             }, {
                 name: '成都',
                 value: 50
             }],
             [{
                 name: '长沙'
             }, {
                 name: '常州',
                 value: 40
             }],
             [{
                 name: '长沙'
             }, {
                 name: '北京',
                 value: 30
             }],
             [{
                 name: '长沙'
             }, {
                 name: '北海',
                 value: 20
             }],
             [{
                 name: '长沙'
             }, {
                 name: '海口',
                 value: 10
             }],
             [{
                 name: '长沙'
             }, {
                 name: '上海',
                 value: 80
             }],
             [{
                 name: '长沙'
             }, {
                 name: '内蒙古',
                 value: 80
             }]
         ];
 
         var convertData = function (data) {
             var res = [];
             for (var i = 0; i < data.length; i++) {
                 var dataItem = data[i];
                 var fromCoord = geoCoordMap[dataItem[0].name];
                 var toCoord = geoCoordMap[dataItem[1].name];
                 if (fromCoord && toCoord) {
                     res.push({
                         fromName: dataItem[0].name,
                         toName: dataItem[1].name,
                         coords: [fromCoord, toCoord]
                     });
                 }
             }
             return res;
         };
 
         var color = ['#c5f80e'];
         var series = [];
         [
             ['石家庄', GZData]
         ].forEach(function (item, i) {
             series.push({
                 name: item[0],
                 type: 'lines',
                 zlevel: 2,
                 symbol: ['none', 'arrow'],
                 symbolSize: 10,
                 effect: {
                     show: true,
                     period: 6,
                     trailLength: 0,
                     symbol: 'arrow',
                     symbolSize: 5
                 },
                 lineStyle: {
                     normal: {
                         color: color[i],
                         width: 1,
                         opacity: 0.6,
                         curveness: 0.2
                     }
                 },
                 data: convertData(item[1])
             }, {
                 name: item[0],
                 type: 'effectScatter',
                 coordinateSystem: 'geo',
                 zlevel: 2,
                 rippleEffect: {
                     brushType: 'stroke'
                 },
                 label: {
                     normal: {
                         show: true,
                         position: 'right',
                         formatter: '{b}'
                     }
                 },
                 symbolSize: function (val) {
                     return val[2] / 8;
                 },
                 itemStyle: {
                     normal: {
                         color: color[i]
                     }
                 },
                 data: item[1].map(function (dataItem) {
                     return {
                         name: dataItem[1].name,
                         value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                     };
                 })
             });
         });
 
         option = {
             tooltip: {
                 trigger: 'item'
             },
             geo: {
                 map: 'china',
                 label: {
                     emphasis: {
                         show: false
                     }
                 },
                 roam: true,
                 itemStyle: {
                     normal: {
                         //          	color: '#ddd',
                         borderColor: 'rgba(147, 235, 248, 1)',
                         borderWidth: 1,
                         areaColor: {
                             type: 'radial',
                             x: 0.5,
                             y: 0.5,
                             r: 0.8,
                             colorStops: [{
                                 offset: 0,
                                 color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                             }, {
                                 offset: 1,
                                 color: 'rgba(	47,79,79, .1)' // 100% 处的颜色
                             }],
                             globalCoord: false // 缺省为 false
                         },
                         shadowColor: 'rgba(128, 217, 248, 1)',
                         // shadowColor: 'rgba(255, 255, 255, 1)',
                         shadowOffsetX: -2,
                         shadowOffsetY: 2,
                         shadowBlur: 10
                     },
                     emphasis: {
                         areaColor: '#389BB7',
                         borderWidth: 0
                     }
                 }
             },
             series: series
         };
 
         // 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
         window.addEventListener("resize", function () {
             myChart.resize();
         });
 
    }
    //echart_3交通就业人员
    function echart_3() {
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['铁路运输业','公路运输业','水上运输业','航空运输业','管道运输业','装卸搬运和其他运输服务业','等外公路公路里程'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年','2015年','2016年','2017年','2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '人',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'铁路运输业',
                    type:'line',
                    data:[57197, 51533, 57000, 58150, 55748]
                },
                {
                    name:'公路运输业',
                    type:'line',
                    data:[148054, 150198, 144943, 138157, 114234]
                },
                {
                    name:'水上运输业',
                    type:'line',
                    data:[27100, 25568, 25734, 24393, 23851]
                },
                {
                    name:'航空运输业',
                    type:'line',
                    data:[1795, 3306, 4151, 5538, 4766]
                },
                {
                    name:'管道运输业',
                    type:'line',
                    data:[1586,567,647,1235,1186]
                },
                {
                    name:'装卸搬运和其他运输服务业',
                    type:'line',
                    data:[4448, 11742, 12706, 10666, 10902]
                }
            ]
        };
        myChart.setOption(option);
    }
    //中国铁路
    function echart_4() {
     // 基于准备好的dom，初始化echarts图表
     var myChart = echarts2.init(document.getElementById('chart_4'));
     var effect = {
         show: true,
         scaleSize: 1,
         period: 30, // 运动周期，无单位，值越大越慢
         color: '#fff',
         shadowColor: 'rgba(220,220,220,0.4)',
         shadowBlur: 5
     };

     function itemStyle(idx) {
         return {
             normal: {
                 color: '#fff',
                 borderWidth: 1,
                 borderColor: ['rgba(30,144,255,1)', 'lime'][idx],
                 lineStyle: {
                     //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                     //shadowBlur: 10,
                     //shadowOffsetX: 0,
                     //shadowOffsetY: 0,
                     type: 'solid'
                 }
             }
         }
     };
     option = {
         color: ['rgba(30,144,255,1)', 'lime'],
         title: {
             text: '',
             subtext: '',
             sublink: '',
             x: 'center',
             textStyle: {
                 color: '#fff'
             }
         },
         tooltip: {
             trigger: 'item',
             formatter: '{b}'
         },
         legend: {
             orient: 'vertical',
             x: '2%',
             y: '3%',
             selectedMode: 'single',
             data: ['八纵通道', '八横通道'],
             textStyle: {
                 color: '#fff'
             }
         },
         toolbox: {
             show: true,
             orient: 'vertical',
             x: 'right',
             y: 'center',
             padding: [0 ,30, 0 ,0],
             feature: {
                 mark: {
                     show: true
                 },
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
         series: [{
                 name: '八纵通道',
                 type: 'map',
                 roam: true,
                 hoverable: false,
                 mapType: 'china',
                 itemStyle: {
                     normal: {
                         borderColor: 'rgba(100,149,237,1)',
                         borderWidth: 0.5,
                         areaStyle: {
                             color: '#1b1b1b'
                         }
                     }
                 },
                 data: [],
                 markLine: {
                     symbol: ['circle', 'circle'],
                     symbolSize: 1,
                     effect: effect,
                     itemStyle: itemStyle(0),
                     smooth: true,
                     data: [
                         [{
                             name: '北京'
                         }, {
                             name: '哈尔滨'
                         }],
                         [{
                             name: '哈尔滨'
                         }, {
                             name: '满洲里'
                         }],

                         [{
                             name: '沈阳'
                         }, {
                             name: '大连'
                         }],
                         [{
                             name: '大连'
                         }, {
                             name: '烟台'
                         }],
                         [{
                             name: '烟台'
                         }, {
                             name: '青岛'
                         }],
                         [{
                             name: '青岛'
                         }, {
                             name: '淮安'
                         }],
                         [{
                             name: '淮安'
                         }, {
                             name: '上海'
                         }],
                         [{
                             name: '上海'
                         }, {
                             name: '杭州'
                         }],
                         [{
                             name: '杭州'
                         }, {
                             name: '宁波'
                         }],
                         [{
                             name: '宁波'
                         }, {
                             name: '温州'
                         }],
                         [{
                             name: '温州'
                         }, {
                             name: '福州'
                         }],
                         [{
                             name: '福州'
                         }, {
                             name: '厦门'
                         }],
                         [{
                             name: '厦门'
                         }, {
                             name: '广州'
                         }],
                         [{
                             name: '广州'
                         }, {
                             name: '湛江'
                         }],

                         [{
                             name: '北京'
                         }, {
                             name: '天津'
                         }],
                         [{
                             name: '天津'
                         }, {
                             name: '济南'
                         }],
                         [{
                             name: '济南'
                         }, {
                             name: '南京'
                         }],
                         [{
                             name: '南京'
                         }, {
                             name: '上海'
                         }],

                         [{
                             name: '北京'
                         }, {
                             name: '南昌'
                         }],
                         [{
                             name: '南昌'
                         }, {
                             name: '深圳'
                         }],
                         [{
                             name: '深圳'
                         }, {
                             name: '九龙红磡'
                         }],

                         [{
                             name: '北京'
                         }, {
                             name: '郑州'
                         }],
                         [{
                             name: '郑州'
                         }, {
                             name: '武汉'
                         }],
                         [{
                             name: '武汉'
                         }, {
                             name: '广州'
                         }],

                         [{
                             name: '大同'
                         }, {
                             name: '太原'
                         }],
                         [{
                             name: '太原'
                         }, {
                             name: '焦作'
                         }],
                         [{
                             name: '焦作'
                         }, {
                             name: '洛阳'
                         }],
                         [{
                             name: '洛阳'
                         }, {
                             name: '柳州'
                         }],
                         [{
                             name: '柳州'
                         }, {
                             name: '湛江'
                         }],

                         [{
                             name: '包头'
                         }, {
                             name: '西安'
                         }],
                         [{
                             name: '西安'
                         }, {
                             name: '重庆'
                         }],
                         [{
                             name: '重庆'
                         }, {
                             name: '贵阳'
                         }],
                         [{
                             name: '贵阳'
                         }, {
                             name: '柳州'
                         }],
                         [{
                             name: '柳州'
                         }, {
                             name: '南宁'
                         }],

                         [{
                             name: '兰州'
                         }, {
                             name: '成都'
                         }],
                         [{
                             name: '成都'
                         }, {
                             name: '昆明'
                         }]
                     ]
                 }
             },
             {
                 name: '八横通道',
                 type: 'map',
                 mapType: 'china',
                 itedmStyle: {
                     normal: {
                         borderColor: 'rgba(100,149,237,1)',
                         borderWidth: 0.5,
                         areaStyle: {
                             color: '#1b1b1b'
                         }
                     }
                 },
                 data: [],
                 markLine: {
                     symbol: ['circle', 'circle'],
                     symbolSize: 1,
                     effect: effect,
                     itemStyle: itemStyle(1),
                     smooth: true,
                     data: [
                         [{
                             name: '北京'
                         }, {
                             name: '兰州'
                         }],
                         [{
                             name: '兰州'
                         }, {
                             name: '拉萨'
                         }],

                         [{
                             name: '大同'
                         }, {
                             name: '秦皇岛'
                         }],

                         [{
                             name: '神木'
                         }, {
                             name: '黄骅'
                         }],

                         [{
                             name: '太原'
                         }, {
                             name: '德州'
                         }],
                         [{
                             name: '德州'
                         }, {
                             name: '龙口'
                         }],
                         [{
                             name: '龙口'
                         }, {
                             name: '烟台'
                         }],

                         [{
                             name: '太原'
                         }, {
                             name: '德州'
                         }],
                         [{
                             name: '德州'
                         }, {
                             name: '济南'
                         }],
                         [{
                             name: '济南'
                         }, {
                             name: '青岛'
                         }],

                         [{
                             name: '长治'
                         }, {
                             name: '邯郸'
                         }],
                         [{
                             name: '邯郸'
                         }, {
                             name: '济南'
                         }],
                         [{
                             name: '济南'
                         }, {
                             name: '青岛'
                         }],

                         [{
                             name: '瓦塘'
                         }, {
                             name: '临汾'
                         }],
                         [{
                             name: '临汾'
                         }, {
                             name: '长治'
                         }],
                         [{
                             name: '长治'
                         }, {
                             name: '汤阴'
                         }],
                         [{
                             name: '汤阴'
                         }, {
                             name: '台前'
                         }],
                         [{
                             name: '台前'
                         }, {
                             name: '兖州'
                         }],
                         [{
                             name: '兖州'
                         }, {
                             name: '日照'
                         }],

                         [{
                             name: '侯马'
                         }, {
                             name: '月山'
                         }],
                         [{
                             name: '月山'
                         }, {
                             name: '新乡'
                         }],
                         [{
                             name: '新乡'
                         }, {
                             name: '兖州'
                         }],
                         [{
                             name: '兖州'
                         }, {
                             name: '日照'
                         }],

                         [{
                             name: '连云港'
                         }, {
                             name: '郑州'
                         }],
                         [{
                             name: '郑州'
                         }, {
                             name: '兰州'
                         }],
                         [{
                             name: '兰州'
                         }, {
                             name: '乌鲁木齐'
                         }],
                         [{
                             name: '乌鲁木齐'
                         }, {
                             name: '阿拉山口'
                         }],

                         [{
                             name: '西安'
                         }, {
                             name: '南阳'
                         }],
                         [{
                             name: '南阳'
                         }, {
                             name: '信阳'
                         }],
                         [{
                             name: '信阳'
                         }, {
                             name: '合肥'
                         }],
                         [{
                             name: '合肥'
                         }, {
                             name: '南京'
                         }],
                         [{
                             name: '南京'
                         }, {
                             name: '启东'
                         }],

                         [{
                             name: '重庆'
                         }, {
                             name: '武汉'
                         }],
                         [{
                             name: '武汉'
                         }, {
                             name: '九江'
                         }],
                         [{
                             name: '九江'
                         }, {
                             name: '铜陵'
                         }],
                         [{
                             name: '铜陵'
                         }, {
                             name: '南京'
                         }],
                         [{
                             name: '南京'
                         }, {
                             name: '上海'
                         }],

                         [{
                             name: '上海'
                         }, {
                             name: '怀化'
                         }],
                         [{
                             name: '怀化'
                         }, {
                             name: '重庆'
                         }],
                         [{
                             name: '重庆'
                         }, {
                             name: '成都'
                         }],
                         [{
                             name: '成都'
                         }, {
                             name: '贵阳'
                         }],
                         [{
                             name: '贵阳'
                         }, {
                             name: '昆明'
                         }],

                         [{
                             name: '昆明'
                         }, {
                             name: '南宁'
                         }],
                         [{
                             name: '南宁'
                         }, {
                             name: '黎塘'
                         }],
                         [{
                             name: '黎塘'
                         }, {
                             name: '湛江'
                         }]
                     ]
                 },
                 geoCoord: {
                     '阿拉山口': [82.5757, 45.1706],
                     '包头': [109.8403, 40.6574],
                     '北京': [116.4075, 39.9040],
                     '成都': [104.0665, 30.5723],
                     '大连': [121.6147, 38.9140],
                     '大同': [113.3001, 40.0768],
                     '德州': [116.3575, 37.4341],
                     '福州': [119.2965, 26.0745],
                     '广州': [113.2644, 23.1292],
                     '贵阳': [106.6302, 26.6477],
                     '哈尔滨': [126.5363, 45.8023],
                     '邯郸': [114.5391, 36.6256],
                     '杭州': [120.1551, 30.2741],
                     '合肥': [117.2272, 31.8206],
                     '侯马': [111.3720, 35.6191],
                     '怀化': [109.9985, 27.5550],
                     '淮安': [119.0153, 33.6104],
                     '黄骅': [117.3300, 38.3714],
                     '济南': [117.1205, 36.6510],
                     '焦作': [113.2418, 35.2159],
                     '九江': [116.0019, 29.7051],
                     '九龙红磡': [114.1870, 22.3076],
                     '昆明': [102.8329, 24.8801],
                     '拉萨': [91.1409, 29.6456],
                     '兰州': [103.8343, 36.0611],
                     '黎塘': [109.1363, 23.2066],
                     '连云港': [119.2216, 34.5967],
                     '临汾': [111.5190, 36.0880],
                     '柳州': [109.4160, 24.3255],
                     '龙口': [120.4778, 37.6461],
                     '洛阳': [112.4540, 34.6197],
                     '满洲里': [117.3787, 49.5978],
                     '南昌': [115.8581, 28.6832],
                     '南京': [118.7969, 32.0603],
                     '南宁': [108.3661, 22.8172],
                     '南阳': [112.5283, 32.9908],
                     '宁波': [121.5440, 29.8683],
                     '启东': [121.6574, 31.8082],
                     '秦皇岛': [119.6005, 39.9354],
                     '青岛': [120.3826, 36.0671],
                     '日照': [119.5269, 35.4164],
                     '厦门': [118.0894, 24.4798],
                     '上海': [121.4737, 31.2304],
                     '深圳': [114.0579, 22.5431],
                     '神木': [110.4871, 38.8610],
                     '沈阳': [123.4315, 41.8057],
                     '台前': [115.8717, 35.9701],
                     '太原': [112.5489, 37.8706],
                     '汤阴': [114.3572, 35.9218],
                     '天津': [117.2010, 39.0842],
                     '铜陵': [117.8121, 30.9454],
                     '瓦塘': [109.7600, 23.3161],
                     '温州': [120.6994, 27.9943],
                     '乌鲁木齐': [87.6168, 43.8256],
                     '武汉': [114.3054, 30.5931],
                     '西安': [108.9402, 34.3416],
                     '新乡': [113.9268, 35.3030],
                     '信阳': [114.0913, 32.1470],
                     '烟台': [121.4479, 37.4638],
                     '兖州': [116.7838, 35.5531],
                     '月山': [113.0550, 35.2104],
                     '湛江': [110.3594, 21.2707],
                     '长治': [113.1163, 36.1954],
                     '郑州': [113.6254, 34.7466],
                     '重庆': [106.5516, 29.5630]
                 }
             }
         ]
     };

     // 为echarts对象加载数据 
     myChart.setOption(option);
    }
    //湖南省高铁
    function echart_6() {
           // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('chart_6'));
            //加载地图
                myChart.setOption({
                    series: [{
                        type: 'map',
                        mapType: 'hunan'
                    }]
                });

                var geoCoordMap = {
                    '怀化站': [109.999867,27.518949],
                    '吉首站': [109.741528,28.332629],
                    '张家界站': [110.491722,29.112001],
                    '常德站': [111.701486,29.076683],
                    '益阳站': [112.348741,28.544124],
                    '岳阳站': [113.126486,29.382401],
                    '长沙站': [113.019455,28.200103],
                    '株洲站': [113.163141,27.8418],
                    '湘潭站': [112.91977,27.882141],
                    '邵阳站': [111.467859,27.21915],
                    '娄底站': [112.012438,27.745506],
                    '衡阳站': [112.63809,26.895225],
                    '永州站': [111.577632,26.460144],
                    '郴州站': [113.039396,25.81497]
                };

                var goData = [
                    [{
                        name: '怀化站'

                    }, {
                        id: 1,
                        name: '吉首站',
                        value: 60
                    }],
                    [{
                        name: '吉首站'

                    }, {
                        id: 1,
                        name: '张家界站',
                        value: 70
                    }],
                    [{
                        name: '张家界站'

                    }, {
                        id: 1,
                        name: '常德站',
                        value: 77
                    }],
                    [{
                        name: '常德站'

                    }, {
                        id: 1,
                        name: '岳阳站',
                        value: 70
                    }],
                    [{
                        name: '常德站'

                    }, {
                        id: 1,
                        name: '益阳站',
                        value: 65
                    }],
                    [{
                        name: '常德站'

                    }, {
                        id: 1,
                        name: '邵阳站',
                        value: 80
                    }],
                    [{
                        name: '益阳站'

                    }, {
                        id: 1,
                        name: '长沙站',
                        value: 95
                    }],
                    [{
                        name: '益阳站'

                    }, {
                        id: 1,
                        name: '娄底站',
                        value: 72
                    }],
                    [{
                        name: '长沙站'

                    }, {
                        id: 1,
                        name: '株洲站',
                        value: 80
                    }],
                    [{
                        name: '长沙站'

                    }, {
                        id: 1,
                        name: '湘潭站',
                        value: 90
                    }],
                    [{
                        name: '长沙站'

                    }, {
                        id: 1,
                        name: '衡阳站',
                        value: 88
                    }],
                    [{
                        name: '湘潭站'

                    }, {
                        id: 1,
                        name: '娄底站',
                        value: 72
                    }],
                    [{
                        name: '娄底站'

                    }, {
                        id: 1,
                        name: '怀化站',
                        value: 80
                    }],
                    [{
                        name: '邵阳站'

                    }, {
                        id: 1,
                        name: '永州站',
                        value: 74
                    }],
                    [{
                        name: '衡阳站'

                    }, {
                        id: 1,
                        name: '邵阳站',
                        value: 80
                    }],
                    [{
                        name: '衡阳站'

                    }, {
                        id: 1,
                        name: '永州站',
                        value: 74
                    }],
                    [{
                        name: '衡阳站'

                    }, {
                        id: 1,
                        name: '郴州站',
                        value: 70
                    }],
                ];
                //值控制圆点大小
                var backData = [
                    [{
                        name: '吉首站'
                    }, {
                        id: 2,
                        name: '怀化站',
                        value: 80
                    }],
                    [{
                        name: '常德站'

                    }, {
                        id: 1,
                        name: '张家界站',
                        value: 70
                    }],
                    [{
                        name: '岳阳站'

                    }, {
                        id: 1,
                        name: '常德站',
                        value: 77
                    }],
                    [{
                        name: '益阳站'

                    }, {
                        id: 1,
                        name: '常德站',
                        value: 77
                    }],
                    [{
                        name: '邵阳站'

                    }, {
                        id: 1,
                        name: '常德站',
                        value: 77
                    }],
                    [{
                        name: '长沙站'

                    }, {
                        id: 1,
                        name: '益阳站',
                        value: 65
                    }],
                    [{
                        name: '娄底站'

                    }, {
                        id: 1,
                        name: '益阳站',
                        value: 65
                    }],
                    [{
                        name: '株洲站'

                    }, {
                        id: 1,
                        name: '长沙站',
                        value: 95
                    }],
                    [{
                        name: '湘潭站'

                    }, {
                        id: 1,
                        name: '长沙站',
                        value: 95
                    }],
                    [{
                        name: '衡阳站'

                    }, {
                        id: 1,
                        name: '长沙站',
                        value: 95
                    }],
                    [{
                        name: '娄底站'

                    }, {
                        id: 1,
                        name: '湘潭站',
                        value: 90
                    }],
                    [{
                        name: '怀化站'

                    }, {
                        id: 1,
                        name: '娄底站',
                        value: 72
                    }],
                    [{
                        name: '永州站'

                    }, {
                        id: 1,
                        name: '邵阳站',
                        value: 80
                    }],
                    [{
                        name: '邵阳站'

                    }, {
                        id: 1,
                        name: '衡阳站',
                        value: 88
                    }],
                    [{
                        name: '永州站'

                    }, {
                        id: 1,
                        name: '衡阳站',
                        value: 88
                    }],
                    [{
                        name: '郴州站'

                    }, {
                        id: 1,
                        name: '衡阳站',
                        value: 88
                    }],
                ];

                var arcAngle = function(data) {
                    var j, k;
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        if (dataItem[1].id == 1) {
                            j = 0.2;
                            return j;
                        } else if (dataItem[1].id == 2) {
                            k = -0.2;
                            return k;
                        }
                    }
                }

                var convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var fromCoord = geoCoordMap[dataItem[0].name];
                        var toCoord = geoCoordMap[dataItem[1].name];
                        if (dataItem[1].id == 1) {
                            if (fromCoord && toCoord) {
                                res.push([{
                                    coord: fromCoord,
                                }, {
                                    coord: toCoord,
                                    value: dataItem[1].value //线条颜色
                                }]);
                            }
                        } else if (dataItem[1].id == 2) {
                            if (fromCoord && toCoord) {
                                res.push([{
                                    coord: fromCoord,
                                }, {
                                    coord: toCoord
                                }]);
                            }
                        }
                    }
                    return res;
                };

                var color = ['#fff', '#FF1493', '#00FF00'];
                var series = [];
                [
                    ['1', goData],
                    ['2', backData]
                ].forEach(function(item, i) {
                    series.push({
                        name: item[0],
                        type: 'lines',
                        zlevel: 2,
                        symbol: ['arrow', 'arrow'],
                        //线特效配置
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0.1,
                            symbol: 'arrow', //标记类型
                            symbolSize: 5
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                opacity: 0.4,
                                curveness: arcAngle(item[1]), //弧线角度
                                color: '#fff'
                            }
                        },
                        data: convertData(item[1])
                    }, {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 2,
                        //波纹效果
                        rippleEffect: {
                            period: 2,
                            brushType: 'stroke',
                            scale: 3
                        },
                        label: {
                            normal: {
                                show: true,
                                color: '#fff',
                                position: 'right',
                                formatter: '{b}'
                            }
                        },
                        //终点形象
                        symbol: 'circle',
                        //圆点大小
                        symbolSize: function(val) {
                            return val[2] / 8;
                        },
                        itemStyle: {
                            normal: {
                                show: true
                            }
                        },
                        data: item[1].map(function(dataItem) {
                            return {
                                name: dataItem[1].name,
                                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                            };
                        })

                    });

                });

                option = {
                    title: {
                        text: '',
                        subtext: '',
                        left: 'center',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b}"
                    },
                    //线颜色及飞行轨道颜色
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 100,
                        color: ['#fff']
                    },
                    //地图相关设置
                    geo: {
                        map: 'hunan',
                        //视角缩放比例
                        zoom: 1,
                        //显示文本样式
                        label: {
                            normal: {
                                show: false,
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        //鼠标缩放和平移
                        roam: true,
                        itemStyle: {
                            normal: {
                                //          	color: '#ddd',
                                borderColor: 'rgba(147, 235, 248, 1)',
                                borderWidth: 1,
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowColor: 'rgba(128, 217, 248, 1)',
                                shadowOffsetX: -2,
                                shadowOffsetY: 2,
                                shadowBlur: 10
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        }
                    },
                    series: series
                };
                myChart.setOption(option);
    }
    //湖南总货运量
    function echart_7() {
        var myChart = echarts.init(document.getElementById('chart_7'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['货运量','铁路货运量','国家铁路货运量','地方铁路货运量','合资铁路货运量','公路货运量','水运货运量'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012年','2013年','2014年','2015年','2016年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '单位(万吨)',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'货运量',
                    type:'line',
                    data:[219130, 198009, 209946, 198024, 210586]
                },
                {
                    name:'铁路货运量',
                    type:'line',
                    data:[21010, 22469, 20619, 17843, 16313]
                },
                {
                    name:'国家铁路货运量',
                    type:'line',
                    data:[17866, 19354, 17589, 17709, 18589]
                },
                {
                    name:'地方铁路货运量',
                    type:'line',
                    data:[3034, 2845, 2712, 2790, 2812]
                },
                {
                    name:'合资铁路货运量',
                    type:'line',
                    data:[111, 271, 318, 327, 349]
                },
                {
                    name:'公路货运量',
                    type:'line',
                    data:[195530, 172492, 185286,175637,189822]
                },
                {
                    name:'水运货运量',
                    type:'line',
                    data:[2590, 3048, 4041,4544,4451]
                }
            ]
        };
        myChart.setOption(option);
    }
    //湖南货物周转量
    function echart_8() {
        var myChart = echarts.init(document.getElementById('chart_8'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['铁路货物周转量','国家铁路货物周转量','地方铁路货物周转量','合资铁路货物周转量','公路货物周转量','水运货物周转量'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年','2015年','2016年','2017年','2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '亿吨公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'铁路货物周转量',
                    type:'line',
                    data:[3961.88, 4233.63, 4183.14, 3633.01, 3704.47]
                },
                {
                    name:'国家铁路货物周转量',
                    type:'line',
                    data:[3374.76, 3364.76, 3274.76, 3371.82, 3259.87]
                },
                {
                    name:'地方铁路货物周转量',
                    type:'line',
                    data:[14.77, 15.17, 13.17, 14.56, 15.84]
                },
                {
                    name:'合资铁路货物周转量',
                    type:'line',
                    data:[686.17,847.26,895.22,865.28,886.72]
                },
                {
                    name:'公路货物周转量',
                    type:'line',
                    data:[6133.47, 6577.89, 7019.56,6821.48,7294.59]
                },
                {
                    name:'水运货物周转量',
                    type:'line',
                    data:[509.60, 862.54, 1481.77,1552.79,1333.62]
                }
            ]
        };
        myChart.setOption(option);
    }
    //湖南运输线长度
    function echart_9() {
        var myChart = echarts.init(document.getElementById('chart_9'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['铁路营业里程','公路里程','等级公路里程','高速等级公路里程','一级等级公路里程','二级等级公路里程','等外公路公路里程'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年','2015年','2016年','2017年','2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '万公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'铁路营业里程',
                    type:'line',
                    data:[0.56, 0.63, 0.63, 0.70, 0.70]
                },
                {
                    name:'公路里程',
                    type:'line',
                    data:[16.30, 17.45, 17.92, 18.46, 18.84]
                },
                {
                    name:'等级公路里程',
                    type:'line',
                    data:[15.54, 16.77, 17.29, 17.86, 18.26]
                },
                {
                    name:'高速等级公路里程',
                    type:'line',
                    data:[0.51, 0.56, 0.59, 0.63, 0.65]
                },
                {
                    name:'一级等级公路里程',
                    type:'line',
                    data:[0.47,0.48,0.51,0.54,0.56]
                },
                {
                    name:'二级等级公路里程',
                    type:'line',
                    data:[1.76, 1.85, 1.93, 1.97, 1.99]
                },
                {
                    name:'等外公路公路里程',
                    type:'line',
                    data:[0.76, 0.68, 0.63, 0.60, 0.58]
                }
            ]
        };
        myChart.setOption(option);
    }
    //湖南省快递业务量
    function echart_10(){
        var myChart = echarts.init(document.getElementById('chart_10'));
        myChart.clear();

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top: '2%',
                left: '1%',
                textStyle: {
                    color: '#fff'
                },
                data:[
                      '国际','省外','省内',
                     ]
            },
            color: ['#FF4949','#FFA74D','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1','#4BF0FF','#44AFF0'],
            series: [
                {
                    name:'业务量(万件)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:90392.39, name:'2018年业务量(90392.39万件)'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:464.43, name:'国际'},
                        {value:68575.6, name:'省外'},
                        {value:21352.36, name:'省内'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:54911.94, name:'2017年业务量(54911.94万件)'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:278.5, name:'国际'},
                        {value:37111.03, name:'省外'},
                        {value:17522.41, name:'省内'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:34019.15, name:'2016年业务量(34019.15万件)'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:163.72, name:'国际'},
                        {value:26841.29, name:'省外'},
                        {value:7014.14, name:'省内'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:20755.74, name:'2015年业务量(20755.74万件)'},
                    ]
                },
                {
                    name:'业务量(万件)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:129.65, name:'国际'},
                        {value:18072.54, name:'省外'},
                        {value:2553.55, name:'省内'},
                    ]
                },
            ]
        };

        myChart.setOption(option);
    }
    //湖南省公路营运
    function echart_11(){
        var myChart = echarts.init(document.getElementById('chart_11'));
        myChart.clear();

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'left',
                top: '2%',
                left: '1%',
                textStyle: {
                    color: '#fff'
                },
                data:['公路营运载客','公路营运载货']
            },
            color: ['#FF4949','#FFA74D','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'公路营运',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:145.18, name:'2018年公路营运拥有量(145.18万辆)'},
                    ]
                },
                {
                    name:'汽车拥有量(万辆)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:142.65, name:'公路营运载客'},
                        {value:2.53, name:'公路营运载货'},
                    ]
                },
                {
                    name:'公路营运',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:142.47, name:'2017年公路营运拥有量(142.47万辆)'}
                    ]
                },
                {
                    name:'汽车拥有量(万辆)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:139.95, name:'公路营运载客'},
                        {value:2.52, name:'公路营运载货'},
                        // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
                        // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
                    ]
                },
                {
                    name:'公路营运',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:140.61, name:'2016年公路营运拥有量(140.61万辆)'},
                        // {value:142.47, name:'2015年公路营运拥有量(142.47万辆)'},
                        // {value:140.61, name:'2014年公路营运拥有量(140.61万辆)'},
                        // {value:134.45, name:'2013年公路营运拥有量(134.45万辆)'},
                    ]
                },
                {
                    name:'汽车拥有量(万辆)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:137.96, name:'公路营运载客'},
                        {value:2.65, name:'公路营运载货'},
                        // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
                        // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
                    ]
                },
                {
                    name:'公路营运',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:134.45, name:'2015年公路营运拥有量(134.45万辆)'},
                    ]
                },
                {
                    name:'汽车拥有量(万辆)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:131.48, name:'公路营运载客'},
                        {value:2.97, name:'公路营运载货'},
                        // {value:137.96, name:'2014年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.65, name:'2014年公路营运载货汽车拥有量(万辆)'},
                        // {value:131.48, name:'2013年公路营运载客汽车拥有量(万辆)'},
                        // {value:2.97, name:'2013年公路营运载货汽车拥有量(万辆)'}
                    ]
                }
            ]
        };

        myChart.setOption(option);
    }
    //湖南省城市公共交通
    function echart_12() {
        var myChart = echarts.init(document.getElementById('chart_12'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['公共交通运营数','运营线路总长度','公共交通客运总量'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2014年','2015年','2016年','2017年','2018年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '万公里',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'公共交通运营数',
                    type:'line',
                    data:[16493,17498, 15977, 18927, 21479]
                },
                {
                    name:'运营线路总长度',
                    type:'line',
                    data:[18812, 19647, 20305, 22940, 26077]
                },
                {
                    name:'公共交通客运总量',
                    type:'line',
                    data:[203954, 202727, 205342, 187208, 186048]
                },
            ]
        };
        myChart.setOption(option);
    }
    //湖南省地图
    function echart_13(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_13'));
        function showProvince() {
                myChart.setOption(option = {
                    // backgroundColor: '#ffffff',
                    visualMap: {
                        show: false,
                        min: 0,
                        max: 100,
                        left: 'left',
                        top: 'bottom',
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        inRange: {
                            color: ['yellow', 'lightskyblue', 'orangered']
                        }
                    },
                    series: [{
                        type: 'map',
                        mapType: 'hunan',
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#389BB7',
                                areaColor: '#fff',
                            },
                            emphasis: {
                                areaColor: '#389BB7',
                                borderWidth: 0
                            }
                        },
                        animation: false,
                        data: [{
                            name: '长沙市',
                            value:  100
                        }, {
                            name: '株洲市',
                            value: 96
                        }, {
                            name: '湘潭市',
                            value: 98
                        }, {
                            name: '衡阳市',
                            value: 80
                        }, {
                            name: '邵阳市',
                            value: 88
                        }, {
                            name: '岳阳市',
                            value: 79
                        }, {
                            name: '常德市',
                            value: 77,
                        }, {
                            name: '张家界市',
                            value: 33
                        }, {
                            name: '益阳市',
                            value: 69,
                        }, {
                            name: '郴州市',
                            value: 66
                        }, {
                            name: '永州市',
                            value: 22
                        },{
                            name: '娄底市',
                            value: 51
                        },{
                            name: '湘西土家族苗族自治州',
                            value: 44
                        },{
                            name: '怀化市',
                            value: 9
                        }]
                    }]
                });
        }

        var currentIdx = 0;
        showProvince();
        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //GPS
    function echart_14(){
        var myChart = echarts.init(document.getElementById('chart_14'));

        var data = [
             {name: '海门', value: 9,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '鄂尔多斯', value: 12,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '招远', value: 12,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '舟山', value: 12,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '齐齐哈尔', value: 14,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '盐城', value: 15,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '赤峰', value: 16,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '青岛', value: 18,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '乳山', value: 18,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '金昌', value: 19,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '泉州', value: 21,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '莱西', value: 21,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '日照', value: 21,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '胶南', value: 22,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '南通', value: 23,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '拉萨', value: 24,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '云浮', value: 24,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '梅州', value: 25,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '文登', value: 25,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '上海', value: 25,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '攀枝花', value: 25,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '威海', value: 25,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '承德', value: 25,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '厦门', value: 26,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '汕尾', value: 26,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '潮州', value: 26,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '丹东', value: 27,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '太仓', value: 27,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '曲靖', value: 27,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '烟台', value: 28,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '福州', value: 29,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '瓦房店', value: 30,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '即墨', value: 30,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '抚顺', value: 31,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '玉溪', value: 31,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '张家口', value: 31,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '阳泉', value: 31,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '莱州', value: 32,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '湖州', value: 32,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '汕头', value: 32,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '昆山', value: 33,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '宁波', value: 33,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '湛江', value: 33,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '揭阳', value: 34,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '荣成', value: 34,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '连云港', value: 35,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '葫芦岛', value: 35,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '常熟', value: 36,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '东莞', value: 36,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '河源', value: 36,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '淮安', value: 36,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '泰州', value: 36,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '南宁', value: 37,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '营口', value: 37,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '惠州', value: 37,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '江阴', value: 37,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '蓬莱', value: 37,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '韶关', value: 38,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '嘉峪关', value: 38,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '广州', value: 38,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '延安', value: 38,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '太原', value: 39,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '清远', value: 39,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '中山', value: 39,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '昆明', value: 39,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '寿光', value: 40,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '盘锦', value: 40,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '长治', value: 41,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '深圳', value: 41,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '珠海', value: 42,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '宿迁', value: 43,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '咸阳', value: 43,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '铜川', value: 44,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '平度', value: 44,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '佛山', value: 44,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '海口', value: 44,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '江门', value: 45,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '章丘', value: 45,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '肇庆', value: 46,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '大连', value: 47,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '临汾', value: 47,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '吴江', value: 47,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '石嘴山', value: 49,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '沈阳', value: 50,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '苏州', value: 50,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '茂名', value: 50,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '嘉兴', value: 51,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '长春', value: 51,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '胶州', value: 52,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '银川', value: 52,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '张家港', value: 52,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '三门峡', value: 53,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '锦州', value: 54,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '南昌', value: 54,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '柳州', value: 54,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '三亚', value: 54,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '自贡', value: 56,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '吉林', value: 56,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '阳江', value: 57,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '泸州', value: 57,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '西宁', value: 57,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '宜宾', value: 58,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '呼和浩特', value: 58,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '成都', value: 58,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '大同', value: 58,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '镇江', value: 59,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '桂林', value: 59,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '张家界', value: 59,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '宜兴', value: 59,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '北海', value: 60,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '西安', value: 61,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '金坛', value: 62,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '东营', value: 62,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '牡丹江', value: 63,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '遵义', value: 63,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '绍兴', value: 63,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '扬州', value: 64,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '常州', value: 64,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '潍坊', value: 65,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '重庆', value: 66,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '台州', value: 67,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '南京', value: 67,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '滨州', value: 70,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '贵阳', value: 71,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '无锡', value: 71,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '本溪', value: 71,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '克拉玛依', value: 72,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '渭南', value: 72,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '马鞍山', value: 72,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '宝鸡', value: 72,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '焦作', value: 75,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '句容', value: 75,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '北京', value: 79,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '徐州', value: 79,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '衡水', value: 80,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '包头', value: 80,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '绵阳', value: 80,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '乌鲁木齐', value: 84,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '枣庄', value: 84,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '杭州', value: 84,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '淄博', value: 85,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '鞍山', value: 86,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '溧阳', value: 86,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '库尔勒', value: 86,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '安阳', value: 90,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '开封', value: 90,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '济南', value: 92,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '德阳', value: 93,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '温州', value: 95,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '九江', value: 96,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '邯郸', value: 98,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '临安', value: 99,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '兰州', value: 99,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '沧州', value: 100,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '临沂', value: 103,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '南充', value: 104,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '天津', value: 105,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '富阳', value: 106,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '泰安', value: 112,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '诸暨', value: 112,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '郑州', value: 113,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '哈尔滨', value: 114,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '聊城', value: 116,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '芜湖', value: 117,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '唐山', value: 119,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '平顶山', value: 119,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '邢台', value: 119,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '德州', value: 120,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '济宁', value: 120,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '荆州', value: 127,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '宜昌', value: 130,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '义乌', value: 132,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '丽水', value: 133,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '洛阳', value: 134,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '秦皇岛', value: 136,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '株洲', value: 143,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '石家庄', value: 147,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '莱芜', value: 148,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '常德', value: 152,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '保定', value: 153,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '湘潭', value: 154,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '金华', value: 157,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '岳阳', value: 169,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '长沙', value: 175,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '衢州', value: 177,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '廊坊', value: 170,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '菏泽', value: 175,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {name: '合肥', value: 180,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'},
             {
                name: '武汉', 
                value: 190,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'
            },
            {
                name: '大庆', 
                value: 150,
                address:'二道区东环域路2038号',
                typeName:'联运',
                area:'0.18',
                service:'东北地区'
            }
        ];
        var geoCoordMap = {
            '海门':[121.15,31.89],
            '鄂尔多斯':[109.781327,39.608266],
            '招远':[120.38,37.35],
            '舟山':[122.207216,29.985295],
            '齐齐哈尔':[123.97,47.33],
            '盐城':[120.13,33.38],
            '赤峰':[118.87,42.28],
            '青岛':[120.33,36.07],
            '乳山':[121.52,36.89],
            '金昌':[102.188043,38.520089],
            '泉州':[118.58,24.93],
            '莱西':[120.53,36.86],
            '日照':[119.46,35.42],
            '胶南':[119.97,35.88],
            '南通':[121.05,32.08],
            '拉萨':[91.11,29.97],
            '云浮':[112.02,22.93],
            '梅州':[116.1,24.55],
            '文登':[122.05,37.2],
            '上海':[121.48,31.22],
            '攀枝花':[101.718637,26.582347],
            '威海':[122.1,37.5],
            '承德':[117.93,40.97],
            '厦门':[118.1,24.46],
            '汕尾':[115.375279,22.786211],
            '潮州':[116.63,23.68],
            '丹东':[124.37,40.13],
            '太仓':[121.1,31.45],
            '曲靖':[103.79,25.51],
            '烟台':[121.39,37.52],
            '福州':[119.3,26.08],
            '瓦房店':[121.979603,39.627114],
            '即墨':[120.45,36.38],
            '抚顺':[123.97,41.97],
            '玉溪':[102.52,24.35],
            '张家口':[114.87,40.82],
            '阳泉':[113.57,37.85],
            '莱州':[119.942327,37.177017],
            '湖州':[120.1,30.86],
            '汕头':[116.69,23.39],
            '昆山':[120.95,31.39],
            '宁波':[121.56,29.86],
            '湛江':[110.359377,21.270708],
            '揭阳':[116.35,23.55],
            '荣成':[122.41,37.16],
            '连云港':[119.16,34.59],
            '葫芦岛':[120.836932,40.711052],
            '常熟':[120.74,31.64],
            '东莞':[113.75,23.04],
            '河源':[114.68,23.73],
            '淮安':[119.15,33.5],
            '泰州':[119.9,32.49],
            '南宁':[108.33,22.84],
            '营口':[122.18,40.65],
            '惠州':[114.4,23.09],
            '江阴':[120.26,31.91],
            '蓬莱':[120.75,37.8],
            '韶关':[113.62,24.84],
            '嘉峪关':[98.289152,39.77313],
            '广州':[113.23,23.16],
            '延安':[109.47,36.6],
            '太原':[112.53,37.87],
            '清远':[113.01,23.7],
            '中山':[113.38,22.52],
            '昆明':[102.73,25.04],
            '寿光':[118.73,36.86],
            '盘锦':[122.070714,41.119997],
            '长治':[113.08,36.18],
            '深圳':[114.07,22.62],
            '珠海':[113.52,22.3],
            '宿迁':[118.3,33.96],
            '咸阳':[108.72,34.36],
            '铜川':[109.11,35.09],
            '平度':[119.97,36.77],
            '佛山':[113.11,23.05],
            '海口':[110.35,20.02],
            '江门':[113.06,22.61],
            '章丘':[117.53,36.72],
            '肇庆':[112.44,23.05],
            '大连':[121.62,38.92],
            '临汾':[111.5,36.08],
            '吴江':[120.63,31.16],
            '石嘴山':[106.39,39.04],
            '沈阳':[123.38,41.8],
            '苏州':[120.62,31.32],
            '茂名':[110.88,21.68],
            '嘉兴':[120.76,30.77],
            '长春':[125.35,43.88],
            '胶州':[120.03336,36.264622],
            '银川':[106.27,38.47],
            '张家港':[120.555821,31.875428],
            '三门峡':[111.19,34.76],
            '锦州':[121.15,41.13],
            '南昌':[115.89,28.68],
            '柳州':[109.4,24.33],
            '三亚':[109.511909,18.252847],
            '自贡':[104.778442,29.33903],
            '吉林':[126.57,43.87],
            '阳江':[111.95,21.85],
            '泸州':[105.39,28.91],
            '西宁':[101.74,36.56],
            '宜宾':[104.56,29.77],
            '呼和浩特':[111.65,40.82],
            '成都':[104.06,30.67],
            '大同':[113.3,40.12],
            '镇江':[119.44,32.2],
            '桂林':[110.28,25.29],
            '张家界':[110.479191,29.117096],
            '宜兴':[119.82,31.36],
            '北海':[109.12,21.49],
            '西安':[108.95,34.27],
            '金坛':[119.56,31.74],
            '东营':[118.49,37.46],
            '牡丹江':[129.58,44.6],
            '遵义':[106.9,27.7],
            '绍兴':[120.58,30.01],
            '扬州':[119.42,32.39],
            '常州':[119.95,31.79],
            '潍坊':[119.1,36.62],
            '重庆':[106.54,29.59],
            '台州':[121.420757,28.656386],
            '南京':[118.78,32.04],
            '滨州':[118.03,37.36],
            '贵阳':[106.71,26.57],
            '无锡':[120.29,31.59],
            '本溪':[123.73,41.3],
            '克拉玛依':[84.77,45.59],
            '渭南':[109.5,34.52],
            '马鞍山':[118.48,31.56],
            '宝鸡':[107.15,34.38],
            '焦作':[113.21,35.24],
            '句容':[119.16,31.95],
            '北京':[116.46,39.92],
            '徐州':[117.2,34.26],
            '衡水':[115.72,37.72],
            '包头':[110,40.58],
            '绵阳':[104.73,31.48],
            '乌鲁木齐':[87.68,43.77],
            '枣庄':[117.57,34.86],
            '杭州':[120.19,30.26],
            '淄博':[118.05,36.78],
            '鞍山':[122.85,41.12],
            '溧阳':[119.48,31.43],
            '库尔勒':[86.06,41.68],
            '安阳':[114.35,36.1],
            '开封':[114.35,34.79],
            '济南':[117,36.65],
            '德阳':[104.37,31.13],
            '温州':[120.65,28.01],
            '九江':[115.97,29.71],
            '邯郸':[114.47,36.6],
            '临安':[119.72,30.23],
            '兰州':[103.73,36.03],
            '沧州':[116.83,38.33],
            '临沂':[118.35,35.05],
            '南充':[106.110698,30.837793],
            '天津':[117.2,39.13],
            '富阳':[119.95,30.07],
            '泰安':[117.13,36.18],
            '诸暨':[120.23,29.71],
            '郑州':[113.65,34.76],
            '哈尔滨':[126.63,45.75],
            '聊城':[115.97,36.45],
            '芜湖':[118.38,31.33],
            '唐山':[118.02,39.63],
            '平顶山':[113.29,33.75],
            '邢台':[114.48,37.05],
            '德州':[116.29,37.45],
            '济宁':[116.59,35.38],
            '荆州':[112.239741,30.335165],
            '宜昌':[111.3,30.7],
            '义乌':[120.06,29.32],
            '丽水':[119.92,28.45],
            '洛阳':[112.44,34.7],
            '秦皇岛':[119.57,39.95],
            '株洲':[113.16,27.83],
            '石家庄':[114.48,38.03],
            '莱芜':[117.67,36.19],
            '常德':[111.69,29.05],
            '保定':[115.48,38.85],
            '湘潭':[112.91,27.87],
            '金华':[119.64,29.12],
            '岳阳':[113.09,29.37],
            '长沙':[113,28.21],
            '衢州':[118.88,28.97],
            '廊坊':[116.7,39.53],
            '菏泽':[115.480656,35.23375],
            '合肥':[117.27,31.86],
            '武汉':[114.31,30.52],
            '大庆':[125.03,46.58]
        };

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }

            }
            return res;
        };

        var option = {
            title: {
                text: '',
            },
            tooltip : {
                show: false,
                trigger: 'item',
                formatter: '{b}<br>{c}',
            },
            bmap: {
                center: [104.114129, 37.550339],
                zoom: 5,
                roam: false,  //鼠标缩放
                mapStyle: {
                    styleJson: [{
                        'featureType': 'land',   //土地颜色；
                        'elementType': 'all',
                        'stylers': {
                            'color': '#f5f3ef'
                        }
                    },{
                        'featureType': 'water',  //水颜色
                        'elementType': 'all',
                        'stylers': {
                            'color': '#a2c1de'
                        }
                    }, {
                        'featureType': 'railway',  //调整铁路颜色
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'highway', //调整高速道路颜色
                        'elementType': 'all',
                        'stylers': {
                            'color': '#fdfdfd'
                        }
                    }, {
                        'featureType': 'highway', //调整建筑物标签是否可视
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',    //调整一些干道颜色
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'arterial',      
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'poi',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'boundary',  //边界颜色
                        'elementType': 'all',
                        'stylers': {
                            'color': '#bcab78'
                        }
                    }, {
                        'featureType': 'building',  //建筑颜色
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'label',           //地名颜色；
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#898989'
                        }
                    }]
                }
            },
            series : [
                {
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: convertData(data),
                    hoverAnimation: false,         //hover动画;
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#de1300'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        
        // 获取百度地图实例，使用百度地图自带的控件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.NavigationControl());  //左侧缩放；
        bmap.enableDragging();   //开启拖拽

        var opts = {
                    offset: {height:-5,width:5},
                    width : 250,     // 信息窗口宽度
                    height: 150,     // 信息窗口高度
                    title : "" , // 信息窗口标题
                    enableMessage:true//设置允许信息窗发送短息
                   };
        for(var i=0;i<data.length;i++){
            var icon = new BMap.Icon('../images/ico.png', new BMap.Size(10, 10), {
                anchor: new BMap.Size(5, 5)
            });
            var marker = new BMap.Marker(new BMap.Point(geoCoordMap[data[i].name][0],geoCoordMap[data[i].name][1]),{icon: icon});  // 创建标注
            var content = "<b>"+data[i].name+"</b><br><br>" +
                            "园区地址："+ data[i].address +"<br>" + 
                            "园区类型："+ data[i].typeName +"<br>" + 
                            "园区面积："+ data[i].area +"<br>" + 
                            "入驻企业："+ data[i].value +"家<br>"+ 
                            "服务范围："+ data[i].service;

            bmap.addOverlay(marker);               // 将标注添加到地图中            
            addClickHandler(content,marker);
        }
        function addClickHandler(content,marker){
            marker.addEventListener("mouseover",function(e){
                openInfo(content,e);
            });
            marker.addEventListener("mouseout",function(e){
                bmap.closeInfoWindow(); //关闭信息窗口
            });
        }
        function openInfo(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
            bmap.openInfoWindow(infoWindow,point); //开启信息窗口
        }
    }
    //操作按钮
    $('.t_btn0').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos0').css('display', 'block');
        echart_map();
    });
    $('.t_btn1').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos1').css('display', 'block');
        echart_2();
    });
    $('.t_btn2').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos2').css('display', 'block');
        echart_0();
    });
    $('.t_btn3').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos3').css('display', 'block');
        echart_4();
    });
    $('.t_btn4').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos6').css('display', 'block');
        echart_6();
    });
    $('.t_btn5').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        echart_1();
    });
    $('.t_btn6').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos5').css('display', 'block');
        echart_3();
    });
    $('.t_btn7').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos7').css('display', 'block');
        echart_7();
    });
    $('.t_btn8').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        echart_8();
    });
    $('.t_btn9').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos9').css('display', 'block');
        echart_9();
    });
    $('.t_btn10').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos10').css('display', 'block');
        echart_10();
    });
    $('.t_btn11').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos11').css('display', 'block');
        echart_11();
    });
    $('.t_btn12').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos12').css('display', 'block');
        echart_12();
    });
    $('.t_btn13').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos13').css('display', 'block');
        echart_13();
    });
    $('.t_btn14').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos14').css('display', 'block');
        echart_14();
    });
    //获取地址栏参数
    $(function(){
        function getUrlParms(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
                if(r!=null)
                return unescape(r[2]);
                return null;
            }
            var id = getUrlParms("id");  
            if(id == 2){
                $('.center_text').css('display', 'none');
                $('.t_cos10').css('display', 'block');
                echart_10();
            }
            if(id == 3){
                $('.center_text').css('display', 'none');
                $('.t_cos11').css('display', 'block');
                echart_11();
            }
            if(id == 4){
                $('.center_text').css('display', 'none');
                $('.t_cos1').css('display', 'block');
                echart_2();
            }
            if(id == 5){
                $('.center_text').css('display', 'none');
                $('.t_cos6').css('display', 'block');
                echart_6();
            }
            if(id == 6){
                $('.center_text').css('display', 'none');
                $('.t_cos4').css('display', 'block');
                echart_1();
            }
            if(id == 7){
                $('.center_text').css('display', 'none');
                $('.t_cos8').css('display', 'block');
                echart_8();
            }
            if(id == 8){
                $('.center_text').css('display', 'none');
                $('.t_cos12').css('display', 'block');
                echart_12();
            }
            if(id == 9){
                $('.center_text').css('display', 'none');
                $('.t_cos13').css('display', 'block');
                echart_13();
            }
    });
});
