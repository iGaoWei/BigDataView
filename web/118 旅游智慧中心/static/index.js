var date = new CurrentDate().getTime()
$('.totalPeopleNum .num').text(`${totalPeople}人`)
$('#totalCarFlow .visiting').html(visitingNum)
$('#totalCarFlow .back').html(backNum)
$(document).ready(function () {
    var touristsFlowChartEl = document.getElementById("touristsFlowChart")
    var touristsFlowChartInit = echarts.init(touristsFlowChartEl)
    var options = touristsFlowChart(touristsFlowChartArr)
    touristsFlowChartInit.setOption(options)

    var totalPeopleChartEl = document.getElementById('totalPeopleChart')
    var totalPeopleChartInit = echarts.init(totalPeopleChartEl)
    var options = pieChart(peoplePercentage)
    totalPeopleChartInit.setOption(options)

    var carFlowChartEl = document.getElementById('carFlowChart')
    var carFlowChartInit = echarts.init(carFlowChartEl)
    var options = barChart(carFlowChartDate)
    carFlowChartInit.setOption(options)

    var carSpaceNumEl = document.getElementById('carSpaceNum')
    var carSpaceNumInit = echarts.init(carSpaceNumEl)
    var options = carSpaceNumChart(carSpaceNumData)
    carSpaceNumInit.setOption(options)

    var consumptionChartEl = document.getElementById('consumptionChart')
    var consumptionChartInit = echarts.init(consumptionChartEl)
    var options = consumptionChart(consumptionChartData)
    consumptionChartInit.setOption(options)
    
    var ticketsChartEl = document.getElementById('ticketsChart')
    var ticketsChartInit = echarts.init(ticketsChartEl)
    var options = lineChart(ticketsChart)
    ticketsChartInit.setOption(options)

    // 游客趋势分析
    var table = document.querySelector('.table_body')
    for (var i = 0; i < touristsList.length; i++) {
        var item = touristsList[i]
        table.innerHTML += [
            `<li class="tr_item">
                <span>${item.col1}</span>
                <span>${item.col2}</span>
                <span>${item.col3}</span>
                <span>${item.col4}</span>
                <span>${item.col5}</span>
                <span>${item.col6}</span>
            </li>`
        ]
    }

    // 12301 呼叫
    var helpCellChartEl = document.getElementById('helpCellChart')
    var helpCellChartInit = echarts.init(helpCellChartEl)
    var options = helpCellChart(helpCellChartData)
    helpCellChartInit.setOption(options)

     window.onresize = function () {
        helpCellChartInit.resize();
        ticketsChartInit.resize();
        consumptionChartInit.resize()
        touristsFlowChartInit.resize()
        totalPeopleChartInit.resize()
        carFlowChartInit.resize()
        carSpaceNumInit.resize()
     }
    mapData.map((item, index) => {
        if (item.value == 3) {
            $('.map_box .city').eq(index).removeClass('orange').addClass('red')
        }else if (item.value == 2) {
            $('.map_box .city').eq(index).removeClass('red').addClass('orange')
        }else if (item.value == 1) {
            $('.map_box .city').eq(index).removeClass('red orange')
        }
    })
})