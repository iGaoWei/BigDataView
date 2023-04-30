function init_echart_bar_stacked(container) {
  var chartDom = document.getElementById(container);
  var myChart = echarts.init(chartDom, window.gTheme);
  var option;

  option = {
    title: {
      text: "资本监管-产权",
      top: 0,
      left: "left",
      textStyle: {
        // color: "#17c0ff",
        fontSize: "12",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      data: ["未并表", "并表", "未标明", "非上市", "上市"],
      textStyle: {
        color: "rgba(255, 255, 255, 0.8)",
      },
      // top: "20%",
      // orient:"vertical"
    },
    grid: {
      left: "3%",
      right: "4%",
      top: "35%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
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
    yAxis: {
      type: "category",
      data: ["10.11", "10.12", "10.13", "10.14"],
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
        name: "未并表",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [],
      },
      {
        name: "并表",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [],
      },
      {
        name: "未标明",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [],
      },
      {
        name: "非上市",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [],
      },
      {
        name: "上市",
        type: "bar",
        stack: "total",
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

  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function async_echart_bar_stacked(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));
    myChart.setOption({
      series: [
        { data: data[0] },
        { data: data[1] },
        { data: data[2] },
        { data: data[3] },
        { data: data[4] },
      ],
    });
  }); //end $.getJSON
}
