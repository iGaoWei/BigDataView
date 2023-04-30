// 引入js脚本文件
function addScript(url) {
  document.write("<script language=javascript src=" + url + "></script>");
}

// 引入css样式文件
function addCSS(url) {
  document.write("<link rel='stylesheet' href=" + url + "/>");
}

// 获取url地址中的键值对
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return "infographic";
}

// 地图加载数据
function async_echart(container, filename) {
  $.getJSON(filename).done(function (data) {
    var myChart = echarts.init(document.getElementById(container));

    myChart.setOption({
      series: { data: data },
    });
    console.log(myChart.getOption());
  });
}
