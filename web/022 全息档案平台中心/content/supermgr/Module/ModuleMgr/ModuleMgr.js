var ModuleMgr = function () {
    var exports = {};
    exports.options = {};
    exports.options.ParentId = "";
 
    //初始化数据
    exports.initGridPage = function () {
        //layout布局
        $('#layout').layout({
            applyDemoStyles: false,
            onresize: function () {
                $(window).resize();
            },
            height: $.fn.getLayoutHeight()
        });
        //初始化
        $(window).resize(function (e) {
            window.setTimeout(function () {
                $("#layout").css({ "height": $.fn.getLayoutHeight() });
                $('#gridTable').setGridWidth(($('.gridPanel').width()));
                $("#gridTable").setGridHeight($.fn.getGridHeight());
                $("#itemTree").setTreeHeight($.fn.getLayoutContentHeight());
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
        $(".titlePanel").on("click", ".lr-replace,.lr-add,.lr-edit,.lr-delete,.lr-search", function () {
                var $this = $(this);
                //添加地址
                if ($this.hasClass('lr-replace')) {
                    reload();
                }
                else if ($this.hasClass('lr-add')) {
                    exports.btnAdd();
                } else if ($this.hasClass('lr-edit')) {
                    exports.btnEdit();
                } else if ($this.hasClass('lr-delete')) {
                    exports.btnDelete();
                }  else if ($this.hasClass('lr-search')) {
                    exports.btnSearch();
                }
        });

    };

    //加载树
    exports.loadTree = function () {
       
        var item = {
            height: $.fn.getLayoutContentHeight(),
            url: "/content/supermgr/json/ModuleTree.json",
            onnodeclick: function (item) {
                exports.options.ParentId = item.id;
                $('.lr-search').trigger("click");
            }
        };
        //初始化
        $("#itemTree").treeview(item);

    };
    //加载Grid
    exports.loadGrid = function () {
        var selectedRowIndex = 0;
        exports.options.$gridTable = $("#gridTable");
        exports.options.$gridTable.jqGrid({
            datatype: "json",
            url: "/content/supermgr/json/ModuleGrid.json",
            height: $.fn.getGridHeight(),
            autowidth: true,
            colModel: [
                { label: "主键", name: "Id", index: "Id", hidden: true },
                { label: "编号", name: "EnCode", index: "EnCode", width: 150, align: "left" },
                { label: "名称", name: "FullName", index: "FullName", width: 150, align: "left" },
                { label: "地址", name: "UrlAddress", index: "UrlAddress", width: 350, align: "left" },
                { label: "目标", name: "Target", index: "Target", width: 60, align: "center" },
                {
                    label: "菜单", name: "IsMenu", index: "IsMenu", width: 50, align: "center",
                    formatter: function (cellvalue, options, rowObject) {
                        return cellvalue == 1 ? "<i value=" + cellvalue + " class=\"fa fa-toggle-on\"></i>" : "<i value=" + cellvalue + " class=\"fa fa-toggle-off\"></i>";
                    }
                },
                {
                    label: "展开", name: "AllowExpand", index: "AllowExpand", width: 50, align: "center",
                    formatter: function (cellvalue, options, rowObject) {
                        return cellvalue == 1 ? "<i class=\"fa fa-toggle-on\"></i>" : "<i class=\"fa fa-toggle-off\"></i>";
                    }
                },
                {
                    label: "公共", name: "IsPublic", index: "IsPublic", width: 50, align: "center",
                    formatter: function (cellvalue, options, rowObject) {
                        return cellvalue == 1 ? "<i class=\"fa fa-toggle-on\"></i>" : "<i class=\"fa fa-toggle-off\"></i>";
                    }
                },
                {
                    label: "有效", name: "EnabledMark", index: "EnabledMark", width: 50, align: "center",
                    formatter: function (cellvalue, options, rowObject) {
                        return cellvalue == 1 ? "<i class=\"fa fa-toggle-on\"></i>" : "<i class=\"fa fa-toggle-off\"></i>";
                    }
                },
                { label: "描述", name: "Description", index: "Description", width: 100, align: "left" }
            ],

            shrinkToFit: false,
            altclass: 'altRowsColour',
            rowNum: "10000",
            rownumbers: true,
            onSelectRow: function () {
                selectedRowIndex = $("#" + this.id).getGridParam('selrow');
            },
            gridComplete: function () {
                $("#" + this.id).setSelection(selectedRowIndex, false);
            }
        });
    }
    //搜索
    exports.btnSearch=function() {
      
            exports.options.$gridTable.jqGrid('setGridParam', {
                url: "/content/supermgr/json/ModuleGrid.json",
                postData: {
                    ParentId: exports.options.ParentId,
                    conditionJson: $("#queryCondition").find('.dropdown-text').attr('data-value'),
                    searchKeyWord: $("#txt_Keyword").val()
                },
            }).trigger('reloadGrid');
    }
    //删除
   exports.btnDelete= function () {
       var keyValue = $("#gridTable").jqGridRowValue("Id");
        if (keyValue) {
            $.fn.deleteForm({
                url: "/SysMgr/ModuleMgr/RemoveForm",
                param: { keyValue: keyValue },
                success: function(data) {
                    $("#gridTable").resetSelection();
                    $("#gridTable").trigger("reloadGrid");
                }
            });
        } else {
            $.fn.modalMsg('请选择需要删除的数据项！', "warning");
        }
    }


    //编辑
    exports.btnEdit=function() {
        var keyValue = $("#gridTable").jqGridRowValue("Id");
        if (checkedRow(keyValue)) {
            $.fn.modalOpen({
                id: "Form",
                title: '编辑功能',
                url: '/pages/supermgr/ModuleForm.html?keyValue=' + keyValue,
                width: "700px",
                height: "430px",
                btn: null
               
            });
        }
    }
    //添加
    exports.btnAdd = function() {
        if (!exports.options.ParentId) {
            $.fn.modalMsg('请在左侧选择某一项！', "warning");
            return false;
        }
        $.fn.modalOpen({
            id: "Form",
            title: '添加功能',
            url: '/pages/supermgr/ModuleForm.html?parentId=' + exports.options.ParentId,
            btn: null,
            width: "700px",
            height: "430px"

        });
    };
    /**********************表单************************/
 
    //加载表单
    exports.loadForm= function(readonly) {
        exports.options.KeyValue = $.fn.request('keyValue');
        exports.options.ParentId = $.fn.request('parentId');
        exports.options.ModuleId = $("#Id").val();

        $(function () {
            //加载导向
            $('#wizard').wizard().on('change', function (e, data) {
                var $finish = $("#btn_finish");
                var $next = $("#btn_next");
                if (data.direction == "next") {
                    if (data.step == 1) {
                        $finish.removeAttr('disabled');
                        $next.attr('disabled', 'disabled');
                    }
                    else {
                        $finish.attr('disabled', 'disabled');
                    }
                } else {
                    $finish.attr('disabled', 'disabled');
                    $next.removeAttr('disabled');
                }
            });

            exports.initFormControl(readonly);
            exports.buttonOperation();
            exports.getButtonGrid();
            $('.selectmoduleicon').bind('click', function() {
                exports.btnModuleSelectIcon();
            });
            //为模块按钮管理注册事件
            $(".modulebtn").on("click", ".lr-add-button,.lr-edit-button,.lr-delete-button,.lr-copy-button", function () {
                var $this = $(this);
                if ($this.hasClass('lr-add-button')) {
                    exports.btnModuleBtnAdd();
                } else if ($this.hasClass('lr-edit-button')) {
                    exports.btnModuleBtnEdit();
                } else if ($this.hasClass('lr-delete-button')) {
                    exports.btnModuleBtnDelete();
                } else if ($this.hasClass('lr-copy-button')) {
                    exports.btnModuleBtnCopy();
                }
            });
        });
    }
    /**
     * 选取模块图标
     * @returns {} 
     */
    exports.btnModuleSelectIcon = function () {

        $.fn.modalOpen({
            id: "SelectIcon",
            title: '选取图标',
            url: '/SysMgr/ModuleMgr/SelectIcon?ControlId=Icon',
            width: "1000px",
            height: "600px",
            btn: false,
            allowOverParent:true
        });
    }


    //初始化表单
    exports.initFormControl = function (readonly) {
        //目标
        $("#Target").ComboBox({
            description: "==请选择==",
            height: "200px"
        });
        //上级
        $("#ParentId").ComboBoxTree({
            url: "/content/supermgr/json/ModuleTree.json",
            description: "==请选择==",
            height: "195px",
            allowSearch: true
        });
        //获取表单
        if (!!exports.options.KeyValue) {
            $.fn.setForm({
                url: "/content/supermgr/json/ModuleFrom.json",
                param: { keyValue: exports.options.KeyValue },
                success: function (data) {
                    $("#form1").SetWebControls(data);
                    if (data.IsMenu === 1) {
                        $("#btn_next").removeAttr('disabled');
                        $("#btn_finish").attr('disabled', 'disabled');
                    }
                    if (readonly) {
                        $("#form1").find('.form-control,.ui-select,input').attr('disabled', 'disabled');
                    }
                }
            });
        } else {
            $("#ParentId").ComboBoxTreeSetValue(exports.options.ParentId);
        }
    }
     //保存表单
    exports.acceptClick = function () {
        if (!$('#form1').Validform()) {
            return false;
        }
        var postData = $("#form1").GetWebControls(exports.options.KeyValue);
     
        if (postData["ParentId"] == "") {
            postData["ParentId"] = 0;
        }
        postData["moduleButtonListJson"] = JSON.stringify(exports.options.ButtonJson);
      //  postData["moduleColumnListJson"] = JSON.stringify(exports.options.ColumnJson);
        $.fn.submitForm({
            url: "/SysMgr/ModuleMgr/SaveForm?keyValue=" + exports.options.KeyValue,
            param: postData,
            loading: "正在保存数据...",
            success: function() {
                $.currentIframe().$("#gridTable").trigger("reloadGrid");
            }
        });
    }
    /**
     * 按钮操作（上一步、下一步、完成、关闭）
     * @returns {} 
     */
    exports.buttonOperation=function() {
        var $last = $("#btn_last");
        var $next = $("#btn_next");
        var $finish = $("#btn_finish");
        //如果是菜单，开启 上一步、下一步
        $("#IsMenu").click(function () {
            if (!$(this).attr("checked")) {
                $(this).attr("checked", true)
                $next.removeAttr('disabled');
                $finish.attr('disabled', 'disabled');
            } else {
                $(this).attr("checked", false)
                $next.attr('disabled', 'disabled');
                $finish.removeAttr('disabled');
            }
        });
        //完成提交保存
        $finish.click(function() {
            exports.acceptClick();
        });
    }

    /**
     * 获取按钮列表
     * @returns {} 
     */
    exports.getButtonGrid = function () {
        var moduleId = exports.options.ModuleId;
        $.ajax({
            url: "/content/supermgr/json/ModuleButtonList.json?moduleId=" + escape(moduleId),
            type: "get",
            dataType: "json",
            success: function (data) {
                exports.options.ButtonJson = data;
                window.ButtonJson = exports.options.ButtonJson;
            },
        });
        exports.options.$buttonGrid = $("#gridTable-button");
        exports.options.$buttonGrid.jqGrid({
            unwritten: false,
            url: "/content/supermgr/json/ModuleButtonTree.json?moduleId=" + escape(moduleId),
            datatype: "json",
            height: $(window).height() - 121,
            width: $(window).width() - 11,
            colModel: [
                { label: "主键", name: "Id", hidden: true },
                { label: "名称", name: "FullName", width: 140, align: "left", sortable: false },
                { label: "编号", name: "EnCode", width: 140, align: "left", sortable: false },
                { label: "地址", name: "ActionAddress", width: 500, align: "left", sortable: false },
            ],
            treeGrid: true,
            treeGridModel: "nested",
            ExpandColumn: "EnCode",
            rowNum: "all",
            rownumbers: true
        });

      


    }
    /**
     * 添加模块按钮
     * @returns {} 
     */
    exports.btnModuleBtnAdd=function() {
        var parentId = $("#gridTable-button").jqGridRowValue("Id");
        $.fn.modalOpen({
            id: "buttonForm",
            title: '添加按钮',
            url: '/SysMgr/ModuleMgr/ButtonForm?parentId=' + parentId + "&moduleId=" + escape(exports.options.ModuleId),
            width: "450px",
            height: "300px",
            callBack: function (iframeId) {
                top.frames[iframeId].buttonAcceptClick(function (data) {
                    exports.options.ButtonJson.push(data);
                    exports.buttonListToListTreeJson(exports.options.ButtonJson);
                    window.ButtonJson = exports.options.ButtonJson;
                });
            }
        });
    }
    /**
     * 编辑模块按钮
     * @returns {} 
     */
    exports.btnModuleBtnEdit=function() {
        var moduleButtonId = $("#gridTable-button").jqGridRowValue("Id");
        if (checkedRow(moduleButtonId)) {
            $.fn.modalOpen({
                id: "buttonForm",
                title: '编辑按钮',
                url: '/SysMgr/ModuleMgr/ButtonForm?moduleButtonId=' + moduleButtonId + "&moduleId=" + +escape(exports.options.ModuleId),
                width: "450px",
                height: "300px",
                callBack: function (iframeId) {
                    top.frames[iframeId].buttonAcceptClick(function (data) {
                        $.each(exports.options.ButtonJson, function (i) {
                            if (exports.options.ButtonJson[i].Id == moduleButtonId) {
                                exports.options.ButtonJson[i] = data;
                            }
                        });
                        exports.buttonListToListTreeJson(exports.options.ButtonJson);
                        window.ButtonJson = exports.options.ButtonJson;
                    });
                }
            });
        }

    }
    /**
     * 删除模块按钮
     * @returns {} 
     */
    exports.btnModuleBtnDelete = function() {
        var moduleButtonId = $("#gridTable-button").jqGridRowValue("Id");
        if (checkedRow(moduleButtonId)) {
            $.each(exports.options.ButtonJson, function(i) {
                if (exports.options.ButtonJson[i].Id == moduleButtonId) {
                    exports.options.ButtonJson.splice(i, 1);
                    exports.buttonListToListTreeJson(exports.options.ButtonJson);
                    window.ButtonJson = exports.options.ButtonJson;
                    return false;
                }
            });
        }

    };
    /**
     * 复制模块按钮
     * @returns {} 
     */
    exports.btnModuleBtnCopy=function() {
        var moduleButtonId = $("#gridTable-button").jqGridRowValue("Id");
        if (checkedRow(moduleButtonId)) {
            $.fn.modalOpen({
                id: "OptionModule",
                title: '将按钮复制到指定功能里面',
                url: '/SysMgr/ModuleMgr/ButtonOptionModule?keyValue=' + moduleButtonId,
                width: "500px",
                height: "500px",
                callBack: function (iframeId) {
                    top.frames[iframeId].buttonOptionModuleLoadForm();
                }
            });
        }
    }
  
    /**
     * 处理Json
     * @param {} buttonJson 
     * @returns {} 
     */
    exports.buttonListToListTreeJson= function (buttonJson) {
        $.ajax({
            url: "/SysMgr/ModuleMgr/ModuleButtonListToListTreeJson",
            data: { moduleButtonJson: JSON.stringify(buttonJson) },
            type: "post",
            dataType: "json",
            success: function (data) {
                exports.options.$buttonGrid.clearGridData();
                exports.options.$buttonGrid[0].addJSONData(data);
            },
        });
    }
    ///*************************按钮Form页***********************************************
    /**
     * 按钮Form加载
     * @returns {} 
     */
    exports.buttonLoadForm = function () {
        exports.options.ParentId = $.fn.request('parentId');
        exports.options.ModuleButtonId = $.fn.request('moduleButtonId');
        exports.options.ModuleId = $.fn.request('moduleId');
        $(function() {
            exports.buttonInitControl();
        });
    }
    /**
     * 按钮
     * @returns {} 
     */
    exports.buttonInitControl = function () {
        var dataJson = top.Form.ButtonJson;
        //上级
        $("#ParentId").ComboBoxTree({
            url: "/content/supermgr/json/ModuleButtonList.json",
            param: { moduleButtonJson: JSON.stringify(dataJson) },
            method: "post",
            description: "==请选择==",
            height: "150px"
        });
        if (!!exports.options.ModuleButtonId) {
            $.each(dataJson, function (i) {
                var row = dataJson[i];
                if (row.Id === exports.options.ModuleButtonId) {
                    $("#form1").SetWebControls(row);
                }
            });
        } else {
            $("#ModuleId").val(exports.options.ModuleId);
            if (!!exports.options.ParentId) {
                $("#ParentId").ComboBoxTreeSetValue(exports.options.ParentId);
            } else {
                $("#ParentId").ComboBoxTreeSetValue(0);
            }
        }
    }
    /**
     * 按钮保存表单
     * @returns {} 
     */
    exports.buttonAcceptClick = function(callback) {
        if (!$('#form1').Validform()) {
            return false;
        }
        var data = $("#form1").GetWebControls(exports.options.ModuleButtonId);
        if (data["ParentId"] == "") {
            data["ParentId"] = 0;
        }
        if (data["ModuleId"] == "") {
            data["ModuleId"] = newGuid();
        }
        callback(data);
        $.fn.modalClose();

    };
    /**
     * 复制按钮操作Form
     * @returns {} 
     */
    exports.buttonOptionModuleLoadForm = function () {
        exports.options.KeyValue = $.fn.request('keyValue');
        
        $(function() {
            exports.buttonGetModuleTree();
        });
    }
    /**
     * 加载功能模块树
     * @returns {} 
     */
    exports.buttonGetModuleTree = function () {
        var item = {
            onnodeclick: function (item) {
                exports.options.ModuleId = item.id;
            },
            url: "/content/supermgr/json/ModuleButtonTree.json"
        };
        $("#ModuleTree").treeview(item);

    }
    /**
     * 按钮复制保存
     * @returns {} 
     */
    exports.buttonOptionModuleAcceptClick=function() {
        if (exports.options.ModuleId) {
            $.fn.setForm({
                url: "/SysMgr/ModuleMgr/ModuleButtonCopyForm",
                param: { keyValue: exports.options.KeyValue, moduleId: exports.options.ModuleId },
                loading: "正在提交数据...",
                success: function () {

                }
            })
        } else {
            $.fn.modalMsg('请选择系统功能！', "warning");
        }

    }
    return exports;
};