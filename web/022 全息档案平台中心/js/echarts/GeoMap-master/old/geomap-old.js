/*
*
* Author: Yang Dongxu
* Date: 12-12-29
* Time: 上午9:59
*
* GeoMap.js 矢量地图展示控件
*
*/

// TODO: 格式化坐标的方法 | 画geoJSON的点和线的方法


(function(){

	var GeoMap = function (container, w, h){
		var self = this;
		self.container = $(container);
		self.width = w || self.container.width();
		self.height = h || self.container.height();

		// 记录可视区域的状态
		self.viewBox = {
			a : 0,	// 可视区域x轴偏移
			b : 0,	// 可视区域y轴偏移
			w : self.width,	// 可视区域宽
			h : self.height	// 可视区域高
		};
		
		self.canvas = new Raphael(self.container.get(0), self.width, self.height);

		// 记录地图上所有path的对象
		self.mapPaths = {};

		// 地图的偏移量和缩放比例
		self.offset = {},
		self.scale = {};

		self.defaultConfig = {
			'srcPath' : '',
			'scale' : {
				'x' : 1,
				'y' : 1
			},
			// 设置平移量，以便让地图放在合适的位置
			'translate' : {
				'x' : 0,
				'y' : 0
			},
			'style' : {
				'fill' : '#CFEBF7',
				'stroke' : '#fff',
				'stroke-width' : 1,
				'stroke-linejoin' : 'round'
			},
			'loadingTxt' : {
				'loading' : '载入数据',
				'fail' : '数据载入失败',
				'fill' : '#333'
			}
		};		
	};
	
	GeoMap.prototype = {
		
		// 数据载入提示，画布正中显示
		showLoadingTip : function(t){
			var self = this,
				canvas = self.canvas,
				txt, box, w, h;
			
			self.removeLoadingTip();
			
			txt = canvas.text(self.width/2, self.height/2, t).attr({
				'fill':'#fff',
				'font-size':'12px'
			});
			txt.id = 'loadingTip';
			
			w = txt.node.clientWidth;
			h = txt.node.clientHeight;
			
			box = canvas.rect((self.width - w)/2, (self.height - h)/2, w, h).attr({
				'fill':'#000'
			});
			
			box.insertBefore(txt);
			box.id = 'loadingTipBox';
		},
		removeLoadingTip : function(){
			var self = this,
				tip = self.canvas.getById('loadingTip'),
				box = self.canvas.getById('loadingTipBox');

			if(tip){
				tip.remove();
				box.remove();
			}
		},
		
		// 绘制地图
		render : function(){ /* 支持两个参数 config, callback */
			var self = this,
				canvas = self.canvas,
				xhr,
				sx, sy, argtype,
				callback = function(){},
				config = {};

			if(arguments.length == 1){
				argtype = {}.toString.call(arguments[0]);
				if(argtype == '[object Object]'){
					config = arguments[0];
				}else if(argtype == '[object Function]'){
					callback = arguments[0];
				}
			}else if(arguments.length == 2){
				config = arguments[0];
				callback = arguments[1];
			}	

			// 清空画布
			canvas.clear();
			// 清空mapPaths
			self.mapPaths = {};
			
			// 扩展设置
			$.extend(true, self.defaultConfig, config);
			config = self.defaultConfig;
			
			self.showLoadingTip('载入数据...');

			xhr = $.ajax({
				url: config.srcPath,
				dataType: 'json'
			}).done(function(geoJSON){

				canvas.clear();
				
				// 为了保证地图在容器的0，0坐标开始绘制
				// 需要确定每张地图的偏移量，即geoJSON对象的offset属性
				// 但是，geoJSON的标准格式不存在offset, 所以
				// 对于没有经过处理的数据源 需要动态判断offset
				if(!geoJSON.offset){
					var a = geoJSON.features,	//地区条目数组
						x = 180,
						y = 0,
						s, o, r, p;	//临时变量不重要

					for(var i = 0, len = a.length; i < len; i++){
						s = a[i].properties.name;
						o = a[i].geometry;
						r = o.coordinates;
						for(var j=0,l2=r.length;j<l2;j++){
							if(o.type == 'Polygon'){
								p = r[j];
							}else if(o.type == 'MultiPolygon'){
								p = r[j][0];
							}

							for(var u=0,l3=p.length;u<l3;u++){
								if(p[u][0]<x){
									x = p[u][0];
								}
								if(p[u][1]>y){
									y = p[u][1];
								}
							}
						}
						geoJSON.offset = {
							// x轴的偏移量 需要取实际坐标度数的负值
							x : -x,
							y : y
						};
					}
				}
				
				geoJSON.offset.x += config.translate.x;
				geoJSON.offset.y += config.translate.y;

				// 记录当前地图的偏移量和缩放倍数
				self.offset = geoJSON.offset;
				self.scale = config.scale;
				
				// 格式化json数据
				geoJSON = self.formatGeoJSON(geoJSON);

				sx = self.scale.x;
				sy = self.scale.y;

				// 绘制path
				$.each(geoJSON,function(k,v){
					var p = canvas.path(v).attr(config.style);
					// 使用scale方法，在ie8下出现bug，so：
					// 初始化的缩放，改在格式化geoJSON数据时，直接将点坐标的值乘以缩放倍数
					// p.scale(sx, sy, 0, 0);
					
					//给每个path元素增加属性，标注地名
					$(p.node).attr({
						'class': 'map-path',
						'path-name': k  
					});
					//通过数组缓存raphael的图形对象
					self.mapPaths[k] = p;
				});

				// 在放大情况下，允许拖动地图
				self.dragMove();
				
				// 执行render的回调函数
				callback();

			}).fail(function(){
				canvas.clear();
				self.showLoadingTip('载入失败!');
			});

		},
		
		// 绑定拖动
		dragMove : function(){
			var self = this,
				v = self.viewBox,
				c = $(self.canvas.canvas),
				bool = false,
				oX = 0,
				oY = 0;
			c.on('mousedown', down).on('mouseup', up).on('mousemove', move);

			// 通过mouse的down、up、move方法来实现拖拽事件
			// 通过Raphael的setViewBox方法，挪动可视区域，实现拖拽地图的效果
			function down(e){
				bool = true;
				oX = e.clientX;
				oY = e.clientY;
				$(this).css('cursor','move');
			}
			function up(){
				bool = false;
				$(this).css('cursor','default');
			}
			function move(e){
				if(!bool){
					return false;
				}
				v.a = checkRange(v.a, e.clientX, oX, self.width, v.w);
				v.b = checkRange(v.b, e.clientY, oY, self.height, v.h);
				oX = e.clientX;
				oY = e.clientY;
				self.canvas.setViewBox(v.a, v.b, v.w, v.h);
				// 拖拽不能超出地图原有范围
				function checkRange(v, c, o, s, t){
					var x = v - (c - o)/2;
					if(x <= 0 || x >= s - t){
						return v;
					}
					return x;
				}
			}

		},
		
		// 缩放
		viewScale : function(type){
			var self = this,
				v = self.viewBox,
				w = v.w,
				h = v.h,
				a = v.a,
				b = v.b,
				s = 1;

			switch(type){
				case 'up':
					s += 0.2;
					break;
				case 'down':
					s -= 0.2;
					break;
				default:
					return false;
					break;
			}
            v.w = v.w / s;
            v.h = v.h / s;
			v.a = v.a + (w - v.w)/2;
            v.b = v.b + (h - v.h)/2;

			// 边界条件 放大倍数不能大于2 原大时不能缩小
			if(s > 1 && v.w < self.width / 2){
				v.w = w;
				v.h = h;
				v.a = a;
				v.b = b;
			}else if(s < 1 && v.w > self.width){
				v.w = self.width;
				v.h = self.height;
				v.a = 0;
				v.b = 0;
			}
			// 如果放大或缩小时，某个边界超出原有画布 则强制收敛回来
			if(v.a < 0) v.a = 0;
			if(v.b < 0) v.b = 0;
			if(v.a > (self.width - v.w)) v.a = self.width - v.w;
			if(v.b > (self.width - v.h)) v.b = self.height - v.h;

			// 使用setViewBox方法，实现缩放
			self.canvas.setViewBox(v.a, v.b, v.w, v.h);
		},
		
		// 画点
		setPoint : function(p){
			var self = this,
				// 点的默认样式
				a = {
					"x":0,
					"y":0,
					"r":1,
					"opacity":0.5,
					"fill": "#238CC3",
					"stroke": "#238CC3",
					"stroke-width": 0,
					"stroke-linejoin": "round"
				},
				x, y, c;
				
			$.extend(true, a, p);

			x = (a.x + self.offset.x) * self.scale.x;
			y = (self.offset.y - a.y) * self.scale.y;
			
			c = self.canvas.circle(x, y, a.r).attr(a);

			return c;
		},
		
		// 画线
		setLine : function(b){
			var self = this,
				a = {
					"ps":[],
					"stroke": "#238CC3",
					"stroke-width": 0.5,
					"stroke-linejoin": "round"
				},
				d = [],
				x, y, l;

			$.extend(true, a, b);
			
			// 将点数组连接起来，形成线的path描述
			for(var i=0, len=a.ps.length; i<len; i++){
				x = (a.ps[i].x *1 + self.offset.x) * self.scale.x;
				y = (self.offset.y - a.ps[i].y *1) * self.scale.y;
				d.push(x+','+y);
			}
			d = 'M' + d.join('L');
			
			l = self.canvas.path(d).attr(a);

			return l;

		},

		// 格式化地理数据，构成path描述
		formatGeoJSON : function(g){
			var self = this;
			var a = g.features,	// 地区条目数组
				x = g.offset.x,	// x轴偏移量
				y = g.offset.y,	// y轴偏移量
				d = {},	// 对象返回值：地区->路径字符串
				s, o, r, p;	// 临时变量不重要
			
			// XX:此方法暂弃
			// IE8绘制vml，中国地图（包括中国地区图）板块会向左上偏移，但画点或线则不偏移
			// 检查路径描述，和绘制svg时一致
			// 偏移仍在查找，暂时通过增加判断，强制消除偏移问题
			/*
			if(!Raphael.svg && g.offset.x != 170){
				x += 1.25;
				y += 1.55;
			}
			*/
			
			for(var i = 0, len = a.length; i < len; i++){
				s = a[i].properties.name;
				o = a[i].geometry;
				r = o.coordinates;
				for(var j = 0, l2 = r.length; j < l2; j++){

					// 判断数据结构，取出点数组的值
					if(o.type == 'Polygon'){
						p = r[j];
					}else if(o.type == 'MultiPolygon'){
						p = r[j][0];
					}

					// 将点数组转换为描述path的字符串
					for(var u = 0, l3 = p.length; u < l3; u++){
						// 调整地图位置，最左侧为美洲大陆最西端
						// 美洲大陆最西端坐标约为西经168.5°左右
						if(p[u][0] < -168.5){
							p[u][0] = p[u][0] + 360;
						}
						// 初始化的缩放，在此处通过乘法直接执行，不再调用scale方法
						p[u] = (p[u][0] + x) * self.scale.x + ',' + (y - p[u][1])*self.scale.y;
					}
					r[j] = 'M' + p.join('L') + 'z';
				}
				d[s] = r.join('');
			}
			return d;
			
		}

	}
	window.GeoMap = GeoMap;

})();



