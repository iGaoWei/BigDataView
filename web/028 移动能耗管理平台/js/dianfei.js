  var chart;
  var consumptionData = [
                   {
                       "date": "2-25",
                       "value1":12.5,
                       "value2":0.9,
                       "value3":9.7,
                       "total":23.1,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-26",
                       "value1": 14.3,
                       "value2":0.8,
                       "value3":9.5,
                       "total":24.6,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-27",
                       "value1": 13.4,
                       "value2": 0.9,
                       "value3": 9.9,
                       "total": 24.2,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-28",
                       "value1": 12.8,
                       "value2": 0.7,
                       "value3": 9.7,
                       "total": 23.2,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "2-29",
                       "value1":15.0,
                       "value2": 0.8,
                       "value3": 9.6,
                       "total": 25.4,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "3-1",
                       "value1": 14.1,
                       "value2": 0.8,
                       "value3": 10.0,
                       "total":24.9,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "3-2",
                       "value1": 13.5,
                       "value2":0.8,
                       "value3":9.8,
                       "total":24.1,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   },
                   {
                       "date": "3-3",
                       "value1":	12.6,
                       "value2":0.6,
                       "value3":9.6,
                       "total":22.8,
                       "color1": "#FF6600",
                       "color2": "#04D215",
                       "color3": "#0D8ECF"
                   }
               ];

            AmCharts.ready(function () {
            	 // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = consumptionData;
                chart.categoryField = "date";
                chart.startDuration = 1;

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 45; // this line makes category values to be rotated
                categoryAxis.gridPosition = "start";

                // GRAPH
                var graph1 = new AmCharts.AmGraph();
                graph1.valueField = "value1";
                graph1.colorField = "color1";
                graph1.balloonText = "<b>主设备: [[value]]</b>";
                graph1.type = "column";
                graph1.lineAlpha = 0;
                graph1.fillAlphas = 1;
                chart.addGraph(graph1);

                var graph2 = new AmCharts.AmGraph();
                graph2.valueField = "value2";
                graph2.colorField = "color2";
                graph2.balloonText = "<b>照明: [[value]]</b>";
                graph2.type = "column";
                graph2.lineAlpha = 0;
                graph2.fillAlphas = 1;
                chart.addGraph(graph2);
                
                var graph3 = new AmCharts.AmGraph();
                graph3.valueField = "value3";
                graph3.colorField = "color3";
                graph3.balloonText = "<b>空调: [[value]]</b>";
                graph3.type = "column";
                graph3.lineAlpha = 0;
                graph3.fillAlphas = 1;
                chart.addGraph(graph3);
                // line
                var graphl = new AmCharts.AmGraph();
                graphl.type = "line";
                graphl.title = "总能耗";
                graphl.lineColor = "#fcd202";
                graphl.valueField = "total";
                graphl.lineThickness = 3;
                graphl.bullet = "round";
                graphl.bulletBorderThickness = 3;
                graphl.bulletBorderColor = "#fcd202";
                graphl.bulletBorderAlpha = 1;
                graphl.bulletColor = "#ffffff";
                graphl.dashLengthField = "dashLengthLine";
                graphl.balloonText = "<span style='font-size:13px;'>总能耗:<b>[[value]]</b> [[additional]]</span>";
                chart.addGraph(graphl);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("consumptiondiv");
            });
