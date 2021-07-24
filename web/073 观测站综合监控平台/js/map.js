/*大屏*/
(function () {
	'use strict';
	var map = new BMap.Map("allmap"); // 创建Map实例
	map.centerAndZoom(new BMap.Point(123.432790922, 41.8086447835), 10); // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.setMapStyle(   
        {
            style:"light"
        }
      );
    getInfo();

    function getInfo()    {
        var imgname='farm';
        $.ajax({
            url:"./json/package.json",
            type:'get',
            dataType:'json',
            async:true,
            success:function(data)
            {
                var online = 0;
                for (var i = 0; i < data.length; i++) {
                    (function (x) {
                        var point = new BMap.Point(data[i].lng,data[i].lat);    // 创建点坐标
                        var myIcon = new BMap.Icon("/demo/img/"+data[i].sfzx+".png", new BMap.Size(32, 32), {
                            offset: new BMap.Size(10, 25), // 指定定位位置
                            imageOffset: new BMap.Size(0,0) // 设置图片偏移
                        });
                        var marker = new BMap.Marker(point,{icon:myIcon});
                        var info = '<div style="width: 200px;height: 160px;background-color: rgba(13, 33, 70, 0.8);border: 1px solid #155596; padding: 12px 0 20px 35px;box-sizing: border-box; position: relative; border-bottom: none;">\n' +
                            '        <div style="text-align:left; margin-bottom: 2px;">\n' +
                            '            <span style="font-size: 16px; color: #52d2ff;margin-right: 6px;" >行政区:</span>\n' +
                            '            <span style="font-size: 14px; color: #fff;">黑三县</span>\n' +
                            '        </div>' +
                            '        <div style="text-align: left;margin-bottom: 2px;">\n' +
                            '            <span style="font-size: 16px; color: #52d2ff;margin-right: 6px;" >观测作物:</span>\n' +
                            '            <span style="font-size: 14px; color: #fff;">西红柿</span>\n' +
                            '        </div>' +
                            '        <div style="text-align: left;margin-bottom: 2px;">\n' +
                            '            <span style="font-size: 16px; color: #52d2ff;margin-right: 6px;" >站号:</span>\n' +
                            '            <span style="font-size: 14px; color: #fff;">LOO33</span>\n' +
                            '        </div>' +
                            '        <div style="text-align: left;margin-bottom: 2px;">\n' +
                            '            <span style="font-size: 16px; color: #52d2ff;margin-right: 6px;" >站名:</span>\n' +
                            '            <span style="font-size: 14px; color: #fff;">西红柿观测站</span>\n' +
                            '        </div>' +
                            '        <div style="text-align: left;margin-bottom: 2px;">\n' +
                            '            <span style="font-size: 16px; color: #52d2ff;margin-right: 6px;" >主板电压:</span>\n' +
                            '            <span style="font-size: 14px; color: #fff;">21.0V</span>\n' +
                            '        </div>' +
                            '        <div style="text-align: left;margin-bottom: 2px;">\n' +
                            '            <span style="font-size: 16px; color: #52d2ff;margin-right: 6px;" >主板温度:</span>\n' +
                            '            <span style="font-size: 14px; color: #fff;">12.2℃</span>\n' +
                            '        </div>\n' +
                            '        <img src="./img/jiantou.png" alt="" style="display: blolk;position: absolute;bottom: -13px ;right: 0;">\n' +
                            '    </div>';

                        var infoBox = new BMapLib.InfoBox(map, info, {
                            closeIconMargin: "10 10 0 0",
                            closeIconUrl: "./img/jiantou.png",
                            enableAutoPan: true,
                            align: INFOBOX_AT_TOP,
                            position :1,
                            offset : new BMap.Size(-5, 30)
                        });
                        infoBox.open(marker);
                        infoBox.hide();
                        marker.addEventListener("mouseover", function () {
                           infoBox.show(marker);
                        });
                        marker.addEventListener("mouseout", function () {
                            infoBox.hide(marker);
                        });
                        map.addOverlay(marker);
                    })(i);
                }
            },
            error:function()
            {
                alert('网络故障，请联系管理员！');
            }
        });
    }
})()