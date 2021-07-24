
var uploadedDataURL = "./js/gjjk.json";
var retail = "./img/sy/06/xq.png";
var travl = "./img/sy/06/dq.png";

$.get(uploadedDataURL, function (geoJson) {
	var myChart = echarts.init(document.getElementById('gjjk_bak')); 
    myChart.hideLoading();

    echarts.registerMap('wuhan', geoJson);

var allData = {
"citys":[
{"name":"215\n电子围栏","value":[70,60],symbol: 'image://' + retail,"symbolSize":4,"itemStyle":{"normal":{"color":"#0090FD"}}},
{"name":"2164\nWIFI探针","value":[70,150],symbol: 'image://' + retail,"symbolSize":4,"itemStyle":{"normal":{"color":"#0090FD"}}},
{"name":"3982\n全省数据中心","value":[310,100],symbol: 'image://' + travl,"symbolSize":6,"itemStyle":{"normal":{"color":"#0090FD"}}},
{"name":"745\n入省轨迹","value":[490,60],symbol: 'image://' + retail,"symbolSize":4,"itemStyle":{"normal":{"color":"#0090FD"}}},
{"name":"745\n出省轨迹","value":[490,150],symbol: 'image://' + retail,"symbolSize":4,"itemStyle":{"normal":{"color":"#0090FD"}}},
],
"moveLines":[
{"fromName":"零售","toName":"MQ","coords":[[70,60],[310,100]]},
{"fromName":"旅游","toName":"MQ","coords":[[70,150],[310,100]]},
{"fromName":"MQ_LVYOU_JFDZ","toName":"MQ","coords":[[490,60],[310,100]]},
{"fromName":"MQ_LVYOU_JFZJ","toName":"MQ","coords":[[490,150],[310,100]]},
]
};
option = {
    backgroundColor: '',
    title: {
        text: 'MQ数据传输图',
        left: 'center',
        textStyle: {
            color: '#fff'
        },
        show:false
    },
    legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff'
        }
    },
    tooltip:{
        formatter:'{b}'
    },
    geo: {
        map: '北京市',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{
        name: '地点',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke',
            period:7,
            scale:26
        },
        label: {
            normal:{
              show:true,
              position:'inside',
              formatter:'{b}',
//            color:'',
              textStyle: {
//                       color: '#0090FD',
                         fontSize: 14
                     }
            },
            emphasis: {
                show: true,
                position: 'inside',
                formatter: '{b}'
            }
        },
        symbolSize: 2,
        showEffectOn: 'render',
        itemStyle: {
            normal: {
                color: '#46bee9'
            }
        },
        data: allData.citys
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        zlevel: 2,
        large: true,
        effect: {
            show: true,
            constantSpeed: 30,
            symbol: 'arrow',//ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 10,
            trailLength: 0,
        },
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                width: 4,
                opacity: 0.6,
                curveness: 0.2
            }
        },
        data: allData.moveLines
    }]
};
myChart.setOption(option);
});