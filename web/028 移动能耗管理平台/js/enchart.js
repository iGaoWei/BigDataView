  var chart;

  var consumptionData = [
                   {
                       "date": "7/1",
                       "value":Math.random(),
                       "target":0.6,
                       "color": "#FF0F00"
                   },
                   {
                       "date": "7/3",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#FF6600"
                   },
                   {
                       "date": "7/5",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#FF9E01"
                   },
                   {
                       "date": "7/7",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#FCD202"
                   },
                   {
                       "date": "7/9",
                       "value":Math.random(),
                       "target":0.6,
                       "color": "#F8FF01"
                   },
                   {
                       "date": "7/13",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#B0DE09"
                   },
                   {
                       "date": "7/17",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#04D215"
                   },
                   {
                       "date": "7/19",
                       "value":	Math.random(),
                       "target":0.6,
                       "color": "#0D8ECF"
                   },
                   {
                       "date": "7/23",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#0D52D1"
                   },
                   {
                       "date": "7/25",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#2A0CD0"
                   },
                   {
                       "date": "7/27",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#8A0CCF"
                   },
                   {
                       "date": "7/29",
                       "value": Math.random(),
                       "target":0.6,
                       "color": "#CD0D74"
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
                var graph = new AmCharts.AmGraph();
                graph.valueField = "value";
                graph.colorField = "color";
                graph.balloonText = "<b>[[category]]: [[value]]</b>";
                graph.type = "column";
                graph.lineAlpha = 0;
                graph.fillAlphas = 1;
                chart.addGraph(graph);
                
                // line
                var graph2 = new AmCharts.AmGraph();
                graph2.type = "line";
                graph2.title = "目标";
                graph2.lineColor = "#fcd202";
                graph2.valueField = "target";
                graph2.lineThickness = 3;
                graph2.bullet = "round";
                graph2.bulletBorderThickness = 3;
                graph2.bulletBorderColor = "#fcd202";
                graph2.bulletBorderAlpha = 1;
                graph2.bulletColor = "#ffffff";
                graph2.dashLengthField = "dashLengthLine";
                graph2.balloonText = "<span style='font-size:13px;'>目标:<b>[[value]]</b> [[additional]]</span>";
                chart.addGraph(graph2);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorAlpha = 0;
                chartCursor.zoomable = false;
                chartCursor.categoryBalloonEnabled = false;
                chart.addChartCursor(chartCursor);

                chart.creditsPosition = "top-right";

                chart.write("consumptiondiv");
            });
            

            var conditionerData = [
                {
                    "date": "7/5",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/10",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/15",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/20",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                },
                {
                    "date": "7/25",
                    "income": Math.ceil(Math.random()*80),
                    "expenses": Math.ceil(Math.random()*80)
                }
            ];
            
            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = conditionerData;
                chart.categoryField = "date";
                chart.startDuration = 1;
                chart.plotAreaBorderColor = "#DADADA";
                chart.plotAreaBorderAlpha = 1;

                // AXES
                // Category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.gridPosition = "start";
                categoryAxis.gridAlpha = 0.1;
                categoryAxis.axisAlpha = 0;

                // Value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.axisAlpha = 0;
                valueAxis.gridAlpha = 0.1;
                valueAxis.position = "top";
                chart.addValueAxis(valueAxis);

                // GRAPHS
                // first graph
                var graph1 = new AmCharts.AmGraph();
                graph1.type = "column";
                graph1.title = "Income";
                graph1.valueField = "income";
                graph1.balloonText = "当前:[[value]]";
                graph1.lineAlpha = 0;
                graph1.fillColors = "#ADD981";
                graph1.fillAlphas = 1;
                chart.addGraph(graph1);

                // second graph
                var graph2 = new AmCharts.AmGraph();
                graph2.type = "column";
                graph2.title = "Expenses";
                graph2.valueField = "expenses";
                graph2.balloonText = "历史:[[value]]";
                graph2.lineAlpha = 0;
                graph2.fillColors = "#81acd9";
                graph2.fillAlphas = 1;
                chart.addGraph(graph2);

                chart.creditsPosition = "top-right";

                // WRITE
                chart.write("conditionerdiv");
            });
            
            
            var EERData = [
                             {
                                 "year": '1月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '3月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '6月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '9月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '11月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             },
                             {
                                 "year": '12月',
                                 "income": Math.ceil(Math.random()*80),
                                 "expenses": 35
                             }

                         ];


                         AmCharts.ready(function () {
                             // SERIAL CHART
                             chart = new AmCharts.AmSerialChart();
                             chart.path = "../amcharts/";
                             chart.dataProvider = EERData;
                             chart.categoryField = "year";
                             chart.startDuration = 1;

                             chart.handDrawn = true;
                             chart.handDrawnScatter = 3;

                             // AXES
                             // category
                             var categoryAxis = chart.categoryAxis;
                             categoryAxis.gridPosition = "start";

                             // value
                             var valueAxis = new AmCharts.ValueAxis();
                             valueAxis.axisAlpha = 0;
                             chart.addValueAxis(valueAxis);

                             // GRAPHS
                             // column graph
                             var graph1 = new AmCharts.AmGraph();
                             graph1.type = "column";
                             graph1.title = "Income";
                             graph1.lineColor = "#a668d5";
                             graph1.valueField = "income";
                             graph1.lineAlpha = 1;
                             graph1.fillAlphas = 1;
                             graph1.alphaField = "alpha";
                             graph1.balloonText = "<span style='font-size:13px;'>当前 :<b>[[value]]</b> [[additional]]</span>";
                             chart.addGraph(graph1);

                             // line
                             var graph2 = new AmCharts.AmGraph();
                             graph2.type = "line";
                             graph2.title = "Expenses";
                             graph2.lineColor = "#fcd202";
                             graph2.valueField = "expenses";
                             graph2.lineThickness = 3;
                             graph2.bullet = "round";
                             graph2.bulletBorderThickness = 3;
                             graph2.bulletBorderColor = "#fcd202";
                             graph2.bulletBorderAlpha = 1;
                             graph2.bulletColor = "#ffffff";
                             graph2.dashLengthField = "dashLengthLine";
                             graph2.balloonText = "<span style='font-size:13px;'>目标 :<b>[[value]]</b> [[additional]]</span>";
                             chart.addGraph(graph2);

                             // WRITE
                             chart.write("EERdiv");
                         });
                         
                         
                         
                         var refrigerationData = [
                                          {
                                              "year": "7/3",
                                              "value": 2
                                          },
                                          {
                                              "year": "7/5",
                                              "value": 2.5
                                          },
                                          {
                                              "year": "7/15",
                                              "value": 1.5
                                          },
                                          {
                                              "year": "7/20",
                                              "value": 5
                                          },
                                          {
                                              "year": "7/25",
                                              "value": 8
                                          },
                                          {
                                              "year": "7/29",
                                              "value": 2
                                          }
                                      ];


                                      AmCharts.ready(function () {
                                          // SERIAL CHART
                                          chart = new AmCharts.AmSerialChart();
                                          chart.path = getRootPath()+"/assets/amcharts/";
                                          chart.pathToImages=getRootPath()+"/assets/amcharts/images/";
                                          chart.dataProvider = refrigerationData;
                                          chart.marginLeft = 10;
                                          chart.categoryField = "year";
                                          chart.dataDateFormat = "M/DD";

                                          // listen for "dataUpdated" event (fired when chart is inited) and call zoomChart method when it happens
                                          chart.addListener("dataUpdated", zoomChart);

                                          // AXES
                                          // category
                                          var categoryAxis = chart.categoryAxis;
                                          categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
                                          categoryAxis.minPeriod = "DD"; // our data is yearly, so we set minPeriod to YYYY
                                          categoryAxis.dashLength = 3;
                                          categoryAxis.minorGridEnabled = true;
                                          categoryAxis.minorGridAlpha = 0.1;

                                          // value
                                          var valueAxis = new AmCharts.ValueAxis();
                                          valueAxis.axisAlpha = 0;
                                          valueAxis.inside = true;
                                          valueAxis.dashLength = 3;
                                          chart.addValueAxis(valueAxis);

                                          // GRAPH
                                          graph = new AmCharts.AmGraph();
                                          graph.type = "smoothedLine"; // this line makes the graph smoothed line.
                                          graph.lineColor = "#d1655d";
                                          graph.negativeLineColor = "#637bb6"; // this line makes the graph to change color when it drops below 0
                                          graph.bullet = "round";
                                          graph.bulletSize = 8;
                                          graph.bulletBorderColor = "#FFFFFF";
                                          graph.bulletBorderAlpha = 1;
                                          graph.bulletBorderThickness = 2;
                                          graph.lineThickness = 2;
                                          graph.valueField = "value";
                                          graph.balloonText = "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>";
                                          chart.addGraph(graph);

                                          // CURSOR
                                          var chartCursor = new AmCharts.ChartCursor();
                                          chartCursor.cursorAlpha = 0;
                                          chartCursor.cursorPosition = "mouse";
                                          chartCursor.categoryBalloonDateFormat = "YYYY-W";
                                          chart.addChartCursor(chartCursor);

                                          // SCROLLBAR
                                          var chartScrollbar = new AmCharts.ChartScrollbar();
                                          chart.addChartScrollbar(chartScrollbar);

                                          chart.creditsPosition = "bottom-right";

                                          // WRITE
                                          chart.write("refrigerationdiv");
                                      });
                                      
                                   // this method is called when chart is first inited as we listen for "dataUpdated" event
                                      function zoomChart() {
                                          // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
                                          chart.zoomToDates(new Date(1972, 0), new Date(1984, 0));
                                      }
                                      
                                    //js获取项目根路径，如：http://localhost:8099/UniqueduHome
                                      function getRootPath(){
                                             //获取当前网址，如： http://localhost:8099/UniqueduHome/view/error/notAuthorize.jsp
                                             var curWwwPath=window.document.location.href;
                                             //获取主机地址之后的目录，如： UniqueduHome/view/error/notAuthorize.jsp
                                             var pathName=window.document.location.pathname;
                                             var pos=curWwwPath.indexOf(pathName);
                                             //获取主机地址，如： http://localhost:8099
                                             var localhostPaht=curWwwPath.substring(0,pos);
                                             //获取带"/"的项目名，如：/UniqueduHome
                                             var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
                                             return(localhostPaht+projectName);
                                         }