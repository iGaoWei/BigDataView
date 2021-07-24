//日常统计
var myChart = echarts.init(document.getElementById('echartsrcxj'), 'walden')

option = {
  // title: {
  //     text: '动态数据',
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(62, 99, 151, 1)'
      }
    }
  },
  legend: {
    data: ['巡查数量', '巡查覆盖率']
  },

  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: (function() {
        var now = new Date()
        var res = []
        var len = 8
        while (len--) {
          res.unshift(now.getDate())
          now = new Date(now - 86400000)
        }
        return res
      })()
    },
    {
      type: 'category',
      boundaryGap: true,
      data: (function() {
        var res = []
        var len = 0
        while (len--) {
          res.push(8 - len - 1)
        }
        return res
      })()
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: '单位',
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2]
    },
    {
      type: 'value',
      scale: true,
      name: '单位',
      max: 10,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }
  ],
  series: [
    {
      name: '巡查覆盖率',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: (function() {
        var res = []
        var len = 8
        while (len--) {
          res.push(Math.round(Math.random() * 10))
        }
        return res
      })()
    },
    {
      name: '巡查数量',
      type: 'line',
      data: (function() {
        var res = []
        var len = 0
        while (len < 8) {
          res.push((Math.random() * 10 + 5).toFixed(1) - 0)
          len++
        }
        return res
      })()
    }
  ]
}

myChart.setOption(option)
//联动报警
var myChart1 = echarts.init(document.getElementById('echartsldbj'), 'walden')

option1 = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: (function() {
      var now = new Date()
      var res = []
      var len = 8
      while (len--) {
        res.unshift(now.getDate())
        now = new Date(now - 86400000)
      }
      return res
    })()
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [45, 60, 42, 56, 30, 42, 56, 30],
      type: 'line',
      areaStyle: {}
    }
  ]
}

myChart1.setOption(option1)

var myChart2 = echarts.init(document.getElementById('echartsjgbj'), 'walden')

option2 = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: (function() {
      var now = new Date()
      var res = []
      var len = 7
      while (len--) {
        res.unshift(now.getDate())
        now = new Date(now - 86400000)
      }
      return res
    })()
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [55, 32, 77, 85, 23, 59, 88],
      type: 'line',
      areaStyle: {}
    }
  ]
}

myChart2.setOption(option2)

//消防给水系统
var myChart3 = echarts.init(document.getElementById('echartsxfjs'), 'walden')

option3 = {
  xAxis: {
    type: 'category',
    data: ['压力异常', '未启泵', '水泵手动']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [20, 90, 60],
      type: 'bar'
    }
  ]
}

// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3)

//故障统计

var myChart4 = echarts.init(document.getElementById('echartsgztj'), 'walden')

option4 = {
  // title: {
  //     text: '动态数据',
  // },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(62, 99, 151, 1)'
      }
    }
  },
  legend: {
    data: ['故障数量', '故障处理及时率']
  },

  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: (function() {
        var now = new Date()
        var res = []
        var len = 8
        while (len--) {
          res.unshift(now.getDate())
          now = new Date(now - 86400000)
        }
        return res
      })()
    },
    {
      type: 'category',
      boundaryGap: true,
      data: (function() {
        var res = []
        var len = 0
        while (len--) {
          res.push(8 - len - 1)
        }
        return res
      })()
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: '数量',
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2]
    },
    {
      type: 'value',
      scale: true,
      name: '%',
      max: 100,
      min: 0,
      boundaryGap: [0.2, 0.2]
    }
  ],
  series: [
    {
      name: '故障数量',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: (function() {
        var res = []
        var len = 8
        while (len--) {
          res.push(Math.round(Math.random() * 100))
        }
        return res
      })()
    },
    {
      name: '故障处理及时率',
      type: 'line',
      data: (function() {
        var res = []
        var len = 0
        while (len < 8) {
          res.push((Math.random() * 10 + 5).toFixed(1) - 0)
          len++
        }
        return res
      })()
    }
  ]
}

// 使用刚指定的配置项和数据显示图表。
myChart4.setOption(option4)

//火警统计

var myChart5 = echarts.init(document.getElementById('echartshjtj'), 'walden')
var colors = ['#5793f3', '#d14a61', '#675bba']

option5 = {
  color: colors,

  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['火警数量', '火警处理及时率']
  },
  grid: {
    top: 50,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisPointer: {
        label: {
          formatter: function(params) {
            return (
              '火警数量  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      },
      data: (function() {
        var now = new Date()
        var res = []
        var len = 8
        while (len--) {
          res.unshift(now.getDate())
          now = new Date(now - 86400000)
        }
        return res
      })()
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },

      axisPointer: {
        label: {
          formatter: function(params) {
            return (
              '火警处理及时率  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      max: 90,
      min: 0
    }
  ],
  series: [
    {
      name: '火警数量',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 9.6, 52.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name: '火警处理及时率',
      type: 'line',
      smooth: true,
      data: [
        3.9,
        5.9,
        11.1,
        18.7,
        48.3,
        69.2,
        31.6,
        46.6,
        55.4,
        18.4,
        10.3,
        0.7
      ]
    }
  ]
}

myChart5.setOption(option5)

//执法结果统计
var myChart6 = echarts.init(document.getElementById('echartszfjgtj'), 'roma')

option6 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['责令立即', '责令整改', '受案登记', '行政处罚', '临时查封'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            data:[10, 41, 30, 48, 20]
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart6.setOption(option6)

//安全评分
var myChart7 = echarts.init(document.getElementById('echartAqpf'))

option7 = {
    title: {
        text: '95',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#ffffff',
            fontSize: '30'
        }
    },
    color: ['rgba(176, 212, 251, 1)'], 
  
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['100%', '85%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, 
        data: [{
            value: 90,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 10
        }]
    }]
}


// 使用刚指定的配置项和数据显示图表。
myChart7.setOption(option7)

//维保统计
var myChart8 = echarts.init(document.getElementById('echartWbtj'))

option8 = {
    title: {
        text: '8%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#FFFFFF',
            fontSize: '30'
        }
    },
    color: ['rgba(176, 212, 251, 0.5)'], 
  
   
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['90%', '75%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false, 
        data: [{
            value: 8,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 92
        }]
    }]
}


// 使用刚指定的配置项和数据显示图表。
myChart8.setOption(option8)