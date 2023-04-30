// 加载主题，必须在echarts.init之前。
var gTheme = getQueryVariable("theme");
themeUrl = "theme/js/" + gTheme + ".js";
addScript(themeUrl);

// 加载依赖文件
var path_funnel = "funnel/";
addScript(path_funnel + "funnel.js");

$(document).ready(function () {
  var container = "lo_2";
  init_echart_funnel(container);
  // 定时1s执行数据更新函数
  setInterval(function () {
    async_echart_funnel(container, path_funnel + "funnel.json");
  }, 1000);
});
