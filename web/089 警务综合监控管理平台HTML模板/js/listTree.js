
var setting = {
    view: {
        dblClickExpand: false
    },
    check: {
        enable: false
    }

};
var zNodes =[
    {"id":0,"name":"提请批准逮捕","open":true,icon:"img/down1.png",children:[
        { "id":1,"pid":0, "name":"提请批准逮捕","open":true, icon:"img/page.png",
            children: [
                { "id":11,"pid":1, "name":"接警处"},
                { "id":12, "pid":1,"name":"接受案事件"},
                { "id":13,"pid":1, "name":"立案审查"}
            ]
        },
        {"id":2,"pid":0,"name":"公安立案",icon:"img/page.png",
            children: [
                { "id":21,"pid":2, "name":"法院人事部"},

                { "id":23,"pid":2, "name":"法院后勤部门"}
            ]
        },
        {"id":3,"pid":0,"name":"办案终结", icon:"img/page.png",
            children: [
                { "id":31,"pid":3, "name":"检查人事部"},

                { "id":33,"pid":3, "name":"检查院后勤部门"}
            ]}
    ]}

];





var zTree;
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo1"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo2"), setting, zNodes);
    
    zTree = $.fn.zTree.getZTreeObj("treeDemo");


});



function init(){
    $(".dataTabUl li").click(function(){
        var ins=$(this).index();
        $(this).find("a").addClass("dataActive").end().siblings().find("a").removeClass("dataActive");
        $(".dataConBox .dataBoxSub").eq(ins).show().siblings().hide();
    })
}
function Tail(){
    layer.open({
        type: 2,
        title: '涉案人员详情',
        shadeClose: true,
        shade: 0.5,
        skin: 'layui-layer-rim',
        closeBtn:1,
        area: ['1100px', '600px'],
        content: 'openPerTail.html'
    });
}
function TailLaw(){
    layer.open({
        type: 2,
        title: '法律文书详情',
        shadeClose: true,
        shade: 0.5,
        skin: 'layui-layer-rim',
        closeBtn:1,
        area: ['1100px', '300px'],
        content: 'lawTail.html'
    });
}
function TailList(){
    layer.open({
        type: 2,
        title: '宗卷详情',
        shadeClose: true,
        shade: 0.5,
        skin: 'layui-layer-rim',
        closeBtn:1,
        area: ['1100px', '300px'],
        content: 'caseListTail.html'
    });
}
