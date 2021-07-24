function callResourceAdapter(type, url, requestContent, successCallback, failCallback) {
    if (requestContent == null){
        requestContent = {};
    }
    if (type == null){
        type = 'POST';
    }
    function invocationSuccess(result) {
        var resultJson = result;
        if(resultJson.msgCode == '800'){
            if (successCallback  && typeof(successCallback) == "function") {
                successCallback(resultJson.rows,resultJson.map,resultJson.vo,resultJson.msg);
            }
        }
        if(resultJson.msgCode == '801'){
            showToast(resultJson.msg);
        }
        if(resultJson.msgCode == '900'){
            var message = '系统错误，请联系管理员';
            if(resultJson.msg){
                message = resultJson.msg;
            }
            showToast(message);
            if (failCallback  && typeof(failCallback) == "function") {
                failCallback();
            }
        }
    }
    function invocationFailure(error) {
        showToast('无法连接至服务器,请稍后再试');
        if (failCallback  && typeof(failCallback) == "function") {
            failCallback();
        }
    }
    $.ajax({
        type: type,
        url: serverUrl+url,
        data: JSON.stringify(requestContent),
        crossDomain:true,
        contentType: "application/json; charset=utf-8",
        // dataType: "json",
        timeout:120000,
        statusCode:{
            404: function() {
                showToast('服务器无响应,请稍后再试')
            },
            422: function() {
                showToast('应用程序请求对象错误,请稍后再试')
            },
            403: function() {
                showToast('无访问权限')
            },
            400: function() {
                showToast('应用程序请求无效,请稍后再试')
            },
        },
        success: function (data, textStatus, jqXHR) {
            switch (jqXHR.status) {
                case 200:
                    invocationSuccess(data);
                    break;
                default:
                    break;
            }
        },
        error: function (jqXHR, textStatus,errorThrown) {
            invocationFailure(jqXHR);
        }
    })
  }

 function showToast(text,timeout) {
      $(".yui-toast-mask").remove();
      var html = [
          '<div class="yui-toast-mask">',
          '<div class="yui-toast">',
          '<div class="yui-toast-text">'+text+'</div>',
          '</div>',
          '</div>',
      ];
      var dom = $(html.join(''));
      $("body").append(dom);
      if(timeout&&typeof(timeout)=='number'){
          setTimeout(function () {
              dom.remove();
          },timeout);
      }
      $(".yui-toast-mask").click(function () {
          dom.remove();
      });
  }

  function hideToast() {
      $(".yui-toast-mask").remove();
  }

  function loaderShow() {
    var loadPage = $('<div class="loading" style="top:30%;left:50%;position: absolute;background: transparent;text-align: center;">' +
        '<img src="../images/loading.gif" />' +
        '</div>');
    $("#content").append(loadPage);
  }

  function loaderHide() {
    $(".loading").remove();
  }

  function getLocationDom() {
      var that = this;
      var html = "<div id='breadcrumb'>";
      $.each(LOCATION,function(index,data){
          if(index==0){
              html += '<a href="javascript:void(0)" class="tip-bottom"><i class="fa fa-home"></i>'+data+'</a>';
              return ;
          }
          if(index==LOCATION.length-1){
              html += '<a class="current">'+data+'</a>';
              return ;
          }
          html += "<a href='javascript:void(0)'>"+data+"</a>";
      });
      html += "</div>";
      $("#content-header").html(html);
  }

  function getNav(successCallback) {
      var postNav = [];
      postNav.push('<li class="submenu" data-for= "home">','<a href="javascript:void(0)"><span>首页</span></a>');
      postNav.push('<li class="submenu" data-for= "analysis">','<a href="javascript:void(0)"><span>指标统计</span></a>');
        postNav.push('<li class="submenu" data-for= "trend">','<a href="javascript:void(0)"><span>趋势排名</span></a>');
      $("#sidebar ul").html(postNav.join(''));

      if (successCallback&&typeof(successCallback) == 'function'){
           successCallback();
       }
  }

  function bindNav(navId) {
    var HEIGHT = $("body").height()-100;
    $("#content").height(HEIGHT);

    $(".container-fluid").slimScroll({
        height: HEIGHT+'px', //容器高度,默认250px
        size: '5px', //滚动条宽度,默认7px
        railColor: '#000000', //滚动条背景轨迹颜色,默认#333333
        railOpacity: 0.3, //滚动条背景轨迹透明度,默认0.2
        wheelStep: 10, //滚动条滚动值,默认20
        disableFadeOut: false //是否禁用鼠标在内容处一定时间不动隐藏滚动条,当设置alwaysVisible为true时该参数无效,默认false
    });
    $("#"+navId).delegate("li[data-for='home']","click",function(){

      window.location.href="home.html"

    }).delegate("li[data-for='analysis']","click",function(){

      window.location.href="analysis.html"

    }).delegate("li[data-for='trend']","click",function(){

      window.location.href="trend.html"

    })
  }

  function last_year_month() {
    var list = [];
    var date = getFormatDate(new Date());
    var year = date.split("-")[0];
    var mouth = date.split("-")[1];
    for (var i=0;i<12;i++){
        var objM = mouth-i;
        var objY = year;
        if(objM<=0){
            objM = objM+12;
            objY = year -1;
        }
        if(objM<10){
            objM = "0"+objM;
        }
        var obj = objY +"-"+objM;
        list.push(obj)

    }
    return list;
  }

  function getFormatDate(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    if(month<10){
        month = '0'+month.toString();
    }
    month = month.toString();
    if(day<10){
        day = '0'+day.toString();
    }
    day = day.toString();
    return year+'-'+month+'-'+day;
}

function last_month_day() {
    var list = [];
    var date = getFormatDate(new Date());
    var year = date.split("-")[0];
    var mouth = date.split("-")[1];
    var day = date.split("-")[2]-1;
    for (var i=0;i<30;i++){
        var objM = mouth;
        var objD = day-i;
        if(objD<=0){
            objD = objD+30;
            objM = mouth -1;
            objM = "0"+objM
        }

        var obj = year+"-"+objM +"-"+objD;
        list.push(obj)
    }
    return list;
}

function getFormatMonth(date){
  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  if(month<10){
      month = '0'+month.toString();
  }
  month = month.toString();
  if(day<10){
      day = '0'+day.toString();
  }
  day = day.toString();
  return year+'-'+month;
}

//分页
function paging(totalPage,currentPage) {
    $("#pagination").pagination({
        currentPage: currentPage,
        totalPage: totalPage,
        isShow: true,
        count: 8,
        homePageText: "首页",
        endPageText: "尾页",
        prevPageText: "上一页",
        nextPageText: "下一页",
        callback: function(current) {
            $("#current").text(current)
        }
    });
}
