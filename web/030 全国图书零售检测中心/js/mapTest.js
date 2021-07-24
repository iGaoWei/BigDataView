var mapChart = echarts.init(document.getElementById("map"));

/* 全国经纬度值
var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
}; */

function randomValue() {
  return Math.round(Math.random() * 1000);
}
// 获取各地区的经纬度
var convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};
// 散点数据 和 对应经纬度
var data = [
  { name: "海门", value: 9 },
  { name: "鄂尔多斯", value: 12 },
  { name: "招远", value: 12 },
  { name: "舟山", value: 12 },
  { name: "齐齐哈尔", value: 14 },
  { name: "盐城", value: 15 },
  { name: "赤峰", value: 16 },
  { name: "青岛", value: 18 },
  { name: "乳山", value: 18 },
  { name: "金昌", value: 19 },
  { name: "泉州", value: 21 },
  { name: "莱西", value: 21 },
  { name: "日照", value: 21 },
  { name: "胶南", value: 22 },
  { name: "南通", value: 23 },
  { name: "拉萨", value: 24 },
  { name: "云浮", value: 24 },
  { name: "梅州", value: 25 },
  { name: "文登", value: 25 },
  { name: "上海", value: 25 },
  { name: "攀枝花", value: 25 },
  { name: "威海", value: 25 },
  { name: "承德", value: 25 },
  { name: "厦门", value: 26 },
  { name: "汕尾", value: 26 },
  { name: "潮州", value: 26 },
  { name: "丹东", value: 27 },
  { name: "太仓", value: 27 },
  { name: "曲靖", value: 27 },
  { name: "烟台", value: 28 },
  { name: "福州", value: 29 },
  { name: "瓦房店", value: 30 },
  { name: "即墨", value: 30 },
  { name: "抚顺", value: 31 },
  { name: "玉溪", value: 31 },
  { name: "张家口", value: 31 },
  { name: "阳泉", value: 31 },
  { name: "莱州", value: 32 },
  { name: "湖州", value: 32 },
  { name: "汕头", value: 32 },
  { name: "昆山", value: 33 },
  { name: "宁波", value: 33 },
  { name: "湛江", value: 33 },
  { name: "揭阳", value: 34 },
  { name: "荣成", value: 34 },
  { name: "连云港", value: 35 },
  { name: "葫芦岛", value: 35 },
  { name: "常熟", value: 36 },
  { name: "东莞", value: 36 },
  { name: "河源", value: 36 },
  { name: "淮安", value: 36 },
  { name: "泰州", value: 36 },
  { name: "南宁", value: 37 },
  { name: "营口", value: 37 },
  { name: "惠州", value: 37 },
  { name: "江阴", value: 37 },
  { name: "蓬莱", value: 37 },
  { name: "韶关", value: 38 },
  { name: "嘉峪关", value: 38 },
  { name: "广州", value: 38 },
  { name: "延安", value: 38 },
  { name: "太原", value: 39 },
  { name: "清远", value: 39 },
  { name: "中山", value: 39 },
  { name: "昆明", value: 39 },
  { name: "寿光", value: 40 },
  { name: "盘锦", value: 40 },
  { name: "长治", value: 41 },
  { name: "深圳", value: 41 },
  { name: "珠海", value: 42 },
  { name: "宿迁", value: 43 },
  { name: "咸阳", value: 43 },
  { name: "铜川", value: 44 },
  { name: "平度", value: 44 },
  { name: "佛山", value: 44 },
  { name: "海口", value: 44 },
  { name: "江门", value: 45 },
  { name: "章丘", value: 45 },
  { name: "肇庆", value: 46 },
  { name: "大连", value: 47 },
  { name: "临汾", value: 47 },
  { name: "吴江", value: 47 },
  { name: "石嘴山", value: 49 },
  { name: "沈阳", value: 50 },
  { name: "苏州", value: 50 },
  { name: "茂名", value: 50 },
  { name: "嘉兴", value: 51 },
  { name: "长春", value: 51 },
  { name: "胶州", value: 52 },
  { name: "银川", value: 52 },
  { name: "张家港", value: 52 },
  { name: "三门峡", value: 53 },
  { name: "锦州", value: 54 },
  { name: "南昌", value: 54 },
  { name: "柳州", value: 54 },
  { name: "三亚", value: 54 },
  { name: "自贡", value: 56 },
  { name: "吉林", value: 56 },
  { name: "阳江", value: 57 },
  { name: "泸州", value: 57 },
  { name: "西宁", value: 57 },
  { name: "宜宾", value: 58 },
  { name: "呼和浩特", value: 58 },
  { name: "成都", value: 58 },
  { name: "大同", value: 58 },
  { name: "镇江", value: 59 },
  { name: "桂林", value: 59 },
  { name: "张家界", value: 59 },
  { name: "宜兴", value: 59 },
  { name: "北海", value: 60 },
  { name: "西安", value: 61 },
  { name: "金坛", value: 62 },
  { name: "东营", value: 62 },
  { name: "牡丹江", value: 63 },
  { name: "遵义", value: 63 },
  { name: "绍兴", value: 63 },
  { name: "扬州", value: 64 },
  { name: "常州", value: 64 },
  { name: "潍坊", value: 65 },
  { name: "重庆", value: 66 },
  { name: "台州", value: 67 },
  { name: "南京", value: 67 },
  { name: "滨州", value: 70 },
  { name: "贵阳", value: 71 },
  { name: "无锡", value: 71 },
  { name: "本溪", value: 71 },
  { name: "克拉玛依", value: 72 },
  { name: "渭南", value: 72 },
  { name: "马鞍山", value: 72 },
  { name: "宝鸡", value: 72 },
  { name: "焦作", value: 75 },
  { name: "句容", value: 75 },
  { name: "北京", value: 79 },
  { name: "徐州", value: 79 },
  { name: "衡水", value: 80 },
  { name: "包头", value: 80 },
  { name: "绵阳", value: 80 },
  { name: "乌鲁木齐", value: 84 },
  { name: "枣庄", value: 84 },
  { name: "杭州", value: 84 },
  { name: "淄博", value: 85 },
  { name: "鞍山", value: 86 },
  { name: "溧阳", value: 86 },
  { name: "库尔勒", value: 86 },
  { name: "安阳", value: 90 },
  { name: "开封", value: 90 },
  { name: "济南", value: 92 },
  { name: "德阳", value: 93 },
  { name: "温州", value: 95 },
  { name: "九江", value: 96 },
  { name: "邯郸", value: 98 },
  { name: "临安", value: 99 },
  { name: "兰州", value: 99 },
  { name: "沧州", value: 100 },
  { name: "临沂", value: 103 },
  { name: "南充", value: 104 },
  { name: "天津", value: 105 },
  { name: "富阳", value: 106 },
  { name: "泰安", value: 112 },
  { name: "诸暨", value: 112 },
  { name: "郑州", value: 113 },
  { name: "哈尔滨", value: 114 },
  { name: "聊城", value: 116 },
  { name: "芜湖", value: 117 },
  { name: "唐山", value: 119 },
  { name: "平顶山", value: 119 },
  { name: "邢台", value: 119 },
  { name: "德州", value: 120 },
  { name: "济宁", value: 120 },
  { name: "荆州", value: 127 },
  { name: "宜昌", value: 130 },
  { name: "义乌", value: 132 },
  { name: "丽水", value: 133 },
  { name: "洛阳", value: 134 },
  { name: "秦皇岛", value: 136 },
  { name: "株洲", value: 143 },
  { name: "石家庄", value: 147 },
  { name: "莱芜", value: 148 },
  { name: "常德", value: 152 },
  { name: "保定", value: 153 },
  { name: "湘潭", value: 154 },
  { name: "金华", value: 157 },
  { name: "岳阳", value: 169 },
  { name: "长沙", value: 175 },
  { name: "衢州", value: 177 },
  { name: "廊坊", value: 193 },
  { name: "菏泽", value: 194 },
  { name: "合肥", value: 229 },
  { name: "武汉", value: 273 },
  { name: "大庆", value: 279 }
];
var geoCoordMap = {
//   黑龙江: [106.629804, 27.774197],
  海门: [121.15, 31.89],
  鄂尔多斯: [109.781327, 39.608266],
  招远: [120.38, 37.35],
  舟山: [122.207216, 29.985295],
  齐齐哈尔: [123.97, 47.33],
  盐城: [120.13, 33.38],
  赤峰: [118.87, 42.28],
  青岛: [120.33, 36.07],
  乳山: [121.52, 36.89],
  金昌: [102.188043, 38.520089],
  泉州: [118.58, 24.93],
  莱西: [120.53, 36.86],
  日照: [119.46, 35.42],
  胶南: [119.97, 35.88],
  南通: [121.05, 32.08],
  拉萨: [91.11, 29.97],
  云浮: [112.02, 22.93],
  梅州: [116.1, 24.55],
  文登: [122.05, 37.2],
  上海: [121.48, 31.22],
  攀枝花: [101.718637, 26.582347],
  威海: [122.1, 37.5],
  承德: [117.93, 40.97],
  厦门: [118.1, 24.46],
  汕尾: [115.375279, 22.786211],
  潮州: [116.63, 23.68],
  丹东: [124.37, 40.13],
  太仓: [121.1, 31.45],
  曲靖: [103.79, 25.51],
  烟台: [121.39, 37.52],
  福州: [119.3, 26.08],
  瓦房店: [121.979603, 39.627114],
  即墨: [120.45, 36.38],
  抚顺: [123.97, 41.97],
  玉溪: [102.52, 24.35],
  张家口: [114.87, 40.82],
  阳泉: [113.57, 37.85],
  莱州: [119.942327, 37.177017],
  湖州: [120.1, 30.86],
  汕头: [116.69, 23.39],
  昆山: [120.95, 31.39],
  宁波: [121.56, 29.86],
  湛江: [110.359377, 21.270708],
  揭阳: [116.35, 23.55],
  荣成: [122.41, 37.16],
  连云港: [119.16, 34.59],
  葫芦岛: [120.836932, 40.711052],
  常熟: [120.74, 31.64],
  东莞: [113.75, 23.04],
  河源: [114.68, 23.73],
  淮安: [119.15, 33.5],
  泰州: [119.9, 32.49],
  南宁: [108.33, 22.84],
  营口: [122.18, 40.65],
  惠州: [114.4, 23.09],
  江阴: [120.26, 31.91],
  蓬莱: [120.75, 37.8],
  韶关: [113.62, 24.84],
  嘉峪关: [98.289152, 39.77313],
  广州: [113.23, 23.16],
  延安: [109.47, 36.6],
  太原: [112.53, 37.87],
  清远: [113.01, 23.7],
  中山: [113.38, 22.52],
  昆明: [102.73, 25.04],
  寿光: [118.73, 36.86],
  盘锦: [122.070714, 41.119997],
  长治: [113.08, 36.18],
  深圳: [114.07, 22.62],
  珠海: [113.52, 22.3],
  宿迁: [118.3, 33.96],
  咸阳: [108.72, 34.36],
  铜川: [109.11, 35.09],
  平度: [119.97, 36.77],
  佛山: [113.11, 23.05],
  海口: [110.35, 20.02],
  江门: [113.06, 22.61],
  章丘: [117.53, 36.72],
  肇庆: [112.44, 23.05],
  大连: [121.62, 38.92],
  临汾: [111.5, 36.08],
  吴江: [120.63, 31.16],
  石嘴山: [106.39, 39.04],
  沈阳: [123.38, 41.8],
  苏州: [120.62, 31.32],
  茂名: [110.88, 21.68],
  嘉兴: [120.76, 30.77],
  长春: [125.35, 43.88],
  胶州: [120.03336, 36.264622],
  银川: [106.27, 38.47],
  张家港: [120.555821, 31.875428],
  三门峡: [111.19, 34.76],
  锦州: [121.15, 41.13],
  南昌: [115.89, 28.68],
  柳州: [109.4, 24.33],
  三亚: [109.511909, 18.252847],
  自贡: [104.778442, 29.33903],
  吉林: [126.57, 43.87],
  阳江: [111.95, 21.85],
  泸州: [105.39, 28.91],
  西宁: [101.74, 36.56],
  宜宾: [104.56, 29.77],
  呼和浩特: [111.65, 40.82],
  成都: [104.06, 30.67],
  大同: [113.3, 40.12],
  镇江: [119.44, 32.2],
  桂林: [110.28, 25.29],
  张家界: [110.479191, 29.117096],
  宜兴: [119.82, 31.36],
  北海: [109.12, 21.49],
  西安: [108.95, 34.27],
  金坛: [119.56, 31.74],
  东营: [118.49, 37.46],
  牡丹江: [129.58, 44.6],
  遵义: [106.9, 27.7],
  绍兴: [120.58, 30.01],
  扬州: [119.42, 32.39],
  常州: [119.95, 31.79],
  潍坊: [119.1, 36.62],
  重庆: [106.54, 29.59],
  台州: [121.420757, 28.656386],
  南京: [118.78, 32.04],
  滨州: [118.03, 37.36],
  贵阳: [106.71, 26.57],
  无锡: [120.29, 31.59],
  本溪: [123.73, 41.3],
  克拉玛依: [84.77, 45.59],
  渭南: [109.5, 34.52],
  马鞍山: [118.48, 31.56],
  宝鸡: [107.15, 34.38],
  焦作: [113.21, 35.24],
  句容: [119.16, 31.95],
  北京: [116.46, 39.92],
  徐州: [117.2, 34.26],
  衡水: [115.72, 37.72],
  包头: [110, 40.58],
  绵阳: [104.73, 31.48],
  乌鲁木齐: [87.68, 43.77],
  枣庄: [117.57, 34.86],
  杭州: [120.19, 30.26],
  淄博: [118.05, 36.78],
  鞍山: [122.85, 41.12],
  溧阳: [119.48, 31.43],
  库尔勒: [86.06, 41.68],
  安阳: [114.35, 36.1],
  开封: [114.35, 34.79],
  济南: [117, 36.65],
  德阳: [104.37, 31.13],
  温州: [120.65, 28.01],
  九江: [115.97, 29.71],
  邯郸: [114.47, 36.6],
  临安: [119.72, 30.23],
  兰州: [103.73, 36.03],
  沧州: [116.83, 38.33],
  临沂: [118.35, 35.05],
  南充: [106.110698, 30.837793],
  天津: [117.2, 39.13],
  富阳: [119.95, 30.07],
  泰安: [117.13, 36.18],
  诸暨: [120.23, 29.71],
  郑州: [113.65, 34.76],
  哈尔滨: [126.63, 45.75],
  聊城: [115.97, 36.45],
  芜湖: [118.38, 31.33],
  唐山: [118.02, 39.63],
  平顶山: [113.29, 33.75],
  邢台: [114.48, 37.05],
  德州: [116.29, 37.45],
  济宁: [116.59, 35.38],
  荆州: [112.239741, 30.335165],
  宜昌: [111.3, 30.7],
  义乌: [120.06, 29.32],
  丽水: [119.92, 28.45],
  洛阳: [112.44, 34.7],
  秦皇岛: [119.57, 39.95],
  株洲: [113.16, 27.83],
  石家庄: [114.48, 38.03],
  莱芜: [117.67, 36.19],
  常德: [111.69, 29.05],
  保定: [115.48, 38.85],
  湘潭: [112.91, 27.87],
  金华: [119.64, 29.12],
  岳阳: [113.09, 29.37],
  长沙: [113, 28.21],
  衢州: [118.88, 28.97],
  廊坊: [116.7, 39.53],
  菏泽: [115.480656, 35.23375],
  合肥: [117.27, 31.86],
  武汉: [114.31, 30.52],
  大庆: [125.03, 46.58]
};

var Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
// 省份数据
var baseData = [
    {
        name: '云南', 
        valueB: 1,
        valueVariety: 1.9,
        valueM: 2569,
        valueStock: 1021,                    
        itemStyle: {
            normal: {                       
                areaColor: '#0554E4'
            },
            emphasis: {
                areaColor: "#0554E4"
            }                      
        }
    },   
    {
        name: '浙江', 
        valueB: 2,
        valueVariety: 1.4,
        valueM: 1528,
        valueStock: 576,
        itemStyle: {
          normal: {
              areaColor: '#27E9FD'
          },
          emphasis: {
              areaColor: "#27E9FD"
          }        
        }                    
    },
    {
        name: '湖南', 
        valueB: 32.7,
        valueVariety: 1.2,
        valueM: 245,
        valueStock: 109,                    
        itemStyle: {
          normal: {                        
              areaColor: '#20CAF8'
          },
          emphasis: {
              areaColor: "#20CAF8"
          }
        }                     
    },
    {
        name: '上海', 
        valueB: 55.7,
        valueVariety: 1.3,
        valueM: 1765,
        valueStock: 634,                    
        itemStyle: {
          normal: {                        
              areaColor: '#005ce5'
          },
          emphasis: {
              areaColor: "#005ce5"
          }
        }                                                            
    },
    {
        name: '内蒙古', 
        valueB: 52.7,
        valueVariety: 2.3,
        valueM: 1034,
        valueStock: 460,                    
        itemStyle: {
          normal: {                        
              areaColor: '#034DE4'
          },
          emphasis: {
              areaColor: "#034DE4"
          }
        }                                       
    },
    {
        name: '湖北', 
        valueB: 52.7,
        valueVariety: 1.1,
        valueM: 824,
        valueStock: 402,                    
        itemStyle: {
          normal: {                        
              areaColor: '#034DE4'
          },
          emphasis: {
              areaColor: "#034DE4"
          }
        }                    
    },
    {
      name: '江西', 
      valueB: 32.7,
      valueVariety: 1.4,
      valueM: 1240,
      valueStock: 645,                    
      itemStyle: {
          normal: {                        
              areaColor: '#17A3F1'
          },
          emphasis: {
              areaColor: "#17A3F1"
          }                          
      }
    },
    {
        name: '江苏', 
        valueB: 42.7,
        valueVariety: 1.3,
        valueM: 1732,
        valueStock: 734,                    
        itemStyle: {
          normal: {                        
              areaColor: '#4BFFFF'
          },
          emphasis: {
              areaColor: "#4BFFFF"                            
          }       
        }
    },
    {
        name: '四川', 
        valueB: 32.1,
        valueVariety: 1.4,
        valueM: 1324,
        valueStock: 509,
        itemStyle: {
          normal: {                        
              areaColor: '#17A3F1'
          },
          emphasis: {
              areaColor: "#17A3F1"
          }       
        }
    },
 
    {
        name: '广东', 
        valueB: 25.1,
        valueVariety: 1.3,
        valueM: 902,
        valueStock: 343,                    
        itemStyle: {
          normal: {                        
              areaColor: '#00d9fc'                           
          },
          emphasis: {
              areaColor: "#00d9fc"                            
          }       
        }
    },    
    {
        name: '甘肃', 
        valueB: 12.7,
        valueVariety: 1.4,
        valueM: 834,
        valueStock: 379,                    
        itemStyle: {
          normal: {                        
              areaColor: '#0042df'
          },
          emphasis: {
              areaColor: "#0042df"
          }
        }                    
    },
    {
        name: '河北', 
        valueB: 52.7,
        valueVariety: 2.3,
        valueM: 1034,
        valueStock: 460,                    
        itemStyle: {
          normal: {                        
              areaColor: '#034DE4'
          },
          emphasis: {
              areaColor: "#034DE4"
          }
        }                                       
    },
    {
        name: '河南', 
        valueB: 52.7,
        valueVariety: 1.1,
        valueM: 824,
        valueStock: 402,                    
        itemStyle: {
          normal: {                        
              areaColor: '#034DE4'
          },
          emphasis: {
              areaColor: "#034DE4"
          }
        }                    
    },
    {
      name: '黑龙江', 
      valueB: 32.7,
      valueVariety: 1.4,
      valueM: 1240,
      valueStock: 645,                    
      itemStyle: {
          normal: {                        
              areaColor: '#17A3F1'
          },
          emphasis: {
              areaColor: "#17A3F1"
          }                          
      }
    },
    {
        name: '山东', 
        valueB: 42.7,
        valueVariety: 1.3,
        valueM: 1732,
        valueStock: 734,                    
        itemStyle: {
          normal: {                        
              areaColor: '#4BFFFF'
          },
          emphasis: {
              areaColor: "#4BFFFF"                            
          }       
        }
    },
    {
        name: '新疆', 
        valueB: 32.1,
        valueVariety: 1.4,
        valueM: 1324,
        valueStock: 509,
        itemStyle: {
          normal: {                        
              areaColor: '#17A3F1'
          },
          emphasis: {
              areaColor: "#17A3F1"
          }       
        }
    },    
    {
      name: '宁夏', 
      itemStyle: {
          normal: {                        
              areaColor: '#01b0f3'                            
          },
          emphasis: {
              areaColor: "#01b0f3",
              opacity: 0.2                            
          }       
      },
      label: {
          show: false
      }                                         
    },
    {
      name: '海南', 
      itemStyle: {
          normal: {                        
              areaColor: '#00f0ff'
          },
          emphasis: {
              areaColor: "#00f0ff",
              opacity: 0.2                            
          }
      },
      label: {
          show: false
      }                                         
    },
    {
      name: '台湾',                   
      itemStyle: {
          normal: {                       
              areaColor: '#0067e7'
          },
          emphasis: {
              areaColor: "#0067e7",
              opacity: 0.2
          }
      },
      label: {
          show: false
      }                     
    },
    {
      name: '香港',                   
      itemStyle: {
          normal: {                        
              areaColor: '#00dafa'
          },
          emphasis: {
              areaColor: "#00dafa",
              opacity: 0.2                            
          }
      },
      label: {
          show: false
      }                                                              
    },
    {
      name: '澳门', 
      itemStyle: {
          normal: {                        
              areaColor: '#00dafa'
          },
          emphasis: {
              areaColor: "#00dafa",
              opacity: 0.2                            
          }
      },
      label: {
          show: false
      }                                                              
    },
    {
      name: '北京', 
      itemStyle: {
          normal: {
            areaColor: '#034DE4'                            
          },
          emphasis: {
            areaColor: "#034DE4",
            opacity: 0.2
          }
      },
      label: {
          show: false
      }                      
    },
    {
          name: '天津', 
          itemStyle: {
          normal: {
              areaColor: '#034DE4'                          
          },
          emphasis: {
              areaColor: "#034DE4",
              opacity: 0.2  
          }
      },
      label: {
          show: false
      }                      
      },
      {
          name: '重庆', 
          itemStyle: {
          normal: {                        
              areaColor: '#0E7DEB'
          },
          emphasis: {
              areaColor: "#0E7DEB",
              opacity: 0.2                            
          }         
          },
          label: {
              show: false
          }                                         
      },      
      {
          name: '辽宁', 
          itemStyle: {
              normal: {                        
                  areaColor: '#034DE4'                          
              },
              emphasis: {
                  areaColor: "#034DE4",
                  opacity: 0.2  
              }
          },
          label: {
              show: false
          }                      
      },
      {
          name: '安徽',                    
          itemStyle: {
          normal: {                        
              areaColor: '#27E8FD'
          },
          emphasis: {
              areaColor: "#27E8FD",
              opacity: 0.2                            
          }
          },
          label: {
              show: false
          }                                          
      },      
      {
          name: '广西', 
          itemStyle: {
          normal: {                        
              areaColor: '#0088ec'
          },
          emphasis: {
              areaColor: "#0088ec",
              opacity: 0.2  
          }       
          },
          label: {
              show: false
          }                      
      },      
      {
          name: '山西',                   
          itemStyle: {
          normal: {                        
              areaColor: '#01d0fa'
          },
          emphasis: {
              areaColor: "#01d0fa",
              opacity: 0.2                            
          }
          },
          label: {
              show: false
          }                      
      },
      {
          name: '陕西', 
          itemStyle: {
          normal: {                        
              areaColor: '#01b0f3'
          },
          emphasis: {
              areaColor: "#01b0f3",
              opacity: 0.2                            
          }
          },
          label: {
              show: false
          }                                                                                                                          
      },
      {
          name: '吉林',                    
          itemStyle: {
          normal: {                        
              areaColor: '#0051e1'                           
          },
          emphasis: {
              areaColor: "#0051e1",
              opacity: 0.2 
          }
          },
          label: {
              show: false
          }                                                            
      },
      {
          name: '福建', 
          itemStyle: {
              normal: {                       
              areaColor: '#0158e3'
          },
          emphasis: {
              areaColor: "#0158e3",
              opacity: 0.2                            
          }
          },
          label: {
              show: false
          }                                        
      },
      {
          name: '贵州', 
          itemStyle: {
          normal: {                        
              areaColor: '#0199ef'                          
          },
          emphasis: {
              areaColor: "#0199ef",
              opacity: 0.2  
          }
          },
          label: {
              show: false
          }                                       
      },      
      {
          name: '青海',                   
          itemStyle: {
              normal: {                        
                  areaColor: '#005ae4'                           
              },
              emphasis: {
                  areaColor: "#005ae4",
                  opacity: 0.2 
              }
          },
          label: {
              show: false
          }                                                             
      },
      {
          name: '西藏',                    
          itemStyle: {
              normal: {                        
              areaColor: '#01e9fd'                           
              },
              emphasis: {
              areaColor: "#01e9fd",
              opacity: 0.2                            
              }       
          },
          label: {
              show: false
          } 
      }    


  ];
var mapData = {
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: []
};
function monthD() { 
    var arr = JSON.parse(JSON.stringify(baseData));
    for (var j = 0; j < arr.length; j++) {
        if (j == 0) {
            baseData[j].valueB = (Math.random() * 2).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.8).toFixed(3)
        }
        else if (j == 1) {
            baseData[j].valueB = (Math.random() * 0.3).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.7).toFixed(3)
        }
        else if (j == 2) {
            baseData[j].valueB = (Math.random() * 0.03).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 6.5).toFixed(3)
        }
        else if (j == 3) {
            baseData[j].valueB = (Math.random() * 0.1).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.1).toFixed(3)
        }

        else if (j == 4) {
            baseData[j].valueB = (Math.random() * 0.1).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.1).toFixed(3)
        }
        else if (j == 5) {
            baseData[j].valueB = (Math.random() * 0.2).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.12).toFixed(3)
        }

        else if (j == 6) {
            baseData[j].valueB = (Math.random() * 0.1).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.2).toFixed(3)
        }
        else if (j == 7) {
            baseData[j].valueB = (Math.random() * 0.05).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 0.2).toFixed(3)
        }
        else if (j == 8) {
            baseData[j].valueB = (Math.random() * 0.1).toFixed(3);

            baseData[j].valueVariety = (Math.random() * 2.8).toFixed(3)
        }
    }
    return arr;
 }
var val = 0;
for (var i = 0; i < Month.length; i++) {

    mapData[Month[i]] = monthD();

}
console.log(mapData)

// 有数据省份
var hasData = ['云南', '浙江', '湖南', '上海', '内蒙古', '湖北', '江西', '江苏','四川']; 
// 全国12个月数据
var allMData = {
    book: [853,826,837,841,858,803,791,787,863,854,865,875],
    variety: [25.1,24.3,24.6,25.4,28.7,29.5,23.2,21.9,23.8,20.6,27.3,25.7],
    maYang: [28340,28352,29437,30254,31061,30356,30243,29009,27356,28342,27329,31358],
    stock:  [12710,13402,12568,14002,14073,13368,13914,11467,13479,13321,12465,12020]
}
var point = 'image://img/point.png';
var curIndx = 0;
var rich = {
    a: {
        fontSize: 18,
        align: 'left',
        padding: [0,0,60,38]
    },
    w: {
        fontSize: 16,  
        align: 'left',    
        padding: [0,0,-25,105]
    },
    t1: {
        fontSize: 16, 
        align: 'left',       
        padding: [0,0,-45,105]
    },
    t2: {
        fontSize: 16, 
        align: 'left',       
        padding: [0,0,-5,105]
    }
}

var option = {
  geo: {
    map: "china",
    label: {
      emphasis: {
        show: false
      }
    },
    roam: false,
    layoutCenter: ["50%", "55%"],
    layoutSize: "110%",
    regions: [
        {
            name: '南海诸岛',
            itemStyle: {
                areaColor: '#6F798D',
                opacity: 0.5
            }
        },
        {
            name: '北京', 
            itemStyle: {
                areaColor: '#034DE4',
                opacity: 0.2                            
            }
        },
        {
            name: '天津', 
            itemStyle: {
							areaColor: '#034DE4',
							opacity: 0.2                            
						}
        },
        {
            name: '上海', 
            itemStyle: {
							areaColor: '#27E9FD',
							opacity: 0.2                            
						}						
						
        },
        {
            name: '重庆', 
            itemStyle: {
							areaColor: '#0E7DEB',
							opacity: 0.2                            
						}                  
        },
        {
            name: '河北', 
						itemStyle: {
							areaColor: '#034DE4',
							opacity: 0.2                            
						}                                      
        },
        {
            name: '河南', 
            itemStyle: {
							areaColor: '#034DE4',
							opacity: 0.2                            
						}
        },
        {
            name: '云南', 
            itemStyle: {
							areaColor: '#20CAF8',
							opacity: 0.2                            
						}
        },
        {
					name: '辽宁', 
					itemStyle: {
						areaColor: '#034DE4',
						opacity: 0.2                            
					}                    
        },
        {
					name: '黑龙江', 
					itemStyle: {
						areaColor: '#17A3F1',
						opacity: 0.2                            
					}
        },
        {
					name: '湖南', 
					itemStyle: {
						areaColor: '#0554E4',
						opacity: 0.2                            
					}
        },
        {
            name: '安徽', 
            itemStyle: {
							areaColor: '#27E8FD',
							opacity: 0.2                            
						}                  
        },
        {
            name: '山东', 
            itemStyle: {
							areaColor: '#4BFFFF',
							opacity: 0.2                            
						}
        },
        {
            name: '新疆', 
						itemStyle: {
							areaColor: '#17A3F1',
							opacity: 0.2                            
						}
        },
        {
            name: '江苏', 
            itemStyle: {
							areaColor: '#00b6f6',
							opacity: 0.2                            
						}                  
        },
        {
            name: '浙江', 
            itemStyle: {
							areaColor: '#00b6f6',
							opacity: 0.2                            
						}                    
        },
        {
            name: '江西', 
            itemStyle: {
							areaColor: '#01a4f1',
							opacity: 0.2                            
						} 
        },
        {
            name: '湖北', 
            itemStyle: {
							areaColor: '#005ce5',
							opacity: 0.2                            
						} 
        },
        {
            name: '广西', 
            itemStyle: {
							areaColor: '#0088ec',
							opacity: 0.2                            
						} 
        },
        {
            name: '甘肃', 
            itemStyle: {
							areaColor: '#0042df',
							opacity: 0.2                            
						}                                       
        },
        {
            name: '山西', 
            itemStyle: {
							areaColor: '#01d0fa',
							opacity: 0.2                            
						}                     
        },
        {
            name: '内蒙古', 
            itemStyle: {
                areaColor: '#00ccf7',
                opacity: 0.2                            
            }                                       
        },
        {
            name: '陕西', 
            itemStyle: {
							areaColor: '#01b0f3',
							opacity: 0.2                            
						} 
        },
        {
            name: '吉林', 
            itemStyle: {
							areaColor: '#0051e1',
							opacity: 0.2                            
						}                                       
        },
        {
            name: '福建', 
            itemStyle: {
							areaColor: '#0158e3',
							opacity: 0.2                            
						} 
        },
        {
            name: '贵州', 
            itemStyle: {
							areaColor: '#0199ef',
							opacity: 0.2                            
						}                    
        },
        {
            name: '广东', 
            itemStyle: {
							areaColor: '#00d9fc',
							opacity: 0.2                            
						} 
        },
        {
            name: '青海', 
            itemStyle: {
							areaColor: '#005ae4',
							opacity: 0.2                            
						} 
        },
        {
            name: '西藏', 
            itemStyle: {
							areaColor: '#01e9fd',
							opacity: 0.2                            
						}                    
        },
        {
					name: '四川', 
					itemStyle: {
						areaColor: '#0069e8',
						opacity: 0.2                            
					} 
        },
        {
					name: '宁夏', 
					itemStyle: {
						areaColor: '#01b0f3',
						opacity: 0.2                            
					}                    
        },
        {
					name: '海南', 
					itemStyle: {
						areaColor: '#00f0ff',
						opacity: 0.2                            
					}                   
        },
        {
					name: '台湾', 
					itemStyle: {
						areaColor: '#0067e7',
						opacity: 0.2                            
					}                                      
        },
        {
					name: '香港', 
					itemStyle: {
						areaColor: '#00dafa',
						opacity: 0.2                            
					} 
        },
        {
					name: '澳门', 
					itemStyle: {
						areaColor: '#00dafa',
						opacity: 0.2                            
					} 
        } 
]
  },
  series: [
    {
      name: "中国",
      type: "map",
      mapType: "china",
      layoutCenter: ["50%", "55%"],
      layoutSize: "110%",
      label: {
        width: 320,
        height: 140,   
        backgroundColor: {
            image: "img/tip-bg.png"
        },
        emphasis: {               
            show: true,
            color: "#fff",    
            formatter: function(params){
                var data = params.data;
                // '{a|这段文本采用样式a}',
                return (
                    '{a|' + params.name + '}' +
                    "\n" +                  
                    '{t1|' + "销售：" + data.valueB + '万' + '}' +
                    "\n" +        
                    '{t2|' + "库存：" + data.valueVariety + '万' + '}'          
                )
            }
        },
        rich: rich
      },
      itemStyle: {
        normal: {
            opacity: 0.2
        },
        emphasis: {
            opacity: 1,
            borderWidth: 2,
            borderColor: '#fff'
        }
      },
      data: [
        {
          name: '北京', 
          itemStyle: {
            normal: {
                areaColor: '#034DE4'                            
            },
            emphasis: {
            areaColor: '#034DE4',                            
            opacity: 0.2  
            }
          },
          label: {
              show: false
          }
        },
        {
            name: '天津', 
            itemStyle: {
                normal: {
                    areaColor: '#034DE4'                            
                },
                emphasis: {
                  areaColor: '#034DE4',                            
                  opacity: 0.2  
                }
            },
            label: {
                show: false
            }
        },
        {
            name: '上海', 
            itemStyle: {
                normal: {
                    areaColor: '#27E9FD'   
                },
                emphasis: {
                    areaColor: '#27E9FD'
                }
            }                    
        },
        {
            name: '重庆', 
            itemStyle: {
                normal: {                        
                    areaColor: '#0E7DEB'
                },
                emphasis: {
                    areaColor: '#0E7DEB',
                    opacity: 0.2                  
                }
            },
            label: {
                show: false
            }                   
        },
        {
            name: '河北',                    
            itemStyle: {
                normal: {                        
                    areaColor: '#034DE4'
                },
                emphasis: {
                    areaColor: '#034DE4'
                }
            }                                       
        },
        {
            name: '河南',                    
            itemStyle: {
                normal: {                        
                    areaColor: '#034DE4'
                },
                emphasis: {
                    areaColor: '#034DE4'
                }
            }                    
        },
        {
            name: '云南', 
            itemStyle: {
                normal: {                        
                    areaColor: '#20CAF8'
                },
                emphasis: {
                    areaColor: '#20CAF8'
                }
            }                     
        },
        {
            name: '辽宁', 
            itemStyle: {
                normal: {                        
                    areaColor: '#034DE4'
                },
                emphasis: {
                    areaColor: '#034DE4',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                     
        },
        {
            name: '黑龙江', 
            itemStyle: {
                normal: {                        
                    areaColor: '#17A3F1'
                },
                emphasis: {
                    areaColor: "#17A3F1"
                }                          
            }
        },
        {
            name: '湖南', 
            itemStyle: {
                normal: {                       
                    areaColor: '#0554E4'                      
                },
                emphasis: {
                    areaColor: '#0554E4'                      
                }      
            } 
        },
        {
            name: '安徽', 
            itemStyle: {
                normal: {                        
                    areaColor: '#27E8FD'
                },
                emphasis: {
                    areaColor: '#27E8FD',
                    opacity: 0.2                      
                }      
            },
            label: {
                show: false
            }                    
        },
        {
            name: '山东', 
            itemStyle: {
                normal: {                        
                    areaColor: '#4BFFFF'                    
                },
                emphasis: {
                    areaColor: '#4BFFFF'
                }       
            }
        },
        {
            name: '新疆', 
            itemStyle: {
                normal: {                        
                    areaColor: '#17A3F1'    
                },
                emphasis: {
                    areaColor: '#17A3F1'                       
                }       
            }
        },
        {
            name: '江苏', 
            itemStyle: {
                normal: {                        
                    areaColor: '#00b6f6'
                },
                emphasis: {
                    areaColor: '#00b6f6'
                }
            }                   
        },
        {
            name: '浙江', 
            itemStyle: {
                normal: {                        
                    areaColor: '#00b6f6'
                },
                emphasis: {
                    areaColor: '#00b6f6',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                    
        },
        {
            name: '江西', 
            itemStyle: {
                normal: {                        
                    areaColor: '#01a4f1'
                },
                emphasis: {
                    areaColor: '#01a4f1'
                }
            }                                        
        },
        {
            name: '湖北', 
            itemStyle: {
                normal: {                        
                    areaColor: '#005ce5'
                },
                emphasis: {
                    areaColor: '#005ce5'
                }
            }                                                            
        },
        {
            name: '广西', 
            itemStyle: {
                normal: {                        
                    areaColor: '#0088ec'                           
                },
                emphasis: {
                    areaColor: '#0088ec',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                    
        },
        {
            name: '甘肃', 
            itemStyle: {
                normal: {                        
                    areaColor: '#0042df'
                },
                emphasis: {
                    areaColor: '#0042df'
                }
            }                    
        },
        {
            name: '山西', 
            itemStyle: {
                normal: {                        
                    areaColor: '#01d0fa'
                },
                emphasis: {
                    areaColor: '#01d0fa',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            } 
        },
        {
            name: '内蒙古', 
            itemStyle: {
                normal: {                        
                    areaColor: '#00ccf7'
                },
                emphasis: {
                    areaColor: '#00ccf7'
                }
            }
        },
        {
            name: '陕西', 
            itemStyle: {
                normal: {                        
                    areaColor: '#01b0f3'
                },
                emphasis: {
                    areaColor: '#01b0f3',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                                                              
        },
        {
            name: '吉林', 
            itemStyle: {
                normal: {                        
                    areaColor: '#0051e1'
                },
                emphasis: {
                    areaColor: '#0051e1',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                                                                                
        },
        {
            name: '福建', 
            itemStyle: {
                normal: {                       
                    areaColor: '#0158e3'
                },
                emphasis: {
                    areaColor: '#0158e3',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                                                                                                      
        },
        {
            name: '贵州', 
            itemStyle: {
                normal: {                        
                    areaColor: '#0199ef'
                },
                emphasis: {
                    areaColor: '#0199ef',
                    opacity: 0.2
                }
            },
            label: {
                show: false
            }                                                                                                                                            
        },
        {
          name: '广东', 
          itemStyle: {
              normal: {                        
                  areaColor: '#00d9fc'                            
              },
              emphasis: {
                  areaColor: '#00d9fc',
                  opacity: 0.2
              }
          },
          label: {
              show: false
          }                                                                                                      
        },
        {
            name: '青海', 
            itemStyle: {
                normal: {                        
                    areaColor: '#005ae4'
                },
                emphasis: {
                    areaColor: '#005ae4',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }                    
        },
        {
            name: '西藏', 
            itemStyle: {
                normal: {                        
                    areaColor: '#01e9fd'                            
                },
                emphasis: {
                    areaColor: '#01e9fd',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }
        },
        {
            name: '四川', 
            itemStyle: {
                normal: {                        
                    areaColor: '#0069e8'                           
                },
                emphasis: {
                    areaColor: '#0069e8'
                }

            }
        },
        {
            name: '宁夏', 
            itemStyle: {
                normal: {                        
                    areaColor: '#01b0f3'                            
                },
                emphasis: {
                    areaColor: '#01b0f3',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }
        },
        {
            name: '海南', 
            itemStyle: {
                normal: {                        
                    areaColor: '#00f0ff'
                },
                emphasis: {
                    areaColor: '#00f0ff',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }                    
        },
        {
            name: '台湾',                  
            itemStyle: {
                    normal: {                       
                    areaColor: '#0067e7'
                },
                emphasis: {
                    areaColor: '#0067e7',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }                    
        },
        {
            name: '香港', 
            itemStyle: {
                normal: {                        
                    areaColor: '#00dafa'
                },
                emphasis: {
                    areaColor: '#00dafa',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }                                         
        },
        {
            name: '澳门', 
            itemStyle: {
                normal: {                        
                    areaColor: '#00dafa'                                                    
                },
                emphasis: {
                    areaColor: '#00dafa',
                    opacity: 0.2                    
                }
            },
            label: {
                show: false
            }
        }        
      ],
    },
    {
      name: "数据集中点",
      type: "scatter",
      coordinateSystem: "geo",
			data: convertData(data),
			symbol: point,
      symbolSize: function(val) {
        return val[2] / 8;
      },
      label: {
        normal: {
          formatter: "{b}",
          position: "right",
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: "#ffff00"
        }
      }
    }
  ]
};


mapChart.setOption(option);


var thirdData = [
    {
        //第一月份-畅销榜-10本
        BestSellingList: [
            '当励志不再有效：自我平静得五步锻炼',
            '时拾史事.第1辑',
            '汉代的星空',
            '钱穆先生全集',
            '中国历代政治得失',
            '儒将传奇：护国军神之蔡锷将军',
            '论恐惧',
            '福尔摩斯探案',
            '说文解字（文白对照）',
            '将军的女儿'
        ],

        //第一月份-滞销榜-10本
        UnmarketableList: [
            '论语我读',
            '论人类不平等的起源(英汉对照)',
            '君主论(英汉对照)',
            '旭日飞扬：感动小学生的50个人物',
            '教育就是解放心灵',
            '庄老通辩',
            '钱穆先生全集-四书释义',
            '孔子传  钱穆先生全集',
            '台湾“土改”的前前后后  农复会口述历史',
            '结婚吗'
        ],
        //第一月份-销售数据
        SalesData: 25,
        //第一月份-库存数据
        InventoryData: 234,
        //第一月份=出版词云
        ClouImg: '1.png',
        ClouRanking: 7
    },


    {
        //第二月份-畅销榜-10本
        BestSellingList: [
            '黄仁宇全集',
            '钱穆先生全集',
            '钱穆先生全集-国史大纲',
            '中国历代政治得失',
            '中国历史精神',
            '周易经象义证',
            '将军的女儿',
            '宋代消费史',
            '大师课徒',
            '历史的张力：重寻11位英雄之路'
        ],

        //第二月份-滞销榜-10本
        UnmarketableList: [
            '近代中国的变局',
            '马斯洛人本哲学',
            '罗素道德哲学',
            '庄老通辩',
            '庄子纂笺',
            '哈耶克自由哲学',
            '老郭游记',
            '黑格尔的逻辑学',
            '容忍比自由更重要',
            '四书释义'
        ],
        //第二月份-销售数据
        SalesData: 27,
        //第二月份-库存数据
        InventoryData: 167,
        //第二月份=出版词云
        ClouImg: '2.png',
        ClouRanking: 6
    },




    {
        //第三月份-畅销榜-10本
        BestSellingList: [
            '中国历代政治得失',
            '蒐书记',
            '将军的女儿',
            '合掌录：阎崇年对话星云大师',
            '说文解字（文白对照）',
            '中国食谱',
            '回家的路-高秉涵回忆录',
            '当励志不再有效：自我平静得五步锻炼',
            '找寻真实的蒋介石：还原13个历史真相',
            '阳明学述要'
        ],

        //第三月份-滞销榜-10本
        UnmarketableList: [
            '健康只要十分钟',
            '冰球大战',
            '罗素道德哲学',
            '庄老通辩',
            '庄子纂笺',
            '哈耶克自由哲学',
            '近代中国的变局',
            '让心入静',
            '容忍比自由更重要',
            '四书释义'
        ],
        //第三月份-销售数据
        SalesData: 24,
        //第三月份-库存数据
        InventoryData: 212,
        //第三月份=出版词云
        ClouImg: '3.png',
        ClouRanking: 6
    },


    {
        //第四月份-畅销榜-10本
        BestSellingList: [
            '沈志华演讲录',
            '钱穆先生全集',
            '中国历代政治得失',
            '周易经象义证',
            '当励志不再有效：自我平静得五步锻炼',
            '合掌录：阎崇年对话星云大师',
            '北平风物',
            '说文解字（文白对照）',
            '钱穆先生全集-国史大纲',
            '蒐书记'
        ],

        //第四月份-滞销榜-10本
        UnmarketableList: [
            '时拾史事.第1辑',
            '权力的边界:税.革命与改革',
            '罗素道德哲学',
            '庄老通辩',
            '十万里路三千天',
            '哈耶克自由哲学',
            '近代中国的变局',
            '似笑非笑',
            '容忍比自由更重要',
            '四书释义'
        ],
        //第四月份-销售数据
        SalesData: 26,
        //第四月份-库存数据
        InventoryData: 246,
        //第四月份=出版词云
        ClouImg: '4.png',
        ClouRanking: 6
    },




    {
        //第五月份-畅销榜-10本
        BestSellingList: [
            '大抗战还我河山',
            '万历十五年',
            '钱穆先生全集-国史大纲',
            '四时读书乐',
            '将军的女儿',
            '叔本华人生哲学',
            '从大渡河勇士到导弹司令：开国中将孙继先',
            '旧梦重温时',
            '历史的砝码',
            '中国历代政治得失'
        ],

        //第五月份-滞销榜-10本
        UnmarketableList: [
            '中国传统美德',
            '沈志华演讲录',
            '罗素道德哲学',
            '庄老通辩',
            '快刀文章可下酒',
            '哈耶克自由哲学',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '四书释义'
        ],
        //第五月份-销售数据
        SalesData: 35,
        //第五月份-库存数据
        InventoryData: 23434,
        //第五月份=出版词云
        ClouImg: '5.png',
                ClouRanking: 7
    },



    {
        //第六月份-畅销榜-10本
        BestSellingList: [
            '万历十五年',
            '中国历代政治得失',
            '钱穆先生全集',
            '周易经象义证',
            '叔本华人生哲学',
            '回家的路-高秉涵回忆录',
            '1927-1950年中英两国关于西藏问题的较量与争论',
            '四书释义',
            '在关系中认识自我',
            '时光的盛宴:经典电影新发现'
        ],

        //第六月份-滞销榜-10本
        UnmarketableList: [
            '读史随劄',
            '万水千山,随爱流转',
            '罗素道德哲学',
            '庄老通辩',
            '人间花木',
            '哈耶克自由哲学',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '人性的弱点'
        ],
        //第六月份-销售数据
        SalesData: 29,
        //第六月份-库存数据
        InventoryData: 23434,
        //第六月份=出版词云
        ClouImg: '6.png',
                ClouRanking: 6
    },




    {
        //第七月份-畅销榜-10本
        BestSellingList: [
            '中国历代政治得失',
            '赫逊河畔谈中国历史',
            '将军的女儿',
            '钱穆先生全集-国史大纲',
            '万历十五年',
            '沈志华演讲录',
            '中国思想史',
            '叔本华人生哲学',
            '周易经象义证',
            '1927-1950年中英两国关于西藏问题的较量与争论'
        ],

        //第七月份-滞销榜-10本
        UnmarketableList: [
            '读史随劄',
            '古今之变',
            '罗素道德哲学',
            '中华警事史话',
            '人间花木',
            '哈耶克自由哲学',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '人性的弱点'
        ],
        //第七月份-销售数据
        SalesData: 36,
        //第七月份-库存数据
        InventoryData: 313,
        //第七月份=出版词云
        ClouImg: '7.png',
        ClouRanking: 7
    },




    {
        //第八月份-畅销榜-10本
        BestSellingList: [
            '钱穆先生全集-国史大纲',
            '中国历代政治得失',
            '中国历史精神',
            '困守与反攻:冷战中台湾选择',
            '万历十五年',
            '当励志不再有效：自我平静得五步锻炼',
            '你不知道的台湾',
            '中国思想史',
            '将军的女儿',
            '1927-1950年中英两国关于西藏问题的较量与争论'
        ],

        //第八月份-滞销榜-10本
        UnmarketableList: [
            '觉知的智慧',
            '丙中洛的眼泪',
            '恐怖三人组',
            '中华警事史话',
            '熊出没',
            '哈耶克自由哲学',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '人性的弱点'
        ],
        //第八月份-销售数据
        SalesData: 46,
        //第八月份-库存数据
        InventoryData: 411,
        //第八月份=出版词云
        ClouImg: '8.png',
        ClouRanking: 6
    },



    {
        //第九月份-畅销榜-10本
        BestSellingList: [
            '中国历代政治得失',
            '钱穆先生全集-国史大纲',
            '困守与反攻：冷战中的台湾选择',
            '你不知道的台湾',
            '将军的女儿',
            '中国食谱',
            '宋代消费史',
            '八十忆双亲 师友杂忆',
            '快刀文章可下酒',
            '说文解字（文白对照）'
        ],

        //第九月份-滞销榜-10本
        UnmarketableList: [
            '觉知的智慧',
            '丙中洛的眼泪',
            '恐怖三人组',
            '中华警事史话',
            '熊出没',
            '哈耶克自由哲学',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '人性的弱点'
        ],
        //第九月份-销售数据
        SalesData: 26,
        //第九月份-库存数据
        InventoryData: 234,
        //第九月份=出版词云
        ClouImg: '9.png',
        ClouRanking: 7
    },



    {
        //第十月份-畅销榜-10本
        BestSellingList: [
            '钱穆先生全集-国史大纲',
            '人间花木',
            '中国历代政治得失',
            '生命的奋进：五大师回忆录',
            '中国食谱',
            '从大渡河勇士到导弹司令：开国中将孙继先',
            '回家的路-高秉涵回忆录',
            '万历十五年',
            '孔子传',
            '困守与反攻：冷战中的台湾选择'
        ],

        //第十月份-滞销榜-10本
        UnmarketableList: [
            '这颗星球上的珠宝',
            '世界获奖推理小说选.7',
            '恐怖三人组',
            '中华警事史话',
            '熊出没',
            '觉知的智慧',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '让心入静'
        ],
        //第十月份-销售数据
        SalesData: 35,
        //第十月份-库存数据
        InventoryData: 239,
        //第十月份=出版词云
        ClouImg: '10.png',
        ClouRanking: 7
    },



    {
        //第十一月份-畅销榜-10本
        BestSellingList: [
            '生命的奋进：五大师回忆录',
            '钱穆先生全集',
            '中国历代政治得失',
            '宋代消费史',
            '你不知道的台湾',
            '人间花木',
            '周恩来家世',
            '快刀文章可下酒',
            '中国食谱',
            '质疑克里希穆提'
        ],

        //第十一月份-滞销榜-10本
        UnmarketableList: [
            '若爱重生.周旋1946',
            '时拾史事.第1辑',
            '恐怖三人组',
            '中华警事史话',
            '熊出没',
            '曾国藩与晚清大变局',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '让心入静'
        ],
        //第十一月份-销售数据
        SalesData: 51,
        //第十一月份-库存数据
        InventoryData: 201,
        //第十月份=出版词云
        ClouImg: '11.png',
        ClouRanking: 7
    },




    {
        //第十二月份-畅销榜-10本
        BestSellingList: [
            '困守与反攻：冷战中的台湾选择',
            '钱穆先生全集-国史大纲',
            '周恩来家世',
            '中国历代政治得失',
            '1927-1950年中英两国关于西藏问题的较量与争论',
            '人间花木',
            '赫逊河畔谈中国历史',
            '八十忆双亲',
            '蒐书记',
            '质疑克里希穆提'
        ],

        //第十二月份-滞销榜-10本
        UnmarketableList: [
            '中国文化精神',
            '中华文化十二讲',
            '诸侯争盟记:左传',
            '中华警事史话',
            '东北大学往事:1931-1949',
            '曾国藩与晚清大变局',
            '近代中国的变局',
            '似笑非笑',
            '简明台湾史',
            '寂寞和温暖.汪曾祺小说选集'
        ],
        //第十二月份-销售数据
        SalesData: 67,
        //第十二月份-库存数据
        InventoryData: 314,
        //第十二月份=出版词云
        ClouImg: '12.png',
        ClouRanking: 6
    }
]

/** 

 * [分类销售占比按月数据（2017）]

 * @param {[Array]} name [分类名称]

 * @param {[Array]} value [占比]

*/

var saleBL = [

    [

        {

            value: 29,

            name: '社会',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '管理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 15,

            name: '经济',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 9,

            name: '综合',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 8,

            name: '能源',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 17,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 27,

            name: '交通',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '传记',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 15,

            name: '体育',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 11,

            name: '养生',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 7,

            name: '农林',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 26,

            name: '历史',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '哲学',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 14,

            name: '地理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 11,

            name: '少儿',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 8,

            name: '工业',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 19,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 26,

            name: '自然',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '艺术',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 13,

            name: '计算机',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 11,

            name: '语言',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 8,

            name: '交通',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 19,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 27,

            name: '管理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '经济',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 15,

            name: '综合',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 11,

            name: '能源',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 7,

            name: '自然',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 31,

            name: '教辅',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 21,

            name: '数理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 13,

            name: '自然',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 9,

            name: '艺术',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 7,

            name: '计算机',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 19,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 26,

            name: '历史',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 23,

            name: '哲学',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 13,

            name: '地理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 11,

            name: '少儿',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 7,

            name: '农林',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 25,

            name: '教辅',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 24,

            name: '数理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 14,

            name: '文化',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 13,

            name: '文学',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 6,

            name: '旅游',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 31,

            name: '教辅',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 21,

            name: '历史',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 13,

            name: '地理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 9,

            name: '哲学',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 8,

            name: '少儿',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 27,

            name: '管理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '经济',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 15,

            name: '综合',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 11,

            name: '能源',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 7,

            name: '自然',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 25,

            name: '自然',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 24,

            name: '艺术',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 14,

            name: '计算机',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 13,

            name: '语言',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 6,

            name: '交通',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 18,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ],
    [

        {

            value: 29,

            name: '社会',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 22,

            name: '管理',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 15,

            name: '经济',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 9,

            name: '综合',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 8,

            name: '能源',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        },

        {

            value: 17,

            name: '其他',

            label: {

                normal: {

                    formatter: '{c}%\n\n{b}'

                }

            }

        }

    ]

]

var timerOne = null
var timerTwo = null
function fanzhuanOne(parent, child, num) {
    clearTimeout(timerOne)
    var pressNum = -1;

    var rankbUl = $(parent);
    var rankbLen = rankbUl.children().length;
    timerOne  = setInterval(function () {
        pressNum++;
        if (pressNum >= num) {
            clearTimeout(timerOne)
            // $(child).hide();
        }
        if (pressNum > (rankbLen - 1)) {
            pressNum = -1;
            // $(child).show();
        }
        var curLi = rankbUl.children().eq(pressNum);
        rankbUl.children().removeClass('active');
        rankbUl.children().eq(pressNum).addClass('active')
        curLi.children('.book-rank').addClass('pressRotate');
        curLi.siblings().children('.book-rank').removeClass('pressRotate');
    }, 2200);
}
function fanzhuanTwo(parent, child, num) {
    clearTimeout(timerTwo)
    var pressNum = -1;

    var rankbUl = $(parent);
    var rankbLen = rankbUl.children().length;
    timerTwo = setInterval(function () {
        pressNum++;
        if (pressNum >= num) {
            clearTimeout(timerTwo)
            // $(child).hide();
        }
        if (pressNum > (rankbLen-1)) {
            pressNum = -1;
            // $(child).show();
        }
        rankbUl.children().removeClass('active');
        rankbUl.children().eq(pressNum).addClass('active');
        var curLi = rankbUl.children().eq(pressNum);
        curLi.children('.book-rank').addClass('pressRotate');
        curLi.siblings().children('.book-rank').removeClass('pressRotate');
    }, 2200);
}
render(0)

function render(index){
    var myData = thirdData[index]
 
    // 畅销榜
    var BestSellingList = ''
    for (let i = 0, len = myData.BestSellingList.length; i < len; i++) {
        var html = ''
        html = '<li>'
            +'<div class="book-rank clearfix" >'
            +' <span class="ranking fl">' + (i + 1) + '</span>'
            + '<span class="short fl">' + myData.BestSellingList[i] + '</span>'      
            +'</div >'
            +'</li >'
        BestSellingList = BestSellingList + html
        
    }

    $('.main .hot .con').html(BestSellingList)

    fanzhuanOne('.aside-left .hot ul', '.aside-left .hot li:lt(10)', 10)


    // 滞销榜
    var UnmarketableList = ''
    for (let i = 0, len = myData.UnmarketableList.length; i < len; i++) {
        var html = ''
        html = '<li>'
            + '<div class="book-rank clearfix" >'
            + ' <span class="ranking fl">' + (i + 1) + '</span>'
            + '<span class="short fl">' + myData.UnmarketableList[i] + '</span>'
            + '</div >'
            + '</li >'
        UnmarketableList = UnmarketableList + html 
    }
    $('.main .zhixiao .con').html(UnmarketableList)
    fanzhuanTwo('.aside-left .zhixiao ul', '.aside-left .zhixoao li:lt(10)', 10)
    

    // 销售数据
    $('.book-data').text(myData.SalesData)
    // 库存数据
    $('.stock-data').text(myData.InventoryData)


    // 云词云
    $('.publish h3 span').text('全国排名：' + myData.ClouRanking)
    
    $('.publish img').remove() 
    $('.publish').append('<img src="./img/' + myData.ClouImg + '" alt="">')

}
mapChart.currentIndex = -1;

var monthIndex = 0;
var timer = null;
setVal();
function setVal() {
  clearTimeout(timer);

  timer = setInterval(function() {
    
    if (mapChart.currentIndex == -1 && monthIndex == 0) {
        // debugger
      option.series[0].data = mapData[Month[0]];
      mapChart.setOption(option);
      pieDataFn(monthIndex);
    }

    var dataLen = mapData["Jan"].length;
    // 取消之前高亮的图形
    mapChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: mapChart.currentIndex
    });
    mapChart.currentIndex = (mapChart.currentIndex + 1) % dataLen;
    //   console.log(mapChart.currentIndex)
    // 高亮当前图形
    mapChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: mapChart.currentIndex
    });


    if (mapChart.currentIndex === hasData.length - 1) {
        mapChart.currentIndex = -1;
        monthIndex++;
      if(monthIndex > 11){
        monthIndex = monthIndex%12;
      }
      option.series[0].data = mapData[Month[monthIndex]];
      
      mapChart.setOption(option);

      
    //   将月份填入
      var curTime = '2017年' + (monthIndex+1) + '月';
      $('.month-tip').text(curTime);
      render(monthIndex);
      pieDataFn(monthIndex);

    //   全国数据关联月份
    var newBData,oldBData,newVData,oldVData,newMData,oldMData,newSData,oldSData;

        newBData = allMData["book"][monthIndex];
        oldBData = monthIndex == 0? allMData["book"][11]: allMData["book"][monthIndex -1];
        
        newVData = allMData["variety"][monthIndex];
        oldVData = monthIndex == 0? allMData["variety"][11]: allMData["variety"][monthIndex -1];
        
        newMData = allMData["maYang"][monthIndex];
        oldMData = monthIndex == 0? allMData["maYang"][11]: allMData["maYang"][monthIndex -1];        

        newSData = allMData["stock"][monthIndex];
        oldSData = monthIndex == 0? allMData["stock"][11]: allMData["stock"][monthIndex -1];

    // 数据滚动效果
    var options = {
          useEasing: true, 
          useGrouping: true, 
          separator: ',', 
          decimal: '.', 
        };

        var demoB = new CountUp('book-data', oldBData, newBData, 0, 2.5, options);
        if (!demoB.error) {
          demoB.start();
        } else {
          console.error(demoB.error);
        }

        var demoV = new CountUp('varity-data', oldVData, newVData, 1, 2.5, options);
        if (!demoV.error) {
          demoV.start();
        } else {
          console.error(demoV.error);
        }

        var demoM = new CountUp('ma-data', oldMData, newMData, 0, 2.5, options);
        if (!demoM.error) {
          demoM.start();
        } else {
          console.error(demoM.error);
        }

        var demoS = new CountUp('stock-data', oldSData, newSData, 0, 2.5, options);
        if (!demoS.error) {
          demoS.start();
        } else {
          console.error(demoS.error);
        }      
      setVal();
    }
  }, 3000);
}


//   var pie2 = echarts.init(document.getElementById('pie2'),'macarons');








/** 

 * [分类销售占比按月数据（2017）]

 * @param {[Array]} name [分类名称]

 * @param {[Array]} value [占比]

*/

var timerN = null
  
    var pie1 = echarts.init(document.getElementById('pie1'), 'macarons');
    //   var pie2 = echarts.init(document.getElementById('pie2'),'macarons');

    var rich = {
        big: {
            fontSize: 24,
            lineHeight: 40,
            fontFamily: 'Rubik'
        },
        small: {
            fontSize: 16
        },

    }
    var pieOption1 = {
        legend: {
            x: 'left',
            data:[],
            top: '80%',
            left: 'center',
            itemWidth: 15,
            itemHeight: 8,
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
                name: '分类占比',
                type: 'pie',
                radius: ['60%', '70%'],
                hoverOffset: 5,
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                color: ['#0239a7', '#fff', '#24feb4', '#23539b', '#3c9de4'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    }
                    ,
                    emphasis: {
                        show: true,
                        color: '#fff',
                        formatter: function (params, ticket, callback) {

                            return '{big|' + params.value + '}{small|%}\n{small|' + params.name + '}';
                        },
                        // '{a|这段文本采用样式a}'
                        rich: rich
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: saleBL[0]
            }
        ]
    };

    pie1.setOption(pieOption1);



    pie1.currentIndex = -1;


    var pieDataFn = function(monthIndex){
        var curD1 = saleBL[monthIndex];
        console.log(curD1)
        var len = curD1.length;
    
        for(var i=0; i< len; i++ ){
          pieOption1["legend"]["data"].push(curD1[i]["name"]);
        }
        console.log(pieOption1["legend"]["data"])
        pieOption1.series[0].data = curD1;
        pie1.setOption(pieOption1);
    }

    pieDataFn(0)

   
    // timerN = setInterval(function () {
    //     clearTimeout(timerN)
       
    //     var dataLen = 6;
    //     // 取消之前高亮的图形
    //     pie1.dispatchAction({
    //         type: 'downplay',
    //         seriesIndex: 0,
    //         dataIndex: pie1.currentIndex
    //     });
    //     pie1.currentIndex = (pie1.currentIndex + 1) % dataLen;
    //     // 高亮当前图形
    //     pie1.dispatchAction({
    //         type: 'highlight',
    //         seriesIndex: 0,
    //         dataIndex: pie1.currentIndex
    //     });
    // }, 2500);


// setInterval(function () {
//     var dataLen = pieOption1.series[0].data.length;
//     // 取消之前高亮的图形
//     pie1.dispatchAction({
//         type: 'downplay',
//         seriesIndex: 0,
//         dataIndex: pie1.currentIndex
//     });
//     pie1.currentIndex = (pie1.currentIndex + 1) % dataLen;
//     // 高亮当前图形
//     pie1.dispatchAction({
//         type: 'highlight',
//         seriesIndex: 0,
//         dataIndex: pie1.currentIndex
//     });
// }, 1000);

var chinaEchartsObj = echarts.getMap('china');
var geoJSONChina = chinaEchartsObj.geoJson;
var allDefProvince = geoJSONChina.features;

for(var i = 0, len = allDefProvince.length; i < len; i++){
    var sglProvinceProperties = allDefProvince[i].properties;
    var sglProvinceName = sglProvinceProperties.name;
    switch(sglProvinceName){
         case '湖北':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;
         case '湖南':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '江西':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '甘肃':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '新疆':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '上海':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '江苏':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '云南':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '广东':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '浙江':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '河北':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '山东':            
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '河南':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '四川':
             sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;        
         case '内蒙古':
  sglProvinceProperties.cp[0] = 128.642464;
             sglProvinceProperties.cp[1] = 34.756967;
             break;
     }
 }
 