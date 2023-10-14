// 日期数组
var arr1 = [];

$(document).ready(function() {

    $('#config-text').keyup(function() {
        eval($(this).val());
    });

    $('.configurator input, .configurator select').change(function() {
        updateConfig();
    });

    $('.demo i').click(function() {
        $(this).parent().find('input').click();
    });

    $('#startDate').daterangepicker({
        singleDatePicker: true,
        startDate: moment().subtract(6, 'days')
    });

    $('#endDate').daterangepicker({
        singleDatePicker: true,
        startDate: moment()
    });

    updateConfig();

    function updateConfig() {
        var options = {};

        if ($('#singleDatePicker').is(':checked'))
            options.singleDatePicker = true;

        if ($('#showDropdowns').is(':checked'))
            options.showDropdowns = true;

        if ($('#showWeekNumbers').is(':checked'))
            options.showWeekNumbers = true;

        if ($('#showISOWeekNumbers').is(':checked'))
            options.showISOWeekNumbers = true;

        if ($('#timePicker').is(':checked'))
            options.timePicker = true;

        if ($('#timePicker24Hour').is(':checked'))
            options.timePicker24Hour = true;

        if ($('#timePickerIncrement').val().length && $('#timePickerIncrement').val() != 1)
            options.timePickerIncrement = parseInt($('#timePickerIncrement').val(), 10);

        if ($('#timePickerSeconds').is(':checked'))
            options.timePickerSeconds = true;

        if ($('#autoApply').is(':checked'))
            options.autoApply = true;

        if ($('#dateLimit').is(':checked'))
            options.dateLimit = {
                days: 7
            };

        if ($('#ranges').is(':checked')) {
            options.ranges = {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            };
        }

        if ($('#locale').is(':checked')) {
            $('#rtl-wrap').show();
            options.locale = {
                direction: $('#rtl').is(':checked') ? 'rtl' : 'ltr',
                format: 'MM/DD/YYYY HH:mm',
                separator: ' - ',
                applyLabel: 'Apply',
                cancelLabel: 'Cancel',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                firstDay: 1
            };
        } else {
            $('#rtl-wrap').hide();
        }

        if (!$('#linkedCalendars').is(':checked'))
            options.linkedCalendars = false;

        if (!$('#autoUpdateInput').is(':checked'))
            options.autoUpdateInput = false;

        if (!$('#showCustomRangeLabel').is(':checked'))
            options.showCustomRangeLabel = false;

        if ($('#alwaysShowCalendars').is(':checked'))
            options.alwaysShowCalendars = true;

        if ($('#parentEl').val().length)
            options.parentEl = $('#parentEl').val();

        if ($('#startDate').val().length)
            options.startDate = $('#startDate').val();

        if ($('#endDate').val().length)
            options.endDate = $('#endDate').val();

        if ($('#minDate').val().length)
            options.minDate = $('#minDate').val();

        if ($('#maxDate').val().length)
            options.maxDate = $('#maxDate').val();

        if ($('#opens').val().length && $('#opens').val() != 'right')
            options.opens = $('#opens').val();

        if ($('#drops').val().length && $('#drops').val() != 'down')
            options.drops = $('#drops').val();

        if ($('#buttonClasses').val().length && $('#buttonClasses').val() != 'btn btn-sm')
            options.buttonClasses = $('#buttonClasses').val();

        if ($('#applyClass').val().length && $('#applyClass').val() != 'btn-success')
            options.applyClass = $('#applyClass').val();

        if ($('#cancelClass').val().length && $('#cancelClass').val() != 'btn-default')
            options.cancelClass = $('#cancelClass').val();

        $('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");

        $('#date1').daterangepicker(options, function(start, end, label) {
            // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
            arr1 = [];
            var nextm = 0;
            var str1 = start.format('YYYY-MM-DD')
            var month1 = str1.slice(5, 7)
            var startdate = str1.slice(5, 10)
                // console.log(startdate, '开始日期');
                // console.log(month1, '开始月');
            var str2 = end.format('YYYY-MM-DD')
            var month2 = str2.slice(5, 7)

            // console.log(month2, '结束月');
            arr1.push(startdate);
            var child = document.getElementsByClassName('in-range');
            for (let i = 0; i < child.length; i++) {
                var a = i - 1;
                if (i == 0) {
                    a = 0;
                }
                var num1 = child[i].innerHTML - 0;
                var num2 = child[a].innerHTML - 0;

                if (month1 == month2) {
                    var str = month1 + '-' + (child[i].innerHTML)
                    arr1.push(str)
                } else {
                    if (num1 >= num2) {
                        var str = month1 + '-' + (child[i].innerHTML)
                        arr1.push(str)
                    } else {
                        console.log(num1);
                        nextm = num1;
                        break;
                    }
                }


            }
            if (month1 != month2) {
                // 结束日
                var endm = str2.slice(8, 10) - 0;
                for (let n = 1; n <= endm; n++) {
                    var str = month2 + '-' + n;
                    arr1.push(str)
                }
            }

            console.log(arr1, '所选日期范围');
        });
        $('#date2').daterangepicker(options, function(start, end, label) {
            // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
            arr1 = [];
            var nextm = 0;
            var str1 = start.format('YYYY-MM-DD')
            var month1 = str1.slice(5, 7)
            var startdate = str1.slice(5, 10)
                // console.log(startdate, '开始日期');
                // console.log(month1, '开始月');
            var str2 = end.format('YYYY-MM-DD')
            var month2 = str2.slice(5, 7)

            // console.log(month2, '结束月');
            arr1.push(startdate);
            var child = document.getElementsByClassName('in-range');
            for (let i = 0; i < child.length; i++) {
                var a = i - 1;
                if (i == 0) {
                    a = 0;
                }
                var num1 = child[i].innerHTML - 0;
                var num2 = child[a].innerHTML - 0;

                if (month1 == month2) {
                    var str = month1 + '-' + (child[i].innerHTML)
                    arr1.push(str)
                } else {
                    if (num1 >= num2) {
                        var str = month1 + '-' + (child[i].innerHTML)
                        arr1.push(str)
                    } else {
                        console.log(num1);
                        nextm = num1;
                        break;
                    }
                }


            }
            if (month1 != month2) {
                // 结束日
                var endm = str2.slice(8, 10) - 0;
                for (let n = 1; n <= endm; n++) {
                    var str = month2 + '-' + n;
                    arr1.push(str)
                }
            }

            console.log(arr1, '所选日期范围');
        });
        $('#date3').daterangepicker(options, function(start, end, label) {
            // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
            arr1 = [];
            var nextm = 0;
            var str1 = start.format('YYYY-MM-DD')
            var month1 = str1.slice(5, 7)
            var startdate = str1.slice(5, 10)
                // console.log(startdate, '开始日期');
                // console.log(month1, '开始月');
            var str2 = end.format('YYYY-MM-DD')
            var month2 = str2.slice(5, 7)

            // console.log(month2, '结束月');
            arr1.push(startdate);
            var child = document.getElementsByClassName('in-range');
            for (let i = 0; i < child.length; i++) {
                var a = i - 1;
                if (i == 0) {
                    a = 0;
                }
                var num1 = child[i].innerHTML - 0;
                var num2 = child[a].innerHTML - 0;

                if (month1 == month2) {
                    var str = month1 + '-' + (child[i].innerHTML)
                    arr1.push(str)
                } else {
                    if (num1 >= num2) {
                        var str = month1 + '-' + (child[i].innerHTML)
                        arr1.push(str)
                    } else {
                        console.log(num1);
                        nextm = num1;
                        break;
                    }
                }


            }
            if (month1 != month2) {
                // 结束日
                var endm = str2.slice(8, 10) - 0;
                for (let n = 1; n <= endm; n++) {
                    var str = month2 + '-' + n;
                    arr1.push(str)
                }
            }

            console.log(arr1, '所选日期范围');
        });
        $('#date4').daterangepicker(options, function(start, end, label) {
            // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
            arr1 = [];
            var nextm = 0;
            var str1 = start.format('YYYY-MM-DD')
            var month1 = str1.slice(5, 7)
            var startdate = str1.slice(5, 10)
                // console.log(startdate, '开始日期');
                // console.log(month1, '开始月');
            var str2 = end.format('YYYY-MM-DD')
            var month2 = str2.slice(5, 7)

            // console.log(month2, '结束月');
            arr1.push(startdate);
            var child = document.getElementsByClassName('in-range');
            for (let i = 0; i < child.length; i++) {
                var a = i - 1;
                if (i == 0) {
                    a = 0;
                }
                var num1 = child[i].innerHTML - 0;
                var num2 = child[a].innerHTML - 0;

                if (month1 == month2) {
                    var str = month1 + '-' + (child[i].innerHTML)
                    arr1.push(str)
                } else {
                    if (num1 >= num2) {
                        var str = month1 + '-' + (child[i].innerHTML)
                        arr1.push(str)
                    } else {
                        console.log(num1);
                        nextm = num1;
                        break;
                    }
                }


            }
            if (month1 != month2) {
                // 结束日
                var endm = str2.slice(8, 10) - 0;
                for (let n = 1; n <= endm; n++) {
                    var str = month2 + '-' + n;
                    arr1.push(str)
                }
            }

            console.log(arr1, '所选日期范围');
        });
        $('#date5').daterangepicker(options, function(start, end, label) {
            // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
            arr1 = [];
            var nextm = 0;
            var str1 = start.format('YYYY-MM-DD')
            var month1 = str1.slice(5, 7)
            var startdate = str1.slice(5, 10)
                // console.log(startdate, '开始日期');
                // console.log(month1, '开始月');
            var str2 = end.format('YYYY-MM-DD')
            var month2 = str2.slice(5, 7)

            // console.log(month2, '结束月');
            arr1.push(startdate);
            var child = document.getElementsByClassName('in-range');
            for (let i = 0; i < child.length; i++) {
                var a = i - 1;
                if (i == 0) {
                    a = 0;
                }
                var num1 = child[i].innerHTML - 0;
                var num2 = child[a].innerHTML - 0;

                if (month1 == month2) {
                    var str = month1 + '-' + (child[i].innerHTML)
                    arr1.push(str)
                } else {
                    if (num1 >= num2) {
                        var str = month1 + '-' + (child[i].innerHTML)
                        arr1.push(str)
                    } else {
                        console.log(num1);
                        nextm = num1;
                        break;
                    }
                }


            }
            if (month1 != month2) {
                // 结束日
                var endm = str2.slice(8, 10) - 0;
                for (let n = 1; n <= endm; n++) {
                    var str = month2 + '-' + n;
                    arr1.push(str)
                }
            }

            console.log(arr1, '所选日期范围');
        });
    }

});