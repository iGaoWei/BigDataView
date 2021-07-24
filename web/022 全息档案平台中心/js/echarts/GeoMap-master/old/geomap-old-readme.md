# GeoMap.js（旧版使用说明）

## 概述

* GeoMap.js是一个绘制矢量地图控件，基于jQuery、Raphael，

* 支持geoJSON格式的数据源

* 通过Raphael绘制地图，默认采用svg，低版本IE采用vml，兼容性较好


## 文件结构
	
	china.json			// 中国地图数据
	geomap.js			// 模块压缩文件
	geomap.debug.js	// 模块源文件
	

## 使用方法

#### 使用sea.js加载
	
	//需要先加载jquery和raphael模块
	var GeoMap = require('(路径)/geomap');

#### 实例化一个GeoMap对象
	
	var map = new GeoMap(element, width, height);
	// element: 放置map的位置，支持tagName/#id/.class
	
#### 渲染一张地图

	// 渲染地图的参数
	var config = {
		// 数据文件的路径
		srcPath: '../json/china.map.data.json',
		// 缩放比例，x轴和y轴采用不同的缩放比例
		scale:{x:2,y:3}
	};
	
	// 渲染地图的回调函数
	function callback(){
		// 可以对地图进行操作
	}
	
	// 渲染
	map.render(config, callback);

#### 操作地图上的地区
	
	// 实例化的GeoMap对象里，拥有一个mapPaths属性，其中记录了当前地图上的所有地区
	map.render(function(){
		// 在回调函数中，给各个地区增加鼠标经过事件
		$.each(map.mapPaths, function(k, v){
			
			v.hover(function(){
				this.attr({fill:"#369"});
			});
			
		});
	});
	
	

#### 画点
	
	// 定义一个点（如果半径大，就是一个圆形）
	var oPoint = {
		"x" : 10.1,		// 经度（必须）
		"y" : 100.2,	// 纬度（必须）
		"r" : 1,		// 点的半径
		"opacity" : 0.5,	// 点的透明度
		"fill" : "#238CC3",		// 点的颜色
		"stroke" : "#238CC3",	// 外边框的颜色
		"stroke-width" : 0.1	// 外边框的粗度
	};
	
	// 把点画到地图上
	var p = map.setPoint(oPoint);	
	
	// 把点删掉
	p.remove();

	
#### 画线
	
	// 数组中的坐标对象就是线段上的各个点
	var aPoints = [{x:1,y:2},{x:2,y:3},…];
	
	// 定义一条线
	var oLine = {
		"ps": aPoints 			// ps属性就是点数组
		"stroke": "#369"		// 线的颜色
		"stroke-width": 0.5		// 线的粗细
	}；
	
	// 把线画出来
	var l = map.setLine(oLine);
	
	// 把线删掉
	l.remove();


#### 缩放

    map.viewScale('up');    // 放大
    map.viewScale('down');  // 缩小
    // 可以设置两个dom节点作为放大和缩小按钮，用点击事件调用放大和缩小方法
    // 在放大状态时，可以拖动地图

#### 平移地图

	//在同一张画布上重复渲染不同的地图时，由于地图尺寸比例不一致，造成地图无法自动居中。
	//默认情况下，会根据geoJSON的尺寸，自动让地图居左，如果想要让地图居中，需要在渲染地图的设置项里增加translate属性
	var config = {
		...
		// x轴偏移1度坐标，y轴不偏移;
		'translate':{
			'x' : 1,
			'y' : 0
		},
		...
	};

