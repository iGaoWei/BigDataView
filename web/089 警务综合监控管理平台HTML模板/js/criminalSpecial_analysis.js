/**
 * Created by Administrator on 2017/4/25.
 */

$(function(){
    container();
    container1();
    container2();
    container3();
    container4();
    container5();

})
function container(){
    var orderMyChart = echarts.init($("#container")[0]);
  var  option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['刑释人员', '解教人员', '总数'],
            x : 'left'
        },

        calculable : false,
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                data: ['大化镇', '张家镇', '大风镇', '淮远镇', '清风镇', '马鞍镇', '湖阳镇']
            }
        ],
        series : [
            {
                name:'总数',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[320, 302, 301, 334, 390, 330, 320]
            },
            {
                name:'刑释人员',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'解教人员',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[220, 182, 191, 234, 290, 330, 310]
            }

        ]
    };

    orderMyChart.setOption(option);
}
function container1(){
    var orderMyChart = echarts.init($("#container1")[0]);
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['男性','女性','其它']
        },

        calculable : true,
        series : [
            {
                name:'类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'男性'},
                    {value:310, name:'女性'},

                    {value:1, name:'其它'}
                ]
            }
        ]
    };
    orderMyChart.setOption(option);
}
function container2(){
    var orderMyChart = echarts.init($("#container2")[0]);
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['青年','中年','老年']
        },

        calculable : true,
        series : [
            {
                name:'类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'中年'},
                    {value:310, name:'青年'},

                    {value:100, name:'老年'}
                ]
            }
        ]
    };
    orderMyChart.setOption(option);
}
function container3(){
    var orderMyChart = echarts.init($("#container3")[0]);
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['博士及以上','研究生','本科','专科','高中/中专/职高','初中','小学','其它']
        },

        calculable : true,
        series : [
            {
                name:'类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:35, name:'博士及以上'},
                    {value:110, name:'研究生'},
                    {value:310, name:'本科'},
                    {value:310, name:'专科'},
                    {value:310, name:'高中/中专/职高'},
                    {value:310, name:'初中'},
                    {value:310, name:'小学'},

                    {value:100, name:'其它'}
                ]
            }
        ]
    };
    orderMyChart.setOption(option);
}
function container4(){
    var orderMyChart = echarts.init($("#container4")[0]);
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['监外执行','管制','假释','缓刑','剥夺政治权']
        },

        calculable : true,
        series : [
            {
                name:'类型',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'监外执行'},
                    {value:310, name:'管制'},
                    {value:310, name:'缓刑'},
                    {value:310, name:'剥夺政治权'},

                    {value:100, name:'假释'}
                ]
            }
        ]
    };
    orderMyChart.setOption(option);
}
function container5(){
    var orderMyChart = echarts.init($("#container5")[0]);
    var option = {

        tooltip: {
            trigger: 'item'
        },

        calculable: true,
        grid: {
            borderWidth: 0,
            y: 80,
            y2: 60
        },
        xAxis: [
            {
                type: 'category',
                show: false,
                data: ['高新区', '成华区', '青阳区', '金牛区', '武侯区', '锦江区', '其它']
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false
            }
        ],
        series: [
            {
                name: '机构数统计',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{b}\n{c}'
                        }
                    }
                },
                data: [120,210,100,40,120,50,60,50],
                markPoint: {
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(0,0,0,0)',
                        formatter: function(params){
                            return '<img src="'
                                + params.data.symbol.replace('image://', '')
                                + '"/>';
                        }
                    },
                    data: [
                        {xAxis:0, y: 350, name:'高新区'},
                        {xAxis:1, y: 350, name:'成华区'},
                        {xAxis:2, y: 350, name:'青阳区'},
                        {xAxis:3, y: 350, name:'金牛区'},
                        {xAxis:4, y: 350, name:'武侯区'},
                        {xAxis:5, y: 350, name:'锦江区'},
                        {xAxis:6, y: 350, name:'其它'}


                    ]
                }
            }
        ]
    };
    orderMyChart.setOption(option);
}




