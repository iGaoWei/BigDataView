 // 数字滚动
 function numInit() {
  $('.counter-value').each(function(){
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  },{
      duration: 2500,
      easing: 'swing',
      step: function (now){
      $(this).text(now.toFixed(0));
      }
  });
  });
}
function numInit1() {
  $('.counter-value1').each(function(){
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  },{
      duration: 2500,
      easing: 'swing',
      step: function (now){
      $(this).text(now.toFixed(1));
      }
  });
  });
}
function numInit2() {
  $('.counter-value2').each(function(){
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  },{
      duration: 2500,
      easing: 'swing',
      step: function (now){
      $(this).text(now.toFixed(2));
      }
  });
  });
}
numInit();
numInit1();
numInit2();