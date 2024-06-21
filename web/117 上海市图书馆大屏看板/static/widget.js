function reflow () {
  var a = document.body;
  a.style.zoom = a.style.zoom == "1" ? "100%" : "1"
}
function handleAqi () {
  if (typeof (weatherinfovar) == "object") {
    if (weatherinfovar.weatherinfo.aqiLevel) {
      $("#aqi").html('<a href="/air-' + defaultCityID + ".htm" + from + '" target="_blank">空气质量:<i class="i-lv' + weatherinfovar.weatherinfo.aqiLevel + '"></i></a>');
      if (enableSet) {
        $__("dtWea").className = "has-all";
        $("#dtWea").hide();
        $("#dtWea").show()
      } else {
        $__("dtWea").className = "has-aqi"
      }
    } else {
      if (!enableSet) {
        $__("dtWea").className = "has-none"
      }
      $("#aqi").hide()
    }
  }
  reflow()
}
var colors = {
  1: "000000",
  2: "FFFFFF",
  3: "C6C6C6",
  4: "B00C22",
  5: "D10F41",
  6: "F47837",
  7: "FBD008",
  8: "51B148",
  9: "00AFDB",
  10: "2E93D9",
  11: "005391"
};
var args = parseQueryStrToJson(location.search);
var from = args.from ? "?from=" + args.from : "";
if (args.f == "lm1") {
  from = "?from=lm1"
}
var showStyle = args.s == "" ? 1 : (args.s > 3 ? 3 : (args.s < 1 ? 1 : args.s));
var verticality = parseInt(args.v, 10);
var iconSize = parseInt(args.t) == 1 ? 1 : 0;
var autoDetect = parseInt(args.a) == 0 ? 0 : 1;
var defaultCityID = args.c == "" ? 54511 : args.c;
var showDayNum = args.d == "" ? 3 : (args.d > 5 ? 5 : (args.d < 1 ? 1 : args.d));
var enableSet = parseInt(args.e) == 0 ? 0 : 1;
var enableAqi = parseInt(args.q) == 0 ? 0 : 1;
var weatherClass = ["weather"];
var textIcon = parseInt(args.z) == 0 ? 1 : args.z;
if (location.href.indexOf("debug") > -1) {
  debug = true
} else {
  debug = false
}
if (showStyle == 3 && textIcon != 1) {
  enableSet = enableAqi = 0
}
if (enableSet) {
  $__("dtWea").className = "has-switch"
} else {
  $__("dtWea").className = "has-none"
}
if (args.h) {
  if (args.bd == 0) {
    $__("weather").style.height = args.h + "px"
  } else {
    if (args.bd == 1) {
      $__("weather").style.height = args.h - 2 + "px"
    }
  }
}
if (args.f != "") {
  if (args.f in colors) {
    weatherClass.push("c-" + colors[args.f])
  } else {
    weatherClass.push("c-" + args.f)
  }
}
setTempColor(args);
if (args.k != "" && args.bd == "1") {
  if (args.k in colors) {
    weatherClass.push("bd-" + colors[args.k])
  } else {
    weatherClass.push("bd-" + args.k)
  }
}
if (typeof (args.align) != "undefined") {
  weatherClass.push("align-" + args.align)
}
$__("weather").className = weatherClass.join(" ");
var direction = verticality ? "vertical" : "cross";
var picSize = iconSize ? "big" : "small";
if (showStyle == 3) {
  if (textIcon != 1) {
    $__("wea-dl").className = "cross-simple-icon"
  } else {
    $__("wea-dl").className = direction + "-text";
    $__("city-weaset").className = "city-weaset city-weaset-" + direction + "-text"
  }
} else {
  $__("wea-dl").className = direction + "-" + picSize;
  $__("city-weaset").className = "city-weaset city-weaset-" + direction;
  if (showDayNum == 1) {
    $__("city-weaset").className = "city-weaset city-weaset-vertical"
  }
  if (verticality == 2 && showStyle == 2) {
    $__("wea-dl").className = "cross-big-2";
    $__("city-weaset").className = "city-weaset city-weaset-cross";
    iconSize = 1
  }
}
var widgetCookie = getCookie("widget_dz_id");
if (widgetCookie == undefined) {
  widgetCookie = null
}
if (autoDetect) {
  if (widgetCookie != null) {
    loadJs("/t/7day_tq_js/" + widgetCookie + ".js")
  } else {
    loadJs("/t/detect2013_plugin.php")
  }
} else {
  if (enableSet && !debug) {
    if (widgetCookie != null) {
      loadJs("/t/7day_tq_js/" + widgetCookie + ".js")
    } else {
      loadJs("/t/7day_tq_js/" + defaultCityID + ".js")
    }
  } else {
    loadJs("/t/7day_tq_js/" + defaultCityID + ".js")
  }
}
if (enableAqi && showStyle != 3) {
  $__("aqi").style.display = "";
  if (widgetCookie != null) {
    loadJs("/t/shikuang/" + widgetCookie + ".js?" + (new Date()).valueOf(), handleAqi)
  } else {
    loadJs("/t/shikuang/" + defaultCityID + ".js?" + (new Date()).valueOf(), handleAqi)
  }
} else {
  $__("aqi").style.display = "none"
}
if (enableSet) {
  $__("switch").style.display = "";
  $__("switch").onclick = function () {
    loadJs("/js/citySelectData.js", seedProvCityCountySelect("selectProvince", "selectCity", "selectCounty"));
    $__("wea-dl").style.display = "none";
    $__("city-weaset").style.display = "";
    dzValues = getCookie("widget_dz_cityValues");
    if (dzValues != null && dzValues.indexOf(",") > -1) {
      arrDzValues = dzValues.split(",");
      if (arrDzValues.length != 3) {
        return
      }
      $__("selectProvince").value = arrDzValues[0];
      $("#selectProvince").trigger("change");
      $__("selectCity").value = arrDzValues[0] + "," + arrDzValues[1];
      $("#selectCity").trigger("change");
      $__("selectCounty").value = arrDzValues[2]
    } else {
      if (dzValues != null && dzValues.indexOf("_") > -1) {
        arrDzValues = dzValues.split("_");
        provIndex = arrDzValues[0];
        cityRealId = arrDzValues[2].match(/\d+$/)[0];
        countyRealId = arrDzValues[2].match(/^\d+/)[0];
        $__("selectProvince").value = provIndex;
        $("#selectProvince").trigger("change");
        for (i in provqx[provIndex]) {
          var a = new RegExp("-" + cityRealId);
          if (a.test(provqx[provIndex][i])) {
            cityIndex = i
          }
        }
        if (cityIndex) {
          $__("selectCity").value = provIndex + "," + cityIndex;
          $("#selectCity").trigger("change");
          $__("selectCounty").value = countyRealId
        }
      }
    }
  }
} else {
  $__("switch").style.display = "none"
}
$__("dzbtn").onclick = function () {
  var a = $("#selectCounty").val();
  if (a != "") {
    setDefaultDzWea(a);
    location.reload()
  }
}
  ;
$__("ccbtn").onclick = function () {
  $__("city-weaset").style.display = "none";
  $__("wea-dl").style.display = "block"
}
  ;
function $__ (a) {
  return document.getElementById(a)
}
function setDefaultDzWea (a) {
  setCookie("widget_dz_id", a, 24 * 365);
  setCookie("widget_dz_cityValues", $__("selectCity").value + "," + $__("selectCounty").value, 24 * 365)
}
function weaCallBack (d) {
  $__("city").innerHTML = d.city;
  if (typeof (smallCityList) != "undefined" && typeof (smallCityList[d.city]) != "undefined") {
    d.city = smallCityList[d.city]
  }
  $__("city").innerHTML = d.city;
  $__("city").href = "/s/" + d.pinyin + "/" + d.id + ".htm" + from;
  var g = $__("wea-items");
  if (typeof (d.dayType) != "undefined" && d.dayType == "15") {
    var k = "15"
  } else {
    var k = "7"
  }
  var f = '<a class="wea-more" target="_blank" href="/s/' + d.pinyin + "/" + d.id + ".htm" + from + '" title="点击查看' + k + '天天气"><i></i></a>';
  var h = [];
  for (i = 1; i <= showDayNum; i++) {
    var j = d["day" + i];
    switch (j[1]) {
      case "六":
        j[1] = '<em class="green">周' + j[1] + "</em>";
        break;
      case "日":
        j[1] = '<em class="red">周' + j[1] + "</em>";
        break;
      default:
        j[1] = "周" + j[1];
        break
    }
    switch (i) {
      case 1:
        j[5] = "今天(" + j[1] + ")";
        break;
      case 2:
        j[5] = "明天(" + j[1] + ")";
        break;
      case 3:
        j[5] = "后天(" + j[1] + ")";
        break;
      default:
        var b = j[5].split("月");
        j[5] = b[1] + "(" + j[1] + ")";
        break
    }
    if (showStyle == 3) {
      var e = j[0].split("～");
      if (textIcon == 1) {
        h.push('<div class="item' + (i == showDayNum ? " last" : "") + '"><a href="/s/' + d.pinyin + "/" + d.id + ".htm" + from + '" target="_blank"><span class="first">' + j[5] + '：</span><span class="second"><b class="temp"><em class="green">' + e[0] + '</em>～<em class="red">' + e[1] + '</em></b><b class="cloud">' + j[2] + '</b></span><span class="third">' + j[3] + "</span></a></div>")
      } else {
        if (textIcon == 2) {
          $("#wea-items").parent().attr("class", "haswind");
          $("#dtWea").remove();
          var c = j[3].split("风");
          var a = c.length;
          h = ['<div class="item"><a title="" target="_blank" href="/s/' + d.pinyin + "/" + d.id + ".htm" + from + '"><span class="first">' + d.city + '<i class="w' + j[4] + ' wdy_3d"></i></span><span class="second"><b class="temp"><em class="green">' + e[0] + '</em>～<em class="red">' + e[1] + '</em></b></span>&nbsp;<span class="third">' + c[0] + "风" + c[a - 1] + "</span></a></div>"];
          break
        } else {
          if (textIcon == 3) {
            $("#dtWea").remove();
            h = ['<div class="item"><a title="" target="_blank" href="/s/' + d.pinyin + "/" + d.id + ".htm" + from + '"><span class="first">' + d.city + '<i class="w' + j[4] + '"></i></span><span class="second"><b class="temp"><em class="green">' + e[0] + '</em>～<em class="red">' + e[1] + "</em></b></span></a></div>"];
            break
          }
        }
      }
    } else {
      if (showStyle == 2 && verticality == 2) {
        h.push('<div class="item"><a title="" target="_blank" href="/s/' + d.pinyin + "/" + d.id + ".htm" + from + '"><span class="first"><i class="w' + j[4] + '_l wdy_l_3d"></i>' + j[5].substr(0, 1) + " " + j[2] + '</span><span class="second">' + j[0] + "</span> </a></div>")
      } else {
        h.push('<div class="item' + (i == showDayNum ? " last" : "") + '"><a href="/s/' + d.pinyin + "/" + d.id + ".htm" + from + '" target="_blank"><span class="first"><i class="w' + j[4] + (!iconSize ? (showStyle == 2 ? " wdy_3d" : "") : (showStyle == 2 ? "_l wdy_l_3d" : "_l")) + '"></i>' + j[5] + '</span><span class="second">' + j[0] + '</span><span class="third">' + j[2] + "</span></a></div>")
      }
    }
  }
  if (showStyle == 3) {
    g.innerHTML = h.join("") + f
  } else {
    g.innerHTML = h.join("");
    $(f).appendTo("#weaItemsWraper")
  }
  var l = $("#wea-dl").find("a");
  if (l.length > 0) {
    l.click(function () {
      if (!/\d+?.htm/.test($(this).attr("href")) || !document.referrer) {
        return
      }
      match = document.referrer.match("([^./]+.[a-zA-Z]+)/");
      if (match && match.length == 2) {
        allCount("cj_" + match[1])
      }
    })
  }
  setTempColor(args)
}
function setTempColor (args) {
  if (args.ltf != "") {
    $("#wea-dl .green").css("color", "#" + args.ltf)
  }
  if (args.htf != "") {
    $("#wea-dl .red").css("color", "#" + args.htf)
  }
}
;