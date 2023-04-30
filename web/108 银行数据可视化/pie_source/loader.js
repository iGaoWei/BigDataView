// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var pie_source = "pie_source/";
addScript(pie_source + "pie_source.js");

$(document).ready(function () {
  var container = "lo_3";
  init_echart_pie_source(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_pie_source(container, pie_source + "pie_source.json");
  }, 1000);
});
