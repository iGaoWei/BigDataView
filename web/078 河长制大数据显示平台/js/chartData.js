/**
 * Created by Administrator on 2017/5/17.
 */
// 营销分析

// 门票渠道饼图分析
$(function(){
    var myChart = echarts.init($(".dataLeft01Conentup02")[0]);
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['官网电商发售','景区窗口发售','合作商家推广','美图/糯米/携程'],
            textStyle:{color:'#1580d9'}
        },

        calculable : false,
        series : [
            {
                name:'发售渠道',
                type:'pie',
                radius : ['50%', '70%'],
                center: ['75%', '50%'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true,
                            position : 'center',
                            textStyle : {
                                fontSize : '13',
                                fontWeight : 'bold'
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'官网电商发售',itemStyle:{
                        normal:{color:'#ff7d2e'}
                    }},
                    {value:310, name:'景区窗口发售',itemStyle:{
                        normal:{color:'#ffb400'}
                    }},
                    {value:234, name:'合作商家推广',itemStyle:{
                        normal:{color:'#f0573d'}
                    }},
                    {value:135, name:'美图/糯米/携程',itemStyle:{
                        normal:{color:'#3d4145'}
                    }}

                ]
            }
        ]
    };


    myChart.setOption(option);
});
$(function(){
    var myChart = echarts.init($(".dataLeft01Conentdown")[0]);
    option = {

        grid:{
            x:'10%',
            y:'5%',
            x2:'5%',
            y2:'15%',
            borderWidth: 0
        },
        color:['#0555c2', '#2d95ed','#eee'],
        tooltip : {
            trigger: 'axis'
        },


        calculable : true,
        xAxis : [
            {
                type : 'category',
                splitLine:{
                    show:false
                },
                axisLabel: {
                    show: true,
                    axisLine:{
                        lineStyle:{
                            show:false
                        }

                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                boundaryGap : false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    axisLine:{
                        lineStyle:{
                            show:false
                        }


                    },
                    textStyle: {
                        color: '#fff',
                        fontsize:'0.5em'
                    }
                },

            }
        ],
        series : [
            {
                name:'峰值',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [320, 332, 1210, 246, 199, 530, 210, 230, 340, 256, 278, 300,320, 132, 101, 546, 299, 230, 210, 230, 240, 256, 278, 200]
            },

            {
                name:'峰值',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[120, 132, 191, 646, 199, 730, 210, 230, 240, 256, 178, 300,120, 132, 301, 546, 199, 230, 210, 230, 340, 256, 278, 300]
            }, {
                name:'入园人数',
                type:'line',
                smooth:true,
                data:[820, 632, 1101, 546, 599, 630, 810, 630, 540, 656, 1278, 700,820, 632, 601, 746, 599, 730, 610, 530, 840, 756, 678, 600]
            }
        ]
    };


    myChart.setOption(option);
    window.onresize = myChart.resize;
});
$(function(){
    var myChart = echarts.init($("#pieChart")[0]);
    option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#20d0ca', '#0a89d2','#f0573d'],
        // legend: {
        //     x : 'center',
        //     y : 'top',
        //     data:['个人','团购','旅行社'],
        //     textStyle:{
        //         color:'#fff'
        //     }
        // },

        calculable : false,
        series : [
            {
                name:'数据统计',
                type:'pie',
                radius : ['1%', 50],
                center : ['50%', '35%'],
                roseType : 'radius',
                width: '40%',       // for funnel
                max: 40,            // for funnel
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true
                        },
                        labelLine : {
                            show : true
                        }
                    }
                },
                data:[
                    {value:10, name:'个人'},
                    {value:5, name:'团购'},
                    {value:15, name:'旅行社'}

                ]
            },

        ]
    };



    myChart.setOption(option);
    window.onresize = myChart.resize;
});

$(function(){
    var myChart = echarts.init($(".weherChart")[0]);
    option = {
        grid:{
            x:'2%',
            y:'25%',
            x2:'2%',
            y2:'1%',
            borderWidth: 0
        },
        color:['#94bc3c', '#40cf28'],
        tooltip : {
            trigger: 'axis'
        },
        splitLine:{
            show:false
        },
        legend: {
            data:['2016年','2017年'],
            textStyle:{color:'#2c85ff'}
        },

        calculable : false,
        xAxis : [
            {
                type : 'category',
                axisLabel: {
                    show: false,

                },
                boundaryGap : false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                splitLine:{
                    show:false
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: false,

                },
                splitLine:{
                    show:false
                },
            }
        ],
        series : [
            {
                name:'2016年',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [320, 332, 501, 1246, 299, 530, 210, 230, 340, 656, 878, 300,320, 632, 901, 546, 299, 230, 210, 230, 240, 856, 278, 1200]
            },
            {
                name:'2017年',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[820, 1032, 901, 1046, 599, 230, 1210, 230, 540, 256, 1278, 300,1200, 532, 901, 746, 699, 1230, 1210, 630, 840, 656, 1278, 900]
            }

        ]
    };

    myChart.setOption(option);
    window.onresize = myChart.resize;
});