/*大屏*/
$(function(){
  init();
    moreSpan();
    table();






})
//初始化显示查询条件
function init(){
   var len=$("#caseFindBox div").length;
    for(i=0;i<len;i++){
        $("#caseFindBox").find(".caseFind_p").eq(i).find("ul li:gt(9)").hide();
    }
}
function moreSpan(){
    $("#caseFindBox span").click(function(){
        var text=$(this).text();
        if(text=="+"){
            $(this).text("-");
          $(this).parent().find("ul li:gt(9)").show();

        }
        if(text=="-"){
            $(this).text("+");
            $(this).parent().find("ul li:gt(9)").hide();
        }
    })
}



//表格部分
function table(){
    $('#table').bootstrapTable({
        method: "get",
        url: "json/case.json",
        striped: true,
        singleSelect: false,
        dataType: "json",
        pagination: true, //分页
        pageSize: 10,
        pageNumber: 1,
        search: false, //显示搜索框
        contentType: "application/x-www-form-urlencoded",
        queryParams: null,
        //sidePagination: "server", //服务端请求
        columns: [
            {
                title: "",
                field: 'ch',
                align: 'center',
                width:'30px',
                valign: 'middle',
                formatter:function(val,row){

                    return '<div class="cliclRed"></div>';
                }

            }
            ,
            {
                title: "事项名称",
                field: 'name',
                align: 'center',
                valign: 'middle'
            },
            {
                title: '负责部门',
                field: 'part',
                align: 'center',
                valign: 'middle'
            },

            {
                title: '操作',
                field: 'opear',
                width:'250px',
                align: 'center',
                formatter: function (value, row) {
                    var e = '<a  href="javascript:void(0)" title="咨询" onclick="edit(\'' + row.id + '\')">编辑</a> ';
                    var c = '<a   href="javascript:void(0)" title="删除" onclick="del(\'' + row.id + '\')">删除</a> ';


                    return e+c ;
                }
            }
        ]
    });


}
// 公用弹出框
function edit(){
    layer.open({
        type: 2,
        title: '信息详情页面',
        shade: 0.5,
        skin: 'layui-layer-rim',
        area: ['1000px', '610px'],
        shadeClose: true,
        closeBtn: 1,
        content: 'caseTail.html'
    });
}