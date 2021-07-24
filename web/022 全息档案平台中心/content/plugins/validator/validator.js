/**
数据验证完整性
**/
$.fn.Validform = function () {
    var Validatemsg = "";
    var Validateflag = true;
    $(this).find("[isvalid=yes]").each(function () {
        var checkexpession = $(this).attr("checkexpession");
        var errormsg = $(this).attr("errormsg");
        if (checkexpession != undefined) {
            if (errormsg == undefined) {
                errormsg = "";
            }
            var value = $(this).val();
            if ($(this).hasClass('ui-select')) {
                value = $(this).attr('data-value');
            }
            switch (checkexpession) {
                case "NotNull":
                    {
                        if (isNotNull(value)) {
                            Validatemsg = errormsg + "不能为空！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Num":
                    {
                        if (!isInteger(value)) {
                            Validatemsg = errormsg + "必须为数字！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "NumOrNull":
                    {
                        if (!isIntegerOrNull(value)) {
                            Validatemsg = errormsg + "必须为数字！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Email":
                    {
                        if (!isEmail(value)) {
                            Validatemsg = errormsg + "必须为E-mail格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "EmailOrNull":
                    {
                        if (!isEmailOrNull(value)) {
                            Validatemsg = errormsg + "必须为E-mail格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "EnglishStr":
                    {
                        if (!isEnglishStr(value)) {
                            Validatemsg = errormsg + "必须为字符串！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "EnglishStrOrNull":
                    {
                        if (!isEnglishStrOrNull(value)) {
                            Validatemsg = errormsg + "必须为字符串！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "LenNum":
                    {
                        if (!isLenNum(value, $(this).attr("length"))) {
                            Validatemsg = errormsg + "必须为" + $(this).attr("length") + "位数字！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "LenNumOrNull":
                    {
                        if (!isLenNumOrNull(value, $(this).attr("length"))) {
                            Validatemsg = errormsg + "必须为" + $(this).attr("length") + "位数字！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "LenStr":
                    {
                        if (!isLenStr(value, $(this).attr("length"))) {
                            Validatemsg = errormsg + "必须小于" + $(this).attr("length") + "位字符！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "LenStrOrNull":
                    {
                        if (!isLenStrOrNull(value, $(this).attr("length"))) {
                            Validatemsg = errormsg + "必须小于" + $(this).attr("length") + "位字符！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Phone":
                    {
                        if (!isTelephone(value)) {
                            Validatemsg = errormsg + "必须电话格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "PhoneOrNull":
                    {
                        if (!isTelephoneOrNull(value)) {
                            Validatemsg = errormsg + "必须电话格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Fax":
                    {
                        if (!isTelephoneOrNull(value)) {
                            Validatemsg = errormsg + "必须为传真格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Mobile":
                    {
                        if (!isMobile(value)) {
                            Validatemsg = errormsg + "必须为手机格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "MobileOrNull":
                    {
                        if (!isMobileOrnull(value)) {
                            Validatemsg = errormsg + "必须为手机格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "MobileOrPhone":
                    {
                        if (!isMobileOrPhone(value)) {
                            Validatemsg = errormsg + "必须为电话格式或手机格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "MobileOrPhoneOrNull":
                    {
                        if (!isMobileOrPhoneOrNull(value)) {
                            Validatemsg = errormsg + "必须为电话格式或手机格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Uri":
                    {
                        if (!isUri(value)) {
                            Validatemsg = errormsg + "必须为网址格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "UriOrNull":
                    {
                        if (!isUriOrnull(value)) {
                            Validatemsg = errormsg + "必须为网址格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Equal":
                    {
                        if (!isEqual(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "不相等！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Date":
                    {
                        if (!isDate(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为日期格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "DateOrNull":
                    {
                        if (!isDateOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为日期格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "DateTime":
                    {
                        if (!isDateTime(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为日期时间格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "DateTimeOrNull":
                    {
                        if (!isDateTimeOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为日期时间格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Time":
                    {
                        if (!isTime(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为时间格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "TimeOrNull":
                    {
                        if (!isTimeOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为时间格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "ChineseStr":
                    {
                        if (!isChinese(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为中文！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "ChineseStrOrNull":
                    {
                        if (!isChineseOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为中文！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Zip":
                    {
                        if (!isZip(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为邮编格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "ZipOrNull":
                    {
                        if (!isZipOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为邮编格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "Double":
                    {
                        if (!isDouble(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为小数！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "DoubleOrNull":
                    {
                        if (!isDoubleOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为小数！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "IDCard":
                    {
                        if (!isIDCard(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为身份证格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "IDCardOrNull":
                    {
                        if (!isIDCardOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为身份证格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "IsIP":
                    {
                        if (!isIP(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为IP格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                case "IPOrNull":
                    {
                        if (!isIPOrNullOrNull(value, $(this).attr("eqvalue"))) {
                            Validatemsg = errormsg + "必须为IP格式！\n";
                            Validateflag = false;
                            ValidationMessage($(this), Validatemsg); return false;
                        }
                        break;
                    }
                default:
                    break;
            }
        }
    });
    if ($(this).find("[fieldexist=yes]").length > 0) {
        return false;
    }
    return Validateflag;
    //验证不为空 notnull
    function isNotNull(obj) {
        obj = $.trim(obj);
        if (obj.length == 0 || obj == null || obj == undefined) {
            return true;
        }
        else
            return false;
    }
    //验证数字 num
    function isInteger(obj) {
        reg = /^[-+]?\d+$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证数字 num  或者null,空
    function isIntegerOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^[-+]?\d+$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //Email验证 email
    function isEmail(obj) {
        reg = /^\w{3,}@\w+(\.\w+)+$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //Email验证 email   或者null,空
    function isEmailOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^\w{3,}@\w+(\.\w+)+$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证只能输入英文字符串 echar
    function isEnglishStr(obj) {
        reg = /^[a-z,A-Z]+$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证只能输入英文字符串 echar 或者null,空
    function isEnglishStrOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^[a-z,A-Z]+$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否是n位数字字符串编号 nnum
    function isLenNum(obj, n) {
        reg = /^[0-9]+$/;
        obj = $.trim(obj);
        if (obj.length > n)
            return false;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否是n位数字字符串编号 nnum或者null,空
    function isLenNumOrNull(obj, n) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^[0-9]+$/;
        obj = $.trim(obj);
        if (obj.length > n)
            return false;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否小于等于n位数的字符串 nchar
    function isLenStr(obj, n) {
        //reg = /^[A-Za-z0-9\u0391-\uFFE5]+$/;
        obj = $.trim(obj);
        if (obj.length == 0 || obj.length > n)
            return false;
        else
            return true;
    }
    //验证是否小于等于n位数的字符串 nchar或者null,空
    function isLenStrOrNull(obj, n) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        obj = $.trim(obj);
        if (obj.length > n)
            return false;
        else
            return true;
    }
    //验证是否电话号码 phone
    function isTelephone(obj) {
        reg = /^(\d{3,4}\-)?[1-9]\d{6,7}$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否电话号码 phone或者null,空
    function isTelephoneOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^(\d{3,4}\-)?[1-9]\d{6,7}$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否手机号 mobile
    function isMobile(obj) {
        reg = /^(\+\d{2,3}\-)?\d{11}$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否手机号 mobile或者null,空
    function isMobileOrnull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^(\+\d{2,3}\-)?\d{11}$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否手机号或电话号码 mobile phone 
    function isMobileOrPhone(obj) {
        reg_mobile = /^(\+\d{2,3}\-)?\d{11}$/;
        reg_phone = /^(\d{3,4}\-)?[1-9]\d{6,7}$/;
        if (!reg_mobile.test(obj) && !reg_phone.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证是否手机号或电话号码 mobile phone或者null,空
    function isMobileOrPhoneOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^(\+\d{2,3}\-)?\d{11}$/;
        reg2 = /^(\d{3,4}\-)?[1-9]\d{6,7}$/;
        if (!reg.test(obj) && !reg2.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证网址 uri
    function isUri(obj) {
        reg = /^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证网址 uri或者null,空
    function isUriOrnull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        reg = /^http:\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
        if (!reg.test(obj)) {
            return false;
        } else {
            return true;
        }
    }
    //验证两个值是否相等 equals
    function isEqual(obj1, controlObj) {
        if (obj1.length != 0 && controlObj.length != 0) {
            if (obj1 == controlObj)
                return true;
            else
                return false;
        }
        else
            return false;
    }
    //判断日期类型是否为YYYY-MM-DD格式的类型 date
    function isDate(obj) {
        if (obj.length != 0) {
            reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断日期类型是否为YYYY-MM-DD格式的类型 date或者null,空
    function isDateOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型 datetime
    function isDateTime(obj) {
        if (obj.length != 0) {
            reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型 datetime或者null,空
    function isDateTimeOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断日期类型是否为hh:mm:ss格式的类型 time
    function isTime(obj) {
        if (obj.length != 0) {
            reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断日期类型是否为hh:mm:ss格式的类型 time或者null,空
    function isTimeOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断输入的字符是否为中文 cchar 
    function isChinese(obj) {
        if (obj.length != 0) {
            reg = /^[\u0391-\uFFE5]+$/;
            if (!reg.test(str)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断输入的字符是否为中文 cchar或者null,空
    function isChineseOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^[\u0391-\uFFE5]+$/;
            if (!reg.test(str)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断输入的邮编(只能为六位)是否正确 zip
    function isZip(obj) {
        if (obj.length != 0) {
            reg = /^\d{6}$/;
            if (!reg.test(str)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断输入的邮编(只能为六位)是否正确 zip或者null,空
    function isZipOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^\d{6}$/;
            if (!reg.test(str)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断输入的字符是否为双精度 double
    function isDouble(obj) {
        if (obj.length != 0) {
            reg = /^[-\+]?\d+(\.\d+)?$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断输入的字符是否为双精度 double或者null,空
    function isDoubleOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^[-\+]?\d+(\.\d+)?$/;
            if (!reg.test(obj)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    //判断是否为身份证 idcard
    function isIDCard(obj) {
        if (obj.length != 0) {
            reg = /^\d{15}(\d{2}[A-Za-z0-9;])?$/;
            if (!reg.test(obj))
                return false;
            else
                return true;
        }
    }
    //判断是否为身份证 idcard或者null,空
    function isIDCardOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        if (obj.length != 0) {
            reg = /^\d{15}(\d{2}[A-Za-z0-9;])?$/;
            if (!reg.test(obj))
                return false;
            else
                return true;
        }
    }
    //判断是否为IP地址格式
    function isIP(obj) {
        var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式 
        if (re.test(obj)) {
            if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) return true;
        }
        return false;
    }
    //判断是否为IP地址格式 或者null,空
    function isIPOrNull(obj) {
        var controlObj = $.trim(obj);
        if (controlObj.length == 0 || controlObj == null || controlObj == undefined) {
            return true;
        }
        var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式 
        if (re.test(obj)) {
            if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) return true;
        }
        return false;
    }
}
//提示信息
function ValidationMessage(obj, Validatemsg) {
    try {
        removeMessage(obj);
        obj.focus();
        var $poptip_error = $('<div class="poptip"><span class="poptip-arrow poptip-arrow-top"><em>◆</em></span>' + Validatemsg + '</div>').css("left", obj.offset().left + 'px').css("top", obj.offset().top + obj.parent().height() + 5 + 'px')
        $('body').append($poptip_error);
        if (obj.hasClass('form-control') || obj.hasClass('ui-select')) {
            obj.parent().addClass('has-error');
        }
        if (obj.hasClass('ui-select')) {
            $('.input-error').remove();
        }
        obj.change(function () {
            if (obj.val()) {
                removeMessage(obj);
            }
        });
        if (obj.hasClass('ui-select')) {
            $(document).click(function (e) {
                if (obj.attr('data-value')) {
                    removeMessage(obj);
                }
                e.stopPropagation();
            });
        }
        return false;  
    } catch (e) {
        alert(e)
    }
}
//移除提示
function removeMessage(obj) {
    obj.parent().removeClass('has-error');
    $('.poptip').remove();
    $('.input-error').remove();
}