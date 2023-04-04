
//加载录取人数、报到率
function regData(){
	$("#factTotalNum").text(12500+Math.floor(Math.random()*100+1));
	$("#totalNum").text(18200+Math.floor(Math.random()*100+1));
	$("#totalNumRate").text(90+Math.floor(Math.random()*10+1)+'%');
	// $("#manNumsRate").text(Math.floor(Math.random()*100+1)+'%');
	// $("#factMan").text("男生报到"+data.factManNum +"/"+data.manNums+"人");
	// $("#womanNumsRate").text(Math.floor(Math.random()*100+1)+'%');
	// $("#factWoman").text("女生报到"+data.factWomanNum +"/"+data.womanNums+"人");
}
function studentBedData(){
	// $("#factTotalNum2").text(888);
	// $("#totalNum2").text(data.totalNum);
	// $("#totalNumRate2").text(data.totalNumRate);
	// $("#manNumsRate2").text(data.manNumsRate);
	// $("#factMan2").text("男生报到"+data.factManNum +"/"+data.manNums+"人");
	// $("#womanNumsRate2").text(data.womanNumsRate);
	// $("#factWoman2").text("女生报到"+data.factWomanNum +"/"+data.womanNums+"人");
}

//加载各时段已报到人数
function studentRegisterTime(){
	var da = [
		{
			"REGSTUNUM": 5250,
			"SJ": "08:00"
		},
		{
			"REGSTUNUM": 5899,
			"SJ": "09:00"
		},
		{
			"REGSTUNUM": 7581,
			"SJ": "10:00"
		},
		{
			"REGSTUNUM": 9501,
			"SJ": "11:00"
		},
		{
			"REGSTUNUM": 10023,
			"SJ": "12:00"
		},
		{
			"REGSTUNUM": 10099,
			"SJ": "13:00"
		},
		{
			"REGSTUNUM": 9829,
			"SJ": "14:00"
		},
		{
			"REGSTUNUM": 9508,
			"SJ": "15:00"
		}
	];
	var date = [];
	var data = [];
	var rateData = [];
	var totalNum = $("#totalNum").text();
	for(i = 0; i<da.length; i++){
		date.push(da[i].SJ);
		data.push(da[i].REGSTUNUM);
		rateData.push(Math.round(da[i].REGSTUNUM / totalNum * 100));
	}
	optionNum(date,data);
	optionNum2(date,rateData);
}
//各时段报到人数统计图
function optionNum(date,data){
	option = {
	    tooltip: {
	        trigger: 'axis',
	        position: function (pt) {
	            return [pt[0], '10%'];
	        }
	    },
   		 grid:{
   	        top:30,
   	     	bottom:20,
   	     	left:'14%',
   	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: date,
   		    axisLine: {
 	            lineStyle: {
 	            	color:'#cbdaef',
  	        	   opacity:0.1,
 	            }
 	        },
 	        axisLabel:{
 	        	interval:0,
 	            textStyle:{
 	                fontSize:8
 	            }
 	        },
  	       axisTick:{
	        	show:false,
	        }
	    },
	    yAxis: {
	    	name : '单位:人',
	        type: 'value',
	        boundaryGap: [0, '10%'],
	        nameTextStyle:{
	        	color: "#fff",
	        	fontSize:8,
	        },
	     	axisLine: {
	     		show:false,
 	            lineStyle: {
 	                color: "#fff",
 	            }
 	        },
 	        axisLabel:{
 	        	color: "#fff",
 	            textStyle:{
 	                fontSize:8
 	            }
 	        },
 	        splitLine:{
 	            show:true,
 	           lineStyle:{
 	        	   color:'#cbdaef',
 	        	   opacity:0.1,
 	           }
 	        },
 	        axisTick:{
	        	show:false,
	        }
	    },
	    dataZoom: [{
	        type: 'inside',
	        start: 0,
	        end: 100
	    }],
	    series: [
	        {
	            name:'报到人数',
	            type:'line',
	            itemStyle: {
	                color: '#f93b08'
	            },
   		         label: {
   	                normal: {
   	                    show: true,
   	                    position: 'top'
   	                }
   	            },
	            areaStyle: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#ed6603'
	                }, {
	                    offset: 1,
	                    color: '#ec8438'
	                }]),
	                opacity:0.3,
	            },
	            data: data
	        }
	    ]
	};
	var registerDate = echarts.init(document.getElementById('registerDate'));
   		registerDate.setOption(option);
}
//各时段报到率统计图
function optionNum2(date,data){
	option = {
	    tooltip: {
	        trigger: 'axis',
	        position: function (pt) {
	            return [pt[0], '10%'];
	        }
	    },
   		 grid:{
   	        top:30,
   	     	bottom:20,
   	     	left:'14%',
   	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: date,
   		    axisLine: {
 	            lineStyle: {
 	            	color:'#cbdaef',
  	        	   opacity:0.1,
 	            }
 	        },
 	        axisLabel:{
 	        	interval:0,
 	            textStyle:{
 	                fontSize:8
 	            }
 	        },
  	       axisTick:{
	        	show:false,
	        }
	    },
	    yAxis: {
	        name : '单位:%',
	        max : 100,
	        type: 'value',
	        boundaryGap: [0, '100%'],
	        nameTextStyle:{
	        	color: "#fff",
	        	fontSize:8,
	        },
	     	axisLine: {
	     		show:false,
 	        },
 	        axisLabel:{
 	        	color:'#fff',
 	            textStyle:{
 	                fontSize:8
 	            }
 	        },
 	        splitLine:{
 	            show:true,
 	           lineStyle:{
 	        	   color:'#cbdaef',
 	        	   opacity:0.1,
 	           }
 	        },
 	        axisTick:{
	        	show:false,
	        }
	    },
	    dataZoom: [{
	        type: 'inside',
	        start: 0,
	        end: 100
	    }],
	    series: [
	        {
	            name:'报到率',
	            type:'line',
	            itemStyle: {
	                color: '#f9cc08',

	            },
   		         label: {
   	                normal: {
   	                    show: true,
   	                    position: 'top'
   	                }
   	            },
	            areaStyle: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#efdc12',
	                }, {
	                    offset: 1,
	                    color: '#f2e34a',
	                }]),
	                opacity:0.3,
	            },
	            data: data
	        }
	    ]
	};
	var registerDateRate = echarts.init(document.getElementById('registerDateRate'));
	registerDateRate.setOption(option);
}

var geoCoordMap = {
	    '北京': [116.4551, 40.2539],
	    '天津': [117.4219, 39.4189],
	    '河北': [114.4995, 38.1006],
	    '山西': [112.3352, 37.9413],
	    '内蒙古': [111.4124, 40.4901],
	    '辽宁': [123.1238, 42.1216],
	    '吉林': [125.8154, 44.2584],
	    '黑龙江': [127.9688, 45.368],
	    '上海': [121.4648, 31.2891],
	    '江苏': [118.8062, 31.9208],
	    '浙江': [119.5313, 29.8773],
	    '安徽': [117.29, 32.0581],
	    '福建': [119.4543, 25.9222],
	    '江西': [116.0046, 28.6633],
	    '山东': [117.1582, 36.8701],
	    '河南': [113.4668, 34.6234],		   
	    '湖北': [114.3896, 30.6628],
	    '湖南': [113.0823, 28.2568],
	    '广东': [113.5107, 23.2196],
	    '广西': [108.479, 23.1152],
	    '海南': [110.3893, 19.8516],
	    '重庆': [107.7539, 30.1904],		  
	    '四川': [103.9526, 30.7617],
	    '贵州': [106.6992, 26.7682],
	    '云南': [102.9199, 25.4663],
	    '西藏': [91.1865, 30.1465],
	    '陕西': [109.1162, 34.2004],
	    '甘肃': [103.5901, 36.3043],
	    '青海': [101.4038, 36.8207],
	    '宁夏': [106.3586, 38.1775],
	    '新疆': [87.9236, 43.5883],
	    '台湾': [114.1458, 22.4350],
	    '香港': [114.1458,22.4350],
	    '澳门': [113.5754, 22.1487]
	};
var series = [];
function map(){
	var data=[];
data = [
	{
		"name": "上海",
		"value": 5500
	},
	{
		"name": "四川",
		"value": 218
	},
	{
		"name": "浙江",
		"value": 111
	},
	{
		"name": "广东",
		"value": 66
	},
	{
		"name": "湖北",
		"value": 120
	},
	{
		"name": "甘肃",
		"value": 99
	},
	{
		"name": "内蒙古",
		"value": 107
	},
	{
		"name": "黑龙江",
		"value": 71
	},
	{
		"name": "陕西",
		"value": 47
	},
	{
		"name": "新疆",
		"value": 55
	},
	{
		"name": "江苏",
		"value": 122
	},
	{
		"name": "广西",
		"value": 109
	},
	{
		"name": "安徽",
		"value": 314
	},
	{
		"name": "青海",
		"value": 30
	},
	{
		"name": "山东",
		"value": 219
	},
	{
		"name": "吉林",
		"value": 47
	},
	{
		"name": "福建",
		"value": 92
	},
	{
		"name": "重庆",
		"value": 62
	},
	{
		"name": "河南",
		"value": 791
	},
	{
		"name": "天津",
		"value": 102
	},
	{
		"name": "海南",
		"value": 101
	},
	{
		"name": "北京",
		"value": 14
	},
	{
		"name": "江西",
		"value": 112
	},
	{
		"name": "贵州",
		"value": 81
	},
	{
		"name": "云南",
		"value": 69
	},
	{
		"name": "河北",
		"value": 290
	},
	{
		"name": "山西",
		"value": 235
	},
	{
		"name": "湖南",
		"value": 137
	},
	{
		"name": "辽宁",
		"value": 50
	},
	{
		"name": "宁夏",
		"value": 72
	}
];
	var convertData = function (data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	    	var da = [];
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
	series=[{
	    type: 'effectScatter',
	    coordinateSystem: 'geo',
	    data: convertData(data),
	    symbolSize: function(val) {
	        return 3 + val[2] / 1000;
	    },
	    label: {
	        normal: {
	            formatter: '{b}',
	            position: 'right',
	            color: '#ffffff',
	            fontSize:12,
	            show: true,
	        },
	        emphasis: {
	            show: true,
	        }
	    },
	    itemStyle: {
	        color: '#f93b08',
	    },
	},{
		name: '报到人数',
	    type: 'map',
	    map: 'china',
	    geoIndex: 0,
	    showLegendSymbol: false, // 存在legend时显示
	    aspectScale: 0.75, //长宽比
	    roam:true,
	    top:0,
	    bottom: 0,
	    itemStyle:{
	    	normal:{
	    		label:{
	    			show:true,
	    			fontSize:8,
	    		}
	    	},
	        emphasis:{label:{show:true}}
	    },
	    animation: false,
	    data:data,
	}];
	var school = $("#school").val();
    var schoolzb = geoCoordMap[school];
    for (var i = 0; i < data.length; i++) {
    	var da = [];
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            da.push(geoCoord,schoolzb);
        }
        series.push({
	    	type: 'lines',
	        zlevel: 2,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0.1,
	            symbol: 'arrow',
	            symbolSize: 5
	        },
	        lineStyle: {
	            normal: {
	                color: '#9493d6',
	                width: 1,
	                opacity: 0.4,
	                curveness: 0.2
	            }
	        },
	        data: [{
	        	coords:da
	        }]
	    });
    }

	var chart = echarts.init(document.getElementById('map'));
		chart.setOption({
			title: {
				left: 'center',
	            text: '更多模板关注公众号：DreamCoders 免费获取',
	            textStyle:{
	            	color:"#fff",
					fontSize:12
	            },
	        },
			tooltip: {
	            trigger: 'item',
	            showDelay: 0,
	            transitionDuration: 0.2,
	            formatter: function (params) {
            		var value = (params.value + '').split('.');
            		value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            		if(value == "NaN" || params.componentSubType != "map"){
            			return "";
            		}
            		return params.seriesName + '<br/>' + params.name + ': ' + value;
	            }
	        },
			visualMap: {
	            min: 100,
	            max: 5000,
	            realtime: false,
	            calculable: false,
	            itemWidth : 10,
	            itemHeight:70,
	            bottom : 10,
	            seriesIndex: [1],
	            inRange: {
	                color: ['lightskyblue','#44a0ed' ,'#4470ed']
	            }
	        },
	        geo: {
		        map: 'china',
		        top:0,
		        bottom: 0,
		        label: {
		        	normal: {
		                show: false,
		                fontSize:8,
		            },
		            emphasis: {
		                show: false,
		            }
		        },
		        roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: '#eee',
		                borderColor: '#20a6C7'
		            },
		            emphasis: {
		                areaColor: '#2a333d'
		            }
		        }
		    },
		    series: series
		});
}
function optionNation(data){
	option3 = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'horizontal',//horizontal vertical
		        left: 'left',
		        bottom: 0,
		        data: ['汉族','回族','壮族','其他'],
		        itemWidth:10,
		        itemHeight:10, 
	            textStyle:{
	            	color:'#fff',
	                fontSize:8 
	            }
	 	        
		    },
		    series : [
		        {
		        	
		            name: '新生民族分布',
		            type: 'pie',
		            radius: ['40%', '50%'],
		            data : data,
		            label: {
		                normal: {
		                    formatter: '{a|{c}}\n{hr|}\n {a|{d}%}  ',
		                    rich: {
		                        a: {
		                            color: '#77e3fb',
		                            lineHeight: 14,
		                            align: 'center',
		                            fontSize:12,
		                        },
		                        hr: {
		                            borderColor: '#77e3fb',
		                            width: '100%',
		                            borderWidth: 0.5,
		                            height: 0
		                        }
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    lineStyle: {
		                        color: '#77e3fb'
		                    },
		                    smooth: 0.2,
		                    length: 5,
		                    length2: 10
		                }
		            },
		        }
		    ]
		};
	var registerDateRate = echarts.init(document.getElementById('stuNation')); 
	registerDateRate.setOption(option3);
	registerDateRate.on('click', function (params) {
	    console.log(params);
	    setHideAndShow();
	    hqxsssmzsj(params.data.mzbm,params.data.name);
	});
}
function stuNation(){
	var data= [
		{
			"name": "回族",
			"mzbm": "03",
			"value": 84,
			"bfb": "29.89%"
		},
		{
			"name": "壮族",
			"mzbm": "08",
			"value": 43,
			"bfb": "15.3%"
		},
		{
			"name": "蒙古族",
			"mzbm": "02",
			"value": 31,
			"bfb": "11.03%"
		},
		{
			"name": "满族",
			"mzbm": "11",
			"value": 31,
			"bfb": "11.03%"
		},
		{
			"name": "土家族",
			"mzbm": "15",
			"value": 23,
			"bfb": "8.19%"
		},
		{
			"name": "苗族",
			"mzbm": "06",
			"value": 18,
			"bfb": "6.41%"
		},
		{
			"name": "彝族",
			"mzbm": "07",
			"value": 8,
			"bfb": "2.85%"
		},
		{
			"name": "藏族",
			"mzbm": "04",
			"value": 8,
			"bfb": "2.85%"
		},
		{
			"name": "黎族",
			"mzbm": "19",
			"value": 6,
			"bfb": "2.14%"
		},
		{
			"name": "其他",
			"mzbm": "10,12,14,09,16,13,22,20,00,29,35,36,23,05,30,",
			"value": 29,
			"bfb": 10.359999999999998
		}
	];
	optionNation(data);
}

function affairNum(){

}


/**
 * 院系现场事项完成情况
 * @param affairId
 * @returns
 */
function selectAffairNumByYx(affairId){
	setHideAndShow();
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/selectAffairNumByYx.action",
		dataType : "json",
		data:{affairId:affairId,studentType:studentType},
		success : function(result){
			var data_row = ['院系','事项名称','办理人数','录取人数','完成率'];
			html_row = "<li class='item-sub-title'>";
			for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].COLLEGE+"' style='cursor:pointer;' href='javascript:;' " +
						"	onclick='selectAffairNumByZy(this.id,&apos;"+affairId+"&apos;)'><span>"+data[i].YXMC+"</span>" +
						"<span>"+data[i].NAME+"</span>" +
						"<span>"+data[i].RS+"</span>" +
						"<span>"+data[i].ZS+"</span>" +
						"<span>"+data[i].WCL+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}
/**
 * 专业现场事项完成情况
 * @param affairId
 * @returns
 */
function selectAffairNumByZy(collegeId,affairId){
	setHideAndShow();
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/selectAffairNumByZy.action",
		dataType : "json",
		data:{collegeId:collegeId,affairId:affairId,studentType:studentType},
		success : function(result){
			var data_row = ['专业','事项名称','办理人数','录取人数','完成率'];
			html_row = "<li class='item-sub-title'>";
			for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].MAJOR+"' style='cursor:pointer;' href='javascript:;' " +
						" onclick='selectAffairNumByBj(this.id,&apos;"+affairId+"&apos;)'><span>"+data[i].ZYMC+"</span>" +
						"<span>"+data[i].NAME+"</span>" +
						"<span>"+data[i].RS+"</span>" +
						"<span>"+data[i].ZS+"</span>" +
						"<span>"+data[i].WCL+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}
/**
 * 班级现场事项完成情况
 * @param affairId
 * @returns
 */
function selectAffairNumByBj(majorId,affairId){
	setHideAndShow();
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/selectAffairNumByBj.action",
		dataType : "json",
		data:{majorId:majorId,affairId:affairId,studentType:studentType},
		success : function(result){
			var data_row = ['班级','事项名称','办理人数','录取人数','完成率'];
			html_row = "<li class='item-sub-title'>";
			for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li><span>"+data[i].BJMC+"</span>" +
						"<span>"+data[i].NAME+"</span>" +
						"<span>"+data[i].RS+"</span>" +
						"<span>"+data[i].ZS+"</span>" +
						"<span>"+data[i].WCL+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}


function studentAge(){
	var da = [
		{
			"name": 15,
			"value": 1
		},
		{
			"name": 16,
			"value": 8
		},
		{
			"name": 17,
			"value": 29
		},
		{
			"name": 18,
			"value": 542
		},
		{
			"name": 19,
			"value": 4964
		},
		{
			"name": 20,
			"value": 2304
		},
		{
			"name": 21,
			"value": 513
		},
		{
			"name": 22,
			"value": 239
		},
		{
			"name": 23,
			"value": 432
		},
		{
			"name": 24,
			"value": 440
		},
		{
			"name": 25,
			"value": 249
		},
		{
			"name": 26,
			"value": 105
		},
		{
			"name": 27,
			"value": 49
		},
		{
			"name": 28,
			"value": 37
		},
		{
			"name": 29,
			"value": 23
		},
		{
			"name": 30,
			"value": 8
		},
		{
			"name": 31,
			"value": 19
		},
		{
			"name": 32,
			"value": 13
		},
		{
			"name": 33,
			"value": 16
		},
		{
			"name": 34,
			"value": 13
		},
		{
			"name": 35,
			"value": 8
		},
		{
			"name": 36,
			"value": 5
		},
		{
			"name": 37,
			"value": 4
		},
		{
			"name": 38,
			"value": 2
		},
		{
			"name": 39,
			"value": 3
		},
		{
			"name": 40,
			"value": 1
		},
		{
			"name": 41,
			"value": 2
		},
		{
			"name": 42,
			"value": 1
		}
	];
	var data = []
	var lt = 0;
	var gt = 0;
	var a=[];
	for(i = 0; i<da.length; i++){
		if(da[i].name < 17){
			lt = lt + da[i].value;
		}else if(da[i].name > 20){
			gt = gt + da[i].value;
		}else {
			data.push(da[i].value);
		}
	}
	data.unshift(lt)
	data.push(gt);
	optionage(data);
}
function optionage(data){
	var optionAge = {
			grid:{
	   	        top:5,
	   	     	bottom:15,
	   	    },
		    xAxis: {
		        type: 'category',
		        data: ['小于17岁','17岁','18岁','19岁','20岁','大于20岁'],
		        axisLine: {
	 	            lineStyle: {
	 	                color: "#a0c0ef",
	 	                opacity:0.1,
	 	            }
	 	        },
	 	        axisLabel:{
	 	        	color:"#eaeaea",
	 	        	interval:0,
	 	            textStyle:{
	 	                fontSize:8
	 	            }
	 	        },
	 	       axisTick:{
	 	        	show:false,
	 	        }
		    },
		    yAxis: {
		        type: 'value',
		        axisLine: {
		        	show:false,
	 	            lineStyle: {
	 	                color: "#eaeaea"
	 	            }
	 	        },
	 	        axisLabel:{
	 	        	color:"#eaeaea",
	 	            textStyle:{
	 	                fontSize:8
	 	            },
	 	        },
	 	        splitLine:{
	 	            show:true,
	 	           lineStyle:{
	 	        	   color:'#cbdaef',
	 	        	   opacity:0.1,
	 	           }
	 	        },
	 	        axisTick:{
		        	show:false,
		        }
		    },
		    series: [{
		        data: data,
		        barWidth:10,
		        type: 'bar',
		        label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    color:'83bff6',
	                    fontSize:8,
	                }
	            },
		        itemStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1,
	                        [
	                            {offset: 0, color: '#83bff6'},
	                            {offset: 0.5, color: '#188df0'},
	                            {offset: 1, color: '#188df0'}
	                        ]
	                    )
	                },
	            },
		    }]
		};
		var registerDateRate = echarts.init(document.getElementById('sutdentAge'));
		registerDateRate.setOption(optionAge);
}


/**
 * 点击新生少数民族院系，下钻专业
 */
function getZyByssmz(collegeId,mzbm,mzmc){
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/getZyByssmz.action",
		dataType : "json",
		data:{collegeId:collegeId,mzbm:mzbm,studentType:studentType},
		success : function(result){
			var data_row = ['专业',mzmc+'录取人数',mzmc+'报到人数',mzmc+'报到率'];
			html_row = "<li class='item-sub-title'>";
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li  id='"+data[i].MAJOR+"' style='cursor:pointer;' href='javascript:;'  " +
						" onclick='getBjByssmz(this.id,&apos;"+mzbm+"&apos;,&apos;"+mzmc+"&apos;)'><span style='width: 30%;'>"+data[i].ZYMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ1+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ3+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}

/**
 * 点击新生少数民族院系，下钻班级
 */
function getBjByssmz(majorId,mzbm,mzmc){
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/getBjByssmz.action",
		dataType : "json",
		data:{majorId:majorId,mzbm:mzbm,studentType:studentType},
		success : function(result){
			var data_row = ['班级',mzmc+'录取人数',mzmc+'报到人数',mzmc+'报到率'];
			html_row = "<li class='item-sub-title'>";
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li ><span style='width: 30%;'>"+data[i].BJMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ1+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ3+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}


/**
 * 点击报到人数前八省份下钻页面
 */
function hqsyyxrs(value){
	setHideAndShow();
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/hqsyyxrs.action",
		dataType : "json",
		data:{sf:value,studentType:studentType},
		success : function(result){
			var data_row = ['院系',value+'省录取人数',value+'省报到人数',value+'省报到率'];
			html_row = "<li class='item-sub-title'>";
			/*for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}*/
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].COLLEGE+"' style='cursor:pointer;' href='javascript:;' " +
						" onclick='hqsyzyrs(this.id,&apos;"+value+"&apos;)'><span style='width: 30%;'>"+data[i].YXMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ3+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ4+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}

/**
 * 点击报到人数前八省份下钻页面，专业
 */
function hqsyzyrs(collegeId,value){
	setHideAndShow();
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/hqsyzyrs.action",
		dataType : "json",
		data:{sf:value,collegeId:collegeId,studentType:studentType},
		success : function(result){
			var data_row = ['院系',value+'省录取人数',value+'省报到人数',value+'省报到率'];
			html_row = "<li class='item-sub-title'>";
			/*for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}*/
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].MAJOR+"' style='cursor:pointer;' href='javascript:;' onclick='hqsybjrs(this.id,&apos;"+value+"&apos;)'><span style='width: 30%;'>"+data[i].ZYMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ3+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ4+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}

/**
 * 点击报到人数前八省份下钻页面，班级
 */
function hqsybjrs(majorId,value){
	setHideAndShow();
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/hqsybjrs.action",
		dataType : "json",
		data:{majorId:majorId,sf:value,studentType:studentType},
		success : function(result){
			var data_row = ['院系',value+'省录取人数',value+'省报到人数',value+'省报到率'];
			html_row = "<li class='item-sub-title'>";
			/*for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}*/
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li><span style='width: 30%;'>"+data[i].BJMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ3+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ4+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}


/**
 * 迎新大屏触屏事件(男女报到、入住一级下钻点击事件)
 */
function hqbdzbqk(value){
	setHideAndShow();
	var data_row;
	if(value=='bd1'){//报到男
		data_row = ['院系','男生报到人数','男生录取人数','报到率'];
	}else if(value=='bd0'){//报到女
		data_row = ['院系','女生报到人数','女生录取人数','报到率'];
	}else if(value=='rz1'){//入住男
		data_row = ['院系','男生入住人数','男生报到人数','男生录取人数'];
	}else if(value=='rz0'){//入住女
		data_row = ['院系','女生入住人数','女生报到人数','女生录取人数'];
	}
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/hqbdzbqk.action",
		dataType : "json",
		data:{value:value,studentType:studentType},
		success : function(result){
			html_row = "<li class='item-sub-title'>";
			/*for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}*/
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].COLLEGE+"' style='cursor:pointer;' href='javascript:;' " +
						" onclick='getZySex(this.id,&apos;"+value+"&apos;)'><span style='width: 30%;'>"+data[i].YXMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ3+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ4+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})

}
/**
 * 迎新大屏触屏事件(男女报到、入住一级下钻点击事件)
 * @returns
 */
function getZySex(collegeId,value){
	setHideAndShow();
	var data_row;
	if(value=='bd1'){//报到男
		data_row = ['专业','男生报到人数','男生录取人数','报到率'];
	}else if(value=='bd0'){//报到女
		data_row = ['专业','女生报到人数','女生录取人数','报到率'];
	}else if(value=='rz1'){//入住男
		data_row = ['专业','男生入住人数','男生报到人数','男生录取人数'];
	}else if(value=='rz0'){//入住女
		data_row = ['专业','女生入住人数','女生报到人数','女生录取人数'];
	}
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/getZySex.action",
		dataType : "json",
		data:{collegeId:collegeId,value:value,studentType:studentType},
		success : function(result){
			html_row = "<li class='item-sub-title'>";
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].MAJOR+"' style='cursor:pointer;' href='javascript:;' " +
						" onclick='getBjSex(this.id,&apos;"+value+"&apos;)'><span style='width: 30%;'>"+data[i].ZYMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ3+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ4+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}

/**
 * 迎新大屏触屏事件(男女报到、入住一级下钻点击事件)
 * @returns
 */
function getBjSex(majorId,value){
	setHideAndShow();
	var data_row;
	if(value=='bd1'){//报到男
		data_row = ['班级','男生报到人数','男生录取人数','报到率'];
	}else if(value=='bd0'){//报到女
		data_row = ['班级','女生报到人数','女生录取人数','报到率'];
	}else if(value=='rz1'){//入住男
		data_row = ['班级','男生入住人数','男生报到人数','男生录取人数'];
	}else if(value=='rz0'){//入住女
		data_row = ['班级','女生入住人数','女生报到人数','女生录取人数'];
	}
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/getBjSex.action",
		dataType : "json",
		data:{majorId:majorId,value:value,studentType:studentType},
		success : function(result){
			html_row = "<li class='item-sub-title'>";
			html_row+="<span style='width: 30%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 22%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 21%;'>"+data_row[3]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li><span style='width: 30%;'>"+data[i].BJMC+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ2+"</span>" +
						"<span style='width: 22%;'>"+data[i].LSJ3+"</span>" +
						"<span style='width: 21%;'>"+data[i].LSJ4+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}

/**
 * 迎新大屏触屏事件(根据生源地查学生)
 */
function yxdpcpsj(sf){
	$.ajax({
		type : "post",
		url : "/stusv-estudent-main/stusv/bigdata/nologin/getXsxxBySyd.action",
		dataType : "json",
		data:{sf:sf,studentType:studentType},
		success : function(result){
			var data_row = ['考生号','姓名','性别','专业','班级'];
			html_row = "<li class='item-sub-title'>";
			/*for(i=0; i<data_row.length; i++) {
				html_row+="<span>"+data_row[i]+"</span>";
			}*/
			html_row+="<span style='width: 21%;'>"+data_row[0]+"</span>";
			html_row+="<span style='width: 13%;'>"+data_row[1]+"</span>";
			html_row+="<span style='width: 8%;'>"+data_row[2]+"</span>";
			html_row+="<span style='width: 23%;'>"+data_row[3]+"</span>";
			html_row+="<span style='width: 30%;'>"+data_row[4]+"</span>";
			html_row+="</li>"
			$("#part7").html(html_row);
			var data = result.jData;
			html = "";
			for(i=0; i<data.length; i++) {
				html+="<li id='"+data[i].ID+"' style='cursor:pointer;' href='javascript:;' " +
						" onclick='getSxblqk(this.id)'><span style='width: 21%;'>"+data[i].KSH+"</span>" +
						"<span style='width: 13%;'>"+data[i].XM+"</span>" +
						"<span style='width: 8%;'>"+data[i].XB+"</span>" +
						"<span style='width: 23%;'>"+data[i].ZY+"</span>" +
						"<span style='width: 30%;'>"+(data[i].BJ==null?"暂未分班":data[i].BJ)+"</span></li>"
			}
			$("#collegeMessage").html(html);
		},
		error : function(result){
			console.log(result);
		}
	})
}


/**
 * 设置列表数据显示
 */
function setHideAndShow(){
	$(".center-wrap .J_page1").hide();
	$(".center-wrap .J_page2").fadeIn('slow', function() {
		$(".J_page2 .J_Box1").niceScroll(
				{
					 railpadding: {
				     right: -16
				    }
				 //autohidemode:false
	  			}
			);
	});
}