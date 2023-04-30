
var idContainer_2_1 = "container_2_1";
var idContainer_2_2 = "container_2_2";
var idContainer_2_3 = "container_2_3";

var chartDom_2_1 = document.getElementById(idContainer_2_1);
var chartDom_2_2 = document.getElementById(idContainer_2_2);
var chartDom_2_3 = document.getElementById(idContainer_2_3);


function asyncData_2() {
    $.getJSON("json/dom.json").done(function (data) {
        chartDom_2_1.innerHTML = data[0] + '亿元' ;
        chartDom_2_2.innerHTML = data[1] + "个";
        chartDom_2_3.innerHTML = data[2] + "%";
    });
  }

  asyncData_2();