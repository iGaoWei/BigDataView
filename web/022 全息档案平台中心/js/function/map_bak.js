function lnMap(placeList,fl){
	option = {
	    backgroundColor: '',
	    color: [
	        'rgba(255, 255, 255, 0.8)',
	        'rgba(14, 241, 242, 0.8)',
	        'rgba(37, 140, 249, 0.8)'
	    ],
	    
	       tooltip: {
	       		show:false,
	            trigger: 'item',
	            formatter: function (params) {
//	          			console.log(params.name);
		            	var html='';
		            	var html='<div id="dttk" style="background: url(\'./img/sy/03/tk_bak.png\') no-repeat 0 0;background-size:100% 100%;width: 200px;height: 152px;position: absolute;padding: 16px 10px 0px 10px;">'
		            				+'<div style="text-align: left;padding-left: 10px;padding-top: 5px;color: #2D68D0;font-size: 16px;background-color: #0a0a38;height:125px">'
		            					+'<p>卡口点位总数：54</p>'
		            					+'<p>WIFI点位总数：642</p>'
		            					+'<p>电围电围总数：325</p>'
		            					+'<p>视频点位总数：222</p>'
		            				+'</div>'
		            			+'</div>'
		            				;
	//	            	 setTimeout(function() {
	//		                toolipCharts(params.name);
	//		            }, 3000);
		              return html;
		            }
	        },
	     geo: {
	        map: 'ln',
	        label: {
	            emphasis: {
	                show: false
	            }
	        },
	        roam: false,
	        zoom : 1.26,// 放大
	        itemStyle: {
	            normal: {
	                areaColor: 'rgba(1,35,120,.7)',
	                borderColor: 'rgba(100,149,237,1)',
	                borderWidth:1.5
	            },
	            emphasis: {
	                areaColor: 'transparent'
	            }
	        }
	    },
	    series : [
	    	{
	            name: '强',
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            data: (function(){
	                    var data = [];
	                    var len = 50;
	                    var geoCoord
	                    while(len--) {
	                        geoCoord = placeList[len % placeList.length].geoCoord;
	                        data.push({
	                            name : placeList[len % placeList.length].name + len,
	                            value :  [
	                                geoCoord[0] + Math.random() * 2 * -1,
	                                geoCoord[1] + Math.random() * 1 * -1,
	                                10
	                            ]
	                        })
	                    }
	                    return data;
	                })(),
	            symbolSize:4,
	            showEffectOn: 'render',
	            large:true,
	            rippleEffect: {
	                brushType: 'stroke',
	                period:5,
	                scale:3,
	            },
	            hoverAnimation: true,
	            label: {
	                normal: {
	                    formatter: '{per|{b}}',
	                    position: 'right',
	                    show: false,
	                    rich:{
	                    	 per: {
	                            color: '#eee',
	                            backgroundColor: '#334455',
	                            padding: [2, 4],
	                            borderRadius: 2
	                        }
	                    }
	                },
	                 emphasis: {
		                show: false
		            }
	            },
	           
	        },
	    	{
	            name: '中',
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            data:  (function(){
	                    var data = [];
	                    var len = 200;
	                    var geoCoord
	                    while(len--) {
	                        geoCoord = placeList[len % placeList.length].geoCoord;
	                        data.push({
	                            name : placeList[len % placeList.length].name + len,
	                            value :  [
	                                geoCoord[0] + Math.random()* 2* -1,
	                                geoCoord[1] + Math.random()* 2 * -1,
	                                10
	                            ]
	                        })
	                    }
	                    return data;
	                })(),
	            symbolSize:4,
	            showEffectOn: 'render',
	            large:true,
	            rippleEffect: {
	                brushType: 'stroke',
	                scale:3,
	            },
	            hoverAnimation: true,
	            label: {
	                normal: {
	                    formatter: '{b}',
	                    position: 'right',
	                    show: false
	                }
	            },
	            
	        },    	
	    	{
	            name: '弱',
	            type: 'effectScatter',
	            coordinateSystem: 'geo',
	            data:  (function(){
	                    var data = [];
	                    var len = 185;
	                    var geoCoord
	                    while(len--) {
	                        geoCoord = placeList[len % placeList.length].geoCoord;
	                        data.push({
	                            name : placeList[len % placeList.length].name + len,
	                            value :  [
	                                geoCoord[0] + Math.random() * 2 * -1,
	                                geoCoord[1] + Math.random() * 2 * -1,
	                                10
	                            ]
	                        })
	                    }
	                    return data;
	                })(),
	            symbolSize:4,
	            showEffectOn: 'render',
	            large:true,
	            rippleEffect: {
	                brushType: 'stroke',
	                scale:3,
	            },
	            hoverAnimation: true,
	            label: {
	                normal: {
	                    formatter: '{b}',
	                    position: 'right',
	                    show: false
	                }
	            },
	            
	        },
	        {
	        	type:'map',
	        	mapType: 'ln',
	        	data: [
				                { name: '铁岭市', value: Math.round(Math.random() * 1000) },
				                { name: '沈阳市', value: Math.round(Math.random() * 1000) },
				                { name: '朝阳市', value: Math.round(Math.random() * 1000) },
				                { name: '抚顺市', value: Math.round(Math.random() * 1000) },
				                { name: '阜新市', value: Math.round(Math.random() * 1000) },
				                { name: '葫芦岛市', value: Math.round(Math.random() * 1000) },
				                { name: '锦州市', value: Math.round(Math.random() * 1000) },
				                { name: '盘锦市', value: Math.round(Math.random() * 1000) },
				                { name: '营口市', value: Math.round(Math.random() * 1000) },
				                { name: '辽阳市', value: Math.round(Math.random() * 1000) },
				                { name: '本溪市', value: Math.round(Math.random() * 1000) },
				                { name: '丹东市', value: Math.round(Math.random() * 1000) },
				                { name: '鞍山市', value: Math.round(Math.random() * 1000) },
				                { name: '大连市', value: Math.round(Math.random() * 1000) },
				                { name: '康平县', value: Math.round(Math.random() * 1000) },
				                { name: '法库县', value: Math.round(Math.random() * 1000) },
				                { name: '新民市', value: Math.round(Math.random() * 1000) },
				                { name: '沈北新区', value: Math.round(Math.random() * 1000) },
				                { name: '辽中县', value: Math.round(Math.random() * 1000) },
				                { name: '苏家屯区', value: Math.round(Math.random() * 1000) },
				                { name: '于洪区', value: Math.round(Math.random() * 1000) },
				                { name: '皇姑区', value: Math.round(Math.random() * 1000) },
				                { name: '大东区', value: Math.round(Math.random() * 1000) },
				                { name: '铁西区', value: Math.round(Math.random() * 1000) },
				                { name: '和平区', value: Math.round(Math.random() * 1000) },
				                { name: '沈河区', value: Math.round(Math.random() * 1000) },
				                { name: '东陵区', value: Math.round(Math.random() * 1000) }, 
				                { name: '灯塔市', value: Math.round(Math.random() * 1000) },
				                { name: '白塔区', value: Math.round(Math.random() * 1000) },
				                { name: '文圣区', value: Math.round(Math.random() * 1000) },
				                { name: '太子河区', value: Math.round(Math.random() * 1000) },
				                { name: '宏伟区', value: Math.round(Math.random() * 1000) },
				                { name: '弓长岭区', value: Math.round(Math.random() * 1000) },
				                { name: '辽阳县', value: Math.round(Math.random() * 1000) },
				                { name: '溪湖区', value: Math.round(Math.random() * 1000) },
				                { name: '明山区', value: Math.round(Math.random() * 1000) },
				                { name: '平山区', value: Math.round(Math.random() * 1000) },
				                { name: '南芬区', value: Math.round(Math.random() * 1000) },
				                { name: '本溪满族自治县', value: Math.round(Math.random() * 1000) },
				                { name: '桓仁满族自治县', value: Math.round(Math.random() * 1000) },
				        ],
		        label: {
			        	normal:{
			        		show: true,
			        		 formatter: function(params){
			        		 	if(fl==''){
			        		 		return params.name;
			        		 	}else{
			        		 		return params.name+'\n\n'+fl+':'+params.value;
			        		 	}
			        		 },
			        		 position:'inside',
			        		 padding:[4,5],
			        		 borderRadius:3,
			        		 borderWidth:1,
			        		 borderColor:'rgba(255,255,255,.5)',
			        		textStyle: {
				                    	color:'white',
				                    	fontSize:'16'
			                        }
			        	},
			            emphasis: {
			                show: true,
			                textStyle: {
				                    	color:'white'
			                        }
			            }
			        },
		        roam: false,
		        zoom : 1.26,// 放大
		        itemStyle: {
		            normal: {
		                areaColor: 'rgba(1,35,120,.7)',
		                borderColor: 'rgba(100,149,237,1)',
		                borderWidth:1.5
		            },
		            emphasis: {
		                areaColor: 'transparent'
		            }
		        }
	        }
	    ]
	};
	return option;
}
var url='./js/ln.json';
var symbolSize_bak=0;
loadMap(url,symbolSize_bak,'');
function loadMap(url,symbolSize_bak,fl){
	$.get(url, function (chinaJson) {
    echarts.registerMap('ln', chinaJson);
	var chart = echarts.init(document.getElementById('lnmap'));
	chart.showLoading({
			text:'正在加载中..',
			color:'#fff',
			textColor:'#fff',
			maskColor:'rgba(255,255,255,0)',
			zlevel:0,
		});
	var placeList = [
	    {name:'阜新', geoCoord:[121.680381,42.029923]},
	    {name:'抚顺', geoCoord:[123.984642,41.899479]}
	    ,{name:'本溪', geoCoord:[123.745478,41.492701]},
	    {name:'铁岭', geoCoord:[123.79607,42.242175]},
	    {name:'铁岭2', geoCoord:[123.915653,42.443491]},
	    {name:'沈阳', geoCoord:[123.79607,42.242175]},
	]
	var option=lnMap(placeList,fl);
	option.series[0].symbolSize=symbolSize_bak;
	option.series[1].symbolSize=symbolSize_bak;
	option.series[2].symbolSize=symbolSize_bak;
	chart.hideLoading();
	chart.setOption(option);
	 chart.on('click',function(params){
	 			console.log(params.name);
		   		if(params.name=='本溪市'){
		   			//./js/data-1505284886122-SkAzQUUcZ.json
		   			loadMap('./js/bx.json',getNum(),'');
		   		}else if(params.name=='沈阳市'){
		   			loadMap('./js/sy.json',getNum(),'');
		   		}else if(params.name=='辽阳市'){
		   			loadMap('./js/ly.json',getNum(),'');
		   		}else{
		   			return;
		   		}
		   		$("#mapname").html(params.name);
		   		$("#mapTip").show();
		   })
//				var count = 0;
//				var timeTicket = null;
//				var dataLength = option.series[3].data.length;
//				timeTicket && clearInterval(timeTicket);
//				timeTicket = setInterval(function() {
//				    chart.dispatchAction({
//				        type: 'downplay',
//				        seriesIndex: 3,
//				    });
//				    chart.dispatchAction({
//				        type: 'highlight',
//				        seriesIndex: 3,
//				        dataIndex: (count) % dataLength
//				    });
//				    chart.dispatchAction({
//				        type: 'showTip',
//				        seriesIndex: 3,
//				        dataIndex: (count) % dataLength
//				    });
//				    count++;
//				}, 3000);
//				
//				chart.on('mouseover', function(params) {
////				    console.log(params)
//				    clearInterval(timeTicket);
//				    chart.dispatchAction({
//				        type: 'downplay',
//				        seriesIndex: 3
//				    });
//				    chart.dispatchAction({
//				        type: 'highlight',
//				        seriesIndex:3,
//				        dataIndex: params.dataIndex
//				    });
//				    chart.dispatchAction({
//				        type: 'showTip',
//				        seriesIndex: 3,
//				        dataIndex: params.dataIndex,
//				    });
//				});
//				chart.on('mouseout', function(params) {
//				    timeTicket && clearInterval(timeTicket);
//				    timeTicket = setInterval(function() {
//				        chart.dispatchAction({
//				            type: 'downplay',
//				            seriesIndex: 3,
//				        });
//				        chart.dispatchAction({
//				            type: 'highlight',
//				            seriesIndex: 3,
//				            dataIndex: (count) % dataLength
//				        });
//				        chart.dispatchAction({
//				            type: 'showTip',
//				            seriesIndex: 3,
//				            dataIndex: (count) % dataLength
//				        });
//				        count++;
//				    }, 3000);
//				});
	
	
	
	   
	});	
}



$("#map_ln").on('click',function(){
	loadMap('./js/ln.json',getNum(),getZl());
	$("#mapTip").hide();
	$('#mapname').html('');
})