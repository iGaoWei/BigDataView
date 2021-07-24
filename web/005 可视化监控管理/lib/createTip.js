/**
 * 生成卡片窗口
 *
 */
function CreateTip(option){
    this.option = option;
    this.drop = false;
    this.init();
}
CreateTip.prototype = {
    init:function () {
        this.createContainer();
    },
    createContainer:function () {
        var _view_ = this;
        var html = '';
        html += '<div id="'+_view_.option.id+'" class="tip-container" style="width: '+_view_.option.width+'px;">';
        html += '<div class="tip-title"><span><img src="'+_view_.option.icon+'"/></span><span>'+_view_.option.titleName+'</span><span class="tip-dropDown"><img src="icon/收起.png"/></span></div>';
        html += '<div class="tip-content">';
        // html += _view_.option.html;
        html += '</div>';
        html += '</div>';
        $("body").append(html);
        var $container = $("#"+_view_.option.id);
        $container.css(_view_.option.pos);
        var $containerW = $container.width() - 32;
        $("#"+_view_.option.id+" .tip-content").width($containerW);

        $("#"+_view_.option.id+" .tip-dropDown").bind("click",function () {
            var $tipContent =  $("#"+_view_.option.id+" .tip-content");
            if(!_view_.drop){
                $tipContent.slideUp();
                $(this).find("img").attr("src","icon/展开.png");
                _view_.drop = true;
            }else{
                $tipContent.slideDown();
                $(this).find("img").attr("src","icon/收起.png");
                _view_.drop = false;
            }
        });
    },
    setData:function (htmlText) {
        var _view_ = this;
        $("#"+_view_.option.id+" .tip-content").html(htmlText);
    }
};

