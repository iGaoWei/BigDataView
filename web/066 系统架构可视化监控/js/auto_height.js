// JavaScript Document
/**
 *
 * 页面js效果
 * @author cql 2014-01-09
*/

//高度自适应
window.onload=window.onresize=function(){
	var wh=$(window).height();
	var wd=$(window).width();
	var header=$(".header").height();
	var kong=$(".kong").height();
	var maintop_r=$(".maintop_r").height();
	var pro_icon=$(".pro_icon").height();
	
	$(".main").css("height",wh-header-kong-20+"px");
	$(".maintop_con").height($(".maintop_r").height()-$(".sys_tit").height()-2);
	$(".list").height($(".right").height()-40);
	$(".pro_con").height($(".list_l_con").height()-pro_icon-2);
	
	$(".mainbottom_con").height($(".mainbottom").height()-kong);
	$(".mainbottom_con_mains").height($(".mainbottom_con_lr").height()-$(".tod_tit").height()-2);
    $(".mainbottom_con_bodys").height($(".mainbottom_con_lr").height()-$(".tod_tit").height()-2);
	
	if(wd <1024){
	 $(".list").height($(".right").height()-40);
	} else{
	 $(".list").height($(".right").height()-40);
	}
	//$(".wd").height($(".mainbottom_con_body").height());
	//$(".data").height($(".wd").height()-$(".wd ul").height()-36);
};
