let PORT='113.108.228.26:38888';//测试IP
//let PORT='';//正式IP
let PREFIX='http://'+PORT+'/fr-rest/';//接口前缀
let IMAGE='http://113.108.228.26:38888/fr-admin/personnel/download?file_name=';

$(e=>{
    resize();
    Clock();
    setInterval(Clock,30000);
    getdata();
});

//jq跨域
jQuery.support.cors = true;
//请求
let ajax=(url,data,call,type)=>{
    let getajax=$.ajax({
        url:PREFIX+url,
        timeout:30000,
        //headers:{'Authorization':'Bearer '+localStorage.token},
        type:type || 'get',
        data:data,
        dataType:'json',
        complete(v,status){
            if(status=='timeout'){
                getajax.abort();
            }
            call(v.responseText?JSON.parse(v.responseText):v);
        }
    })
};

let getdata=()=>{
    ajax('getPersonnelList',{},v=>{
        if(v.code==0){
            let el='',x=v.data;
            for(let i=0;i<x.length && i<5;i++){
                el+=`<li><div class="headimg" style="background-image:url(${IMAGE+x[i].samplePhoto+'&type=0'})"></div><div><h2>${x[i].name}</h2><small>${x[i].updatedTime.substr(11,5)} 签到</small></div></li>`
            }
            $('#list').html(el);
            $('#num').text((x.length+'').padStart(2,'0')+' / 999');
            if(x[0]){
                $('.name h1').text(x[0].name);
                $('.name small').text(x[0].identity);
                $('.center .img').css('background-image',`url(${IMAGE+x[0].grabPhoto+'&type=1'})`);
                $('.center .headimg').css('background-image',`url(${IMAGE+x[0].samplePhoto+'&type=0'})`);
            }
        }
        setTimeout(getdata,30000);
    })
};

//窗口大小变化
let resize=()=>{
    $('#page').height(innerWidth*9/16).width(innerWidth)
};
window.onresize=()=>{resize()};

//禁用右键
document.oncontextmenu = function(){
    event.returnValue = false;
};

let Clock=()=>{
    $('#time').text(new Date().toTimeString().substr(0,5)+` ${new Date().getHours()>12?'P':'A'}M`)
};
