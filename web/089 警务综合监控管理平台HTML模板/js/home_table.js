// JavaScript Document

	$(function () {
		$('#table1').bootstrapTable({
			method: "get",
			striped: true,
			singleSelect: false,
			url: "../../../json/home_table.json",
			dataType: "json",
			pagination: true, //分页
			pageSize: 10,
			pageNumber: 1,
			search: false, //显示搜索框
			contentType: "application/x-www-form-urlencoded",
			queryParams: null,
			columns: [
				{
					title: "等级",
					field: 'class',
					align: 'center',
					valign: 'middle'
				},
				{
					title: '案情备注',
					field: 'note',
					align: 'center',
					valign: 'middle'
				},
				{
					title: '时间',
					field: 'time',
					align: 'center'
				}

			]
		});
	})

function handleEvent(id){
	this.location.href="alam_handle.html";

}