
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
var data = [
     {name: '华南区', value: 290},//广东 value 可控制圆点大小
     {name: '华东区', value: 200},//江苏
     {name: '华西区', value: 180},//陕西
     {name: '华北区', value: 260}//北京
];
		var toolTipData = [

    {name:"华南区",value:[{name:"公司数量",value:195},{name:"设备数量",value:14},{name:"人员数量",value:754}]},
    {name:"华东区",value:[{name:"公司数量",value:75},{name:"设备数量",value:32},{name:"人员数量",value:23}]},
    {name:"华西区",value:[{name:"公司数量",value:21},{name:"设备数量",value:65},{name:"人员数量",value:21}]},
    {name:"华北区",value:[{name:"公司数量",value:1533},{name:"设备数量",value:14},{name:"人员数量",value:82}]},

];
var geoCoordMap = {
    '华南区':[113.263802,23.138215],
    '华东区':[118.790825,32.061636],
    '华西区':[108.954065,34.3457],
    '华北区':[116.383491,39.921771],
 
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
   // backgroundColor: '#404a59',
  /***  title: {
        text: '实时行驶车辆',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },**/
    tooltip : {
        trigger: 'item',
		formatter: function(params) {

            if (typeof(params.value)[2] == "undefined") {

                var toolTiphtml = ''

                for(var i = 0;i<toolTipData.length;i++){

                    if(params.name==toolTipData[i].name){

                        toolTiphtml += toolTipData[i].name+':<br>'

                        for(var j = 0;j<toolTipData[i].value.length;j++){

                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"

                        }

                    }

                }

                console.log(toolTiphtml)

                // console.log(convertData(data))

                return toolTiphtml;

            } else {

                var toolTiphtml = ''

                for(var i = 0;i<toolTipData.length;i++){

                    if(params.name==toolTipData[i].name){

                        toolTiphtml += toolTipData[i].name+':<br>'

                        for(var j = 0;j<toolTipData[i].value.length;j++){

                            toolTiphtml+=toolTipData[i].value[j].name+':'+toolTipData[i].value[j].value+"<br>"

                        }

                    }

                }

                console.log(toolTiphtml)

                // console.log(convertData(data))

                return toolTiphtml;

            }

        }
		
		
    },
  
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        }
    },
    series : [
        {
            name: '',
            type: 'effectScatter',
			
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 15;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffeb7b'
                }
            }
        }
		
		/**
		,
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 20;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ffd800',
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,.3)'
                }
            },
            zlevel: 1
        }
		**/
    ]
};
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

