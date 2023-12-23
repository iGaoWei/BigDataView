var myChart = echarts.init(document.querySelector(".leftMid .chart"));
var option = {
    xAxis3D: {
        axisLabel: {
            formatter: function(val) {
                return val;
            },
            textStyle: {
                fontSize: 10,
                color: "#18b794"
            }
        },
        name: "x",
        type: 'category',
        data:[1112,2223,4445,6669,7778,9998],
    },
    yAxis3D: {
        axisLabel: {
            formatter: function(val) {
                return val;
            },
            textStyle: {
                fontSize: 10,
                color: "#18b794"
            }
        },
        name: "y",
        type: 'category',
        data:[111,222,333,444,555,666],
    },
    zAxis3D: {
        name: "z",
        type: 'value',
    },
    grid3D: {
        viewControl: {
            beta:0
        },
        boxWidth: 200,
        boxHeight: 100,
        boxDepth: 100,
        height: '100%',
        width: '100%',
        top:0,
        bottom:0,
        axisLine:{
            lineStyle:{
                color:'#18b794'
            }
        },
        splitLine:{
            lineStyle:{
                color:'#18b794'
            }
        },
    },
    series: [{
        type: 'scatter3D',
        data: [111,222,555,88,999,363],
        symbolSize: 10,
        itemStyle: {
            color: "#6c6be2"
        }
    }]
};

myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});