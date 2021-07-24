/**
 * Created by Administrator on 2016/8/4.
 */
var setting = {
    view: {
        dblClickExpand: false
    },
    check: {
        enable: true
    },
    callback: {
        onRightClick: OnRightClick,
        onClick:OnClick
    }
};
var zNodes =[
    {	rid:101	,	id:	10	,pId:101,name:"	四川省—",open:true,nocheck:true,
        children:[
            {id:10, name:"成都市—", open:true, noR:true,nocheck:true,
                children:[
                    {id:101, name:"青羊区", noR:true, open:true,nocheck:true},
                    {id:102, name:"锦江区	", noR:true, open:true,nocheck:true},
                    {id:103, name:"金牛区	", noR:true, open:true,nocheck:true},
                    {id:104, name:"武侯区	", noR:true, open:true,nocheck:true},
                    {id:101, name:"成华区	", noR:true, open:true,nocheck:true},
                    {id:105, name:"龙泉驿区	", noR:true, open:true,nocheck:true},
                    {id:106, name:"青白江区	", noR:true, open:true,nocheck:true},
                    {id:108, name:"温江区	", noR:true, open:true,nocheck:true},
                    {id:109, name:"郫县	", noR:true, open:true,nocheck:true},
                    {id:110, name:"双流县	", noR:true, open:true,nocheck:true},
                    {id:111, name:"新津县	", noR:true, open:true,nocheck:true}

                ]},
            {id:20, name:"绵阳市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"涪城区	", noR:false,nocheck:true, open:true},
                    {id:102, name:"游仙区	", noR:false,nocheck:true, open:true},
                    {id:103, name:"高新开发区	", noR:false,nocheck:true, open:true},
                    {id:104, name:"农业示范区	", noR:false,nocheck:true, open:true},
                    {id:105, name:"三台县	", noR:false,nocheck:true, open:true},
                    {id:106, name:"盐亭县	", noR:false,nocheck:true, open:true},
                    {id:107, name:"梓潼县	", noR:false,nocheck:true, open:true},
                    {id:108, name:"北川县	", noR:false,nocheck:true, open:true},
                    {id:109, name:"平武县	", noR:false,nocheck:true, open:true},
                    {id:110, name:"安县	", noR:false,nocheck:true, open:true}
                ]},
            {id:30, name:"巴中市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"江北区	", noR:false,nocheck:true, open:true},
                    {id:102, name:"老城区	", noR:false,nocheck:true, open:true},
                    {id:101, name:"新城区	", noR:false,nocheck:true, open:true},
                    {id:102, name:"通江县	", noR:false,nocheck:true, open:true},
                    {id:101, name:"平梁县	", noR:false,nocheck:true, open:true},
                    {id:102, name:"南江县	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]},
            {id:30, name:"南充市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"自贡市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"攀枝花市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"泸州市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"广元市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"遂宁市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"内江市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"乐山市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"资阳市—", open:false,nocheck:true,
                children:[

                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"宜宾市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"达州市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"雅安市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"广安市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"眉山市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}, {id:30, name:"甘孜藏族自治州", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]},
            {id:30, name:"德阳市—", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]},
            {id:30, name:"藏族羌族自治州", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]},{id:30, name:"凉山彝族自治州", open:false,nocheck:true,
                children:[
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:101, name:"中级部门一	", noR:false,nocheck:true, open:true},
                    {id:102, name:"中级部门一	", noR:false,
                        //icon:"../img/7_03.png",
                        nocheck:true, open:true}
                ]}
        ]
    }
];
function OnRightClick(event, treeId, treeNode) {
    if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
        zTree.cancelSelectedNode();
        //showRMenu("root", event.clientX, event.clientY);
    } else if (treeNode && !treeNode.noR) {
        zTree.selectNode(treeNode);
        //showRMenu("node", event.clientX, event.clientY);
    }
}
function showRMenu(type, x, y) {
    $("#rMenu ul").show();
    if (type=="root") {
        $("#m_del").hide();
        $("#m_check").hide();
        $("#m_unCheck").hide();
    } else {
        $("#m_del").show();
        $("#m_check").show();
        $("#m_unCheck").show();
    }
    rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"});

    $("body").bind("mousedown", onBodyMouseDown);
}
function hideRMenu() {
    if (rMenu) rMenu.css({"visibility": "hidden"});
    $("body").unbind("mousedown", onBodyMouseDown);
}
function onBodyMouseDown(event){
    if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
        rMenu.css({"visibility" : "hidden"});
    }
}
var addCount = 1;

//添加事件
        function addTreeNode(names) {
            hideRMenu();
            var newNode = { name:names + (addCount++)};
            if (zTree.getSelectedNodes()[0]) {
                newNode.checked = zTree.getSelectedNodes()[0].checked;
                zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
            } else {
                zTree.addNodes(null, newNode);
            }
        }
        function removeTreeNode() {
            hideRMenu();
            var nodes = zTree.getSelectedNodes();
            if (nodes && nodes.length>0) {
                if (nodes[0].children && nodes[0].children.length > 0) {
                    var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
                    if (confirm(msg)==true){
                        zTree.removeNode(nodes[0]);
                    }
                } else {
                    zTree.removeNode(nodes[0]);
                }
            }
        }
        function checkTreeNode(checked) {
            var nodes = zTree.getSelectedNodes();
            if (nodes && nodes.length>0) {
                zTree.checkNode(nodes[0], checked, true);
            }
            hideRMenu();
        }
        function resetTree() {
            hideRMenu();
            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        }
        function OnClick(event, treeId, treeNode){
            $(".dropdown_select").val(treeNode.name);
         }
var zTree, rMenu;
$(document).ready(function(){
            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
            $.fn.zTree.init($("#treeDemo1"), setting, zNodes);
            $.fn.zTree.init($("#treeDemo2"), setting, zNodes);
            $.fn.zTree.init($("#treeDemo3"), setting, zNodes);
            zTree = $.fn.zTree.getZTreeObj("treeDemo");
            rMenu = $("#rMenu");
});