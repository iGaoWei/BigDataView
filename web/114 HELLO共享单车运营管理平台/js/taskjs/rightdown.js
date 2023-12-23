var myChart1 = echarts.init(document.querySelector(".rightDown .chart"));

var data1 = [
    {
        name: 'nodeA',
        value: 10,
        children: [
            {
                name: 'nodeAa',
                value: 4
            },
            {
                name: 'nodeAb',
                value: 6
            }
        ]
    },
    {
        name: 'nodeB',
        value: 20,
        children: [
            {
                name: 'nodeBa',
                value: 20,
                children: [
                    {
                        name: 'nodeBa1',
                        value: 20
                    }
                ]
            }
        ]
    }
];
var option = {
    tooltip: {},
    series: [{
        name: 'total',
        type: 'treemap',
        data: data1,
        leafDepth: 2,
        upperLabel: {
            show: true,
            height: 30,
            color: '#fff'
        },
        levels: [
            {
                itemStyle: {
                    borderColor: '#555',
                    borderWidth: 4,
                    gapWidth: 4
                }
            },
            {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2
                }
            },
            {
                colorSaturation: [0.3, 0.5],
                itemStyle: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1
                }
            }
        ]
    }]

};
myChart1.setOption(option);
window.addEventListener("resize", function () {
    myChart1.resize();
});