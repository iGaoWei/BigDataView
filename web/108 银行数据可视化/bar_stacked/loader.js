// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var path_bar_stacked = "bar_stacked/";
addScript(path_bar_stacked + "bar_stacked.js");

$(document).ready(function () {
  var container = "lo_9";
  init_echart_bar_stacked(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_bar_stacked(container, path_bar_stacked + "bar_stacked.json");
  }, 1000);
});
