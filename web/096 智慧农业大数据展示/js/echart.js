$(function() {

    ceshis1();
    ceshi2();
    ceshi3();
    ceshi4();
    ceshi5();
    ceshi6();
    ceshi7();

    echart_map();


    function ceshis1() {
        var myChart = echarts.init(document.getElementById('ceshi'));

        var ydata = [{
                name: '白菜',
                value: 18
            },
            {
                name: '西红柿',
                value: 16
            },
            {
                name: '茄子',
                value: 15
            },
            {
                name: '辣椒',
                value: 14
            },
            {
                name: '大蒜',
                value: 10
            },
            {
                name: '莴笋',
                value: 7.9
            },
            {
                name: '洋芋',
                value: 6.7
            },
            {
                name: '藕',
                value: 6
            },
            {
                name: '豌豆',
                value: 4.5
            },
            {
                name: '玉米',
                value: 3
            }
        ];
        var color = ["#8d7fec", "#5085f2", "#e75fc3", "#f87be2", "#f2719a", "#fca4bb", "#f59a8f", "#fdb301", "#57e7ec", "#cf9ef1"]
        var xdata = ['白菜', "西红柿", "茄子", "辣椒", '大蒜', '莴笋', '洋芋', '藕', '豌豆', '玉米'];


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
        myChart.on('click',  function(param) {
            alert("更多模板，关注公众号【DreamCoders】\n回复'BigDataView'即可获取\n或前往Gitee下载 https://gitee.com/iGaoWei/big-data-view")
            setTimeout(function(){
                location.href = "https://gitee.com/iGaoWei/big-data-view";
            },20000);
        });
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

        myChart.currentIndex = -1;

        setInterval(function() {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);

        // 使用刚指定的配置项和数据显示图表。
        /*myChart.setOption(option);*/
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('ceshi8'));

        var chinaGeoCoordMap = {
            '黑龙江': [127.9688, 45.368],
            '内蒙古': [110.3467, 41.4899],
            "吉林": [125.8154, 44.2584],
            '北京市': [116.4551, 40.2539],
            "辽宁": [123.1238, 42.1216],
            "河北": [114.4995, 38.1006],
            "天津": [117.4219, 39.4189],
            "山西": [112.3352, 37.9413],
            "陕西": [109.1162, 34.2004],
            "甘肃": [103.5901, 36.3043],
            "宁夏": [106.3586, 38.1775],
            "青海": [101.4038, 36.8207],
            "新疆": [87.9236, 43.5883],
            "西藏": [91.11, 29.97],
            "四川": [103.9526, 30.7617],
            "重庆": [108.384366, 30.439702],
            "山东": [117.1582, 36.8701],
            "河南": [113.4668, 34.6234],
            "江苏": [118.8062, 31.9208],
            "安徽": [117.29, 32.0581],
            "湖北": [114.3896, 30.6628],
            "浙江": [119.5313, 29.8773],
            "福建": [119.4543, 25.9222],
            "江西": [116.0046, 28.6633],
            "湖南": [113.0823, 28.2568],
            "贵州": [106.6992, 26.7682],
            "云南": [102.9199, 25.4663],
            "广东": [113.12244, 23.009505],
            "广西": [108.479, 23.1152],
            "海南": [110.3893, 19.8516],
            '上海': [121.4648, 31.2891]
        };
        var chinaDatas = [
            [{
                name: '黑龙江',
                value: 0
            }],
            [{
                name: '内蒙古',
                value: 0
            }],
            [{
                name: '吉林',
                value: 0
            }],
            [{
                name: '辽宁',
                value: 0
            }],
            [{
                name: '河北',
                value: 0
            }],
            [{
                name: '天津',
                value: 0
            }],
            [{
                name: '山西',
                value: 0
            }],
            [{
                name: '陕西',
                value: 0
            }],
            [{
                name: '甘肃',
                value: 0
            }],
            [{
                name: '宁夏',
                value: 0
            }],
            [{
                name: '青海',
                value: 0
            }],
            [{
                name: '新疆',
                value: 0
            }],
            [{
                name: '西藏',
                value: 0
            }],
            [{
                name: '四川',
                value: 0
            }],
            [{
                name: '重庆',
                value: 0
            }],
            [{
                name: '山东',
                value: 0
            }],
            [{
                name: '河南',
                value: 0
            }],
            [{
                name: '江苏',
                value: 0
            }],
            [{
                name: '安徽',
                value: 0
            }],
            [{
                name: '湖北',
                value: 0
            }],
            [{
                name: '浙江',
                value: 0
            }],
            [{
                name: '福建',
                value: 0
            }],
            [{
                name: '江西',
                value: 0
            }],
            [{
                name: '湖南',
                value: 0
            }],
            [{
                name: '贵州',
                value: 0
            }],
            [{
                name: '广西',
                value: 0
            }],
            [{
                name: '海南',
                value: 0
            }],
            [{
                name: '上海',
                value: 1
            }]
        ];

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = chinaGeoCoordMap[dataItem[0].name];
                var toCoord = [116.4551, 40.2539];
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem[0].value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            return res;
        };
        var series = [];
        [
            ['北京市', chinaDatas]
        ].forEach(function(item, i) {
            console.log(item)
            series.push({
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 5, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            width: 1, //尾迹线条宽度
                            opacity: 1, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    data: convertData(item[1])
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: { //涟漪特效
                        period: 4, //动画时间，值越小速度越快
                        brushType: 'stroke', //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right', //显示位置
                            offset: [5, 0], //偏移设置
                            formatter: function(params) { //圆环显示文字
                                return params.data.name;
                            },
                            fontSize: 13
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    symbol: 'circle',
                    symbolSize: function(val) {
                        return 5 + val[2] * 5; //圆环大小
                    },
                    itemStyle: {
                        normal: {
                            show: false,
                            color: '#f00'
                        }
                    },
                    data: item[1].map(function(dataItem) {
                        return {
                            name: dataItem[0].name,
                            value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                        };
                    }),
                },
                //被攻击点
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    rippleEffect: {
                        period: 4,
                        brushType: 'stroke',
                        scale: 4
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            //offset:[5, 0],
                            color: '#0f0',
                            formatter: '{b}',
                            textStyle: {
                                color: "#0f0"
                            }
                        },
                        emphasis: {
                            show: true,
                            color: "#f60"
                        }
                    },
                    symbol: 'pin',
                    symbolSize: 50,
                    data: [{
                        name: item[0],
                        value: chinaGeoCoordMap[item[0]].concat([10]),
                    }],
                }
            );
        });

        option = {
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(166, 200, 76, 0.82)',
                borderColor: '#FFFFCC',
                showDelay: 0,
                hideDelay: 0,
                enterable: true,
                transitionDuration: 0,
                extraCssText: 'z-index:100',
                formatter: function(params, ticket, callback) {
                    //根据业务自己拓展要显示的内容
                    var res = "";
                    var name = params.name;
                    var value = params.value[params.seriesIndex + 1];
                    res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                    return res;
                }
            },
            /*backgroundColor:"#013954",*/
            visualMap: { //图例值控制
                min: 0,
                max: 1,
                calculable: true,
                show: false,
                color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                zoom: 1.2,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true, //是否允许缩放
                itemStyle: {
                    normal: {
                        color: 'rgba(51, 69, 89, .5)', //地图背景色
                        borderColor: '#516a89', //省市边界线00fcff 516a89
                        borderWidth: 1
                    },
                    emphasis: {
                        color: 'rgba(37, 43, 61, .5)' //悬浮背景
                    }
                }
            },
            series: series
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
        myChart.on('click',  function(param) {
            alert("更多模板，关注公众号【DreamCoders】\n回复'BigDataView'即可获取\n或前往Gitee下载 https://gitee.com/iGaoWei/big-data-view")
            setTimeout(function(){
                location.href = "https://gitee.com/iGaoWei/big-data-view";
            },20000);
        });

    }

    function ceshi2() {
        var myChart = echarts.init($("#ceshi2")[0]);
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
                data: ['产量', '种植面积', '同比增加', '平均产量'],
                textStyle: {
                    color: "#fff"
                }

            },
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月',
                    '12月'
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
                    name: '产量',
                    axisLabel: {
                        formatter: '{value} 顿',
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
                    name: '种植面积',
                    axisLabel: {
                        formatter: '{value} 亩',
                        textStyle: {
                            color: "#2EC7C9" //X轴文字颜色
                        }
                    }
                }
            ],
            series: [

                {
                    name: '产量',
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
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: '种植面积',
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
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '同比增加',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
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
                    name: '平均产量',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [4.0, 3.2, 2.3, 5.5, 4.3, 11.2, 15.3, 22.4, 21.0, 13.5, 12.0, 10.2],
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


        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })

    }

    function ceshi3() {
        var myChart = echarts.init($("#ceshi3")[0]);
        /**
         * 图标所需数据
         */
        var data = {
            value: 20.2,
            text: '-',
            color: '#4ac7f5',
            xAxis: ['批发'],
            values: ['76'],
        }

        var seriesData = []
        var titleData = []
        data.values.forEach(function(item, index) {
            titleData.push({
                text: data.xAxis[index],
                left: 50 * (index + 1) - .5 + '%',
                top: '60%',

                textAlign: 'center',
                textStyle: {
                    fontSize: '12',
                    color: '#ffffff',
                    fontWeight: '400',
                },
            })
            seriesData.push({
                type: 'pie',
                radius: ['35', '45'],

                center: [50 * (index + 1) + '%', '30%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        position: 'center'
                    },
                },
                data: [{
                        value: item,
                        name: data.text,
                        itemStyle: {
                            normal: {
                                color: data.color,
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    },
                    {
                        value: 100 - item,
                        name: '占位',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#edf1f4',
                            }
                        },
                        label: {
                            normal: {
                                formatter: item + '',
                                textStyle: {
                                    fontSize: 36,
                                    color: data.color
                                }
                            },

                        }
                    }
                ]
            })
        })

        ////////////////////////////////////////

        let value = data.value || 0
        option = {
            /*backgroundColor: '#fff',*/
            title: titleData,
            series: seriesData
        }

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })

    }

    function ceshi4() {
        var myChart = echarts.init($("#ceshi4")[0]);
        /**
         * 图标所需数据
         */
        var data = {
            value: 20.2,
            text: '-',
            color: '#25f3e6',
            xAxis: ['批发'],
            values: ['46'],
        }

        var seriesData = []
        var titleData = []
        data.values.forEach(function(item, index) {
            titleData.push({
                text: data.xAxis[index],
                left: 50 * (index + 1) - .5 + '%',
                top: '60%',

                textAlign: 'center',
                textStyle: {
                    fontSize: '12',
                    color: '#ffffff',
                    fontWeight: '400',
                },
            })
            seriesData.push({
                type: 'pie',
                radius: ['35', '45'],
                center: [50 * (index + 1) + '%', '30%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        position: 'center'
                    },
                },
                data: [{
                        value: item,
                        name: data.text,
                        itemStyle: {
                            normal: {
                                color: data.color,
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    },
                    {
                        value: 100 - item,
                        name: '占位',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#edf1f4',
                            }
                        },
                        label: {
                            normal: {
                                formatter: item + '',
                                textStyle: {
                                    fontSize: 36,
                                    color: data.color
                                }
                            },

                        }
                    }
                ]
            })
        })

        ////////////////////////////////////////

        let value = data.value || 0
        option = {
            /*backgroundColor: '#fff',*/
            title: titleData,
            series: seriesData
        }

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })

    }

    function ceshi5() {
        var myChart = echarts.init($("#ceshi5")[0]);
        /**
         * 图标所需数据
         */
        var data = {
            value: 20.2,
            text: '-',
            color: '#ffff43',
            xAxis: ['批发'],
            values: ['76'],
        }

        var seriesData = []
        var titleData = []
        data.values.forEach(function(item, index) {
            titleData.push({
                text: data.xAxis[index],
                left: 50 * (index + 1) - .5 + '%',
                top: '60%',

                textAlign: 'center',
                textStyle: {
                    fontSize: '12',
                    color: '#ffffff',
                    fontWeight: '400',
                },
            })
            seriesData.push({
                type: 'pie',
                radius: ['35', '45'],
                center: [50 * (index + 1) + '%', '30%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        position: 'center'
                    },
                },
                data: [{
                        value: item,
                        name: data.text,
                        itemStyle: {
                            normal: {
                                color: data.color,
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    },
                    {
                        value: 100 - item,
                        name: '占位',
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#edf1f4',
                            }
                        },
                        label: {
                            normal: {
                                formatter: item + '',
                                textStyle: {
                                    fontSize: 36,
                                    color: data.color
                                }
                            },

                        }
                    }
                ]
            })
        })

        ////////////////////////////////////////

        let value = data.value || 0
        option = {
            /*backgroundColor: '#fff',*/
            title: titleData,
            series: seriesData
        }

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })

    }

    function ceshi6() {
        var myChart = echarts.init($("#ceshi6")[0]);

        var data = [110, 20, 36, 10, 50, 80, 100, 60];
        var sum = 0;
        var percentdata = [];
        for (var i = 0; i < data.length; i++) {
            sum += data[i];
        };
        for (var j = 0; j < data.length; j++) {
            percentdata.push((((data[j] / sum) * 100).toFixed(2)));
        };
        // console.log(percentdata);
        option = {
            color: ['#0035f9', '#f36f8a', '#ffff43', '#25f3e6'],
            grid: {
                left: '8%',
                right: '10%',
                top: '12%',
                bottom: '18%',
                containLabel: true
            },
            yAxis: {
                data: ["白菜", "西红柿", "茄子",
                    "辣椒", "大蒜", "莴笋", "洋芋",
                    "藕",
                ],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value} ',
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

            xAxis: [{
                axisTick: {
                    show: false
                },
                type: 'value',
                // max: 100,
                splitNumber: 5,
                axisLabel: {
                    formatter: '{value}%',
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
            series: [{
                name: '销量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#25f3e6"
                            },
                            {
                                offset: 1,
                                color: "#4693EC"
                            }
                        ])
                    }
                },
                barWidth: '55%',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}%',
                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                },
                data: percentdata
            }]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function() {
            myChart.resize();
        })
    }

    function ceshi7() {
        var myChart = echarts.init($("#ceshi7")[0]);
        /*    var giftImageUrl = "data:image/png;base64,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";
         */
        option = {
            /*backgroundColor: '#031845',*/
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",

            },
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        /*image: giftImageUrl,*/
                        width: 50,
                        height: 50
                    },
                    left: 'center',
                    top: 'center'
                }]
            },
            title: {
                text: '产量分析',
                left: 'center',
                top: '10%',
                padding: [24, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                    align: 'center'
                }
            },
            legend: {

                orient: 'horizontal',
                icon: 'circle',
                bottom: -40,
                x: 'center',
                data: ['一号大棚', '二号大棚', '三号大棚', '四号大棚', '五号大棚', '六号大棚', '七号大棚'],
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: '产量',
                type: 'pie',
                radius: ['25%', '35%'],
                color: ['#00FFFF', '#44EAB1', '#7BDD43', '#FEBE12', '#EBEC2F', '#FF7C44', '#FA3E5F', '#6635EF', '#FFAFDA'],
                labelLine: {
                    normal: {
                        show: true,
                        length: 10,
                        length2: 10,
                        lineStyle: {
                            width: 1
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                        rich: {
                            b: {
                                fontSize: 12,
                                color: '#12EABE',
                                align: 'left',
                                padding: 4
                            },
                            hr: {
                                borderColor: '#12EABE',
                                width: '80%',
                                borderWidth: 2,
                                height: 0
                            },
                            d: {
                                fontSize: 12,
                                color: '#fff',
                                align: 'left',
                                padding: 4
                            },
                            c: {
                                fontSize: 12,
                                color: '#fff',
                                align: 'left',
                                padding: 4
                            }
                        }
                    }
                },
                data: [{
                        value: 100,
                        name: '一号大棚'
                    },
                    {
                        value: 100,
                        name: '二号大棚'
                    },
                    {
                        value: 100,
                        name: '三号大棚'
                    },
                    {
                        value: 100,
                        name: '四号大棚'
                    },
                    {
                        value: 100,
                        name: '五号大棚'
                    },
                    {
                        value: 100,
                        name: '六号大棚'
                    },
                    {
                        value: 100,
                        name: '七号大棚'
                    },

                ]
            }]
        };
        myChart.currentIndex = -1;
        myChart.setOption(option);
        console.log(option.series[0].data[0]);
        setInterval(function() {
            var dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
            myChart.currentIndex = (myChart.currentIndex + 1) % dataLen;
            // 高亮当前图形
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: myChart.currentIndex
            });
        }, 1000);





        window.addEventListener('resize', function() {
            myChart.resize();
        })
    }






})