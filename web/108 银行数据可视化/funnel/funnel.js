function init_echart_funnel(container) {
  var chartDom = document.getElementById(container);
  var myChart = echarts.init(chartDom, window.gTheme);

  var option = {
    title: {
      text: "基金投资项目评级分析",
      //top: "5%",
      //left: "2%",
      textStyle: {
        // color: "#17c0ff",
        fontSize: "12",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c}",
    },
    series: [
      {
        type: "funnel",
        left: "15%",
        top: "20%",
        width: "55%",
        height: "65%",
        sort: "ascending",
        // 坐标轴显示的字样式
        label: {
          position: "right",
          textStyle: {
            color: "rgba(255, 255, 255, 0.8)",
          },
        },
        data: [],
      },
    ],
  };

  window.addEventListener("resize", function () {
    myChart.resize();
  });
  myChart.setOption(option);
}
function async_echart_funnel(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));

    myChart.setOption({
      series: [{ data: data }],
    });
  }); //end $.getJSON
}
