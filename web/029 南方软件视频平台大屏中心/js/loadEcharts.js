var Echarts = function () {
    var init = function () {
        xcwttj();
        loadqsjkdw();;
    };
    /**巡查问题统计**/
    var xcwttj = function () {
        var myCharts = echarts.init(document.getElementById('spwttjEchart'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value;
                }
            },
            grid:{
                top:'5px',
                bottom:'30px',
                left:'45px',
                right:'5px'
            },
            xAxis: {
                data: ['张三', '李四', '王二', '周五', '李三', '张飞','赵云' ],
                axisTick: {show: false},
                axisLine: {show: true,
                    lineStyle:{
                        color:'#353E47'
                    }},
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    },
                    interval:0
                }
            },
            yAxis: {
                splitLine: {show: true,
                    lineStyle:{
                        color:'#353E47'
                    }
                },
                axisTick: {show: false},
                axisLine: {show: true,
                    lineStyle:{
                        color:'#353E47'
                    }},
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    },
                    formatter:function(value,index){
                        var r = '';
                        if(value>100000000){//亿
                            r = (value/100000000).toFixed(1) + '亿';
                        }else if(value>10000){//万
                            r = (value/10000).toFixed(1) + '万';
                        }else{
                            r = value;
                        }
                        return r;
                    }
                }
            },

            series: [{
                name: 'hill',
                type: 'scatter',
                barCategoryGap: '10%',
                symbol: 'circle',
                symbolSize:35,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#4BB60B','#2EE466','#53D6CB','#4ED3FE','#4E5FFE','#9F31FD','#E221FF'
                            ];
                            return colorList[params.dataIndex%colorList.length]
                        },
                        label:{
                            show:true,
                            position:'inside',
                            // formatter:'{c}'
                            formatter:function(value,index){
                                var r = '';
                                if(value.data>100000000){//亿
                                    r = (value.data/100000000).toFixed(1) + '亿';
                                }else if(value.data>10000){//万
                                    r = (value.data/10000).toFixed(1) + '万';
                                }else{
                                    r = value.data;
                                }
                                return r;
                            }
                        }
                    },
                    emphasis: {
                        // opacity: 1
                    }
                },
                data: [50000, 62537, 20005,124757,72433,29634,85356],
                z: 10
            }]
        };
        myCharts.clear();
        myCharts.setOption(option);
    };
    /**全市监控点位统计**/
    var loadqsjkdw = function () {
        var myCharts = echarts.init(document.getElementById('qsjkdwEcharts'));
        var option = {

            grid: {
                left: '5px',
                right: '0%',
                bottom: '18%',
                top:'10%',
            },
            tooltip: {
                show: "true",
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter:'{b0}:{c0}'
            },
            yAxis: {
                show:false,
                splitLine: {show: false,
                    lineStyle:{
                        color:'#353E47'
                    }
                },
                axisTick: {show: false},
                axisLine: {show: true,
                    lineStyle:{
                        color:'#353E47'
                    }},
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'
                    },
                    formatter:function(value,index){
                        var r = '';
                        if(value>100000000){//亿
                            r = (value/100000000).toFixed(1) + '亿';
                        }else if(value>10000){//万
                            r = (value/10000).toFixed(1) + '万';
                        }else{
                            r = value;
                        }
                        return r;
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#353E47',
                        }
                    },
                    axisLabel:{
                        textStyle:{
                            color:'#fff'
                        },
                        interval:0
                    },
                    data: ["南京","苏州","无锡","常州","南通","徐州","淮安","镇江","泰州"]
                }
            ],
            series: [
                {
                    name: '',
                    type: 'bar',
                    barWidth:'20px',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00d891'
                            }, {
                                offset: 1,
                                color: '#00579a'
                            }]),
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    data:[
                        {value:'23', name:'亭湖区'},
                        {value:'24', name:'盐都区'},
                        {value:'25', name:'大丰区'},
                        {value:'26', name:'响水县'},
                        {value:'27', name:'滨海县'},
                        {value:'28', name:'阜宁县'},
                        {value:'30', name:'射阳县'},
                        {value:'31', name:'建湖县'},
                        {value:'32', name:'东台市'}
                    ]
                }

            ]
        };
        myCharts.clear();
        myCharts.setOption(option);
        myCharts.on("click",function(e){
            loadsqjkdw();
        });
    };
    var loadsqjkdw = function () {
        var myCharts = echarts.init(document.getElementById('qsjkdwEcharts'));
        var option =  {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            toolbox:{
                show:true,
                showTitle:true,
                top:0,
                right:20,
                iconStyle:{
                    normal:{color:'#30B5FF'}
                },
                feature:{
                    myBack:{
                        show:true,
                        title:'返回',
                        icon:'path://M940.748908 897.124226s-8.766506 22.571552-20.437775 0c0 0-130.44811-393.710528-448.442318-294.543139v122.214024s-5.099973 71.856272-67.774042 25.057546L91.42784 479.953413s-66.293503-36.076599 4.026941-85.421729L411.444222 123.033132s47.507255-33.882413 58.944055 21.68282l0.351192 131.869262c0.060409 0.059385 592.695474 28.434319 470.009439 620.539012z',
                        onclick:function (a) {
                            loadqsjkdw();
                        }
                    }
                }
            },
            xAxis: {
                type: 'category',
                axisLine:{
                    show: true,
                    lineStyle:{
                        color:'#353E47'
                    }
                },
                axisTick: {
                    show:false
                },
                axisLabel : {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                },
                data: ['办案区','办公区','业务区','其他']
            },
            grid: {
                left: '0px',
                right: '10px',
                bottom: '10px',
                top:'25px',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                show:false,
                axisLine:{
                    show: true,
                    lineStyle:{
                        color:'#353E47'
                    }
                },
                splitLine: {show: true,
                    lineStyle:{
                        color:'#353E47'
                    }
                },
                axisTick: {
                    show:false
                },
                axisLabel : {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter:function(value,index){
                        var r = '';
                        if(value>100000000){//亿
                            r = (value/100000000).toFixed(1) + '亿';
                        }else if(value>10000000){//万
                            r = (value/10000000).toFixed(1) + '千万';
                        }else if(value>10000){//万
                            r = (value/10000).toFixed(1) + '万';
                        }else{
                            r = value;
                        }
                        return r;
                    }
                }
            },
            series: [
                {
                    name: '县区监控点位分布',
                    type: 'line',
                    lineStyle:{
                        normal:{
                            color:'#2EE466'
                        }
                    },
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00d891'
                            }, {
                                offset: 1,
                                color: '#00579a'
                            }]),
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    data: [102555,22226,44248,9634]
                }

            ]
        };
        myCharts.clear();
        myCharts.setOption(option);
    };
    return {
        init: init
    }
}();