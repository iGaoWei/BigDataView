/*
 * GeoMap v0.4.8
 * https://github.com/x6doooo/GeoMap
 *
 * Copyright 2013 Dx. Yang
 * Released under the MIT license
 */

(function($, undefined){
var version = "0.4.8"

var convertor = {
  /*!Private
      让阿拉斯加地区在地图右侧显示
   */
  "formatPoint": function(p){
    return [
      (p[0] < -168.5 ? p[0] + 360 : p[0]) + 170,
      90 - p[1]
    ];
  },
  "makePoint": function(p){
    var self = this,
      point = self.formatPoint(p),
      x = (point[0] - convertor.offset.x) * convertor.scale.x,
      y = (point[1] - convertor.offset.y) * convertor.scale.y;
    return [x, y];
  },
  "Point": function(coordinates){
    coordinates = this.makePoint(coordinates);
    return coordinates.join(',');
  },
  "LineString": function(coordinates){
    var str = '',
      self = this,
      i = 0,
      len = coordinates.length,
      point;

    for( ; i < len; i++){
      point = self.makePoint(coordinates[i]);
      if(i == 0){
        str = 'M' + point.join(',');
      }else{
        str = str + 'L' + point.join(',');
      }
    }
    return str;
  },
  "Polygon": function(coordinates){
    var str = '',
      i = 0,
      len = coordinates.length;

    for(; i < len; i++){
      str = str + convertor.LineString(coordinates[i]) + 'z';
    }
    return str;
  },
  "MultiPoint": function(coordinates){
    var arr = [],
      i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      arr.push(convertor.Point(coordinates[i]));
    }
    return arr;
  },
  "MultiLineString": function(coordinates){
    var str = '',
      i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      str += convertor.LineString(coordinates[i]);
    }
    return str;
  },
  "MultiPolygon": function(coordinates){
    var str = '',
      i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      str += convertor.Polygon(coordinates[i]);
    }
    return str;
  }
};

function json2path(json, obj){
  var
    shapes = json.features,
    shapeType,
    shapeCoordinates,
    str,
    geometries,
    pathArray = [],
    i, j,
    len, len2,
    val,
    shape;

  convertor.scale = null;
  convertor.offset = null;

  if(!obj.config.offset){
    obj.offset = {
      x: json.srcSize.left,
      y: json.srcSize.top
    };
  }else{
    obj.offset.x = json.srcSize.left + obj.config.offset.x;
    obj.offset.y = json.srcSize.top + obj.config.offset.y;
  }

  if(!obj.config.scale){
    var temx = obj.width / json.srcSize.width,
      temy = obj.height / json.srcSize.height;
    temx > temy ? temx = temy : temy = temx;
    temx = temy * 0.73;
    obj.scale = {
      x: temx,
      y: temy
    };
  }else{
    obj.scale = obj.offset.scale;
  }

  convertor.scale = obj.scale;
  convertor.offset = obj.offset;

  for(i = 0, len = shapes.length; i < len; i++){
    shape = shapes[i];
    if(shape.type == 'Feature'){
      pushApath(shape.geometry, shape);
    }else if(shape.type = 'GeometryCollection'){
      geometries = shape.geometries;
      for(j = 0, len2 = geometries.length; j < len2; j++){
        val = geometries[j];
        pushApath(val, val);
      }
    }
  }

  function pushApath(gm, shape){
    shapeType = gm.type;
    shapeCoordinates = gm.coordinates;
    str = convertor[shapeType](shapeCoordinates);
    pathArray.push({
      type: shapeType,
      path: str,
      properties: shape.properties,
      id: shape.id
    });
  }
  return pathArray;
}


var GeoMap = function(cfg){
  var self = this,
    defaultCfg = {
      container: 'body',
      offset: null,
      scale: null,
      mapStyle: {
        'fill': '#fff',
        'stroke': '#999',
        'stroke-width': 0.7
      },
      background:'#fff',
      sideSize: 4
    };

  $.extend(true, defaultCfg, cfg);

  self.container = $(defaultCfg.container);

  self.offset = self.defaultCfg.offset;
  self.scale = self.defaultCfg.scale;

  if(self.container.length == 0){
    throw new Error('map container is not defined!');
  }

  self.width = defaultCfg.width || self.container.width();
  self.height = defaultCfg.height || self.container.height();
  self.canvas = new Raphael(self.container.get(0), self.width, self.height);
  self.shapes = self.canvas.set();
  self.config = defaultCfg;
  self.paths = null;
};

GeoMap.prototype = {
  clear: function(){
    this.offset = null;
    this.scale = null;
    this.shapes.remove();
  },
  load: function(json){
    this.paths = json2path(json, this);
  },
  render: function(){
    var self = this,
      shapes = self.shapes,
      paths = self.paths,
      canvas = self.canvas,
      config = self.config,
      style = config.mapStyle,
      aPath = null, i, len, currentPath;

    for(i = 0, len = paths.length; i < len; i++){
      currentPath = paths[i];
      if(currentPath.type == 'point' || currentPath.type == 'MultiPoint'){
        //TODO
      }else{
        aPath = canvas.path(currentPath.path).data({'properties': currentPath.properties, 'id': currentPath.id}).attr(style);
      }
      shapes.push(aPath);
    }

  },
  /*!
      将平面上的一个点的坐标，转换成实际经纬度坐标
   */
  getGeoPosition: function(p){
    var self = this,
      x = p[0],
      y = p[1];

    x = x / self.scale.x + self.offset.x - 170;
    x = x > 180 ? x - 360 : x;
    y = 90 - (y / self.scale.y + self.offset.y);

    return [x, y];
  },
  geo2pos: function(p){
    var self = this;
    convertor.offset = self.offset;
    convertor.scale = self.scale;
    p = convertor.makePoint([p.x, p.y]);
    return p;
  },
  setPoint: function(p){
    // 点的默认样式
    var	self = this,
      a = {
        "x": 0,
        "y": 0,
        "r": 1,
        "opacity": 0.5,
        "fill": "#238CC3",
        "stroke": "#238CC3",
        "stroke-width": 0,
        "stroke-linejoin": "round"
      };
    p = self.geo2pos(p);
    p = {x:p[0],y:p[1]};
    $.extend(true, a, p);
    return self.canvas.circle(p.x, p.y, a.r).attr(a);
  }
};

//TODO: heat map

GeoMap.version = version;
this.GeoMap = GeoMap;
})(jQuery);