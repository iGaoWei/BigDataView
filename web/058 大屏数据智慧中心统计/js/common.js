// 时间区

$(document).ready(function(){
    setInterval(showTime, 1000);
    function timer(obj,txt){
        obj.text(txt);
    }
    function showTime(){
        var today = new Date();
        var weekday=new Array(7)
        weekday[0]="星期一"
        weekday[1]="星期二"
        weekday[2]="星期三"
        weekday[3]="星期四"
        weekday[4]="星期五"
        weekday[5]="星期六"
        weekday[6]="星期日"
        var y=today.getFullYear()+"年";
        var month=today.getMonth()+1+"月";
        var td=today.getDate()+"日";
        var d=weekday[today.getDay()-1];
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        if(h<10){
            h="0"+h;
        }
        if(m<10){
            m="0"+m;
        }
        timer($("#Y"),y);
        timer($("#MH"),month);
        timer($("#TD"),td);
        timer($("#D"),d);
        timer($("#H"),h);
        timer($("#M"),m);
        timer($("#S"),s);
    }

})
