/**
 *  使用方法
 * dom         <p data-ride="numberGrow" data-value="8711.11" data-time="1" data-digit="2">0</p>
 * data-ride   必填
 * data-value  最终数值
 * data-time   持续时间
 * data-digit  保留小数
 * 0           起始数值
 * */

// 数字增长
function NumberGrow(element, options) {
    options = options || {};

    var _node = element,
        _hz = 16, //60Hz性价比最高。mac可达到47.95   https://support.apple.com/zh-cn/HT210742
        time = options.time || _node.dataset.time, //总时间
        num = options.num || _node.dataset.value, //要显示的真实数值
        digit = options.digit || _node.dataset.digit, //小数点后几位增长
        step = num * _hz / (time * 1000),
        start = 0, //计数器
        interval, //定时器
        old = 0;


    // console.log(num, parseInt(num), 'num');
    // if(num/1000000 >= 1)

    interval = setInterval(function() {
        start = start + step;
        if (start >= num) {
            clearInterval(interval);
            interval = undefined;
            start = num;
        }

        var t, __time;
        if (digit) {
            __time = Math.pow(10, digit);
            t = Math.floor(start * __time) / __time;
            t = t.toLocaleString()
                // console.log(t, 't');
        } else {
            t = Math.floor(start);
            t = t.toLocaleString()
        }

        if (t == old) {
            return;
        }

        old = t;
        _node.textContent = old;
    }, _hz);
}
// 初始化产量溯源
function init() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow1"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 初始化产量溯源
init();


// 初始化银针溯源
function init2() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow2"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 初始化银针溯源
init2();


// 初始化牡丹溯源
function init3() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow3"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 初始化牡丹溯源
init3();

// 初始化寿眉溯源
function init4() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow4"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 初始化寿眉溯源
init4();

// 初始化贡眉溯源 
function init5() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow5"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 初始化贡眉溯源
init5();


// 产量及收益
function init6() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow6"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 产量及收益
init6();

// 主体溯源
function init7() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow7"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 主体溯源
init7();


// 交易产量
function init7() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow21"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 交易产量
init7();

// 交易产量
function init8() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow22"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 交易产量
init8();

// 交易产量
function init9() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow23"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 交易产量
init9();


// 交易产量
function init10() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow24"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 交易产量
init10();


// 产量溯源
function init11() {
    var nodeList = document.querySelectorAll('[data-ride="numberGrow25"]');
    for (i = 0; i < nodeList.length; i++) {
        (function() {
            var _this = nodeList[i];
            new NumberGrow(_this);
        })(i)
    }
}

// 产量溯源
init11();