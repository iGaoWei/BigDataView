var App = function() {

	/**
	 * 菜单
	 * @type {Array}
	 */
	var menu = [{index:0, name:["行政执法人员", "行政复议案件", "地图热点分析", "法律统计分析", "案件评查分析", "部门考核分析"]},
				{index:1, name:["行政执法人员", "行政处罚案件量", "行政处罚金额", "人均执法量", "职权履责情况", "行政复议案件"]}];
	/**
	 * 当前菜单
	 * @type {Number}
	 */
	var cur_menu = 0;

	function init(){		
		_drawBg();
		_drawProgressBar();
		_bindTopMenuEvent();
		_menuLineAnimate();
	}

	/**
	 * 绘制星空背景
	 * @return {[void]} []
	 */
	function _drawBg(){
		// 获取屏幕的宽度和高度
		var window_width = screen.width;
		var window_height = screen.height;

		// 生成画布
		var canvas_bg = document.getElementById('canvas-bg');
		var context_bg = canvas_bg.getContext('2d');

		canvas_bg.width = window_width;
		canvas_bg.height = window_height;

		// 图片的大小及中心坐标
		var img_width = 2800;
		var img_height = 2800;
		var a = img_width / 2;
		var b = img_height / 2;

		// 创建背景图片
		var img_bg = new Image();
		img_bg.onload = function(){
			// 图片初始位置偏移量计算
			context_bg.translate((window_width / 2) - a, (window_height / 2) - b);
			// 计算圆半径
			var r = Math.sqrt(a * a + b * b);
			// 每秒旋转的圆心角角度
			var angle = 0.1;
			// 定时触发图片旋转			
			d3.timer(function(){
				// 圆上每个点的坐标
				var x = a - Math.cos(2 * Math.PI / 360 * angle + Math.acos(a / r)) * r;
				var y = b - Math.sin(2 * Math.PI / 360 * angle + Math.asin(b / r)) * r;
				context_bg.translate(x, y);
				context_bg.rotate(2 * Math.PI / 360 * angle);
	    		context_bg.drawImage(img_bg, 0, 0, img_width, img_height);
			});
			
		};

		img_bg.src = 'image/mainbg.png';
		
	}

	/**
	 * 绘制进度条
	 * @return {[void]} []
	 */
	function _drawProgressBar() {
		// top-right 
		var progressLeftBar = d3.selectAll(".progress-bar-bl-content > .progress-left-bar");
		var leftBarCount = progressLeftBar[0].length;
		
		function testBar(){
			var i = 0;
			var speed = 80;
			while(i < leftBarCount){
				d3.select(progressLeftBar[0][i])
					.transition()
		            .delay(speed * i)
		            .duration(speed)
		            .style("opacity", 1)
		            .transition()
                	.delay(speed * i + 600)
                	.duration(speed)
                	.style("opacity", 0.2);
		        i++;
			}	
			setTimeout(function(){
				testBar();
			}, 2500);
		}
		testBar();
				
		// bottom-left 
		
		// bottom-right 
	}

	/**
	 * 顶部菜单绑定单击事件
	 * @return {[void]} []
	 */
	function _bindTopMenuEvent(){
		var bottomMenu = $('.bottomContent');
		var leftStatContent = $('.leftContent');
		var topMenu = $('.topContent');
		topMenu.children('.menu').each(function(index){
			var curObject = $(this);
			
			curObject.on('click', function(){
				
				if(cur_menu == index){
					return;
				}else{
					cur_menu = index;
				}

				topMenu.children('.active').removeClass('active');
				
				if(!curObject.hasClass('active')){
					curObject.addClass('active');
				}

				bottomMenu.animate({top : "1200px"}, "slow", function(){
					_switchMenu(index);
					bottomMenu.animate({top : "890px"}, "slow");
				});

				leftStatContent.animate({left : "-300px"}, "slow", function(){
					_switchLeftStatContent(index);
					leftStatContent.animate({left : "17px"}, "slow");
				});
				
			});
		});
	}

	/**
	 * 点击主菜单，切换子菜单内容
	 * @param  {[int]} menuNo [菜单序号]
	 * @return {[void]}       []
	 */
	function _switchMenu(menuNo){
		var itemMenu = _loadMenuData(menuNo);
		var html = "";
		switch(menuNo){
			case 0:
				// 综合
				for (var i = 0; i < itemMenu.length; i++) {
					html = html + '<div class="cmd"><a href="#" class="cmd-label">' + itemMenu[i] + '</a></div>';
				}
				break;
			case 1:
				// 行政处罚
				for (var i = 0; i < itemMenu.length; i++) {
					html = html + '<div class="cmd"><a href="#" class="cmd-label">' + itemMenu[i] + '</a></div>';
				}
				break;
			default:
				
				break;
		}
		$('.bottomContent > .cmdContent').html(html);

	}

	/**
	 * 点击主菜单，切换左侧状态统计栏
	 * @param  {[type]} menuNo [description]
	 * @return {[type]}        [description]
	 */
	function _switchLeftStatContent(menuNo){
		// var html = "";

	}

	/**
	 * 加载菜单数据
	 * @param  {[int]} menuNo [菜单序号]
	 * @return {[array]}      [菜单名称数组]
	 */
	function _loadMenuData(menuNo){
		for(var i = 0; i < menu.length; i++){
			if(menu[i].index == menuNo){
				return menu[i].name;
			}
		}
	}

	/**
	 * 菜单上下线动画
	 * @return {[void]} []
	 */
	function _menuLineAnimate() {
		var topLine = d3.select("#topLine");
		var bottomLine = d3.select("#bottomLine");

        (function topRepeat() {
            topLine.transition()
                .duration(4000)
                .attr("x1", 1400)
                .attr("x2", 1500)
                .transition()
                .duration(5000)
                .attr("x1", 60)
                .attr("x2", 160)
                .each("end", topRepeat);
        })();

        (function bottomRepeat() {
            bottomLine.transition()
                .duration(4000)
                .ease("linear")
                .attr("x1", 1400)
                .attr("x2", 1500)
                .attr("y1", 17)
                .attr("y2", 18)
                .transition()
                .duration(1000)
                .ease("linear")
                .attr("x1", 1500)
                .attr("x2", 1600)
                .attr("y1", 17)
                .attr("y2", 18)
                .transition()
                .duration(500)
                .ease("linear")
                .attr("x1", 1500)
                .attr("x2", 1600)
                .attr("y1", 87)
                .attr("y2", 88)
                .transition()
                .duration(1500)
                .ease("linear")
                .attr("x1", 60)
                .attr("x2", 160)
                .attr("y1", 100)
                .attr("y2", 160)
                .each("end", bottomRepeat);
        })();
	}

	return {
		init: function(){
			init();
		}
	};
}();








