//大屏
$(function(){
	$("body").click(function(){
		$(".depo_down").slideUp();
	})
	$(".depot").click(function(e){
		e.stopPropagation();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(".depo_down").slideUp();
		}else{
			$(this).addClass("active");
			$(".depo_down").slideDown();
		}
	})
	$(".depo_down li").click(function(){
		var tex=$(this).text();
		$(".depot input").val(tex);
	})
	//选择仓库
	laydate.render({
	  elem: '#time_star'
	  ,type: 'datetime'
	});
	laydate.render({
	  elem: '#time_end'
	  ,type: 'datetime'
	});
	//时间
	var myChart1 =echarts.init(document.getElementById('home_today'));
	 var option1 = {
	 	backgroundColor: '#1b1e25',
	    title: {
	       text: ''
	    },

	    tooltip: {
	      enterable:true,
          trigger: 'axis'

		},
	    grid: {
	        left: '3%',
	        right: '3%',
	        top: '10%',
	        bottom:"2%",
	        containLabel: true
	    },
	    xAxis : [
	        {
        	   axisLine:{
                  lineStyle:{
                    color:'#3e4148',
                    width:1,//这里是为了突出显示加上的
                  }
               },
	            type : 'category',
	            boundaryGap : false,
	            data : ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
	        }
	    ],
	    yAxis : [
	        {
	        	splitLine:{
		            lineStyle:{
		                color: '#21242b',
		            }
		        },
	            type : 'value',
	            axisLine:{
                    lineStyle:{
                        color:'#43484e',
                        width:0,//这里是为了突出显示加上的
                    }
                }
	        }
	    ],
	    series : [
	        {
	            name:'新增单量',
	            type:'line',
	            symbol:'none',
	            data:[50, 132,40, 1500, 2000, 800, 210,100],
	            smooth: true,
	            itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#533d86'
                        }
                    }
                },
                areaStyle: {normal: { color: ['rgba(255,255,255,0.1)']}},

	        },
	        {
	            name:'拣选单量',
	            type:'line',
	            symbol:'none',
	            data:[2, 8, 500, 2000,200,100, 50,50],
	            smooth: true,
	            itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#60ba9e'
                        }
                    }
                },
                areaStyle: {normal: { color: ['rgba(255,255,255,0.1)']}},

	        },
	        {
	            name:'质检单量',
	            type:'line',
	             symbol:'none',
	            data:[150, 500, 530, 1500, 1000, 330, 410,60],
	            smooth: true,
	            itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#476d9e'
                        }
                    }
                },
                areaStyle: {normal: { color: ['rgba(255,255,255,0.1)']}},

	        },
	        {
	            name:'出库单量',
	            type:'line',
	             symbol:'none',
	            data:[800, 400, 1500, 1200, 800, 700, 600,200],
	            smooth: true,
	            itemStyle : {
                    normal : {
                        lineStyle:{
                            color:'#b1526a'
                        }
                    }
                },
	            areaStyle: {normal: { color: ['rgba(255,255,255,0.1)']}},
	        }
	    ]
	};

	var myChart2 =echarts.init(document.getElementById('ship_order'));
	var option2 = {
		backgroundColor: '#1b1e25',
		title: {
	       text: '货主订单执行情况',
	       textStyle:{ //设置主标题风格
			 color:'#ffffff',//设置主标题字体颜色
			 fontSize:'14px',

			},
			subtext: '货主1   货主2     货主3     货主4     货主5     货主6      货主7',
			subtextStyle: {
		        color: '#ffffff'  // 副标题文字颜色
		    }
	    },
	    color: ['#ed4b97', '#26a0c9', '#44cb90', '#d2bd7a'],
	      tooltip: {},
	    legend: {
	        data: ['未开始', '作业中', '出库', '拦截'],
	        textStyle: {
		        color: '#ffffff'
		    },
		    right: 10,
		    itemWidth: 10,
            itemHeight: 10
	    },

	    calculable: true,
	     grid: {
	        left: '3%',
	        right: '3%',
	        bottom:"20",
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {show: false},
	            data: ['货主1', '货主2', '货主3', '货主4', '货主5','货主6','货主7'],
	            "axisLabel":{
		    		interval: 0
		    	},
		    	axisLine:{
                  lineStyle:{
                    color:'#ffffff',
                    width:1,//这里是为了突出显示加上的
                  }
               },

	        }
	    ],
	    dataZoom: [{
                     type: 'slider',
                     show: true, //flase直接隐藏图形
                     xAxisIndex: [0],
                     left: '9%', //滚动条靠左侧的百分比
                     bottom: -5,
                     height: 15,
                     start: 0,//滚动条的起始位置
                     end: 50
         }] ,
	    yAxis: [
	        {
	        	splitLine:{
		            lineStyle:{
		                color: '#21242b',
		            }
		        },
	            type: 'value',
	            axisLine:{
                    lineStyle:{
                        color:'#43484e',
                        width:0,//这里是为了突出显示加上的
                    }
                }
	        }
	    ],
	    series: [
	        {
	            name: '未开始',
	            type: 'bar',
	            barGap: 0.2,
	            data: [320, 332,310,200,222,40,300]
	        },
	        {
	            name: '作业中',
	            type: 'bar',
	            data: [130, 182,30,50,122,20,30]
	        },
	        {
	            name: '出库',
	            type: 'bar',
	            data: [320, 82,220,250,322,50,10]
	        },
	        {
	            name: '拦截',
	            type: 'bar',
	            data: [100, 182,120,100,22,100,30]
	        }
	    ]
	};
	var myChart3 =echarts.init(document.getElementById('imple'));
	var option3 = {
		grid: {
	        left: '3%',
	        right: '3%',
	        top: '10%',
	        bottom:"2%",
	        containLabel: true
	    },
		title: {
	       text: '订单执行情况',
	       textStyle:{ //设置主标题风格
			 color:'#90939a',//设置主标题字体颜色
			 fontSize:'14px',

			},
	    },
		backgroundColor: '#1b1e25',
	    tooltip: {
	        trigger: 'item',
	        formatter: " {b}:{d}%"
	    },
	    legend: {
	        orient: 'vertical',
	        right: 10,
            y:'center',
            textStyle: {
		        color: '#7c8081'
		    },
            itemWidth: 10,
            itemHeight: 10,
	        data:['未开始','波次','拣选','质检','拦截','出库'],
	        formatter: function (params) {
			   for (var i = 0; i < option3.series[0].data.length; i++) {
			       if (option3.series[0].data[i].name == params) {
			           return params +":"+ option3.series[0].data[i].value;
			       }
			   }
			}

	    },
	    series: [
	        {
	            name:'订单执行情况',
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
	                        fontSize: '20',
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
	                {value:734, name:'未开始'},
	                {value:260, name:'波次'},
	                {value:62, name:'拣选'},
	                {value:294, name:'质检'},
	                {value:5376, name:'拦截'},
	                {value:17672, name:'出库'}
	            ],
			    itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                     },
                    normal:{
                        color:function(params) {
                        //自定义颜色
                        var colorList = [
                                '#74529e', '#da8f3c', '#447cb7', '#be4868', '#4dc892', '#efbb43',
                            ];
                            return colorList[params.dataIndex]
                         }
                    }
              }
	        }
	    ]
	};
	var setoption=function(){
		myChart1.setOption(option1);//今日作业趋势
		myChart2.setOption(option2);//货主订单执行情况
		myChart3.setOption(option3);//订单执行情况
	}
	 setoption()
	$(window).resize(function(){
		myChart1.resize();
		myChart2.resize();
		myChart3.resize();
	})


    $(".abort_list").niceScroll({
        cursorcolor: "rgba(255,255,255,0.2)", //#CC0071 光标颜色
		cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
		touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
		cursorwidth: "6px", //像素光标的宽度
		cursorborder: "0", // 游标边框css定义
		cursorborderradius: "5px", //以像素为光标边界半径
		autohidemode:true //是否隐藏滚动条

    });
     $(".situ_list").niceScroll({
        cursorcolor: "rgba(255,255,255,0.2)", //#CC0071 光标颜色
		cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
		touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
		cursorwidth: "6px", //像素光标的宽度
		cursorborder: "0", // 游标边框css定义
		cursorborderradius: "5px", //以像素为光标边界半径
		autohidemode:true //是否隐藏滚动条

    });

   //滚动条
   $(".situ_use li").each(function(){
   	var all_num=parseInt($(this).find(".lal_num").text());
   	var at_num=parseInt($(this).find(".quan_num").text());
   	var len=(at_num/all_num)*100+'%';
   	$(this).find(".tity").css({"width":len})
   })
	//上一小时作业情况
})
