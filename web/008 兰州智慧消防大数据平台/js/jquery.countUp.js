(function($) {
    $.fn.countTo = function(opts) {
                // 合并自定义的方法
        var options = $.extend({}, $.fn.countTo.defaults, opts);

        return $(this).each(function() {
                // 设置总更新次数从而得到每次累加的值
            var _this = this,
                originalData = $(this).text(),//初始值
                loops = Math.ceil(options.speed / options.refreshInterval),//总更新次数
                increment = ($(this).text() - options.from) / loops,//每次累加的值
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);
            //console.log(Number(originalData).toFixed(options.decimals));
            function updateTimer() {
                value += increment;
                loopCount++;
                var str=value.toFixed(options.decimals);

                //运算到此时的字符串总长度
                this.sizeNum=str.length; 

                //运算到此时的小数点前的字符长度
                this.sizeNumBefore=this.sizeNum-options.decimals-1;

                //判断 此时的小数点前的字符串长度是否>=需要的字符串小数点前的长度
                if(this.sizeNumBefore>=options.beforeSize)  {

               		$(_this).html(str+options.lastSymbol);

                } else{
                    //在<的时候 前面要补0 再显示
                    this._str = Array(options.beforeSize-this.sizeNumBefore + 1).join('0') + str;
                	$(_this).html(this._str+options.lastSymbol);
                }          


                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value, loopCount);
                    //用call方法 把 options.onUndate=='function'(是一个方法), 替换掉_this，并把value作为和这个函数的参数   
                }
                if (loopCount >= loops) {//over
                    clearInterval(interval);
                    $(_this).html(originalData+options.lastSymbol);
                    value = $(_this).text();

                    if (typeof(options.onComplete) == 'function') {
                        //options.onComplete.call(_this, value, loopCount);
                        options.onComplete(value,loopCount,_this);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
    	lastSymbol:"%", //显示在最后的字符
        from: 0,  // 开始时的数字
        speed: 1000,  // 总时间
        refreshInterval: 100,  // 刷新一次的时间
        beforeSize:0, //小数点前最小显示位数，不足的话用0代替
        decimals: 0,  // 小数点后的位数
        onUpdate: null,  // 更新时回调函数
        onComplete: null  // 结束后回调函数
    };
})(jQuery);