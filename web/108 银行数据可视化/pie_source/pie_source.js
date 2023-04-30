function init_echart_pie_source(container) {
  var myChart1 = echarts.init(
    document.getElementById(container),
    window.gTheme
  );

  option = {
    title: {
      text: "风险监测预警-经营风险",
      top: 0,
      left: "center",
      textStyle: {
        // color: "#17c0ff",
        fontSize: "12",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      // orient: 'vertical',
      // left: 'right',
      top: "75%",
      itemWidth: 10,
      itemHeight: 10,
      data: [],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        //fontSize: "10",
      },
    },

    series: [
      {
        type: "pie",
        radius: "50%",
        center: ["50%", "40%"],

        // 环形图的组成部分不显示文字
        label: { show: false },

        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option);
  // 必须
  window.addEventListener("resize", function () {
    myChart1.resize();
  });
}

function async_echart_pie_source(container, filename) {
  // 异步加载数据
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));

    var legendData = [];
    for (var i = 0; i < data.length; i++) {
      legendData.push(data[i].name);
    }

    myChart.setOption({
      legend: { data: legendData },
      series: [
        {
          data: data,
        },
      ],
    });
  }); //end $.getJSON
}
