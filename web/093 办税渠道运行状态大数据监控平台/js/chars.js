var dom = document.getElementById("firsttab1");
var dom2 = document.getElementById("firsttab2");
var dom3 = document.getElementById("firsttab3");
var dom4 = document.getElementById("firsttab4");
var dom5 = document.getElementById("firsttab5");
var dom6 = document.getElementById("firsttab6");
var dom7 = document.getElementById("firsttab7");
var dom8 = document.getElementById("firsttab8");
var dom9 = document.getElementById("charbar");
var dom10 = document.getElementById("charbar2");
var dom11 = document.getElementById("secondRighttextChar");
var dom12 = document.getElementById("secondRighttextChar1");
var dom13 = document.getElementById("secondChar");
var dom14 = document.getElementById("contentChar1");
var dom15 = document.getElementById("contentChar2");

var myChart = echarts.init(dom,"wonderland");
var myChart2= echarts.init(dom2,"wonderland");
var myChart3 = echarts.init(dom3,"wonderland");
var myChart4 = echarts.init(dom4,"wonderland");
var myChart5 = echarts.init(dom5,"wonderland");
var myChart6= echarts.init(dom6,"wonderland");
var myChart7 = echarts.init(dom7,"wonderland");
var myChart8 = echarts.init(dom8,"wonderland");
var myChart9 = echarts.init(dom9,"wonderland");
var myChart10 = echarts.init(dom10,"wonderland");
var myChart11 = echarts.init(dom11,"wonderland");
var myChart12 = echarts.init(dom12,"wonderland");
var myChart13 = echarts.init(dom13,"wonderland");
var myChart14 = echarts.init(dom14,"wonderland");
var myChart15 = echarts.init(dom15,"wonderland");

window.addEventListener("resize", () => {
    this.myChart.resize();
    this.myChart2.resize();
    this.myChart3.resize();
    this.myChart4.resize();
    this.myChart5.resize();
    this.myChart6.resize();
    this.myChart7.resize();
    this.myChart8.resize();
    this.myChart9.resize();
    this.myChart10.resize();
    this.myChart11.resize();
    this.myChart12.resize();
    this.myChart13.resize();
    this.myChart14.resize();
    this.myChart15.resize();
});


option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:2.5, name:'2.5',itemStyle:{
                        color:"#0268e8"
                    }}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart3.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart4.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart6.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart7.setOption(option, true);
}
if (option && typeof option === "object") {
    myChart8.setOption(option, true);
}




option1 = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['发代开','发票发','纳税申','发票旧','发认证']
    },
    series : [
        {
            name: '业务办理',
            type: 'pie',
            radius : '35%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'发票代开'},
                {value:310, name:'发票发售'},
                {value:234, name:'纳税申报'},
                {value:135, name:'发票验旧'},
                {value:1548, name:'发票认证'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    color:function(params) {
                        //自定义颜色
                        var colorList = [
                            '#01b7ff', '#fd7c28', '#6fb440', '#ffc800', '#2d89dc',
                        ];
                        textStyle : {
                            // fontWeight : 300 ,
                                fontSize : 8    //文字的字体大小
                        }
                        return colorList[params.dataIndex]
                    }
                }
            }
        }
    ]
};
if (option1 && typeof option1 === "object") {
    myChart9.setOption(option1, true);
}
if (option1 && typeof option1 === "object") {
    myChart10.setOption(option1, true);
}




option2 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['省级', '市级'],
            axisTick: {
                alignWithLabel: true
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }

        }
    ],
    yAxis : [
        {
            type : 'value',
            axisTick: {
                show: false
            },
            splitLine:{
                show:false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#fff',//左边线的颜色
                    width:'2'//坐标线的宽度
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',//坐标值得具体的颜色

                }
            }

        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[32.62, 52.68],
            itemStyle:{
                normal:{
                    color: function (params){
                        var colorList = ['#05fef8','#fedc00'];
                        return colorList[params.dataIndex];
                    }
                }
            }

        }
    ]
};
if (option2 && typeof option2 === "object") {
    myChart11.setOption(option2, true);
}






option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接问','件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'省级市级',
            type:'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            itemStyle:{
                normal:{
                    color: function (params){
                        var colorList = ['#05fef8','#fedc00'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'省级以上'},
                {value:310, name:'市级以上'}
            ]
        }
    ]
};
if (option3 && typeof option3 === "object") {
    myChart12.setOption(option3, true);
}



// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}


// option
option4 = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 5,
        data: lineData
    }, {
        name: 'bar',
        type: 'bar',
        barWidth: 5,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#fbb307'},
                        {offset: 1, color: '#84f00e'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};
if (option4 && typeof option4 === "object") {
    myChart13.setOption(option4, true);
}



option5 = {
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        axisTick: {
            show: false
        },
        data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00','14:00'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色

            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        splitLine:{
            // show:false
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#fff',//左边线的颜色
                width:'2'//坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',//坐标值得具体的颜色

            }
        }
    },
    series: [{
        data: [5, 8, 20, 22, 24, 22, 35,18,10,1],
        type: 'line',
        smooth:.2,
        color:'#04fefa'
    }]
};
if (option5 && typeof option5 === "object") {
    myChart14.setOption(option5, true);
}
if (option5 && typeof option5 === "object") {
    myChart15.setOption(option5, true);
}
