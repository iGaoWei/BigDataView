var SchedulerLogMgr = function () {
    var exports = {};
    exports.options = {};
    exports.options.JobId = $.fn.request('keyValue');
    //任务类型
     exports.options.JobStates= {
         1: "label label-success",
         2: "label label-danger",
         3: "label label-warning"
    }
    //初始化数据
    exports.initGridPage = function () {
      
        //初始化
        $(window).resize(function (e) {
            window.setTimeout(function () {
             
                $('#gridTable').setGridWidth(($('.gridPanel').width()));
                $("#gridTable").setGridHeight($.fn.getGridHeight());
            
            }, 100);
            e.stopPropagation();
        });
      
        //查询条件
        $("#queryCondition .dropdown-menu li").click(function () {
            var text = $(this).find('a').html();
            var value = $(this).find('a').attr('data-value');
            $("#queryCondition .dropdown-text").html(text).attr('data-value', value);
        });
      
        //查询回车
        $('#txt_Keyword').bind('keypress', function (event) {
            if (event.keyCode == "13") {
                $('.lr-search').trigger("click");
            }
        });

        //注册事件
        $(".titlePanel").on("click", ".lr-search,.lr-view", function () {
                var $this = $(this);
              
                  if ($this.hasClass('lr-search')) {
                      exports.SearchEvent();
                 }
                
                else if ($this.hasClass('lr-view')) {
                    exports.btnViewLogDetail();
                };

        });
    };


    //查看任务日志详情
    exports.btnViewLogDetail = function () {
        var keyValue = $("#gridTable").jqGridRowValue("Id");
        if (checkedRow(keyValue)) {
            $.fn.modalOpen({
                id: "LogDetailForm",
                title: '查看任务日志详情',
                url: '/SysMgr/SchedulerMgr/JobLogForm?keyValue=' + keyValue,
                width: "550px",
                height: "450px",
                callBack: function (iframeId) {
              
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
            url: "/content/supermgr/json/JobLog.json?JobId=" + exports.options.JobId,
            height: $.fn.getGridHeight(),
            autowidth: true,
            colModel: [
                { label: "主键", name: "Id", hidden: true },
               
                { label: "任务名称", name: "TaskName", index: "TaskName", width: 100, align: "left" },
                {
                    label: "执行状态", name: "JobStateName", index: "JobStateName", width: 70, align: "center",
                    formatter: function (cellvalue, options, rowObject) {
                        var index = rowObject["TaskState"];
                        var className = exports.options.JobStates[index];
                        return '<span class="label ' + className + '">' + cellvalue + '</span>';
                        }
                },
                { label: "耗费时间", name: "TaskCostTime", index: "TaskCostTime", width: 100, align: "left" },
             {
                 label: "开始时间", name: "BeginTime", index: "BeginTime", width: 120, align: "left",
                 formatter: function (cellvalue, options, rowObject) {
                     return formatDate(cellvalue, 'yyyy-MM-dd hh:mm:ss');
                 }
             },
               {
                   label: "完成时间", name: "FinishTime", index: "FinishTime", width: 120, align: "left",
                   formatter: function (cellvalue, options, rowObject) {
                       return formatDate(cellvalue, 'yyyy-MM-dd hh:mm:ss');
                   }
               },
                { label: "异常记录", name: "TaskLog", index: "TaskLog", width:200, align: "left" }
               
            
            ],
            pager: "#gridPager",
            sortname: 'BeginTime',
            sortorder: "desc",
            rowList: [20, 50, 100, 500, 1000],
            rowNum: "20",
            rownumbers: true,
            onSelectRow: function () {
                selectedRowIndex = $("#" + this.id).getGridParam('selrow');
            },
            gridComplete: function () {
                $("#" + this.id).setSelection(selectedRowIndex, false);
            }
        });
        exports.SearchEvent();
    }
    //查询表格函数
    exports.SearchEvent=function () {
        var queryJson = $("#form1").GetWebControls();
        var jobId = exports.options.JobId;
        var jobState = $("#queryCondition .dropdown-text").attr('data-value');
        queryJson["JobState"] = jobState;
        queryJson["JobId"] = jobId;
        $("#gridTable").jqGrid('setGridParam', {
            url: "/SysMgr/SchedulerMgr/GetJobLogsList",
            postData: queryJson,
            page: 1
        }).trigger('reloadGrid');
    }
    //初始化表单
    exports.initFormControl = function (readonly) {
        exports.options.KeyValue = $.fn.request("keyValue");
        //获取表单
        if (!!exports.options.KeyValue) {
            $.fn.setForm({
                url: "/SysMgr/SchedulerMgr/GetJobLogEntity",
                param: { keyValue: exports.options.KeyValue },
                success: function (data) {
                    $("#form1").SetWebControls(data);
                   
                    if (readonly) {
                        $("#form1").find('.form-control,.ui-select,input,textarea').attr('disabled', 'disabled');
                    }
                }
            });
        }
    }

    return exports;
};