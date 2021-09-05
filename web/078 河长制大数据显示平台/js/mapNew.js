/**
 * Created by 30947 on 2018/8/10.
 */

    var map;
    map = new BMap.Map("divMap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // 随机向地图添加25个标注
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
    var markers = new BMap.Marker(new BMap.Point(116.404, 39.915));
    var point;
    var marker;
    var marker1;
    var marker2;
    var marker3;
    var marker4;
    //水质信息弹出框
    var sContent =
        "<div style='width: 350px'>"+
        "<h4 style='margin:6px 0;padding:0.2em 0'><span>MG2013</span><span style='float: right'>水质监测</span></h4>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>维护单位：</label>沱江简阳段31号1段</p>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>位置：</label>沱江简阳段31号1段</p>" +
        "<p style='border-bottom: 1px dashed #cccccc'></p>"+
        "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><span style='display: inline-block;width: 32%;text-align: center;color: red'>高猛酸盐(1.2M/L)</span><span  style='display: inline-block;width: 32%;text-align: center'>总磷(1.2M/L)</span><span  style='display: inline-block;width: 32%;text-align: center'>氨氮(1.2M/L)</span></p>"+
        "</div>";
    //流量信息弹出框
    var sContent1 =
        "<div style='width: 350px'>"+
        "<h4 style='margin:6px 0;padding:0.2em 0'><span>MG2013</span><span style='float: right'>流量监测</span></h4>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>维护单位：</label>沱江简阳段31号1段</p>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>位置：</label>沱江简阳段31号1段</p>" +
        "<p style='border-bottom: 1px dashed #cccccc'></p>"+
        "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><span style='display: inline-block;width: 32%;text-align: center;color: red'>水流时速(1.2KM/S)</span><span  style='display: inline-block;width: 32%;text-align: center'>大小(1.2M/L)</span></p>"+
        "</div>";
    //水位信息弹出框
    var sContent2 =
        "<div style='width: 350px'>"+
        "<h4 style='margin:6px 0;padding:0.2em 0'><span>MG2013</span><span style='float: right'>水位监测</span></h4>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>维护单位：</label>沱江简阳段31号1段</p>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>位置：</label>沱江简阳段31号1段</p>" +
        "<p style='border-bottom: 1px dashed #cccccc'></p>"+
        "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><span style='display: inline-block;width: 32%;text-align: center;color: red'>最高位(1.2M)</span><span  style='display: inline-block;width: 32%;text-align: center'>最低位(0.2M)</span></p>"+
        "</div>";
    //视频信息弹出框
    var sContent3 =
        "<div style='width: 350px'>"+
        "<h4 style='margin:6px 0;padding:0.2em 0'><span>MG2013</span><span style='float: right'>视频监测</span></h4>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><video style='width: 100%;height: 200px;background-color: black'></video></p>"


    "</div>";
    //车辆信息弹出框
    var sContent4 =
        "<div style='width: 350px'>"+
        "<h4 style='margin:6px 0;padding:0.2em 0'><span>川A2013</span><span style='float: right'>车辆监测</span></h4>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>驾驶人：</label>李小华</p>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>所属人：</label>李小华</p>" +

        "<p style='margin:0;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>所在位置：</label>沱江简阳段31号1段</p>" +
        "<p style='border-bottom: 1px dashed #cccccc'></p>"+
        "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><span style='display: inline-block;width: 32%;text-align: center;'>标志(508)</span><span  style='display: inline-block;width: 32%;text-align: center'>排量(2T)</span><span style='display: inline-block;width: 32%;text-align: center;'>2015-10-09</span></p>"+
        "</div>";
    var infoWindow = new BMap.InfoWindow(sContent);  // 创建水质信息窗口对象
    var infoWindow1 = new BMap.InfoWindow(sContent1);  // 创建水量信息窗口对象
    var infoWindow2 = new BMap.InfoWindow(sContent2);  // 创建水位信息窗口对象
    var infoWindow3 = new BMap.InfoWindow(sContent3);  // 创建视频信息窗口对象
    var infoWindow4 = new BMap.InfoWindow(sContent4);  // 创建视频信息窗口对象


    //选择专题图添加点
    //水质监测点
    $("#zt_4").change(function(){
        inputCheck(point,marker,infoWindow);

    })
    //水量监测点
    $("#zt_1").change(function(){
        inputCheck(point,marker1,infoWindow1);

    })
    //水位监测点
    $("#zt_5").change(function(){
        inputCheck(point,marker3,infoWindow2);
    })
    //视频监测点
    $("#zt_6").change(function(){
        inputCheck(point,marker2,infoWindow3);

    })
    //车辆监测点
    $("#zt_2").change(function(){
       inputCheck(point,marker4,infoWindow4);

    })
//定位
    function addLocal(){


        map.addOverlay(markers);
        markers.addEventListener("click",function(){
            this.openInfoWindow(infoWindow);
        })
    }
//弹出框调用方法
    function inputCheck(pt,mak,info){


        if($('input[type=checkbox]').is(':checked')){
            for (var i = 0; i < 25; i ++) {
                pt = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
                mak= new BMap.Marker(pt);
                map.addOverlay(mak);
                mak.addEventListener("click", function(){
                    this.openInfoWindow(info);})
            }
        }
        else{
            map.clearOverlays();
        }
    }

$(".search_location").click(function(){

    addLocal();
})
//轨迹回放
function run(){
    var myP1 = new BMap.Point(116.380967,39.913285);    //起点
    var myP2 = new BMap.Point(116.424374,39.914668);    //终点
    var myIcon = new BMap.Icon("img/car.png", new BMap.Size(32, 70), {    //小车图片
        //offset: new BMap.Size(0, -5),    //相当于CSS精灵
        imageOffset: new BMap.Size(0, 0)    //图片的偏移量。为了是图片底部中心对准坐标点。
    });
    var driving2 = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车实例
    driving2.search(myP1, myP2);    //显示一条公交线路
    var driving = new BMap.DrivingRoute(map);    //驾车实例
    driving.search(myP1, myP2);
    driving.setSearchCompleteCallback(function(){
        var pts = driving.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组
        var paths = pts.length;    //获得有几个点

        var carMk = new BMap.Marker(pts[0],{icon:myIcon});
        map.addOverlay(carMk);
        i=0;
        function resetMkPoint(i){
            carMk.setPosition(pts[i]);
            if(i < paths){
                setTimeout(function(){
                    i++;
                    resetMkPoint(i);
                },100);
            }
        }
        setTimeout(function(){
            resetMkPoint(5);
        },100)

    });
}


