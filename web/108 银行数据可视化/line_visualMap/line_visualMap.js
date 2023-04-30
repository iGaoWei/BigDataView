function init_echart_line_visualMap(container) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(container), gTheme);
  option = {
    title: {
      text: "股票市值实时监测",
      // top: 0,
      // left: "center",
      textStyle: {
        // color: "#17c0ff",
        fontSize: "12",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      },
    },

    grid: {
      left: "3%",
      right: "3%",
      bottom: "3%",
      top: "25%",
      containLabel: true,
    },

    xAxis: {
      name: "名称",
      type: "category",
      data: [],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          //fontSize: 14,
        },
        // formatter: "{value}%",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        },
      },
    },
    yAxis: {
      name: "亿元",
      type: "value",
      data: [],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          //fontSize: 14,
        },
        formatter: "{value}",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        },
      },
    },
    visualMap: {
      top: "top",
      left: "right",
      textStyle: {
        color: "rgba(255,255,255,.8)",
        //fontSize: 14,
      },
      pieces: [
        {
          gt: 0,
          lte: 100,
          color: "#FF0000",
        },
        {
          gt: 100,
          lte: 800,
          color: "#FFA500",
        },
        {
          gt: 800,
          lte: 900,
          color: "#2E8B57",
        },
      ],
    },
    series: [
      {
        name: "年龄分布",
        type: "line",
        // stack: "total",
        // label: {
        //   show: true,
        // },
        // 使用系统函数
        markPoint: {
          label: {
            textStyle: {
              color: "rgba(255,255,255,.8)",
              //fontSize: 14,
            },
          },
          data: [
            { type: "max", name: "Max" },
            { type: "min", name: "Min" },
          ],
        },
        markLine: {
          data: [{ type: "average", name: "Avg" }],
        },
        // 自定义数据
        // markLine: {
        //   // 图形是否不响应和触发鼠标事件
        //   silent: true,
        //   label: {
        //     textStyle: {
        //       color: "rgba(255,255,255,.8)",
        //       //fontSize: 14,
        //     },
        //   },
        //   data: [
        //     {
        //       yAxis: 100,
        //       lineStyle: {
        //         color: "#FF0000",
        //       },
        //     },
        //     {
        //       yAxis: 800,
        //       lineStyle: {
        //         color: "#FFA500",
        //       },
        //     },
        //     {
        //       yAxis: 900,
        //       lineStyle: {
        //         color: "#2E8B57",
        //       },
        //     },
        //   ],
        // },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function getKeys(dataList) {
  var keys = [];
  var len = dataList.length;
  for (var i = 0; i < len; i++) keys.push(dataList[i].name);
  return keys;
}

function async_echart_line_visualMap(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));
    myChart.setOption({
      xAxis: { data: getKeys(data) },
      series: [{ data: data }],
    });
  }); //end $.getJSON
}
