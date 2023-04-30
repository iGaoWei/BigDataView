function init_echart_bar_horizontal(container) {
  var chartDom = document.getElementById(container);
  var myChart = echarts.init(chartDom, window.gTheme);
  var option = {
    title: {
      text: "基金投资",
      // top: "5%",
      // left: "2%",
      textStyle: {
        // color: "#3690be",
        fontSize: "12",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} 亿元",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      },
    },

    grid: {
      left: "5%",
      //   top: "30%",
      //   right: "5%",
      bottom: "2%",
      containLabel: true,
    },

    xAxis: [
      {
        name: "亿元",
        type: "value",
        min: 0,
        max: 100,
        nameLocation: "start",
        nameTextStyle: {
          color: "#3690be",
          //fontSize: 14,
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.8)",
            //fontSize: 14,
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.8)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    yAxis: {
      // name: "类目",
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
          color: "rgba(255,255,255,.8)",
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
        // name: "亿元",
        type: "bar",
        xAxisIndex: 0,

        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

function async_echart_bar_horizontal(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(
      document.getElementById(container),
      window.gTheme
    );

    myChart.setOption({
      yAxis: { data: data["yAxis"]["data"] },
      series: [{ data: data["series"][0]["data"] }],
    });
  }); //end $.getJSON}
}
