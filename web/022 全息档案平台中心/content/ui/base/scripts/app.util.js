
//插件扩展
$(function () {
    layer.config({
        extend: '../../../ui/global/layer/skin/moon/style.css', //加载新皮肤
        skin: 'layer-ext-moon' //一旦设定，所有弹层风格都采用此主题。
    });
    $.loading = function (bool, text) {
        if (bool) {
            App.blockUI({
                target: 'body',
                boxed: true,
                message: '加载中' | text //,
                // animate: true
            });
        } else {
            App.unblockUI();
        }
    }
    //兼容各种插件中loading 
    loading = function (bool, text) {
        if (bool) {
            App.blockUI({
                target: 'body',
                boxed: true,
                message: '加载中' | text//,
                // animate: true
            });
        } else {
            App.unblockUI();
        }
    }
});