/**
  * @description {Class} wdTree
  * This is the main class of wdTree.法法师法
  */
(function ($) {
    $.fn.swapClass = function (c1, c2) {
        return this.removeClass(c1).addClass(c2);
    };
    $.fn.switchClass = function (c1, c2) {
        if (this.hasClass(c1)) {
            return this.swapClass(c1, c2);
        }
        else {
            return this.swapClass(c2, c1);
        }
    };
    $.fn.treeview = function (settings) {
        var dfop =
            {
                method: "GET",
                datatype: "json",
                /**
                 * @description {Config} url  
                 * {String} Url for child nodes retrieving. 
                 */
                url: false,
                param: null,
                /**
                 * @description {Config} cbiconpath  
                 * {String} Checkbox image path.
                 */
                cbiconpath: "/content/plugins/wdtree/images/icons/",
                icons: ["checkbox_0.png", "checkbox_1.png", "checkbox_2.png"],
                /**
                 * @description {Config} showcheck  
                 * {Boolean} Whether to show check box or not. 
                 */
                showcheck: false,
                /**
	 	             * @description {Event} oncheckboxclick:function(tree, item, status)
	 	             * Fired when check box is clicked on.
	 	             * @param {Object} tree This tree object. 
	 	             * @param {Object} item Node item clicked on.
	 	             * @param {Number} status 1 for checked, 0 for unchecked.	 	             
	               */
                oncheckboxclick: false,
                /**
	 	             * @description {Event} onnodeclick:function(tree, item)
	 	             * Fired when a node is clicked on.
	 	             * @param {Object} tree This tree object. 
	 	             * @param {Object} item Ndde item clicked on.
	               */
                onnodeclick: false,
                /**
                 * @description {Config} cascadecheck  
                 * {Boolean} Whether node being seleted leads to parent/sub node being selected.  
                 */
                cascadecheck: true,
                /**
                 * @description {Config} data  
                 * {Object} Tree theme. Three themes provided. 'bbit-tree-lines' ,'bbit-tree-no-lines' and 'bbit-tree-arrows'.
                 * @sample 
                 * data:[{
                 * id:"node1", //node id
                 * text:"node 1", //node text for display.
                 * value:"1", //node value
                 * showcheck:false, //whether to show checkbox
                 * checkstate:0, //Checkbox checking state. 0 for unchecked, 1 for partial checked, 2 for checked.
                 * hasChildren:true, //If hasChildren and complete set to true, and ChildNodes is empty, tree will request server to get sub node.
                 * isexpand:false, //Expand or collapse.
                 * complete:false, //See hasChildren.
                 * ChildNodes:[] // child nodes
                 * }]                  
                 *  */
                data: null,
                /**
                 * @description {Config} clicktoggle  
                 * {String} Whether to toggle node when node clicked. 
                 */
                clicktoggle: true,
                /**
                 * @description {Config} theme  
                 * {String} Tree theme. Three themes provided. 'bbit-tree-lines' ,'bbit-tree-no-lines' and 'bbit-tree-arrows'. 
                 */
                theme: "bbit-tree-arrows", //bbit-tree-lines ,bbit-tree-no-lines,bbit-tree-arrows
                /*
                *显示工具栏
                */
                isTool: false,
                nodeTools: []
            };

        $.extend(dfop, settings);
        var treenodes = dfop.data;
        var me = $(this);
        var id = me.attr("id");
        if (id == null || id == "") {
            id = "bbtree" + new Date().getTime();
            me.attr("id", id);
        }
        me.height(dfop.height);
        if (dfop.slimscroll == true) {
            //me.slimScroll({ height: dfop.height });
            me.css({ "overflow": "auto", "overflow-y": "hidden" });
        } else {
            me.css({ "overflow": "auto" });
        }
        var html = [];
        buildtree(dfop.data, html);
        me.html('');
        me.addClass("bbit-tree").append(html.join(""));
        InitEvent(me);
        html = null;
        //pre load the icons
        if (dfop.showcheck) {
            for (var i = 0; i < 3; i++) {
                var im = new Image();
                im.src = dfop.cbiconpath + dfop.icons[i];
            }
        }

        //region 
        function buildtree(data, ht) {
            ht.push("<div class='bbit-tree-bwrap'>"); // Wrap ;
            ht.push("<div class='bbit-tree-body " + id + "'>"); // body ;
            ht.push("<ul class='bbit-tree-root ", dfop.theme, "'>"); //root
            if (data && data.length > 0) {
                var l = data.length;
                for (var i = 0; i < l; i++) {
                    buildnode(data[i], ht, 0, i, i == l - 1);
                }
            }
            else {
                asnyloadc(null, false, function (data) {
                    if (data && data.length > 0) {
                        treenodes = data;
                        dfop.data = data;
                        if (dfop.description) {
                            data.unshift({
                                "id": "",
                                "text": dfop.description,
                                "value": "",
                                "img": "-1",
                                "parentnodes": "0",
                                "showcheck": false,
                                "isexpand": true,
                                "complete": true,
                                "hasChildren": false,
                                "ChildNodes": []
                            });
                        }
                        var l = data.length;
                        for (var i = 0; i < l; i++) {
                            buildnode(data[i], ht, 0, i, i == l - 1);
                        }
                    }
                });
            }
            ht.push("</ul>"); // root and;
            ht.push("</div>"); // body end;
            ht.push("</div>"); // Wrap end;
        }
        //endregion
        function buildnode(nd, ht, deep, path, isend) {
            var nid = nd.id.replace(/[^\w]/gi, "_");
            ht.push("<li class='bbit-tree-node'>");
            var title = nd.title;
            if (title) {
                title = nd.title;
            } else {
                title = nd.text;
            }
            ht.push("<div id='", id, "_", nid, "' tpath='", path, "' unselectable='on' title='", title, "'");
            var cs = [];
            cs.push("bbit-tree-node-el");
            if (nd.hasChildren) {
                cs.push(nd.isexpand ? "bbit-tree-node-expanded" : "bbit-tree-node-collapsed");
            }
            else {
                cs.push("bbit-tree-node-leaf");
            }
            if (nd.classes) { cs.push(nd.classes); }

            ht.push(" class='", cs.join(" "), "'>");
            //span indent
            ht.push("<span class='bbit-tree-node-indent'>");
            if (deep == 1) {
                ht.push("<img class='bbit-tree-icon' src='" + dfop.cbiconpath + "s.gif'/>");
            }
            else if (deep > 1) {
                ht.push("<img class='bbit-tree-icon' src='" + dfop.cbiconpath + "s.gif'/>");
                for (var j = 1; j < deep; j++) {
                    ht.push("<img class='bbit-tree-elbow-line' src='" + dfop.cbiconpath + "s.gif'/>");
                }
            }
            ht.push("</span>");
            //img
            cs.length = 0;
            if (nd.hasChildren) {
                if (nd.isexpand) {
                    cs.push(isend ? "bbit-tree-elbow-end-minus" : "bbit-tree-elbow-minus");
                }
                else {
                    cs.push(isend ? "bbit-tree-elbow-end-plus" : "bbit-tree-elbow-plus");
                }
            }
            else {
                cs.push(isend ? "bbit-tree-elbow-end" : "bbit-tree-elbow");
            }
            ht.push("<img class='bbit-tree-ec-icon ", cs.join(" "), "' src='" + dfop.cbiconpath + "s.gif'/>");

            //checkbox
            if (dfop.showcheck && nd.showcheck) {
                if (nd.checkstate == null || nd.checkstate == undefined) {
                    nd.checkstate = 0;
                }
                ht.push("<img  id='", id, "_", nid, "_cb' class='bbit-tree-node-cb' src='", dfop.cbiconpath, dfop.icons[nd.checkstate], "'/>");
            }

            if (nd.hasChildren) {
                if (nd.img == -1) {
                    ht.push("");
                } else
                    if (!!nd.img) {
                        ht.push("<i class=\"" + nd.img + "\"></i>&nbsp;");
                    } else {
                        ht.push("<i class=\"fa fa-folder-open\" style='width:15px'>&nbsp;</i>");
                    }
            } else {
                if (nd.img == -1) {
                    ht.push("");
                } else
                    if (!!nd.img) {
                        ht.push("<i class=\"" + nd.img + "\"></i>&nbsp;");
                    } else {
                        ht.push("<i class=\"fa fa-file-o\"></i>&nbsp;");
                    }
            }

            //a
            ht.push("<a hideFocus class='bbit-tree-node-anchor' tabIndex=1 href='javascript:void(0);'>");
            ht.push("<span data-value='" + nd.id + "' class='bbit-tree-node-text' unselectable='on'>", nd.text, "</span>");
            ht.push("</a>");

            //tool 显示工具栏
            if (dfop.isTool) {
                ht.push("<div class='bbit-tree-node-tool'>");
                for (var ii in dfop.nodeTools) {
                    var toolItem = dfop.nodeTools[ii];
                    ht.push("<span class='" + toolItem.img + "' title='" + toolItem.text + "'></span>");
                }
                ht.push("</div>");
            }



            ht.push("</div>");
            //Child
            if (nd.hasChildren) {
                if (nd.isexpand) {
                    ht.push("<ul  class='bbit-tree-node-ct'  style='z-index: 0; position: static; visibility: visible; top: auto; left: auto;'>");
                    if (nd.ChildNodes) {
                        var l = nd.ChildNodes.length;
                        for (var k = 0; k < l; k++) {
                            nd.ChildNodes[k].parent = nd;
                            buildnode(nd.ChildNodes[k], ht, deep + 1, path + "." + k, k == l - 1);
                        }
                    }
                    ht.push("</ul>");
                }
                else {
                    ht.push("<ul style='display:none;'>");
                    if (nd.ChildNodes) {
                        var l = nd.ChildNodes.length;
                        for (var k = 0; k < l; k++) {
                            nd.ChildNodes[k].parent = nd;
                            buildnode(nd.ChildNodes[k], ht, deep + 1, path + "." + k, k == l - 1);
                        }
                    }
                    ht.push("</ul>");
                }
            }
            ht.push("</li>");
            nd.render = true;
        }
        function getItem(path) {
            var ap = path.split(".");
            var t = treenodes;
            for (var i = 0; i < ap.length; i++) {
                if (i == 0) {
                    t = t[ap[i]];
                }
                else {
                    t = t.ChildNodes[ap[i]];
                }
            }
            return t;
        }
        function check(item, state, type) {
            var pstate = item.checkstate;
            if (type == 1) {
                item.checkstate = state;
            }
            else {// go to childnodes
                var cs = item.ChildNodes;
                var l = cs.length;
                var ch = true;
                for (var i = 0; i < l; i++) {
                    if ((state == 1 && cs[i].checkstate != 1) || state == 0 && cs[i].checkstate != 0) {
                        ch = false;
                        break;
                    }
                }
                if (ch) {
                    item.checkstate = state;
                }
                else {
                    item.checkstate = 2;
                }
            }
            //change show
            if (item.render && pstate != item.checkstate) {
                var nid = item.id.replace(/[^\w]/gi, "_");
                var et = $("#" + id + "_" + nid + "_cb");
                if (et.length == 1) {
                    et.attr("src", dfop.cbiconpath + dfop.icons[item.checkstate]);
                }
            }
        }
        //iterate all children nodes
        function cascade(fn, item, args) {
            if (fn(item, args, 1) != false) {
                if (item.ChildNodes != null && item.ChildNodes.length > 0) {
                    var cs = item.ChildNodes;
                    for (var i = 0, len = cs.length; i < len; i++) {
                        cascade(fn, cs[i], args);
                    }
                }
            }
        }
        //bubble to parent
        function bubble(fn, item, args) {
            var p = item.parent;
            while (p) {
                if (fn(p, args, 0) === false) {
                    break;
                }
                p = p.parent;
            }
        }
        function nodeclick(e) {
            var path = $(this).attr("tpath");
            var et = e.target || e.srcElement;
            var item = getItem(path);
            if (et.tagName == "IMG") {
                //+ if collapsed, expend it 
                if ($(et).hasClass("bbit-tree-elbow-plus") || $(et).hasClass("bbit-tree-elbow-end-plus")) {
                    if ($(this).find('i').hasClass('fa-folder')) {
                        $(this).find('i').swapClass('fa-folder', 'fa-folder-open');
                    }
                    var ul = $(this).next(); //"bbit-tree-node-ct"
                    if (ul.hasClass("bbit-tree-node-ct")) {
                        ul.slideDown(200);
                    }
                    else {
                        var deep = path.split(".").length;
                        if (item.complete) {
                            item.ChildNodes != null && asnybuild(item.ChildNodes, deep, path, ul, item);
                        }
                        else {
                            $(this).addClass("bbit-tree-node-loading");
                            asnyloadc(item, true, function (data) {
                                item.complete = true;
                                item.ChildNodes = data;
                                asnybuild(data, deep, path, ul, item);
                            });
                        }
                    }
                    if ($(et).hasClass("bbit-tree-elbow-plus")) {
                        $(et).swapClass("bbit-tree-elbow-plus", "bbit-tree-elbow-minus");
                    }
                    else {
                        $(et).swapClass("bbit-tree-elbow-end-plus", "bbit-tree-elbow-end-minus");
                    }
                    $(this).swapClass("bbit-tree-node-collapsed", "bbit-tree-node-expanded");
                }
                    //if expended, collapse it
                else if ($(et).hasClass("bbit-tree-elbow-minus") || $(et).hasClass("bbit-tree-elbow-end-minus")) {
                    if ($(this).find('i').hasClass('fa-folder-open')) {
                        $(this).find('i').swapClass('fa-folder-open', 'fa-folder');
                    }
                    $(this).next().slideUp(200);
                    if ($(et).hasClass("bbit-tree-elbow-minus")) {
                        $(et).swapClass("bbit-tree-elbow-minus", "bbit-tree-elbow-plus");
                    }
                    else {
                        $(et).swapClass("bbit-tree-elbow-end-minus", "bbit-tree-elbow-end-plus");
                    }
                    $(this).swapClass("bbit-tree-node-expanded", "bbit-tree-node-collapsed");
                }
                else if ($(et).hasClass("bbit-tree-node-cb")) // click on checkbox
                {
                    var s = item.checkstate != 1 ? 1 : 0;
                    var r = true;
                    if (dfop.oncheckboxclick) {
                        r = dfop.oncheckboxclick.call(et, item, s);
                    }
                    if (r != false) {
                        if (dfop.cascadecheck) {
                            cascade(check, item, s);
                            bubble(check, item, s);
                        }
                        else {
                            check(item, s, 1);
                        }
                    }
                }
            }
            else {
                if (dfop.citem) {
                    var nid = dfop.citem.id.replace(/[^\w]/gi, "_");
                    $("." + id).removeClass("bbit-tree-selected");
                }
                dfop.citem = item;
                $("." + id).find('div').removeClass("bbit-tree-selected");
                $(this).addClass("bbit-tree-selected");
                if (dfop.onnodeclick) {
                    if (!item.expand) {
                        item.expand = function () { expandnode.call(item); };
                    }
                    dfop.onnodeclick.call(this, item);
                }
            }
        }
        function expandnode() {
            var item = this;
            var nid = item.id.replace(/[^\w]/gi, "_");
            var img = $("#" + id + "_" + nid + " img.bbit-tree-ec-icon");
            if (img.length > 0) {
                img.click();
            }
        }
        function asnybuild(nodes, deep, path, ul, pnode) {
            var l = nodes.length;
            if (l > 0) {
                var ht = [];
                for (var i = 0; i < l; i++) {
                    nodes[i].parent = pnode;
                    buildnode(nodes[i], ht, deep, path + "." + i, i == l - 1);
                }
                ul.html(ht.join(""));
                ht = null;
                InitEvent(ul);
            }
            ul.addClass("bbit-tree-node-ct").css({ "z-index": 0, position: "static", visibility: "visible", top: "auto", left: "auto", display: "" });
            ul.prev().removeClass("bbit-tree-node-loading");
        }
        function asnyloadc(pnode, isAsync, callback) {
            if (dfop.url) {
                if (pnode && pnode != null)
                    var param = builparam(pnode);
                if (dfop.param != null) {
                    var param = dfop.param
                }
                $.ajax({
                    type: dfop.method,
                    url: dfop.url,
                    data: param,
                    async: isAsync,
                    dataType: dfop.datatype,
                    success: callback,
                    error: function (e) { dialogMsg("服务端未响应。", -1); }
                });
            }
        }
        function builparam(node) {
            var p = [{ name: "id", value: encodeURIComponent(node.id) }
                    , { name: "text", value: encodeURIComponent(node.text) }
                    , { name: "value", value: encodeURIComponent(node.value) }
                    , { name: "checkstate", value: node.checkstate }];
            return p;
        }
        function bindevent() {
            $(this).hover(function () {
                $(this).addClass("bbit-tree-node-over");
            }, function () {
                $(this).removeClass("bbit-tree-node-over");
            }).click(nodeclick)
             .find("img.bbit-tree-ec-icon").each(function (e) {
                 if (!$(this).hasClass("bbit-tree-elbow")) {
                     $(this).hover(function () {
                         $(this).parent().addClass("bbit-tree-ec-over");
                     }, function () {
                         $(this).parent().removeClass("bbit-tree-ec-over");
                     });
                 }
             });
        }
        function InitEvent(parent) {
            var nodes = $("li.bbit-tree-node>div", parent);
            nodes.each(bindevent);
        }
        function reflash(itemId) {
            var nid = itemId.replace(/[^\w-]/gi, "_");
            var node = $("#" + id + "_" + nid);
            if (node.length > 0) {
                node.addClass("bbit-tree-node-loading");
                var isend = node.hasClass("bbit-tree-elbow-end") || node.hasClass("bbit-tree-elbow-end-plus") || node.hasClass("bbit-tree-elbow-end-minus");
                var path = node.attr("tpath");
                var deep = path.split(".").length;
                var item = getItem(path);
                if (item) {
                    asnyloadc(item, true, function (data) {

                        item.complete = true;
                        item.ChildNodes = data;
                        item.isexpand = true;
                        if (data && data.length > 0) {
                            item.hasChildren = true;
                        }
                        else {
                            item.hasChildren = false;
                        }
                        var ht = [];
                        buildnode(item, ht, deep - 1, path, isend);
                        ht.shift();
                        ht.pop();
                        var li = node.parent();
                        li.html(ht.join(""));
                        ht = null;
                        InitEvent(li);
                        bindevent.call(li.find(">div"));
                    });
                }
            }
            else {
                //node not created yet
            }
        }
        function getck(items, c, fn) {
            for (var i = 0, l = items.length; i < l; i++) {
                (items[i].showcheck == true && items[i].checkstate == 1) && c.push(fn(items[i]));
                if (items[i].ChildNodes != null && items[i].ChildNodes.length > 0) {
                    getck(items[i].ChildNodes, c, fn);
                }
            }
        }
        function getCkAndHalfCk(items, c, fn) {
            for (var i = 0, l = items.length; i < l; i++) {
                (items[i].showcheck == true && (items[i].checkstate == 1 || items[i].checkstate == 2)) && c.push(fn(items[i]));
                if (items[i].ChildNodes != null && items[i].ChildNodes.length > 0) {
                    getCkAndHalfCk(items[i].ChildNodes, c, fn);
                }
            }
        }
        me[0].t = {
            getSelectedNodes: function (gethalfchecknode) {
                var s = [];
                if (gethalfchecknode) {
                    getCkAndHalfCk(treenodes, s, function (item) { return item; });
                }
                else {
                    getck(treenodes, s, function (item) { return item; });
                }
                return s;
            },
            getSelectedValues: function () {
                var s = [];
                getck(treenodes, s, function (item) { return item.value; });
                return s;
            },
            getCurrentItem: function () {
                return dfop.citem;
            },
            reflash: function (itemOrItemId) {
                var id;
                if (typeof (itemOrItemId) == "string") {
                    id = itemOrItemId;
                }
                else {
                    id = itemOrItemId.id;
                }
                reflash(id);
            }
        };
        return me;
    };

    $.fn.getCheckedNodes = function () {
        if (this[0].t) {
            return this[0].t.getSelectedValues();
        }
        return null;
    };
    $.fn.getCheckedAllNodes = function () {
        var $id = $(this);
        var _length = $id.attr('id').trim().length + 1;
        var value = []
        $id.find('.bbit-tree-node-cb').each(function () {
            var _src = $(this).attr('src');
            _src = _src.substr(_src.lastIndexOf("/") + 1);
            if (_src == 'checkbox_1.png' || _src == 'checkbox_2.png') {
                var _value = $(this).attr('id').substring(parseInt(_length)).replace(/_/g, "-");
                _value = _value.substring(0, _value.length - 3);
                value.push(_value)
            }
        });
        return value;
    };
    $.fn.setCheckedNodes = function (data) {
        var $id = $(this);
        var id = $id.attr('id').trim();
        $.each(data, function (i, item) {
            var object = $id.find(('#' + id + '_' + item.replace(/-/g, "_") + '_cb'));
            if (object.length != 0) {
                //var _src = object.attr('src');
                //object.attr('src', _src.replace('checkbox_0.png', 'checkbox_1.png'));
                object.trigger("click");
            }
        });
    }
    $.fn.setCheckedNodeOne = function (data) {
        var $id = $(this);
        var id = $id.attr('id').trim();
        var object = $id.find(('#' + id + '_' + data.replace(/-/g, "_") + '_cb'));
        if (object.length != 0) {
            //var _src = object.attr('src');
            //object.attr('src', _src.replace('checkbox_0.png', 'checkbox_1.png'));
            object.trigger("click");
        }

    }
    $.fn.setNoCheckedNodes = function (item) {
        var $id = $(this);
        var id = $id.attr('id').trim();
        var object = $id.find(('#' + id + '_' + item.replace(/-/g, "_") + '_cb'));
        var _src = object.attr('src');
        object.attr('src', _src.replace('checkbox_1.png', 'checkbox_0.png'));
    }

    $.fn.getTSNs = function (gethalfchecknode) {
        if (this[0].t) {
            return this[0].t.getSelectedNodes(gethalfchecknode);
        }
        return null;
    };
    $.fn.getCurrentNode = function () {
        if (this[0].t) {
            return this[0].t.getCurrentItem();
        }
        return null;
    };
    $.fn.reflash = function (ItemOrItemId) {
        if (this[0].t) {
            return this[0].t.reflash(ItemOrItemId);
        }
    };
    $.fn.setTreeHeight = function (height) {
        var me = $(this);
        me.height(height);
        //me.parents('.slimScrollDiv').height(height);
    }
    $.fn.setNodeChecked = function (value) {
        var $id = $(this);
        var id = $id.attr('id').trim();
        $id.find('.bbit-tree-selected').removeClass('bbit-tree-selected');
        var object = $id.find(('#' + id + '_' + value.replace(/-/g, "_")));
        object.addClass('bbit-tree-selected');
    }
    $.fn.refreshNode = function (value, text) {
        var $id = $(this);
        var id = $id.attr('id').trim();
        var object = $id.find(('#' + id + '_' + value.replace(/-/g, "_"))).find('span[data-value = "' + value + '" ]');
        object.html(text);
    }
})(jQuery);