addCSS("theme/css/right_menu.css");

var right_menu = "right_menu";

document.documentElement.oncontextmenu = function (e) {
  var dom_right_menu = document.getElementById(right_menu);
  e = e || window.event;
  var mx = e.clientX;
  var my = e.clientY;
  var dom_right_menuWidth = parseInt(dom_right_menu.style.width);
  var pageWidth = document.documentElement.clientWidth;
  if (mx + dom_right_menuWidth < pageWidth) {
    dom_right_menu.style.left = mx + "px";
    dom_right_menu.style.top = my + "px";
  } else {
    dom_right_menu.style.right = mx + "px";
    dom_right_menu.style.top = my + "px";
  }
  dom_right_menu.style.display = "block";
  return false;
};

document.documentElement.onclick = function () {
  var dom_right_menu = document.getElementById(right_menu);
  dom_right_menu.style.display = "none";
};

document.oncontextmenu = function (e) {
  return false;
};

window.onload = function () {
  var dom_right_menu = document.getElementById(right_menu);
  liList = dom_right_menu.getElementsByTagName("li");
  for (i = 0; i < liList.length; i++) {
    liList[i].onclick = function () {
      // alert(this.innerHTML);
      var theme = this.innerHTML;
      var url = location.href.substring("h", location.href.indexOf("?"));
      urlTheme = url + "?theme=" + theme;
      location.replace(urlTheme);
    };
  }
};
