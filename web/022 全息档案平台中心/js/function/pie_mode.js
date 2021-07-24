
function load_guage(datax,datay1,datay2){
	var	option = {
	    legend: {
	        x : 'center',
	        y : 'center',
	        show:false,
	        data:[
	            '剧情', '奇幻', '爱情', '惊悚', '冒险', '动作', '喜剧', '科幻','悬疑','犯罪'
	        ]
	    },
	    title : {
	        text: '剧情',
	        x: 'center',
	        y:'center',
	        show:true,
	       textStyle: {
                    color : 'red',
                     fontSize: 16
                }
	    },
	    toolbox: {
	        show : false,
	        feature : {
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true, 
	                type: ['pie', 'funnel'],
	                option: {
	                    funnel: {
	                        width: '20%',
	                        height: '30%',
	                        itemStyle : {
	                            normal : {
	                                label : {
	                                    formatter : function (params){
	                                        return 'other\n' + params.value + '%\n'
	                                    },
	                                    textStyle: {
	                                        baseline : 'middle',
	                                    }
	                                }
	                            },
	                        } 
	                    }
	                }
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	   series : [
	        {
	            type : 'pie',
	            center : ['50%', '50%'],
	            radius : ['35%','55%'],
	            x: '50%', // for funnel
	            itemStyle :  {
	                normal : {
	                    label : {
	                        textStyle: {
	                            baseline : 'center',
	                             position : 'inside',
	                        }
	                    },
	                    color:'red'
	                },
	            },
	             labelLine : {
                     show : false
                   },
                   label : {
                        show : false,
                        position : 'inside',
                        formatter : '{b}',
                        textStyle: {
                            baseline : 'bottom',
                            fontSize: 16
                        }
                    },
	            data : [
	                {name:'', value:datay1[1],
	                    itemStyle :  {
	                        normal : {
	                        }
	                    }
	               },
	               {name:'', value:datay1[0],
	                    itemStyle :  {
	                            normal : {
	                                color: 'rgba(175,169,169,.4)',
	                                label : {
	                                    show : false,
	                                    position : 'inside'
	                                }
	                            },
	                            emphasis: {
	                                color: 'rgba(0,0,0,0)'
	                            }
	                        }
	                }
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['50%', '50%'],
	            radius :  ['35%','45%'],
	            itemStyle :  {
	                normal : {
	                    label : {
	                        textStyle: {
	                            baseline : 'top'
	                        }
	                    },
	                     color:'blue'
	                },
	            }, 
	            labelLine : {
                            show : false
                       },
               label : {
                            show : false,
                            position : 'inside',
                            formatter : '{b}',
                            textStyle: {
                                baseline : 'bottom'
                            }
                       },
	            data : [
	                {name:'', value:datay2[1],
	                    itemStyle :  {
	                        normal : {
	                        }
	                    }
	               },
	               {name:'', value:datay2[0], 
	                    itemStyle :  {
	                        normal : {
	                            color: 'rgba(96,96,96,.5)',
	                            label : {
	                                show : false,
	                                position : 'inside'
	                            }
	                        },
	                        emphasis: {
	                            color: 'rgba(0,0,0,0)'
	                        }
	                    }
	                },
	            ]
	        }
	    ],
	    animationDuration:7000,  
	      animationEasing:'elasticOut',
		  animationDelayupdate:function(idx){
			return idx * 15;
		}
	};
	return option;
}
