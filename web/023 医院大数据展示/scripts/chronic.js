$(function(){
  var Theight = $(window).height() - 260;
  $(".div_any_child").height(Theight);
  totalPage = 10;
  currentPage = 1;
  paging(totalPage,currentPage);
})
