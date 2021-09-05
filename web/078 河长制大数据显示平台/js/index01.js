/**
 * Created by Administrator on 2017/5/17.
 */
// 营销分析

// 24小时购买时间分析
$(function(){
    var myChart = echarts.init($("#buyTime")[0]);
    var option = {
        tooltip: {   //提示框，鼠标悬浮交互时的信息提示
            show: true,
            trigger: 'axis'
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:40,
            borderWidth: 0
        },
        legend: {
            data: [],
            orient: 'vertical',
            textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
        },

        calculable: false,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center'
                    }
                }
            }

        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                }
            }
        ],
        series: [
            {
                name: '',
                type: 'line',
                stack: '24小时购买时间',
                data: [120, 132, 101, 146, 199, 230, 210, 230, 240, 256, 278, 300,120, 132, 101, 146, 199, 230, 210, 230, 240, 256, 278, 300],
                itemStyle: {
                    normal: {
                        color: '#02bcbc'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
});
// 套餐类型分析
$(function(){
    var myChart = echarts.init($("#Package01")[0]);
    option = {
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['套餐A','套餐B','套餐C','套餐D','套餐E'], textStyle:{
                color:"#e9ebee"

            }
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,
        series : [
            {
                name:'套餐',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'套餐A'},
                    {value:310, name:'套餐B'},
                    {value:234, name:'套餐C'},
                    {value:135, name:'套餐D'},
                    {value:1548, name:'套餐E'}
                ]
            }
        ]
    };


    myChart.setOption(option);
});
// 渠道分析
$(function(){
    var myChart = echarts.init($("#rode01")[0]);
    option = {


        legend: {
            orient : 'vertical',
            x : 'left',
            data:['套餐A','套餐B','套餐C','套餐D','套餐E','套餐F','套餐G','套餐H'], textStyle:{
                color:"#e9ebee"

            }
        },

        calculable : false,
        series : [

            {
                name:'面积模式',
                type:'pie',
                radius : '60%',
                center: ['50%', '60%'],
                roseType : 'area',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:10, name:'套餐A'},
                    {value:5, name:'套餐B'},
                    {value:15, name:'套餐C'},
                    {value:25, name:'套餐D'},
                    {value:20, name:'套餐E'},
                    {value:35, name:'套餐F'},
                    {value:30, name:'套餐H'},
                    {value:40, name:'套餐G'}
                ]
            }
        ]
    };


    myChart.setOption(option);
});
// 订退分析
$(function(){
    var myChart = echarts.init($("#bookAret")[0]);
    option = {

        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:40,
            borderWidth: 0
        },
        legend: {
            data:['退订数','订单数'],
            textStyle:{
                color:"#e9ebee"

            }
        },

        calculable : false,
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],axisLabel: {
                show: true,
                textStyle: {
                    color: '#a4a7ab',
                    align: 'center'
                }
            }
            },

        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                }
            }
        ],
        series : [
            {
                name:'退订数',
                type:'bar',
                data:[100, 80, 136, 150, 120, 56, 200, 162, 105, 63, 169, 236],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'订单数',
                type:'bar',
                data:[983, 820, 1236, 930, 1600, 1032, 890, 1300, 1921, 984, 1960, 2630],
                markPoint : {
                    data : [
                        {name : '月最高', value : 2630, xAxis: 12, yAxis: 2630, symbolSize:18},
                        {name : '月最低', value : 820, xAxis: 2, yAxis: 830}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };


    myChart.setOption(option);
});
// 按月进行趋势分析
$(function(){
    var myChart = echarts.init($("#bookBmonth")[0]);
    var option = {
        tooltip: {   //提示框，鼠标悬浮交互时的信息提示
            show: true,
            trigger: 'axis'
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:40,
            borderWidth: 0
        },
        legend: {
            data: [],
            orient: 'vertical',
            textStyle: { fontWeight: 'bold', color: '#a4a7ab' }
        },

        calculable: false,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center'
                    }
                }
            }

        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                }
            }
        ],
        series: [
            {
                name: '',
                type: 'line',
                stack: '订单数',
                data:[983, 820, 1236, 930, 1600, 1032, 890, 1300, 1921, 984, 1960, 2630],
                itemStyle: {
                    normal: {
                        color: '#02bcbc'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
});
// 气候与订单分析
$(function(){
    var myChart = echarts.init($("#whearAbook")[0]);
    option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:20,
            borderWidth: 0
        },

        calculable : false,
        legend: {
            data:['下雨','下雪','晴天','订单量'],
            textStyle:{
                color:"#e9ebee"

            }
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '订单量',
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                }
            },
            {
                type : 'value',
                name : '温度',
                axisLabel : {
                    formatter: '{value} °C',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                splitLine: {
                    show: false
                },
            },

        ],
        series : [

            {
                name:'下雨',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'下雪',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'晴天',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'订单量',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    myChart.setOption(option);
});
// 交通与订单分析
$(function(){
    var myChart = echarts.init($("#rodeAbook")[0]);
    option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:20,
            borderWidth: 0
        },

        calculable : false,
        legend: {
            data:['拥堵','畅通','订单量'],
            textStyle:{
                color:"#e9ebee"

            }
        },
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'center'
                    }
                }

            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '订单量',
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                }
            },
            {
                type : 'value',
                name : '车流量',
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                splitLine: {
                    show: false
                },
            },

        ],
        series : [

            {
                name:'畅通',
                type:'bar',
                stack: '车流量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'拥堵',
                type:'bar',
                stack: '车流量',
                data:[220, 232, 301, 234, 190, 330, 210]
            },

            {
                name:'订单量',
                type:'line',
                yAxisIndex: 1,
                data:[320, 232, 101, 134, 290, 230, 210]
            }
        ]
    };

    myChart.setOption(option);
});
// 季节与订单分析
$(function(){
    var myChart = echarts.init($("#seaAbook01")[0]);
    option = {


        legend: {
            orient : 'vertical',
            x : 'left',
            data:['春季','夏季','秋季','冬季'], textStyle:{
                color:"#e9ebee"

            }
        },

        calculable : false,
        series : [

            {
                name:'季节与订单关系',
                type:'pie',
                radius : '70%',
                center: ['50%', '60%'],
                splitLine:{show: false},
                roseType : 'area',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:2560, name:'春季'},
                    {value:3690, name:'夏季'},
                    {value:5690, name:'秋季'},
                    {value:6312, name:'冬季'}
                ]
            }
        ]
    };


    myChart.setOption(option);
});
// 活动与订单分析
$(function(){
    var myChart = echarts.init($("#actionBook")[0]);
    option = {
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:20,
            borderWidth: 0
        },

        calculable : false,
        legend: {
            data:['降价活动','买一送一活动','送积分活动','送礼品活动'],
            textStyle:{
                color:"#e9ebee"

            }
        },
        xAxis : [
            {
                type : 'category',
                splitLine : {show : false},
                data : ['周一','周二','周三','周四','周五','周六','周日'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        align: 'center'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                position: 'right',
                splitLine : {show : false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        align: 'center'
                    }
                }
            }
        ],
        series : [
            {
                name:'降价活动',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'买一送一活动',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'送积分活动',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '广告',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'送礼品活动',
                type:'bar',
                tooltip : {trigger: 'item'},
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
            },

            {
                name:'订单趋势',
                type:'line',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570]
            },

            {
                name:'订单细分',
                type:'pie',
                tooltip : {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                center: [100,80],
                radius : [0, 30],
                itemStyle :　{
                    normal : {
                        labelLine : {
                            length : 20
                        }
                    }
                },
                data:[
                    {value:1048, name:'订单一'},
                    {value:251, name:'订单二'},
                    {value:147, name:'订单三'},
                    {value:102, name:'订单四'}
                ]
            }
        ]
    };


    myChart.setOption(option);
});
// 特殊时间点与订单分析
$(function(){
    var myChart = echarts.init($("#sperceBook01")[0]);
    option = {

        tooltip : {
            trigger: 'axis',
            formatter: function (params) {
                var res = params[0].seriesName + ' ' + params[0].name;
                res += '<br/>  0-05 : ' + params[0].value[0] + '  06-12 : ' + params[0].value[3];
                res += '<br/>   13-18: ' + params[0].value[1] + '  19-24 : ' + params[0].value[2];
                return res;
            }
        },
        grid: {
            x: 46,
            y:30,
            x2:30,
            y2:20,
            borderWidth: 0
        },
        legend: {
            data:['订单数'],
            textStyle:{
                color:"#e9ebee"

            }
        },

        dataZoom : {
            show : true,
            realtime: true,
            start : 50,
            end : 100
        },
        xAxis : [
            {
                type : 'category',
                textStyle: {
                    color: '#a4a7ab',

                },
                boundaryGap : true,
                axisTick: {onGap:false},
                splitLine: {show:false},
                data : [
                    "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                    "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
                    "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
                    "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
                    "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
                    "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
                    "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
                    "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
                    "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
                    "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
                    "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
                    "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
                    "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
                    "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
                    "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
                    "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
                    "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
                    "2013/6/6", "2013/6/7", "2013/6/13"
                ]
            }
        ],
        yAxis : [
            {
                type : 'value',
                textStyle: {
                    color: '#a4a7ab',

                },
                scale:true,
                boundaryGap: [0.01, 0.01]
            }
        ],
        series : [
            {
                name:'订单数',
                type:'k',
                data:[ // 开盘，收盘，最低，最高
                    [2320.26,2302.6,2287.3,2362.94],
                    [2300,2291.3,2288.26,2308.38],
                    [2295.35,2346.5,2295.35,2346.92],
                    [2347.22,2358.98,2337.35,2363.8],
                    [2360.75,2382.48,2347.89,2383.76],
                    [2383.43,2385.42,2371.23,2391.82],
                    [2377.41,2419.02,2369.57,2421.15],
                    [2425.92,2428.15,2417.58,2440.38],
                    [2411,2433.13,2403.3,2437.42],
                    [2432.68,2434.48,2427.7,2441.73],
                    [2430.69,2418.53,2394.22,2433.89],
                    [2416.62,2432.4,2414.4,2443.03],
                    [2441.91,2421.56,2415.43,2444.8],
                    [2420.26,2382.91,2373.53,2427.07],
                    [2383.49,2397.18,2370.61,2397.94],
                    [2378.82,2325.95,2309.17,2378.82],
                    [2322.94,2314.16,2308.76,2330.88],
                    [2320.62,2325.82,2315.01,2338.78],
                    [2313.74,2293.34,2289.89,2340.71],
                    [2297.77,2313.22,2292.03,2324.63],
                    [2322.32,2365.59,2308.92,2366.16],
                    [2364.54,2359.51,2330.86,2369.65],
                    [2332.08,2273.4,2259.25,2333.54],
                    [2274.81,2326.31,2270.1,2328.14],
                    [2333.61,2347.18,2321.6,2351.44],
                    [2340.44,2324.29,2304.27,2352.02],
                    [2326.42,2318.61,2314.59,2333.67],
                    [2314.68,2310.59,2296.58,2320.96],
                    [2309.16,2286.6,2264.83,2333.29],
                    [2282.17,2263.97,2253.25,2286.33],
                    [2255.77,2270.28,2253.31,2276.22],
                    [2269.31,2278.4,2250,2312.08],
                    [2267.29,2240.02,2239.21,2276.05],
                    [2244.26,2257.43,2232.02,2261.31],
                    [2257.74,2317.37,2257.42,2317.86],
                    [2318.21,2324.24,2311.6,2330.81],
                    [2321.4,2328.28,2314.97,2332],
                    [2334.74,2326.72,2319.91,2344.89],
                    [2318.58,2297.67,2281.12,2319.99],
                    [2299.38,2301.26,2289,2323.48],
                    [2273.55,2236.3,2232.91,2273.55],
                    [2238.49,2236.62,2228.81,2246.87],
                    [2229.46,2234.4,2227.31,2243.95],
                    [2234.9,2227.74,2220.44,2253.42],
                    [2232.69,2225.29,2217.25,2241.34],
                    [2196.24,2211.59,2180.67,2212.59],
                    [2215.47,2225.77,2215.47,2234.73],
                    [2224.93,2226.13,2212.56,2233.04],
                    [2236.98,2219.55,2217.26,2242.48],
                    [2218.09,2206.78,2204.44,2226.26],
                    [2199.91,2181.94,2177.39,2204.99],
                    [2169.63,2194.85,2165.78,2196.43],
                    [2195.03,2193.8,2178.47,2197.51],
                    [2181.82,2197.6,2175.44,2206.03],
                    [2201.12,2244.64,2200.58,2250.11],
                    [2236.4,2242.17,2232.26,2245.12],
                    [2242.62,2184.54,2182.81,2242.62],
                    [2187.35,2218.32,2184.11,2226.12],
                    [2213.19,2199.31,2191.85,2224.63],
                    [2203.89,2177.91,2173.86,2210.58],
                    [2170.78,2174.12,2161.14,2179.65],
                    [2179.05,2205.5,2179.05,2222.81],
                    [2212.5,2231.17,2212.5,2236.07],
                    [2227.86,2235.57,2219.44,2240.26],
                    [2242.39,2246.3,2235.42,2255.21],
                    [2246.96,2232.97,2221.38,2247.86],
                    [2228.82,2246.83,2225.81,2247.67],
                    [2247.68,2241.92,2231.36,2250.85],
                    [2238.9,2217.01,2205.87,2239.93],
                    [2217.09,2224.8,2213.58,2225.19],
                    [2221.34,2251.81,2210.77,2252.87],
                    [2249.81,2282.87,2248.41,2288.09],
                    [2286.33,2299.99,2281.9,2309.39],
                    [2297.11,2305.11,2290.12,2305.3],
                    [2303.75,2302.4,2292.43,2314.18],
                    [2293.81,2275.67,2274.1,2304.95],
                    [2281.45,2288.53,2270.25,2292.59],
                    [2286.66,2293.08,2283.94,2301.7],
                    [2293.4,2321.32,2281.47,2322.1],
                    [2323.54,2324.02,2321.17,2334.33],
                    [2316.25,2317.75,2310.49,2325.72],
                    [2320.74,2300.59,2299.37,2325.53],
                    [2300.21,2299.25,2294.11,2313.43],
                    [2297.1,2272.42,2264.76,2297.1],
                    [2270.71,2270.93,2260.87,2276.86],
                    [2264.43,2242.11,2240.07,2266.69],
                    [2242.26,2210.9,2205.07,2250.63],
                    [2190.1,2148.35,2126.22,2190.1]
                ]
            }
        ]
    };


    myChart.setOption(option);
});
// 数据汇总
$(function(){
    var myChart = echarts.init($("#allchar")[0]);
    option = {

        tooltip : {
            trigger: 'item'
        },


        polar : [
            {
                indicator : [
                    { text : '套餐A' },
                    { text : '套餐B' },
                    { text : '套餐C' },
                    { text : '套餐D' },
                    { text : '套餐E' }
                ],


                name:{
                    textStyle:{color:'#fff'}
                },

                center: [580, 120],
                radius : 60
            }
        ],
        calculable : false,
        series : [
            {
                name:'pie',
                type:'pie',
                radius : [0, 60],
                center: [160, 120],
                data: (function (){
                    var res = [];
                    var len = 0;
                    while (len++ < 5) {
                        res.push({
                            name: '套餐A' + len,
                            value: Math.round(Math.random()*10)
                        });
                    }
                    return res;
                })()
            },
            {
                name: 'radar',
                type: 'radar',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},

                data: (function (){
                    var res = [];
                    var len = 0;
                    while (len++ < 3) {
                        res.push({
                            name: 'data' + len,
                            value: [
                                Math.round(Math.random()*100),
                                Math.round(Math.random()*100),
                                Math.round(Math.random()*100),
                                Math.round(Math.random()*100),
                                Math.round(Math.random()*100)
                            ]
                        });
                    }
                    return res;
                })()
            }
        ]
    };
    var lastIndex = 5;
    var axisData;
    timeTicket = setInterval(function (){
        lastIndex += 1;
        // 动态数据接口 addData
        myChart.addData([
            [
                0,        // 系列索引
                {         // 新增数据
                    name: '套餐' + lastIndex,
                    value: Math.round(Math.random()*10)
                },
                false,     // 新增数据是否从队列头部插入
                false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
                '随机数据' + lastIndex
            ],
            [
                1,        // 系列索引
                {         // 新增数据
                    name: 'data' + lastIndex,
                    value: [
                        Math.round(Math.random()*100),
                        Math.round(Math.random()*100),
                        Math.round(Math.random()*100),
                        Math.round(Math.random()*100),
                        Math.round(Math.random()*100)
                    ]
                },
                false,     // 新增数据是否从队列头部插入
                false      // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
            ]
        ]);
    }, 2000);


    myChart.setOption(option);
});

// 收入支出分析
// 收入渠道分析
$(function(){
    var myChart = echarts.init($("#zhanbi02")[0]);
    option = {

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
                data : ['总收入','渠道A','渠道B','渠道C','渠道D','渠道E'],
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                splitLine:{show: false}
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                splitLine:{show: false}
            }
        ],
        series : [
            {
                name:'总收入',
                type:'bar',
                stack: '总量',
                itemStyle:{
                    normal:{
                        barBorderColor:'rgba(0,0,0,0)',
                        color:'rgba(0,0,0,0)'
                    },
                    emphasis:{
                        barBorderColor:'rgba(0,0,0,0)',
                        color:'rgba(0,0,0,0)'
                    }
                },
                data:[0, 1700, 1400, 1200, 300, 0]
            },
            {
                name:'渠道',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[2900, 1200, 300, 200, 900, 300]
            }
        ]
    };


    myChart.setOption(option);
});
// 支出渠道分析
$(function(){
    var myChart = echarts.init($("#zhanbi03")[0]);
    option = {

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
                data : ['总收入','渠道A','渠道B','渠道C','渠道D','渠道E'],
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                splitLine:{show: false}
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                splitLine:{show: false}
            }
        ],
        series : [
            {
                name:'总收入',
                type:'bar',
                stack: '总量',
                itemStyle:{
                    normal:{
                        lineStyle:{
                            color:'#b5b5b6'
                        }
                    }
                },
                data:[0, 1700, 1400, 1200, 300, 0]
            },
            {
                name:'渠道',
                type:'bar',
                stack: '总量',
                itemStyle:{
                    normal:{
                        lineStyle:{
                            color:'#b5b5b6'
                        }
                    }
                },
                data:[2900, 1200, 300, 200, 900, 300]
            }
        ]
    };


    myChart.setOption(option);
});
// 营销投入与销售量分析
$(function(){
    var myChart = echarts.init($("#allAly01")[0]);
    option = {
        title : {
            text: '销售量组成',
            textStyle:{
                color:"#e9ebee"

            },

            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['销售A','销售B','销售C','销售D','销售E'],
            textStyle:{
                color:"#e9ebee"

            }
        },

        calculable : false,
        series : [
            {
                name:'销售组成',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'销售A'},
                    {value:310, name:'销售B'},
                    {value:234, name:'销售C'},
                    {value:135, name:'销售D'},
                    {value:1548, name:'销售E'}
                ]
            }
        ]
    };


    myChart.setOption(option);
});
$(function(){
    var myChart = echarts.init($("#allAly02")[0]);
    option = {
        title : {
            text: '营销投入组成',
            textStyle:{
                color:"#e9ebee"

            },

            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['投入A','投入B','投入C','投入D','投入E','投入F','投入G','投入H','投入J'],
            textStyle:{
                color:"#e9ebee"

            }
        },

        calculable : false,
        series : [
            {
                name:'销售组成',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'投入A'},
                    {value:310, name:'投入B'},
                    {value:234, name:'投入C'},
                    {value:135, name:'投入D'},
                    {value:1548, name:'投入E'},
                    {value:135, name:'投入F'},
                    {value:135, name:'投入G'},
                    {value:135, name:'投入H'},
                    {value:135, name:'投入J'}
                ]
            }
        ]
    };


    myChart.setOption(option);
});
$(function(){
    var myChart = echarts.init($("#allAly03")[0]);
    option = {
        title : {
            text: '销售量与投入量分析',
            textStyle:{
                color:"#e9ebee"

            },
            x:'center'

        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['营销投入量','销售量'],
            textStyle:{
                color:"#e9ebee"

            },
        },

        calculable : false,
        xAxis : [
            {
                type : 'category',
                splitLine:{show: false},
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
            }
        ],
        series : [
            {
                name:'营销投入量',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'销售量',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint : {
                    data : [
                        {name : '最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                        {name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };


    myChart.setOption(option);
});
// 安全分析
// 事件趋势分析
$(function(){
    var myChart = echarts.init($("#shijian01")[0]);
    option = {

        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c}"
        },
        legend: {
            x: 'center',
            data: ["案件趋势分析"],
            textStyle:{
                color:"#e9ebee"

            }
        },
        xAxis: [
            {
                type: "category",
                name: "x",
                splitLine:{show: false},
                axisLabel : {
                    formatter: '{value} ',
                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis: [
            {
                type: "log",
                name: "y",
                splitLine:{show: false},
                data : ['10','30','50','70','90','110','120','130','150','170','190','210','250'],
                axisLabel : {

                    textStyle: {
                        color: '#a4a7ab',
                        align: 'right'
                    }
                },
            }
        ],

        calculable: false,
        series: [
            {
                name: "案件趋势分析",
                type: "line",
                data:[26, 59, 90, 26, 28, 70, 175, 182, 48, 188, 60, 23]

            }

        ]
    };


    myChart.setOption(option);
});
// 事件级别分析
$(function(){
    var myChart = echarts.init($("#shijian02")[0]);
    var placeHoledStyle = {
        normal:{
            barBorderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
        },
        emphasis:{
            barBorderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
        }
    };
    var dataStyle = {
        normal: {
            label : {
                show: true,
                position: 'insideLeft',
                formatter: '{c}%'
            }
        }
    };
    option = {

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
        },
        legend: {
            y: 55,
            data:['极重', '严重','一般', '轻微'],
            textStyle:{
                color:"#fff"

            }
        },

        grid: {
            y: 80,
            y2: 30
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                axisLabel : {

                    textStyle: {
                        color: '#fff',
                        align: 'right'
                    }
                },
                data : ['医疗事件', '消防事件', '民事事件', '刑事事件']
            }
        ],
        series : [
            {
                name:'极重',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[38, 50, 33, 72]
            },
            {
                name:'极重',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[62, 50, 67, 28]
            },
            {
                name:'严重',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[61, 41, 42, 30]
            },
            {
                name:'严重',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[39, 59, 58, 70]
            },
            {
                name:'一般',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[37, 35, 44, 60]
            },
            {
                name:'一般',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[63, 65, 56, 40]
            },
            {
                name:'轻微',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[71, 50, 31, 39]
            },
            {
                name:'轻微',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[29, 50, 69, 61]
            }
        ]
    };
    myChart.setOption(option);
});
// 事件类型分析
$(function(){
    var myChart = echarts.init($("#shijian03")[0]);
    var labelTop = {
        normal : {
            label : {
                show : true,
                position : 'center',
                formatter : '{b}',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };
    var labelFromatter = {
        normal : {
            label : {
                formatter : function (params){
                    return 100 - params.value + '%'
                },
                textStyle: {
                    baseline : 'top'
                }
            }
        },
    }
    var labelBottom = {
        normal : {
            color: '#ccc',
            label : {
                show : true,
                position : 'center'
            },
            labelLine : {
                show : false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var radius = [40, 55];
    option = {
        legend: {
            x : 'center',

            textStyle:{
                color:"#fff"

            },
            data:[
                '医疗','消防','民事','刑事','其它'

            ]
        },


        series : [
            {
                type : 'pie',
                center : ['10%', '30%'],
                radius : radius,
                x: '0%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'解决', value:46, itemStyle : labelBottom},
                    {name:'医疗', value:54,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['30%', '30%'],
                radius : radius,
                x:'20%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'解决', value:56, itemStyle : labelBottom},
                    {name:'消防', value:44,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['50%', '30%'],
                radius : radius,
                x:'40%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'解决', value:65, itemStyle : labelBottom},
                    {name:'民事', value:35,itemStyle : labelTop}
                ]
            },
            {
                type : 'pie',
                center : ['70%', '30%'],
                radius : radius,
                x:'60%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'解决', value:70, itemStyle : labelBottom},
                    {name:'刑事', value:30,itemStyle : labelTop}

                ]
            },


            {
                type : 'pie',
                center : ['90%', '30%'],
                radius : radius,
                 // for funnel
                x:'80%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'解决', value:70, itemStyle : labelBottom},
                    {name:'其它', value:11,itemStyle : labelTop}
                ]
            }
        ]
    };
    myChart.setOption(option);
});
// 事发时间特征分析
$(function(){
    var myChart = echarts.init($("#shijian04")[0]);
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['医疗事件', '消防事件','刑事','民事','其它'],
            textStyle:{
                color:"#fff"

            },
        },

        calculable : false,
        xAxis : [
            {
                type : 'value',
                splitLine: {show: false},
                axisLabel : {

                    textStyle: {
                        color: '#fff',
                        align: 'right'
                    }
                },
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                axisLabel : {

                    textStyle: {
                        color: '#fff',
                        align: 'right'
                    }
                },
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
            }
        ],
        series : [
            {
                name:'医疗事件',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data: [12, 13, 10, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 20, 25, 28, 30]
            },
            {
                name:'消防事件',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data: [1, 13, 0, 16, 19, 23, 21, 23, 20, 26, 27, 30,12, 12, 11, 14, 19, 23, 21, 20, 0, 25, 8, 30]
            },
            {
                name:'刑事',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data: [12, 13, 10, 16, 19, 3, 2, 3, 0, 6, 9, 30,12, 12, 11, 14, 1, 3, 1, 2, 0, 5, 2, 0]
            },
            {
                name:'民事',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data: [2, 13, 10, 6, 19, 23, 21, 3, 20, 6, 7, 30,12, 12, 11, 14, 19, 3, 21, 0, 20, 5, 8, 0]
            },
            {
                name:'其它',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data: [1, 3, 10, 6, 9, 3, 11, 3, 0, 6, 7, 0,2, 2, 1, 4, 9, 3, 1, 0, 0, 5, 8, 3]
            }
        ]
    };

    myChart.setOption(option);
});