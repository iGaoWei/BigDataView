
function echarts_map() {
var myChart = echarts.init(document.getElementById('map_1'));
var guangdong = "js/44.json";
$.get(guangdong, function(tjJson) {
    echarts.registerMap('guangdong', tjJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'guangdong'
        }]
    });

    var geoCoordMap = {
			'珠海市': [113.353986,21.924979]
            ,'广州市':[113.480637,23.125178]
            ,'湛江市':[110.264977,21.274898]
            ,'茂名市':[110.919229,21.659751]
            ,'阳江市':[111.825107,21.859222]
            ,'云浮市':[112.044439,22.629801]
            ,'肇庆市':[112.472529,23.051546]
            ,'江门市':[112.894942,22.090431]
            ,'中山市':[113.382391,22.321113]
            ,'佛山市':[113.022717,22.828762]
            ,'清远市':[113.051227,23.685022]
            ,'韶关市':[113.601224,24.820603]
            ,'河源市':[114.897802,23.746266]
            ,'梅州市':[116.117582,24.099112]
            ,'潮州市':[116.692301,23.661701]
            ,'揭阳市':[116.255733,23.143778]
            ,'汕头市':[116.708463,22.87102]
            ,'汕尾市':[115.364238,22.774485]
            ,'深圳市':[114.085947,22.347]
            ,'东莞市':[113.746262,22.746237]
            ,'惠州市':[114.412599,23.079404]
    };
    var goData = [{
            name: '河源市',
            value: 32
        },{
            name: '湛江市',
            value: 24
        },{
            name: '韶关市',
            value: 20
        },{
            name: '汕尾市',
            value: 18
        },{
            name: '揭阳市',
            value: 18
        }
    ];
    var goTotal=0;//计算总人数
    goData.forEach(function(item,i){
        goTotal+=item.value;
    })

    var planePath = 'arrow';

    var convertData = function(name, data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var fromCoord = geoCoordMap[name];
            var toCoord = geoCoordMap[data[i].name];
            if (fromCoord && toCoord) {
                res.push({
                    //对换即可调整方向
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    var series = [];
    [
        ['广州市', goData],
       // ['徐州', backData],

    ].forEach(function(item, i) {
        series.push({
            name: item[0],
            type: 'lines',
            zlevel: 2,
            //线特效配置
            effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                symbol: planePath, //标记类型
                symbolSize: 10
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2, //弧线角度
                    color: 'rgba(255,255,255,.1)'
                }
            },
            data: convertData(item[0], item[1])
        }, {  //终点
            name: item[0],
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            label: {
                normal: {
                    show: false,
                     color: 'rgba(255,255,255,.5)',
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbol: 'circle',
            //圆点大小
            symbolSize: function(val) {
                return val[2]*50 / goTotal;
            },
            itemStyle: {
                normal: {
                    show: true
                }
            },
            data: item[1].map(function(dataItem) {
                console.log(dataItem)
                return {
                    name: dataItem.name,
                    value: geoCoordMap[dataItem.name].concat([dataItem.value])
                };
            })

        }, {//起点
            name: 'item[0]',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function(val) {
                return 15;
            },
            symbol: 'circle',

            itemStyle: {
                normal: {
                    show: true
                }
            },
            data: [{
                name: item[0],
                value: geoCoordMap[item[0]].concat([100])
            }]

        })

    });


    option = {
      //  backgroundColor: '#FDF7F2',
        title: {
       text: '业务覆盖',
       subtext: '2016-2018年数据',
        left: 'center',
		bottom:'15%',
        textStyle: {
            color: '#fff'
            }
        },
       
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },
        //线颜色及飞行轨道颜色
        visualMap: {
            show: false,
            min: 0,
            max: 100,
            color: ['#fff']
        },
        //地图相关设置
        geo: {
            map: 'guangdong',
            //视角缩放比例
            zoom: 1,
            //显示文本样式
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.3)'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            //鼠标缩放和平移
            roam: false,
            itemStyle: {
            normal: {
                areaColor: '#4256ff',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2539f5'
            }
        }
        },
        series: series
    };
	 
         myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
})

      
        // 使用刚指定的配置项和数据显示图表。
      
    }
		




 $(window).load(function(){
echarts_map()
 })  
// })
      
 
