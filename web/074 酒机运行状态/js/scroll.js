(function(){
    var gScroll = $('#g-scroll').height();
    var gScroll2 = $('#g-scroll2').height();
    var gongdanWrap = $('#gongdan-wrap').height();
    var gongdanWrap2 = $('#gongdan-wrap2').height();
    console.log(gongdanWrap2)
    if(gongdanWrap > gScroll){
        $('#g-scroll').css({
            'overflow-y':'scroll'
        })
        
    }
    if(gongdanWrap2 > gScroll2){
        console.log(1)
        $('#g-scroll2').css({
            'overflow-y':'scroll'
        })
        
    }
})()