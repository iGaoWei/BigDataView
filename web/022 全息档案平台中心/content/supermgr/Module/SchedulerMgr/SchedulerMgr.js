var SchedulerMgr = function() {
    var exports = {};
    exports.options = {};
    exports.options.ItemId = "";
    exports.options.ItemName = "";
    //任务状态
    exports.options.TaskStatusTypes = {
        0: "label label-default",
        1: "label label-info",
        2: "label label-warning",
        3: "label label-danger",
        4: "label label-success"
    };
    //任务类型
    exports.options.JobTypes= {
        0: "label label-success",
        1: "label label-info"
    }
    //初始化数据
    exports.initGridPage = function () {
       
        //初始化
        $(window).resize(function (e) {
            window.setTimeout(function () {
               
                $('#gridTable').setGridWidth(($('.gridPanel').width()));
                $("#gridTable").setGridHeight($.fn.getGridHeight(true));
            
            }, 100);
            e.stopPropagation();
        });
      
        //查询条件
        $("#taskStatusCondition .dropdown-menu li").click(function () {
            var text = $(this).find('a').html();
            var value = $(this).find('a').attr('data-value');
            $("#taskStatusCondition .dropdown-text").html(text).attr('data-value', value);
        });
        $("#taskTypeCondition .dropdown-menu li").click(function () {
            var text = $(this).find('a').html();
            var value = $(this).find('a').attr('data-value');
            $("#taskTypeCondition .dropdown-text").html(text).attr('data-value', value);
        });

        //查询回车
        $('#txt_Keyword').bind('keypress', function (event) {
            if (event.keyCode == "13") {
                $('.lr-search').trigger("click");
            }
        });

        //注册事件
        $(".titlePanel").on("click", ".lr-replace,.lr-add,.lr-edit,.lr-search,.lr-viewlog,.lr-start,.lr-stop,.lr-delete", function () {
                var $this = $(this);
                //刷新
                if ($this.hasClass('lr-replace')) {
                    reload();
                }
                 else if ($this.hasClass('lr-search')) {
                     exports.SearchEvent();
                 }
                 else if ($this.hasClass('lr-add')) {
                     exports.btnAdd();
                 }
                 else if ($this.hasClass('lr-edit')) {
                     exports.btnEdit();
                 }
                 else if ($this.hasClass('lr-removelog')) {
                    exports.btnRemoveLog();
                 }
                else if ($this.hasClass('lr-viewlog')) {
                    exports.btnViewTaskLog();
                }
                else if ($this.hasClass('lr-start')) {
                    exports.btnEnabled();
                }
                else if ($this.hasClass('lr-stop')) {
                    exports.btnDiabled();
                }
                else if ($this.hasClass("lr-delete")) {
                exports.btnDelete();
            };

        });
      
    };
    //编辑
    exports.btnEdit = function () {
        var keyValue = $("#gridTable").jqGridRowValue("Id");
        var taskName = $("#gridTable").jqGridRowValue("TaskName");
        if (checkedRow(keyValue)) {
            $.fn.modalOpen({
                id: "jobDetailForm",
                title: '编辑【'+taskName+'】任务',
                url: '/pages/supermgr/JobDetailForm.html?keyValue=' + keyValue,
                width: "750px",
                height: "550px",
                callBack: function (iframeId) {
                    top.frames[iframeId].AcceptClick();
                }
            });
        }
    }
    //添加
    exports.btnAdd = function () {
        $.fn.modalOpen({
            id: "jobDetailForm",
            title: '添加任务',
            url: '/pages/supermgr/JobDetailForm.html',
            width: "750px",
            height: "550px",
            callBack: function (iframeId) {
                top.frames[iframeId].AcceptClick();
            }
        });
    }

    //查看任务日志
    exports.btnViewTaskLog = function () {
        var keyValue = $("#gridTable").jqGridRowValue("Id");
        var jobName = $("#gridTable").jqGridRowValue("TaskName");
        if (checkedRow(keyValue)) {
            $.fn.modalOpen({
                id: "Form",
                title: '查看【'+jobName+'】任务日志',
                url: '/pages/supermgr/ViewJobLog.html?keyValue=' + keyValue,
                width: "900px",
                height: "650px",
                callBack: function (iframeId) {
                    // top.frames[iframeId].AcceptClick();
            }
            });
        }
    }
    
    //加载Grid
    exports.loadGrid = function () {
        var selectedRowIndex = 0;
        exports.options.$gridTable = $("#gridTable");
        exports.options.$gridTable.jqGrid({
            datatype: "json",
            url: "/content/supermgr/json/JobDetailGrid.json",
            height: $.fn.getGridHeight(true),
            autowidth: true,
            colModel: [
                { label: "主键", name: "Id", hidden: true },
               
                { label: "任务名称", name: "TaskName", index: "TaskName", width: 100, align: "left" },
                 { label: "任务分组", name: "TaskGroupName", index: "TaskGroupName", width: 100, align: "center" },
                   { label: "任务类型", name: "JobTypeName", index: "JobTypeName", width: 70, align: "center" },
                {
                    label: "执行状态", name: "TaskStatusName", index: "TaskStatusName", width: 70, align: "center",
                    formatter: function (cellvalue, options, rowObject) {
                        var index = rowObject["TaskStatus"];
                        var className = exports.options.TaskStatusTypes[index];
                        return '<span class="label ' + className + '">' + cellvalue + '</span>';
                        }
                },
                { label: "执行频率", name: "CronDescriptor", index: "CronDescriptor", width: 200, align: "left" },
                { label: "程序集", name: "AssemblyDll", index: "AssemblyDll", width: 150, align: "left" },
                { label: "类名", name: "Class", index: "Class", width: 250, align: "center" },
            {
                label: "最近运行时间", name: "RecentRunTime", index: "RecentRunTime", width: 150, align: "left",
        formatter: function (cellvalue, options, rowObject) {
            return formatDate(cellvalue, 'yyyy-MM-dd hh:mm:ss');
        }
            },
             {
                 label: "下次运行时间", name: "LastRunTime", index: "LastRunTime", width: 150, align: "left",
                 formatter: function (cellvalue, options, rowObject) {
                     return formatDate(cellvalue, 'yyyy-MM-dd hh:mm:ss');
                 }
             }
            
            ],
            pager: "#gridPager",
            sortname: 'RecentRunTime',
            rowList: [20, 50, 100, 500, 1000],
            rowNum: "20",
            sortorder: "desc",
            rownumbers: true,
            onSelectRow: function () {
                selectedRowIndex = $("#" + this.id).getGridParam('selrow');
            },
            gridComplete: function () {
                $("#" + this.id).setSelection(selectedRowIndex, false);
            }
        });
        exports.SearchEvent(0);
    }
    //查询表格函数
    exports.SearchEvent=function () {
        var queryJson = $("#form1").GetWebControls();

        var taskType = $("#taskTypeCondition .dropdown-text").attr('data-value');
        var taskStatus = $("#taskStatusCondition .dropdown-text").attr('data-value');
        queryJson["TaskType"] = taskType;
        queryJson["TaskStatus"] = taskStatus;
        $("#gridTable").jqGrid('setGridParam', {
            url: "/content/supermgr/json/JobDetailGrid.json",
            postData: queryJson,
            page: 1
        }).trigger('reloadGrid');
    }
    //验证：项目值、项目名 不能重复
    exports.OverrideExistField = function (id, url) {
        $.fn.existField(id, url, { itemId: itemId });
    }

    //删除
    exports.btnDelete = function (keyValue) {
        if (keyValue == undefined) {
            keyValue = $("#gridTable").jqGridRowValue("Id");
        }
        if (checkedRow(keyValue)) {
            $.fn.confirmAjax({
                msg: "注：您确定要【删除】该定时任务么？该删除操作会级联删除任务日志，请谨慎操作！",
                url: "/SysMgr/SchedulerMgr/DeleteJobStatus",
                param: { keyValue: keyValue },
                success: function (data) {
                    $("#gridTable").trigger("reloadGrid");
                }
            });
        }
    }
    //启用
    exports.btnEnabled = function (keyValue) {
        if (keyValue == undefined) {
            keyValue = $("#gridTable").jqGridRowValue("Id");
        }
        if (checkedRow(keyValue)) {
            $.fn.confirmAjax({
                msg: "注：您确定要【启动】该定时任务么？",
                url: "/SysMgr/SchedulerMgr/ManageJobStatus",
                param: { keyValue: keyValue, jobStatus:1 },
                success: function (data) {
                    $("#gridTable").trigger("reloadGrid");
                }
            });
        }
    }
    //禁用
    exports.btnDiabled = function (keyValue) {
        if (keyValue == undefined) {
            keyValue = $("#gridTable").jqGridRowValue("Id");
        }
        if (checkedRow(keyValue)) {
            $.fn.confirmAjax({
                msg: "注：您确定要【停止】该定时任务么？",
                url: "/SysMgr/SchedulerMgr/ManageJobStatus",
                param: { keyValue: keyValue, jobStatus: 2 },
                success: function (data) {
                    $("#gridTable").trigger("reloadGrid");
                }
            });
        }
    }
    //保存表单
    exports.AcceptClick = function() {
        if (!$('#form1').Validform()) {
            return false;
        }
        var postData = $("#form1").GetWebControls(exports.options.KeyValue);

        $.fn.submitForm({
            url: "/SysMgr/SchedulerMgr/Save?keyValue=" + exports.options.KeyValue,
            param: postData,
            loading: "正在保存数据...",
            success: function() {
                $.currentIframe().$("#gridTable").resetSelection();
                $.currentIframe().$("#gridTable").trigger("reloadGrid");
            }
        });
    };
    //初始化表单
    exports.initFormControl = function (readonly) {
        exports.options.KeyValue = $.fn.request("keyValue");


        

        $("#TaskType").ComboBox({
            description: "==请选择=="
        });
        //获取表单
        if (!!exports.options.KeyValue) {
            $.fn.setForm({
                url: "/SysMgr/SchedulerMgr/GetJobDetailEntity",
                param: { keyValue: exports.options.KeyValue },
                success: function (data) {
                    $("#form1").SetWebControls(data);

                    if (readonly) {

                       // $("#form1").find('.form-control,.ui-select,input,textarea').attr('disabled', 'disabled');
                        $("#form1").find("#BeginTime,#AssemblyDll,#Class,#TaskType,#CronExpressionString").attr("disabled", 'disabled');
                        // $("#TaskName,#TaskGroup,#TaskType")
                    }
                }
            });
        }
    }

    return exports;
};