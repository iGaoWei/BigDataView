/*大屏*/
    $(function () {
        setInterval("getTime();", 1000); //每隔一秒运行一次
    })
    //取得系统当前时间
    function getTime() {
        var myDate = new Date();
        var date = myDate.toLocaleDateString();
        var hours = myDate.getHours();
        var minutes = myDate.getMinutes();
        var seconds = myDate.getSeconds();
        $("#showDate").html(date + " " + hours + ":" + minutes + ":" + seconds); //将值赋给div
    }
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        laydate.render({
            elem: '#test1'
        });
    });
