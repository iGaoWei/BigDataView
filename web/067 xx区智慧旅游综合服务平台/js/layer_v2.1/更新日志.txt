鉴于layer 2.0为其两个月的考验，也暴露了一些小问题，如今已经在2.1如数修复，但潜在的bug仍然在所难免，还希望您能继续反馈。
（2.x对1.9+版本无缝兼容，可直接全文件覆盖升级。）


【2.1】2015.11.04
> 修复在使用seajs或者requirejs后，layer.ext.js报layer未定义的错误。
> 修复弹出层后，回车键无效的bug。
> 修复iframe层的success回调在ie8以下浏览器无效的bug
> 修复只有一张图片时，并且该图片地址异常，不断弹出提示的bug。
> 修复当设定moveEnd回调，即便层关闭，仍然触发该回调的bug
> 即便采用模块加载，layer对象仍然保留全局，原因是layer自有模块需要。
> 优化图标锯齿

【2.0】2015.09.01
> 全新的默认皮肤
> 修复按住Enter键时，出现不断弹层的bug。
> 修复模块加载时，layer仍然暴露给了全局的bug。
> 修复拖拽完毕回调moveEnd，在层关闭后拖拽鼠标仍然触发该回调的bug。
> 确认和取消的回调除了yes和cancel外，还可用btn1/btn2。 btn2可解决取消遇右上角关闭共用cancel回调的问题。即如果你只需要接受取消的回调，可以使用 btn2: function(){}

== 拓展模块 ==
> 修复通过<script>标签引入layer.ext.js时，出现Cannot read property 'skin' of undefined的报错问题。（虽然我们更推荐用layer.config()方式加载layer.ext.js）。
> 如果相册只有一张图片，则不触发上/下一张。


—— http://layer.layui.com