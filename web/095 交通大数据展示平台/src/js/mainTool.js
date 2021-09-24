layui.config({
	base: 'src/js/'
}).use(['jquery','mapGis','echartsMin','macarons','echartsMain','element'], function(exports){
	var $ = layui.$,
	mapGis = layui.mapGis,
	echartsMin = layui.echartsMin,
	macarons = layui.macarons,
	echartsMain = layui.echartsMain,
	element = layui.element;
	
	/*
	 * 延时加载图表
	 */
	setTimeout(function(){
		var height = $(".main_height").height();
		var width = $(".main_height").width();
		var heights = $(".main_heights").height();
		var widths = $(".main_width").width();
		$("#mainBar").css("width", width).css("height", height);
		$("#mainBlend").css("width", widths).css("height", heights);
		$("#mainPie").css("width", width).css("height", heights);
		mainBar();
		mainBlend();
		mainPie();
	},500);
	
	/*
	 * 设置DIV高度
	 */
	window.mainHeight = function(){
		var main_height = $(window).height()/2.1;
		var main_heights = $(window).height()/3;
		$(".main_height").css("cssText", "height: " + main_height + "px!important;");
		$(".main_heights").css("cssText", "height: " + main_heights + "px!important;");
	};
	mainHeight();
	
	
	/*
	 * 全屏地图
	 */
	window.mapOpen = function(){
		var index = layer.open({
			title:false,
		  	type: 2,
		  	closeBtn: 0,
		  	isOutAnim: false,
		  	content: 'map.html',
		});
		layer.full(index);
	};
	
	window.rightOpen = function(){
		layer.msg('更多模板关注公众号【DreamCoders】，\n回复‘BigDataView’免费获取');
	};
	
	
	//输出接口
	exports('mainTool', {})
});