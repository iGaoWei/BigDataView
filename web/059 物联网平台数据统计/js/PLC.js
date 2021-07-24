$(function() {
	var dom = document.getElementById("container1");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '环形图';

	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    color:['#37a2da','#ffd85c'],
	    series: [
	        {
	            name:'PLC',
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
	                    show: false
	                }
	            },
	            data:[
	                {value:vm.plc.on, name:'在线'},
	                {value:vm.plc.off, name:'离线'}
	            ]
	        }
	    ]
	};

	;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
});