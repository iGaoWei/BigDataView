$(function() {
	$("#device_type").on('click',selectDeviceType);
	$(".recordset").on('click',changeRecordColor);
	$("#device_edit_btn").on('click',showDeviceAttrs);
});
/**
 * 选择设备类型后，设备信息自动生成
 */
function selectDeviceType(event) {
	var $typeItem=$(event.target),
		$devices=$("#device_info"),
		deviceHtml="",
		deviceBaseId=null,
		deviceBaseName=null;
	$(event.currentTarget).children().css('background-color','white');
	if (!$typeItem.is("ul")) {
		$typeItem.css('background-color','yellow');
		//展现设备信息
		deviceBaseId=$typeItem.index()+1;
		deviceBaseName=$typeItem.text();
		for(var i=0,len=10;i<len;i++){
			deviceHtml+="<tr><td>"+(10000*deviceBaseId+i)+"</td><td>"+(deviceBaseName+"_"+i)+"</td></tr>";
		}
		$devices.html(deviceHtml);
		// 改变状态
		$("#device_edit_btn").attr('disabled', 'true');
		$("#attrBtns>button").attr('disabled', 'true');
		$(".recordset").children().removeClass('active-nova');
		DataSet.currType=deviceBaseName;
	}
}
/**
 * 修改表格这种每一行的背景颜色
 */
function changeRecordColor(event) {
	var $currTarget=$(event.currentTarget);
	if ($currTarget.attr("id")==="device_info") {
		$("#device_edit_btn").removeAttr('disabled');
	}else{
		$("#attrBtns>button").removeAttr('disabled');
	}
	$currTarget.children().removeClass('active-nova'); //gkq:tbody下的tr
	$(event.target).parent().addClass('active-nova'); //gkq:td的父tr
}
/**
 * 显示设备的属性信息
 */
function showDeviceAttrs(event) {
	var attrHtml="",
		$attrs=$("#device_attr"),
		currType=DataSet.currType;
	for(var i=0,len=8;i<len;i++){
		attrHtml+="<tr><td>"+currType+(i+1)+"</td><td>属性值"+(i+1)+"</td></tr>";
	}
	$attrs.html(attrHtml);
}
var DataSet={
	currType:'', //当前设备类型
};