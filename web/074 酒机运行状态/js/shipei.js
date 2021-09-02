/*大屏*/
    (function() {
        var docEl = document.documentElement;


        function setRemUnit() {
            // 获取到rem的基准值
            var rem = docEl.clientWidth / 10;

            // 动态设置html根元素的font-size
            docEl.style.fontSize = rem + 'px';
        }

        setRemUnit();

        // 窗口大小变化时 触发
        window.addEventListener('resize', setRemUnit);

        // 窗口出现在当前屏幕时 （有浏览器兼容性）
        window.addEventListener('pageshow', function(e) {
            if (e.persisted) {
                setRemUnit();
            }
        });
    })();
