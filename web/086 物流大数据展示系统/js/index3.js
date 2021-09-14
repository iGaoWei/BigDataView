$(function () {
    char_4();


    map();

    Gender();
    char_1();
    char_2();
    char_3();
    /**/
    char_5();
    char_6();
    char_7();
    char_8();

    function map() {
        var myChart = echarts.init(document.getElementById('china'));

        var geoCoordMap = {
            '新疆玛纳斯基地': [86.22, 44.30],
            '九江': [116.00, 29.70],
            '新乡': [116.402217, 35.311657],
            ' ': [79.92, 37.12],
            '  ': [86.85, 47.70],
            '若羌县': [88.17, 39.02],
            '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028]
        };

        var BJData = [
            [{
                name: '新乡'
            }, {
                name: '新乡',
                value: 200
            }],
            [{
                name: '新乡'
            }, {
                name: '呼和浩特',
                value: 90
            }],
            [{
                name: '新乡'
            }, {
                name: '哈尔滨',
                value: 90
            }],
            [{
                name: '新乡'
            }, {
                name: '石家庄',
                value: 90
            }],
            [{
                name: '新乡'
            }, {
                name: '昆明',
                value: 30
            }],
            [{
                name: '新乡'
            }, {
                name: '北京',
                value: 100
            }],
            [{
                name: '新乡'
            }, {
                name: '长春',
                value: 40
            }],
            [{
                name: '新乡'
            }, {
                name: '重庆',
                value: 40
            }],
            [{
                name: '新乡'
            }, {
                name: '贵阳',
                value: 50
            }],
            [{
                name: '新乡'
            }, {
                name: '南宁',
                value: 30
            }],
            [{
                name: '新乡'
            }, {
                name: '济南',
                value: 10
            }],
            [{
                name: '新乡'
            }, {
                name: '太原',
                value: 40
            }],
            [{
                name: '新乡'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '新乡'
            }, {
                name: '武汉',
                value: 50
            }],
            [{
                name: '新乡'
            }, {
                name: '合肥',
                value: 40
            }],
            [{
                name: '新乡'
            }, {
                name: '南京',
                value: 30
            }],
            [{
                name: '新乡'
            }, {
                name: '沈阳',
                value: 20
            }],
            [{
                name: '新乡'
            }, {
                name: '成都',
                value: 10
            }]
        ];

        var SHData = [
            [{
                name: '九江'
            }, {
                name: '九江',
                value: 200
            }],

            [{
                name: '九江'
            }, {
                name: '长沙',
                value: 95
            }],
            [{
                name: '九江'
            }, {
                name: '武汉',
                value: 30
            }],
            [{
                name: '九江'
            }, {
                name: '南昌',
                value: 20
            }],
            [{
                name: '九江'
            }, {
                name: '合肥',
                value: 70
            }],
            [{
                name: '九江'
            }, {
                name: '南京',
                value: 60
            }],
            [{
                name: '九江'
            }, {
                name: '福州',
                value: 50
            }],
            [{
                name: '九江'
            }, {
                name: '上海',
                value: 100
            }],
            [{
                name: '九江'
            }, {
                name: '深圳',
                value: 100
            }],

        ];

        var GZData = [
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '新疆玛纳斯基地',
                value: 200
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '  ',
                value: 90
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: ' ',
                value: 40
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '呼和浩特',
                value: 90
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '昆明',
                value: 40
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '成都',
                value: 10
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '兰州',
                value: 95
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '银川',
                value: 90
            }],
            [{
                name: '新疆玛纳斯基地'
            }, {
                name: '西宁',
                value: 80
            }],

        ];

        var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord
                    }, {
                        coord: toCoord
                    }]);
                }
            }
            return res;
        };

        var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
        var series = [];
        [
            ['新乡', BJData],
            ['九江', SHData],
            ['新疆', GZData]
        ].forEach(function(item, i) {
            series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0] + ' Top10',
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
                symbolSize: function(val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
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
            /*backgroundColor: '#080a20',*/
            title: {
                text: '物流情况',
                subtext: '',
                left: 'left',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                top: 'bottom',
                left: 'right',
                data: ['北京 Top10', '上海 Top10', '广州 Top10'],
                textStyle: {
                    color: '#fff'
                },
                selectedMode: 'single'
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
                        areaColor: '#132937',
                        borderColor: '#0692a4'
                    },
                    emphasis: {
                        areaColor: '#0b1c2d'
                    }
                }
            },
            series: series
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function Gender() {
        var myChart = echarts.init(document.getElementById('Gender'));
        var symbols = [
            'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
            'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
            'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
        ];
        var bodyMax = 100; //指定图形界限的值
        var labelSetting = {
            normal: {
                show: true,
                position: 'bottom',
                offset: [0, 10],
                formatter: function(param) {
                    return (param.value / bodyMax * 100).toFixed(0) + '%';
                },
                textStyle: {
                    fontSize: 18,
                    fontFamily: 'Arial',
                    color: '#ffffff'
                }
            }
        };

        var markLineSetting = { //设置标线
            symbol: 'none',
            lineStyle: {
                normal: {
                    opacity: 0.3
                }
            },
            data: [{
                type: 'max',
                label: {
                    normal: {
                        formatter: 'max: {c}'
                    }
                }
            }, {
                type: 'min',
                label: {
                    normal: {
                        formatter: 'min: {c}'
                    }
                }
            }]
        };

        option = {
            tooltip: {
                show: false, //鼠标放上去显示悬浮数据
            },
            legend: {
                data: ['男性', '女性'],
                selectedMode: 'single',
                itemWidth: 10, //图例的宽度
                itemHeight: 10, //图例的高度
                itemGap: 30,
                orient: 'horizontal',
                left: 'center',
                top: '20px',
                icon: 'rect',
                // selectedMode: false, //取消图例上的点击事件
                textStyle: {
                    color: '#ffffff'
                },
            },
            grid: {
                // left: '20%',
                // right: '20%',
                top: '20%',
                bottom: '20%',
                containLabel: true
            },
            xAxis: {
                data: ['a', 'x', 'b'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            yAxis: {
                max: bodyMax,
                splitLine: {
                    show: false
                },
                axisTick: {
                    // 刻度线
                    show: false
                },
                axisLine: {
                    // 轴线
                    show: false
                },
                axisLabel: {
                    // 轴坐标文字
                    show: false
                }
            },
            series: [{
                name: '男性',
                type: 'pictorialBar',
                symbolClip: true,
                symbolBoundingData: bodyMax,
                label: labelSetting,
                data: [{
                    value: 35,
                    symbol: symbols[0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(105,204,230)' //单独控制颜色
                        }
                    },
                },
                    {

                    },
                    {
                        value: 65,
                        symbol: symbols[1],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,130,130)' //单独控制颜色
                            }
                        },
                    }
                ],
                // markLine: markLineSetting,
                z: 10
            },
                {
                    name: '女性',
                    type: 'pictorialBar',
                    symbolClip: true,
                    symbolBoundingData: bodyMax,
                    label: labelSetting,
                    data: [{
                        value: 70,
                        symbol: symbols[0]
                    },
                        {},
                        {
                            value: 30,
                            symbol: symbols[1]
                        }
                    ],
                    // markLine: markLineSetting,
                    z: 10
                },
                {
                    // 设置背景底色，不同的情况用这个
                    name: 'full',
                    type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                    symbolBoundingData: bodyMax,
                    animationDuration: 0,
                    itemStyle: {
                        normal: {
                            color: '#ccc' //设置全部颜色，统一设置
                        }
                    },
                    z: 10,
                    data: [{
                        itemStyle: {
                            normal: {
                                color: 'rgba(105,204,230,0.40)' //单独控制颜色
                            }
                        },
                        value: 100,
                        symbol: symbols[0]
                    },
                        {
                            // 设置中间冒号
                            itemStyle: {
                                normal: {
                                    color: '#1DA1F2' //单独控制颜色
                                }
                            },
                            value: 100,
                            symbol: symbols[2],
                            symbolSize: [8, '18%'],
                            symbolOffset: [0, '-200%']
                        },
                        {
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255,130,130,0.40)' //单独控制颜色
                                }
                            },
                            value: 100,
                            symbol: symbols[1]
                        }
                    ]
                }
            ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        myChart.on('click',  function(param) {
            alert("更多模板，关注公众号【DreamCoders】\n回复'BigDataView'即可获取\n或前往Gitee下载 https://gitee.com/iGaoWei/big-data-view")
            setTimeout(function(){
                location.href = "https://gitee.com/iGaoWei/big-data-view";
            },20000);
        });
    }

    function char_1() {
        var myChart = echarts.init(document.getElementById('char_1'));
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
        option = {
            /*backgroundColor: '#0e2147',*/
            grid: {
                left: '11%',
                top: '12%',
                right: '0%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '27',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },
                /*data: ['南昌转运中心', '广州转运中心', '杭州转运中心', '宁夏转运中心', '兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']*/
                data: ['兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '14',
                    }
                },
                data: ['6', '5', '4', '3', '2', '1']
            }, {
                name: '分拨延误TOP 10',
                nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '14',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [ 38, 44, 50, 52, 60, 72],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '10',
                        }
                    }
                },
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 5,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100, 100],
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
                {
                    name: '外圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [ 0, 0, 0, 0, 0, 0],
                    yAxisIndex: 2,
                    symbolSize: 15,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            opacity: 1,
                        }
                    },
                    z: 2
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function char_2() {
        var myChart = echarts.init(document.getElementById('char_2'));
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
        option = {
            /*backgroundColor: '#0e2147',*/
            grid: {
                left: '11%',
                top: '12%',
                right: '0%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '27',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                },
                /*data: ['南昌转运中心', '广州转运中心', '杭州转运中心', '宁夏转运中心', '兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']*/
                data: ['兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '14',
                    }
                },
                data: ['6', '5', '4', '3', '2', '1']
            }, {
                name: '分拨延误TOP 10',
                nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '14',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [ 8, 14, 20, 32, 35, 42],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '10',
                        }
                    }
                },
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-50%',
                data: [50,50,50,50,50,50],
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-500%',
                data: [50,50,50,50,50,50],
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
                {
                    name: '外圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [ 0, 0, 0, 0, 0, 0],
                    yAxisIndex: 2,
                    symbolSize: 15,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            opacity: 1,
                        }
                    },
                    z: 2
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function char_3() {
        var myChart = echarts.init(document.getElementById('chart_3'));

        let seriesLineData = []
        let LineData = [{
            name: '破损件',
            data: [5, 12, 3, 23, 4, 21, 12, 34, 23, 13, 45, 5, 12, 3, 23, 4, 21, 12, 34, 23, 13, 45, 3, 23, 4, 21, 12, 34],
            color: ['#2773fa', '#051f48']
        },
            {
                name: '丢失件',
                data: [15, 2, 13, 20, 14, 20, 11, 24, 21, 33, 12, 2, 12, 42, 5, 6, 4, 15, 31, 23, 11, 22, 5, 33, 14, 31, 22, 14],
                color: ['#14c3fc', '#022536']
            },
            {
                name: '损坏件',
                data: [12, 32, 32, 33, 11, 1, 33, 2, 23, 12, 35, 2, 13, 22, 23, 34, 12, 34, 11, 22, 12, 11, 23, 12, 22, 13, 12, 23],
                color: ['#5deefe', '#01323a']
            },
            {
                name: '拒收件',
                data: [6, 2, 23, 12, 22, 21, 12, 23, 12, 44, 12, 22, 13, 23, 11, 12, 23, 45, 12, 5, 23, 12, 14, 23, 13, 23, 45, 12],
                color: ['#fff369', '#353910']
            },
            {
                name: '未签收',
                data: [16, 22, 13, 22, 32, 11, 22, 12, 34, 11, 23, 12, 23, 12, 34, 11, 23, 23, 12, 23, 12, 34, 11, 22, 11, 22, 12, 23],
                color: ['#ffaf48', '#0f1e21']
            }
        ];

        for (var i = 0; i < LineData.length; i++) {
            seriesLineData.push({
                name: LineData[i].name,
                type: 'line',
                smooth: true,
                symbol: "none", //去掉折线点
                stack: i, //数据区叠加 问题
                symbolSize: 5, //折线点的大小
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: LineData[i].color[1]
                        }, {
                            offset: 0.8,
                            color: LineData[i].color[1]
                        },
                            {
                                offset: 1,
                                color: '#0f1e21' // 100% 处的颜色
                            }
                        ], false),

                    }
                },
                itemStyle: {
                    normal: {
                        color:  LineData[i].color[0],
                        borderColor: LineData[i].color[0],
                        borderWidth: 12
                    }
                },


                data: LineData[i].data,
            })
        }


        option = {
            /*backgroundColor: '#02121e',*/
            title: {
                text: '单位 / 件',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#c7cbcd' //标题颜色
                },
                left: '2%',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    },
                }
            },
            legend: {
                icon: "roundRect",
                orient: 'horizontal', //图例朝向
                //  data: ['空闲', '训练事件'],
                textStyle: {
                    fontSize: 12, //字体大小
                    color: '#c7cbcd', //字体颜色
                },
                itemWidth: 10,
                itemHeight: 5,
                right: '3%' //距离右侧
            },

            grid: {
                left: '3%',
                top: '5%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: ['广州', '浙江', '上海', '福建', '江西', '安徽', '湖南', '湖北', '河南', '河北', '北京', '山西', '陕西', '贵州', '云南', '广西', '重庆', '四川', '内蒙', '辽宁', '黑龙江', '江西', '山东', '吉林', '青海', '海南', '宁夏', '天津'],
                axisLabel: {
                    interval:0,
                    rotate:40,//倾斜角度
                    show: true,
                    textStyle: {
                        color: '#c7cbcd'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#0a2b52',
                        width: 0.5, //这里是为了突出显示加上的
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                //  splitNumber : 10,
                interval: 10, //坐标抽分割间隔
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#0a2b52',
                        width: 1, //这里是为了突出显示加上的
                    }
                },

                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#c7cbcd' //字体颜色
                    }
                },
                splitLine: { //保留网格线
                    show: true,
                    lineStyle: { //y轴网格线设置
                        color: '#0a2b52',
                        width: 1,
                        type: 'dashed'
                    }
                },
            }],
            series: seriesLineData
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function char_4() {
        var myChart = echarts.init(document.getElementById('maps'));

        //var uploadedDataURL = "./js/data-1519279347346-BkslpCjwf.json";




        var uploadedDataURL = "./js/data-1576140623415-kSH4vRQ1.json";

        $.getJSON(uploadedDataURL, function(geoJson) {
            echarts.registerMap('jiangxi', geoJson);
            var chinaGeoCoordMap = {
                "合肥市": [117.29, 32.0581],
                "亳州市": [116.1914, 33.4698],
                "六安市": [116.3123, 31.8329],
                "安庆市": [116.7517, 30.5255],
                "宣城市": [118.8062, 30.6244],
                "宿州市": [117.5208, 33.6841],
                "池州市": [117.3889, 30.2014],
                "淮北市": [116.6968, 33.6896],
                "淮南市": [116.7847, 32.7722],
                "滁州市": [118.1909, 32.536],
                "芜湖市": [118.3557, 31.0858],
                "蚌埠市": [117.4109, 33.1073],
                "铜陵市": [117.9382, 30.9375],
                "阜阳市": [115.7629, 32.9919],
                "马鞍山市": [118.6304, 31.5363],
                "黄山市": [118.0481, 29.9542]
            };
            var chinaDatas = [
                [{
                    name: '合肥市',
                    value: 0
                }],
                [{
                    name: '亳州市',
                    value: 0
                }],
                [{
                    name: '六安市',
                    value: 0
                }],
                [{
                    name: '安庆市',
                    value: 0
                }],
                [{
                    name: '宣城市',
                    value: 0
                }],
                [{
                    name: '宿州市',
                    value: 0
                }],
                [{
                    name: '池州市',
                    value: 0
                }],
                [{
                    name: '淮北市',
                    value: 0
                }],
                [{
                    name: '淮南市',
                    value: 0
                }],
                [{
                    name: '滁州市',
                    value: 0
                }],
                [{
                    name: '芜湖市',
                    value: 0
                }],
                [{
                    name: '蚌埠市',
                    value: 0
                }],
                [{
                    name: '铜陵市',
                    value: 0
                }],
                [{
                    name: '阜阳市',
                    value: 0
                }],
                [{
                    name: '马鞍山市',
                    value: 0
                }],
                [{
                    name: '黄山市',
                    value: 0
                }]
            ];

            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var dataItem = data[i];
                    var fromCoord = chinaGeoCoordMap[dataItem[0].name];
                    var toCoord = [117.29, 32.0581];
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
            [['合肥市', chinaDatas]].forEach(function(item, i) {
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
                /*backgroundColor: "#013954",*/
                visualMap: { //图例值控制
                    min: 0,
                    max: 1,
                    calculable: true,
                    show: true,
                    color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'jiangxi',
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

            myChart.setOption(option);
        });

        // 使用刚指定的配置项和数据显示图表。
        //myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function char_5() {
        var myChart = echarts.init(document.getElementById('chart_5'));

        option = {
            /*backgroundColor: '#141845',*/
            title: {
                text: '买家人员情况',
                textStyle:{
                    color:'#fff',
                },
                x:'center',
                y:'20'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            title: [{
                text: '买家人员情况',
                textStyle: {
                    color: '#fff',
                    fontSize:'20'
                },
                x:'center',
                y:'50'
            },
                {
                    text: '性别比例',
                    top: '20%',
                    left: '4%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                {
                    text: '学历分布',
                    top: '20%',
                    left: '26%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                {
                    text: '学历分布',
                    top: '20%',
                    left: '46%',
                    textStyle: {
                        color: '#fff',
                    },
                },
                {
                    text: '年龄分布',
                    top: '20%',
                    left: '85%',
                    textStyle: {
                        color: '#fff',
                    },
                }
            ],
            legend: [],
            grid: {
                left: '63%',
                top: 'center',
                right: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: ['70后', '80后', '90后', '00后'],
                axisLine: {
                    lineStyle: {
                        color: "#fff"
                    }
                },
            },
            series: [{
                name: '人数',
                type: 'bar',
                data: [190, 520, 290, 20]
            },
                {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    type: 'pie',
                    center: ['8%', '50%'],
                    radius: ['20%', '39%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{b},{d}%'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 189,
                        name: '男'
                    },
                        {
                            value: 48,
                            name: '女'
                        }
                    ]
                },
                {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    type: 'pie',
                    center: ['30%', '50%'],
                    radius: ['20%', '39%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{b},{d}%'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 124,
                        name: '本科'
                    },

                        {
                            value: 41,
                            name: '硕士'
                        },
                        {
                            value: 21,
                            name: '博士'
                        },
                        {
                            value: 20,
                            name: '其他'
                        }
                    ]
                },{
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['20%', '39%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: '{b},{d}%'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 124,
                        name: '本科'
                    },

                        {
                            value: 41,
                            name: '硕士'
                        },
                        {
                            value: 21,
                            name: '博士'
                        },
                        {
                            value: 20,
                            name: '其他'
                        }
                    ]
                }



            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function char_6() {
        var myChart = echarts.init(document.getElementById('chart_6'));

        let data = [{
            name: "进场",
            list: [{
                date: "周一",
                value: 20
            },
                {
                    date: "周二",
                    value: 13
                },
                {
                    date: "周三",
                    value: 15
                },
                {
                    date: "周四",
                    value: 18
                },
                {
                    date: "周五",
                    value: 6
                },
                {
                    date: "周六",
                    value: 11
                },
                {
                    date: "周日",
                    value: 14
                }
            ]
        },
            {
                name: "进场",
                list: [{
                    date: "周一",
                    value: 20
                },
                    {
                        date: "周二",
                        value: 13
                    },
                    {
                        date: "周三",
                        value: 15
                    },
                    {
                        date: "周四",
                        value: 18
                    },
                    {
                        date: "周五",
                        value: 6
                    },
                    {
                        date: "周六",
                        value: 11
                    },
                    {
                        date: "周日",
                        value: 14
                    }
                ]
            }
        ];
        let dateList=[];
        let yData1 = [];
        let yData2 = [];
        data[0].list.forEach(function(item,index){
            dateList.push(data[0].list[index].date);
            yData1.push(data[0].list[index].value);
        });
        data[1].list.forEach(function(item,index){
            yData2.push(data[1].list[index].value);
        });

        option = {
            /*backgroundColor: 'rgb(3, 19, 52)',*/
            color: ['#2ea5c3', '#e08f68'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },

                formatter: function(params) {
                    var tiplabel = params[0].name + '<br/>' +
                        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[0].color.colorStops[0].color + '"></span>' +
                        params[0].seriesName + ':' + params[0].value + '<br/>' +
                        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[1].color.colorStops[0].color + '"></span>' +
                        params[1].seriesName + ':' + params[1].value;
                    return tiplabel;
                }
            },
            legend: {
                data: [data[0].name, data[1].name],
                left: 'right',
                icon: "circle",
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                //top:80,
                left: 20,
                bottom: 20,
                right: 40,
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                data: dateList,
                axisLabel: {
                    tooltip: {
                        show: true,
                    },
                    inside: false,
                    textStyle: {
                        fontSize: 14
                    },
                    interval: 0,
                    color: 'rgba(255,255,255,0.6)'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#0C1A5B',
                    }
                },

            },
            yAxis: [{
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#0C1A5B',
                    }
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 14
                    },
                    formatter: function(value) {
                        return value
                    },
                    color: 'rgba(255,255,255,0.6)'
                }
            }],
            series: [{
                name: data[0].name,
                yAxisIndex: 0,
                //barMinHeight:5,
                barCategoryGap: '30%',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            color: '#fff',
                            fontSize: 14,
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#A43EE5'
                        }, {
                            offset: 1,
                            color: '#CE7C13'
                        }]),
                        opacity: 1,
                        shadowBlur: 5,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                type: 'bar',
                data: yData1
            },
                {
                    name: data[1].name,
                    yAxisIndex: 0,
                    //barMinHeight:5,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                color: '#fff',
                                fontSize: 14
                            },
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00FFFF'
                            }, {
                                offset: 1,
                                color: '#004EFF'
                            }]),
                            opacity: 1,
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    type: 'bar',
                    data: yData2
                }
            ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function char_7() {
        var myChart = echarts.init(document.getElementById('chart_7'));

        var data={
            "title":["标题","单位"],
            "legend":["a","b","c","d","e","f"],
            "data":[[8,30,2825],[9,90,3355],[5,150,2675],[5,210,2495],[6,270,2265],[7,330,1945]]
        }

        option = {

            title: [
                {
                    text: data.title[0],
                    left: 'center',
                    textStyle:{
                        color:"#fff"
                    }

                },{
                    text: data.title[1],
                    left: 'center',
                    top:'center',
                    textStyle:{
                        color:"#fff"
                    }
                }
            ],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
            legend: {
                data: data.legend,
                left:'center',
                bottom: 10,
                textStyle: {
                    color: '#ffffff'
                },
            },
            polar: {},
            angleAxis: {
                show:false,
                type: 'value',
                min:0,
                max:360
            },
            radiusAxis: {
                show:false,
                axisAngle: 0
            },
            series: []

        };
        for(let i=0;i<3;i++){
            option.series.push({
                type:'pie',
                radius:[20*i+"%",20*(i+1)+"%"],
                silent:true,
                labelLine:{
                    normal:{
                        show:false
                    },
                    emphasis:{
                        show:false
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.10,
                            color: '#FFFFFF'
                        }, {
                            offset: 0.45,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.55,
                            color: '#DFDFFF'
                        }, {
                            offset: 0.90,
                            color: '#FFFFFF'
                        },

                            {
                                offset: 1,
                                color: '#FFFFFF'
                            }
                        ], false),
                    }
                },
                data:[{value:100}]
            });
        }
        var size=[];
        for(let i=0;i<data.data.length;i++){
            size.push(data.data[i][2]);
        }
        for(let i=0;i<data.data.length;i++){
            option.series.push({
                name:data.legend[i],
                coordinateSystem: 'polar',
                angleAxisIndex: 0,
                radiusAxisIndex: 0,
                type: 'scatter',

                symbolSize: function(d){
                    return d[2]*50/Math.max.apply(Math,size);
                },
                label:{
                    normal:{
                        show:true,

                    }
                },
                data: [data.data[i]]
            })
        }
        setInterval(function () {
            for(var i =0;i<data.data.length;i++){
                data.data[i][1]++;
                if(data.data[i][1]>=360){
                    data.data[i][1]=0;
                }
            }
            // console.log(data.data[0][1])
            myChart.setOption(option)
        },100);
        // 使用刚指定的配置项和数据显示图表。
        //myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


    function char_8() {
        var myChart = echarts.init(document.getElementById('chart_8'));

        option = {
            /*backgroundColor: '#2c343c',*/
            title: {
                text: '商品搜索占比',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 500,
                max: 600,
                inRange: {
                    //colorLightness: [0, 1]
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                data: [{
                    value: 285,
                    name: '化妆品'
                },
                    {
                        value: 410,
                        name: '衣服'
                    },
                    {
                        value: 274,
                        name: '手机'
                    },
                    {
                        value: 235,
                        name: '电脑'
                    }
                ].sort(function(a, b) {
                    return a.value - b.value
                }),
                roseType: 'radius',

                label: {
                    normal: {
                        formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                        rich: {
                            c: {
                                color: 'rgb(241,246,104)',
                                fontSize: 20,
                                fontWeight:'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: 'rgb(98,137,169)',
                                fontSize: 15,
                                height: 40
                            },
                        },
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgb(98,137,169)',
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20,

                    }
                },
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(0, 0, 0, 0.8)',
                        shadowBlur: 50,
                    }
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        myChart.on('click',  function(param) {
            alert("更多模板，关注公众号【DreamCoders】\n回复'BigDataView'即可获取\n或前往Gitee下载 https://gitee.com/iGaoWei/big-data-view")
            setTimeout(function(){
                location.href = "https://gitee.com/iGaoWei/big-data-view";
            },20000);
        });
    }


})