var scn_data={
		alarm:{alarm:10,fault:10},
		dtu:{ on:150,off:150},
		plc:{on:10,off:10},
		industy:{v1:10,v2:11,v3:12,v3:14,v4:15,v5:17,v6:18},
		online:{v1:10,v2:11,v3:12,v3:14,v4:15,v5:17,v6:18},
		almMsg:[{msg:"2017年5月4日市A区12#机器气压过高报警"},
				{msg:"上海市A区12#机器气压过高报警"},
				{msg:"江苏省12#机器气压过高报警"},
				{msg:"河南省郑州市B区12#机器气压过高报警"},
				{msg:"河南省郑州市B区12#机器气压过高报警"},
				{msg:"河南省郑州市B区12#机器气压过高报警"},
				{msg:"河南省郑州市B区12#机器气压过高报警"}
				],
		msgCnt:[{msg:100,alm:20},
			{msg:200,alm:40},
			{msg:300,alm:50},
			{msg:400,alm:35},
			{msg:400,alm:40},
			{msg:400,alm:11},
			{msg:400,alm:66},
			{msg:100,alm:77},
			{msg:200,alm:88},
			{msg:300,alm:22},
			{msg:400,alm:99},
			{msg:400,alm:100},
			{msg:400,alm:111},
			{msg:400,alm:222},
			{msg:100,alm:333},
			{msg:200,alm:11},
			{msg:300,alm:33},
			{msg:400,alm:55},
			{msg:400,alm:77},
			{msg:400,alm:90}
			],
		map:[{area:"山东",cnt:20},
			{area:"浙江",cnt:40},
			{area:"江苏",cnt:50},
			{area:"辽宁",cnt:50}
		],
		factoryHeader:[
	        {"categories":"单位名"},
	        {"categories":"网关数"},
	        {"categories":"设备数"},
	        {"categories":"数据点"},
	        {"categories":"报警"},
	        {"categories":"操作"}
    	],
		factory:[
			{"company":"宝钢","dtuCnt": 200, "plcCnt": 400,"dataCnt": 5000,"alarm": "无"},
	        {"company":"造纸厂","dtuCnt": 3000,"plcCnt": 2000,"dataCnt": 1000,"alarm": "无"},
	        {"company":"锅炉厂","dtuCnt": 1500,"plcCnt": 1000,"dataCnt": 500,"alarm": "无"},
	        {"company":"锅炉二厂","dtuCnt": 1500,"plcCnt": 300,"dataCnt": 1200,"alarm": "温度上限报警>120"},
	        {"company":"锅炉三厂","dtuCnt": 1000,"plcCnt": 800,"dataCnt": 200,"alarm": "无"},
	        {"company":"锅炉三厂","dtuCnt": 1000,"plcCnt": 800,"dataCnt": 200,"alarm": "无"},
	        {"company":"锅炉三厂","dtuCnt": 1000,"plcCnt": 800,"dataCnt": 200,"alarm": "无"},
	        {"company":"锅炉三厂","dtuCnt": 1000,"plcCnt": 800,"dataCnt": 200,"alarm": "无"},
	        {"company":"锅炉三厂","dtuCnt": 1000,"plcCnt": 800,"dataCnt": 200,"alarm": "无"},
	        {"company":"锅炉三厂","dtuCnt": 1000,"plcCnt": 800,"dataCnt": 200,"alarm": "无"}		]
	};
var vm = new Vue({
	el: '#content',
	data: scn_data,
	methods: {
		details: function() {
			
		}
	}
})