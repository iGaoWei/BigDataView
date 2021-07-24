function showDialog(title,msg) {
	$("#myModal").find(".modal-header h3").html(title);
    $("#myModal").attr('class','modal');
    $("#myModal").find(".modal-body p").html(msg);
    setTimeout(function(){
        $("#myModal").attr('class','modal hide');
    },3000);
}

function keydown(e)
{
    var e = e||event;
    var currKey = e.keyCode||e.which||e.charCode;
    if(currKey == 13)
    {
        checkLogin();
    }
}

function checkLogin(){
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    if ($.trim(username) == "" ||　$.trim(password) == "") {
        return false;
    }
    var postData = {
        Account: username,
        Password: password
    };
    $.fn.submitForm({
        url: "/SysMgr/Home/CheckLogin",
        param: postData,
        loading: "正在保存数据...",
        success: function(data) {
            window.location.href = "/SysMgr/Home/Index";
        }
    });

}

function validatePwd(str){   
    if(str.length!=0){    
        reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/;     
        if(!reg.test(str)){    
            return false;  
        } else {
            return true;
        }   
    } 

    return false;    
}
//安全退出
function loginOut() {
    $.fn.modalConfirm("注：您确定要安全退出本次登录吗？", function () {
        $.fn.submitForm({
            url: "/SysMgr/Home/OutLogin",
            param: {},
            loading: "正在退出系统...",
            success: function (data) {
                window.location.href = "/SysMgr/Home/Login";
            }
        });

    });
  
}