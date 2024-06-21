var pluginColors = ["#ff8080", "#ffff80", "#80ff80", "#00ff80", "#80ffff", "#0080ff", "#ff80c0", "#ff80ff", "#ff0000", "#ffff00", "#80ff00", "#00ff40", "#00ffff", "#0080c0", "#8080c0", "#ff00ff", "#804040", "#ff8040", "#00ff00", "#008080", "#004080", "#8080ff", "#800040", "#ff0080", "#800000", "#ff8000", "#008000", "#008040", "#0000ff", "#0000a0", "#800080", "#8000ff", "#400000", "#804000", "#004000", "#004040", "#000080", "#000040", "#400040", "#400080", "#000000", "#808000", "#808040", "#808080", "#408080", "#c0c0c0", "#400040", "#ffffff"];
var currentSelectProvinceName = "";
var d = new Date();
var hour = d.getHours();
var ua = navigator.userAgent.toLowerCase();
var theProvs = [];
theProvs[10] = "A 安徽";
theProvs[11] = "A 澳门";
theProvs[12] = "B 北京";
theProvs[43] = "C 重庆";
theProvs[13] = "F 福建";
theProvs[14] = "G 甘肃";
theProvs[15] = "G 广东";
theProvs[16] = "G 广西";
theProvs[17] = "G 贵州";
theProvs[18] = "H 海南";
theProvs[19] = "H 河北";
theProvs[20] = "H 河南";
theProvs[21] = "H 黑龙江";
theProvs[22] = "H 湖北";
theProvs[23] = "H 湖南";
theProvs[24] = "J 吉林";
theProvs[25] = "J 江苏";
theProvs[26] = "J 江西";
theProvs[27] = "L 辽宁";
theProvs[28] = "N 内蒙古";
theProvs[29] = "N 宁夏";
theProvs[30] = "Q 青海";
theProvs[31] = "S 山东";
theProvs[32] = "S 山西";
theProvs[33] = "S 陕西";
theProvs[34] = "S 上海";
theProvs[35] = "S 四川";
theProvs[37] = "T 天津";
theProvs[36] = "T 台湾";
theProvs[38] = "X 西藏";
theProvs[39] = "X 香港";
theProvs[40] = "X 新疆";
theProvs[41] = "Y 云南";
theProvs[42] = "Z 浙江";
var theInters = [];
theInters["africa"] = "非洲";
theInters["america"] = "美洲";
theInters["asia"] = "亚洲";
theInters["europe"] = "欧洲";
theInters["oceania"] = "大洋洲";
var timeout = "";
var submitByEnterBtn = false;
var searchInputTxt = "中文、拼音、电话区号  搜索城市/景点";
function initSearchInput() {
    if (typeof (pageType) != "undefined") {
        if (pageType == "i18n") {
            searchInputTxt = "中文、英文 搜索国际城市"
        } else {
            if (pageType == "timezone") {
                searchInputTxt = "中文、英文  搜索世界时间"
            }
        }
    }
    if (typeof (domain) != "undefined" && domain == "7255.com") {
        searchInputTxt = "中文、拼音、电话区号  搜索城市"
    }
    $("#searchForm").submit(function(a) {
        if ($("#searchResult a.ui-state-error").length == 0 && $("#searchResult a.ui-state-selected").length > 0 && $("#inputSearchCity").val() != searchInputTxt) {
            window.location.href = $("#searchResult a.ui-state-selected").attr("href");
            return false
        }
        submitByEnterBtn = true;
        startSearch();
        a.preventDefault();
        return false
    });
    $("#inputSearchCity").keydown(function(b) {
        clearTimeout(timeout);
        keycode = b.which;
        if (keycode != 40 && keycode != 38) {
            submitByEnterBtn = false;
            timeout = setTimeout(startSearch, 250)
        }
    }).click(function(c) {
        if ($(".ui-state-selected").length > 0) {
            $(".ui-state-selected").removeClass("ui-state-selected")
        }
        var e = $("#inputSearchCity").val();
        if (e != searchInputTxt && e != "") {
            $("#searchForm").submit();
            return false
        }
        if (typeof (pageType) !== "undefined" && pageType == "timezone") {
            return false
        }
        isCurrentShowing = false;
        mytoggleLayer(isCurrentShowing, $("#citySelect"), $("#citySelect"));
        cancelEvent(c);
        return false
    }).focus(function() {
        if ($(this).val() == searchInputTxt) {
            $(this).val("").css("color", "#333")
        }
    }).blur(function() {
        if ($(this).val().replace(/^\s*$/, "") == "") {
            $(this).val(searchInputTxt).css("color", "#999")
        }
    }).val(searchInputTxt);
    startAutocomplete()
}
function startSearch() {
    if ($("#inputSearchCity").val().replace(/\?/, "") == "") {
        $("#inputSearchCity").trigger("click");
        return
    }
    if (submitByEnterBtn && !$("#inputSearchCity").autocomplete("widget").is(":visible")) {
        $("#inputSearchCity").autocomplete("search", $("#inputSearchCity").val());
        $("#searchResult").addClass("suggest-list-open");
        $("#searchResult ul").show();
        return false
    }
}
function startAutocomplete() {
    $("#inputSearchCity").autocomplete({
        source: function(b, a) {
            $.ajax({
                url: "/t/searchCity.php",
                data: {
                    q: $("#inputSearchCity").val(),
                    pType: pageType
                },
                dataType: "json",
                success: function(f) {
                    if (typeof (pageType) != "undefined" && pageType == "timezone") {
                        var e = "对不起，未找到您查询的世界时间。"
                    } else {
                        var e = "对不起，未找到您查询的地点天气。"
                    }
                    if (f.res.length > 0) {
                        a($.map(f.res, function(g) {
                            return {
                                href: g.href,
                                text: g.text
                            }
                        }))
                    } else {
                        var c = [{
                            error: true,
                            text: e
                        }];
                        a(c)
                    }
                }
            })
        },
        appendTo: "#searchResult",
        position: {
            my: "left-1 top",
            at: "left bottom"
        },
        delay: 300,
        autoFocus: true,
        select: function(a, b) {
            if (b.item != undefined && !b.item.error) {
                window.location.href = b.item.href
            } else {
                return false
            }
        },
        create: function(a, b) {
            $(".ui-helper-hidden-accessible").remove()
        },
        focus: function(a, b) {
            if ($(".ui-state-focus").length > 0) {
                $(".ui-state-focus").addClass("ui-state-selected");
                $(".ui-state-focus").parent().siblings().children(".ui-state-selected").removeClass("ui-state-selected")
            }
        },
        open: function(a, b) {
            $("#searchResult").addClass("suggest-list-open");
            $("#citySelect").hide()
        }
    });
    $("#inputSearchCity").data("autocomplete")._renderItem = function(c, e) {
        var a = $("#inputSearchCity").val();
        e.label = a;
        e.value = a;
        if (e.error) {
            return $("<li>").append($("<a>").attr("class", "ui-state-error").html(e.text)).appendTo(c)
        } else {
            if (/[a-zA-Z]+/.test(a) && /span/.test(e.text)) {
                var f = e.text.split("<span>");
                if (f.length == 2) {
                    e.text = f[0].replace(a, "<b>" + a + "</b>") + "<span>" + f[1]
                }
            } else {
                e.text = e.text.replace(a, "<b>" + a + "</b>")
            }
            return $("<li>").append($("<a>").attr("href", e.href).html(e.text)).appendTo(c)
        }
    }
    ;
    $("#inputSearchCity").data("autocomplete")._renderMenu = function(b, a) {
        var c = this;
        $.each(a, function(e, f) {
            c._renderItemData(b, f)
        });
        if (a.length < 10) {
            $(b).css("height", 26 * a.length)
        } else {
            $(b).css("height", 260)
        }
    }
}
function genColorPanel() {
    var b = ['<ul class="clearfix">'];
    for (i in pluginColors) {
        var a = pluginColors[i];
        b.push("<li><div class='getcolor' data-color='" + a + "' style='background-color:" + a + "'></div></li>")
    }
    b.push("</ul>");
    return b.join("")
}
function fillCitySearchForm() {
    var e = [12, 34, 37, 43, 10, 13, 14, 15, 16, 17, 18, 21, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 38, 40, 41, 42, 39, 11, 36];
    var b = [];
    for (i in e) {
        if (typeof (e[i]) == "function") {
            continue
        }
        var a = e[i];
        matches = theProvs[a].match(/\s(.*)/);
        var c = matches[1];
        if (i == 3) {
            b.push('<li><a href="#' + a + '">' + c + "</a>");
            b.push('<li><a href="#"></a>')
        } else {
            b.push('<li><a href="#' + a + '">' + c + "</a>")
        }
    }
    $("#searchProvinceList").html(b.join(""))
}
function loadTopBanner() {
    try {
        window.external.RCCoralGetItemCacheType();
        var a = 1
    } catch (b) {
        var a = 0
    }
    $.get("/public/banner.php", {
        ifCleverExplorer: a
    }, function(c) {
        $("#mainContainer").prepend(c)
    })
}
function aqiGuide(a) {
    aqiGuides = {
        "1": "多参加户外活动，呼吸清新空气啦。",
        "2": "出去走走放松心情，感受下美好大自然吧。",
        "3": "敏感体质的朋友要减少外出哦！",
        "4": "敏感体质的朋友尽量不要出门啦！",
        "5": "为了健康着想，各位朋友尽量减少外出吧！",
        "6": "请尽量避免外出，外面红绿灯都看不见呢！",
        "7": "请尽量避免外出，外面红绿灯都看不见呢！"
    };
    if (typeof (aqiGuides[a]) != "undefined") {
        return aqiGuides[a]
    } else {
        return "暂无"
    }
}
function aqiPercent(a) {
    if (a <= 200) {
        aqiPercent = a / 4
    } else {
        if (a <= 300) {
            aqiPercent = 50 + (a - 200) / 4.78
        } else {
            if (a <= 500) {
                aqiPercent = 70.915 + (a - 300) / 6.876
            } else {
                if (a <= 550) {
                    aqiPercent = 103
                } else {
                    aqiPercent = 104
                }
            }
        }
    }
    return aqiPercent
}
function reflow() {
    var a = document.body;
    a.style.zoom = a.style.zoom == "1" ? "100%" : "1"
}
function redirectIfMobile(b) {
    if (/vmod=pc/.test(window.location)) {
        document.cookie = "vmod=pc;path=/"
    }
    if (!/vmod=pc/.test(document.cookie)) {
        var a = navigator.userAgent.toLowerCase();
        if (/(iphone|ipod|android|nokia|sony|ericsson|mot|htc|samsung|sgh|lg|philips|lenovo|ucweb|opera mobi|windows mobile|blackberry)/i.test(a) || a == "") {
            location.href = b
        }
        if (/ipad/.test(a)) {
            allCount("ipad_waptianqi");
            location.href = b
        }
    }
}
function hidePoplayer() {
    $(".pop-layer").hide();
    $(".arrow").removeClass("uarr");
    $(".pm-info").removeClass("cur");
    $(".suggest-list").removeClass("suggest-list-open");
    $(".select-city").removeClass("select-city-hover")
}
function gotoMyHref(a) {
    window.location.href = a.attr("href")
}
function blanktoHref(a) {
    window.open(a.attr("href"))
}
function mytoggleLayer(a, c, b) {
    hidePoplayer();
    if (a) {
        c.hide();
        b.removeClass("uarr").removeClass("select-city-hover")
    } else {
        c.show();
        b.addClass("uarr").addClass("select-city-hover")
    }
}
function indexPageWeaCallback(f) {
    var a = nightTxt1 = f.day1.weather;
    $("#dayIcon").addClass("w" + f.day1.img + "_l");
    $("#nightIcon").addClass("w" + f.day1.imgNight + "_l wnt");
    if (f.day1.weather.indexOf("转") > -1) {
        var e = f.day1.weather.split("转");
        a = e[0];
        nightTxt1 = e[1]
    }
    $("#dayTxt").html(a);
    $("#nightTxt").html(nightTxt1);
    $("#lowT").html(f.day1.tempLow + "℃");
    $("#highT").html(f.day1.tempHigh + "℃");
    $("#wind").html(f.day1.wind);
    $("#tomorrowLowT").html(f.day2.tempLow + "℃");
    $("#tomorrowIcon").addClass("w" + f.day2.img);
    $("#tomorrowTxt").html(f.day2.weather);
    $("#tomorrowHighT").html(f.day2.tempHigh + "℃");
    if (f.showDetail == "yes") {
        $("#todayHref").attr("href", "/today-" + f.id + ".htm");
        $("#tomorrowHref").attr("href", "/tomorrow-" + f.id + ".htm")
    } else {
        $("#todayHref").attr("href", "/" + f.pinyin + "/" + f.id + ".htm");
        $("#tomorrowHref").attr("href", "/" + f.pinyin + "/" + f.id + ".htm")
    }
    if (f.dayType == 15) {
        var b = "15"
    } else {
        var b = "7"
    }
    $("#localHref").attr("href", "/" + f.pinyin + "/" + f.id + ".htm").html("查看" + b + "日天气预报&raquo;");
    if ($("html").hasClass("ie6")) {
        $(".days2 .today").hoverfix();
        $(".days2 .tomorrow").hoverfix()
    }
    $("#weaInfoAqi").attr("href", "/air-" + f.id + ".htm");
    $("#weaHistory").attr("href", "/wea_history/" + f.id + ".htm");
    $("#placeHolder").hide();
    var c = typeof (f.cityNameWithSuffix) == "undefined" ? f.city : f.cityNameWithSuffix;
    $("#weatherInfo").show().find("h2").html(c + "天气预报")
}
function countDays() {
    var m = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
    var q = new Date();
    var k = q.getMonth();
    if (k < 4) {
        var l = q.getFullYear();
        var f = l.toString();
        var j = f.substr(2, 2) - 1;
        var o = parseInt((j * 0.2422 + 21.94) - parseInt(j / 4));
        var c = new Date(l,0,1,0,0,0);
        var p = parseInt((q.getTime() - c.getTime()) / 86400000);
        var b = 31 - o;
        var e = b + p + 1;
        var a = parseInt(e / 9);
        var h = e % 9;
        if (a > 9) {
            return ""
        } else {
            return "(" + m[a] + "九第" + m[h] + "天)"
        }
    } else {
        if (k >= 12) {
            var l = q.getFullYear();
            var f = l.toString();
            var j = f.substr(2, 2);
            var o = parseInt((j * 0.2422 + 21.94) - parseInt(j / 4));
            var n = q.getDate();
            if (n > o) {
                var g = n - o + 1;
                var a = parseInt(g / 9) + 1;
                var h = g % 9;
                return "(" + m[a] + "九第" + m[h] + "天)"
            }
            return ""
        }
    }
}
function bindInitEvent() {
    $(document).click(function(a) {
        hidePoplayer()
    });
    $(".pop-layer").click(function(a) {
        cancelEvent(a);
        return false
    });
    $("#province a").click(function() {
        if (match = $(this).attr("href").match(/#(\d+)/)) {
            provId = match[1];
            cities = getCitiesByProvId(provId);
            displaySearchDiv(cities, "city", provId, $(this).html());
            currentSelectProvinceName = $(this).html();
            bindCitySelect();
            bindCountySelect()
        }
    });
    ipJudgeError()
}
function bindCountySelect() {
    $("#county").find("a").unbind().click(function() {
        if (/返回全国/.test($(this).html())) {
            $("#province").show();
            $("#city").hide();
            $("#county").hide()
        } else {
            if (/返回/.test($(this).html())) {
                $("#province").hide();
                $("#city").show();
                $("#county").hide()
            } else {
                gotoMyHref($(this))
            }
        }
    })
}
function bindCitySelect() {
    $("#city").find("a").unbind().click(function() {
        if (match = $(this).attr("href").match(/#(\d+),(\d+)/)) {
            provId = match[1];
            cityIndex = match[2];
            counties = getCountiesByProvCity(provId, cityIndex);
            displaySearchDiv(counties, "county", provId, $(this).html());
            bindCountySelect()
        } else {
            if (/返回全国/.test($(this).html())) {
                $("#province").show();
                $("#city").hide();
                $("#county").hide()
            }
        }
    })
}
function addFav(f) {
    if (!f) {
        var f = "2345天气预报"
    } else {
        f = f + "--2345天气预报"
    }
    var a = location.href + "?shoucang";
    var b = navigator.userAgent.toLowerCase();
    var g = "您可以尝试通过快捷键 Ctrl+D 加入到收藏夹";
    if (b.indexOf("360se") > -1 || b.indexOf("lbbrowser") > -1 || b.indexOf("firefox") > -1 || b.indexOf("chrome") > -1) {
        alert(g)
    } else {
        if (b.indexOf("msie 8") > -1) {
            window.external.AddToFavoritesBar(a, f)
        } else {
            if (document.all) {
                try {
                    window.external.addFavorite(a, f)
                } catch (c) {
                    alert(g)
                }
            } else {
                if (window.sidebar) {
                    window.sidebar.addPanel(f, a, "")
                } else {
                    alert(g)
                }
            }
        }
    }
}
function allCount(e) {
    var c = arguments[1] ? arguments[1] : "";
    var b = "//web.50bangzh.com/web/ajax21?uId2=SPTNPQRLSX&r=" + encodeURIComponent(location.href) + "&fBL=" + screen.width + "*" + screen.height + "&lO=" + encodeURIComponent(e) + "?nytjsplit=" + encodeURIComponent(location.href) + c;
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", b);
    document.getElementsByTagName("head")[0].appendChild(a);
    return true
}
function deleteCookie(a) {
    var c = new Date();
    c.setTime(c.getTime() - 1);
    var b = 0;
    document.cookie = a + "=" + b + "; path=/;expires=" + c.toGMTString()
}
function getCookie(c) {
    var a;
    var f = document.cookie;
    var e = f.indexOf(c + "=");
    if (e > -1) {
        start = f.indexOf("=", e) + 1;
        var b = f.indexOf(";", start);
        if (b == -1) {
            b = f.length
        }
        a = f.substring(start, b)
    }
    return a
}
function setCookie(c, f, b, g) {
    var a = "";
    if (typeof (b) != "undefined") {
        var e = new Date();
        e.setTime(e.getTime() + Number(b) * 3600 * 1000);
        a = "expires = " + e.toGMTString()
    }
    if (typeof (g) != "undefined") {
        domainVal = ";domain=" + g
    } else {
        domainVal = ""
    }
    document.cookie = c + "=" + f + "; path=/;" + a + domainVal
}
function cancelEvent(a) {
    if (a && a.stopPropagation) {
        a.stopPropagation()
    } else {
        window.event.cancelBubble = true
    }
}
function displaySearchDiv(c, f, b, e) {
    $("#province").hide();
    $("#city").hide();
    $("#county").hide();
    var a = [];
    if (f == "city" && c.length == 1) {
        currentSelectProvinceName = "全国";
        c = getCountiesByProvCity(b, 0);
        displaySearchDiv(c, "county", b, e)
    } else {
        if (f == "city" && c.length > 1) {
            a.push("<h3 class='btitle'>" + e + "主要城市<a href='#' class='back'><< 返回全国</a></h3>");
            a.push("<div class='meta'>");
            for (i in c) {
                if (typeof (c[i]) == "function") {
                    continue
                }
                match = c[i].match(/\s(.+?)-/);
                a.push("<li><a href='#" + b + "," + i + "'>" + match[1] + "</a></li>")
            }
            a.push("</div>");
            $("#city").html(a.join(""));
            $("#city").show()
        } else {
            if (f == "county") {
                a.push("<h3 class='btitle'>" + e + "地区<a href='#' class='back'><< 返回" + currentSelectProvinceName + "</a></h3>");
                a.push("<div class='meta'>");
                for (i in c) {
                    if (typeof (c[i]) == "function") {
                        continue
                    }
                    match = c[i].match(/^(a?\d+)-.\s(.+?)-/);
                    a.push("<li><a href='/t/q.php?id=" + match[1] + "'>" + match[2] + "</a></li>")
                }
                a.push("</div>");
                $("#county").html(a.join(""));
                $("#county").show()
            }
        }
    }
}
function getCitiesByProvId(a) {
    citiesStr = prov[a];
    if (citiesStr.indexOf("|") < 0) {
        var b = [citiesStr]
    } else {
        var b = citiesStr.split("|")
    }
    return b
}
function getCountryByEg(a) {
    citiesStr = country[a];
    if (citiesStr.indexOf("|") < 0) {
        var b = [citiesStr]
    } else {
        var b = citiesStr.split("|")
    }
    return b
}
function getCountiesByProvCity(b, a) {
    var c = provqx[b][a];
    return c.split("|")
}
function getCityByCountry(b, a) {
    var c = city[b][a];
    return c.split("|")
}
function seedProvCityCountySelect(e, b, a) {
    var c = [];
    for (i in theProvs) {
        if (theProvs.hasOwnProperty(i)) {
            c.push("<option value='" + i + "'>" + theProvs[i] + "</option>")
        }
    }
    $("#" + e).html(c.join(""));
    if ($("#" + e + " option:eq(33)").text().indexOf("重庆") > -1) {
        $("#" + e + " option:eq(33)").insertBefore($("#" + e + " option:eq(3)"))
    }
    $("#" + e).change(function() {
        var f = $(this).val();
        if (f == "") {
            return
        }
        var h = getCitiesByProvId(f);
        var g = [];
        for (i in h) {
            if (typeof (h[i]) == "function") {
                continue
            }
            cityName = h[i].match(/\d+-([^-]+)/)[1];
            g.push("<option value='" + f + "," + i + "'>" + cityName + "</option>")
        }
        $("#" + b).html(g.join(""));
        $("#" + b).trigger("change")
    });
    $("#" + b).change(function() {
        var h = $(this).val();
        if (h == "") {
            return
        }
        var g = h.split(",");
        var j = getCountiesByProvCity(g[0], g[1]);
        var f = [];
        for (i in j) {
            if (typeof (j[i]) == "function") {
                continue
            }
            countyInfo = j[i].match(/(a?\d+)-([^-]+)/);
            countyId = countyInfo[1];
            countyName = countyInfo[2];
            f.push("<option value='" + countyId + "'>" + countyName + "</option>")
        }
        $("#" + a).html(f.join("")).trigger("change")
    });
    setTimeout(function() {
        $("#" + e)[0].value = "12";
        $("#" + e).trigger("change")
    }, 20)
}
function seedInterCityCountySelect(e, b, a) {
    var c = [];
    for (i in theInters) {
        if (theInters.hasOwnProperty(i)) {
            c.push("<option value='" + i + "'>" + theInters[i] + "</option>")
        }
    }
    $("#" + e).html(c.join(""));
    $("#" + e).change(function() {
        var f = $(this).val();
        if (f == "" || f == null) {
            return
        }
        var h = getCountryByEg(f);
        var g = [];
        for (i in h) {
            if (typeof (h[i]) == "function") {
                continue
            }
            countryName = h[i].match(/\S+-([^-]+)/)[1];
            g.push("<option value='" + f + "," + i + "'>" + countryName + "</option>")
        }
        $("#" + b).html(g.join(""));
        $("#" + b).trigger("change")
    });
    $("#" + b).change(function() {
        var h = $(this).val();
        if (h == "" || h == null) {
            return
        }
        var g = h.split(",");
        var j = getCityByCountry(g[0], g[1]);
        var f = [];
        for (i in j) {
            if (typeof (j[i]) == "function") {
                continue
            }
            countyInfo = j[i].match(/(\S+)-([^-]+)/);
            countyId = countyInfo[1];
            countyName = countyInfo[2];
            f.push("<option value='" + countyId + "'>" + countyName + "</option>")
        }
        $("#" + a).html(f.join("")).trigger("change")
    });
    setTimeout(function() {
        $("#" + e)[0].value = "asia";
        $("#" + e).trigger("change")
    }, 20)
}
function onSetCityByOwn(e, h, g) {
    var b = $("#" + e).val();
    var a = $("#" + h).val().split(",")[1];
    var j = getCitiesByProvId(b)[a];
    var f = "";
    var c = j.match(/(\d*?)-/);
    if (c.length > 1) {
        f = c[1];
        if (f < 100) {
            j = getCountiesByProvCity(b, 0)[0];
            c = j.match(/(\d*?)-/);
            f = c[1]
        }
    }
    $("#" + g).val(f)
}
function ipJudgeError() {
    if (getCookie("defaultCityID") == "" || getCookie("defaultCityID") == "undefined" || getCookie("defaultCityID") == null) {
        $("#defaultCity").attr("src", "/t/detect2009v2_defaultCiyt.php")
    } else {
        var a = getCookie("defaultCityName");
        $("#ipCheckError").html("更正您的地理位置");
        $("#ipCheckError").attr("href", "/tianqifk/index.htm")
    }
}
function defaultCityCallBack(b, a) {
    setCookie("defaultCityID", b, 24 * 365);
    setCookie("defaultCityName", escape(a), 24 * 365);
    $("#ipCheckError").html("IP判断错误反馈:我不在" + a);
    $("#ipCheckError").attr("href", "/tianqifk/index.htm")
}
function parseQueryStrToJson(e) {
    var c = e.replace(/\?/, "").split("&");
    var a = {};
    for (i in c) {
        if (typeof (c[i]) != "string") {
            continue
        }
        var b = c[i].split("=");
        a[b[0]] = b[1]
    }
    return a
}
function judgeDayNightStr(b, a) {
    if (hour >= 18) {
        document.write(a)
    } else {
        document.write(b)
    }
}
function todayFutureTempWidget() {
    var a = new dhtmlXChart({
        view: "line",
        container: "todayFutureTemp",
        value: "#wenduB#",
        label: "#curB##wenduB#",
        tooltip: {
            template: "#curB##wenduB#"
        },
        item: {
            borderColor: "#ff8f21",
            color: "#ff8f21"
        },
        line: {
            color: "#ff8f21",
            width: 3
        },
        padding: {
            left: 0,
            bottom: 20,
            right: 0
        }
    });
    a.addSeries({
        value: "#wenduH#",
        label: "#curH##wenduH#",
        tooltip: {
            template: "#curH##wenduH#"
        },
        item: {
            borderColor: "#66d53f",
            color: "#66d53f"
        },
        line: {
            color: "#66d53f",
            width: 3
        }
    });
    a.parse(data, "json")
}
function todayInterFuture() {
    var a = new dhtmlXChart({
        view: "line",
        container: "todayFutureTemp2",
        value: "#wenduB#",
        label: "<div class='data-up'>#curB##wenduB#℃</div>",
        tooltip: {
            template: "#curB##wenduB#"
        },
        item: {
            borderColor: "#ff8f21",
            color: "#ff8f21"
        },
        line: {
            color: "#ff8f21",
            width: 2
        },
        padding: {
            left: 0,
            bottom: 20,
            right: 0
        }
    });
    a.addSeries({
        value: "#wenduH#",
        label: "<div class='data-dn'>#curH##wenduH#℃</div>",
        tooltip: {
            template: "#curH##wenduH#"
        },
        item: {
            borderColor: "#268dea",
            color: "#268dea"
        },
        line: {
            color: "#268dea",
            width: 2
        }
    });
    a.parse(data, "json")
}
function chartHisTempData() {
    var a = new dhtmlXChart({
        view: "line",
        container: "hisTemp",
        value: "#wenduB#",
        label: function(b) {
            if (b.curB != "") {
                return "<div class='data-up data-up-cur'>" + b.curB + b.wenduB + "℃</div>"
            } else {
                return "<div class='data-up'>" + b.curB + b.wenduB + "℃</div>"
            }
        },
        item: {
            borderColor: "#ff8f21",
            color: "#ff8f21"
        },
        line: {
            color: "#ff8f21",
            width: 2
        },
        origin: "auto",
        padding: {
            top: 15,
            left: 35
        },
        xAxis: {
            template: function(b) {
                if (b.curB != "") {
                    return "<b>" + b.month + "</b>"
                } else {
                    return b.month
                }
            },
            color: "#f7f7f7",
            lineColor: "#f7f7f7"
        },
        yAxis: {
            start: dataHisSection[1],
            step: dataHisSection[2],
            end: dataHisSection[0],
            template: function(b) {
                return b + "℃"
            },
            color: "#f7f7f7",
            lineColor: "#f7f7f7"
        }
    });
    a.addSeries({
        value: "#wenduH#",
        label: function(b) {
            if (b.curB != "") {
                return "<div class='data-dn data-dn-cur'>" + b.curH + b.wenduH + "℃</div>"
            } else {
                return "<div class='data-dn'>" + b.curH + b.wenduH + "℃</div>"
            }
        },
        item: {
            borderColor: "#268dea",
            color: "#268dea"
        },
        line: {
            color: "#268dea",
            width: 2
        }
    });
    $("#hisTemp").css({
        width: "980px",
        height: "218px"
    });
    a.parse(dataHisTemp, "json")
}
function todayHourWidget() {
    var c = new Date();
    var a = c.getHours();
    html = "";
    for (i = 0; i < wea_h_hour.length; i++) {
        var b = "";
        if (i <= 5 || i >= 19) {
            b = "wnt_l"
        }
        html += "<li" + (i == a ? ' class="current"' : "") + '><div class="hd">' + wea_h_hour[i]["hour"] + '点</div><div class="bd"><p class="f_ico"><span class="wea_l w' + wea_h_hour[i]["icon"] + "_l " + b + '"></span></p><p class="f_wz">' + wea_h_hour[i]["tq"] + '</p></div><div class="ft">' + wea_h_hour[i]["temp"] + "℃</div></li>"
    }
    $("#wea_hour ul").html(html);
    hour24Slide()
}
function todayHourWidgetNew() {
    var c = new Date();
    var a = c.getHours();
    html = "";
    for (i = 0; i < wea_h_hour.length; i++) {
        var b = "";
        if (i <= 5 || i >= 19) {
            b = "wnt"
        }
        html += "<li" + (i == a ? ' class="current"' : "") + '><div class="hd">' + wea_h_hour[i]["hour"] + '点</div><div class="bd"><p class="f_ico"><span class="wea_l w' + wea_h_hour[i]["icon"] + " " + b + '"></span></p><p class="f_wz">' + wea_h_hour[i]["tq"] + '</p></div><div class="ft">' + wea_h_hour[i]["temp"] + "℃</div></li>"
    }
    $("#wea_hour ul").html(html);
    hourNewSlide()
}
function todayHourWidgetInter(e) {
    var c = new Date();
    var a = c.getHours() + e - 8;
    html = "";
    for (i = 0; i < wea_h_hour.length; i++) {
        var b = "";
        if (wea_h_hour[i]["hour"] <= 5 || wea_h_hour[i]["hour"] >= 19) {
            b = "wnt_l"
        }
        html += "<li" + ((wea_h_hour[i]["hour"] == a && i < 21) ? ' class="current"' : "") + '><div class="hd">' + wea_h_hour[i]["hour"] + '点</div><div class="bd"><p class="f_ico"><span class="wea_l w' + wea_h_hour[i]["icon"] + "_l " + b + '"></span></p><p class="f_wz">' + wea_h_hour[i]["tq"] + '</p></div><div class="ft">' + wea_h_hour[i]["temp"] + "℃</div></li>"
    }
    $("#wea_hour ul").html(html);
    hour24SlideInter()
}
function todayHourWidgetDistrict() {
    if (typeof (wea_h_hour) == "undefined") {
        return
    }
    var e = new Date();
    var a = wea_h_hour[0]["hour"] > e.getHours() ? wea_h_hour[0]["hour"] : e.getHours();
    html = "";
    for (i = 0; i < wea_h_hour.length; i++) {
        var c = "";
        var b = wea_h_hour[i]["hour"];
        if (b <= 5 || b >= 19) {
            c = "wnt_l"
        }
        html += "<li" + (a == b ? ' class="current"' : "") + '><div class="hd">' + wea_h_hour[i]["hour"] + '点</div><div class="bd"><p class="f_ico"><span class="wea_l w' + wea_h_hour[i]["icon"] + "_l " + c + '"></span></p><p class="f_wz">' + wea_h_hour[i]["tq"] + '</p></div><div class="ft">' + wea_h_hour[i]["temp"] + "℃</div></li>"
    }
    $("#wea_hour ul").html(html);
    hour24Slide()
}
function todayHourWidgetDistrictNew() {
    if (typeof (wea_h_hour) == "undefined") {
        return
    }
    var e = new Date();
    var a = wea_h_hour[0]["hour"] > e.getHours() ? wea_h_hour[0]["hour"] : e.getHours();
    html = "";
    for (i = 0; i < wea_h_hour.length; i++) {
        var c = "";
        var b = wea_h_hour[i]["hour"];
        if (b <= 5 || b >= 19) {
            c = "wnt"
        }
        html += "<li" + (a == b ? ' class="current"' : "") + '><div class="hd">' + wea_h_hour[i]["hour"] + '点</div><div class="bd"><p class="f_ico"><span class="wea_l w' + wea_h_hour[i]["icon"] + " " + c + '"></span></p><p class="f_wz">' + wea_h_hour[i]["tq"] + '</p></div><div class="ft">' + wea_h_hour[i]["temp"] + "℃</div></li>"
    }
    $("#wea_hour ul").html(html);
    hourNewSlide()
}
function airTrend(b) {
    $("#chartFutureHour").hide();
    $("#chartHour").hide();
    $("#chartDay").hide();
    if (b == "futurehour") {
        $("#futurehour").addClass("mt_curr");
        $("#hour").removeClass("mt_curr");
        $("#day").removeClass("mt_curr");
        $("#chartFutureHour").show();
        $(".module-qushitu .btitle h2").html("未来" + cityZhName + "空气质量指数24小时整点预报");
        var a = "chartFutureHour"
    } else {
        if (b == "hour") {
            $("#futurehour").removeClass("mt_curr");
            $("#hour").addClass("mt_curr");
            $("#day").removeClass("mt_curr");
            $("#chartHour").show();
            $(".module-qushitu .btitle h2").html(cityZhName + "空气质量历史趋势图");
            var a = "chartHour"
        } else {
            if (b == "day") {
                $("#futurehour").removeClass("mt_curr");
                $("#hour").removeClass("mt_curr");
                $("#day").addClass("mt_curr");
                $("#chartDay").show();
                $(".module-qushitu .btitle h2").html(cityZhName + "空气质量历史趋势图");
                var a = "chartDay"
            } else {
                if (b == "tomorrowhour") {
                    var a = "chartTomorrowHour"
                }
            }
        }
    }
    if (b == "futurehour" && $("#chartFutureHour").html() != "") {
        return
    }
    if (b == "hour" && $("#chartHour").html() != "") {
        return
    }
    if (b == "day" && $("#chartDay").html() != "") {
        return
    }
    if (b == "tomorrowhour" && $("#chartTomorrowHour").html() != "") {
        return
    }
    var c = new dhtmlXChart({
        view: "bar",
        container: a,
        value: "#point#",
        label: "#aqi#",
        width: 15,
        radius: 0,
        border: false,
        item: {
            borderColor: "#268dea",
            color: "#ffffff",
            radius: 3
        },
        color: function(e) {
            if (e.aqi <= 50) {
                return "#a9d86b"
            } else {
                if (e.aqi <= 100) {
                    return "#fde37f"
                } else {
                    if (e.aqi <= 150) {
                        return "#ffba6c"
                    } else {
                        if (e.aqi <= 200) {
                            return "#fa874d"
                        } else {
                            if (e.aqi <= 300) {
                                return "#ba6593"
                            } else {
                                return "#855666"
                            }
                        }
                    }
                }
            }
        },
        xAxis: {
            template: "#label#",
            color: "#f7f7f7",
            lineColor: "#f7f7f7"
        },
        yAxis: {
            color: "#f7f7f7",
            lineColor: "#f7f7f7",
            start: 0,
            step: 1666,
            end: 9996,
            template: function(f) {
                var e = [0, 50, 100, 150, 200, 300, 500];
                return e[f / 1666]
            }
        },
        padding: {
            left: 35,
            bottom: 75
        },
        origin: 0,
        preset: "simple"
    });
    if (b == "futurehour") {
        $("#chartFutureHour").css("height", "300px").show();
        c.parse(future_hours24, "json")
    } else {
        if (b == "hour") {
            $("#chartHour").css("height", "300px").show();
            c.parse(hours24, "json")
        } else {
            if (b == "day") {
                $("#chartDay").css("height", "300px").show();
                c.parse(days30, "json")
            } else {
                if (b == "tomorrowhour") {
                    $("#chartTomorrowHour").css("height", "300px").show();
                    c.parse(tomorrow_hours24, "json")
                }
            }
        }
    }
}
function publishTime() {
    var c = new Date();
    var a = c.getHours();
    var b = c.getFullYear() + "-" + (c.getMonth() - 1 + 2) + "-" + c.getDate();
    if (a >= 0 && a < 8) {
        c.setDate(c.getDate() - 1);
        b = c.getFullYear() + "-" + (c.getMonth() - 1 + 2) + "-" + c.getDate() + " 18:00"
    } else {
        if (a >= 8 && a < 12) {
            b += " 08:00"
        } else {
            if (a >= 12 && a < 18) {
                b += " 12:00"
            } else {
                b += " 18:00"
            }
        }
    }
    document.write(b)
}
function checkSubmitSpam(c) {
    var a = true;
    var b = getCookie("lastSubmitTime");
    if (b != null && parseInt(((new Date()).valueOf() - b) / 1000) < 15) {
        a = false
    }
    if (!a) {
        alert("您提交的频率过快，请稍候再试");
        return false
    }
    $("#" + c + " input[type=text]").each(function(f, e) {
        var g = $(e).val().length;
        if (g < 5 || g > 50) {
            a = false;
            return
        }
    });
    if (!a) {
        alert("各项长度须大于5个小于50个字符");
        return false
    }
    setCookie("lastSubmitTime", (new Date()).valueOf());
    return true
}
function loadJs(b) {
    var e = arguments[1] || function() {}
    ;
    var c = arguments[2] || "gbk";
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("charset", c);
    a.setAttribute("defer", true);
    a.setAttribute("src", b);
    if (document.all) {
        a.onreadystatechange = function() {
            if (this.readyState == "loaded" || this.readyState == 4 || this.readyState == "complete") {
                setTimeout(e, 10)
            }
        }
    } else {
        a.onload = function() {
            e()
        }
    }
    document.getElementsByTagName("head")[0].appendChild(a)
}
function loadJsInterhour(b) {
    var f = arguments[1] || function() {}
    ;
    var e = "gbk";
    var c = arguments[2];
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("charset", e);
    a.setAttribute("defer", true);
    a.setAttribute("src", b);
    if (document.all) {
        a.onreadystatechange = function() {
            if (this.readyState == "loaded" || this.readyState == 4 || this.readyState == "complete") {
                setTimeout(f, 10)
            }
        }
    } else {
        a.onload = function() {
            f(c)
        }
    }
    document.getElementsByTagName("head")[0].appendChild(a)
}
function seedMycities() {
    mycitiesCookie = unescape(getCookie("qd_dz_ct")).replace("undefined", "");
    mycities = mycitiesCookie.split("|");
    if (mycities[0] == "") {
        mycities = ["54511", "58362", "59287", "57494", "57516"]
    }
    if (mycities.length > 0) {
        for (i in mycities) {
            if (typeof (mycities[i]) != "string") {
                continue
            }
            mycityId = mycities[i];
            if (mycityId != "" && mycityId.replace("/s*/", "") != "") {
                loadJs("/t/his/" + mycityId + "his.js?" + (new Date()).valueOf())
            }
        }
    }
}
function removeMyCity(f) {
    mycities = unescape(getCookie("qd_dz_ct"));
    var c = "|" + f;
    var b = f + "|";
    var a = f;
    var e = mycities.replace(c, "").replace(b, "").replace(a, "");
    setCookie("qd_dz_ct", e, 24 * 300, ".2345.com");
    $("#" + f).remove();
    $("#mycityTr_" + f).remove();
    $("#deleteAdd").html("")
}
function addMyCity() {
    var h = $("#selectCounty").val();
    var c = $("#selectCounty").find("option:selected").text().split(" ")[1];
    var g = unescape(getCookie("qd_dz_ct") || "");
    var f = g.split("|");
    var e = "|" + h;
    var b = h + "|";
    var a = h;
    $("#qd_ct").show();
    $("#btnConfirm").show();
    $("#deleteAdd").show();
    if (g.indexOf(e) < 0 && g.indexOf(b) < 0 && g.indexOf(a) < 0) {
        if (g.split("|").length > 4) {
            $("#deleteAdd").css("visibility", "visible");
            $("#deleteAdd").html("添加城市已达上限，请删除部分城市后再行添加");
            return false
        }
        if (f[0] == "") {
            g += h;
            $("#deleteAdd").html("您最多添加 5 个城市，还可添加 4 个")
        } else {
            g += "|" + h;
            if (g.split("|").length > 4) {
                $("#deleteAdd").html("添加城市已达上限")
            } else {
                $("#deleteAdd").html("您最多添加 5 个城市，还可添加 " + (5 - g.split("|").length) + " 个")
            }
        }
        setCookie("qd_dz_ct", g, 24 * 300, ".2345.com");
        loadJs("/t/his/" + h + "his.js?" + (new Date()).valueOf())
    } else {
        $("#deleteAdd").html("该城市已添加关注，请勿重复添加");
        if (g.split("|").length > 4) {
            $("#deleteAdd").css("visibility", "visible");
            $("#deleteAdd").html("添加城市已达上限，请删除部分城市后再行添加")
        }
    }
}
function joinWeaStrHis(c, h, f, j, b, g, a) {
    if (a == undefined) {
        a = "暂无"
    }
    var e = '<table width="100%" cellspacing="0" cellpadding="0" border="0" onclick = "blanktoHref($(\'#mycityTr_' + j + " a'));allCount('tianqi_guanzhu')\"><tbody><tr id=\"mycityTr_" + j + '"><td width="29%"><a title="' + c + '" href="/t/city/' + j + '.htm" onclick = "return false;">' + c + '</a></td><td width="28%" class="pad-r"><span title="' + h + '">' + h + '</span></td><td width="23%">' + f + '</td><td width="20%"><span class="aqi-lv' + g + '">' + a + "</span></td></tr></tbody></table>";
    mycitiesCookie = unescape(getCookie("qd_dz_ct")).replace("undefined", "");
    mycities = mycitiesCookie.split("|");
    if (mycities != "") {
        $("#myCitiesList")[0].innerHTML += e;
        $("#qd_ct")[0].innerHTML += '<span  class="follow-set-mycity" id="' + j + '">' + c + '<a class="btn_dz_del" title="删除' + c + '" href="javascript:void(0);" onclick="removeMyCity(' + j + ');"  target="_self"></a></span>'
    }
    if ($("#myMiddleCitiesList").length > 0) {
        $("#myMiddleCitiesList")[0].innerHTML += e
    }
}
function setLiveInfo() {
    if (typeof (weatherinfovar) == "undefined") {
        return
    }
    if ($("#liveInfoAqi").length == 0 && $("#liveInfoAqiNew").length == 0) {
        return
    }
    var e = weatherinfovar.weatherinfo;
    if (typeof (e.aqiLevel) != "undefined") {
        var a = new Array();
        var c = aqiPercent(e.idx);
        a[3] = "建议戴口罩";
        a[4] = "需要戴口罩";
        a[5] = "需要戴口罩";
        a[6] = "务必戴口罩";
        a[7] = "务必戴口罩";
        $("#liveInfoAqi").addClass("aqi-lv" + e.aqiLevel);
        $("#liveInfoAqi h3 span").html(e.lv_hint);
        $("#liveInfoAqi div.progess b").html(e.idx == null ? "暂无" : e.idx).css("left", c + "%");
        $("#liveInfoAqi p span").html(aqiGuide(e.aqiLevel));
        if (typeof a[e.aqiLevel] != "undefined") {
            var b = '<div class="advice">' + a[e.aqiLevel] + "</div>";
            $("#liveInfoAqi h3").after(b)
        }
        $("#aqi_container").html(e.lv_hint);
        var z = aqiLevelIcon(e.idx);
        $(".kqi-left").addClass("kqi-left" + z);
        $(".kqi-num").addClass("kqi-num" + e.aqiLevel);
        $(".kqi-num").html(e.idx);
        $(".kqi-status b").addClass("kqi-level" + e.aqiLevel);
        $(".kqi-status b").html(e.lv_hint);
        if (typeof a[e.aqiLevel] != "undefined") {
            $(".kqi-tips p").html(a[e.aqiLevel] + "," + aqiGuide(e.aqiLevel))
        } else {
            $(".kqi-tips p").html(aqiGuide(e.aqiLevel))
        }
    }
}
function aqiLevelIcon(a) {
    var e;
    if (a >= 0 && a <= 25) {
        e = 1
    } else {
        if (a >= 26 && a <= 50) {
            e = 2
        } else {
            if (a >= 51 && a <= 75) {
                e = 3
            } else {
                if (a >= 76 && a <= 100) {
                    e = 4
                } else {
                    if (a >= 101 && a <= 125) {
                        e = 5
                    } else {
                        if (a >= 126 && a <= 150) {
                            e = 6
                        } else {
                            if (a >= 151 && a <= 175) {
                                e = 7
                            } else {
                                if (a >= 176 && a <= 200) {
                                    e = 8
                                } else {
                                    if (a >= 201 && a <= 250) {
                                        e = 9
                                    } else {
                                        if (a >= 251 && a <= 300) {
                                            e = 10
                                        } else {
                                            if (a >= 301 && a <= 500) {
                                                e = 11
                                            } else {
                                                e = 12
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return e
}
function setRealTemp() {
    if (typeof (weatherinfovar) == "undefined") {
        return
    }
    var a = weatherinfovar.weatherinfo;
    if (typeof (a.temp) != "undefined") {
        $("#jingdianTemp strong").html("当前气温：");
        $("#jingdianTemp span").html(a.temp + "℃");
        $("#districtTemp").html("当前气温：<i>" + a.temp + "℃</i>")
    }
    setLiveInfo()
}
function setDetailInfo() {
    if (typeof (weatherinfovar) == "undefined") {
        return
    }
    var b = weatherinfovar.weatherinfo;
    if (typeof (b.aqiLevel) != "undefined") {
        if ($("#aqiHref")) {
            var a = aqiPercent(b.idx);
            $("#aqiHref").attr("class", "aqi-icon aqi-icon-lv" + b.aqiLevel);
            $("#aqiText").html(b.lv_hint)
        }
    }
}
function weaInterAlert(a) {
    if (a) {
        var b = new String(a.title);
        $("#alertCont h2").hide();
        $("#alertCont").append('<div class="status warn-yellow"><i class="warn"></i><em>' + b + "</em></div>")
    }
}
function weaAlertCallBack(b) {
    if (b) {
        var a = new String(b.title);
        title = a.replace(/.*?发布/, "");
        title = title.replace(/道路/, "");
        color = alarmColor(title);
        if ($("#alertLink").length > 0) {
            $("#emoticonId").attr("class", "emoticon warn-" + color);
            $("#emoticonId span").html(title + "<br/>小心自然灾害！");
            $("#emoticonId a").attr("href", "/t/shikuang/alert/" + b.url)
        } else {
            $("#emoticonId").addClass("warn-" + color);
            $("#emoticonId i").attr("class", "warn");
            $("#emoticonId span").html(title + "<br/>小心自然灾害！");
            $("#emoticonId span").append('<a id = "alertLink" onclick="allCount(\'friendHint\');" href= "/t/shikuang/alert/' + b.url + '" target="_blank"></a>')
        }
    }
}
function alarmColor(a) {
    if (a.indexOf("蓝色") >= 0) {
        color = "blue"
    } else {
        if (a.indexOf("黄色") >= 0) {
            color = "yellow"
        } else {
            if (a.indexOf("橙色") >= 0) {
                color = "orange"
            } else {
                if (a.indexOf("红色") >= 0) {
                    color = "red"
                } else {
                    color = "blue"
                }
            }
        }
    }
    return color
}
function showAddFavPop() {
    $("#add2fav-layer b").click(function() {
        setCookie("closedAddFav", "y", 24 * 365);
        $("#add2fav-layer").hide()
    });
    if (!getCookie("closedAddFav")) {
        $("#add2fav-layer").show()
    }
    setTimeout(function() {
        setCookie("closedAddFav", "y", 24 * 365);
        $("#add2fav-layer").hide()
    }, 10000)
}
function hourChartInDetail() {
    var a = (new Date).getHours();
    var b = new dhtmlXChart({
        view: "line",
        container: "hourChart",
        value: "#temp#",
        label: function(e) {
            var c = "w" + e.icon;
            var f = "";
            if (e.hour < 6 || e.hour > 18) {
                c = c + " wnt"
            }
            if (e.hour == a && typeof (tomorrowDetail) == "undefined") {
                f = " data-cur"
            }
            return "<div class='data" + f + "'><span class='" + c + "'></span><span class='temp'>" + e.temp + "℃</span></div>"
        },
        tooltip: {
            template: "#tq#"
        },
        item: {
            borderColor: function(c) {
                if (c.hour == a && typeof (tomorrowDetail) == "undefined") {
                    return "#268dea"
                } else {
                    return "#fff"
                }
            },
            color: function(c) {
                if (typeof (tomorrowDetail) != "undefined") {
                    return "#268dea"
                }
                if (c.hour < a) {
                    return "#ccc"
                } else {
                    if (c.hour == a) {
                        return "#fff"
                    } else {
                        return "#268dea"
                    }
                }
            },
            radius: 4
        },
        line: {
            color: function(c) {
                if (typeof (tomorrowDetail) != "undefined") {
                    return "#b2daff"
                }
                if (c.hour < a) {
                    return "#e9e9e9"
                } else {
                    return "#b2daff"
                }
            },
            width: 2
        },
        xAxis: {
            template: "#hour#点",
            color: "#d9d9d9",
            lineColor: "#e9e9e9"
        },
        yAxis: {
            start: wea_h_section[1],
            step: wea_h_section[2],
            end: wea_h_section[0],
            template: function(c) {
                return c + "℃"
            },
            color: "#d9d9d9",
            lineColor: "#e9e9e9"
        },
        preset: "simple"
    });
    b.parse(wea_h_hour, "json")
}
function hourNewSlide() {
    var hourUl = $("#wea_hour ul")
      , curIndex = $("#wea_hour .inner .clearfix .current").index()
      , prev = $("#hourRight")
      , next = $("#hourLeft")
      , stepArray = [0, -366, -732, -1098]
      , stepIndex = 0;
    if (curIndex <= 5) {
        stepIndex = 0;
        prev.addClass("disable")
    }
    if (curIndex >= 6 && curIndex <= 11) {
        stepIndex = 1
    }
    if (curIndex >= 12 && curIndex <= 17) {
        stepIndex = 2
    }
    if (curIndex >= 18 && curIndex <= 23) {
        stepIndex = 3;
        next.addClass("disable")
    }
    hourUl.css("margin-left", stepArray[stepIndex] + "px");
    prev.bind("click", function() {
        if ($(this).hasClass("disable")) {
            return
        } else {
            if (next.hasClass("disable")) {
                next.removeClass("disable")
            }
            stepIndex--;
            hourUl.animate({
                marginLeft: stepArray[stepIndex] + "px"
            }, 200, "linear");
            if (stepIndex <= 0) {
                $(this).addClass("disable")
            }
        }
    });
    next.bind("click", function() {
        if ($(this).hasClass("disable")) {
            return
        } else {
            if (prev.hasClass("disable")) {
                prev.removeClass("disable")
            }
            stepIndex++;
            hourUl.animate({
                marginLeft: stepArray[stepIndex] + "px"
            }, 200, "linear");
            if (stepIndex >= 3) {
                $(this).addClass("disable")
            }
        }
    })
}
function hour24Slide() {
    var e = $("#wea_hour ul")
      , b = $("#wea_hour .tab-body .current").index()
      , f = $("#hourPrev")
      , c = $("#hourNext")
      , a = [0, -366, -732, -1098]
      , g = 0;
    if (b <= 5) {
        g = 0;
        f.addClass("disable")
    }
    if (b >= 6 && b <= 11) {
        g = 1
    }
    if (b >= 12 && b <= 17) {
        g = 2
    }
    if (b >= 18 && b <= 23) {
        g = 3;
        c.addClass("disable")
    }
    e.css("margin-left", a[g] + "px");
    f.bind("click", function() {
        if ($(this).hasClass("disable")) {
            return
        } else {
            if (c.hasClass("disable")) {
                c.removeClass("disable")
            }
            g--;
            e.animate({
                marginLeft: a[g] + "px"
            }, 200, "linear");
            if (g <= 0) {
                $(this).addClass("disable")
            }
            allCount("hour_previous")
        }
    });
    c.bind("click", function() {
        if ($(this).hasClass("disable")) {
            return
        } else {
            if (f.hasClass("disable")) {
                f.removeClass("disable")
            }
            g++;
            e.animate({
                marginLeft: a[g] + "px"
            }, 200, "linear");
            if (g >= 3) {
                $(this).addClass("disable")
            }
            allCount("hour_next")
        }
    })
}
function hour24SlideInter() {
    var e = $("#wea_hour ul")
      , b = $("#wea_hour .tab-body .current").index()
      , f = $("#hourPrev")
      , c = $("#hourNext")
      , a = [0, -366, -732, -1098, -1464, -1830]
      , g = 0;
    if (b <= 5) {
        g = 0;
        f.addClass("disable")
    }
    if (b >= 6 && b <= 11) {
        g = 1
    }
    if (b >= 12 && b <= 17) {
        g = 2
    }
    if (b >= 18 && b <= 23) {
        g = 3;
        c.addClass("disable")
    }
    e.css("margin-left", a[g] + "px");
    f.bind("click", function() {
        if ($(this).hasClass("disable")) {
            return
        } else {
            if (c.hasClass("disable")) {
                c.removeClass("disable")
            }
            g--;
            e.animate({
                marginLeft: a[g] + "px"
            }, 200, "linear");
            if (g <= 0) {
                $(this).addClass("disable")
            }
            allCount("hour_previous")
        }
    });
    c.bind("click", function() {
        if ($(this).hasClass("disable")) {
            return
        } else {
            if (f.hasClass("disable")) {
                f.removeClass("disable")
            }
            g++;
            e.animate({
                marginLeft: a[g] + "px"
            }, 200, "linear");
            if (g >= 5) {
                $(this).addClass("disable")
            }
            allCount("hour_next")
        }
    })
}
(function(a) {
    a.fn.hoverfix = function() {
        a(this).hover(function(b) {
            a(this).addClass("hover")
        }, function() {
            a(this).removeClass("hover")
        });
        return this
    }
    ;
    a.fn.activefix = function() {
        var b = a(this);
        b.bind("mousedown", function() {
            a(this).addClass("active")
        }).bind("mouseup", function() {
            a(this).removeClass("active")
        }).bind("mouseout", function() {
            a(this).removeClass("active")
        });
        return this
    }
}
)(jQuery);
if (!/plugin\/widget\/index/.test(location.href)) {
    jQuery(window).bind("resize", function() {
        var a;
        a = jQuery("body");
        if (jQuery(this).width() <= 1000) {
            a.css("width", "1000")
        } else {
            a.css("width", jQuery(window).width() + "px")
        }
    }).trigger("resize")
}
function scrollFixed() {
    var c = $(".sidebar-money");
    if (c.length == 0) {
        return
    }
    var a = c.offset().top;
    var b = $("html").hasClass("ie6");
    $(window).scroll(function() {
        if ($(this).scrollTop() >= a) {
            c.addClass("sidebar-money-fixed");
            if (b) {
                c.css({
                    top: $(this).scrollTop() - 145
                })
            }
        } else {
            c.removeClass("sidebar-money-fixed");
            if (b) {
                c.css({
                    top: 0
                })
            }
        }
    })
}
function setAqi15days() {
    if (typeof (aqiForeast) == "undefined") {
        return
    }
    var b = 0;
    for (time in aqiForeast) {
        if (aqiForeast[time].qualityStr == "优") {
            aqiForeast[time].qualityStr = "空气优"
        } else {
            if (aqiForeast[time].qualityStr == "良") {
                aqiForeast[time].qualityStr = "空气良"
            }
        }
        var c = '<div class="aqi_container"><span class="small-aqi-icon small-aqi-icon-lv' + aqiForeast[time].level + '"></span>' + aqiForeast[time].qualityStr + "</div>";
        if ($("#day7info li:eq(" + b + ")").length > 0) {
            $(".week_day7 li:eq(" + b + ")").append(c)
        } else {
            var a = b - 7;
            $("#day8info li:eq(" + a + ")").append(c)
        }
        b++
    }
}
function addToFavorite() {
    var f = document.title
      , b = location.href
      , a = $("#lastBread").text() || "2345天气预报";
    try {
        window.external.addFavorite(b, f)
    } catch (c) {
        try {
            window.sidebar.addPanel(f, b, "")
        } catch (c) {
            alert("同时按下Ctrl+D键，将“" + a + "”加入收藏夹")
        }
    }
}
function getBrowserOs() {
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        return "MSIE"
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        return "Firefox"
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
        return "Safari"
    }
    if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
        return "Camino"
    }
    if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
        return "Gecko"
    }
}
function loadJsMulti(b) {
    var e = arguments[1] || function() {}
    ;
    var f = arguments[2] || function() {}
    ;
    var g = arguments[3] || function() {}
    ;
    var c = "gbk";
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("charset", c);
    a.setAttribute("defer", true);
    a.setAttribute("src", b);
    if (document.all) {
        a.onreadystatechange = function() {
            if (this.readyState == "loaded" || this.readyState == 4 || this.readyState == "complete") {
                setTimeout(e, 10);
                setTimeout(f, 10);
                setTimeout(g, 10)
            }
        }
    } else {
        a.onload = function() {
            e()
        }
    }
    document.getElementsByTagName("head")[0].appendChild(a)
}
;