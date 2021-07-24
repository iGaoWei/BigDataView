//全局客户类型(1:公众;2:政企)
/*大屏*/
var g_custType="1";
//数据日期
var g_dataDate="20191231"
//全局渠道信息
var g_channelInfo={};
var g_channelCode="";
var g_channelName="";


//门店基本信息
function loadChannelBaseInfo(data){
	//获取渠道积分数据
	var staffHandleInfo=data.staffHandleInfo;
	//获取渠道总积分
	var channelJfMap=staffHandleInfo.channelJfMap || {};
	//获取渠道总积分
	var channelSum=channelJfMap.channelSum || 0;
	//获取渠道排名
	var channelOrder=channelJfMap.channelOrder || 1;
	var channelTotal=channelJfMap.channelTotal || 1
	var popval=String(parseFloat(channelOrder/channelTotal));
	//获取台席健康度得分
	var channelDeviceInfo=data.channelDeviceInfo;
	var finalDeviceScore=channelDeviceInfo.finalDeviceScore || 0;
	if(finalDeviceScore<=0){
		$("#base-info .device-score").find("img").attr("src","../static/images/star3.png");
	}else if(finalDeviceScore<0.95){
		$("#base-info .device-score").find("img").attr("src","../static/images/star2.png");
	}else{
		$("#base-info .device-score").find("img").attr("src","../static/images/star1.png");
	}
	$("#base-info .device-score").find(".score-val").text(finalDeviceScore+"分");
	
	//设置渠道当日客流量、订单量
	$("#base-info").find("div[type='dingdanVal']").text(channelDeviceInfo.channelOrderNum || "--");
	$("#base-info").find("div[type='custNumVal']").text(channelDeviceInfo.channelCustNum || "--");
	
	//设置门店基本信息-违规行为
	var channelStartWeiGui=staffHandleInfo.channelStartWeiGui || 0;
	if(channelStartWeiGui==1){
		$("#base-info .weigui").find("img").attr("src","../static/images/star1.png");
	}else{
		$("#base-info .weigui").find("img").attr("src","../static/images/star3.png");
	}
	$("#base-info .weigui").find(".score-val").text(channelStartWeiGui+"分");
	//设置门店基本信息-营销评级
	var yingxiaoval=1-popval;
	yingxiaoval=keepTwoDecimal(yingxiaoval);
	if(yingxiaoval<=0){
		$("#base-info .yingxiao").find("img").attr("src","../static/images/star3.png");
	}else if(yingxiaoval<0.95){
		$("#base-info .yingxiao").find("img").attr("src","../static/images/star2.png");
	}else{
		$("#base-info .yingxiao").find("img").attr("src","../static/images/star1.png");
	}
	$("#base-info .yingxiao").find(".score-val").text(yingxiaoval+"分");
	//设置门店基本信息-受理速度
	var avgTimeScore=0;
	var timeStepAnalysis=data.timeStepAnalysis;
	if(timeStepAnalysis.channelTime.length>0){
		avgTimeScore=timeStepAnalysis.channelTime[4]/timeStepAnalysis.provinceTime[4];
		if(avgTimeScore>1){
			avgTimeScore=avgTimeScore*0.335;
		}
	}
	avgTimeScore=keepTwoDecimal(avgTimeScore*0.5+0.5);
	avgTimeScore=avgTimeScore>1?1:avgTimeScore;
	if(avgTimeScore<=0){
		$("#base-info .avgtime").find("img").attr("src","../static/images/star3.png");
	}else if(avgTimeScore<0.95){
		$("#base-info .avgtime").find("img").attr("src","../static/images/star2.png");
	}else{
		$("#base-info .avgtime").find("img").attr("src","../static/images/star1.png");
	}
	$("#base-info .avgtime").find(".score-val").text(avgTimeScore+"分");
	//设置门店基本信息-业务量
	var yewuliangVal=0;
	var channelHandleInfo=data.channelHandleInfo;
	var orderNumData=channelHandleInfo.orderNumData;
	if(orderNumData.length>2){
		var t1=orderNumData[orderNumData.length-1];
		var t2=orderNumData[orderNumData.length-2];
		if(t1!=0 && t2!=0){
			yewuliangVal=t1>t2?t2/t1:t1/t2;
		}else{
			yewuliangVal=0.45;
		}
		if(yewuliangVal>1){
			yewuliangVal=yewuliangVal*0.335;
		}
	}
	yewuliangVal=keepTwoDecimal(yewuliangVal*0.5+0.5);
	yewuliangVal=yewuliangVal>1?1:yewuliangVal;
	if(yewuliangVal<=0){
		$("#base-info .yewuliang").find("img").attr("src","../static/images/star3.png");
	}else if(yewuliangVal<0.95){
		$("#base-info .yewuliang").find("img").attr("src","../static/images/star2.png");
	}else{
		$("#base-info .yewuliang").find("img").attr("src","../static/images/star1.png");
	}
	$("#base-info .yewuliang").find(".score-val").text(yewuliangVal+"分");
	//设置门店基本信息-排队机耗时
	var channelHandleInfo=data.channelHandleInfo;
	var callTime=channelHandleInfo.lineUpData[channelHandleInfo.lineUpData.length-1];
	$("#base-info").find("div[type='lineUpVal']").text(callTime|| "无");
	//开始计算门店星级
	var channelTotalScore=parseFloat(finalDeviceScore)+parseFloat(channelStartWeiGui)+parseFloat(yingxiaoval)+parseFloat(avgTimeScore)+parseFloat(yewuliangVal);
	channelTotalScore=String(channelTotalScore);
	channelTotalScore=keepTwoDecimal(channelTotalScore);
	$("#base-info").find(".channel-total-score").text(channelTotalScore+"分" || "--分");
	$("#base-info").find(".chanenl-star").empty();
	var starLen=Math.floor(channelTotalScore);
	for(var idx=0;idx<starLen;idx++){
		var img='<img src="../static/images/star1.png"/>';
		$("#base-info").find(".chanenl-star").append(img);
	}
	$("#base-info").find(".chanenl-star").append('<div>'+channelTotalScore+'分</div>');
	
	if(starLen<channelTotalScore){
		var img='<img src="../static/images/star2.png" style="width:21px;height:20px;"/>';
		$("#base-info").find("#chanenl-star").append(img);
	}
	var unit="";
	if(channelSum>90000){
		unit="万";
		channelSum=keepTwoDecimal(channelSum/10000);
	}
	var maxval=channelSum-channelSum*(1-popval),currval=channelSum;
	//特殊处理，优化饼图数据美观
	if(0==channelSum ){
		maxval=1000;
	}
	//
	//
	//

	var option = {
        series: [{
            type: 'pie',radius: ['65%', '80%'],color: '#E63F19',label: {normal: {position: 'center'}},
            data: [{
                value: currval,//当前值
                name: '积分',
                label: {normal: {formatter: currval + unit,textStyle: {fontSize: 16,color: '#FED546'}}}
            },{
                value: maxval,//比对值
                name: '积分',
                label: {normal: {formatter: function (params) {return '\n积分' },textStyle: {color: '#fff',fontSize: 13}}},
                itemStyle: {normal: {color: 'rgba(255,255,255,.2)'},emphasis: {color: '#fff'}},
            }]
        }]
	};
    var myChart= echarts.init(document.getElementById('integral_echart'));
    myChart.clear();
    myChart.setOption(option);
    
    $("#base-info").find(".channel-name").text(g_channelName || "XXXX");
    var popval2=keepTwoDecimal(popval);
    $("#base-info").find(".popval").text("全省前"+(popval2*100)+"%" || "全省前0%");
    var rePortData={};
    //厅办理业务平均耗时
    rePortData.channelAvgTime=staffHandleInfo.channelAvgTime;
    //厅排队机
    rePortData.lineUpData=channelHandleInfo.lineUpData
    //渠道积分排名占比
    rePortData.popval=popval;
    rePortData.custNumData=channelHandleInfo.custNumData;
    channelReportContent(rePortData);
}
//渠道报告内容建议说明
function channelReportContent(rePortData){
	var reportContent="很抱歉，目前暂无可分析的数据";
	if(undefined!=rePortData.channelAvgTime && ""!=rePortData.channelAvgTime){
		if(rePortData.channelAvgTime>20){
			if(rePortData.popval<=0.3){
				reportContent="业绩很棒，受理偏慢，请适当加快受理";
			}else{
				reportContent="受理速度偏慢，影响客户感知，请加强受理技能培训";
			}
		}else{
			//判断厅是否有排队机
			if(rePortData.lineUpData.length>0){
				var callTime=rePortData.lineUpData[rePortData.lineUpData.length-1];
				var t1=rePortData.channelAvgTime-callTime;
				if(t1>=3){
					if(rePortData.popval<=0.3){
						reportContent="门店运营良好，可适当提升受理速度";
					}else{
						reportContent="门店运营良好，建议加强营销";
					}
				}else if(callTime>rePortData.channelAvgTime){
					reportContent="门店台席规划不合理，存在客户积压，请按业务类型分流";
				}else if(0<=t1 && t1<3){
					if(rePortData.popval<=0.3){
						reportContent="门店运营状态良好，台席规划合理，请继续保持";
					}else{
						reportContent="台席规划合理，建议适当加强营销";
					}
				}
			}else{
				var custNum=rePortData.custNumData[rePortData.custNumData.length-1] || 0;
				if(custNum<=50){
					if(rePortData.popval<=0.3){
						reportContent="营业效能规划合理，厅内客流量仍有上升空间";
					}else{
						reportContent="客流较小，请加强营销手段";
					}
				}else{
					if(rePortData.popval<=0.3){
						reportContent="厅店客流量大，营业效能规划合理，请继续保持";
					}else{
						reportContent="厅店客流量大，请把握机会加强营销";
					}
				}
			}
		}
	}
	$(".analysis-info").text(reportContent);
}

//门店受理详情
function loadChannelHandleDetail(data){
	var option = {
		    tooltip: {trigger: 'axis',axisPointer: {lineStyle: {color: '#fff'}}},
		    legend: {
		        icon: 'rect',
		        itemWidth: 14,itemHeight: 5,itemGap:10,
		        data: ['受理时长', '排队时长', '订单量','客流量'],
		        right: '10px',top: '0px',
		        textStyle: {fontSize: 12,color: '#fff'}
		    },
		    grid: {x:40,y:50,x2:45,y2:40},
		    xAxis: [{
		        type: 'category',boundaryGap: false,axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {textStyle: {color:'#fff'}},
		        data: data.dataDateArr
		    }],
		    yAxis: [{
		        type: 'value',
		        axisTick: {
		            show: false
		        },
		        axisLine: {lineStyle: {color: '#57617B'}},
		        axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}分'},
		        splitLine: {lineStyle: {color: '#57617B'}}
		    },{
		        type: 'value',
		        axisTick: {
		            show: false
		        },
		        axisLine: {lineStyle: {color: '#57617B'}},
		        axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}个'},
		        splitLine: {show: false,lineStyle: {color: '#57617B'}}
		    }],
		    series: [{
		        name: '受理时长',type: 'line',smooth: true,lineStyle: {normal: {width: 2}},
		        yAxisIndex:0,
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(185,150,248,0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(185,150,248,0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {normal: { color: '#B996F8'}},
		        data: data.handleTimeData
		    }, {
		        name: '排队时长',type: 'line',smooth: true,lineStyle: { normal: {width: 2}},
		        yAxisIndex:0,
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(3, 194, 236, 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(3, 194, 236, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {normal: {color: '#03C2EC'}},
		        data: data.lineUpData
		    }, {
		        name: '订单量',type: 'line',smooth: true,lineStyle: {normal: {width: 2}},
		        yAxisIndex:1,
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(218, 57, 20, 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(218, 57, 20, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {normal: {color: '#DA3914'}},
		        data: data.orderNumData
		    },{
		        name: '客流量',type: 'line',smooth: true,lineStyle: {normal: {width: 2}},
		        yAxisIndex:1,
		        areaStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: 'rgba(232, 190, 49, 0.3)'
		                }, {
		                    offset: 0.8,
		                    color: 'rgba(232, 190, 49, 0)'
		                }], false),
		                shadowColor: 'rgba(0, 0, 0, 0.1)',
		                shadowBlur: 10
		            }
		        },
		        itemStyle: {normal: {color: '#E8BE31'}},
		        data:data.custNumData
		    }]
		    
		    
	};
	var myChart = echarts.init(document.getElementById('channel_handle_detail'));
	myChart.clear();
	if(data.handleTimeData.length>0){
		myChart.setOption(option);
	}else{
		noDataTip($("#channel_handle_detail"));
	}
}


//加载营业员受理详情
function loadStaffHandleDetail(data){
	//获取员工违规信息
	var staffWgInfo=data.staffWgInfo;
	//获取员工积分信息
	var channelJfMap=data.channelJfMap;
	var channelStaffLen=data.channelStaffLen;
	var staffHandleInfo=data.staffHandleInfo || [],staffHandleInfoLen=staffHandleInfo.length;
	var html=[],index=0;
	for(var key in staffHandleInfo){
		var itemArr=staffHandleInfo[key];
		index++;
		var indexClass=(1==index)?"first":"";
		var wgCount=staffWgInfo[itemArr[0].staffCode] || "0";
		var tr1=[
			'<tr class="td-avg-time">',
			'<td colspan="3">',
					'<div class="index '+indexClass+'">'+itemArr[0].index+'</div>',
					'<div class="staff-name">'+itemArr[0].staffName+'</div>',
					'<div class="avg-time-label">|&nbsp;&nbsp;厅排名</div>',
					'<div class="avg-time-value">'+itemArr[0].index+'/'+channelStaffLen+'</div>',
				'</td>',
			'</tr>',
			'<tr>',
				'<td> ',
					'<div class="staff-cust-time">',
					   '<span style="font-size:15px;">订单耗时</span><br/><span style="color:#00A8FE;font-size:18px;font-weight:600;">'+itemArr[0].avgTime+'分</span>',
					'</div>',
				'</td>',
				'<td>',
					'<div class="staff-order-count">',
					    '<span style="font-size:15px;">订单量</span><br/><span style="color:#00A8FE;font-size:18px;font-weight:600;">'+itemArr[0].orderNum+'笔</span>',
					'</div>',
				'</td>',
				'<td>',
					'<div class="staff-alarm">',
					   '<span style="font-size:15px;">违规告警</span><br/><span style="color:#00A8FE;font-size:18px;font-weight:600;">'+wgCount+'次</span>',
					'</div>',
			    '</td>',
			'</tr> ',
			'<tr class="td-integral"> ',
				'<td colspan="3"> ',
				'<div class="integral-label">个人积分：</div> ',
				'<div class="integral-value">'+(channelJfMap[itemArr[0].staffCode+'_charge'] || 0)+'分</div> ',
				'<div class="integral-label" style="width:60px;">|厅排名</div>',
				'<div class="integral-value" style="width:100px;">'+(channelJfMap[itemArr[0].staffCode+"_index"] || 0)+'/'+(channelJfMap["channelLength"] || 0)+'</div>',
				'</td> ',
			'</tr> ',
		];
		var tr2=[];
		if(itemArr.length>1){
			index++;
			var indexClass=(2==index)?"second":"";
			var wgCount=staffWgInfo[itemArr[1].staffCode] || "0";
			tr2=[
				'<tr><td colspan="3"><div class="split-line"></div></td></tr>',
				'<tr class="td-avg-time"> ',
						'<td colspan="3"> ',
							'<div class="index '+indexClass+'">'+itemArr[1].index+'</div>',
							'<div class="staff-name">'+itemArr[1].staffName+'</div>',
							'<div class="avg-time-label">|&nbsp;&nbsp;厅排名</div>',
							'<div class="avg-time-value">'+itemArr[1].index+'|'+channelStaffLen+'</div>',
						'</td>',
				'</tr>',
				'<tr>',
						'<td> ',
							'<div class="staff-cust-time">',
							   '<span style="font-size:15px;">订单耗时</span><br/><span style="color:#00A8FE;font-size:18px;font-weight:600;">'+itemArr[1].avgTime+'分</span>',
							'</div>',
						'</td>',
						'<td>',
							'<div class="staff-order-count">',
							    '<span style="font-size:15px;">订单量</span><br/><span style="color:#00A8FE;font-size:18px;font-weight:600;">'+itemArr[1].orderNum+'笔</span>',
							'</div>',
						'</td>',
						'<td>',
							'<div class="staff-alarm">',
							   '<span style="font-size:15px;">违规告警</span><br/><span style="color:#00A8FE;font-size:18px;font-weight:600;">'+wgCount+'次</span>',
							'</div>',
					    '</td>',
				'</tr> ',
				'<tr class="td-integral"> ',
					'<td colspan="3"> ',
					'<div class="integral-label">个人积分：</div> ',
					'<div class="integral-value">'+(channelJfMap[itemArr[1].staffCode+'_charge'] || 0)+'分</div> ',
					'<div class="integral-label" style="width:60px;">|厅排名</div>',
					'<div class="integral-value" style="width:100px;">'+(channelJfMap[itemArr[1].staffCode+"_index"] || 0)+'/'+(channelJfMap["channelLength"] || 0)+'</div>',
					'</td> ',
			   '</tr> ',
			]
		}
		var staffHtml=[
            '<div class="swiper-slide">',
                '<table>',
	                tr1.join(""),
	                tr2.join(""),
			    '</table>',
            '</div> '
		];
		html.push(staffHtml.join(""));
	}
	$("#staff-info").html("");
	if(html.length>0){
		var dataHtml="<div class='swiper-container visual_swiper_staffInfo'><div class='swiper-wrapper'>"+html.join("")+"</div>"
		$("#staff-info").html(dataHtml);
		var mySwiper1 = new Swiper('.visual_swiper_staffInfo', {
			autoplay: true,//可选选项，自动滑动
			speed:1500,//可选选项，滑动速度
			autoplay: {
			    delay: 15000,//毫秒
			} 
		});
	}else{
		noDataTip($("#staff-info"));
	}
}

//加载门店台席健康度详情
function loadChannelDeviceDetail(data){
	var html=[];
	//设置台席灯
	$(".device-alarm").eq(2).find("span[type='greenGrade']").text(data.greenGrade || "0");
	$(".device-alarm").eq(1).find("span[type='redGrade']").text(data.redGrade || "0");
	$(".device-alarm").eq(0).find("span[type='grayGrade']").text(data.grayGrade || "0");
	var deviceInfo=data.deviceInfo;
	for(var key in deviceInfo){
		var itemArr=deviceInfo[key];
		itemArr[0].up=itemArr[0].up || "--";
		itemArr[0].down=itemArr[0].down || "--";
		var gradeImg="";
		if(1==itemArr[0].healthGrade){
			gradeImg="device-green.png";
		}else if(2==itemArr[0].healthGrade){
			gradeImg="device-red.png";
		}else{
			gradeImg="device-gray.png";
		}
		var tr1=[
				'<tr> ',                                                            
					'<td rowspan="3" class="device-img">',                            
					   '<img src="../static/images/'+gradeImg+'"/>',
					'</td> ',                                                           
				    '<td><div class="label-name">台席分数</div></td> ',                            
				    '<td rowspan="3" colspan="2" class="kuan-dai"> ',                   
				            '<div class="progress-label">上行宽度速率 '+itemArr[0].up+'</div>',       
							'<div style="width:180px;height:15px;"> ',                         
								'<div class="progress" style="float:left;height:8px;width:180px;background-color:#383E60;">',
								     '<div class="progress-bar progress-bar-striped" style="min-width:0;width:'+itemArr[0].up.replace("Mbps","")+'%"></div>',
								'</div>',                                                    
							'</div> ',                                                      
				            '<div class="progress-label">下行宽度速率 '+itemArr[0].down+'</div>',   
							'<div style="width:180px;height:15px;">',                      
								'<div class="progress" style="float:left;height:8px;width:180px;background-color:#383E60;">',
								   '<div class="progress-bar progress-bar-striped" style="min-width:0;width:'+itemArr[0].down.replace("Mbps","")+'%"></div>',
								'</div>',                                                    
							'</div>',                                                      
				     '</td>',                                                           
				 '</tr>',                                                           
				 '<tr>',                                                            
				     '<td class="label-name score">'+itemArr[0].score+'分</td>',                          
				 '</tr>',                                                           
				 '<tr>',                                                            
				      '<td class="label-name"><div class="os-name" title="'+(itemArr[0].osName || "--")+'">'+(itemArr[0].osName || "--")+'</div></td>',                        
				 '</tr>',                                                           
				 '<tr class="device-use">',                                         
						'<td></td>',                                                       
						'<td><div class="nei-cun-size"><span>'+(itemArr[0].memory || 0)+'</span></div></td>',      
						'<td><div class="cpu-use"><span>'+itemArr[0].cpuUsageAvg+'</span></div></td>',           
						'<td><div class="nei-cun-use"><span>'+itemArr[0].memUsageAvg+'</span></div></td>',       
				'</tr>',                                                           
				'<tr>',                                                            
						'<td></td>',                                                       
						'<td><div class="labe-value">内存大小</div></td>',                 
						'<td><div class="labe-value">cpu占用率</div></td>',                
						'<td><div class="labe-value">内存使用率</div></td>',               
				'</tr>'
		];
		var tr2=[];
		if(itemArr.length>1){
			itemArr[1].up=itemArr[1].up || "--";
			itemArr[1].down=itemArr[1].down || "--";
			var gradeImg="";
			if(1==itemArr[1].healthGrade){
				gradeImg="device-green.png";
			}else if(2==itemArr[1].healthGrade){
				gradeImg="device-red.png";
			}else{
				gradeImg="device-gray.png";
			}
			tr2=[
				'<tr><td colspan="4"><div class="split-line"></div></td></tr>',
				'<tr> ',                                                            
					'<td rowspan="3" class="device-img">',                            
					    '<img src="../static/images/'+gradeImg+'"/>',
					'</td> ',                                                           
					'<td><div class="label-name">台席分数</div></td> ',                              
				    '<td rowspan="3" colspan="2" class="kuan-dai"> ',                   
				            '<div class="progress-label">上行宽度速率 '+itemArr[1].up+'</div>',       
							'<div style="width:180px;height:15px;"> ',                         
								'<div class="progress" style="float:left;height:8px;width:180px;background-color:#383E60;">',
								     '<div class="progress-bar progress-bar-striped" style="min-width:0;width:'+itemArr[1].up.replace("Mbps","")+'%"></div>',
								'</div>',                                                    
							'</div> ',                                                      
				            '<div class="progress-label">下行宽度速率 '+itemArr[1].down+'</div>',   
							'<div style="width:180px;height:15px;">',                      
								'<div class="progress" style="float:left;height:8px;width:180px;background-color:#383E60;">',
								   '<div class="progress-bar progress-bar-striped" style="min-width:0;width:'+itemArr[1].down.replace("Mbps","")+'%"></div>',
								'</div>',                                                    
							'</div>',                                                      
				     '</td>',                                                           
				 '</tr>',                                                           
				 '<tr>',                                                            
				     '<td class="label-name score">'+itemArr[1].score+'分</td>',                          
				 '</tr>',                                                           
				 '<tr>',                                                            
				      '<td class="label-name"><div class="os-name" title="'+(itemArr[0].osName || "--")+'">'+(itemArr[0].osName || "--")+'</div></td>',                        
				 '</tr>',                                                           
				 '<tr class="device-use">',                                         
						'<td></td>',                                                       
						'<td><div class="nei-cun-size"><span>'+(itemArr[1].memory || 0)+'</span></div></td>',      
						'<td><div class="cpu-use"><span>'+itemArr[1].cpuUsageAvg+'</span></div></td>',           
						'<td><div class="nei-cun-use"><span>'+itemArr[1].memUsageAvg+'</span></div></td>',       
				'</tr>',                                                           
				'<tr>',                                                            
					'<td></td>',                                                       
					'<td><div class="labe-value">内存大小</div></td>',                 
					'<td><div class="labe-value">cpu占用率</div></td>',                
					'<td><div class="labe-value">内存使用率</div></td>',               
			     '</tr>'
			]
		}
		var deviceHtml=[
            '<div class="swiper-slide">',
                '<table>',
	                tr1.join(""),
	                tr2.join(""),
			    '</table>',
            '</div> '
		];
		html.push(deviceHtml.join(""));
	}
	$("#device-info").html("");
	if(html.length>0){
		var dataHtml="<div class='swiper-container visual_swiper_deviceInfo'><div class='swiper-wrapper'>"+html.join("")+"</div>"
		$("#device-info").html(dataHtml);
		var mySwiper1 = new Swiper('.visual_swiper_deviceInfo', {
			autoplay: true,//可选选项，自动滑动
			speed:1500,//可选选项，滑动速度
			autoplay: {
			    delay: 15000,//毫秒
			} 
		});
	}else{
		noDataTip($("#device-info"));
	}
}
//加载耗时步骤详情
function loadTimeStepDetail(data){
	var option = {
		    tooltip: {trigger: 'axis',},
		    grid: {left:'6%',right: '5%',bottom:'10%'},
		    legend: {
		    	icon: 'rect',
		        itemWidth: 14,itemHeight: 5,itemGap:10,
		        data:data.legendArr,
		        left: '10px',top: '0px',
		        textStyle: {fontSize: 12,color: '#fff'}
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {interval:0,textStyle: {color:'#fff',}},
		            data:data.categoryArr
		        }
		    ],
		    yAxis: [{
        		type: 'value',
 		        axisTick: {
 		            show: false
 		        },
 		        axisLine: {lineStyle: {color: '#57617B'}},
 		        axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}秒'},
 		        splitLine: {
 	                show: true,
 	                lineStyle:{
 	                    type:'dashed',
 	                    color: ['#25CEF3']
 	                }
 	            }

		     }],
		    series: [
		        {
		            name:'厅耗时',
		            type:'bar',
		            barWidth:8,
		            itemStyle : { 
		            	normal: {
				        	barBorderRadius:[10, 10, 0, 0],
				            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				                offset: 0,
				                color: "#009AFD"
				            }, {
				                offset: 0.8,
				                color: "#33DAFF" 
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
		            },
		            data:data.channelTime
		        },
		        {
		            name:'省耗时',
		            type:'bar',
		            barWidth:8,
		            barGap:2,
		            itemStyle : { 
		            	normal: {
				        	barBorderRadius:[10, 10, 0, 0],
				            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				                offset: 0,
				                color: "#E57230"
				            }, {
				                offset: 0.8,
				                color: "#D8AE22" 
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
		            },
		            data:data.provinceTime
		        }
		    ]
	};
	var myChart = echarts.init(document.getElementById('time-step-detial'));
	myChart.clear();
	if(data.channelTime.length>0){
		myChart.setOption(option);
	}else{
		noDataTip($("#time-step-detial"));
	}
	
}

//加载业务类型耗时详情
function loadBusinessTypeTimeDetail(data){
	var maxOrder=Math.max.apply(null,data.orderNum);
	var option = {
			title : {text:'',subtext:'',top:'3',right:'0'},
            tooltip: {trigger: 'axis'},
            grid: {left: '8%',right: '8%',bottom: '10%'},
            xAxis: {type: 'category',axisLine: {lineStyle: {color: '#57617B'}},axisLabel: {interval:0,textStyle: {color:'#fff',}},data: data.categoryArr},
            yAxis:[
       	        {
       	          type: 'value',name: '',
       	          axisLine: {lineStyle: {color: '#57617B'}},
  		          axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}分'},
	  		      splitLine: {show: false}	
       	        },
    	        {
       	          type: 'value',name: '',max:maxOrder+parseInt(maxOrder*0.2),
 		          axisLabel: {margin: 10,textStyle: {fontSize: 12},textStyle: {color:'#fff'},formatter:'{value}笔'},
 		          splitLine: {
	  	                show: true,
	  	                lineStyle:{
	  	                    type:'dashed',
	  	                    color: ['#25CEF3']
	  	                }
	  	          }	
    	        }
    		],
            series: [
   		        {
		            name:'耗时时间',
		            type:'line',
		            yAxisIndex:0,
		            smooth: false,
		            symbolSize:5,
		            lineStyle: { normal: {width: 2}},
		            areaStyle: {
			            normal: {
			                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
			                    offset: 0,
			                    color: 'rgba(230, 48, 123, 0.8)'
			                }, {
			                    offset: 0.8,
			                    color: 'rgba(230, 48, 123, 0)'
			                }], false),
			                shadowColor: 'rgba(0, 0, 0, 0.1)',
			                shadowBlur: 10
			            }
			        },
			        itemStyle: {normal: { color: '#DA2F78'}},
		            data:data.avgTime
		        },
		        {
		            name:'订单量',
		            type:'bar',
		            barWidth:12,
		            yAxisIndex:1,
		            itemStyle : { 
				        normal: {
				        	barBorderRadius:[10, 10, 0, 0],
				            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
				                offset: 0,
				                color: "#4033F9"
				            }, {
				                offset: 0.8,
				                color: "#BA97F9" 
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
		            },
		            data:data.orderNum
		        }
          ]
    };
	var myChart = echarts.init(document.getElementById('business-type-time-detial'));
	myChart.clear();
	if(data.orderNum.length>0){
		myChart.setOption(option);
	}else{
		noDataTip($("#business-type-time-detial"));
	}
	
}





//初始化基础信息
function initBaseInfo(){
	//初始化日期
	/*$("#data-date").my97({
	   dateFmt:'yyyyMMdd',
	   minDate:"%y-{%M}-{%d-30}",
	   maxDate:"%y-%M-{%d}",
	   startDate: [{
	       doubleCalendar: false,
	       isShowWeek: false,
	       isShowClear: false,
	       readOnly: true
	   }],
	   onpicked:function(dp){
		   g_dataDate=$('#data-date').val();
		   $("#query-page-data").trigger("click");
	   }
   });*/
   var dataDate="2019年12月31日";
   $("#td-data-date").text(dataDate);
   
	
	
	$(".cust-type-default").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		g_custType=$(this).attr("type");
		$("#query-page-data").trigger("click");
	});
	
}

//获取渠道参数
function getGroupChannelParam(){
	var areaCode="";
	try{
	    var cityId=$('#selectCity').combobox("getValue");
		var countyId=$('#selectCounty').combobox("getValue");
		if(""==areaCode && ""!=countyId){
			areaCode=countyId;
		}else if(""==areaCode && ""!=cityId){
			areaCode=cityId;
		}
	}catch(e){
	}
	var channelName=$.trim($("#channel_name").val());
	var channelParam={'areaCode':areaCode,"channelName":channelName};
	return channelParam;
}



function noDataTip($selector){
	var currModH=$selector.height();
	var top=currModH>180?"35%":"13%";
	var $li=[
        "<div class='no-data' style='width:90%;position: absolute;top:"+top+";text-align:center;color:#a59999;'>",
		   "<img src='../static/images/no-data.png' style='width:200px;height:200px;'/>",
		   "<div style='font-size:16px;opacity:0.7;color:#fff;'>暂无数据</div>",
        "</div>"
    ]
	$selector.append($li.join(""));
}

function keepTwoDecimal(currVal){
		 var result = parseFloat(currVal);
		 if (isNaN(result)) {
		   return false;
		 }
		 result = Math.round(currVal *100) / 100;
		 return result;
}

//初始化页面
function loadPageData(){
	 //获取渠道信息
	 var groupChannelInfo=g_channelInfo;
	 //第一步：优先判断url请求参数里面
	 let param=JSON.parse(gDataGather.param);
	 if(Object.keys(param).length>0){
		 groupChannelInfo=param;
		 gDataGather.param="{}";
	 }
	 if(Object.keys(groupChannelInfo).length==0){
		 groupChannelInfo=window.localStorage.getItem("group-channel-info");
		 if(undefined==groupChannelInfo || null==groupChannelInfo){
			 groupChannelInfo={"channelCode":"11228790","groupChannelCode":"3201001965930","channelName":"中国电信南京分公司@玄武大钟亭营业厅"};
	     }else{
	    	 groupChannelInfo=JSON.parse(groupChannelInfo);
	     }
	 }else{
		 window.localStorage.setItem("group-channel-info",JSON.stringify(groupChannelInfo));
	 }
     //设置全局渠道编码、渠道名称
	 g_channelCode=groupChannelInfo.channelCode;
	 g_channelName=groupChannelInfo.channelName;
	 //开始动画特效
	 $('#load').show();
	 $('#load').fadeOut(500,function(){
	 });
	
	 //引入office_efficiency_data.js缓存假数据
	 if(data.code==0){
	 	  $(".no-data").remove();
		   //加载门店基本信息
		  loadChannelBaseInfo(data);
		  //加载门店历史受理详情
		  loadChannelHandleDetail(data.channelHandleInfo);
		  //加载营业员受理详情
		  loadStaffHandleDetail(data.staffHandleInfo);
		  //加载门店台席健康度详情
		  loadChannelDeviceDetail(data.channelDeviceInfo);
		  //加载耗时步骤分析
		  loadTimeStepDetail(data.timeStepAnalysis);
		  //加载业务类型耗时详情
		  loadBusinessTypeTimeDetail(data.businessTypeAnalysis);
	 }
	
}
$(function(){
	//加载基础信息
	initBaseInfo();
	//加载页面数据
	loadPageData();
})