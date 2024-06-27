$(function(){

	


	//tab 切换
	$(".J-nav-tab").each(function () {
		var tthis=$(this)
		$(this).find("a").click(function() {
			var $this = $(this);
			var $obj = $this.attr("href");
			tthis.find("a").removeClass("on")
			$this.addClass("on");
			$($obj).show().siblings().hide()
			return false;
		})
	})









})