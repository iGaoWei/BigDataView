(function () {
    'use strict';
    // modal.style.display = "none";
    // 建立模态框对象
    var modalBox = {};
    // 获取模态框
    modalBox.modal = document.getElementById("myModal");
    modalBox.modalpic = document.getElementById("myModalpic");
    // 获得按钮
    modalBox.triggerBtn = document.getElementById("triggerBtn");
    modalBox.triggerBtnpic = document.getElementById('triggerBtnpic')
    // 获得关闭按钮
    modalBox.closeBtn = document.getElementById("closeBtn");
    modalBox.closeBtnpic = document.getElementById("closeBtnpic");
    // 模态框显示
    modalBox.show = function () {
        // $("#data-content-line").load(location.href + "#data-content-line");
        $("#data-content-line").load(location.href + "#data-content-line");
        this.modal.style.display = "block";

    }
    modalBox.showpic = function () {
        $('#myModalpic').show();
    }
    
    // 模态框关闭
    modalBox.close = function () {

        this.modal.style.display = "none";
    }
    modalBox.closepic = function () {
        
        $('#myModalpic').hide();
    }
    // 模态框初始化
    modalBox.init = function () {
        var that = this;
        this.triggerBtn.onclick = function () {
            that.show();
        }
        this.triggerBtnpic.onclick = function () {
            that.showpic();
         
        }
        this.closeBtn.onclick = function () {
            that.close();
        }
        this.closeBtnpic.onclick = function () {
            that.closepic();
        }

    }

    modalBox.init();
})()