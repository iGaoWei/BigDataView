function init_echart_line_area_chart(container) {
  var chartDom = document.getElementById(container);
  var myChart = echarts.init(chartDom, window.gTheme);
  var option;

  option = {
    title: {
      text: "股权运作",
      // top: 0,
      // left: "center",
      textStyle: {
        // color: "#17c0ff",
        fontSize: "12",
      },
    },
    grid: {
      left: "3%",
      right: "3%",
      bottom: "3%",
      top: "25%",
      containLabel: true,
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
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
      type: "value",
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
        type: "line",
        areaStyle: {},
      },
    ],
  };

  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function async_echart_line_area_chart(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));
    myChart.setOption({
      xAxis: data["xAxis"],
      series: data["series"],
    });
  }); //end $.getJSON
}
