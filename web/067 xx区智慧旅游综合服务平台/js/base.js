/**
 /*大屏*/

$(function(){
    nav();
})
//导航条点击添加样式
function nav(){
    //$(".nav>ul>li").click(function(){
    //    var href=$(this).find("a").attr("href");
    //   var t=href.indexOf("html");
    //    var ins;
    //    if(t!=-1){
    //      ins=$(this).index();
    //        $(".nav>ul>li").eq(ins).addClass("nav_active");
    //        window.location.href=href;
    //
    //
    //    }
    //    else{
    //        $(this).addClass("nav_active").siblings().removeClass("nav_active");
    //    }
    //
    //})
    $(".nav>ul>li").hover(function(){
        $(this).find(".li_ul").stop(true,true).slideDown("slow");
        stop();
    },function(){
        $(this).find(".li_ul").slideUp("slow");
    })
}