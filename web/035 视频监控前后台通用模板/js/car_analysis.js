/**
 * Created by Administrator on 2017/4/25.
 */
$(function(){
    var myChart = echarts.init($("#container")[0]);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient :'vertical',
            x : 'left',
            data:['卡车','挂车','防化车','普通货车',"防爆车",'液化车','冷藏车','其它']
        },

        calculable : false,
        series : [
            {
                name:'车辆类型占比',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {
                        value:124,
                        name:'卡车',
                        itemStyle:{
                            normal:{
                                color:""
                            }
                        }
                    },
                    {
                        value:86,
                        name:'挂车'
                    },
                    {
                        value:9,
                        name:'防化车'
                    },
                    {
                        value:9,
                        name:'普通货车'
                    },
                    {
                        value:9,
                        name:'防爆车'
                    },
                    {
                        value:39,
                        name:'液化车'
                    },
                    {
                        value:9,
                        name:'冷藏车'
                    },
                    {
                        value:39,
                        name:'其它'
                    }

                ]
            }
        ]
    };
    myChart.setOption(option);
});
$(function(){
    var myChart = echarts.init($("#container1")[0]);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['青年','中年','老年',"其他"]
        },

        calculable : false,
        series : [
            {
                name:'人员年龄段分析',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {
                        value:14,
                        name:'老年',
                        itemStyle:{
                            normal:{
                                color:""
                            }
                        }
                    },
                    {
                        value:9,
                        name:'青年'
                    },
                    {
                        value:9,
                        name:'中年'
                    },
                    {
                        value:39,
                        name:'其他'
                    }

                ]
            }
        ]
    };
    myChart.setOption(option);
});
$(function(){
    var myChart = echarts.init($("#container4")[0]);
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:[]
        },
        //toolbox: {
        //    show : true,
        //    //orient: 'vertical',
        //    x: 'right',
        //    y: 'top',
        //    feature : {
        //        mark : {show: true},
        //        dataView : {show: true, readOnly: false},
        //        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        //        restore : {show: true},
        //        saveAsImage : {show: true}
        //    }
        //},
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data:['化学品','射钉器材','印章','机修','散装加油','典当','烟花爆竹'],
                rotate:40,interval:0
            }
        ],

        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'危险品运输量（吨）',
                type:'bar',
                barWidth:'30',
                data:[927, 785, 652, 521, 157, 245, 121, 157],
                itemStyle: {
                    normal: {
                        color:"#269fec"
                    }
                }

            }
        ]
    };
    myChart.setOption(option);
});
$(function(){
    var myChart = echarts.init($("#container5")[0]);
    option = {

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['化学品','射钉器材','印章','机修','散装加油','典当','烟花爆竹']
        },

        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value',

            }
        ],
        series : [
            {
                name:'化学品',
                type:'line',
                data:[310, 302, 301, 34, 390, 330, 320,10, 302, 201, 334, 190,],


            },
            {
                name:'射钉器材',
                type:'line',
                data:[320, 302, 301, 334, 390, 330, 320,120, 302, 201, 334, 110,],


            },
            {
                name:'印章',
                type:'line',
                data:[320, 302, 301, 334, 390, 330, 320,120, 302, 201, 34, 190],


            },
            {
                name:'机修',
                type:'line',
                data:[320, 30, 301, 34, 90, 330, 320,120, 302, 201, 334, 90],


            },
            {
                name:'散装加油',
                type:'line',
                data:[20, 302, 301, 334, 390, 330, 30,120, 32, 201, 334, 10,],


            },
            {
                name:'典当',
                type:'line',
                data:[120, 132, 101, 34, 90, 30, 20,10, 132, 21, 134, 190],
            },
            {
                name:'烟花爆竹',
                type:'line',
                data:[120, 132, 101, 34, 90, 30, 20,10, 132, 21, 134, 190],


            }
        ]
    };
    myChart.setOption(option);
});


$(function(){
    var myChart = echarts.init($("#container7")[0]);
    option = {

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['计划', '实际']
        },

        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            }
        ],
        yAxis : [
            {
                type : 'value',

            }
        ],
        series : [
            {
                name:'计划',
                type:'line',
                data:[310, 302, 301, 34, 390, 330, 320,10, 302, 201, 334, 190,],


            },
            {
                name:'实际',
                type:'line',
                data:[320, 302, 301, 334, 390, 330, 320,120, 302, 201, 334, 110,],


            }

        ]
    };
    myChart.setOption(option);
});