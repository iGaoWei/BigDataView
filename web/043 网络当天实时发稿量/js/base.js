//
$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

$(document).ready(function() {
    Highcharts.setOptions({
        colors: ['#8129dd', '#8ec63f','#2756ca','#f1b601','#f86423','#27aae3']
    });
    var chart1 = $("#container1").highcharts({
        chart: {
            renderTo: 'container1', //装载图表的div容器id
            type: 'bar',
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title: false,//主标题
        subtitle: false,//副标题
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        xAxis: {
            categories: ['阿克苏', '地阿娇', '萨克斯', '奥苏乔', '小乔','盎司看', '违纪', '万能家', '立海运', '阿萨'],
            labels: {
                style: {
                    color: '#9ea0ae'
                }
            },
            tickWidth:'0',
            tickColor:'#1c2a38',
            lineColor: '#1c2a38',
        }, // x系列设置
        yAxis: {
            // min: 0,
            title: {
                text: '排行榜（条）',
                align: 'high'
            },
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            labels: {
                overflow: 'justify'
            }
        },// y系列设置
        tooltip: {
            valueSuffix: ' 百万'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    color:'#fff',
                },
                borderColor: "",//去边框
                color:'#0084fe'
            }
        },
        legend:false,
        credits: {
            enabled: false
        },
        series: [{
            name: '发稿量',
            data: [635,400,300, 203,107,100,65,38,31, 5],
            color:'#0084fe',
            border:'#0084fe'
        }]
    });

    var chart2 = $("#container2").highcharts({
        chart: {
            renderTo: 'container2', //装载图表的div容器id
            type: 'bar',
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title: false,//主标题
        subtitle: false,//副标题
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        xAxis: {
            categories: ['阿克苏', '地阿娇', '萨克斯', '奥苏乔', '小乔','盎司看', '违纪', '万能家', '立海运', '阿萨'],
            labels: {
                style: {
                    color: '#9ea0ae'
                }
            },
            tickWidth:'0',
            tickColor:'#1c2a38',
            lineColor: '#1c2a38',
        }, // x系列设置
        yAxis: {
            // min: 0,
            title: {
                text: '排行榜（条）',
                align: 'high'
            },
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            labels: {
                overflow: 'justify'
            }
        },// y系列设置
        tooltip: {
            valueSuffix: ' 百万'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    allowOverlap: true,
                    color:'#fff',
                },
                borderColor: "",//去边框
                color:'#0084fe'
            }
        },
        legend:false,
        credits: {
            enabled: false
        },
        series: [{
            name: '发稿量',
            data: [635,400,300, 203,107,100,65,38,31, 5],
            color:'#0084fe',
            border:'#0084fe'
        }]
    });

    var chart3 = $("#jglxchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            type: 'column',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title:false,
        xAxis: {
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            lineColor: '#1c2a38',//轴线
            categories: ['宏观经济', '资本市场', '货币市场', '外汇市场', '债券市场','大宗商品']
        },
        yAxis: {
            min: 0,
            title:false,
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
                }//柱形图上方数据显示
            }
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {           //不显示阴影
                stacking: 'normal',
                bar: false,
                borderWidth: 0,  //柱子边框的大小
            },
        },
        series: [{
            name: '原创',
            data: [5, 3, 4, 7, 2,4]
        }, {
            name: '编辑',
            data: [2, 2, 3, 2, 1,7]
        }, {
            name: '编译',
            data: [3, 4, 4, 2, 5,3]
        }]
    });

    var chart4 = $("#qst-monthchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1
        },
        title: {
            text: false,
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            lineColor: '#1c2a38',
        },
        yAxis: {
            title: false,
            gridLineColor: '#1c2a38',
            tickColor:'#1c2a38'
        },
        tooltip: {
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        series: [{
            name: '全球财经',
            data: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 16, 12]
        }, {
            name: '宏观经济',
            data: [3, 5, 7, 9, 11, 13, 15,17, 19, 18, 17, 16]
        }, {
            name: '货币市场',
            data: [3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '外汇市场',
            data: [10, 14,18, 22, 30, 28, 26, 24, 22, 21, 20, 19]
        },{
            name: '债券市场',
            data: [6, 8, 10, 13, 15,16, 18, 19, 18, 17, 16, 15]
        },{
            name: '大宗商品',
            data: [8, 10, 12, 14, 16, 18, 16,14,13, 12,11, 10],
        }]
    });


    var chart5 = $("#qst-daychart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1
        },
        title: {
            text: false,
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tickColor:'#1c2a38',
            gridLineColor: '#1c2a38',
            lineColor: '#1c2a38',
        },
        yAxis: {
            title: false,
            gridLineColor: '#1c2a38',
            tickColor:'#1c2a38'
        },
        tooltip: {
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        series: [{
            name: '全球财经',
            data: [34, 3, 32, 7, 5, 22, 13, 15, 17, 19, 16, 12]
        }, {
            name: '宏观经济',
            data: [3, 5, 7, 3, 11, 13, 5,17, 0, 8, 7, 6]
        }, {
            name: '货币市场',
            data: [3, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: '外汇市场',
            data: [10, 14,18, 22, 30, 28, 26, 24, 22, 21, 20, 19]
        },{
            name: '债券市场',
            data: [6, 8, 10, 13, 15,16, 18, 19, 18, 17, 16, 15]
        },{
            name: '大宗商品',
            data: [8, 10, 12, 14, 16, 18, 16,14,13, 12,11, 10],
        }]
    });

    var chart6 = $("#rj-daychart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [20, 0 , 20, 0]
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}条</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        plotOptions: {
            pie: {
                borderWidth: 0,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    color:'#fff',
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} 条',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '80%',
            name: '发稿数量',
            data: [
                {name:'人工',   y: 45.0},
                {
                    name: '机器人',
                    y: 12.8,
                    sliced: true,
                    selected: true,
                }
            ]
        }]
    });

    var chart7 = $("#rj-monthchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            spacing : [20, 0 , 20, 0]
        },
        title: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}条</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        plotOptions: {
            pie: {
                borderWidth: 0,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    color:'#fff',
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} 条',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            innerSize: '80%',
            name: '发稿数量',
            data: [
                {name:'人工',   y: 70.0},
                {
                    name: '机器人',
                    y: 30.0,
                    sliced: true,
                    selected: true,
                }
            ]
        }]
    });

    var chart8 = $("#fbt-monthchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: false,
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FFF'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '发稿量占比',
            data: [
                {
                    name: '全球财经',
                    y: 10,
                    sliced: true,
                    selected: true
                },
                ['宏观经济',   15.0],
                ['货币市场',       20.0],
                ['外汇市场',   15.0],
                ['债券市场',   5.0],
                ['大宗商品',   35.0],
            ]
        }]
    });

    var chart9 = $("#fbt-daychart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: false,
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || '#FFF'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '发稿量占比',
            data: [
                {
                    name: '全球财经',
                    y: 2,
                    sliced: true,
                    selected: true
                },
                ['宏观经济',   30],
                ['货币市场',       4.0],
                ['外汇市场',   24.0],
                ['债券市场',   5.0],
                ['大宗商品',   5.0],
            ]
        }]
    });

    var chart10 = $("#zxlxchart").highcharts({
        chart: {
            backgroundColor: '#1e2131',
            type: 'column',
            plotBorderColor: '#1c2a38',
            plotBorderWidth: 1,
        },
        title:false,
        xAxis: {
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            lineColor: '#1c2a38',//轴线
            categories: ['宏观经济', '资本市场', '货币市场', '外汇市场', '债券市场','大宗商品']
        },
        yAxis: {
            min: 0,
            title:false,
            gridLineColor: '#1c2a38',//网格线
            tickColor:'#1c2a38',//刻度线
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || '#fff'
                }//柱形图上方数据显示
            }
        },
        exporting:{ enabled:false, //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            itemStyle: { cursor: 'pointer', color: 								'#FFF' },
            itemHiddenStyle: { color: '#CCC' },
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {           //不显示阴影
                stacking: 'normal',
                bar: false,
                borderWidth: 0,  //柱子边框的大小
            },
        },
        series: [{
            name: '要闻',
            data: [15, 3, 24, 7, 2,4]
        }, {
            name: '快讯',
            data: [12, 2, 23, 2, 1,7]
        }, {
            name: '资讯',
            data: [13, 4,24, 2, 5,3]
        }]
    });





});