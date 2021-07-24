var mapChart = echarts.init(document.getElementById("map"));
var color = '#a6c84c';
var lineData = [
    [{name:'江苏'}, {name:'北京',value:80}], 
    [{name:'上海'}, {name:'北京',value:90}],
    [{name:'四川'}, {name:'北京',value:80}],
    [{name:'云南'}, {name:'北京',value:70}]
];
var geoCoordMap = {
    江苏: [119.18,32.45],   
    云南: [102.73,25.04],
    四川: [100.21,30.15],
    上海: [121.48, 31.22],
    北京: [116.46, 39.92]
  };
  
// 获取迁徙线的经纬度
var convertLineData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};
var effectScatterData = function(dataArr){
    var res = [];
    for(var i = 0; i < dataArr.length; i++){
      res.push({
        name: dataArr[i][1].name,
        value: geoCoordMap[dataArr[i][1].name].concat([dataArr[i][1].value]) 
      })   
    }
    return res;
};

var rich = {
    a: {
        fontSize: 18,
        align: 'left',
        padding: [0,0,60,40]
    },
    w: {
        fontSize: 16,  
        align: 'left',      
        padding: [0,0,-25,110]
    },
    t1: {
        fontSize: 16,  
        align: 'left',      
        padding: [0,0,-45,110]
    },
    t2: {
        fontSize: 16,
        align: 'left',        
        padding: [0,0,-5,110]
    }
}

// 省份数据
var mapData = [
    {
        name: '江苏', 
        valueC: 1250, 
        itemStyle: {
          normal: {                        
              areaColor: '#00b6f6'                            
          },
          emphasis: {
              areaColor: "#00b6f6"
          }
        },
        label: {  
            emphasis: {                  
                formatter: function(params){
                    var data = params.data;
                    return (
                        '{a|' + params.name + '}' +
                        "\n" +                  
                        '{w|' + "采购单：" + (data.valueC ? data.valueC : '') + '批次' + '}'     
                    )
                }
            },
            rich: rich
        }                   
    },
    {
        name: '四川', 
        valueC: 83,
        itemStyle: {
            normal: {                        
                areaColor: '#0069e8'
            },
            emphasis: {
                areaColor: "#0069e8"                                                  
            }       
        },
        label: {  
            emphasis: {                  
                formatter: function(params){
                    var data = params.data;
                    return (
                        '{a|' + params.name + '}' +
                        "\n" +                   
                        '{w|' + "采购单：" + (data.valueC ? data.valueC : '') + '批次' + '}'        
                    )
                }
            },
            rich: rich
        }
    },  
    {
        name: '上海', 
        valueC: 209,
        valueS: 166,
        itemStyle: {
          normal: {
              areaColor: '#27E9FD'
          },
          emphasis: {
              areaColor: "#27E9FD"
          }        
        },
        label: {  
            emphasis: {                  
                formatter: function(params){
                    var data = params.data;
                    return (
                        '{a|' + params.name + '}' +
                        "\n" +                  
                        '{t1|' + "采购单：" + (data.valueC ? data.valueC : '') + '批次' + '}' +
                        "\n" +                   
                        '{t2|' + "收货单：" + (data.valueS ? data.valueS : '') + '批次' + '}'     
                    )
                }
            },
            rich: rich
        }                    
    },
    {
        name: '云南', 
        valueC: 165, 
        itemStyle: {
          normal: {                        
              areaColor: '#20CAF8'
          },
          emphasis: {
              areaColor: "#20CAF8"
          }
        },
        label: {  
            emphasis: {                  
                formatter: function(params){
                    var data = params.data;
                    return (
                        '{a|' + params.name + '}' +
                        "\n" +                   
                        '{w|' + "采购单：" + (data.valueC ? data.valueC : '') + '批次' + '}'        
                    )
                }
            },
            rich: rich
        }                     
    },
    {
        name: '湖南', 
        valueB: 66.7,
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
        name: '湖北', 
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
        name: '江西', 
        valueB: 22.7,
        valueVariety: 1.1,
        valueM: 679,
        valueStock: 386,                    
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
        name: '内蒙古', 
        valueB: 22.3,
        valueVariety: 1.5,
        valueM: 1309,
        valueStock: 409,                    
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
          name: '浙江', 
          itemStyle: {
          normal: {                        
              areaColor: '#00b6f6'                          
          },
          emphasis: {
              areaColor: "#00b6f6",
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
                color: "#fff"
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
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color,
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertLineData(lineData)
        },
        {
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'circle',
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: color,
                    width: 1,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: convertLineData(lineData)
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color
                }
            },
            data: effectScatterData(lineData)
        } 
    ]
};


mapChart.setOption(option);


mapChart.currentIndex = -1;

var timer = null;
setVal();
function setVal() {
  clearTimeout(timer);

    timer = setInterval(function() {
    
    if (mapChart.currentIndex == -1) {
        
      option.series[0].data = mapData;
      option.series[1].data = convertLineData(lineData);
      option.series[2].data = convertLineData(lineData);
      option.series[3].data = effectScatterData(lineData);      
      mapChart.setOption(option);
    }

    
    // 取消之前高亮的图形
    mapChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: mapChart.currentIndex
    });
    
    mapChart.currentIndex = (mapChart.currentIndex + 1) % lineData.length;
        // 高亮当前图形
    mapChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: mapChart.currentIndex
    });
  }, 3000);

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
 
