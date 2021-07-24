var main = function () {
    var init = function () {
        tab();
        ywjkScroll();
        xtzlxz();
        xtggScroll();
        zlxz();
        yjxxtsxq();
    };
    var tab = function () {
        $(".js-tab li").click(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
    };
    /**巡查视频问题scroll**/
    var ywjkScroll = function () {
        var timing = function () {
            var height = $(".js-xcspwt>li:first").outerHeight()+14;
            $(".js-xcspwt").animate({marginTop:-height+'px'},600,function () {
                $(".js-xcspwt").css({marginTop:0});
                $(".js-xcspwt>li:first").appendTo($(".js-xcspwt"));
            });

        };
        var time = setInterval(timing,3000);
        $(".js-xcspwt").mouseenter(function () {
            clearInterval(time);
        });
        $(".js-xcspwt").mouseleave(function () {
            time = setInterval(timing,3000);
        });
    };
    /**预警信息推送=>详情**/
    var yjxxtsxq = function () {
        $(".js-tjxxtsxq .yjxxts-box").mouseenter(function () {
            $(".js-yjxxtsTkbox").addClass('show');
        });
        $(".js-tjxxtsxq .yjxxts-box").mouseleave(function () {
            $(".js-yjxxtsTkbox").removeClass('show');
        });
    };
    /**系统公告&资源下载**/
    var xtzlxz = function () {
        $(".js-xtggzlxz li").click(function () {
            var index = $(this).index();
            $(".col-main .xtggzlxz-main").eq(index).show().siblings().hide();
        });
    };
    /**系统公告scroll**/
    var xtggScroll = function () {
        var timing = function () {
            var height = $(".js-xtggScroll>li:first").outerHeight()+14;
            $(".js-xtggScroll").animate({marginTop:-height+'px'},600,function () {
                $(".js-xtggScroll").css({marginTop:0});
                $(".js-xtggScroll>li:first").appendTo($(".js-xtggScroll"));
            });

        };
        var time = setInterval(timing,3000);
        $(".js-xtggScroll").mouseenter(function () {
            clearInterval(time);
        });
        $(".js-xtggScroll").mouseleave(function () {
            time = setInterval(timing,3000);
        });
    };
    /**资源下载**/
    var zlxz = function () {
        //资料下载lhy
        var zlxzUrl = "json/zlxz.json";
        $.getJSON(zlxzUrl, function (data) {
            $('.js-upload').empty();
            data.forEach(function (item, index) {
                var titleImgLx = ((item.url).split("."))[1];
                var titleImg = "";
                //设置图标样式
                if (titleImgLx == "doc" || titleImgLx == "docx") {
                    titleImg = "img/zjzl01.png"
                } else if (titleImgLx == "jpg") {
                    titleImg = "img/zjzl02.png"
                } else if (titleImgLx == "ppt" || titleImgLx == "pptx") {
                    titleImg = "img/zjzl03.png"
                } else if (titleImgLx == "rar" || titleImgLx == "zip") {
                    titleImg = "img/zjzl04.png"
                }
                var videoli = '<div data-url="' + item.url + '" title="' + item.title + '" class="zjzl-card" style="background: url(' + titleImg + ')  no-repeat center left">' + item.title + '</div>';
                $('.js-upload').append(videoli);

            });

            //资料下载方法--zhb
            function fake_click(obj) {
                var ev = document.createEvent("MouseEvents");
                ev.initMouseEvent(
                    "click", true, false, window, 0, 0, 0, 0, 0
                    , false, false, false, false, 0, null
                );
                obj.dispatchEvent(ev);
            }

            function export_raw(uploadUrl, data) {
                var urlObject = window.URL || window.webkitURL || window;
                var export_blob = new Blob([data]);
                var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                save_link.href = urlObject.createObjectURL(export_blob);
                save_link.download = uploadUrl;
                fake_click(save_link);
            }

            $('.js-upload div').click(function () {
                var uploadUrl = $(this).attr("data-url");
                export_raw(uploadUrl);
            });
        });


    };



    return {
        init: init
    }
}();