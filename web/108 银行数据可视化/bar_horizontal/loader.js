// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var path_bar_horizontal = "bar_horizontal/";
addScript(path_bar_horizontal + "bar_horizontal.js");

$(document).ready(function () {
  var container = "lo_1";
  init_echart_bar_horizontal(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_bar_horizontal(
      container,
      path_bar_horizontal + "bar_horizontal.json"
    );
  }, 1000);
});
