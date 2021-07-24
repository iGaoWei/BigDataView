

jQuery(document).ready(function () {
    $(".ui-filter-text").click(function () {
        if ($(this).next(".ui-filter-list").is(":hidden")) {
            $(this).css("border-bottom-color", "#fff");
            $(".ui-filter-list").slideDown(10);
            $(this).addClass("active");
        } else {
            $(this).css("border-bottom-color", "#ccc");
            $(".ui-filter-list").slideUp(10);
            $(this).removeClass("active");
        }
    });
    $(".profile-nav li").click(function () {
        $(".profile-nav li").removeClass("active");
        $(".profile-nav li").removeClass("hover");
        $(this).addClass("active");
    }).hover(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("hover");
        }
    }, function () {
        $(this).removeClass("hover");
    });
});

//获取layout内容页高度
$.fn.getLayoutHeight = function () {
    if ($(".content").length > 0) { //如果有.content元素，则从content元素开始计算
        return $(window).height() - $(".content").offset().top;
    } else {
        return $(window).height();
    }
}
//获取layout bottom底部距离
$.fn.getLayoutBottomHeight=function() {
    return 52;  //底部距离预设52
}
//获取layout中grid刨除顶部高度（包括上下内边距）
$.fn.getGridTopHeight = function () {
    if ($(".gridPanel").length > 0) {
        return $(".gridPanel").offset().top;
    } else {
        return 0;
    }
}
//获取layout内容区域高度
$.fn.getLayoutContentHeight=function() {
    return $.fn.getLayoutHeight() - $.fn.getLayoutBottomHeight();
}
//获取列表grid自适应高度
$.fn.getGridHeight = function (hasPage) {
    var pageHeight = -18;//一种奇怪的bug，临时解决方案-18px
    if (hasPage) {
        pageHeight = 28;//28代表分页高度
    }
    return $(window).height() - $.fn.getGridTopHeight() - $.fn.getLayoutBottomHeight() - pageHeight;
}
$.loading = function (bool, text) {
    if (bool) {
        App.blockUI({
            target: 'body',
            boxed: true,
            message: '加载中' | text//,
            // animate: true
        });
    } else {
        App.unblockUI();
    }
}
//兼容各种插件中loading 
loading = function (bool, text) {
    if (bool) {
        App.blockUI({
            target: 'body',
            boxed: true,
            message: '加载中' | text//,
            // animate: true
        });
    } else {
        App.unblockUI();
    }
}
tabiframeId = function () {
    var iframeId = top.$(".tab_iframe:visible").attr("id");
    return iframeId;
};
$.fn.ComboBox = function (options) {
    //options参数：description,height,width,allowSearch,url,param,data
    var $select = $(this);
    if (!$select.attr("id")) {
        return false;
    }
    if (options) {
        if ($select.find(".ui-select-text").length == 0) {
            var $select_html = "";
            $select_html += "<div class=\"ui-select-text\" style='color:#999;'>" + options.description + "</div>";
            $select_html += "<div class=\"ui-select-option\">";
            $select_html += "<div class=\"ui-select-option-content\" style=\"max-height: " + options.height + "\">" + $select.html() + "</div>";
            if (options.allowSearch) {
                $select_html += "<div class=\"ui-select-option-search\"><input type=\"text\" class=\"form-control\" placeholder=\"搜索关键字\" /><span class=\"input-query\" title=\"Search\"><i class=\"fa fa-search\"></i></span></div>";
            }
            $select_html += "</div>";
            $select.html("");
            $select.append($select_html);
        }
    }
    var $option_html = $($("<p>").append($select.find(".ui-select-option").clone()).html());
    $option_html.attr("id", $select.attr("id") + "-option");
    $select.find(".ui-select-option").remove();
    if ($option_html.length > 0) {
        $("body").find("#" + $select.attr("id") + "-option").remove();
    }
    $("body").prepend($option_html);
    var $option = $("#" + $select.attr("id") + "-option");
    if (options.url != undefined) {
        $option.find(".ui-select-option-content").html("");
        $.ajax({
            url: options.url,
            data: options.param,
            type: "GET",
            dataType: "json",
            async: false,
            success: function (data) {
                options.data = data;
                var json = data;
                loadComboBoxView(json);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.fn.modalMsg(errorThrown, "warning");
            }
        });
    } else if (options.data != undefined) {
        var json = options.data;
        loadComboBoxView(json);
    } else {
        $option.find("li").css("padding", "0 5px");
        $option.find("li").click(function (e) {
            var data_text = $(this).text();
            var data_value = $(this).attr("data-value");
            $select.attr("data-value", data_value).attr("data-text", data_text);
            $select.find(".ui-select-text").html(data_text).css("color", "#000");
            $option.slideUp(150);
            $select.trigger("change");
            e.stopPropagation();
        }).hover(function (e) {
            if (!$(this).hasClass("liactive")) {
                $(this).toggleClass("on");
            }
            e.stopPropagation();
        });
    }

    function loadComboBoxView(json, searchValue, m) {
        if (json.length > 0) {
            var $_html = $("<ul></ul>");
            if (options.description) {
                $_html.append("<li data-value=\"\">" + options.description + "</li>");
            }
            $.each(json, function (i) {
                var row = json[i];
                var title = row[options.title];
                if (title == undefined) {
                    title = "";
                }
                if (searchValue != undefined) {
                    if (row[m.text].indexOf(searchValue) != -1) {
                        $_html.append("<li data-value=\"" + row[options.id] + "\" title=\"" + title + "\">" + row[options.text] + "</li>");
                    }
                } else {
                    $_html.append("<li data-value=\"" + row[options.id] + "\" title=\"" + title + "\">" + row[options.text] + "</li>");
                }
            });
            $option.find(".ui-select-option-content").html($_html);
            $option.find("li").css("padding", "0 5px");
            $option.find("li").click(function (e) {
                var data_text = $(this).text();
                var data_value = $(this).attr("data-value");
                $select.attr("data-value", data_value).attr("data-text", data_text);
                $select.find(".ui-select-text").html(data_text).css("color", "#000");
                $option.slideUp(150);
                $select.trigger("change");
                e.stopPropagation();
            }).hover(function (e) {
                if (!$(this).hasClass("liactive")) {
                    $(this).toggleClass("on");
                }
                e.stopPropagation();
            });
        }
    }

    //操作搜索事件
    if (options.allowSearch) {
        $option.find(".ui-select-option-search").find("input").bind("keypress", function (e) {
            if (event.keyCode == "13") {
                var value = $(this).val();
                loadComboBoxView($(this)[0].options.data, value, $(this)[0].options);
            }
        }).focus(function () {
            $(this).select();
        })[0]["options"] = options;
    }

    $select.unbind("click");
    $select.bind("click", function (e) {
        if ($select.attr("readonly") == "readonly" || $select.attr("disabled") == "disabled") {
            return false;
        }
        $(this).addClass("ui-select-focus");
        if ($option.is(":hidden")) {
            $select.find(".ui-select-option").hide();
            $(".ui-select-option").hide();
            var left = $select.offset().left;
            var top = $select.offset().top + 29;
            var width = $select.width();
            if (options.width) {
                width = options.width;
            }
            if (($option.height() + top) < $(window).height()) {
                $option.slideDown(150).css({ top: top, left: left, width: width });
            } else {
                var _top = (top - $option.height() - 32);
                $option.show().css({ top: _top, left: left, width: width });
                $option.attr("data-show", true);
            }
            $option.css("border-top", "1px solid #ccc");
            $option.find("li").removeClass("liactive");
            $option.find("[data-value=" + $select.attr("data-value") + "]").addClass("liactive");
            $option.find(".ui-select-option-search").find("input").select();
        } else {
            if ($option.attr("data-show")) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
        }
        e.stopPropagation();
    });
    $(document).click(function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        if (!$(tar).hasClass("form-control")) {
            if ($option.attr("data-show")) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
            $select.removeClass("ui-select-focus");
            e.stopPropagation();
        }
    });
    return $select;
};
$.fn.ComboBoxSetValue = function (value) {
    if ($.isNullOrEmpty(value)) {
        return;
    }
    var $select = $(this);
    var $option = $("#" + $select.attr("id") + "-option");
    $select.attr("data-value", value);
    var data_text = $option.find("ul").find("[data-value=" + value + "]").html();
    if (data_text) {
        $select.attr("data-text", data_text);
        $select.find(".ui-select-text").html(data_text).css("color", "#000");
        $option.find("ul").find("[data-value=" + value + "]").addClass("liactive");
    }
    return $select;
};
$.fn.ComboBoxTree = function (options) {
    //options参数：description,height,allowSearch,appendTo,click,url,param,method,icon
    var $select = $(this);
    if (!$select.attr("id")) {
        return false;
    }
    if ($select.find(".ui-select-text").length == 0) {
        var $select_html = "";
        $select_html += "<div class=\"ui-select-text\"  style='color:#999;'>" + options.description + "</div>";
        $select_html += "<div class=\"ui-select-option\">";
        $select_html += "<div class=\"ui-select-option-content\" style=\"max-height: " + options.height + "\"></div>";
        if (options.allowSearch) {
            $select_html += "<div class=\"ui-select-option-search\"><input type=\"text\" class=\"form-control\" placeholder=\"搜索关键字\" /><span class=\"input-query\" title=\"Search\"><i class=\"fa fa-search\" title=\"按回车查询\"></i></span></div>";
        }
        $select_html += "</div>";
        $select.append($select_html);
    }


    var $option_html = $($("<p>").append($select.find(".ui-select-option").clone()).html());
    $option_html.attr("id", $select.attr("id") + "-option");
    $select.find(".ui-select-option").remove();
    if (options.appendTo) {
        $(options.appendTo).prepend($option_html);
    } else {
        $("body").prepend($option_html);
    }
    var $option = $("#" + $select.attr("id") + "-option");
    var $option_content = $("#" + $select.attr("id") + "-option").find(".ui-select-option-content");
    loadtreeview(options.url);

    function loadtreeview(url) {
        $option_content.treeview({
            onnodeclick: function (item) {
                $select.attr("data-value", item.id).attr("data-text", item.text);
                $select.find(".ui-select-text").html(item.text).css("color", "#000");
                $select.trigger("change");
                if (options.click) {
                    options.click(item);
                }
            },
            height: options.height,
            url: url,
            param: options.param,
            method: options.method,
            description: options.description
        });
    }

    if (options.allowSearch) {
        $option.find(".ui-select-option-search").find("input").attr("data-url", options.url);
        $option.find(".ui-select-option-search").find("input").bind("keypress", function (e) {
            if (event.keyCode == "13") {
                var value = $(this).val();
                var url = changeUrlParam($option.find(".ui-select-option-search").find("input").attr("data-url"), "keyword", escape(value));
                loadtreeview(url);
            }
        }).focus(function () {
            $(this).select();
        });
    }
    if (options.icon) {
        $option.find("i").remove();
        $option.find("img").remove();
    }
    $select.find(".ui-select-text").unbind("click");
    $select.find(".ui-select-text").bind("click", function (e) {
        if ($select.attr("readonly") == "readonly" || $select.attr("disabled") == "disabled") {
            return false;
        }
        $(this).parent().addClass("ui-select-focus");
        if ($option.is(":hidden")) {
            $select.find(".ui-select-option").hide();
            $(".ui-select-option").hide();
            var left = $select.offset().left;
            var top = $select.offset().top + 29;
            var width = $select.width();
            if (options.width) {
                width = options.width;
            }
            if (($option.height() + top) < $(window).height()) {
                $option.slideDown(150).css({ top: top, left: left, width: width });
            } else {
                var _top = (top - $option.height() - 32);
                $option.show().css({ top: _top, left: left, width: width });
                $option.attr("data-show", true);
            }
            $option.css("border-top", "1px solid #ccc");
            if (options.appendTo) {
                $option.css("position", "inherit");
            }
            $option.find(".ui-select-option-search").find("input").select();
        } else {
            if ($option.attr("data-show")) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
        }
        e.stopPropagation();
    });
    $select.find("li div").click(function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        if (!$(tar).hasClass("bbit-tree-ec-icon")) {
            $option.slideUp(150);
            e.stopPropagation();
        }
    });
    $(document).click(function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        if (!$(tar).hasClass("bbit-tree-ec-icon") && !$(tar).hasClass("form-control")) {
            if ($option.attr("data-show")) {
                $option.hide();
            } else {
                $option.slideUp(150);
            }
            $select.removeClass("ui-select-focus");
            e.stopPropagation();
        }
    });
    return $select;
};
$.fn.ComboBoxTreeSetValue = function (value) {
    if (value == "") {
        return;
    }
    var $select = $(this);
    var $option = $("#" + $select.attr("id") + "-option");
    $select.attr("data-value", value);
    var data_text = $option.find("ul").find("[data-value=" + value + "]").html();
    if (data_text) {
        $select.attr("data-text", data_text);
        $select.find(".ui-select-text").html(data_text).css("color", "#000");
        $option.find("ul").find("[data-value=" + value + "]").parent().parent().addClass("bbit-tree-selected");
    }
    return $select;
};
$.fn.GetWebControls = function (keyValue,ignore) {
    var reVal = "";
    $(this).find("input,select,textarea,.ui-select").not(ignore).each(function (r) {
        var id = $(this).attr("id");
        var type = $(this).attr("type");
        switch (type) {
            case "checkbox":
                if ($("#" + id).is(":checked")) {
                    reVal += "\"" + id + "\"" + ":" + "\"1\",";
                } else {
                    reVal += "\"" + id + "\"" + ":" + "\"0\",";
                }
                break;
            case "select":
                var value = $("#" + id).attr("data-value");
                if (value == "") {
                    value = "&nbsp;";
                }
                reVal += "\"" + id + "\"" + ":" + "\"" + $.trim(value) + "\",";
                break;
            case "selectTree":
                var value = $("#" + id).attr("data-value");
                if (value == "") {
                    value = "&nbsp;";
                }
                reVal += "\"" + id + "\"" + ":" + "\"" + $.trim(value) + "\",";
                break;
            default:
                var value = $("#" + id).val();
                if (value == "") {
                    value = "&nbsp;";
                }
                reVal += "\"" + id + "\"" + ":" + "\"" + $.trim(value) + "\",";
                break;
        }
    });
    reVal = reVal.substr(0, reVal.length - 1);
    if (!keyValue) {
        reVal = reVal.replace(/&nbsp;/g, "");
    }
    reVal = reVal.replace(/\\/g, "\\\\");
    reVal = reVal.replace(/\n/g, "\\n");
    var postdata = jQuery.parseJSON("{" + reVal + "}");
    //阻止伪造请求
    //if ($('[name=__RequestVerificationToken]').length > 0) {
    //    postdata["__RequestVerificationToken"] = $('[name=__RequestVerificationToken]').val();
    //}
    return postdata;
};
$.fn.SetWebControls = function (data) {
    var $id = $(this);
    for (var key in data) {
        var id = $id.find("#" + key);
        if (id.attr("id")) {
            var type = id.attr("type");
            
            if (id.hasClass("input-datepicker")) {
                type = "datepicker";
            }
            if (!type && id[0] && (id[0].nodeName === "DIV" || id[0].nodeName === "SPAN")) {
                type = id[0].nodeName;
            }
            var value = $.trim(data[key]).replace(/&nbsp;/g, "");
            switch (type) {
                case "checkbox":
                    if (value === 1||value === true) {
                        id.attr("checked", "checked");
                        id.parent().addClass("checked");
                    } else {
                        id.removeAttr("checked");
                    }
                    break;
                case "select":
                    id.ComboBoxSetValue(value);
                    break;
                case "selectTree":
                    id.ComboBoxTreeSetValue(value);
                    break;
                case "datepicker":
                    id.val(formatDate(value, "yyyy-MM-dd"));
                    break;
                case "DIV":
                case "SPAN":
                    id.html(value);
                    break;
                default:
                    id.val(value);
                    break;
            }
        }
    }
};
$.fn.Contextmenu = function () {
    var element = $(this);
    var oMenu = $(".contextmenu");
    $(document).click(function () {
        oMenu.hide();
    });
    $(document).mousedown(function (e) {
        if (3 == e.which) {
            oMenu.hide();
        }
    });
    var aUl = oMenu.find("ul");
    var aLi = oMenu.find("li");
    var showTimer = hideTimer = null;
    var i = 0;
    var maxWidth = maxHeight = 0;
    var aDoc = [document.documentElement.offsetWidth, document.documentElement.offsetHeight];
    oMenu.hide();
    for (i = 0; i < aLi.length; i++) {
        //为含有子菜单的li加上箭头
        aLi[i].getElementsByTagName("ul")[0] && (aLi[i].className = "sub");
        //鼠标移入
        aLi[i].onmouseover = function () {
            var oThis = this;
            var oUl = oThis.getElementsByTagName("ul");
            //鼠标移入样式
            oThis.className += " active";
            //显示子菜单
            if (oUl[0]) {
                clearTimeout(hideTimer);
                showTimer = setTimeout(function () {
                    for (i = 0; i < oThis.parentNode.children.length; i++) {
                        oThis.parentNode.children[i].getElementsByTagName("ul")[0] &&
                        (oThis.parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none");
                    }
                    oUl[0].style.display = "block";
                    oUl[0].style.top = oThis.offsetTop + "px";
                    oUl[0].style.left = oThis.offsetWidth + "px";

                    //最大显示范围					
                    maxWidth = aDoc[0] - oUl[0].offsetWidth;
                    maxHeight = aDoc[1] - oUl[0].offsetHeight;

                    //防止溢出
                    maxWidth < getOffset.left(oUl[0]) && (oUl[0].style.left = -oUl[0].clientWidth + "px");
                    maxHeight < getOffset.top(oUl[0]) && (oUl[0].style.top = -oUl[0].clientHeight + oThis.offsetTop + oThis.clientHeight + "px");
                }, 300);
            }
        };
        //鼠标移出	
        aLi[i].onmouseout = function () {
            var oThis = this;
            var oUl = oThis.getElementsByTagName("ul");
            //鼠标移出样式
            oThis.className = oThis.className.replace(/\s?active/, "");

            clearTimeout(showTimer);
            hideTimer = setTimeout(function () {
                for (i = 0; i < oThis.parentNode.children.length; i++) {
                    oThis.parentNode.children[i].getElementsByTagName("ul")[0] &&
                    (oThis.parentNode.children[i].getElementsByTagName("ul")[0].style.display = "none");
                }
            }, 300);
        };
    }
    //自定义右键菜单
    $(element).bind("contextmenu", function () {
        var event = event || window.event;
        oMenu.show();
        oMenu.css("top", event.clientY + "px");
        oMenu.css("left", event.clientX + "px");
        //最大显示范围
        maxWidth = aDoc[0] - oMenu.width();
        maxHeight = aDoc[1] - oMenu.height();
        //防止菜单溢出
        if (oMenu.offset().top > maxHeight) {
            oMenu.css("top", maxHeight + "px");
        }
        if (oMenu.offset().left > maxWidth) {
            oMenu.css("left", maxWidth + "px");
        }
        return false;
    }).bind("click", function () {
        oMenu.hide();
    });
};
$.fn.panginationEx = function (options) {
    var $pager = $(this);
    if (!$pager.attr("id")) {
        return false;
    }
    var defaults = {
        firstBtnText: "首页",
        lastBtnText: "尾页",
        prevBtnText: "上一页",
        nextBtnText: "下一页",
        showInfo: true,
        showJump: true,
        jumpBtnText: "跳转",
        showPageSizes: true,
        infoFormat: "{start} ~ {end}条，共{total}条",
        sortname: "",
        url: "",
        success: null,
        beforeSend: null,
        complete: null
    };
    var options = $.extend(defaults, options);
    var params = $.extend({ sidx: options.sortname, sord: "asc" }, options.params);
    options.remote = {
        url: options.url, //请求地址
        params: params, //自定义请求参数
        beforeSend: function (XMLHttpRequest) {
            if (options.beforeSend != null) {
                options.beforeSend(XMLHttpRequest);
            }
        },
        success: function (result, pageIndex) {
            //回调函数
            //result 为 请求返回的数据，呈现数据
            if (options.success != null) {
                options.success(result.rows, pageIndex);
            }
        },
        complete: function (XMLHttpRequest, textStatu) {
            if (options.complete != null) {
                options.complete(XMLHttpRequest, textStatu);
            }
            //...
        },
        pageIndexName: "page", //请求参数，当前页数，索引从0开始
        pageSizeName: "rows", //请求参数，每页数量
        totalName: "records" //指定返回数据的总数据量的字段名
    };
    $pager.page(options);
};
$.fn.LeftListShowOfemail = function (options) {
    var $list = $(this);
    if (!$list.attr("id")) {
        return false;
    }
    $list.append("<ul  style=\"padding-top: 10px;\"></ul>");
    var defaults = {
        id: "id",
        name: "text",
        img: "fa fa-file-o",

    };
    var options = $.extend(defaults, options);
    $list.height(options.height);
    $.ajax({
        url: options.url,
        data: options.param,
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            $.each(data, function (i, item) {
                var $_li = $("<li class=\"\" data-value=\"" + item[options.id] + "\"  data-text=\"" + item[options.name] + "\" ><i class=\"" + options.img + "\" style=\"vertical-align: middle; margin-top: -2px; margin-right: 8px; font-size: 14px; color: #666666; opacity: 0.9;\"></i>" + item[options.name] + "</li>");
                if (i == 0) {
                    $_li.addClass("active");
                }
                $list.find("ul").append($_li);
            });
            $list.find("li").click(function () {
                var key = $(this).attr("data-value");
                var value = $(this).attr("data-text");
                $list.find("li").removeClass("active");
                $(this).addClass("active");
                options.onnodeclick({ id: key, name: value });
            });
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.fn.modalMsg(errorThrown, "warning");
        }
    });
};
$.fn.authorizeButton = function () {
    var $element = $(this);
    $element.find("a.btn").attr("authorize", "no");
    $element.find("ul.dropdown-menu").find("li").attr("authorize", "no");
    var moduleId = tabiframeId().substring(11);

    $.getJSON("/SysMgr/PermissionUserMgr/GetUserPermissionButtonsByModuleId", { moduleId: moduleId }, function (data) {
        if (data) {
            $.each(data, function(i) {
                $element.find("." + data[i].EnCode).attr("authorize", "yes");
            });
        }
        $element.find("[authorize=no]").remove();
       
    });
};
$.fn.authorizeColModel = function () {
    var $element = $(this);
    var columnModel = $element.jqGrid("getGridParam", "colModel");
    $.each(columnModel, function (i) {
        if (columnModel[i].name != "rn") {
            $element.hideCol(columnModel[i].name);
        }
    });
    var moduleId = tabiframeId().substr(6);
    var data = top.authorizeColumnData[moduleId];
    if (data != undefined) {
        $.each(data, function (i) {
            $element.showCol(data[i].F_EnCode);
        });
    }
};
$.fn.jqGridEx = function (options) {
    var $jqGrid = $(this);
    var _selectedRowIndex;
    if (!$jqGrid.attr("id")) {
        return false;
    }
    var defaults = {
        url: "",
        datatype: "json",
        height: $(window).height() - 139.5,
        autowidth: true,
        colModel: [],
        viewrecords: true,
        rowNum: 30,
        rowList: [30, 50, 100],
        pager: "#gridPager",
        sortname: "CreationTime desc",
        rownumbers: true,
        shrinkToFit: false,
        gridview: true,
        onSelectRow: function () {
            _selectedRowIndex = $("#" + this.id).getGridParam("selrow");
        },
        gridComplete: function () {
            $("#" + this.id).setSelection(_selectedRowIndex, false);
        }
    };
    var options = $.extend(defaults, options);
    $jqGrid.jqGrid(options);
};
$.fn.jqGridRowValue = function (code) {
    var $jgrid = $(this);
    var json = [];
    var selectedRowIds = $jgrid.jqGrid("getGridParam", "selarrrow");
    if (selectedRowIds != undefined && selectedRowIds != "") {
        var len = selectedRowIds.length;
        for (var i = 0; i < len; i++) {
            var rowData = $jgrid.jqGrid("getRowData", selectedRowIds[i]);
            json.push(rowData[code]);
        }
    } else {
        var rowData = $jgrid.jqGrid("getRowData", $jgrid.jqGrid("getGridParam", "selrow"));
        json.push(rowData[code]);
    }
    return String(json);
};
$.fn.jqGridRow = function () {
    var $jgrid = $(this);
    var json = [];
    var selectedRowIds = $jgrid.jqGrid("getGridParam", "selarrrow");
    if (selectedRowIds != "") {
        var len = selectedRowIds.length;
        for (var i = 0; i < len; i++) {
            var rowData = $jgrid.jqGrid("getRowData", selectedRowIds[i]);
            json.push(rowData);
        }
    } else {
        var rowData = $jgrid.jqGrid("getRowData", $jgrid.jqGrid("getGridParam", "selrow"));
        json.push(rowData);
    }
    return json;
};

$.fn.modalOpen = function (options) {
    var defaults = {
        id: null,
        title: '系统窗口',
        width: "100px",
        height: "100px",
        url: '',
        shade: 0.3,
        btn: ['确认', '关闭'],
       // btnclass: ['btn btn-primary', 'btn btn-danger'],
        callBack: null,
        allowOverParent: false
    };
    var options = $.extend(defaults, options);
    var _width = options.width, _height = options.height;
    if (!options.allowOverParent) {
        _width = top.$(window).width() > parseInt(options.width.replace('px', '')) ? options.width : top.$(window).width() + 'px';
        _height = top.$(window).height() > parseInt(options.height.replace('px', '')) ? options.height : top.$(window).height() + 'px';
    }

    top.layer.open({
        id: options.id,
        type: 2,
        shade: options.shade,
        title: options.title,
        fix: false,
        area: [_width, _height],
        content: options.url,
        btn: options.btn,
        btnclass: options.btnclass,
        yes: function (index) {
            options.callBack("layui-layer-iframe" + index)
        }, cancel: function (index) {
            if (options.cancelCallBack) {
                options.cancelCallBack("layui-layer-iframe" + index);
            }
            return true;
        }
    });
}
$.fn.modalConfirm = function (content, callBack) {
    top.layer.confirm(content, {
        icon: 3,
        title: "系统提示",
        btn: ['确认', '取消'],
      //  btnclass: ['btn btn-primary', 'btn btn-danger'],
    }, function () {
        callBack(true);
    }, function () {
        callBack(false)
    });
}

$.fn.modalAlert = function (content, type) {
    var icon = "";
    var iconType = 0;
    if (type == 'success') {
        icon = "fa-check-circle";
        iconType = 1;
    }
    if (type == 'error') {
        icon = "fa-times-circle";
        iconType = 2;
    }
    if (type == 'warning') {
        icon = "fa-exclamation-circle";
        iconType = 3;
    }
    top.layer.alert(content, {
        icon: iconType,
        title: "系统提示",
        btn: ['确认'],
      //  btnclass: ['btn btn-primary'],
    });
}
$.fn.modalMsg = function (content, type) {
    var iconType = 0;
    if (type != undefined) {
        var icon = "";
        if (type == 'success') {
            icon = "fa-check-circle";
            iconType = 1;
        }
        if (type == 'error') {
            icon = "fa-times-circle";
            iconType = 2;
        }
        if (type == 'warning') {
            icon = "fa-exclamation-circle";
            iconType = 3;
        }
        top.layer.msg(content, { icon: iconType, time: 4000, shift: 5 });
        top.$(".layui-layer-msg").find('i.' + iconType).parents('.layui-layer-msg').addClass('layui-layer-msg-' + type);
    } else {
        top.layer.msg(content);
    }
}
$.fn.modalClose = function () {
    var index = top.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
    var $IsdialogClose = top.$("#layui-layer" + index).find('.layui-layer-btn').find("#IsdialogClose");
    var IsClose = $IsdialogClose.is(":checked");
    if ($IsdialogClose.length == 0) {
        IsClose = true;
    }
    if (IsClose) {
        top.layer.close(index);
    } else {
        location.reload();
    }
}
$.fn.submitForm = function (options) {
    var defaults = {
        url: "",
        param: [],
        loading: "正在提交数据...",
        success: null,
        close: true
    };
    var options = $.extend(defaults, options);
    $.loading(true, options.loading);
    window.setTimeout(function () {

        $.ajax({
            url: options.url,
            data: options.param,
            type: "post",
            dataType: "json",
            success: function (data) {
                if (data.IsSucceeded==true) {
                    options.success(data);
                    $.fn.modalMsg(data.Message, "success");
                    if (options.close == true) {
                        $.fn.modalClose();
                    }
                } else {
                    $.fn.modalAlert(data.Message, "danger");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.loading(false);
                $.fn.modalMsg(errorThrown, "error");
            },
            beforeSend: function () {
                $.loading(true, options.loading);
            },
            complete: function () {
                $.loading(false);
            }
        });
    }, 500);
}
//提交ajax请求
$.fn.submitAjax = function (options) {
   
    App.blockUI({
        target: options.target,
        boxed: true,
        message: '加载中'//,
        // animate: true
    });
        window.setTimeout(function () {
            $.ajax({
                url: options.url,
                data: options.param,
                type: "post",
                dataType: "json",
                success: function (data) {
                    if (data.IsSucceeded == true) {
                        options.success(data);
                    } else {
                        $.fn.modalAlert(data.Message, "danger");
                    }
                },
                error: function (xmlHttpRequest, textStatus, errorThrown) {
                    App.unblockUI(options.target);
                    $.fn.modalMsg(errorThrown, "error");
                },
                beforeSend: function () {
                    App.unblockUI(options.target);
                },
                complete: function () {
                    App.unblockUI(options.target);
                }
            });
        }, 500); 
}
$.fn.deleteForm = function (options) {
    var defaults = {
        prompt: "注：您确定要删除该项数据吗？",
        url: "",
        param: [],
        loading: "正在删除数据...",
        success: null,
        close: true
    };
    var options = $.extend(defaults, options);
    $.fn.modalConfirm(options.prompt, function (r) {
        if (r) {
            $.loading(true, options.loading);
            window.setTimeout(function () {
                $.ajax({
                    url: options.url,
                    data: options.param,
                    type: "post",
                    dataType: "json",
                    success: function (data) {
                        if (data.IsSucceeded==true) {
                            options.success(data);
                            $.fn.modalMsg(data.Message, "success");
                        } else {
                            $.fn.modalAlert(data.Message, "danger");
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $.loading(false);
                        $.fn.modalMsg(errorThrown, "error");
                    },
                    beforeSend: function () {
                        $.loading(true, options.loading);
                    },
                    complete: function () {
                        $.loading(false);
                    }
                });
            }, 500);
        }
    });

}
$.fn.request = function (name) {
    var search = location.search.slice(1);
    var arr = search.split("&");
    for (var i = 0; i < arr.length; i++) {
        var ar = arr[i].split("=");
        if (ar[0] == name) {
            if (unescape(ar[1]) == 'undefined') {
                return "";
            } else {
                return unescape(ar[1]);
            }
        }
    }
    return "";
}
$.fn.setForm = function (options) {
    var defaults = {
        url: "",
        param: [],
        type: "get",
        dataType: "json",
        success: null,
        async: false
    };
    var options = $.extend(defaults, options);
    $.ajax({
        url: options.url,
        data: options.param,
        type: options.type,
        dataType: options.dataType,
        async: options.async,
        success: function (data) {
            if (data != null && data.type == "3") {

                $.fn.modalAlert(data.meesage, "danger");
            } else {
                options.success(data);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.fn.modalAlert(errorThrown, "danger");
        }, beforeSend: function () {
            $.loading(true);
        },
        complete: function () {
            $.loading(false);
        }
    });
}
$.fn.existField = function (controlId, url, param) {
    var $control = $("#" + controlId);
    if (!$control.val()) {
        return false;
    }
    var data = {
        keyValue: $.fn.request('keyValue')
    };
    data[controlId] = $control.val();
    var options = $.extend(data, param);
    $.ajax({
        url: url,
        data: options,
        type: "get",
        dataType: "text",
        async: false,
        success: function (data) {
            if (data.toLocaleLowerCase() == 'false') {
                ValidationMessage($control, '已存在,请重新输入');
                $control.attr('fieldexist', 'yes');
            } else {
                $control.attr('fieldexist', 'no');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.fn.modalMsg(errorThrown, "warning");
        }
    });
}
$.fn.confirmAjax = function (options) {
    var defaults = {
        msg: "提示信息",
        loading: "正在处理数据...",
        url: "",
        param: [],
        type: "post",
        dataType: "json",
        success: null
    };
    var options = $.extend(defaults, options);
    $.fn.modalConfirm(options.msg, function (r) {
        if (r) {
            $.loading(true, options.loading);
            window.setTimeout(function () {
                var postdata = options.param;

                $.ajax({
                    url: options.url,
                    data: postdata,
                    type: options.type,
                    dataType: options.dataType,
                    success: function (data) {
                        $.loading(false);
                        if (data.type == "3") {
                            $.fn.modalAlert(data.Message, "warning");
                        } else {
                            $.fn.modalMsg(data.Message, "warning");
                            options.success(data);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        $.loading(false);
                        $.fn.modalMsg(errorThrown, "warning");
                    },
                    beforeSend: function () {
                        $.loading(true, options.loading);
                    },
                    complete: function () {
                        $.loading(false);
                    }
                });
            }, 200);
        }
    });
}

reload = function () {
    location.reload();
    return false;
};
newGuid = function () {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) guid += "-";
    }
    return guid;
};
formatDate = function (v, format) {
    if (!v) return "";
    var d = v;
    if (typeof v === "string") {
        if (v.indexOf("/Date(") > -1)
            d = new Date(parseInt(v.replace("/Date(", "").replace(")/", ""), 10));
        else
            d = new Date(Date.parse(v.replace(/-/g, "/").replace("T", " ").split(".")[0])); //.split(".")[0] 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
    }
    var o = {
        "M+": d.getMonth() + 1, //month
        "d+": d.getDate(), //day
        "h+": d.getHours(), //hour
        "m+": d.getMinutes(), //minute
        "s+": d.getSeconds(), //second
        "q+": Math.floor((d.getMonth() + 3) / 3), //quarter
        "S": d.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};
toDecimal = function (num) {
    if (num == null) {
        num = "0";
    }
    num = num.toString().replace(/\$|\,/g, "");
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + "" +
            num.substring(num.length - (4 * i + 3));
    return (((sign) ? "" : "-") + num + "." + cents);
};
Date.prototype.DateAdd = function (strInterval, Number) {
    //y年 q季度 m月 d日 w周 h小时 n分钟 s秒 ms毫秒
    var dtTmp = this;
    switch (strInterval) {
        case "s":
            return new Date(Date.parse(dtTmp) + (1000 * Number));
        case "n":
            return new Date(Date.parse(dtTmp) + (60000 * Number));
        case "h":
            return new Date(Date.parse(dtTmp) + (3600000 * Number));
        case "d":
            return new Date(Date.parse(dtTmp) + (86400000 * Number));
        case "w":
            return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
        case "q":
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case "m":
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case "y":
            return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    }
};
request = function (keyValue) {
    var search = location.search.slice(1);
    var arr = search.split("&");
    for (var i = 0; i < arr.length; i++) {
        var ar = arr[i].split("=");
        if (ar[0] == keyValue) {
            if (unescape(ar[1]) == "undefined") {
                return "";
            } else {
                return unescape(ar[1]);
            }
        }
    }
    return "";
};
changeUrlParam = function (url, key, value) {
    var newUrl = "";
    var reg = new RegExp("(^|)" + key + "=([^&]*)(|$)");
    var tmp = key + "=" + value;
    if (url.match(reg) != null) {
        newUrl = url.replace(eval(reg), tmp);
    } else {
        if (url.match("[\?]")) {
            newUrl = url + "&" + tmp;
        } else {
            newUrl = url + "?" + tmp;
        }
    }
    return newUrl;
};
$.currentIframe = function () {
    if ($.isbrowsername() == "Chrome" || $.isbrowsername() == "FF") {
        return top.frames[tabiframeId()].contentWindow;
    } else {
        return top.frames[tabiframeId()];
    }
};

$.isbrowsername = function () {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera";
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        if (window.navigator.webkitPersistentStorage.toString().indexOf("DeprecatedStorageQuota") > -1) {
            return "Chrome";
        } else {
            return "360";
        }
    } //判断是否Chrome浏览器//360浏览器
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
};
$.download = function (url, data, method) {
    if (url && data) {
        data = typeof data == "string" ? data : jQuery.param(data);
        var inputs = "";
        $.each(data.split("&"), function () {
            var pair = this.split("=");
            inputs += "<input type=\"hidden\" name=\"" + pair[0] + "\" value=\"" + pair[1] + "\" />";
        });
        $("<form action=\"" + url + "\" method=\"" + (method || "post") + "\">" + inputs + "</form>").appendTo("body").submit().remove();
    };
};
$.standTabchange = function (object, forid) {
    $(".standtabactived").removeClass("standtabactived");
    $(object).addClass("standtabactived");
    $(".standtab-pane").css("display", "none");
    $("#" + forid).css("display", "block");
};
$.isNullOrEmpty = function (obj) {
    if ((typeof (obj) == "string" && obj == "") || obj == null || obj == undefined) {
        return true;
    } else {
        return false;
    }
};
$.arrayClone = function (data) {
    return $.map(data, function (obj) {
        return $.extend(true, {}, obj);
    });
};
$.windowWidth = function () {
    return $(window).width();
};
$.windowHeight = function () {
    return $(window).height();
};
IsNumber = function (obj) {
    $("#" + obj).bind("contextmenu", function () {
        return false;
    });
    $("#" + obj).css("ime-mode", "disabled");
    $("#" + obj).keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
};
IsMoney = function (obj) {
    $("#" + obj).bind("contextmenu", function () {
        return false;
    });
    $("#" + obj).css("ime-mode", "disabled");
    $("#" + obj).bind("keydown", function (e) {
        var key = window.event ? e.keyCode : e.which;
        if (isFullStop(key)) {
            return $(this).val().indexOf(".") < 0;
        }
        return (isSpecialKey(key)) || ((isNumber(key) && !e.shiftKey));
    });

    function isNumber(key) {
        return key >= 48 && key <= 57;
    }

    function isSpecialKey(key) {
        return key == 8 || key == 46 || (key >= 37 && key <= 40) || key == 35 || key == 36 || key == 9 || key == 13;
    }

    function isFullStop(key) {
        return key == 190 || key == 110;
    }
};
checkedArray = function (id) {
    var isOK = true;
    if (id == undefined || id == "" || id == "null" || id == "undefined") {
        isOK = false;
        $.fn.modalMsg("您没有选中任何项,请您选中后再操作。", "warning");
    }
    return isOK;
};
checkedRow = function (id) {
    var isOK = true;
    if (id == undefined || id == "" || id == "null" || id == "undefined") {
        isOK = false;
        $.fn.modalMsg("您没有选中任何项,请您选中后再操作。", "warning");
    } else if (id.split(",").length > 1) {
        isOK = false;

        $.fn.modalMsg("很抱歉,一次只能选择一条记录！", "warning");
    }
    return isOK;
};


getQueryString=function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}