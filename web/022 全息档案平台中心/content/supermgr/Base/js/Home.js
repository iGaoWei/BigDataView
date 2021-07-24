var Home = function () {
    var exports = {};
    exports.options = {};
    //初始化数据
    exports.initPage = function () {
        //初始化通知消息
        exports.initNoticeTips();

    };

    //初始化通知消息
    exports.initNoticeTips = function () {
        $.fn.submitAjax({
            url: "/SysMgr/Home/GetNoticeTips",
            target: "#header_notification_bar",
            success: function (data) {
              
                //填充模板引擎
                var templateData = {
                    noticeTipTotal: data.Total,
                    Notices: data.Notices
                };
                var html = template('notification_bar', templateData);
                $("#header_notification_bar").html(html);
                App.initComponents();
            }
        });

    }



    return exports;
};