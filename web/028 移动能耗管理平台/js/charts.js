/* --------------------------------------------------------
 Flot Charts
 -----------------------------------------------------------*/

//Line Chart
$(function () {
    var data = [];

    data.push({

        "label": "昨天",

        "data": [[1, 39], [3, 20], [5, 12], [7, 13], [9, 25], [11, 20], [13, 31],[15, 21],[17, 11],[19, 41],[21, 34],[23, 28]]

    },{

        "label": "今天",

        "data": [[1, 29], [3, 30], [5, 6], [7, 23], [9, 15], [11, 27], [13, 9],[15, 31],[17, 21],[19, 11],[21, 30],[23, 18]]

    });
    if ($('#line-chart')[0]) {

        $.plot('#line-chart', data,

            {
                series: {
                    lines: {
                        show: true,
                        lineWidth: 1,
                        fill: 0.25,
                    },

                    //color: 'rgba(255,255,255,0.7)',
                    shadowSize: 0,
                    points: {
                        show: true,
                    }
                },

                yaxis: {
                    min: 0,
                    max: 100,
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
                    ticks: [[1, "01:00"], [3, "03:00"], [5, "05:00"], [7, "07:00"], [9, "09:00"], [11, "11:00"],[13,"13:00"],[15,"15:00"],[17,"17:00"],[19,"19:00"],[21,"21:00"],[23,"23:00"]],
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
                    show: true,
                    position:"se",
                    backgroundColor:'rgba(243,249,241,0.35)',
                    noColumns:2
                }
            });

        $("#line-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#linechart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
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
        var data1 = [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85], [8,40], [9,5]];
        var data2 = [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65], [8,5], [9,70]];
        var data3 = [[1,100], [2,20], [3,60], [4,90], [5,80], [6,10], [7,5], [8,15], [9,50]];
    
        var barData = new Array();

        barData.push({
                data : data1,
                label: 'Product 1',
                bars : {
                        show : true,
                        barWidth : 0.1,
                        order : 1,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.6)'
                }
        });
        barData.push({
                data : data2,
                label: 'Product 2',
                bars : {
                        show : true,
                        barWidth : 0.1,
                        order : 2,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.8)'
                }
        });
        barData.push({
                data : data3,
                label: 'Product 3',
                bars : {
                        show : true,
                        barWidth : 0.1,
                        order : 3,
                        fill:1,
                        lineWidth: 0,
                        fillColor: 'rgba(255,255,255,0.3)'
                },
        });

        //Display graph
        $.plot($("#bar-chart"), barData, {
                
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
                $("#barchart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
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
                    {data: 1, color: 'rgba(255,255,255,0.2)'},
                    {data: 2, color: 'rgba(255,255,255,0.8)'},
                    {data: 3, color: 'rgba(255,255,255,0.5)'},
                    {data: 4, color: 'rgba(255,255,255,0.1)'},
                    {data: 4, color: 'rgba(255,255,255,0.9)'},
                ];
    if($('#donut-chart')[0]){
        $.plot('#donut-chart', pieData, {
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
                    } 
                }
            }
        });
    }
    
    if($('#pie-chart')[0]){
        $.plot('#pie-chart', pieData, {
            series: {
                pie: {
                    show: true,
                    stroke: { 
                        width: 0,
                        
                    },
                    /*label: {
                        show: true,
                        radius: 3/4,
                        formatter: function(label, series){
                            return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
                        },
                        background: { 
                            opacity: 0.5,
                            color: '#000'
                        }
                    }*/
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
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 90) {
                    y = 90;
                }

                data.push(y);
            }

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }


        var updateInterval = 300;
        var plot = $.plot("#dynamic-chart", [ getRandomData() ], {
            series: {
                label: "Data",
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: 0.25,
                    fillColor: {
                        colors: [{
                            opacity: 0.1
                        }, {
                            opacity: 1
                        }]
                    }
                },

                color: 'rgba(173,255,47,0.4)',
                shadowSize: 1,
            },
            yaxis: {
                min: 0,
                max: 100,
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
                max: 250
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
                $("#dynamic-chart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
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
//Line Chart
    $(function () {
        var data = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];

        data.push({
            "label": "2016",
            "data": [[1, 39], [2, 20], [3, 12], [4, 13], [5, 25], [6, 20], [7, 31],[8, 33],[9, 41],[10, 21],[11, 13],[12, 42]]
        },{
            "label": "2015",
            "data": [[1, 29], [2, 10], [3, 22], [4, 18.5], [5, 29], [6, 23], [7, 13.8],[8, 37],[9, 21],[10, 21],[11, 23],[12, 32]]
        });

        data1.push({
            "label": "2016",
            "data": [[1, 9], [2, 18], [3, 12.7], [4, 23.6], [5, 16.5], [6, 30.7], [7, 23.9],[8, 33.9],[9, 32.8],[10, 21.7],[11, 23],[12, 32.6]]
        },{
            "label": "2015",
            "data": [[1, 19], [2, 20], [3, 12], [4, 18.5], [5, 29.7], [6, 23], [7, 33.8],[8, 27],[9, 31],[10, 21.6],[11, 23.9],[12, 22]]
        });

        data2.push({
            "label": "2016",
            "data": [[1, 12], [2, 30], [3, 22], [4, 13], [5, 15], [6, 30], [7, 21],[8, 13],[9, 31],[10, 29],[11, 33],[12, 22]]
        },{
            "label": "2015",
            "data": [[1, 21], [2, 20], [3, 12], [4, 18.5], [5, 19], [6, 33], [7, 23.8],[8, 27],[9, 23],[10, 31],[11, 13],[12, 32]]
        });

        data3.push({
            "label": "2016",
            "data": [[1, 39], [2, 10], [3, 22], [4, 18], [5, 15], [6, 30], [7, 21],[8, 13],[9, 31],[10, 29],[11, 13],[12, 42]]
        },{
            "label": "2015",
            "data": [[1, 29], [2, 10], [3, 22], [4, 18.5], [5, 29], [6, 23], [7, 13.8],[8, 37],[9, 21],[10, 11],[11, 33],[12, 22.8]]
        });

        data4.push({
            "label": "2016",
            "data": [[1, 29], [2, 10], [3, 18.6], [4, 13.3], [5, 25.7], [6, 20.6], [7, 21.2],[8, 23.8],[9, 11.9],[10, 21.7],[11, 33.2],[12, 12]]
        },{
            "label": "2015",
            "data": [[1, 29], [2, 10], [3, 22], [4, 18.5], [5, 29], [6, 23], [7, 13.8],[8, 37],[9, 21],[10, 21],[11, 23],[12, 32]]
        });
        if ($('#stats-line-2')[0]) {
            /**总能耗*/
            $.plot('#stats-line-2', data,
                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },
                        //color: 'rgba(255,255,255,0.7)',
                        shadowSize: 0,
                        points: {
                            show: true,
                        }
                    },

                    yaxis: {
                        min: 0,
                        max: 40,
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
                        show: true,
                        noColumns: 2,
                        backgroundColor:'rgba(240,240,244,1)',
                        position:'se'
                    }
                });

            $.plot('#stats-line-3', data1,

                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },

                        //color: 'rgba(255,255,255,0.7)',
                        shadowSize: 0,
                        points: {
                            show: true,
                        }
                    },

                    yaxis: {
                        min: 0,
                        max: 40,
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
                        show: true,
                        noColumns: 2,
                        backgroundColor:'rgba(240,240,244,1)',
                        position:'se'
                    }
                });

            $.plot('#stats-line-4', data2,

                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },

                        //color: 'rgba(255,255,255,0.7)',
                        shadowSize: 0,
                        points: {
                            show: true,
                        }
                    },

                    yaxis: {
                        min: 0,
                        max: 40,
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
                        show: true,
                        noColumns: 2,
                        backgroundColor:'rgba(240,240,244,1)',
                        position:'se'
                    }
                });

            $.plot('#stats-line', data3,

                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },

                        //color: 'rgba(255,255,255,0.7)',
                        shadowSize: 0,
                        points: {
                            show: true,
                        }
                    },

                    yaxis: {
                        min: 0,
                        max: 40,
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
                        show: true,
                        noColumns: 2,
                        backgroundColor:'rgba(240,240,244,1)',
                        position:'se'
                    }
                });

            $.plot('#stats-line-x', data4,

                {
                    series: {
                        lines: {
                            show: true,
                            lineWidth: 1,
                            fill: 0.25,
                        },

                        //color: 'rgba(255,255,255,0.7)',
                        shadowSize: 0,
                        points: {
                            show: true,
                        }
                    },

                    yaxis: {
                        min: 0,
                        max: 40,
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
                        show: true,
                        noColumns: 2,
                        backgroundColor:'rgba(240,240,244,1)',
                        position:'se'
                    }
                });

            $("div[id^='stats-line-']").bind("plothover", function (event, pos, item) {
                if (item) {
                    var x = item.datapoint[0]+"月",
                        y = item.datapoint[1].toFixed(2);
                    $("#linechart-tooltip").html(item.series.label + " 年 " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
                }
                else {
                    $("#linechart-tooltip").hide();
                }
            });

            $("<div id='linechart-tooltip' class='chart-tooltip'></div>").appendTo("body");
        }

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
 Map
 -----------------------------------------------------------*/
$(function(){
    //USA Map
    if($('#usa-map')[0]) {
	$('#usa-map').vectorMap({
            map: 'us_aea_en',
            backgroundColor: 'rgba(0,0,0,0.25)',
            regionStyle: {
                initial: {
                    fill: 'rgba(255,2552,255,0.7)'
                },
                hover: {
                    fill: '#fff'
                },
            },
    
            zoomMin:0.88,
            focusOn:{
                x: 5,
                y: 1,
                scale: 1.8
            },
            markerStyle: {
                initial: {
                    fill: '#e80000',
                    stroke: 'rgba(0,0,0,0.4)',
                    "fill-opacity": 2,
                    "stroke-width": 7,
                    "stroke-opacity": 0.5,
                    r: 4
                },
                hover: {
                    stroke: 'black',
                    "stroke-width": 2,
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {
                }
            },
            zoomOnScroll: false,
    
            markers :[
                {latLng: [33, -86], name: '西宁移动1#基站能耗过高'},
                {latLng: [33.7, -93], name: '青海移动设计院办公室空调系统故障'},
                {latLng: [36, -79], name: '移动设计院锅炉出现故障'},
                {latLng: [29, -99], name: '移动3#基站信号故障'},
                {latLng: [33, -95], name: '海东市移动公司新风系统温度过高'},
                {latLng: [31, -92], name: '移动2#基站供暖系统故障'},
            ],
        });
    }
    
    //World Map
    if($('#world-map')[0]) {
	$('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'rgba(0,0,0,0)',
            series: {
                regions: [{
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial'
                }]
            },
            regionStyle: {
                initial: {
                    fill: 'rgba(255,2552,255,0.7)'
                },
                hover: {
                    fill: '#fff'
                },
            },
        });
    }
});

/* --------------------------------------------------------
 Easy Pie Charts
 -----------------------------------------------------------*/
$(function() {
    $('.pie-chart-tiny').easyPieChart({
        easing: 'easeOutBounce',
        barColor: 'rgba(0,255,255,0.75)',
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