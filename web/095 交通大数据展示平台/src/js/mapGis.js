/*
 * 百度地图案例
 */
layui.define(['layer'],function(exports){
	var $ = layui.$,
	layer = layui.layer;
	
	initMap();
	
	//创建和初始化地图函数：
	function initMap() {
		createMap(); //创建地图
		setMapEvent(); //设置地图事件
	};
	
	
	function createMap() {
		var map = new BMap.Map("mapGis", {
			enableMapClick: false,
			minZoom: 11
		}); //在百度地图容器中创建一个地图
		var point = new BMap.Point(113.463136,23.17295); //定义一个中心点坐标
		map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
		window.map = map; //将map变量存储在全局
		map.setMapStyleV2({
			styleId: '6d502212889a93864ad93df9a0699fa7'
		});
	};
	
	//地图事件设置函数：
	function setMapEvent() {
		map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
		map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
		map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
		map.enableKeyboard(); //启用键盘上下左右键移动地图
	};
	
	window. mapHeight = function(){
		var mapGisVice = $(window).height();
		$("#mapGisHeight").css("cssText", "height: " + mapGisVice + "px!important;");
	};
	
	//模块输出
	exports('mapGis', {})
});