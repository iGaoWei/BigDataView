$(function() {
	$("div.data").hide();
	$("#graphViewBtn").on('click',showGraphView);
	$("#dataViewBtn").on('click',showDataView);
	$('a[data-toggle="tab"]').on('shown.bs.tab',changeLeftTitle);
	showSerialChart("graphOne");
	showPieChart("graphTwo");
	init();
});
function init() {
	var today=new Date(),
	todayDate=new Date(today.getFullYear(),today.getMonth(),today.getDate());
	//设置时间格式
	$("#startDate,#endDate").datepicker({
	    language: 'zh-CN',
	    autoclose: true,
	    endDate:"Today",
	    todayBtn:"linked",
	    format:"yyyy-mm-dd"
	});
	$("#startDate").datepicker('update',todayDate);
	$("#endDate").datepicker('update',todayDate);
	//select
	$(".select").selectpicker();
	//高度
	$(".left-region").height($(".right-region").height());
}
/**
 * 显示图形视图
 */
function showGraphView(event) {
	$("div.data").hide();
	$("div.graph").show();
	showSerialChart("graphOne");
	showPieChart("graphTwo");	
}
/**
 * 显示表格视图
 */
function showDataView(event) {
	$("div.data").show();
	$("div.graph").hide();
	showSerialData();
	showPieData();
}

function showSerialChart(chartDiv) {
	var chart = AmCharts.makeChart(chartDiv, {
	  "type": "serial",
	  "dataProvider": DataSet.serialData,
	  "valueAxes": [ {
	    "gridColor": "black",
	    "gridAlpha": 0.4,
	    // "axisAlpha": 0,
	    "dashLength": 8,
	    "position": "left",
		"autoGridCount":false,
	    "gridCount":3,
	    "title":"总能耗(kgce)"
	  } ],
	  "gridAboveGraphs": true,
	  "startDuration": 0, //second
	  "graphs": [ {
	    "balloonText": "[[category]]: <b>[[value]]</b>",
	    "fillAlphas": 0.8,
	    "fillColors":'#FF62FF',
	    "lineAlpha": 0.2,
	    "columnWidth":0.6,
	    "type": "column",
	    "valueField": "value"
	  } ],
	  "chartCursor": {
	    "categoryBalloonEnabled": false,
	    "cursorAlpha": 0,
	    "zoomable": false
	  },
	  "categoryField": "time",
	  "categoryAxis": {
	    "gridPosition": "start",
	    "gridAlpha": 0.4,
	    "dashLength":8,
	    "dateFormats":[{period:'hh',format:'JJ:NN'}],
	    "tickPosition": "start",
	    "autoGridCount":false,
	    "gridCount":6,
	    // "tickLength": 20
	    // title:"总耗能",
	    // "position":"top"
	  },
	} );
}

function showPieChart(chartDiv) {
	var chart = AmCharts.makeChart(chartDiv, {
	  "type": "pie",
	  "startDuration": 0,
	  "addClassNames": true,
	  "legend":{
	   	"position":"right",
	    "autoMargins":true,
	    "valueText":"[[value]]kgce",//gkq:debug
	  },
	  "minRadius":80,
	  "innerRadius": "40%",
	  "radius":"40%", //gkq:debug
	  "pullOutRadius":0,
	  "dataProvider": DataSet.pieData,
	  "valueField": "value",
	  "titleField": "item",
	  "labelRadius":-30, //gkq:debug
	  "colors":['#5AB6DF','#FFC64B','#5ADF75','#FC8675','#6A8ABE','#FFA24B','#916DDC','#B5EB5F','#EC6E96','#EEF658'],
	  "outlineThickness":2,
	  "outlineAlpha":0.8,
	  "labelText":"[[percents]]%",
	  "labelsEnabled":true,
	  "percentPrecision":0
	});
}

function showSerialData() {
	var html="";
	$.each(DataSet.serialData, function(index, entity) {
		html+="<tr><td>"+entity.time+"</td><td>"+entity.value+"</td></tr>";
	});
	$(".serialTBody").empty().html(html);
}

function showPieData() {
	var html="";
	$.each(DataSet.pieData, function(index, entity) {
		html+="<tr><td>"+entity.item+"</td><td>"+entity.value+"</td></tr>";
	});
	$(".pieTBody").empty().html(html);
}

function changeLeftTitle(event) {
	console.log(event);
	// 获取已激活的标签页的名称
	var activeTab = $(event.target).text(); 
	$.each(DataSet.titleData, function(index, entity) {
		if (entity.title===activeTab) {
			$("#leftInfo>h2").text(activeTab+"报表");
			$("#leftInfo>h4").text(entity.subTitle);
		}
	});
}

//共享数据集
var DataSet={
	serialData:[ { //serial Data
	    "time": "0:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "1:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "2:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "3:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "4:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "5:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "6:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "7:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "8:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "9:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "10:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "11:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "12:00",
	    "value": 200+Math.round(Math.random()*40)
	  },{"time": "13:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "14:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "15:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "16:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "17:00",
	    "value": 200+Math.round(Math.random()*40)
	  }, {
	    "time": "18:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "19:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "20:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "21:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "22:00",
	    "value": 100+Math.round(Math.random()*20)
	  }, {
	    "time": "23:00",
	    "value": 100+Math.round(Math.random()*20)
	  } ],
	  pieData:[{ //pie Data
	    "item": "总用电",
	    "value": 60
	  }, {
	    "item": "总用水",
	    "value": 20
	  }, {
	    "item": "总用气",
	    "value": 15
	  }, {
	    "item": "其他",
	    "value": 5
	  }],
	  titleData:[
	  	{"title":"建筑总能耗","subTitle":"含建筑总耗能、总用电、总用水、总用气等数据。"},
	  	{"title":"建筑总用电","subTitle":"含建筑总耗能、总用电、总用水、总用气等数据。"},
	  	{"title":"空调系统用电","subTitle":"含建筑总耗能、总用电、总用水、总用气等数据。"},
	  	{"title":"建筑空间用电","subTitle":"含建筑总耗能、总用电、总用水、总用气等数据。"},
	  	{"title":"建筑碳排放量","subTitle":"含建筑总耗能、总用电、总用水、总用气等数据。"},
	  ]
};