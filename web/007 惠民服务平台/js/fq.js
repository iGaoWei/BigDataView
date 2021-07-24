
!function(window, document, $, undefined) {
	var data = [{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会asasasasasasasasasasasasasasasasasasasasasasasasasasas',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会assssssssssssssssssssssssssssssssssssssssssssssssssssssss',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	},{
		time: '2018/12/11 12:01',
		name: '杨久量',
		task: '上门理发',
		tissue: '义工联合会',
		state: '已上线'
	}]
	var init = {
		eventList: function(){
			var $pathList = $('#implantation').contents().find('#pathList').find('path');
			$('body').on('click', '#close', this.closeOnClick);
			$pathList.on('mouseover', this.pathListMouseover);
			$pathList.on('mouseout', this.pathListMouseout);
		},
		pathListMouseover: function() {
			var $this = $(this);
			var uid = $this.attr('id');
			$.ajax({
				url:'./data.json',
				type: 'get',
				dataType: 'json',
				success: function(response) {
					if(!response) return;
					var callNum = response.callInfoRecordNumBigScreenSXs;
					$.each(callNum, function(ind, key) {
						$('#'+key.name).append(
							'<span class="tips">今日呼入次数 '+key.num+'次</span>'
						)
					})
				}
			})
			$('#'+uid).find('.tips').show();
		},
		pathListMouseout: function() {
			var $this = $(this);
			var uid = $this.attr('id');
			$('#'+uid).find('.tips').hide();
		},
		closeOnClick: function() { // 关闭弹窗
			var $this = $(this);
			$this.parents('.sosInfor').hide();
		},
		fillList: function() {
			var $orderItems = $('#orderItems');
			var orderItemsArr = [];
			$.each(data, function(ind, key) {
				orderItemsArr.push(
					'<ul class="rolling rolStyle">',
						'<li>',key.time,'</li>',
						'<li>',key.name,'</li>',
						'<li>',key.task,'</li>',
						'<li>',key.tissue,'</li>',
						'<li>',key.state,'</li>',
					'</ul>'
				)
			})
			$orderItems.html(orderItemsArr.join(''));
		},
		phoneChart: function() { // 电话呼入饼状图
			var phoneNum = echarts.init(document.getElementById('phoneNum'));
			option = {
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        selectedMode:false,//取消图例上的点击事件
			        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
			        padding: [20, 0, 0, 0],
			        textStyle: {color: '#fff'}
			    },
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            animation: false,
			            hoverAnimation: false,
			            itemStyle: {
			            	labelLine : {
		                        show : true   //隐藏标示线
		                   }
			            },
			            label: {
			            	show: false,
			                normal: {
			                    show: true
			                },
			                emphasis: {
			                    show: true
			                },
			                legend: {
			            		itemStyle: {
			            			color: '#fff'
			            		}
			            	}
			            },
			            labelLine: { // 饼状图周围标注的线
			                normal: {
			                    show: true
			                }
			            },
			            data:[
			                {value:335, name:'直接访问'},
			                {value:310, name:'邮件营销'},
			                {value:234, name:'联盟广告'},
			                {value:135, name:'视频广告'},
			                {value:1548, name:'搜索引擎'}
			            ]
			        }
			    ]
			};
			phoneNum.setOption(option);
		},
		phoneBroken: function() { // 电话呼入折线图
			var phonebrokenLine = echarts.init(document.getElementById('brokenLine'));
			option = {
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			        axisLabel: {
                        show: 	true,
                        textStyle: {
                            color: '#75bcff'
                        }
                    },
                    axisLine:{
		                lineStyle:{
		                    color:'#5b7b80'
		                }
		            },
		            splitLine:{  // 显示垂直网格线
                        show: true,
                        lineStyle:{
		                    color:'#75bcff'
		                }
                    }
			    },
			    yAxis: {
			        type: 'value',
			        axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#75bcff'
                        }
                    },
                    axisLine:{
		                lineStyle:{
		                    color:'#5b7b80'
		                }
		            },
		            splitLine:{
                        show: false
                    }
			    },
			    series: [{
			        data: [820, 932, 901, 934, 1290, 1330, 1320],
			        type: 'line',
			        areaStyle: {
			        	color: '#135877'
			        },
			        itemStyle : {
						normal : {
							lineStyle:{
								color:'#58b0f0'
							}
						}
					}
			    }]
			};
			phonebrokenLine.setOption(option);
		},
		mapAddDot: function() { // 地图标点
			var circleList = $('.sumDot').find('span');
			var source;
			$.ajax({
				url: 'data.json',
				type: 'get',
				dataType: 'json',
				success: function(response) {
					var callInfo = response.callInfoRecordBigScreenSXs;
					var resideCommunity;
					var $salvorInfo = $('#salvorInfo');
					var salvorArr = [];
					$.each(callInfo, function(ind, key) {
						source = key.source;
						// 判断红点和绿点
						if(source == 1) { // 1是红色 2是绿色
							resideCommunity = $('#'+key.resideCommunity)
							salvorArr.push(
								'<div class="sosInfor">',
									'<p class="sosTitle">sos呼入信息</p>',
									'<ul id="salvorInfo">',
										'<li>紧急救助人：',key.callName,'</li>',
										'<li>呼入号码： ',key.callPhone,'</li>',
										'<li>年龄：',key.age,'</li>',
										'<li>类型：',key.categoryDictName,'</li>',
										'<li>当前位置：',key.resideAddress,'</li>',
									'</ul>',
									'<img id="close" class="close" src="img/cloce.png" alt="" />',
								'</div>'
							)
							resideCommunity.addClass('redClass');
							resideCommunity.append(salvorArr.join(''))
						} else if(source == 2) {
							resideCommunity = $('#'+key.resideCommunity)
							resideCommunity.addClass('greenClass')
						}
						// 判断是否闪烁
						if(key.isFlashing == 1) {
							resideCommunity = $('#'+key.resideCommunity);
							if(source == 1) {
								resideCommunity.append(
									'<div class="container"><div class="dot borColor-1"></div><div class="pulse borColor-3"></div></div>'
								)
							} else {
								resideCommunity.append(
									'<div class="container"><div class="dot borColor-2"></div><div class="pulse borColor-4"></div></div>'
								)
							}

						}
					})
				}
			})
		}
	}
	init.fillList();
	init.phoneChart();
	init.phoneBroken();
	init.mapAddDot();
	init.eventList();

}(window, document, jQuery)
//
//
//