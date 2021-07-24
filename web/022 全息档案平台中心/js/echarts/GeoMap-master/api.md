# GeoMap.js文档


## 概述

* geomap.js是一个绘制矢量地图控件，基于jQuery、Raphael，

* 支持geoJSON格式的数据源

* 通过Raphael绘制地图，默认采用svg，低版本IE采用vml，兼容性较好（支持IE7、8）


## 使用方法

基本操作：

```js
//实例化一个GeoMap对象
var map = new GeoMap();
	
//载入geoJSON格式的数据
map.load(geo_json_data);	

//渲染
map.render();
```


设置：

```js
//实例化GeoMap对象时可以传入设置项目的对象
var map = new GeoMap(cfg);

//不传参数时， 将使用内置的默认参数
defaultCfg = {
    //地图所在的位置
    container: 'body',
    //地图的偏移量, eg:{x:10, y:10}
    offset: null,
    //地图的缩放比例, eg:{x:10, y:10}
    scale: null,
    //地图样式
    mapStyle: {
        'fill': '#fff',
        'stroke': '#999',
        'stroke-width': 0.7
    },
    //是否显示鼠标跟随的十字刻度线
    crossline:{
        enable: false,
        color: '#ccc'
    },
    //地图背景
    background:'#fff'
};
```

指定渲染位置：

```js
//GeoMap默认在body元素下生成地图
//实例化时可以设置container指定渲染位置
var map = new GeoMap({
	container: '#map'
});
```
	
缩放与偏移：

```js
//geoJSON数据是真实地理经纬度数据
//转换到页面显示需要设置偏移和缩放
var map = new GeoMap({
	//偏移：确定地图位置
	offset: {
		x: 0, y: 0	//世界地图默认不需位移
	},
	//缩放：确定地图大小
	scale:{
		x: 2.6, y: 3
	}
});
//如果不设置偏移，脚本会自动计算路径数据，并让地图从左上角开始渲染
```

清空画布：（since 0.4.7）

```js
map = new GeoMap({...});
map.load(data_1);
map.render();
//完成一次绘制后，map对象可以清空画布
map.clear();
//重新绘制其他地区数据
//重绘需要注意：如果不确定偏移和缩放是否能够沿用，最好清空一次，让load方法重新计算这两个值
map.scale = null;
map.offset = null;
map.load(data_2);   //载入新数据
map.render();   //重绘
```

属性绑定：

```js
//通过Raphael的data方法绑定地区的属性
```

操作地图上的区块：

```js
var map = new GeoMap(config);
map.load(data);
map.render();

//渲染之后，map的shapes属性即地图上的各个区块，可以添加事件
map.shapes.hover(function(){
	...
});
```

画点：

```js
//map对象有一个setPoint方法，该方法接受一个坐标参数（取实际经纬度坐标）
//比如北京坐标是x: 116.4551, y: 40.2539
//setPoint方法会根据当前地图的缩放和偏移自动计算图上坐标
point = map.setPoint({x: 116.4551, y: 40.2539});

//点是用Raphael的circle方法画出的，可以通过属性设置，更改点的大小
point.attr('r', 5);
```

计算一个点的实际经纬度：

```js
map.getGeoPosition([10, 10]); //=> 页面地图上10,10这个点的实际经纬度坐标
```

画线：（since 0.5.3）

```js
//通过点地图上的点，绘制线段

//假设绘制任意三个点
p1 = map.setPoint({x: 坐标值, y: 坐标值});
p2 = map.setPoint({x: 坐标值, y: 坐标值});
p3 = map.setPoint({x: 坐标值, y: 坐标值});

//将三个点用线段连接起来
lines = map.drawLineByMapPoints([p1, p2, p3]);

//按数组先后顺序，给线段增加箭头的画法
lines = map.drawLineByMapPoints([p1, p2, p3], true);

//给线段和箭头设置样式的画法
lines = map.drawLineByMapPoints([p1, p2, p3], {
    size: 12,       //箭头大小
    rad: 8,         //箭头角度
    color: 'red'    //箭头和线的颜色
});

```

绘制马赛克式地图：（since 0.5.0）

`此方法计算量较大，低版本IE慎用。`

```js
//加载geoJSON数据
map.load(json));
//不使用render方法，直接使用mosaic方法，绘制马赛克式地图 
map.mosaic();
```


##关于数据源

geomap.js支持geoJSON格式的数据源。

为了保证地图在页面上的渲染位置，以及缩放比例，在新建一个GeoMap对象时，最好手动设置好offset和scale两个属性。

如果不手动设置，geomap.js加载geoJSON数据的时候，会自动遍历所有节点，算出偏移量和缩放比。

上述两种方法效率都不是很高，最好的方法是对geoJSON进行预处理。bin目录下的formatJSON可以对geoJSON数据源进行预处理，给数据增加一个srcSize属性，其中记录了偏移和缩放数据。geomap.js加载数据时，会根据这一属性的值对地图进行渲染。

formatJSON是一个node脚本，使用方法如下：

```js
//geojson.json是需要预处理的geoJSON文件
./formatJSON geojson.json
```
