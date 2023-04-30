function init_echart_bar_age(container) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(container), gTheme);
  option = {
    title: {
      text: "风险监测预警-投资风险",
      //top: "5%",
      //left: "2%",
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
      right: "15%",
      bottom: "3%",
      top: "30%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      data: [],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          //fontSize: 14,
        },
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
      type: "value",
      data: [],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          //fontSize: 14,
        },
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
    series: [
      {
        name: "年龄分布",
        type: "bar",
        // stack: "total",
        // label: {
        //   show: true,
        // },
        markLine: {
          // 图形是否不响应和触发鼠标事件
          silent: true,
          lineStyle: {
            color: "red",
          },
          label: {
            textStyle: {
              color: "rgba(255,255,255,.8)",
              //fontSize: 14,
            },
          },
          data: [
            {
              yAxis: 4000,
            },
            {
              yAxis: 5000,
            },
          ],
        },
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

function async_echart_bar_age(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));
    myChart.setOption({
      xAxis: { data: getKeys(data) },
      series: [{ data: data }],
    });
  }); //end $.getJSON
}
