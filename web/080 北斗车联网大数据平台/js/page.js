
$(function () {

    $(".num_1").click(function () {
        $("#page_1").show();
        $("#page_1").siblings(".page").hide();
    })
    $(".num_4").click(function () {
        $("#page_4").show();
        $("#page_4").siblings(".page").hide();
    })
    $(".num_6").click(function () {
        $("#page_6").show();
        $("#page_6").siblings(".page").hide();
    })
    $(".num_8").click(function () {
        $("#page_8").show();
        $("#page_8").siblings(".page").hide();
    })
    $(".num_9").click(function () {
        $("#page_9").show();
        $("#page_9").siblings(".page").hide();
    })
    $(".num_10").click(function () {
        $("#page_10").show();
        $("#page_10").siblings(".page").hide();
    })
    $(".num_16").click(function () {
        $("#page_16").show();
        $("#page_16").siblings(".page").hide();
    })



    /*list 右键点击事件*/


    // //阻止 #page 默认右键点击事件
    // $("#page").bind("contextmenu", function(){
    //     return false;
    // })
    // $("#page>div>ul>li").mousedown(function(e) {
    //     e = e || window.event;
    //     var x = e.clientX ;
    //     var y = e.clientY ;
    //     var h = $("#page").height()/2 ;
    //
    //     if (3 == e.which && y <= h){
    //         $("#list").show().css({ "left": x + "px" , "top" : y + "px"});
    //     }
    //     if (3 == e.which && y > h){
    //         $("#list").show().css({"left": x + "px" , "top" : y - $("#list").height() + "px"});
    //     }
    // })
    //
    // $("#page").click(function () {
    //     $("#list").hide();
    // })



})