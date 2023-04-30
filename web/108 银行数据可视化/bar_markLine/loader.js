// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var path_bar_age = "bar_markLine/";
addScript(path_bar_age + "bar_markLine.js");

$(document).ready(function () {
  var container = "lo_10";
  init_echart_bar_age(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_bar_age(container, path_bar_age + "bar_markLine.json");
  }, 1000);
});
