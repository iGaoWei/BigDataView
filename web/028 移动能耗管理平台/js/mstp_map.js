/*----------------------------------------------------------
map click events
------------------------------------------------------------*/
var area_map = {'xining':'西宁','haibei':'海北','haidong':'海东','haixi':'海西',
                'hainan':'海南','yushu':'玉树','huangnan':'黄南','guoluo':'果洛',
                'geermu':'洛尔木'};
var line_datas = {'xining':[[1,140], [2,150], [3,180], [4,160], [5,190], [6,170], [7,150], [8,160], [9,200], [10,160], [11,180],[12,200]],
                  'haibei':[[1,130], [2,120], [3,160], [4,150], [5,150], [6,150], [7,130], [8,140], [9,160], [10,160], [11,170],[12,120]],
                  'haidong':[[1,120], [2,150], [3,150], [4,110], [5,140], [6,130], [7,100], [8,130], [9,140], [10,170], [11,150],[12,130]],
                  'haixi':[[1,110], [2,140], [3,170], [4,160], [5,170], [6,170], [7,150], [8,110], [9,180], [10,140], [11,120],[12,150]],
                  'hainan':[[1,140], [2,130], [3,120], [4,140], [5,130], [6,170], [7,120], [8,160], [9,150], [10,130], [11,160],[12,140]],
                  'yushu':[[1,150], [2,110], [3,130], [4,150], [5,120], [6,130], [7,150], [8,150], [9,140], [10,150], [11,140],[12,100]],
                  'huangnan':[[1,160], [2,100], [3,110], [4,130], [5,110], [6,120], [7,140], [8,160], [9,120], [10,160], [11,130],[12,130]],
                  'guoluo':[[1,100], [2,130], [3,100], [4,120], [5,120], [6,140], [7,150], [8,120], [9,100], [10,110], [11,150],[12,160]]};
var bar_data1  = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data2  = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data3  = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data4  = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data5  = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data6  = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data7  = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data8  = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data9  = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data10 = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data11 = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data12 = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data13 = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data14 = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data15 = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data16 = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data17 = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data18 = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data19 = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data20 = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data21 = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];
var bar_data22 = [[1,5000], [2,5000], [3,5000],  [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000]]; 
var bar_data23 = [[1,60000],[2,55000],[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000]];
var bar_data24 = [[1,60200],[2,50900],[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000]];

var bar_datas = {
                  'xining':[{data : bar_data1,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data2,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data3,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],

                  'haibei':[{data : bar_data4,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data5,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data6,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],

                  'haidong':[{data : bar_data7,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data8,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data9,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],
                  'haixi':[{data : bar_data10,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data11,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data12,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],

                  'hainan':[{data : bar_data13,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data14,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data15,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],

                  'yushu':[{data : bar_data16,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data17,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data18,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],

                  'huangnan':[{data : bar_data19,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data20,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data21,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}],

                  'guoluo':[{data : bar_data22,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data23,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}},
                            {data : bar_data24,label: '照明能耗',bars : {show : true, barWidth : 0.3, order : 1,fill:1,lineWidth: 0,fillColor: 'rgba(255,255,255,0.6)'}}]
                };
function clk_map(area){
  //$(".absolute-area div").removeClass("active")
  //$(area).addClass("active");
  var a = $(area).attr('data');
  $(".area").text(area_map[a]);
  //lineChart.setData(line_datas[a]);
  //lineChart.draw();
}

/* --------------------------------------------------------
 Flot Charts
 -----------------------------------------------------------*/
var lineChart,barChart,pieChart,donutChart;
//Line Chart
$(function () {
    if ($('#line-chart')[0]) {
        var d1 = [[1,140], [2,150], [3,180], [4,160], [5,190], [6,170], [7,150], [8,160], [9,200], [10,160], [11,180],[12,200]];

        lineChart = $.plot('#line-chart', [ {
            data: d1,
            label: "用油量",

        },],

            {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 1,
                        fill: 0.25,
                    },

                    color: 'rgba(255,255,255,0.7)',
                    shadowSize: 0,
                    points: {
                        show: true,
                    }
                },

                yaxis: {
                    min: 0,
                    max: 300,
                    tickColor: 'rgba(255,255,255,0.15)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                xaxis: {
                    tickColor: 'rgba(255,255,255,0)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    }
                },
                grid: {
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.25)',
                    labelMargin:10,
                    hoverable: true,
                    clickable: true,
                    mouseActiveRadius:6,
                },
                legend: {
                    show: false
                }
            });

        $("#line-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#linechart-tooltip").html(item.series.label + ":" + y +"(吨)").css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#linechart-tooltip").hide();
            }
        });

        $("<div id='linechart-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }

});

//Bar Chart
$(function () {
    if ($("#bar-chart")[0]) {
        var data1 = [[3,5000], [4,5500], [5,6000], [6,9000], [7,8500], [8,4000], [9,5000],[10,8000],[11,6000],[12,3000],[1,5000],[2,5000]];
        var data2 = [[3,10000], [4,8000], [5,7000], [6,20000], [7,65000], [8,50000], [9,30000],[10,36000],[11,50000],[12,60000],[1,60000],[2,55000]];
        var data3 = [[3,60000], [4,58000], [5,60000], [6,61000], [7,59000], [8,65000], [9,50900],[10,60100],[11,50000],[12,60000],[1,60200],[2,50900]];
    
        var barData = new Array();

        barData.push({
                data : data1,
                label: '照明能耗',
                bars : {
                        show : true,
                        barWidth : 0.3,
                        order : 1,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.6)'
                }
        });
        barData.push({
                data : data2,
                label: '空调能耗',
                bars : {
                        show : true,
                        barWidth : 0.3,
                        order : 2,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.8)'
                }
        });
        barData.push({
                data : data3,
                label: '负载能耗',
                bars : {
                        show : true,
                        barWidth : 0.3,
                        order : 3,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.3)'
                }
        });

        //Display graph
        barChart = $.plot($("#bar-chart"), barData, {
                
                grid : {
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.25)',
                        show : true,
                        hoverable : true,
                        clickable : true,       
                },
                
                yaxis: {
                    tickColor: 'rgba(255,255,255,0.15)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                
                xaxis: {
                    tickColor: 'rgba(255,255,255,0)',
                    tickDecimals: 0,
                    font :{
                        lineHeight: 13,
                        style: "normal",
                        color: "rgba(255,255,255,0.8)",
                    },
                    shadowSize: 0,
                },
                
                legend : true,
                tooltip : true,
                tooltipOpts : {
                        content : "<b>%x</b> = <span>%y</span>",
                        defaultTheme : false
                }

        });
        
        $("#bar-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#barchart-tooltip").html(item.series.label + ":" + y+"(度)").css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#barchart-tooltip").hide();
            }
        });

        $("<div id='barchart-tooltip' class='chart-tooltip'></div>").appendTo("body");

    }

});

//Pie Chart
$(function(){
    var pieData = [
                    {data: 1, color: 'rgba(255,200,255,0.8)',label:'照明能耗'},
                    {data: 2, color: 'rgba(255,255,200,0.8)',label:'空调能耗'},
                    {data: 3, color: 'rgba(200,255,255,0.8)',label:'负载能耗'}
                ];
    var donutPieData = [
        {data: 1, color: 'rgba(255,200,255,0.8)',label:'其他油机'},
        {data: 2, color: 'rgba(255,255,200,0.8)',label:'机房油机'},
        {data: 3, color: 'rgba(200,255,255,0.8)',label:'基站油机'}
    ];
    if($('#donut-chart')[0]){
        donutChart = $.plot('#donut-chart', donutPieData, {
            series: {
                pie: {
                    innerRadius: 0.5,
                    show: true,
                    stroke: { 
                        width: 0,
                        
                    },
                    fill: 1,
                    fillColor: {
                        colors : ['rgba(255, 255, 255, 0.5)', 'rgba(0, 215, 76, 0.8)', 'rgba(255,255,255,0.8)']
                    },
                    label: {
                        show: true,
                        radius: 3/4,
                        formatter: function(label, series){
                            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                        },
                        background: { 
                            opacity: 0.5,
                            color: '#000'
                        }
                    }
                }
            }
        });
    }
    
    if($('#pie-chart')[0]){
        pieChart = $.plot('#pie-chart', pieData, {
            series: {
                pie: {
                    show: true,
                    stroke: { 
                        width: 0,
                        
                    },
                    label: {
                        show: true,
                        radius: 3/4,
                        formatter: function(label, series){
                            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                        },
                        background: { 
                            opacity: 0.5,
                            color: '#000'
                        }
                    }
                }
            }
        });
    }
});



//Dynamic Chart
$(function() {
    if ($('#dynamic-chart')[0]) {
        var data = [],
            totalPoints = 300;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);

            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 300;
                var y = prev + Math.random() * 10 - 5;
                if(y<230) y=250;
                if(y>380) y=350;
                data.push(y);
            }

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }


        var updateInterval = 200;
        var plot = $.plot("#dynamic-chart", [ getRandomData(),getRandomData() ], {
            series: {
                label: "能耗",
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: 0.25,
                },

                color: 'rgba(255,255,255,0.2)',
                shadowSize: 0,
            },
            yaxis: {
                min: 200,
                max: 400,
                tickColor: 'rgba(255,255,255,0.15)',
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "rgba(255,255,255,0.8)",
                },
                shadowSize: 0,

            },
            xaxis: {
                tickColor: 'rgba(255,255,255,0.15)',
                show: true,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "rgba(255,255,255,0.8)",
                },
                shadowSize: 0,
                min: 0,
                max: 300
            },
            grid: {
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,0.25)',
                labelMargin:10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius:6,
            },
            legend: {
                show: false
            }
        });

        function update() {
            plot.setData([getRandomData()]);
            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();

        $("#dynamic-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#dynamic-chart-tooltip").html(item.series.label + ":" + y+"(度)").css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#dynamic-chart-tooltip").hide();
            }
        });

        $("<div id='dynamic-chart-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }
});




/* --------------------------------------------------------
 Sparkline
 -----------------------------------------------------------*/
(function(){
    //Bar
    $("#stats-bar-1").sparkline([6,4,8,6,5,6,7,8,3,5,9,5,8,3], {
        type: 'bar',
        height: '50px',
        barWidth: 4,
        barColor: '#fff',
        barSpacing: 3,
    });

    $("#stats-bar-2").sparkline([4,7,6,2,5,3,8,6], {
        type: 'bar',
        height: '50px',
        barWidth: 4,
        barColor: '#fff',
        barSpacing: 3
    });

    $("#stats-bar-3").sparkline([4,7,6,2,5,3,8,6], {
        type: 'bar',
        height: '50px',
        barWidth: 4,
        barColor: '#fff',
        barSpacing: 3
    });

    //Line
    $("#stats-line").sparkline([9,4,6,5,6,4,5,7,9,3,6,5], {
        type: 'line',
        width: '100%',
        height: '65',
        lineColor: 'rgba(255,255,255,0.4)',
        fillColor: 'rgba(0,0,0,0.2)',
        lineWidth: 1.25,
    });

    $("#stats-line-2").sparkline([5,6,3,9,7,5,4,6,5,6,4,9], {
        type: 'line',
        width: '100%',
        height: '65',
        lineColor: 'rgba(255,255,255,0.4)',
        fillColor: 'rgba(0,0,0,0.2)',
        lineWidth: 1.25,
    });

    $("#stats-line-3").sparkline([8,11,9,12,10,9,13,11,12,11,10], {
        type: 'line',
        height: '65',
        width: '100%',
        lineColor: 'rgba(255,255,255,0.4)',
        lineWidth: 1.25,
        fillColor: 'rgba(0,0,0,0.2)',
        barWidth: 5,
        barColor: '#C5CED6',

    });

    $("#stats-line-4").sparkline([4,6,7,8,9,5,3,6,5,6,7,5,7,2,7], {
        type: 'line',
        height: '65',
        width: '100%',
        lineColor: 'rgba(255,255,255,0.4)',
        lineWidth: 1.25,
        fillColor: 'rgba(0,0,0,0.2)',
        barWidth: 5,
        barColor: '#C5CED6',

    });

    $("#stats-line-5").sparkline([10,9,12,10,9,13,11,12,11,10,12], {
        type: 'line',
        height: '65',
        width: '80',
        lineColor: 'rgba(255,255,255,0.4)',
        fillColor: 'rgba(0,0,0,0.2)',
        lineWidth: 1.25,
        barWidth: 5,
        barColor: '#C5CED6',

    });

    $("#stats-line-6").sparkline([7,2,7,5,7,6,5,6,3,5,9,8,6,7,4], {
        type: 'line',
        height: '65',
        width: '80',
        lineColor: 'rgba(255,255,255,0.85)',
        fillColor: 'rgba(0,0,0,0.2)',
        barWidth: 5,
        barColor: '#C5CED6',
        lineWidth: 1.25,
    });

    //Tristate
    $("#stats-tristate").sparkline([2,2,-2,2,-2,-2,2,2,2,2,2], {
        type: 'tristate',
        width: '100%',
        height: '52',
        barWidth: 4,
        barSpacing: 3,
        zeroAxis: false,
        posBarColor: '#fff',
        negBarColor: '#fff',
        zeroBarColor: '#fff',
        lineWidth: 0,
        lineColor: 'rgba(0,0,0,0)',
    });
})();

/* --------------------------------------------------------
 Easy Pie Charts
 -----------------------------------------------------------*/
$(function() {
    $('.pie-chart-tiny').easyPieChart({
        easing: 'easeOutBounce',
        barColor: 'rgba(255,255,255,0.75)',
        trackColor: 'rgba(0,0,0,0.3)',
        scaleColor: 'rgba(255,255,255,0.3)',
        lineCap: 'square',
        lineWidth: 4,
        size: 100,
        animate: 3000,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    var chart = window.chart = $('.pie-chart-tiny').data('easyPieChart');
    $('.pie-chart-tiny .pie-title > i').on('click', function() {
        $(this).closest('.pie-chart-tiny').data('easyPieChart').update(Math.random()*200-100);
    });
});