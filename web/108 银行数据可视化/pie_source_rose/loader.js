// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var pie_source_rose = "pie_source_rose/";
addScript(pie_source_rose + "pie_source_rose.js");

$(document).ready(function () {
  var container = "lo_4";
  init_echart_pie_source_rose(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_pie_source_rose(
      container,
      pie_source_rose + "pie_source_rose.json"
    );
  }, 1000);
});
