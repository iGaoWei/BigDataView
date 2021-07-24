/**
 * 时间更新模块
 *
 */
function getTime(){
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var localToday = '';
    var d = new Date();
    localToday = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
    var time = '';
    var hh = d.getHours();            //时
    var mm = d.getMinutes();          //分
    var ss = d.getSeconds();
    if(hh < 10)
        time += "0";

    time += hh + ":";

    if (mm < 10) time += '0';
    time += mm + ":";

    if (ss < 10) time += '0';
    time += ss;

    //
    return {0:localToday ,1:week[d.getDay()],2:time }
}
