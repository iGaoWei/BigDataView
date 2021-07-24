/*
* 倒计时 小插件
* @since 2018/11/7 12:39
* @author FlyTiger
* */
(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? (function(){ define(["jquery"],factory);global.countDown = factory();})() : (global.countDown = factory());
})(this, function () {
    var ___=window;
    //模板
    var $defaultTitle=["距离","开始","还有"];
    var $template="<span class=\"active-time pull-right\"><em class=\"time_d sd\"></em><span class=\"sd\">天</span><em class=\"time_h sh\"></em><span class=\"sh\">时</span><em class=\"time_m sm\"></em><span class=\"sm\">分</span><em class=\"time_s\"></em>秒";

    //事件
    var events={
        started:"countDownStarted",//开启
        ended:"countDownEnded",//结束
        restarted:"countDownRestarted"//重启
    };

    //方法
    var fns={
        //标题处理
        _title:function(){
            var _opts=this.opts;
            var $prefix=this.$timeEms_.$prefix,$suffix=this.$timeEms_.$suffix;
            if((_opts.title&&_opts.title.length)||(!_opts.prefix&&!_opts.suffix)){
                var _1= [].concat($defaultTitle);
                _1.splice(1,1,_opts.title||$defaultTitle[1]);
                $prefix.html(_1.join(""));
            }else{
                $prefix.html(_opts.prefix||"");
                $suffix.html(_opts.suffix||"");
            }
        },
        //初始化
        prepare:function(){
            fns._title.call(this);
            fns._f.call(this);
        },
        _f:function () {
            var _this=this;
            var time_end=this.opts.time_end||new Date().getTime();
            var _ems=this.$timeEms_;
            var f_=function _f(_time_end){
                var time_start = new Date().getTime(); //设定当前时间
                var time_end =  new Date(_time_end).getTime(); //设定目标时间
                // 计算时间差
                var time_distance = time_start - time_end;
			
				 /*****
				   if(time_distance<86400000){
					   $("title").text(time_distance)
					   $(".sd").hide()
                }
				if(time_distance<3600000){
					   $(".sh").hide()
                }
				if(time_distance<60000){
					   $(".sm").hide()
                }
				***/
                if(time_distance<1){
                    if(_this._timestamp_){
                        clearTimeout(_this._timestamp_);
                    }
                    _this._runing++;
                    _this.$container_.hide().triggerHandler(events.ended,[_this._runing,time_start]);
                    return false;
                }
                // 天
                var int_day = Math.floor(time_distance/86400000)
                time_distance -= int_day * 86400000;
                // 时
                var int_hour = Math.floor(time_distance/3600000)
                time_distance -= int_hour * 3600000;
                // 分
                var int_minute = Math.floor(time_distance/60000)
                time_distance -= int_minute * 60000;
                // 秒
                var int_second = Math.floor(time_distance/1000)
                /****时分秒为单数时、前面加零
                if(int_day < 10){
                    int_day = "0" + int_day;
                }
                if(int_hour < 10){
                    int_hour = "0" + int_hour;
                }
                if(int_minute < 10){
                    int_minute = "0" + int_minute;
                }
                if(int_second < 10){
                    int_second = "0" + int_second;
                }****/
                // 显示时间
                _ems.$d.html(int_day);
                _ems.$h.html(int_hour);
                _ems.$m.html(int_minute);
                _ems.$s.html(int_second);
                // 设置定时器
                if(_this._timestamp_){
                    clearTimeout(_this._timestamp_);
                }
                _this._timestamp_=setTimeout(function (_) {
                    _f(_);
                },1000,_time_end);
            };
            if(this._runing){
                this.$container_.triggerHandler(events.restarted,[this._runing]);
            }else{
                this.$container_.triggerHandler(events.started,[this._runing]);
            }
            this.$container_.show();
            f_(time_end);
        }
    };
    /*
       * @param $container 倒计时容器
       * @param $opts 参数{title,prefix,suffix,time_end},title优先级最高
       * */
        var CountDown=function ($container,$opts) {
            var $container=$container.empty().html($template).addClass("payment-time");
            // 显示时间
            this.$timeEms_={
                $d:$(".time_d",$container),
                $h:$(".time_h",$container),
                $m:$(".time_m",$container),
                $s:$(".time_s",$container),
                $prefix:$(".time_prefix",$container),
                $suffix:$(".time_suffix",$container),
            };
            this.$container_=$container;
            this.opts=$opts||{};
            this._runing=0;//初始执行
            //初始化
            fns.prepare.call(this);
        };

        //重新设置参数
        CountDown.prototype.setOpts=function($opts){
            this.opts=$.extend(this.opts, $opts||{});
            this._runing++;
            fns.prepare.call(this);
        };

        //绑定事件
        CountDown.prototype.on=function () {
             ___.jQuery.fn.on.apply(this.$container_,arguments);
             if(this._runing<1){
                 this.$container_.triggerHandler(events.started,[this._runing]);
             }
             return this;
        };
        //解除事件
        CountDown.prototype.off=function () {
              ___.jQuery.fn.off.apply(this.$container_,arguments);
            return this;
        };

    return function($container,$opts){
        if(!___.jQuery){
            throw new Error("jQuery is required for this plugin");
        }
        if(!$container||!$container.length){
            throw new Error("The container you given is not useful!");
        }
        return new CountDown($container,$opts);
    }
});