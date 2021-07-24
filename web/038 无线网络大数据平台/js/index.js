     //数字跳动
    //  var num = document.getElementByName("id").innerText;
    //     // alert(num);
    //     function modify(){
    //     //修改
    //         num=parseInt(num)+1;
    //         // alert("00000"+num);
    //         document.getElementByName("id").innerText=num;
    //     };
    // window.setInterval("modify()",60000);

    var s;
    function resize() {
      s = window.screen.width / 1920;
      document.body.style.transformOrigin = '0 0';
      document.body.style.transform = 'scale(' + s + ',' + s + ')';
      document.body.style.width = window.innerWidth / s + 'px';
      document.body.style.height = window.innerHeight / s + 'px';
    }
    window.onresize = function () {
      resize();
    }
    resize();

    var docs = document.getElementsByName("id");
    function modify(){
    //修改
     for (var i = 0; i < docs.length; i++) {
      var num = docs[i].innerText;
      num=parseInt(num)+1;
      docs[i].innerText=num;
     }
     
    }
    window.setInterval("modify()",60000);

$(function () {


    echart_1();
    echart_2();
    echart_22();
    echart_24();
    echart_15();

    echart_3();
    echart_33();
  
    echart_5();
    echart_52();
    echart_53();
    echart_54();
    echart_55();
    echart_56();
    echart_57();
    echart_58();
    echart_6();
    echart_7();
    echart_8();
    echart_91();
    echart_92();
    // modify();




    function echart_1() {
       
        var myChart = echarts.init(document.getElementById('chart_1'));
        
         var option = {
            // title: {
            //     text: 'ECharts 入门示例'
            // },
            color:['#ef5f2b','#4a6ac4','#77cd63','#a325c0','#369ebc','#e2a83f'],
            tooltip: {},
            legend: {
                data:['GSM','WCDMA','LTE','WLAN','NB-LOT','LORA'],
                textStyle:{
                    color:"#fff",
                    fontSize: 10
                },
                icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 8,  // 设置宽度
                itemHeight: 8, // 设置高度
                itemGap: 10,// 设置间距
                padding: [40, 10, 15, 20]    // [5, 10, 15, 20]

            },
            dataset: {
                source: [
                    ['x','需整改','需增补','需新建','需扩容'],
                    ['GSM', 10, 0, 0, 0, 0, 0],
                    ['WCDMA', 20, 0, 0, 0, 0, 0],
                    ['LTE', 125, 124, 226, 38, 45, 29],
                    ['WLAN', 38, 36, 148, 13, 25, 10],
                    ['NB-LOT', 25, 43, 38, 30],
                    ['LORA', 28, 31, 26, 12]
                ]
            },
            xAxis: [
                {
                    // data: ['需整改','需增补','需新建','需扩容'],
                    type: 'category', gridIndex: 0,
                    //设置坐标轴字体颜色和宽度
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                        }
                    },
                    axisLabel: {   //x轴文字样式
                            textStyle: {
                                fontSize: 13
                            }
                    },
                }

            ],
            yAxis: [
                {
                    gridIndex: 0,
                 //设置坐标轴字体颜色和宽度
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                        }
                    },
                    axisLabel: {   //x轴文字样式
                            textStyle: {
                                fontSize: 10
                            }
                    },
                }
            ],
            grid: [
                {top: '22%',
                bottom: '20%',
                // left: '10%',
                // right:'5%'
            },
            ],
            series: [
                // These series are in the first grid.
                {type: 'bar', seriesLayoutBy: 'row', barWidth:14, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:14, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:14, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:14, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:14, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:14, barGap:'10%',},
                // These series are in the second grid.
            ]
               
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // })
    }

   
    function echart_22() {
           // 基于准备好的dom，初始化echarts实例
           var myChart = echarts.init(document.getElementById('chart_22'));
            option = {
                title: {
                    text: '在网直放站现状',top:'10%',left:'center',
                    textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小

                    textAlign:'center'   //水平对齐
                },

                      
                },
            color:['#218BB4','#5AA949','#C23531','#7121B4'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                itemWidth: 8,  // 设置宽度
                itemHeight: 8, // 设置高度
                textStyle:{
                            color:"#fff",
                            fontSize: 10
                        },
                  orient: 'vertical',
                  left: 'center',  //图例距离左的距离
                  top:'24%',
                data:['干线放大器','模拟直放站','','无线直放站','数字直放站'],//图例换行

            },


            grid: {
                left: '-20%',//生成的图片和左边的间距
                // right: '2%',//生成的图片和右边的间距’,
                // bottom: '10%',//生成的图片和底部的间距
                top: '20%',//生成的图片和顶部的间距
                containLabel: true//为ture才会生效以上的设置
            },

            series: [
                {
                    name:'count',
                    type:'pie',
                    radius: ['30%', '55%'],
                    center: ['50%', '70%'],   //在div中位置
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{d}%',       //显示的内容
                            position: 'inner',
                            textStyle: {
                                fontSize: '10',
                                color:'#fff'
                            }
                        },

                        // emphasis: {
                        //     show: true,
                        //     textStyle: {
                        //         fontSize: '12',
                        //         fontWeight: 'bold'
                        //     }
                        // }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:10, name:'干线放大器'},
                        {value:5, name:'无线直放站'},
                        {value:15, name:'模拟直放站'},
                        {value:70, name:'数字直放站'}
                    ]
                }
            ]
        };
           // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    function echart_2() {
           // 基于准备好的dom，初始化echarts实例
           var myChart = echarts.init(document.getElementById('chart_2'));
            option = {
                title: {
                    text: '在网分布系统现状',top:'10%',left:'center',
                    textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小

                    textAlign:'center'   //水平对齐
                },

                      
                },
            color:['#218BB4','#5AA949','#7121B4','#C23531'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                itemWidth: 8,  // 设置宽度
                itemHeight: 8, // 设置高度
                textStyle:{
                            color:"#fff",
                            fontSize: 10
                        },
                  orient: 'vertical',
                  left: 'center',  //图例距离左的距离
                  top:'24%',
                data:['已归档站点','已拆除站点','','在建站点','改造站点'],//图例换行

            },


            grid: {
                left: '-20%',//生成的图片和左边的间距
                // right: '2%',//生成的图片和右边的间距’,
                // bottom: '10%',//生成的图片和底部的间距
                top: '25%',//生成的图片和顶部的间距
                containLabel: true//为ture才会生效以上的设置
            },

            series: [
                {
                    name:'count',
                    type:'pie',
                    radius: ['30%', '55%'],
                    center: ['50%', '70%'],   //在div中位置
                    avoidLabelOverlap: false,
                    label:{

                        normal: {
                            show: true,
                            position: 'inner',
                            formatter: '{d}%',       //显示的内容
                            textStyle: {
                                fontSize: '10',
                                color:'#fff'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
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
                        {value:70, name:'已归档站点'},
                        {value:5, name:'已拆除站点'},
                        {value:10, name:'在建站点'},
                        {value:15, name:'改造站点'}
                    ]
                }
            ]
        };
           // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    
    //echart_3
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        option = {
            // title: {
            //     text: '在网分布系统现状
            //     在网直放站现状
            //     分地市分布系统现状'
            // },
            title: {
                    text: '分地市分布系统现状',top:'0%',left:'center',
                    textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小

                    textAlign:'center'   //水平对齐
                },

                      
                },
            tooltip: {
                trigger: 'axis'
            },
            textStyle : {
                fontWeight : 'normal',     //显示字体粗细等
                fontSize : 10
            },
            legend: {
                data:['已归档站点数','已拆除站点数','在建站点','改造站点'],
                textStyle:{
                    fontSize: 10,
                    color: '#fff'
                },
                top: '10%'
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#77cd63','#44AFF0',],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['杭州','衢州','舟山','宁波','温州','嘉兴','金华','绍兴','丽水','台州','湖州'],
                splitLine: {
                    show: false
                },
                axisLabel: {   //x轴文字样式
                            textStyle: {
                                fontSize: 10
                            }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                // name: '数量',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: {   //y轴文字样式
                            textStyle: {
                                fontSize: 10
                            }
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'已归档站点数',
                    type:'line',
                    data:[4550, 1260, 710, 3970, 3467, 3400, 2989, 2019, 1800, 1802, 1780]
                },
                {
                    name:'已拆除站点数',
                    type:'line',
                    data:[905, 1, 1, 230, 480, 400, 20, 0, 0, 0, 0]
                },
                {
                    name:'在建站点',
                    type:'line',
                    data:[600, 450, 140, 600, 520, 450, 490, 300, 0, 500, 0]
                },
                {
                    name:'改造站点',
                    type:'line',
                    data:[700, 490, 150, 660, 520, 450, 490, 300, 0, 500, 0]
                }
                
            ]
        };
        myChart.setOption(option);
    }


    function echart_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_33'));
        myChart.clear();
        var option = {
                title: {
                    text: '材料数量统计',top:'4%',left:'center',
                    textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小

                    textAlign:'center'   //水平对齐
                },

                      
                },
                color: ['#38b3f1'],
                tooltip: {
                    trigger: 'axis',
                    // axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    //     type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    //     shadowOffsetX: 10
            
                    // }
                },
                textStyle: {
                    color: '#ccc'
                },
                grid: {
                    top: '20%',
                    left: '3%',
                    right: '3%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ["合路器","功分器","耦合器","全向吸顶天线","定向吸顶天线","板状天线","美化天线","八木天线"],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {   //x轴文字样式
                            textStyle: {
                                fontSize: 10,
                                interval: 0
                            }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {   //y轴文字样式
                            textStyle: {
                                fontSize: 10
                            }
                    },
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '40%',
                    // barGap:'10%',
                    barCategoryGap : '5%',
                    data: ["37077","1404960","2012952","2593964","162313","648970","35953","625"]
                }]
            };
            myChart.setOption(option);
    }

    function echart_24() {
           // 基于准备好的dom，初始化echarts实例
           var myChart = echarts.init(document.getElementById('chart_24'));
            option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            title: {
                text: '现网规模',
                textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小
                    textAlign:'center'   //水平对齐
                },left:'center'
            },
            color:['#ef5f2b','#4a6ac4','#77cd63'],
            legend: {
                orient: 'vertical',
                x: 'left',
                itemWidth: 8,  // 设置宽度
                itemHeight: 8, // 设置高度
                textStyle:{
                            color:"#fff",
                            fontSize: 10
                        },
                  orient: 'horizontal',
                  left: 'center',  //图例距离左的距离
                  top:'20%',
                data:['宏站','室分','微站'],//图例换行

            },


            grid: {
                left: '-20%',//生成的图片和左边的间距
                // right: '2%',//生成的图片和右边的间距’,
                // bottom: '10%',//生成的图片和底部的间距
                top: '20%',//生成的图片和顶部的间距
                containLabel: true//为ture才会生效以上的设置
            },

            series: [
                {
                    name:'count',
                    type:'pie',
                    radius: ['30%', '55%'],
                    center: ['48%', '65%'],   //在div中位置
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'inner',
                            formatter: '{d}%',       //显示的内容
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
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
                        {value:60, name:'宏站'},
                        {value:30, name:'室分'},
                        {value:10, name:'微站'}
                    ]
                }
            ]
        };
           // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    function echart_15() {
       
        var myChart = echarts.init(document.getElementById('chart_15'));
        
         var option = {
            title: {
                text: '档期规模',
                textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:14,     //大小
                    align:'center'   //水平对齐
                },left:'center'
            },
            color:['#ef5f2b','#4a6ac4','#77cd63'],
            tooltip: {},
            legend: {
                data:['宏站','室分','微站',],
                textStyle:{
                    color:"#fff",
                    fontSize: 10
                },
                icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 8,  // 设置宽度
                itemHeight: 8, // 设置高度
                itemGap: 10,// 设置间距
                padding: [40, 10, 4, 20]    // [5, 10, 15, 20]

            },
            dataset: {
                source: [
                    ['x','当期规模数','当期拍照数','当期在网数'],
                    ['宏站', 1250, 1400, 1100],
                    ['室分', 750, 760, 450],
                    ['微站', 980, 980, 580]
                ]
            },
            xAxis: [
                {
                    
                    type: 'category', gridIndex: 0,
                    //设置坐标轴字体颜色和宽度
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                        }
                    },
                    axisLabel: {   //x轴文字样式
                            textStyle: {
                                fontSize: 10
                            }
                    },
                }

            ],
            yAxis: [
                {
                    gridIndex: 0,
                 //设置坐标轴字体颜色和宽度
                    axisLine: {
                        lineStyle: {
                            color: "#fff",
                        }
                    },
                    axisLabel: {   //x轴文字样式
                            textStyle: {
                                fontSize: 10
                            }
                    },
                }
            ],
            grid: [
                {
                    top: '60',
                    right: '5',
                    bottom:'20'
                }
            ],
            series: [
                // These series are in the first grid.
                {type: 'bar', seriesLayoutBy: 'row', barWidth:12, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:12, barGap:'10%',},
                {type: 'bar', seriesLayoutBy: 'row', barWidth:12, barGap:'10%',},
                // These series are in the second grid.
            ]
               
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // })
    }


    //ditu
    // function echart_4() {
    //       // 基于准备好的dom，初始化echarts实例
    //       var myChart = echarts.init(document.getElementById('chart_4'));
    // }

    function echart_5() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '68%',
                    center: ["50%", "60%"], // 仪表位置
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {
                        show:false
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 554, name: '位置告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        // setInterval(function (){
        //     option.series[0].data[0].value = (Math.random()*20).toFixed(2) - 0;
        //     myChart.setOption(option,true);
        // },2000);
        data= [600,580,620,670,550,560,600,670,700,750,610,670,723,590,780,770,790,820,870,890,920,990];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_52() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_52'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '68%',
                    center: ["50%", "60%"], // 仪表位置
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show: false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 242, name: '数字型号异常告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        // setInterval(function (){
        //     option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        //     myChart.setOption(option,true);
        // },2000);
        data= [300,380,420,370,450,360,500,470,500,550,410,570,423,590,480,470,540,620,570,690,770,650];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_53() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_53'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,      //表盘最大值      
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '68%',
                    center: ["50%", "60%"], // 仪表位置
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 62, name: '监控无响应告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        data= [40,88,267,100,55,65,178,82,30,66,76,67,45,79,89,90,200,120,300,230,56,70];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_54() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_54'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '68%',
                    center: ["50%", "60%"], // 仪表位置
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 256, name: '接收电平强度告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        // setInterval(function (){
        //     option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        //     myChart.setOption(option,true);
        // },2000);
        data= [600,240,300,278,330,380,440,670,500,559,340,400,278,389,456,290,390,400,450,470,700,720];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_55() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_55'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '68%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 53, name: '光收发告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        // setInterval(function (){
        //     option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        //     myChart.setOption(option,true);
        // },2000);
        data= [100,180,220,320,450,160,200,270,300,450,610,270,323,490,320,370,490,520,670,700,720,890];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_56() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_56'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '65%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 48, name: '功放过温告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        data= [20,180,220,170,50,90,100,180,300,150,210,170,50,70,110,77,59,30,50,190,210,390];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_57() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_57'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '65%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 554, name: '下行输入欠功率告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        // setInterval(function (){
        //     option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        //     myChart.setOption(option,true);
        // },2000);
        data= [600,580,700,770,850,960,500,670,700,450,670,470,780,490,520,600,690,700,750,870,670,800];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }
    function echart_58() {
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_58'));
        var option = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            // toolbox: {
            //     show : true,
            //     feature : {
            //         mark : {show: true},
            //         restore : {show: true},
            //         saveAsImage : {show: true}
            //     }
            // },
            series : [
                {
                    name:'指标',
                    type:'gauge',                
                    min:0,
                    max:1000,            
                    splitNumber: 10,       // 分割段数，默认为5
                    radius: '68%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#228b22'],[0.8, '#48b'],[1, '#ff4500']], 
                            width: 2, //仪表盘外围圆宽度
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        splitNumber: 5,   // 每份split细分多少段
                        length :6,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:false,
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :2,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:2,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer : {
                        width : 2
                    },
                    title : {
                        show : true,
                        offsetCenter: [0, '100%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 10,
                            color: '#fff',
                        }
                    },
                    detail : {
                        formatter:'{value}',
                        offsetCenter: [0, '30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 14,
                            color: '#fff'
                        }
                    },
                    data:[{value: 46, name: '门禁告警'}]
                }
            ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
        
        data= [10,230,320,170,55,300,400,67,100,150,210,370,423,90,180,270,390,420,70,190,220,390];
        index=0;
            setInterval(function(){//将自己的值赋予 option.series[ 0 ].data[ 0 ].value
                option.series[0].data[0].value = data[index++%data.length];
                myChart.setOption(option, true);
            }, 2000);
           
    }

    function echart_6(){
        var myChart = echarts.init(document.getElementById('chart_6'));
        option = {
            // backgroundColor: '#18163B',
            title: {
                    text: '通过告警算法预测故障原因',
                    textStyle:{
                    color:'#fff',        //颜色
                    fontStyle:'normal',     //风格
                    fontWeight:'normal',    //粗细
                    // fontFamily:'Microsoft yahei',   //字体
                    fontSize:12,     //大小
                    
                },left:'center' 
            },
            grid: {
                top: '10%',
                right: '5%',
                left: '10%',
                bottom: '30%'
            },
            xAxis: [{
                type: 'category',
                color: '#fff',
                data: ['参数', '延伸系统', '老旧隐患','设备', '传输/线路', '动力'],
                axisPointer: {
                    type: 'line'
                },
                axisLine: {
                    lineStyle: {
                        color: '#272456'
                    }
                },
                axisLabel: {
                    margin: 10,
                    color: '#fff',
                    textStyle: {
                        fontSize: 10
                    },
                },
            }],
            yAxis: [{
                min: 0,
                max: 600,
                splitNumber : 4,
                axisLabel: {
                    formatter: '{value}',
                    color: '#fff',
                    interval:0,
                    textStyle: {
                        fontSize: 10
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#272456'
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: [80, 150, 250, 240, 320, 550],
                barWidth: '10px',
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#41E1D4' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#10A7DB' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [5, 5, 0, 0],
                        shadowColor: 'rgba(0,255,225,1)',
                        shadowBlur: 4,
                    }
                },
                // label: {
                //     normal: {
                //         show: true,
                //         lineHeight: 10,
                //         width: 60,
                //         height: 20,
                //         backgroundColor: '#252453',
                //         borderRadius: 200,
                //         position: ['-8', '-30'],
                //         distance: 1,
                //         formatter: [
                //             '    {d|●}',
                //             ' {a|{c}}     \n',
                //             '    {b|}'
                //         ].join(','),
                //         rich: {
                //             d: {
                //                 color: '#3CDDCF',
                //             },
                //             a: {
                //                 color: '#fff',
                //                 align: 'center',
                //             },
                //             b: {
                //                 width: 1,
                //                 height: 30,
                //                 borderWidth: 1,
                //                 borderColor: '#234e6c',
                //                 align: 'left'
                //             },
                //         }
                //     }
                // }
            }]
        };
        myChart.setOption(option);

    }
    function echart_7(){
            var myChart = echarts.init(document.getElementById('chart_7'));
            function showProvince() {
                   myChart.setOption(option = {
                       backgroundColor:'' ,//设置无背景色
                       visualMap: {
                           show: false,
                           min: 0,
                           max: 100,
                           left: 'left',
                           top: 'bottom',
                           text: ['高', '低'], // 文本，默认为数值文本
                           calculable: true,
                           // inRange: {
                           //     color: ['yellow', 'lightskyblue', 'orangered']
                           // }
                       },
                        grid: {
                            
                            // right: '2%',//生成的图片和右边的间距’,
                            // bottom: '10%',//生成的图片和底部的间距
                            top: '-20px',//生成的图片和顶部的间距
                            containLabel: true//为ture才会生效以上的设置
                        },
                       series: [{
                           type: 'map',
                           mapType: 'zhejiang',
                           roam: true,
                           label: {
                               normal: {
                                   show: true,
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
                           // itemStyle: {
                           //     normal: {
                           //         borderColor: '#389BB7',
                           //         areaColor: '#fff',
                           //     },
                           //     emphasis: {
                           //         areaColor: '#389BB7',
                           //         borderWidth: 0
                           //     }
                           // },
                            itemStyle: {
                                normal: {
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
                                            color: 'rgba(47,79,79, .1)' // 100% 处的颜色
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
                            },
                           animation: false,
                           data: [{
                               name: '丽水',
                               
                           }, {
                               name: '杭州',
                               
                           }, {
                               name: '温州',
                               
                           }, {
                               name: '宁波',
                               
                           }, {
                               name: '舟山',
                               // value: 88  去掉则透明
                           }, {
                               name: '台州',
                               
                           }, {
                               name: '金华',
                               
                           }, {
                               name: '衢州',
                               
                           }, {
                               name: '绍兴',
                               
                           }, {
                               name: '嘉兴',
                               
                           }, {
                               name: '湖州',
                               
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
    function echart_8(){
        var myChart = echarts.init(document.getElementById('chart_8'));
         var data = [{
             "name": "FDD-1800小区占比",
             "value": 10
         }, {
             "name": "FDD-900小区占比",
             "value": 10
         }, {
             "name": "A频小区占比",
             "value": 10
         }, {
             "name": "E频小区占比",
             "value": 10
         }, {
             "name": "D频小区占比",
             "value": 20
         }, {
             "name": "F频小区占比",
             "value": 30
         }, ]


         option = {

             color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
             // backgroundColor: '#000',
             title: {
                 // text: '总数',
                 // subtext: 7789,
                 // textStyle: {
                 //     color: '#f2f2f2',
                 //     fontSize: 16,
                 //     // align: 'center'
                 // },
                 // subtextStyle: {
                 //     fontSize: 30,
                 //     color: ['#ff9d19']
                 // },
                 // x: 'center',
                 // y: 'center',
             },
             grid: {
                 bottom: 150,
                 left: 100,
                 right: '10%'
             },
             // legend: {
             //     orient: 'vertical',
             //     top: "middle",
             //     right: "1%",
             //     textStyle: {
             //         color: '#f2f2f2',
             //         fontSize: 12,

             //     },
             //     itemWidth: 15,  // 设置宽度
             //        itemHeight: 8, // 设置高度
             //     icon: 'roundRect',
             //     data: data,
             // },
             series: [
                 // 主要展示层的
                 {
                     radius: ['20%', '51%'],
                     center: ['45%', '45%'],
                     type: 'pie',
                     label: {
                         normal: {
                             show: true,
                             formatter: "{b}",
                             textStyle: {
                                 fontSize: 10,

                             },
                             position: 'outside'
                         },
                         emphasis: {
                             show: true
                         }
                     },
                     labelLine: {
                         normal: {
                             show: true,
                             length: 5,
                             length2: 10
                         },
                         emphasis: {
                             show: true
                         }
                     },
                     // name: "民警训练总量",
                     data: data,

                 },
                 // 边框的设置
                 {
                     radius: ['20%', '26%'],
                     center: ['45%', '45%'],
                     type: 'pie',
                     label: {
                         normal: {
                             show: false
                         },
                         emphasis: {
                             show: false
                         }
                     },
                     labelLine: {
                         normal: {
                             show: false
                         },
                         emphasis: {
                             show: false
                         }
                     },
                     animation: false,
                     tooltip: {
                         show: false
                     },
                     data: [{
                         value: 1,
                         itemStyle: {
                             color: "rgba(250,250,250,0.3)",
                         },
                     }],
                 }, {
                     name: '外边框',
                     type: 'pie',
                     clockWise: false, //顺时加载
                     hoverAnimation: false, //鼠标移入变大
                     center: ['45%', '45%'],
                     radius: ['55%', '55%'],
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     data: [{
                         value: 9,
                         name: '',
                         itemStyle: {
                             normal: {
                                 borderWidth: 2,
                                 borderColor: '#0b5263'
                             }
                         }
                     }]
                 },
             ]
         };// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    // function echart_91() {
       
    //     var myChart = echarts.init(document.getElementById('chart_91'));
        
    //      var option = {
    //         title: {
    //             text: '4G覆盖能力',
    //             textStyle:{
    //                 color:'#fff',        //颜色
    //                 fontStyle:'normal',     //风格
    //                 fontWeight:'normal',    //粗细
    //                 // fontFamily:'Microsoft yahei',   //字体
    //                 fontSize:14,     //大小
    //                 align:'center'   //水平对齐
    //             },left:'center'
    //         },
    //         color:['#ef5f2b','#4a6ac4'],
    //         tooltip: {},
    //         legend: {
    //             data:['杭州','全省'],
    //             textStyle:{
    //                 color:"#fff",
    //                 fontSize: 10
    //             },
    //             icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
    //             itemWidth: 8,  // 设置宽度
    //             itemHeight: 8, // 设置高度
    //             itemGap: 10,// 设置间距
    //             padding: [40, 10, 4, 20]    // [5, 10, 15, 20]

    //         },
    //         dataset: {
    //             source: [
    //                 ['x','MR覆盖率','4G驻留比','VO-LTE驻留比'],
    //                 ['杭州', 98, 100, 98],
    //                 ['全省', 98, 100, 98]
    //             ]
    //         },
    //         xAxis: [
    //             {
                    
    //                 type: 'category', gridIndex: 0,
    //                 //设置坐标轴字体颜色和宽度
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: "#fff",
    //                         // width: 20,
    //                     }
    //                 },
    //                 axisLabel: {   //x轴文字样式
    //                         textStyle: {
    //                             fontSize: 10
    //                         }
    //                 },
    //             }

    //         ],
    //         yAxis: [
    //             {
    //                 gridIndex: 0,
    //              //设置坐标轴字体颜色和宽度
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: "#fff",
    //                     }
    //                 },
    //                 axisLabel: {   //x轴文字样式
    //                         textStyle: {
    //                             fontSize: 10
    //                         }
    //                 },
    //             }
    //         ],
    //         grid: [
    //             {
    //                 top: '60',
    //                 right: '5',
    //                 bottom:'20'
    //             }
    //         ],
    //         series: [
    //             // These series are in the first grid.
    //             {type: 'bar', seriesLayoutBy: 'row', barWidth:20, barGap:'10%',},
    //             {type: 'bar', seriesLayoutBy: 'row', barWidth:20, barGap:'10%',},
    //             // These series are in the second grid.
    //         ]
               
    //     };
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     // window.addEventListener("resize", function () {
    //     //     myChart.resize();
    //     // })
    // }

    // function echart_92() {
       
    //     var myChart = echarts.init(document.getElementById('chart_92'));
        
    //      var option = {
    //         title: {
    //             text: '业务承载',
    //             textStyle:{
    //                 color:'#fff',        //颜色
    //                 fontStyle:'normal',     //风格
    //                 fontWeight:'normal',    //粗细
    //                 // fontFamily:'Microsoft yahei',   //字体
    //                 fontSize:14,     //大小
    //                 align:'center'   //水平对齐
    //             },left:'center'
    //         },
    //         color:['#ef5f2b','#4a6ac4'],
    //         tooltip: {},
    //         legend: {
    //             data:['业务量','业务占比'],
    //             textStyle:{
    //                 color:"#fff",
    //                 fontSize: 10
    //             },
    //             icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
    //             itemWidth: 8,  // 设置宽度
    //             itemHeight: 8, // 设置高度
    //             itemGap: 10,// 设置间距
    //             padding: [40, 10, 4, 20]    // [5, 10, 15, 20]

    //         },
    //         dataset: {
    //             source: [
    //                 ['x','VOLTE话务量（万ERL）','LTE流量TB'],
    //                 ['业务量', 310, 750],
    //                 ['业务占比', 10, 10]
    //             ]
    //         },
    //         xAxis: [
    //             {
                    
    //                 type: 'category', gridIndex: 0,
    //                 //设置坐标轴字体颜色和宽度
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: "#fff",
    //                         // width: 20,
    //                     }
    //                 },
    //                 axisLabel: {   //x轴文字样式
    //                         textStyle: {
    //                             fontSize: 10
    //                         }
    //                 },
    //             }

    //         ],
    //         yAxis: [
    //             {
    //                 gridIndex: 0,
    //              //设置坐标轴字体颜色和宽度
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: "#fff",
    //                     }
    //                 },
    //                 axisLabel: {   //x轴文字样式
    //                         textStyle: {
    //                             fontSize: 10
    //                         }
    //                 },
    //             }
    //         ],
    //         grid: [
    //             {
    //                 top: '60',
    //                 right: '5',
    //                 bottom:'20'
    //             }
    //         ],
    //         series: [
    //             // These series are in the first grid.
    //             {type: 'bar', seriesLayoutBy: 'row', barWidth:30, barGap:'10%',},
    //             {type: 'bar', seriesLayoutBy: 'row', barWidth:30, barGap:'10%',},
    //             // These series are in the second grid.
    //         ]
               
    //     };
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     // window.addEventListener("resize", function () {
    //     //     myChart.resize();
    //     // })
    // }



    //
    
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
