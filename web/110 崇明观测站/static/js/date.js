(function(){
    layui.use(['form', 'laydate'], function () {
        var form = layui.form,
            laydate = layui.laydate;

        //日期
        laydate.render({
            elem: '#date'
        });
        laydate.render({
            elem: '#date1',
        });
        laydate.render({
            elem: '#date2'
        });
        laydate.render({
            elem: '#date3',
        });
    });
})()