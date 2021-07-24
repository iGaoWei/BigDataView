/**
 * 地图渲染高亮区域
 * 大屏
 */
var mapData = [
    {
        "name":"西部区域",
        "peopleNum":80,
        "chargeName":"张三",
        "timely ":"80%",
        "complete":"98%",
        "lng":116.30357809450051,
        "lat":39.90696803762701

    },{
        "name":"东部区域",
        "peopleNum":102,
        "chargeName":"李四",
        "timely ":"90%",
        "complete":"92%",
        "lng":116.45429678343832,
        "lat":39.91039161216257
    },{
        "name":"中部区域",
        "peopleNum":110,
        "chargeName":"王五",
        "timely ":"86%",
        "complete":"96%",
        "lng":116.39198370361552,
        "lat":39.914999999999985
    },{
        "name":"南部区域",
        "peopleNum":76,
        "chargeName":"赵四",
        "timely ":"88%",
        "complete":"92%",
        "lng":116.39318533325387,
        "lat":39.8459734273028
    },{
        "name":"北部区域",
        "peopleNum":102,
        "chargeName":"王二",
        "timely ":"92%",
        "complete":"96%",
        "lng":116.39267034912311,
        "lat":39.9697285689225
    }
];
//
//
//
function drawMap(result,map) {
    var overlays = [];
    result.forEach(function (item,index) {
        if(item["lng"] && item["lat"]){
            var point = new BMap.Point(item["lng"],item["lat"]);
            var marker = new BMap.Marker(point,{"data":item,"style":"highlightIcon","selectedStyle":"selectIcon"});
            overlays.push(marker);
        }
    });
    map.addOverlays(overlays,function (event) {
        overlays.forEach(function (item,index) {
            map.changeOverlayStyle(item,"highlightIcon");
        });
        var clickOverlay = map.getOverlayByEvent(event);
        map.changeOverlayStyle(clickOverlay,"selectIcon");

        //信息窗口
        var infoWindowPoint = clickOverlay.point;
        // map.setCenter(infoWindowPoint);
        var infoHtml =
            '<div class="info-container">' +
                '<div class="info-container-title">' +
                    '<span>'+clickOverlay["data"]["NAME"]+'</span>' +
                '</div>' +
                '<div class="info-container-people">' +
                    '<span>人员总数：</span><span>'+clickOverlay["data"]["PEOPLENUM"]+'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>负责人：</span><span>'+clickOverlay["data"]["CHARGENAME"]+'</span>'+
                '</div>' +
                '<div class="info-container-speed">' +
                    '<div class="info-container-speed-content">' +
                        '<span class="info-container-speed-content-inside-1"></span>'+
                        '<span class="info-container-speed-content-inside-1-num">'+clickOverlay["data"]["TIMELY"]+'</span>'+
                    '</div>' +
                    '<div class="info-container-speed-content">' +
                        '<span class="info-container-speed-content-inside-2"></span>'+
                        '<span class="info-container-speed-content-inside-2-num">'+clickOverlay["data"]["COMPLETE"]+'</span>'+
                    '</div>' +
                '</div>' +
            '</div>';
        var infoWindow=new BMap.InfoWindow(infoHtml);
        map.openInfoWindow(infoWindow,infoWindowPoint);
        $(".info-container-speed-content-inside-1").animate({
            width:clickOverlay["data"]["TIMELY"]
        },2000);
        $(".info-container-speed-content-inside-2").animate({
            width:clickOverlay["data"]["COMPLETE"]
        },2000);
    });
}
