$(function() {
	var dom = document.getElementById("container");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '环形图';
	
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        orient: 'horizontal',
	        x: 'left',
	        data:['在线','离线'],
	        itemWidth: 8,
	        itemHeight: 8,
	        textStyle:{//图例文字的样式
	            color:'#fff',
	            fontSize:12
	        }
	    },
	    color:['#37a2da','#ffd85c'],
	    series: [
	        {
	            name:'DTU',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '24',
	                        color:'#00fcff',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false,
	                }
	            },
	            data:[
	                {value:vm.dtu.on, name:'在线'},
	                {value:vm.dtu.off, name:'离线'}
	            ]
	        }
	    ]
	};

	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
});