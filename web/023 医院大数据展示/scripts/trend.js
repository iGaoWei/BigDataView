var symptomName = last_year_month();


$(function(){


  init();

})

 function init(){

   var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

   //主要传染病
   var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     color:['#5bc0de'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '5%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     xAxis : [
         {
             type : 'category',
             data : ['感染性腹泻','流行性感冒','登革热','手足口病','水痘','流行性眼腺炎','猩红热','甲型病毒性肝炎','疟疾'],
             axisLine:{
                  lineStyle:{
                      color: '#5bc0de'
                  },
              },
              axisLabel : {
                interval:0,
                rotate:40,
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     yAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#5bc0de'
                 },
             },
             splitLine: {
                 "show": false
             },
             axisLabel: {
                 textStyle: {
                     color: '#fff'
                 },
                 formatter: function (value) {
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'主要传染病',
             type:'bar',
             barWidth : 20,
             data:[2210,1085,926,669,634,452,412,312,156],
         },
     ]
   })

   //主要症状
   var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
   histogramChart2.setOption({

     color:['#FD6C88'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['腹痛、腹胀、腹泻','恶心、呕吐、食欲不振','肌肉酸痛、乏力','持续高烧','头痛、眼眶痛、肌肉疼','皮疹、水泡','呼吸浅促','发热、咳嗽、流口水'],
             axisLine:{
                  lineStyle:{
                      color: '#FD6C88'
                  },
              },
              axisLabel : {
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     xAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#FD6C88'
                 },
             },
             splitLine: {
                 "show": false
             },
             axisLabel: {
                 textStyle: {
                     color: '#fff'
                 },
                 formatter: function (value) {
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'主要症状',
             type:'bar',
             barWidth : 20,
             data:[1750,1416,1136,819,704,413,251,175],
         },
     ]
   })

   //传染病发病趋势
   var lineChart1 = echarts.init(document.getElementById('lineChart1'));
   lineChart1.setOption({
     title: {
        text: '传染病趋势',
        textStyle:{
           fontSize:16,
           color:'#ff7f50'
       },
    },
     color:["#ff7f50"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '15%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'传染病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]
         },
     ]

   })

   //主要疾病排行
   var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
   histogramChart3.setOption({

     grid: {
         top: '12%',
         left: '30%'
     },
      xAxis: {
          show: false
      },
      yAxis: [{
          show: true,
          data:  ['抑郁症','高血压','痔疮','肺癌','子宫肌瘤	','乙肝','水痘','肺结核'],
          inverse: true,
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              color: '#fff',
              formatter: (value, index) => {
                  return [

                      `{lg|${index+1}}  ` + '{title|' + value + '} '
                  ].join('\n')
              },
              rich: {
                  lg: {
                      backgroundColor: '#339911',
                      color: '#fff',
                      borderRadius: 15,
                      // padding: 5,
                      align: 'center',
                      width: 15,
                      height: 15
                  },
              }
          },


      }, {
          show: true,
          inverse: true,
          data: [2000, 1800, 1200, 1100,900,900,800,700],
          axisLabel: {
              textStyle: {
                  fontSize: 12,
                  color: '#fff',
              },
          },
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },

      }],
      series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [20,18,12,11,9,9,8,7],
          barWidth: 10,
          itemStyle: {
              normal: {
                  barBorderRadius: 20,
                  color: function(params) {
                      var num = myColor.length;
                      return myColor[params.dataIndex % num]
                  },
              }
          },
          label: {
              normal: {
                  show: true,
                  position: 'inside',
                  formatter: '{c}%'
              }
          },
      }, {
          name: '框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [100, 100, 100, 100,100, 100, 100, 100],
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: 'none',
                  borderColor: '#00c1de',
                  borderWidth: 1,
                  barBorderRadius: 15,
              }
          }
      }, ]
   })

   //疾病发病趋势
   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({
     title: {
        text: '疾病发病趋势',
        textStyle:{
           fontSize:16,
           color:'#32cd32'
       },
       x:"center"
    },
     color:["#32cd32"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '25%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'疾病发病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[520, 232,701, 434, 190, 230, 210,120, 132, 101, 134, 890]
         },
     ]

   })

   //年龄分布
   var pieChart1 = echarts.init(document.getElementById('pieChart1'));
   pieChart1.setOption({
     color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
     tooltip : {
      trigger: 'item',
      formatter: "{a}<br/>{b}<br/>{c}人"
     },
     calculable : true,
     series : [
         {
             name:'发病人数',
             type:'pie',
             radius : [30, 110],
             center : ['50%', '50%'],
             roseType : 'area',
             x: '50%',
        


             sort : 'ascending',
             data:[
                 {value:10, name:'婴儿(1-3岁)'},
                 {value:5, name:'少儿(4-10岁)'},
                 {value:15, name:'少年(10-18岁)'},
                 {value:25, name:'青年(18-45岁)'},
                 {value:125, name:'中年(45-60岁)'},
                 {value:175, name:'老年(60岁以上)'},
             ]
         }
     ]
   })

   //性别分布
   var labelFromatter = {
       normal : {
           label : {
              position : 'center',
               formatter : function (params){
                 console.log(params)
                 if(params.name == "女性"){
                   return "女性"+":"+(params.percent + '%')
                 }else{
                   return "男性"+":"+(params.percent + '%')
                 }
               },
           },
           labelLine : {
               show : false
           }
       },
   };

   var pieChart2 = echarts.init(document.getElementById('pieChart2'));
   pieChart2.setOption({

        color: ['#87cefa','#FD6C88'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}({c})<br/>{d}%"
        },

        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                radius : [55, 95],
                x: '0%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'男性', value:158},
                    {name:'女性', value:142},
                ]
            },
        ],
   })

 }
