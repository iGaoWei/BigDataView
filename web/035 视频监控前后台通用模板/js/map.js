
    var cameras=[{id:'1001',type1:'视频设备',name:'监控摄像头1',type:'枪机',address:'堆龙区XXXX路78号',unit:'城管局',val:"",tit:"",tit1:"",coordX:91.015757,coordY: 29.638771},
    {id:'1002',type1:'视频设备',name:'监控摄像头21',type:'枪机',address:'堆龙区XXXX路1号',unit:'城管局',val:"",tit:"",tit1:"",coordX:91.035757,coordY: 29.628771},
    {id:'1003',type1:'视频设备',name:'监控摄像头3',type:'球机',address:'堆龙区XXXX路2号',unit:'城管局',val:"",tit:"",tit1:"",coordX:91.025757,coordY: 29.618771},
    {id:'1004',type1:'视频设备',name:'监控摄像头4',type:'球机',address:'堆龙区XXXX路3号',unit:'城管局',val:"",tit:"",tit1:"",coordX:91.055757,coordY: 29.438771},
    {id:'1005',type1:'视频设备',name:'监控摄像头5',type:'枪机',address:'堆龙区XXXX路4号',unit:'城管局',val:"",tit:"",tit1:"",coordX:91.115757,coordY: 29.538771},
    {id:'1006',type1:'视频设备',name:'监控摄像头6',type:'枪机',address:'堆龙区XXXX路5号',unit:'城管局',val:"",tit:"",tit1:"",coordX:91.215357,coordY: 29.528771}];
var noice=[{id:'1001',name:'噪音监控1',type:'便携式',address:'堆龙区XXXX路78号',unit:'城管局',val:"31",tit:"监测值",tit1:"阀值",coordX:91.015757,coordY: 29.638731},
    {id:'1002',type1:'噪音监控',name:'噪音监控2',type:'立式',address:'堆龙区XXXX路1号',unit:'城管局',val:"61",tit:"监测值",tit1:"阀值",coordX:91.025757,coordY: 29.628766},
    {id:'1003',type1:'噪音监控',name:'噪音监控3',type:'立式',address:'堆龙区XXXX路2号',unit:'城管局',val:"217",tit:"监测值",tit1:"阀值",coordX:91.115757,coordY: 29.618751},
    {id:'1004',type1:'噪音监控',name:'噪音监控4',type:'立式',address:'堆龙区XXXX路3号',unit:'城管局',val:"211",tit:"监测值",tit1:"阀值",coordX:91.050757,coordY: 29.438701},
    {id:'1005',type1:'噪音监控',name:'噪音监控5',type:'立式',address:'堆龙区XXXX路4号',unit:'城管局',val:"121",tit:"监测值",tit1:"阀值",coordX:91.113057,coordY: 29.538971},
    {id:'1006',type1:'噪音监控',name:'噪音监控6',type:'立式',address:'堆龙区XXXX路5号',unit:'城管局',val:"71",tit:"监测值",tit1:"阀值",coordX:91.115351,coordY: 29.528761}];

var pm=[{id:'1001',type1:'扬尘监控',name:'扬尘监控1',type:'便携式',address:'堆龙区XXXX路78号',unit:'城管局',val:"31",tit:"监测值",tit1:"阀值",coordX:91.13807,coordY: 29.727506},
    {id:'1002',type1:'扬尘监控',name:'扬尘监控2',type:'立式',address:'堆龙区XXXX路1号',unit:'城管局',val:"61",tit:"监测值",tit1:"阀值",coordX:91.096676,coordY: 29.651201},
    {id:'1003',type1:'扬尘监控',name:'扬尘监控3',type:'立式',address:'堆龙区XXXX路2号',unit:'城管局',val:"217",tit:"监测值",tit1:"阀值",coordX:91.13922,coordY: 29.62458},
    {id:'1004',type1:'扬尘监控',name:'扬尘监控4',type:'立式',address:'堆龙区XXXX路3号',unit:'城管局',val:"211",tit:"监测值",tit1:"阀值",coordX:91.084603,coordY: 29.691369},
    {id:'1005',type1:'扬尘监控',name:'扬尘监控5',type:'立式',address:'堆龙区XXXX路4号',unit:'城管局',val:"121",tit:"监测值",tit1:"阀值",coordX:91.118523,coordY: 29.62458},
    {id:'1006',type1:'扬尘监控',name:'扬尘监控6',type:'立式',address:'堆龙区XXXX路5号',unit:'城管局',val:"71",tit:"监测值",tit1:"阀值",coordX:91.169691,coordY: 29.609007}];

var site=[{id:'1001',type1:'工地点位',name:'工地信息',address:'堆龙区XXXX路78号',unit:'城管局',coordX:91.014751,coordY: 29.518971,coordX1:91.018488,coordY1:  29.518342,coordX2:91.017266,coordY2: 29.516456,coordX3:91.011517,coordY3:  29.517336},
    {id:'1002',type1:'工地点位',name:'工地信息',address:'堆龙区XXXX路78号',unit:'城管局',coordX:90.978675,coordY: 29.514508,coordX1:90.98543,coordY1: 29.512245,coordX2:90.981406,coordY2:  29.50973,coordX3:90.9758,coordY3: 29.510987},
    {id:'1001',type1:'工地点位',name:'工地信息',address:'堆龙区XXXX路78号',unit:'城管局',coordX:90.97616,coordY: 29.504701,coordX1:90.978747,coordY1:  29.502375,coordX2:90.975154,coordY2: 29.502752,coordX3:90.976016,coordY3: 29.504072}
]

var val1="枪机";
var val2="立式";
var f1="噪音";
var f2="视频";
var f3="扬尘"
var scrvideo="img/videoLine.png";
var nocset="img/nosceset.png";
var pmImg="img/pai32.png";

function showCamera(setNum,val,srcVal,falg){
    for( i=0;i<setNum.length;i++){
        var pt = new BMap.Point(setNum[i].coordX,setNum[i].coordY);
        var myIcon = new BMap.Icon(srcVal, new BMap.Size(300,157));
        var mak2= new BMap.Marker(pt,{icon:myIcon});



        var  label = new BMap.Label(setNum[i].val,{offset:new BMap.Size(20,-30)});
        if(falg=="噪音"){
            mak2.setLabel(label);
        }

        if(setNum[i].type==val){
            label.setStyle({

                color: '#fff',
                background:"url(img/ico_level_06.png) no-repeat",
                width:"48px",
                height:"38px",
                textAlign: "center",
                lineHeight: "30px",

                border:0





            });
        }
        else {
            label.setStyle({


                color: '#fff',
                background:"url(img/ico_level_01.png) no-repeat",
                border:0,
                width:"48px",
                height:"38px",
                lineHight:"38px",
                lineHeight: "30px",
                textAlign: "center"





            });
        }

        var sContent1 =
            "<div style='width: 350px'>"+
            "<h4 style='margin:6px 0;padding:0.2em 0;border-bottom: 1px solid #eeeeee;font-weight: 600'><span>"+setNum[i].id+"</span><span style='float: right;color: #0D8BBD'>"+setNum[i].type1+"</span></h4>" +

            "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>设备类型：</label>"+setNum[i].type+"</p>" +

            "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><label style='font-weight: 600'>位置信息：</label>"+setNum[i].address+"</p>" +
            "<p style='border-bottom: 1px dashed #cccccc'></p>"+
            "<p style='margin-top:10px;line-height:1.5;font-size:13px;'><span style='color: red;margin-right: 5px'>"+setNum[i].tit+"</span><span>"+setNum[i].val+"</span><span style='color: green;margin-right: 5px;margin-left: 15px'>"+setNum[i].tit1+"</span><span>"+setNum[i].val+"</span><a href='javascript:void' style='float: right;margin-right: 5px'>播放</a> </p>"+
            "</div>";

        var infoWindow = new BMap.InfoWindow(sContent1);

        mak2.addEventListener("click", function(){
            this.openInfoWindow(infoWindow);})
        map.addOverlay(mak2);
    }
    map.panTo(point);
}
function showSite(setNum){
    for( i=0;i<setNum.length;i++){
        var polygon = new BMap.Polygon([
            new BMap.Point(setNum[i].coordX,setNum[i].coordY),
            new BMap.Point(setNum[i].coordX1,setNum[i].coordY1),
            new BMap.Point(setNum[i].coordX2,setNum[i].coordY2),
            new BMap.Point(setNum[i].coordX3,setNum[i].coordY3)

        ], {strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});  //创建多边形
        map.addOverlay(polygon);
        map.panTo(polygon);

    }

}


// 百度地图API功能
var map = new BMap.Map("map_box");    // 创建Map实例
var point = new BMap.Point(91.010439, 29.672291);
map.centerAndZoom(point, 11);
//添加地图类型控件
var size1 = new BMap.Size(15, 50);
map.addControl(new BMap.MapTypeControl({
    offset: size1,
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP,

    ]}));

map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    // 随机向地图添加25个标注
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    var lngSpan = Math.abs(sw.lng - ne.lng);
    var latSpan = Math.abs(ne.lat - sw.lat);
var x01;var y01;


//点击获取坐标
//function showInfo(e){
//    alert(e.point.lng + ", " + e.point.lat);
//}
//map.addEventListener("click", showInfo);








    //噪音设备
$("#check02").change(function(){
    // inputCheck(point,marker1,infoWindow1);
    if($('input[type=checkbox]').is(':checked')){
        showCamera(cameras,val1,scrvideo,f2);}
    else{
        map.clearOverlays();
    }
})
    //视频设备
    $("#check01").change(function(){
       // inputCheck(point,marker1,infoWindow1);
        if($('input[type=checkbox]').is(':checked')){
        showCamera(noice,val2,nocset,f1);
        }
        else{
            map.clearOverlays();
        }
    })
//扬尘设备
$("#check03").change(function(){
    // inputCheck(point,marker1,infoWindow1);
    if($('input[type=checkbox]').is(':checked')){
        showCamera(pm,val2,pmImg,f1);
    }
    else{
        map.clearOverlays();
    }
})
//工地
$("#check04").change(function(){

    if($('input[type=checkbox]').is(':checked')){
        showSite(site);
    }
    else{
        map.clearOverlays();
    }
})



//定位
    function addLocal(x,y){


      var pt=new BMap.Point(x, y);
        var markers = new BMap.Marker(pt);
        map.addOverlay(markers);
        map.panTo(pt);
        markers.addEventListener("click",function(){
            this.openInfoWindow(infoWindow);
        })
    }
//定位1
function addLocal1(){


    var pt=new BMap.Point(91.00469, 29.562774);
    var markers = new BMap.Marker(pt);
    map.addOverlay(markers);
    map.panTo(pt);
    markers.addEventListener("click",function(){
        this.openInfoWindow(infoWindow);
    })
}


$(".search_location").click(function(){

    addLocal();
})
function findAddr(val){
    $("#add_res").show();
    $("#addr_local").hide();



    var options = {
        onSearchComplete: function(results){

            var len=results.Br.length;
            var liHtml="";
            for(i=0;i<len;i++){
                var tit=results.Br[i].title;
                var addr=results.Br[i].address;
                x01=results.Br[i].point.lng;
               y01=results.Br[i].point.lat;

               var li="<li><p><strong>"+tit+"</strong><span class='right'><a href='javascript:void(0)' title='视频'><img src='img/nav_5.png'> </a><a href='javascript:void(0)' title='定位' onclick='addLocal(x01,y01)'><img src='img/find01.png'> </a> </span></p> <p>"+addr+"</p></li>";
                console.log(li);
                liHtml+=li;

            }

            document.getElementById("addr_ul").innerHTML=liHtml;

        }
    };
   val=$("#addName").val();
    var local = new BMap.LocalSearch(map, options);
    local.search(val);
}
function findAddr1(){
    $("#addr_local li").click(function(){
        $("#add_res").show();
        $("#addr_local").hide();
        var options = {
            onSearchComplete: function(results){


                var len=results.Br.length;
                var liHtml="";
                for(i=0;i<len;i++){
                    var tit=results.Br[i].title;
                    var addr=results.Br[i].address;
                   x01=results.Br[i].point.lng;
                    y01=results.Br[i].point.lat;
                    localPoint= new BMap.Point(x01,y01);



                    var li="<li><p><strong>"+tit+"</strong><span class='right'><a href='javascript:void(0)' title='视频'><img src='img/nav_5.png'> </a><a href='javascript:void(0)' title='定位' onclick='addLocal(x01,y01)'><img src='img/find01.png'> </a> </span></p> <p>"+addr+"</p></li>";

                    liHtml+=li;

                }

                document.getElementById("addr_ul").innerHTML=liHtml;

            }
        };
      var  val=$(this).find(".img_div_text").text();
        var local = new BMap.LocalSearch(map, options);
        local.search(val);
    })

}


$(function(){
    findAddr1();
})
