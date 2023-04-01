/*!
 * jquery.numscroll.js -- 数字滚动累加动画插件  (Digital rolling cumulative animation)
 * version 1.0.0
 * 2018-09-22
 * author: KevinTseng < 921435247@qq.com@qq.com >
 * 文档:  https://github.com/chaorenzeng/jquery.numscroll.js.git
 * QQ交流群: 739574382
 */

(function($) {
	
	function isInt(num) {
		//作用:是否为整数
		//返回:true是 false否
		var res = false;
		try {
			if(String(num).indexOf(".") == -1 && String(num).indexOf(",") == -1) {
				res = parseInt(num) % 1 === 0 ? true : false;
			}
		} catch(e) {
			res = false;
		}
		return res;
	}

	function isFloat(num) {
		//作用:是否为小数
		//返回:小数位数(-1不是小数)
		var res = -1;
		try {
			if(String(num).indexOf(".") != -1) {
				var index = String(num).indexOf(".") + 1; //获取小数点的位置
				var count = String(num).length - index; //获取小数点后的个数
				if(index > 0) {
					res = count;
				}
			}
		} catch(e) {
			res = -1;
		}
		return res;
	}

	$.fn.numScroll = function(options) {
		
		var settings = $.extend({
			'time': 1500,
			'delay': 0
		}, options);
		
		return this.each(function() {
			var $this = $(this);
			var $settings = settings;
			
			var num = $this.attr("data-num") || $this.text(); //实际值
			var temp = 0; //初始值
			$this.text(temp);
			var numIsInt = isInt(num);
			var numIsFloat = isFloat(num);
			var step = (num / $settings.time) * 10; //步长
			
			setTimeout(function() {
				var numScroll = setInterval(function() {
					if(numIsInt) {
						$this.text(Math.floor(temp));
					} else if(numIsFloat != -1) {
						$this.text(temp.toFixed(numIsFloat));
					} else {
						$this.text(num);
						clearInterval(numScroll);
						return;
					}
					temp += step;
					if(temp > num) {
						$this.text(num);
						clearInterval(numScroll);
					}
				}, 1);
			}, $settings.delay);
			
		});
	};

})(jQuery);