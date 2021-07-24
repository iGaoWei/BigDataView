
var mapChart = echarts.init(document.getElementById("map"));
// 获取所有按月循环的数据
var bestSelling = dataOne().bestSelling;
var mapData = dataOne().mapD;
var pressRanking = dataOne().pressRanking;
var saleBL = dataOne().saleBL;
var stockBL = dataOne().stockBL;
var saleStockR = dataOne().saleStockR;
var allMData = dataOne().allMData;

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
var itemStyleD = [
    {   
        name: '湖南',
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
        name: '上海',
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
        name: '云南',
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
        name: '湖北',
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
        name: '江苏',
        itemStyle: {
            normal: {                       
                areaColor: '#00b6f6'
            },
            emphasis: {
                areaColor: "#00b6f6"
            }                      
        }        
    },
    {   
        name: '江西',
        itemStyle: {
            normal: {                       
                areaColor: '#01a4f1'
            },
            emphasis: {
                areaColor: "#01a4f1"
            }                      
        }        
    },
    {   
        name: '内蒙古',
        itemStyle: {
            normal: {                       
                areaColor: '#00ccf7'
            },
            emphasis: {
                areaColor: "#00ccf7"
            }                      
        }        
    },
    {   
        name: '四川',
        itemStyle: {
            normal: {                       
                areaColor: '#0069e8'
            },
            emphasis: {
                areaColor: "#0069e8"
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
                areaColor: "#00b6f6"
            }                      
        }        
    }
]
var noneData = [
    {
        name: '广东', 
        uploadcnt: 25.1,
        uploadpzs: 1.3,
        xsmy: 902,
        kcmy: 343,                    
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
        uploadcnt: 12.7,
        uploadpzs: 1.4,
        xsmy: 834,
        kcmy: 379,                    
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
        uploadcnt: 52.7,
        uploadpzs: 2.3,
        xsmy: 1034,
        kcmy: 460,                    
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
        uploadcnt: 52.7,
        uploadpzs: 1.1,
        xsmy: 824,
        kcmy: 402,                    
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
      uploadcnt: 32.7,
      uploadpzs: 1.4,
      xsmy: 1240,
      kcmy: 645,                    
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
        uploadcnt: 42.7,
        uploadpzs: 1.3,
        xsmy: 1732,
        kcmy: 734,                    
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
        uploadcnt: 32.1,
        uploadpzs: 1.4,
        xsmy: 1324,
        kcmy: 509,
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
  ] 


for(key in mapData){
    for(var i = 0; i < mapData[key].length; i++){

        if(
            mapData[key][i]["uploadcnt"].trim() == "" &&
            mapData[key][i]["uploadpzs"].trim() == "" &&
            mapData[key][i]["xsmy"].trim() == "" &&
            mapData[key][i]["kcmy"].trim() == "" 
        ){
            mapData[key][i].label = {show: false}
        }
        for(var j = 0; j < itemStyleD.length; j++){
            if(mapData[key][i]["name"] == itemStyleD[j]["name"]){
                mapData[key][i].itemStyle = itemStyleD[j]["itemStyle"];
            }
        }
    }
    mapData[key] = mapData[key].concat(noneData)
}

function formatterShow (params){
    var data = params.data;
    // console.log(data.uploadcnt)
    var numArr = [];
    var numData = [];
    var formatterStr = '';
    var paramsData =  [
        //     '{a|' + params.name + '}' + '\n',
        "上传条数：" + data.uploadcnt + '条',
        "品种数量：" + data.uploadpzs + '种',
        "销售码洋：" + data.xsmy + '万元',
        "库存码洋：" + data.kcmy + '万元'
    ]

    if(data.uploadcnt != undefined && data.uploadcnt != ''){
        numArr.push(0)
    }
    if(data.uploadpzs != undefined && data.uploadpzs != ''){
        numArr.push(1)
    }
    if(data.xsmy != undefined && data.xsmy != ''){
        numArr.push(2)
    }
    if(data.kcmy != undefined && data.kcmy != ''){
        numArr.push(3)
    }
    for(var i = 0; i < numArr.length; i++){

        numData.push(paramsData[numArr[i]])
    }
    // console.log(numData.join(""))
    if(numData.length == 1){
        formatterStr = '{a|' + params.name + '}' + '\n' + 
                       '{b|' + numData[0] + '}'
    }else if(numData.length == 2){
        formatterStr = '{a|' + params.name + '}' + '\n' + 
                       '{b|' + numData[0] + '}' + '\n' +
                       '{c|' + numData[1] + '}'
    }else if(numData.length == 3){
        formatterStr = '{a|' + params.name + '}' + '\n' + 
                       '{b|' + numData[0] + '}' + '\n' +
                       '{c|' + numData[1] + '}' + '\n' +
                       '{d|' + numData[2] + '}' + '\n'
    }else if(numData.length == 4){
        formatterStr = '{a|' + params.name + '}' + '\n' + 
                       '{b|' + numData[0] + '}' + '\n' +
                       '{c|' + numData[1] + '}' + '\n' +
                       '{d|' + numData[2] + '}' + '\n' +
                       '{e|' + numData[3] + '}' + '\n'
    }

    return formatterStr
}


// 有数据省份
var hasData = [8,9,8,8,8,6,7,7,8,8,8,7];
// 全国12个月数据

var point = 'image://img/point.png';
var curIndx = 0;

var rich = {
  a: {
      color: '#fff',
      fontSize: 18,
      align: 'left',
      padding: [0,0,64,44]
  },
  b: {
      color: '#fff',
      fontSize: 14,        
      padding: [0,0,-60,110],
      align: 'left'
  },
  c: {
      color: '#fff',
      fontSize: 14,       
      padding: [0,0,-25,110],
      align: 'left'

  },
  d: {
      color: '#fff',
      fontSize: 14,        
      padding: [0,0,-2,110],
      align: 'left'
  },
  e: {
      color: '#fff',
      fontSize: 14,       
      padding: [3,0,3,110],
      align: 'left'

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
        width: 340,
        height: 140,     
        backgroundColor: {
            image: "img/tip-bg.png"
        },
        emphasis: {               
            show: true,
            color: "#fff",    
            formatter: function(params){
                var tt = formatterShow(params)
                return tt;
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

// 渲染全国四种数据1月份
$('#book-data').text(allMData["book"][0]);
$('#varity-data').text(allMData["variety"][0]);
$('#sales-data').text(allMData["sales"][0]);
$('#stock-data').text(allMData["stock"][0]);
mapChart.currentIndex = -1;

var monthIndex = 0;
var bNum = 0;
var startN = 0;
var timer = null;
setVal();


//   畅销书排行
var ranktUl = $('.aside-left .top ul');
var bookLiLen = ranktUl.eq(0).children().length; 
var conH = $('.aside-left .top .con-wrap').height(); 
var bookNum = 0;
var timer01 = null;
var overWrapEle = $('.aside-left .top .con-wrap .over-wrap');

var booktimerFn = function(bNum){
    clearTimeout(timer01);

    timer01 = setInterval(function(){
      
        bookNum++; 
        ranktUl.eq(bNum).children().removeClass('active');
        ranktUl.eq(bNum).children().eq(bookNum).addClass('active');

        if(bookNum == (bookLiLen-1)){       
            clearInterval(timer01);
            bookNum = 0;
        }
    },3000);
        
}
// 监听过渡动画回调函数
var ListenTr = function(bNum){
    // 过渡动画回调，执行定时切换
    var e = overWrapEle[0];

    function whichTransitionEvent(){
    var t,
        el = document.createElement('surface'),
        transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        }
    
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    }
    
    var transitionEvent = whichTransitionEvent();
    transitionEvent && e.addEventListener(transitionEvent, function() {
        booktimerFn(bNum);
        e. removeEventListener(transitionEvent,arguments.callee,false);//销毁事件
                                    
    });
}
var numGoFn = function(monthIndex){
    //   将月份填入
    var curTime = '2017年' + (monthIndex+1) + '月';
    $('.month-tip').text(curTime);
    //   全国数据关联月份
    var newBData,oldBData,newVData,oldVData,newMData,oldMData,newSData,oldSData;

        newBData = allMData["book"][monthIndex];
        oldBData = monthIndex == 0? allMData["book"][11]: allMData["book"][monthIndex -1];
        
        newVData = allMData["variety"][monthIndex];
        oldVData = monthIndex == 0? allMData["variety"][11]: allMData["variety"][monthIndex -1];
        
        newMData = allMData["sales"][monthIndex];
        oldMData = monthIndex == 0? allMData["sales"][11]: allMData["sales"][monthIndex -1];        

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

    var demoV = new CountUp('varity-data', oldVData, newVData, 0, 2.5, options);
    if (!demoV.error) {
      demoV.start();
    } else {
      console.error(demoV.error);
    }

    var demoM = new CountUp('sales-data', oldMData, newMData, 0, 2.5, options);
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
}

//   出版社排行
var pressNum = 0;
var timerNum = null;

var presstimerFn = function(monthIndex){

    clearTimeout(timerNum);

    // 先灌数据
    $('.aside-left .bottom .con li').each(function(){
        var cur = $(this).index();
        var pressTxt = $(this).find('.short').text(pressRanking[Month[monthIndex]][cur]["pressName"]);
        var hotTxt = $(this).find('.hot').text(pressRanking[Month[monthIndex]][cur]["hotVal"]);
        
    });
    var rankbUl = $('.aside-left .bottom ul');
    var rankbLen = rankbUl.children().length;
    timerNum = setInterval(function(){
        
        var curLi = rankbUl.children().eq(pressNum);
        curLi.children('.book-rank').addClass('pressRotate');
        curLi.siblings().children('.book-rank').removeClass('pressRotate');
        pressNum++;

        if(pressNum > rankbLen){
          pressNum = 0;
          clearTimeout(timerNum);
        }
      },1000);
}
presstimerFn(0);

// 销售码洋排行

var html = '';

var stockRankFn = function(monthIndex){
    var len = saleStockR[Month[monthIndex]].length;
    $('.aside-right .area-rank ul').html('');
    html = '';
    for(var i = 0; i < len; i++){
        var pro = saleStockR[Month[monthIndex]][i]["name"];
        var val = saleStockR[Month[monthIndex]][i]["value"];

        html += '<li>' + 
                    '<span class="num">' + (i+1) + '</span>' +     
                    '<span class="city-name">' + pro + '</span>' +
                    '<span class="bar">' +
                        '<b class="bar-in" style="width: ' + (val / 12) + '%"></b>' +
                    '</span>' +
                    '<span class="rank-value">' + val + '万' + '</span>' +
                '</li>'

    }
    $('.aside-right .area-rank ul').html(html)
}  

stockRankFn(0);

//   // 饼图
var pie1 = echarts.init(document.getElementById('pie1'),'macarons');
var pie2 = echarts.init(document.getElementById('pie2'),'macarons');

var pieRich = {
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
      top: '68%',
      left: 'center',
      itemWidth: 15,
      itemHeight: 8,
      textStyle: {
          color: '#fff'
      }
  },
  series: [
      {
          name:'销售占比',
          type:'pie',
          radius: ['55%', '65%'],
          hoverOffset: 5,
          center: ['50%','35%'],
          avoidLabelOverlap: false,
          color: ['#0239a7', '#fff', '#00bbec', '#23539b', '#24feb4','#1397ff'],
          label: {
              normal: {
                  show: false,
                  position: 'center'
              }
              ,
              emphasis: {
                  show: true,  
                  color: '#fff',                
                  formatter: function(params, ticket, callback) {
                    // console.log
                      return '{big|' + params.value + '}{small|%}\n{small|' + params.name + '}';
                  },
                  // '{a|这段文本采用样式a}'
                  rich: pieRich
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[]
      }
  ]
};
var pieOption2 = {
  legend: {
      x: 'left',
      data:[],
      top: '68%',
      left: 'center',
      itemWidth: 15,
      itemHeight: 8,
      textStyle: {
          color: '#fff'
      }
  },
  series: [
      {
          name:'库存占比',
          type:'pie',
          radius: ['55%', '65%'],
          hoverOffset: 5,
          avoidLabelOverlap: false,
          color: ['#0239a7', '#fff', '#00bbec', '#23539b', '#24feb4','#1397ff'],
          center: ['50%','35%'],
          label: {
              normal: {
                  show: false,
                  position: 'center'
              }
              ,
              emphasis: {
                  show: true,  
                  color: '#fff',                
                  formatter: function(params, ticket, callback) {

                      return '{big|' + params.value + '}{small|%}\n{small|' + params.name + '}';
                  },
                  // '{a|这段文本采用样式a}'
                  rich: pieRich
              }
          },
          labelLine: {
              normal: {
                  show: false
              }
          },
          data:[]
      }
  ]
};
pie1.currentIndex = -1;
pie1.setOption(pieOption1);
setInterval(function () {
    var dataLen = pieOption1.series[0].data.length;
    // 取消之前高亮的图形
    pie1.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: pie1.currentIndex
    });
    pie1.currentIndex = (pie1.currentIndex + 1) % dataLen;
    // 高亮当前图形
    pie1.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: pie1.currentIndex
    });
}, 1000);
pie2.currentIndex = -1;
pie2.setOption(pieOption2);
setInterval(function () {
    var dataLen = pieOption2.series[0].data.length;
    // 取消之前高亮的图形
    pie2.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: pie2.currentIndex
    });
    pie2.currentIndex = (pie2.currentIndex + 1) % dataLen;
    // 高亮当前图形
    pie2.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: pie2.currentIndex
    });
}, 1000);

var pieDataFn = function(monthIndex){
    var curD1 = saleBL[Month[monthIndex]];
    var curD2 = stockBL[Month[monthIndex]];
    var len = curD1.length;

    for(var i=0; i< len; i++ ){
      pieOption1["legend"]["data"].push(curD1[i]["name"]);
      pieOption2["legend"]["data"].push(curD2[i]["name"]);   
    }
    pieOption1.series[0].data = curD1;
    pieOption2.series[0].data = curD2;
    pie1.setOption(pieOption1);
    pie2.setOption(pieOption2);
}
pieDataFn(0);
function setVal() {
  clearTimeout(timer);

  timer = setInterval(function() {
    
    if (mapChart.currentIndex == -1 && monthIndex == 0) {
        
      option.series[0].data = mapData[Month[0]];


      mapChart.setOption(option);0
      pieDataFn(monthIndex);

      presstimerFn(monthIndex);
      stockRankFn(monthIndex);

      if(startN == 0){
          booktimerFn(bNum);
      }
      startN++;
    }

    var dataLen = mapData["Jan"].length;
    // 取消之前高亮的图形
    mapChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: mapChart.currentIndex
    });
    mapChart.currentIndex = (mapChart.currentIndex + 1) % dataLen;
    // 高亮当前图形
    mapChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: mapChart.currentIndex
    });


    if (mapChart.currentIndex === hasData[monthIndex]) {
        mapChart.currentIndex = -1;
        monthIndex++;
        
        if(monthIndex > 11){
            monthIndex = monthIndex%12;
        }

        option.series[0].data = mapData[Month[monthIndex]];
      
        mapChart.setOption(option);

        // transition过渡动画
        bNum++;
        overWrapEle.addClass('go');
        // debugger
        if(bNum > 12){
            bNum = 1;
            overWrapEle.css('top',0);
            overWrapEle.removeClass('go');

            for(var i = 0; i < ranktUl.length; i++){
        
                ranktUl.eq(i).children().removeClass('active');                
                ranktUl.eq(i).children().eq(0).addClass('active');

            }
        }
       
        if(bNum == 1){
            overWrapEle.removeClass('top'+ 12);
        }else{
            overWrapEle.removeClass('top'+ (bNum -1 ));        
        }
        overWrapEle.addClass('top'+ bNum); 
        ListenTr(bNum);        
        pieDataFn(monthIndex);

        presstimerFn(monthIndex);
        stockRankFn(monthIndex);
        numGoFn(monthIndex);
        
    }
    
  }, 2000);
}

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

