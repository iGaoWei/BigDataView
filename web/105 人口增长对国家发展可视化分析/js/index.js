// 人口增长率与国内生产总值
var lineYear = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  var lineOneData = [5.90, 6.71, 4.93, 6.53, 5.58, 3.78, 3.32, 1.45, 0.34, -0.60];
  var lineTwoData = [592963.2, 643563.1, 688858.2, 746395.1, 832035.9, 919281.1, 986515.2, 1013567.0, 1149237.0, 1210207.2];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["人口增长率", "国内生产总值(亿元)"],
      right: 10,
      top: 0,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: lineYear,
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12)
        },
      },
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),

        },
      },
      {
        type: "value",
        position: "right",
        axisLine: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLabel: {
          color: "rgba(255,255,255,.8)",
          fontSize: transformFontSize(12),
        },
        formatter: function (value) {
          return value + '%'
        }
      },

    ],
    series: [
      {
        name: "人口增长率",
        type: "line",
        yAxisIndex: 1,
        showAllSymbol: true,
        symbol: "circle",
        symbolSize: 13,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        itemStyle: {
          color: "#6c50f3",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(108,80,243,0.3)",
              },
              {
                offset: 1,
                color: "rgba(108,80,243,0)",
              },
            ],
            false
          ),
          shadowColor: "rgba(108,80,243, 0.9)",
          shadowBlur: 20,
        },
        data: lineOneData,
      },
      {
        name: "国内生产总值(亿元)",
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#248ff7",
              },
              {
                offset: 1,
                color: "#6851f1",
              },
            ]),
            barBorderRadius: 11,
          },
        },
        data: lineTwoData,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 近十年三次产业生产总值构成
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var barData1 = [7.3, 7.2, 7.7, 7.1, 7.0, 7.5, 8.1, 8.4, 8.6, 8.9]
  var barData2 = [39.9, 39.3, 37.8, 38.6, 39.7, 39.9, 39.6, 40.8, 43.1, 44.2]
  var barData3 = [52.8, 53.5, 54.5, 54.3, 53.3, 52.7, 52.4, 50.8, 48.3, 46.9]
  yData = [10078, 4848, 364, 38, 5];
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "14%",
      containLabel: true,
    },
    legend: {
      data: ["第一产业", "第二产业", '第三产业'],
      right: 10,
      top: 5,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: [
      {
        type: "category",
        data: lineYear,
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#82b0ec",
          },
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: transformFontSize(12)
          },
        },
      },
    ],
    yAxis: {
      show: true,
      type: "value",
      max: 100,
      axisLabel: {
        textStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        lineStyle: {
          color: "#0c2c5a",
        },
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        name: "第一产业",
        type: "bar",
        stack: "总量",
        barGap: "10%",
        itemStyle: {
          color: '#6c50f3',
          label: {
            show: true,
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: transformFontSize(12)
            },
          },
        },
        data: barData1.reverse()
      },
      {
        name: "第二产业",
        type: "bar",
        stack: "总量",
        itemStyle: {
          color: '#00ca95',
          label: {
            show: true,
            position: "inside",
          },
        },
        data: barData2.reverse()
      },
      {
        name: "第三产业",
        type: "bar",
        stack: "总量",
        itemStyle: {
          color: '#248ff7',
          label: {
            show: true,
            position: "inside",
          },
        },
        data: barData3.reverse()
      },
    ],
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".circle .chart"));
  const data1 = [["黄浦区男性", 229], ["徐汇区男性", 1024], ["长宁区男性", 442],
  ["静安区男性", 560], ["普陀区男性", 902], ["虹口区男性", 586],
  ["杨浦区男性", 1262], ["闵行区男性", 2261], ["宝山区男性", 1546],
  ["嘉定区男性", 1044], ["浦东新区男性", 3542], ["金山区男性", 465],
  ["松江区男性", 1457], ["青浦区男性", 734], ["奉贤区男性", 651],
  ["崇明区男性", 345]
  ];
  const data2 = [
    ["黄浦区女性", 578], , ["徐汇区女性", 2061], , ["长宁区女性", 1024], ["静安区女性", 1302], , ["普陀区女性", 1892], ["虹口区女性", 1234],
    ["杨浦区女性", 2345], ["闵行区女性", 4721], ["宝山区女性", 3543], ["嘉定区女性", 2323], ["浦东新区女性", 8402], ["金山区女性", 974]
    , ["松江区女性", 2923], ["青浦区女性", 1572], ["奉贤区女性", 1409], ["崇明区女性", 689]
  ];

  const scatterOption = (option = {
    color: ["#00d887", "#ffeb7b"],
    tooltip: {
      show: true,
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "2%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLine: "none",
      splitLine: "none",
      axisTick: "none",
      splitArea: "none",
      axisLabel: "none",
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: transformFontSize(12)
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        type: 'scatter',
        id: 'female',
        dataGroupId: 'female',
        universalTransition: {
          enabled: true,
          delay: function (idx, count) {
            return Math.random() * 400;
          }
        },
        data: data1
      },
      {
        type: 'scatter',
        id: 'female2',
        dataGroupId: 'female2',
        universalTransition: {
          enabled: true,
          delay: function (idx, count) {
            return Math.random() * 400;
          }
        },
        data: data2
      },
    ]
  });
  const barOption = {
    tooltip: {
      show: true
    },
    grid: {
      left: "0",
      right: "4%",
      bottom: "0%",
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#90979c",
        },
      },
      splitLine: "none",
      axisTick: "none",
      splitArea: "none",
      axisLabel: {
        interval: 0,
        fontSize: transformFontSize(12)
      },
      data: ["总数", "男", "女"],
    },
    yAxis: {
      type: "value",
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: transformFontSize(12)
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        name: "教育人口",
        type: "bar",
        barWidth: "40%",
        itemStyle: {
          normal: {
            //这里设置每个柱子颜色不一样
            color: function (params) {
              // 定义一个颜色数组colorList
              var colorList = ['#0184d5', "#00d887", "#ffeb7b"];
              return colorList[params.dataIndex]
            },
          }
        },
        data: [54042, 17050, 36992],
      },
    ]
  };
  let currentOption = scatterOption;
  myChart.setOption(scatterOption);
  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart.setOption(currentOption, true);
  }, 3000);

  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


(function () {
  var speed = 50;
  var list = document.getElementById('list');
  var list2 = document.getElementById('list2');
  var rule = document.getElementById('rule');
  list2.innerHTML = list.innerHTML;
  function Marquee() {
    if (list2.offsetTop - rule.scrollTop <= 0)
      rule.scrollTop -= list.offsetHeight;
    else {
      rule.scrollTop++;
    }
  }
  var MyMar = setInterval(Marquee, speed);
  rule.addEventListener('mouseover', function () {
    clearInterval(MyMar)
  });
  rule.addEventListener('mouseout', function () {
    MyMar = setInterval(Marquee, speed)
  });
})();

function transformFontSize(px) {
  let clientWidth = window.innerWidth || document.body.clientWidth
  if (!clientWidth) {
    return 0
  }
  let fontSize = clientWidth / 1920
  return px * fontSize
}
