// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载地图依赖文件
var path_map_china_map = "map_china_map/";
addScript(path_map_china_map + "bmap.min.js");
addScript(path_map_china_map + "china.js");
addScript(path_map_china_map + "init.js");

// event事件，自动高亮地图各地区
// 高亮表盘事件
function emphasisData(container) {
  var currentIndex = -1;
  setInterval(function () {
    var myChart = echarts.init(document.getElementById(container));
    var dataLen = 0;
    try {
      dataLen = myChart.getOption().dataset[0]["source"].length;
    } catch {
      try {
        dataLen = myChart.getOption().series[0]["data"].length;
      } catch {
        return;
      }
    }

    // 取消之前高亮的图形
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });

    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
  }, 1000);
}

$(document).ready(function () {
  var container = "container_8";
  init_echart_map_china_map(container);
  async_echart_china(
    container,
    path_map_china_map + "map_china_map.json",
    "confirm"
  );
  // 定时5min执行数据更新函数
  setInterval(function () {
    async_echart_china(
      container,
      path_map_china_map + "map_china_map.json",
      "confirm"
    );
  }, 300000);

  emphasisData(container);
});
