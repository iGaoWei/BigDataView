function init_echart_map_china_map(container) {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(container), window.gTheme);
  var data = [];
  var geoCoordMap = {};
  option = {
    // title: {
    //   text: "全国监管投资金额分析",
    //   top: "2%",
    //   left: "center",
    //   textStyle: {
    //     // color: "hsl(200, 86%, 48%)",
    //     fontSize: "20",
    //   },
    // },

    tooltip: {
      trigger: "item",
      formatter: function (params) {
        console.log(params);
        value = 0;
        if (params.value) value = params.value;
        return params.seriesName + "<br>" + params.name + " : " + value + "万";
      },
    },
    visualMap: {
      type: "piecewise",
      splitNumber: 5,
      pieces: [
        { gt: 10000 },
        { gt: 1000, lte: 9999 },
        { gt: 500, lte: 999 },
        { gt: 100, lte: 499 },
        { gt: 10, lte: 99 },
        { gt: 1, lte: 9 },
        { lte: 0 },
      ],

      textStyle: {
        color: "#fff",
      },
      top: "bottom",
    },

    geo: [
      {
        map: "china",
        layoutCenter: ["50%", "50%"],
        zoom: 1,
        roam: true,
        // 地图放大或缩小的尺寸
        layoutSize: "100%",
        selectedMode: "single",
        label: {
          emphasis: {
            show: false,
          },
        },

        // 地图区域的多边形 图形样式。
        itemStyle: {
          // 图形阴影颜色。支持的格式同color。
          shadowColor: "black",
          // 图形阴影的模糊大小。
          shadowBlur: 10,
          // 阴影水平方向上的偏移距离。
          shadowOffsetX: 2,
          // 阴影垂直方向上的偏移距离。
          shadowOffsetY: 2,
        },
        // 高亮状态下的多边形和标签样式。
        emphasis: {
          itemStyle: {
            borderWidth: 3,
            borderColor: "purple",
            // areaColor: "#ffdead",
          },
        },
      },
    ],
    series: {
      name: "累计金额",
      type: "map",
      coordinateSystem: "geo",
      geoIndex: 0,
      zoom: 1.2,
      roam: true,
    },
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
// 地图加载数据
function async_echart_china(container, filename, section) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));
    series = "";
    data_section = [];
    if (section == "confirmAdd") {
      series = "新增金额";
      data_section = data.map((item) => {
        return { name: item.name, value: item.confirmAdd };
      });
    }
    if (section == "confirm") {
      series = "累计金额";
      data_section = data.map((item) => {
        return { name: item.name, value: item.confirm };
      });
    }
    if (section == "nowConfirm") {
      series = "现有金额";
      data_section = data.map((item) => {
        return { name: item.name, value: item.nowConfirm };
      });
    }

    myChart.setOption({
      series: {
        name: series,
        data: data_section,
      },
    });
  });
}
