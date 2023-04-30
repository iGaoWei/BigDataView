// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var path_line_visualMap = "line_visualMap/";
addScript(path_line_visualMap + "line_visualMap.js");

$(document).ready(function () {
  var container = "lo_5";
  init_echart_line_visualMap(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_line_visualMap(
      container,
      path_line_visualMap + "line_visualMap.json"
    );
  }, 1000);
});
