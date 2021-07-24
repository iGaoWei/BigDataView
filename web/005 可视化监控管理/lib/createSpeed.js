/**
 * 创建进度条 组件
 */
function CreateSpeed(option){
    this.option = option;
    this.isFirstLoad = true;
    this.init();
}
CreateSpeed.prototype = {
    init:function () {
        this.createSpeed();
    },
    createSpeed:function () {
        var _view_ = this;
        var html = '';
        html += '<div id="'+_view_.option.id+'" class="speed-container">';
            html += '<div class="speed-title">';
                html += '<span><img src="'+_view_.option.icon+'"></span><span>'+_view_.option.title+'</span><span><img src="icon/xjt.png"></span>';
            html += '</div>';
            html += '<div class="speed-content">';
                html += '<ul>';

                html += '<ul>';
            html += '</div>';
        html += '</div>';
        $("#"+_view_.option.id).append(html);
    },
    setData:function (series) {
        var _view_ = this;
        function toPoint(point){
            var str=Number(point*100).toFixed(1);
            str+="%";
            return str;
        }
        var html = '';
        series.forEach(function (item,index) {
            html += '<li><span>'+item["name"]+'</span><span class="speed-line"><span id="'+_view_.option.id+index+'" class="speed-num" style="background-color: '+item["color"]+'"></span><span class="numText">'+item["data"]+'</span></span></li>';
        });
        $("#"+_view_.option.id + " ul").html(html);

        //动画效果加载数据
        if(_view_.isFirstLoad){
            series.forEach(function (item,index) {
                var dataNum = null;
                if(_view_.option.max === null){
                    dataNum = item["data"];
                }else{
                    dataNum = toPoint(item["data"]/_view_.option.max);
                }
                $("#"+_view_.option.id+index).animate({
                    width:dataNum
                },2000);
            });
            _view_.isFirstLoad = false;
        }else{
            series.forEach(function (item,index) {
                var dataNum = null;
                if(_view_.option.max === null){
                    dataNum = item["data"];
                }else{
                    dataNum = toPoint(item["data"]/_view_.option.max);
                }
                $("#"+_view_.option.id+index).width({
                    width:dataNum
                })
            });
        }
    }
};
