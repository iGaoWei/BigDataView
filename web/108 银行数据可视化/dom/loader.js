var idContainer_1 = "container_m2_1";
var idContainer_2 = "container_m2_2";
var idContainer_3 = "container_m2_3";
var idContainer_4 = "container_m2_4";

var chartDom_1 = document.getElementById(idContainer_1);
var chartDom_2 = document.getElementById(idContainer_2);
var chartDom_3 = document.getElementById(idContainer_3);
var chartDom_4 = document.getElementById(idContainer_4);

function async_echart_dom(filename) {
  $.getJSON(filename).done(function (data) {
    chartDom_1.innerHTML = "<p>No.1</p><h2>" + data[0] + "</h1><p>亿</p>";
    chartDom_2.innerHTML = "<p>No.2</p><h2>" + data[1] + "</h1><p>亿</p>";
    chartDom_3.innerHTML = "<p>No.3</p><h2>" + data[2] + "</h1><p>亿</p>";
    chartDom_4.innerHTML = "<p>No.4</p><h2>" + data[3] + "</h1><p>亿</p>";
  });
}

var path_dom = "dom/";
async_echart_dom(path_dom + "dom.json");
