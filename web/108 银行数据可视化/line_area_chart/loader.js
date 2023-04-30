// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "" + "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var line_area_chart = "" + "line_area_chart/";
addScript(line_area_chart + "line_area_chart.js");

$(document).ready(function () {
  var container = "lo_7";
  init_echart_line_area_chart(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_line_area_chart(
      container,
      line_area_chart + "line_area_chart.json"
    );
  }, 1000);
});
