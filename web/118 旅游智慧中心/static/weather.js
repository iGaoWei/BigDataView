function dynamicIp() {
    $.ajax({
        //该url可以从服务器获取我们需要的ip
        url: 'https://bird.ioliu.cn/ip',
        type: 'get',
        //dataType一定要设置为jsonp，因为浏览器有同源策略的限制
        //同源即：协议、域名、端口都要相同
        //如果不相同，则Ajax无法获取服务器返回的结果
        //如果想要获取不同源的数据，可以将dataType设置为jsonp，就可以解决跨域的问题
        dataType: 'jsonp',
        //从url返回一个成功回调函数success，该函数会携带返回结果，将结果以data传入回调函数
        success: function (data) {
            //通过返回结果data获取我们当前位置的ip地址
            var cityip = data.data.ip;
            //获取到当前位置的ip地址后，将ip地址赋值给cityip
            //调用我们的动态获取天气的函数dynamicGetWeather，将cityip以参数的形式传入
            dynamicGetWeather(cityip);
            console.log(data.data)
        }
    })
}
//页面加载时自动执行获取ip地址的函数dynamicIp()
dynamicIp();
//动态获取天气的方法
function dynamicGetWeather(cityip) {
    //声明一个pattern正则表达式规则，用来检测我们更新地区时传入的参数是ip地址还是汉字地区名称，如"广州"
    var pattern = new RegExp("[\u4E00-\u9FA5]+");
    if (pattern.test(cityip)) {
        //当传入的参数cityip为汉字时，我们将url中的参数设置为city=，以此来接收我们传入的城市名称来获取该城市的天气信息
        $.ajax({
            url: 'https://www.tianqiapi.com/api/?version=v61&appid=44365584&appsecret=L7PdEjmg&city=' + cityip,
            type: 'get',
            dataType: 'json',
            //url成功返回时，执行回调函数success，获取到服务器返回的数据，以data传入
            success: function (data) {
                
                console.log(data, 'weather')
                //以下是html页面数据的实时渲染
                $('.air_level').text(data.air_level);
                $('.updata_time').text(data.update_time);
                $('.tem').text(data.tem);
                $('.wea').text(data.wea);
                $('.win').text(data.win);
                $('.win_meter').text(data.win_meter);
                $('.humidity').text(data.humidity);
                $('.air_pm25').text(data.air_pm25);
            }
        })
    } else {
        //当传入的参数cityip为ip地址(如：113.101.59.68)时，我们将url中的参数设置为ip=，以此来接收我们传入的ip来获取该城市的天气信息
        //这个方法一般只有页面第一次加载，或者页面刷新时才会执行，因为我们切换地区时，传入的都是汉字，执行的是if为true时执行的方法
        $.ajax({
            url: 'https://www.tianqiapi.com/api/?version=v61&appid=44365584&appsecret=L7PdEjmg&ip=' + cityip,
            type: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data, 'weather')
                // //以下是html页面数据的实时渲染
                $('.air_level').text(data.air_level);
                $('.updata_time').text(data.update_time);
                $('.tem').text(data.tem);
                $('.wea').text(data.wea);
                $('.win').text(data.win);
                $('.win_meter').text(data.win_meter);
                $('.humidity').text(data.humidity);
                $('.air_pm25').text(data.air_pm25);
            }
        })
    }
}
$('.refresh').on('click', function () {
    dynamicIp();
})