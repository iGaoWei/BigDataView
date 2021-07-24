/**
 *
 */
// 案件处理情况分析
function indexChar(){
    var myChart = echarts.init($(".boxCentterRight")[0]);
    option = {
        title : {
            text: '人口构成占比',
            x:'center',
            y:"bottom",

            textStyle: {
                fontSize: 14,
                color: '#00f0ff'          // 主标题文字颜色
            },
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable : false,
        series : [
            {
                name:'人口占比',
                type:'pie',
                radius : '65%',
                center: ['50%', '38%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false

                        },
                        labelLine: {
                            show: false
                        }
                    }},
                data:[
                    {value:335, name:'幼儿'},
                    {value:310, name:'儿童'},
                    {value:234, name:'青年'},
                    {value:135, name:'中年'},
                    {value:1548, name:'老年'}
                ]
            }
        ]
    };

    myChart.setOption(option);
};
// 车辆，人员，地名地址切换
function nav(){
    $(".con02TopUL li").each(function(index){
        $(this).click(function(){
            $(".con02TopUL li").removeClass("con02liAcitve");
            $(this).addClass("con02liAcitve");
            $(".boxRithtChangeBox .boxChangeCon").eq(index).show().siblings(".boxChangeCon").stop().hide();
        })
    })
}
// 警员信息滚动
function scoll() {
    $('.boxLeftAlamCon').liMarquee({
        direction: 'down',
        scrollamount: 20
    });

}
//显示时间
function dispalyDate() {
    var show_week=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
   var nowDate=new Date();
    var week=nowDate.getDay();
    var years=nowDate.getFullYear();
    var month=nowDate.getMonth()+1;
    var date=nowDate.getDate();
    var hour=nowDate.getHours();
    var min=nowDate.getMinutes();
    var now=years+'年'+time(month)+'月'+time(date)+"日"+time(hour)+":"+time(min)+" "+show_week[week-1];
    $("#nowTime").text(now);

}
function time(s) {
    return s<10?'0'+s:s;
    
}
function page() {


    $("#pageAll li:gt(2)").hide();//初始化，前面4条数据显示，其他的数据隐藏。
    var total_q = $("#pageAll li").index() + 1;//总数据
    var current_page = 3;//每页显示的数据
    var current_num = 1;//当前页数
    var total_page;
    if(total_q%current_page==0){
        total_page=total_q/current_page;
    }
    else{
        total_page=Math.ceil(total_q/current_page);

    }
    var next = $(".next");//下一页
    var prev = $(".prev");//上一页
    $(".total").text(total_page);//显示总页数
    $(".current_page").text(current_num);//当前的页数
    //下一页
    $(".next").click(function () {
        if (current_num == total_page) {
            return false;//如果大于总页数就禁用下一页
        }
        else {
            $(".current_page").text(++current_num);//点击下一页的时候当前页数的值就加1
            $.each($('#pageAll li'), function (index, item) {
                var start = current_page * (current_num - 1);//起始范围
                var end = current_page * current_num;//结束范围
                if (index >= start && index < end) {//如果索引值是在start和end之间的元素就显示，否则就隐
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
    //上一页方法
    $(".prev").click(function () {
        if (current_num == 1) {
            return false;
        } else {
            $(".current_page").text(--current_num);
            $.each($('#pageAll li'), function (index, item) {
                var start = current_page * (current_num - 1);//起始范围
                var end = current_page * current_num;//结束范围
                if (index >= start && index < end) {//如果索引值是start和end之间的元素就显示，否则就隐藏
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    })
}
function page01() {


    $("#pageAll01 li:gt(2)").hide();//初始化，前面4条数据显示，其他的数据隐藏。
    var total_q = $("#pageAll01 li").index() + 1;//总数据
    var current_page = 3;//每页显示的数据
    var current_num = 1;//当前页数
    var total_page;
    if(total_q%current_page==0){
        total_page=total_q/current_page;
    }
    else{
        total_page=Math.ceil(total_q/current_page);

    }
    var next = $("#next02");//下一页
    var prev = $("#prev02");//上一页
    $("#total02").text(total_page);//显示总页数
    $("#current_page02").text(current_num);//当前的页数
    //下一页
    $("#next02").click(function () {
        if (current_num == total_page) {
            return false;//如果大于总页数就禁用下一页
        }
        else {
            $("#current_page02").text(++current_num);//点击下一页的时候当前页数的值就加1
            $.each($('#pageAll01 li'), function (index, item) {
                var start = current_page * (current_num - 1);//起始范围
                var end = current_page * current_num;//结束范围
                if (index >= start && index < end) {//如果索引值是在start和end之间的元素就显示，否则就隐
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
    //上一页方法
    $("#prev02").click(function () {
        if (current_num == 1) {
            return false;
        } else {
            $("#current_page02").text(--current_num);
            $.each($('#pageAll01 li'), function (index, item) {
                var start = current_page * (current_num - 1);//起始范围
                var end = current_page * current_num;//结束范围
                if (index >= start && index < end) {//如果索引值是start和end之间的元素就显示，否则就隐藏
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    })
}
function page02() {


    $("#pageAll02 li:gt(7)").hide();//初始化，前面4条数据显示，其他的数据隐藏。
    var total_q = $("#pageAll02 li").index() + 1;//总数据
    var current_page = 8;//每页显示的数据
    var current_num = 1;//当前页数
    var total_page;
    if(total_q%current_page==0){
        total_page=total_q/current_page;
    }
    else{
        total_page=Math.ceil(total_q/current_page);

    }
    var next = $("#next03");//下一页
    var prev = $("#prev03");//上一页
    $("#total03").text(total_page);//显示总页数
    $("#current_page03").text(current_num);//当前的页数
    //下一页
    $("#next03").click(function () {
        if (current_num == total_page) {
            return false;//如果大于总页数就禁用下一页
        }
        else {
            $("#current_page03").text(++current_num);//点击下一页的时候当前页数的值就加1
            $.each($('#pageAll02 li'), function (index, item) {
                var start = current_page * (current_num - 1);//起始范围
                var end = current_page * current_num;//结束范围
                if (index >= start && index < end) {//如果索引值是在start和end之间的元素就显示，否则就隐
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
    //上一页方法
    $("#prev03").click(function () {
        if (current_num == 1) {
            return false;
        } else {
            $("#current_page03").text(--current_num);
            $.each($('#pageAll02 li'), function (index, item) {
                var start = current_page * (current_num - 1);//起始范围
                var end = current_page * current_num;//结束范围
                if (index >= start && index < end) {//如果索引值是start和end之间的元素就显示，否则就隐藏
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    })
}