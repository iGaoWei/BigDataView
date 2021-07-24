$(function(){
  // 畅销书排行榜获取高度
   




  var rankH = $('.con li:nth-child(2) .book-rank').height();
  var rankShowH = 3.5*rankH;
  var overHiddenH = rankH*5 + rankShowH;
  $('.book-show').css('height',rankShowH +'px');
  var curBookRank = $('.aside-left li.active .book-rank');
  curBookRank.css('height',rankH +'px');

//   获取行高
  var topSpan = $('.aside-left .top .book-rank span');
  var topSpanH = topSpan.height();
  topSpan.css('line-height',topSpanH + 'px');

  var bottomSpan = $('.aside-left .bottom .book-rank span');
  var bottomSpanH = bottomSpan.height();
  bottomSpan.css('line-height',bottomSpanH + 'px'); 
  
  //   获取各地区销售码洋排行高度
  var areaRankBox = $('.aside-right .area-rank .con');
  var areaRankH = areaRankBox.height();
  var areaRankLiH = Math.round(areaRankH/3);
  areaRankBox.find('li').css('height',areaRankLiH + 'px');
  var areaUl = areaRankBox.children('ul');
  
  var areaUlH = areaUl.height(); 
  // 定时动画效果
  // 销售码洋排行
  var num = 0;
    setInterval(function(){
    num++;
    num > 4?num = 0 : num;
    areaUl.css('top',-(num*areaRankH) + 'px');
    },2000);
//  //   出版社排行
//     function fanzhuan(parent, child,num) {


//         var pressNum = -1;

//         var rankbUl = $(parent);
//         var rankbLen = rankbUl.children().length;
//         setInterval(function () {
//             pressNum++;
//             if (pressNum >=num) {
//                 $(child).hide();
//             }
//             if (pressNum > rankbLen) {
//                 pressNum = -1;
//                 $(child).show();
//             }
//             var curLi = rankbUl.children().eq(pressNum);
//             curLi.children('.book-rank').addClass('pressRotate');
//             curLi.siblings().children('.book-rank').removeClass('pressRotate');
//         }, 1500);
//     }
    // fanzhuan('.aside-left .bottom ul', '.aside-left .bottom li:lt(9)',9)
    // fanzhuan('.aside-left .top ul', '.aside-left .top li:lt(8)', 8)

//   畅销书排行
//   var ranktUl = $('.aside-left .top ul');
//   var bookLiLen = ranktUl.children().length;
  
//   var bookNum = 0;

//   var timer01 = setInterval(function(){
//     bookNum++;
//     // debugger
//     if(bookNum%5 == 0){
//         $('.aside-left .top li:lt('+bookNum+')').hide();
//     }

//     if(bookNum == bookLiLen ){
//         bookNum = 0;
//         ranktUl.children().show();
//     }
    
//     ranktUl.children().removeClass('active');
//     ranktUl.children().eq(bookNum).addClass('active');

//     ranktUl.find('.book-show').hide();
//     ranktUl.children().eq(bookNum).children('.book-show').show();
//   },2000)

 

})

//   // 饼图
  var pie1 = echarts.init(document.getElementById('pie1'),'macarons');
//   var pie2 = echarts.init(document.getElementById('pie2'),'macarons');
  
  var rich = {
      big: {
          fontSize: 24,
          lineHeight: 40,
          fontFamily: 'Rubik'
      },
      small: {
          fontSize: 16
      },

  }
  var pieOption1 = {
    series: [
        {
            name:'分类占比',
            type:'pie',
            radius: ['50%', '70%'],
            hoverOffset: 5,
            center: ['50%','40%'],
            avoidLabelOverlap: false,
            color: ['#0239a7', '#fff', '#24feb4', '#23539b', '#3c9de4'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
                ,
                emphasis: {
                    show: true,  
                    color: '#fff',                
                    formatter: function(params, ticket, callback) {

                        return '{big|' + params.value + '}{small|%}\n{small|' + params.name + '}';
                    },
                    // '{a|这段文本采用样式a}'
                    rich: rich
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:0.52, 
                    name: '科技',
                    label: {
                        normal: {
                            formatter: '{c}%\n\n{b}'
                        }
                    }
                },
                {
                    value:0.17, 
                    name:'少儿',
                    label: {
                        normal: {
                            formatter: '{c}%\n\n{b}'
                        }
                    }
                },
                {
                    value: 0.09, 
                    name: '社科',
                    label: {
                        normal: {
                            formatter: '{c}%\n\n{b}'
                        }
                    }
                },
                {
                    value: 0.08, 
                    name: '生活',
                    label: {
                        normal: {
                            formatter: '{c}%\n\n{b}'
                        }
                    }
                },                
                {
                    value:0.08, 
                    name: '文艺',
                    label: {
                        normal: {
                            formatter: '{c}%\n\n{b}'
                        }
                    }
                },
                 {
                     value: 0.04,
                     name: '教育',
                     label: {
                         normal: {
                             formatter: '{c}%\n\n{b}'
                         }
                     }
                 },
                 {
                     value: 0.007,
                     name: '未分',
                     label: {
                         normal: {
                             formatter: '{c}%\n\n{b}'
                         }
                     }
                 }
            ]
        }
    ]
  };
  pie1.currentIndex = -1;
  pie1.setOption(pieOption1);
  setInterval(function () {
      var dataLen = pieOption1.series[0].data.length;
      // 取消之前高亮的图形
      pie1.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: pie1.currentIndex
      });
      pie1.currentIndex = (pie1.currentIndex + 1) % dataLen;
      // 高亮当前图形
      pie1.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: pie1.currentIndex
      });
  }, 1000);
  // 柱形折线图

var trendBar1 = echarts.init(document.getElementById('trendBar1'));

var optionBar = 
{
    grid:{
        top: 50,
        bottom: '30%',
    },
    legend: {
        data:['销售码洋', '同比增长'],
        right: '5%',
        itemWidth: 18,
        itemHeight: 12,
        textStyle: {
            color: '#fff'
        }
    },    
    xAxis: {
        data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11', '12'],
        axisLine: {
            show: false,
            lineStyle: {
                color: '#07bffb'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0
        }
    },
    yAxis: [
        {
            name: "码洋(/千)",
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#07bffb'
                }
            },
            splitLine: {
                show:false
            },
            axisTick: {
                show: false
            },
            interval:15,
            min: 0,
            max:40,
            position: 'left'

        },
        // {
        //     name: '同比增长(%)',
        //     max: 100,
        //     min: 0,
        //     axisLabel: {
        //         formatter: '{value}'
        //     },
        //     axisLine: {
        //         show: false,
        //         lineStyle: {
        //             color: '#07bffb'
        //         }
        //     },
        //     splitLine: {
        //         show:false
        //     },
        //     axisTick: {
        //         show: false
        //     },
        //     position: 'right'
        // }
    ],
    series: [
        {
            name: '销售码洋',
            type: 'bar',
            barWidth: '40%',
            barGap: 5,
            itemStyle:{
                normal:{
                    color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fecc'
                    }, {
                        offset: 0.8,
                        color: '#2690cf'
                    }], false)
                }
            },
            data: [25, 26, 24, 27, 23, 22, 25,25,27,28,29,29]
        },
        // {
        //     name:'同比增长',
        //     type:'line',
        //     itemStyle: {
        //         color: '#fff'
        //     },
        //     yAxisIndex: 1,
        //     data: [10,8,36,12,24,16,48,32,18,14,66,70]
        // }
    ]
}
trendBar1.setOption(optionBar);
// 雷达图
var leidaChart = echarts.init(document.getElementById("leida"));
optionLei = {
  backgroundColor: 'transparent',//背景色
  color: ['transparent', 'transparent'],

  legend: {
    show: false,
  },
  grid: { bottom: '20%' },
  radar: [
    {
      indicator: [
        { text: '指标一' },
        { text: '指标二' },
        { text: '指标三' },
        { text: '指标四' },
      ],

      shape: 'circle',
      name: {
        formatter: '【{value}】',
        textStyle: {

          color: 'rgba(6, 6, 6, 0)'
        }
      },
      splitArea: {
        areaStyle: {
          color: ['transparent',
            'transparent', 'transparent',
            'transparent', 'transparent'],

        }
      },
      axisLine: {
        // lineStyle: {
        //     color: 'rgba(255, 255, 255, 0.5)'
        // }
      },
      splitLine: {
        // lineStyle: {
        //     color: 'rgba(255, 255, 255, 0.5)'
        // }
      }
    },

  ],
  series: [

    {
      name: '雷达图',
      type: 'radar',
      // color: ['#23539b','#24feb4','#fff','#0239a7','#3c9de4'], 
      // center: ['50%','40%'],
      zoom: 1,
      itemStyle: {
        emphasis: {
          // color: 各异,
          lineStyle: {
            // width: 4
          }
        }
      },
      itemStyle: {
        normal:
          {
            areaStyle: {
              type: 'default',
              color: '#3c9de4'

            }

          }

      },
      data: [
        {
          value: [0.1,0.6,0,0],
          name: '图一',
          symbol: 'rect',
          // symbolSize: 5,
          lineStyle: {
            normal: {
              // type: 'dashed'
            }
          },

        },


      ]
    },
  ]
}
leidaChart.setOption(optionLei);