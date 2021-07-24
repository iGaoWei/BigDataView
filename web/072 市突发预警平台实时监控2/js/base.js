function fnW(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}



/*大屏*/
//获取当前时间
var timer = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var day = date.getDay(); //获取当前星期几 
    var ampm = hours < 12 ? 'am' : 'pm';
    $('#time').html(fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));
    $('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span><span>' + getMyDay(date) + '</span>')

}, 1000)

function getMyDay(date){
	var week;
	if(date.getDay()==0) week="周日"
	if(date.getDay()==1) week="周一"
	if(date.getDay()==2) week="周二"
	if(date.getDay()==3) week="周三"
	if(date.getDay()==4) week="周四"
	if(date.getDay()==5) week="周五"
	if(date.getDay()==6) week="周六"
	return week;
}

//预警按发布区域统计
//var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'macarons'); 
var areatj =echarts.init(document.getElementById("areatj")); 

option = {
	color: ['#3398DB'],//此处可设置柱条全局颜色
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
	
    grid: {
        left: '13%',
        right: '2%',
        bottom: '5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data: ['大连市区','旅顺口区','金州区','普兰店市','瓦房店市','庄河市','长海县','长兴岛'],
            axisTick: {
                alignWithLabel: true
            },
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#cdddf7',
					width:1,//这里是为了突出显示加上的
				}
			},
			 axisLabel: {interval:0,rotate:40 }
        }
    ],
    yAxis : [
        {
            type : 'value',
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#cdddf7',
					width:1,//这里是为了突出显示加上的
				}
			} 
        }
    ],
    series : [
        {
            name:'发布数量',
            type:'bar',
            barWidth: '50%',
            data:[400, 52, 200, 334, 390, 330, 220, 220],
			itemStyle:{//
              normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
							{offset: 1, color: '#6dadee'},
                            {offset: 0.5, color: '#377fc8'},
                            {offset: 0, color: '#377fc8'}
                        ]
                    )
                },
			}
        }
    ]
};


areatj.setOption(option,true);

window.addEventListener('resize', function() {
	areatj.resize(); 
	  })


//预警按发布渠道统计
//var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'macarons'); 
var qdtj =echarts.init(document.getElementById("qdtj")); 

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '5%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
		//设置轴线的属性
		axisLine:{
			lineStyle:{
				color:'#cdddf7',
				width:1,//这里是为了突出显示加上的
			}
		}
    },
    yAxis: {
        type: 'category',
		data : ['国突',  '其它渠道',   '邮件', '微博','传真','多媒体','短信'],
       
		//设置轴线的属性
		axisLine:{
			lineStyle:{
				color:'#cdddf7',
				width:1,//这里是为了突出显示加上的
			}
		} 
    },
    series: [
        {
            name: '发布数量',
            type: 'bar',
            data: [70, 10, 52, 200, 334, 390, 330],
			itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
								{offset: 1, color: '#1181e6'},
                                {offset: 0.5, color: '#1181e6'},
                                {offset: 0, color: '#6dadee'}
								

                            ]
                        )
                    }
                }
		}
    ]
};

qdtj.setOption(option);

//预警按发布级别统计
//var pie_fanzui =echarts.init(document.getElementById("pie_fanzui"),'macarons'); 
var jbtj =echarts.init(document.getElementById("jbtj"),'infographic'); 

option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'发布数量',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'红色级别'},
                {value:310, name:'蓝色级别'},
                {value:234, name:'黄色级别'},
                {value:135, name:'橙色级别'}
            ]
        }
    ]
};
                    



jbtj.setOption(option);




//===================本月发布预警统计=======================
//var line_time =echarts.init(document.getElementById("line_time"),'shine'); 
var line_time =echarts.init(document.getElementById("line_time"),'shine'); 
//var line_time =echarts.init(document.getElementById("line_time"),'infographic'); 
var option = {
        // 给echarts图设置背景色
        //backgroundColor: '#FBFBFB',  // -----------> // 给echarts图设置背景色
        color: ['#1181e6'],
        tooltip: {
            trigger: 'axis'
        },
       
		grid:{
                    x:40,
                    y:30,
                    x2:5,
                    y2:20
                    
                },
        calculable: true,


        xAxis: [{
             type: 'category',
			 data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
		     axisLabel: {
				color: "#cdddf7" //刻度线标签颜色
			 },
			 //设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#cdddf7',
					width:1,//这里是为了突出显示加上的
				}
			} 
        }],
        yAxis: [{

            type: 'value',
            axisLabel: {
			color: "#cdddf7" //刻度线标签颜色
			},
			//设置轴线的属性
			axisLine:{
				lineStyle:{
					color:'#cdddf7',
					width:1,//这里是为了突出显示加上的
				}
			} 
        }],
        series: [{
            name: '条数',
            type: 'line',
            data: [10,5, 6, 7, 8, 4, 3,10,5, 6, 7, 8, 4, 3,5, 6, 7, 8, 4, 3, 3, 3,5, 6, 7, 8, 4, 3, 3],
            
        }]
    };


line_time.setOption(option);



//时间选择器
var startV = '';
var endV = '';
laydate.skin('danlan');
var startTime = {
    elem: '#startTime',
    format: 'YYYY-MM-DD',
    min: '1997-01-01', //设定最小日期为当前日期
    max: laydate.now(), //最大日期
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        startV = datas;
        endTime.min = datas; //开始日选好后，重置结束日的最小日期
    }
};
var endTime = {
    elem: '#endTime',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now(),
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        endV = datas;
    }
};

//laydate(startTime);
//laydate(endTime);

//时间选择器
var startVs = '';
var endVs = '';
laydate.skin('danlan');
var startTimes = {
    elem: '#startTimes',
    format: 'YYYY-MM-DD',
    min: '1997-01-01', //设定最小日期为当前日期
    max: '2099-06-16', //最大日期
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        startVs = datas;
        endTimes.min = datas; //开始日选好后，重置结束日的最小日期
        setQgData($('#barTypes').parent().parent(), 1);
    }
};
var endTimes = {
    elem: '#endTimes',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now(),
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        endVs = datas;
        setQgData($('#barTypes').parent().parent(), 1);
    }
};

//laydate(startTimes);
//laydate(endTimes);




//更改日期插件的样式
function dateCss() {
    var arr = $('#laydate_box').attr('style').split(';');
    var cssStr =
        'position:absolute;right:0;';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('top') != -1) {
            cssStr += arr[i];
        }
    }

    $('#laydate_box').attr('style', cssStr);
}


var workDate;
var time = {
    elem: '#times',
    format: 'YYYY-MM-DD',
    min: laydate.now(),
    max: laydate.now() + 30,
    istime: true,
    istoday: true,
    fixed: false,
    choose: function (datas) {
        //        startTime.max = datas; //结束日选好后，重置开始日的最大日期
        workDate = datas;
    }
};

//laydate(time);



