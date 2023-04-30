function init_echart_bar_ROA(container) {
  var chartDom = document.getElementById(container);
  var myChart = echarts.init(chartDom, window.gTheme);
  var option;

  option = {
    title: {
      text: "决策运行监督",
      //top: "5%",
      //left: "2%",
      textStyle: {
        // color: "#00ffff",
        fontSize: "12",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      top: "30%",
      containLabel: true,
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ",
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10];
      },
    },
    xAxis: {
      name: "名称",
      type: "category",
      nameTextStyle: {
        color: "rgba(255,255,255,.8)",
        // fontSize: 12,
      },
      data: [],
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          // fontSize: 14,
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
      name: "数量（个）",
      type: "value",
      nameTextStyle: {
        color: "rgba(255,255,255,.8)",
        // fontSize: 12,
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.8)",
          // fontSize: 14,
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
        data: [],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)",
        },
      },
    ],
  };

  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function async_echart_bar_ROA(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(
      document.getElementById(container),
      window.gTheme
    );
    myChart.setOption(data);
  }); //end $.getJSON
}
