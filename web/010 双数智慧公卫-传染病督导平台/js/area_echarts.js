
function echarts_map() {
var myChart = echarts.init(document.getElementById('map'));
var uploadedDataURL = "js/440300.json";
var name = '';
$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap(name, geoJson);//注册 地图
    myChart.setOption(option = {
        title : {
    	        text: '广东省深圳市行政区划示意图',
    	        subtext: '地图对应相应的json文件',
    	        left: 'center',
			top:30,
    	        textStyle : {
    	            color: '#fff'
    	        }
    	    },

        series: [{

            type: 'map',

            mapType: name,

            label: {

                normal: {

                show:true,
textStyle: {

                        color: '#fff'

                    }
                },

                emphasis: {

                    show:true,

                    textStyle: {

                        color: '#fff'

                    }

                }

            },

              itemStyle: {
            normal: {
                areaColor: '#4c60ff',
                borderColor: '#002097'
            },
            emphasis: {
                areaColor: '#293fff'
            }
        },

            animation: false,

            data: []

        }]

    });

});


      
    }
		




 $(window).load(function(){
echarts_map()
 })  
// })
      
 
