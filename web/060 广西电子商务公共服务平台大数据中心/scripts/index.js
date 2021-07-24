
$(function () {
    echart_1();
    echart_2();
    echart_3();
    echart_map();

    //echart_1湖南货物收入
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}件"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: [ '南宁市', '柳州市', '桂林市','梧州市', '北海市', '防城港市','钦州市','贵港市', '玉林市','百色市','贺州市','河池市','来宾市','崇左市'],
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
                // startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius : '45%',
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['60%', '65%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                // roseType: 'radius',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                // avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}{c}万件'
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
                        value: 25097.63,
                        name: '南宁市',
                        itemStyle: {
                            normal: {
                                color: '#f845f1'
                            }
                        }
                    },
                    {
                        value: 4740.16,
                        name: '柳州市',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 2931.79,
                        name: '桂林市',
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 1174.27,
                        name: '梧州市',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 1423.21,
                        name: '北海市',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 1132.37,
                        name: '防城港市',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 929.50,
                        name: '钦州市',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 1555.20,
                        name: '贵港市',
                        itemStyle: {
                            normal: {
                                color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 4881.52,
                        name: '玉林市',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 1114.72,
                        name: '百色市',
                        itemStyle: {
                            normal: {
                                color: '#32C12E'
                            }
                        }
                    },
                    {
                        value: 605.85,
                        name: '贺州市',
                        itemStyle: {
                            normal: {
                                color: '#90F5AA'
                            }
                        }
                    },
                    {
                        value: 596.23,
                        name: '河池市',
                        itemStyle: {
                            normal: {
                                color: '#F46852'
                            }
                        }
                    },
                    {
                        value: 419.44,
                        name: '来宾市',
                        itemStyle: {
                            normal: {
                                color: '#eaf048'
                            }
                        }
                    },
                    {
                        value: 1499.18,
                        name: '崇左市',
                        itemStyle: {
                            normal: {
                                color: '#9ff048'
                            }
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

    //电子商务销售额、订单数
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['销售额','订单数'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2018年9月','2018年10月','2018年11月','2018年12月','2019年1月'],
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
                name: '',
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
                    name:'销售额',
                    type:'line',
                    data:[3961.88, 4233.63, 4183.14, 3633.01, 3704.47]
                },
                {
                    name:'订单数',
                    type:'line',
                    data:[3374.76, 3364.76, 3274.76, 3371.82, 3259.87]
                }
            ]
        };
        myChart.setOption(option);
    }

    // echart_map中国地图
    function echart_map() {
        var myChart = echarts.init(document.getElementById('chart_map'));
        function showProvince() {
            var geoCoordMap = {
                '富川瑶族自治县': [111.1627,24.4913],'龙州县': [106.8545,22.3426],'南丹县': [107.5422,24.9753],
                '扶绥县': [107.9041,22.6349],'天峨县': [107.1737,24.9991],'大化瑶族自治县': [107.9981,23.7364],
                '乐业县': [106.5616,24.7858],'西林县': [105.0938,24.4895],'资源县': [110.6525,26.0424],
                '都安瑶族自治县': [108.1055,23.9312],'上林县': [108.6050,23.4320],'凌云县': [106.5615,24.3475],
                '东兰县': [107.3742,24.5107],'巴马瑶族自治县': [107.2596,24.1410],'田阳县': [106.9156,23.7356],
                '靖西市': [106.4176,23.1340],'大新县': [107.2012,22.8304],'三江侗族自治县': [109.6078,25.7831],
                '龙胜各族自治县': [110.0114,25.7980],'全州县': [111.0730,25.9286],'融安县': [109.3976,25.2246],
                '柳城县': [109.2446,24.6505],'忻城县': [108.6657,24.0661],'鹿寨县': [109.7517,24.4730],
                '宾阳县': [108.8103,23.2176],'兴业县': [109.8751,22.7363],'横县': [109.2614,22.6799],
                '灵山县': [109.2909,22.4165],'浦北县': [109.5569,22.2715],'东兴市': [107.9718,21.5479],
                '灌阳县': [111.1608,25.4893],'恭城瑶族自治县': [110.8283,24.8313],'荔浦县': [110.3981,24.4965],
                '昭平县': [110.8113,24.1694],'金秀瑶族自治县': [110.1894,24.1303],'桂平市': [110.0790,23.3941],
                '田东县': [107.1260,23.5972],'凤山县': [107.0422,24.5469],'环江毛南族自治县': [108.2583,24.8260],
                '马山县': [108.1770,23.7081],'罗城仫佬族自治县': [108.9046,24.7773],'德保县': [106.6155,23.3234],
                '融水苗族自治县': [109.2563,25.0662],'天等县': [107.1436,23.0813],'隆林县': [105.3438,24.7706],
                '那坡县': [105.8334,23.3871],'平果县': [107.5898,23.3293]
            };
            var data = [
                {
                    name: '富川瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '龙州县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '南丹县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },
                {
                    name: '扶绥县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '天峨县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '大化瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '乐业县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '西林县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业2家<br/>电商服务站目前数量94个站点<br/>广西乐村淘科技有限公司、广西国际电子商务中心<br/>主要推广的产品有西林沙糖桔、麻鸭、姜晶等地理标志保护产品']
                },{
                    name: '资源县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '都安瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '上林县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '凌云县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '东兰县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '巴马瑶族自治县',
                    value: [50,'项目承建企业1家<br/>电商服务站目前数量85个站点<br/>参加电商培训人数1500人<br/>特色粮经作物：包括蚕桑、火麻、龙骨花、中药材、红薯、马铃薯、小杂粮等。<br/>主要承建内容:县级服务中心建设、乡镇级服务站、村级服务点建设']
                },{
                    name: '田阳县',
                    value: [50,'项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '靖西市',
                    value: [50,'项目承建企业1家<br/>电商服务站目前数量60个站点<br/>参加电商培训人数1500人<br/>特色产品：靖西绣球、靖西壮锦、靖西东利大香儒<br/>主要承建内容:靖西各镇乡村服务站点建设']
                },{
                    name: '大新县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '三江侗族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '龙胜各族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '全州县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '融安县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '柳城县',
                    value: [50,'项目承建企业2家<br/>电商服务站目前数量125个站点<br/>参加电商培训人数5000人<br/>特色产品：新味嘉木瓜丝、寨隆壮方红糖<br/>主要承建内容:农村电子商务公共服务体系村级服务点建设。']
                },{
                    name: '忻城县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '鹿寨县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '宾阳县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '兴业县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '横县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '灵山县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '浦北县',
                    value: [50,'项目承建企业2家<br/>电商服务站目前数量161个站点<br/>参加电商培训人数8572人<br/>特色产品：浦北扁柑、浦北黑猪、官垌鱼、浦北黑叶荔<br/>主要承建内容:建设浦北县电子商务公共服务中心，<br/>县级公共服务中心与品牌推与展示区、创业孵化区、培训区集聚发展。']
                },{
                    name: '东兴市',
                    value: [50,'项目承建企业3家<br/>电商服务站目前数量34个站点<br/>特色产品：东兴红姑娘红薯、东兴黄皮果、京族二宝<br/>主要承建内容:建设东兴市电子商务进农村服务中心。<br/>含公共服务区、多平台运营服务区等。']
                },{
                    name: '灌阳县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '恭城瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '荔浦县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '昭平县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '金秀瑶族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '桂平市',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '田东县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '凤山县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '环江毛南族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '马山县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '罗城仫佬族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '德保县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '融水苗族自治县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '天等县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '隆林县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '那坡县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                },{
                    name: '平果县',
                    value: [50,'电商进农村示范县：<br/>项目承建企业24家<br/>电商服务站目前数量24个站点<br/>广西金岸科技有限公司等企业均以优秀标准验收<br/>主要推广特产富川脐橙...']
                }
            ];
            var max = 480,
                min = 9;
            var maxSize4Pin = 50,
                minSize4Pin = 20;
            var convertData = function (data) {
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

            myChart.setOption(option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function loadData(result){
                        return result.name+'<br />' +result.value[3];
                    }
                },
                geo: {
                    zoom:1.2, 
                    show: true,
                    map:'广西',
                    mapType: '广西',
                    label: {
                        normal: {
                            show : true,
                            textStyle:{color:"#4bf316"}
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }, 
                    },
                    roam: true,
                    itemStyle: {                        
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 2,
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
                                    color: 'rgba(   47,79,79, .2)' // 100% 处的颜色
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
                series: [                    
                    {
                        name: '电商进农村示范县',
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
                                formatter: '{b}',
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 10,
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'red', //标志颜色
                            }
                        },
                        zlevel: 6,
                        data: convertData(data),
                    },
                    {
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 47)),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
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
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_3货物周转量
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
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
                data:['顺丰快递','邮政速递','百世快递','圆通速递','中通速递','申通快递','韵达快递'],
                textStyle:{
                    color: '#fff'
                },
                top: '8%'
            },
            grid: {
                top: '40%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2018年9月','2018年10月','2018年11月','2018年12月','2019年1月'],
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
                name: '单',
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
                    name:'顺丰快递',
                    type:'line',
                    data:[3961, 4233, 4183, 3633, 3704]
                },
                {
                    name:'邮政速递',
                    type:'line',
                    data:[3374, 3364, 3274, 3371, 3259]
                },
                {
                    name:'百世快递',
                    type:'line',
                    data:[14, 15, 13, 14, 15]
                },
                {
                    name:'圆通速递',
                    type:'line',
                    data:[686,847,895,865,886]
                },
                {
                    name:'中通速递',
                    type:'line',
                    data:[6133, 6577, 7019,6821,7294]
                },
                {
                    name:'申通快递',
                    type:'line',
                    data:[509, 862, 1481,1552,1333]
                },
                {
                    name:'韵达快递',
                    type:'line',
                    data:[509, 900, 1350,1487,1600]
                }
            ]
        };
        myChart.setOption(option);
    }

    //湖南省飞机场
    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));

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
    //点击跳转
    // $('#chart_map').click(function(){
    //     window.location.href = './page/index.html';
    // });
    // $('.t_btn2').click(function(){
    //     window.location.href = "./page/index.html?id=2";
    // });
    // $('.t_btn3').click(function(){
    //     window.location.href = "./page/index.html?id=3";
    // });
    // $('.t_btn4').click(function(){
    //     window.location.href = "./page/index.html?id=4";
    // });
    // $('.t_btn5').click(function(){
    //     window.location.href = "./page/index.html?id=5";
    // });
    // $('.t_btn6').click(function(){
    //     window.location.href = "./page/index.html?id=6";
    // });
    // $('.t_btn7').click(function(){
    //     window.location.href = "./page/index.html?id=7";
    // });
    // $('.t_btn8').click(function(){
    //     window.location.href = "./page/index.html?id=8";
    // });
    // $('.t_btn9').click(function(){
    //     window.location.href = "./page/index.html?id=9";
    // });
});
