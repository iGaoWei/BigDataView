// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var path_bar_ROA = "bar_ROA/";
addScript(path_bar_ROA + "bar_ROA.js");

$(document).ready(function () {
  var container = "lo_6";
  init_echart_bar_ROA(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_bar_ROA(container, path_bar_ROA + "bar_ROA.json");
  }, 1000);
});
