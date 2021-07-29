/**
 * Created by Administrator on 2017/10/26.
 */


//    Xabin




//应急事件处置
$(".message_scroll").click(function () {
    EventClick();
    eventHandle();
});

//    地图切换buttn-start
$(".map_change").click(function () {
    $(this).addClass("map_change_chose");
    $(this).siblings().removeClass("map_change_chose")
    $(this).show()
    $(this).siblings().hide()
})
$(".map_change_box").mouseenter(function () {
    $(".map_change").show()
}).mouseleave(function () {
    $(".map_change_chose").show()
    $(".map_change_chose").siblings().hide()
})
//    地图切换buttn-end
$(".tab_msg").click(function () {
    $(this).addClass("tab_msg_current");
    $(this).siblings().removeClass("tab_msg_current")
})
$(".tab_msg01").click(function () {
    $(".table1").show()
    $(".table2").hide()
})
$(".tab_msg02").click(function () {
    $(".table2").show()
    $(".table1").hide()
})
$(".video_around").click(function () {
    $(this).siblings().removeClass("video_around_chose")
    $(this).addClass("video_around_chose")
})
$(".display_type_funct_sure").click(function () {
    $(".display_box").hide()
})
$(".display_type_btn").click(function () {
    $(".display_type_box").show()
    $(".city_chose_box").hide()
})
$(".city_chose_btn").click(function () {
    $(".city_chose_box").show()
    $(".display_type_box").hide()
})
//轮播推送隐藏功能
$(".scroll_tool_outbox").mouseenter(function(){
    $(".scroll_tool_outbox").addClass("scroll_tool_outbox_current")
});
$(".scroll_tool_outbox").mouseleave(function(){
    $(".scroll_tool_outbox").removeClass("scroll_tool_outbox_current")
})
//轨迹回放功能激活
$(".search_guiji").click(function () {
    $("#divRouteReview").show();
});
$(".close_playback").click(function () {
    $(".trajectory_box").hide();
});
$("#btnBuffer").click(function () {
    $("#divBufferSetting").show();
});
$(".total_chose_pl").click(function () {
    $(".total_chose_box").show()
})
$(".total_chose_fr").click(function () {
    $(".total_chose_box").hide()
})
//    Xabin_end










