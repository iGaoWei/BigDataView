(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var geoCoordMap = {
    台湾: [121.5135, 25.0308],
    黑龙江: [127.9688, 45.368],
    内蒙古: [110.3467, 41.4899],
    吉林: [125.8154, 44.2584],
    北京市: [116.4551, 40.2539],
    辽宁: [123.1238, 42.1216],
    河北: [114.4995, 38.1006],
    天津: [117.4219, 39.4189],
    山西: [112.3352, 37.9413],
    陕西: [109.1162, 34.2004],
    甘肃: [103.5901, 36.3043],
    宁夏: [106.3586, 38.1775],
    青海: [101.4038, 36.8207],
    新疆: [87.9236, 43.5883],
    西藏: [91.11, 29.97],
    四川: [103.9526, 30.7617],
    重庆: [108.384366, 30.439702],
    山东: [117.1582, 36.8701],
    河南: [113.4668, 34.6234],
    江苏: [118.8062, 31.9208],
    安徽: [117.29, 32.0581],
    湖北: [114.3896, 30.6628],
    浙江: [119.5313, 29.8773],
    福建: [119.4543, 25.9222],
    江西: [116.0046, 28.6633],
    湖南: [113.0823, 28.2568],
    贵州: [106.6992, 26.7682],
    云南: [102.9199, 25.4663],
    广东: [113.12244, 23.009505],
    广西: [108.479, 23.1152],
    海南: [110.3893, 19.8516],
    上海: [121.4648, 31.2891],
  };

  var MapData = [
    [{ name: "北京市" }, { name: "上海", value: 35089, value1: 19084, value2: 16005 }],
    [{ name: "天津" }, { name: "海南", value: 22642, value1: 11367, value2: 11275 }],
    [{ name: "天津" }, { name: "上海", value: 22642, value1: 11367, value2: 11275 }],
    [{ name: "河北" }, { name: "上海", value: 125526, value1: 70281, value2: 55245 }],
    [{ name: "山西" }, { name: "上海", value: 118384, value1: 67058, value2: 51326 }],
    [{ name: "内蒙古" }, { name: "上海", value: 47163, value1: 23820, value2: 23343 }],
    [{ name: "辽宁" }, { name: "江苏", value: 122922, value1: 59869, value2: 63053 }],
    [{ name: "吉林" }, { name: "上海", value: 105841, value1: 51627, value2: 54214 }],
    [{ name: "黑龙江" }, { name: "上海", value: 165644, value1: 79481, value2: 86163 }],
    [{ name: "江苏" }, { name: "上海", value: 1798258, value1: 1009157, value2: 789101 }],
    [{ name: "浙江" }, { name: "安徽", value: 515614, value1: 264405, value2: 251209 }],
    [{ name: "安徽" }, { name: "上海", value: 2426484, value1: 1337217, value2: 1089267 }],
    [{ name: "福建" }, { name: "河南", value: 294823, value1: 161641, value2: 133182 }],
    [{ name: "江西" }, { name: "河南", value: 502200, value1: 276599, value2: 225601 }],
    [{ name: "山东" }, { name: "上海", value: 501181, value1: 293389, value2: 207792 }],
    [{ name: "河南" }, { name: "山东", value: 1342950, value1: 800170, value2: 542780 }],
    [{ name: "湖北" }, { name: "上海", value: 417652, value1: 220363, value2: 197289 }],
    [{ name: "湖南" }, { name: "重庆", value: 237535, value1: 121332, value2: 116203 }],
    [{ name: "广东" }, { name: "上海", value: 122677, value1: 67666, value2: 55011 }],
    [{ name: "广西" }, { name: "广东", value: 84654, value1: 43041, value2: 41613 }],
    [{ name: "海南" }, { name: "上海", value: 18140, value1: 9090, value2: 9050 }],
    [{ name: "重庆" }, { name: "上海", value: 189139, value1: 101670, value2: 87469 }],
    [{ name: "四川" }, { name: "新疆", value: 517464, value1: 276427, value2: 241037 }],
    [{ name: "贵州" }, { name: "上海", value: 188738, value1: 104324, value2: 84414 }],
    [{ name: "云南" }, { name: "上海", value: 139168, value1: 78497, value2: 60671 }],
    [{ name: "西藏" }, { name: "云南", value: 2649, value1: 990, value2: 1659 }],
    [{ name: "陕西" }, { name: "西藏", value: 185178, value1: 105779, value2: 79399 }],
    [{ name: "甘肃" }, { name: "上海", value: 178139, value1: 99794, value2: 78345 }],
    [{ name: "青海" }, { name: "甘肃", value: 12732, value1: 6473, value2: 6259 }],
    [{ name: "宁夏" }, { name: "上海", value: 16861, value1: 9046, value2: 7815 }],
    [{ name: "新疆" }, { name: "上海", value: 44205, value1: 19434, value2: 24771 }],
    [{ name: "新疆" }, { name: "宁夏", value: 44205, value1: 19434, value2: 24771 }],
  ]

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function (data) {
    var fromCoord = geoCoordMap[data[0].name];
    var toCoord = geoCoordMap[data[1].name];
    return [
      {
        fromName: data[0].name,
        toName: data[1].name,
        coords: [fromCoord, toCoord],
        value: data[1].value,
        value1: data[1].value1,
        value2: data[1].value2,
      }
    ];
  };

  var series = [];
  MapData.forEach(function (item, i) {
    series.push(
      {
        name: item[0].name,
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: "#fff",
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item)
      },
      {
        name: item[0].name,
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item)
      },
      {
        name: item[0].name,
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#fff"
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: [
          { name: item[0].name, value: geoCoordMap[item[0].name], code: item[1].value, code1: item[1].value1, code2: item[1].value2 }
        ]
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return params.data.name + "：" + params.data.code + '人' + '<br />' + '男：' + params.data.code1 + '<br />' + '女：' + params.data.code2;
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            " > " +
            params.data.toName +
            "：" +
            params.data.value + '人' + '<br />' + '男：' + params.data.value1 + '<br />' + '女：' + params.data.value2
          );
        } else {
          return params.name;
        }
      }
    },

    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      roam: false,
      //   放大我们的地图
      zoom: 1.1,
      itemStyle: {
        normal: {
          areaColor: "rgba(43, 196, 243, 0.42)",
          borderColor: "rgba(43, 196, 243, 1)",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
