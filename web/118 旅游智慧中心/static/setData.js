var touristsFlowChartArr = [
    { NAME: '斑竹山', NUM: 3652 },
    { NAME: '孽龙洞景区', NUM: 2854 },
    { NAME: '泉之源', NUM: 1056 },
    { NAME: '赤山幕冲生态', NUM: 681 },
    { NAME: '杨岐山普通寺', NUM: 324 }
]
var totalPeopleChart = [
    {
        name: '斑竹山',
        value: 3652
    }, {
        name: '孽龙洞景区',
        value: 2854
    }, {
        name: '泉之源',
        value: 1056
    }, {
        name: '赤山幕冲生态',
        value: 681
    }, {
        name: '杨岐山普通寺',
        value: 324
    }
]
var totalPeople = totalPeopleChart.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.value
}, 0)
var peoplePercentage = [
    {
        name: '斑竹山',
        value: (3652 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '孽龙洞景区',
        value: (2854 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '泉之源',
        value: (1056 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '赤山幕冲生态',
        value: (681 / Number(totalPeople) * 100).toFixed(0)
    }, {
        name: '杨岐山普通寺',
        value: (324 / Number(totalPeople) * 100).toFixed(0)
    }
]
var carFlowChartDate = {
    legend: ['到访', '返程'],
    xAxis: ['斑竹山', '孽龙洞景区','泉之源', '赤山幕冲生态', '杨岐山普通寺'],
    data: [[45, 64, 36, 25, 74, 89], [40, 60, 30, 20, 70, 83]],
}
var carSpaceNumData = {
    yAxisName: ['杨岐山普通寺', '赤山幕冲生态', '泉之源', '孽龙洞景区', '斑竹山'],
    yAxisData: [300, 300, 300, 300, 300],
    data: [52, 60, 22, 33, 44]
}
var consumptionChartData = [
    {
        value: 20010,
        name: '餐饮美食'
    }, {
        value: 21387,
        name: '旅游交通'
    }, {
        value: 20867,
        name: '景区门票'
    }, {
        value: 20510,
        name: '酒店住宿'
    }, {
        value: 25371,
        name: '购物消费'
    }
]
var ticketsChart = {
    legend: ['销售额', '销售数量'],
    data: [
        [
            509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000, 1455, 1210, 719,
            733, 944, 2285, 2208, 3372, 3936, 3693, 2962
        ],
        [
            2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019, 3433, 3544, 3885, 4208, 3372,
            3484, 3915, 3748, 3675, 4009, 4433, 3544, 3285
        ]
    ]
}
var visitingNum = carFlowChartDate.data[0].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)
var backNum = carFlowChartDate.data[1].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
}, 0)
var touristsList = [
    {
        col1: '昨日',
        col2: '246',
        col3: '246',
        col4: '246',
        col5: '246',
        col6: '246'
    },
    {
        col1: '今日',
        col2: '246',
        col3: '246',
        col4: '246',
        col5: '246',
        col6: '246'
    },
    {
        col1: '最近7日',
        col2: '246',
        col3: '246',
        col4: '246',
        col5: '246',
        col6: '246'
    },
    {
        col1: '最近30日',
        col2: '246',
        col3: '246',
        col4: '246',
        col5: '246',
        col6: '246'
    }
]
var helpCellChartData = [
    [2550, 1700, 1650],
    [1220, 850, 850]
]
// 1: 空闲，2:拥挤， 3: 爆满
var mapData = [
    {
        name: '杨岐山普通寺',
        value: '3'
    },
    {
        name: '孽龙洞景区',
        value: '2'
    },
    {
        name: '斑竹山',
        value: '1'
    },
    {
        name: '泉之源',
        value: '2'
    },
    {
        name: '赤山幕冲生态',
        value: '1'
    }
]