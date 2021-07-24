// JavaScript Document
        $(function() {
            $('#table').bootstrapTable({
                method:"post",
                url: "json/data.json",
                dataType: "json",
                pagination: true, //分页
                singleSelect: false,
                pageList:[10,20,50],
                locale:"zh-US", //表格汉化
                search: false, //显示搜索框
                columns: [
                    {
                        checkbox:"true",
                        field: 'name',
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: '状态',
                        field: 'status',
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: '参与人数',
                        field: 'participationCounts',
                        align: 'center'
                    },
                    {
                        title: '总人数',
                        field: 'totalCounts',
                        align: 'center'
                    },
                    {
                        title: '开始时间',
                        field: 'startTime',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        field: 'id',
                        align: 'center',
                        formatter: function (value, row) {
                            var e = '<a href="#" mce_href="#" onclick="edit(\'' + row.id + '\')">编辑</a> ';
//                            var d = '<a href="#" mce_href="#" onclick="del(\'' + row.id + '\')">删除</a> ';
                            return e;
                        }
                    }
                ]
            });
        })
    