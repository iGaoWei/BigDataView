$(function () {
    $(".header_nav>ul>li>a").on("click",function () {
        $(this).addClass("nav_current").parent("li").siblings("li").children("a").removeClass("nav_current");
    })

    $(".header_nav>ul>li").hover(function () {
        $(this).children("ul").toggle();
    })

    $(".header>.header_nav>ul>li>ul>li").hover(function () {
        $(this).children("ul").toggle();
    })




    $("#add_ipt").on("click",function () {
        $('#modal_add').modal();
    })


    $("#date_ipt").on("click",function () {
        $('#myModal').modal();
    })

    $("#video_ipt").on("click",function () {
        $('#Modal').modal();
    })







})
