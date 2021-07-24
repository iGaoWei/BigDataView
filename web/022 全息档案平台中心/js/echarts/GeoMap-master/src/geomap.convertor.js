var convertor_parse = {
  "formatPoint": function(p){
    return [
      (p[0] < -168.5 ? p[0] + 360 : p[0]) + 170,
      90 - p[1]
    ];
  },
  "makePoint": function(p){
    var self = this,
      point = self.formatPoint(p),
      x = point[0],
      y = point[1];
    if(self.xmin > x) self.xmin = x;
    if(self.xmax < x) self.xmax = x;
    if(self.ymin > y) self.ymin = y;
    if(self.ymax < y) self.ymax = y;
  },
  "Point": function(coordinates){
    this.makePoint(coordinates);
  },
  "LineString": function(coordinates){
    var self = this,
      i = 0,
      len = coordinates.length;

    for( ; i < len; i++){
      self.makePoint(coordinates[i]);
    }
  },
  "Polygon": function(coordinates){
    var i = 0,
      len = coordinates.length;

    for(; i < len; i++){
      this.LineString(coordinates[i]);
    }
  },
  "MultiPoint": function(coordinates){
    var i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      this.Point(coordinates[i]);
    }
  },
  "MultiLineString": function(coordinates){
    var i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      this.LineString(coordinates[i]);
    }
  },
  "MultiPolygon": function(coordinates){
    var i = 0,
      len = coordinates.length;
    for(; i < len; i++){
      this.Polygon(coordinates[i]);
    }
  }
};

function parseSrcSize(json){
  var
    shapes = json.features,
    shapeType,
    shapeCoordinates,
    geometries,
    i, j,
    len, len2,
    val,
    shape;

  convertor_parse.xmin = 360;
  convertor_parse.xmax = 0;
  convertor_parse.ymin = 180;
  convertor_parse.ymax = 0;

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
  function pushApath(gm){
    shapeType = gm.type;
    shapeCoordinates = gm.coordinates;
    convertor_parse[shapeType](shapeCoordinates);
  }

  json.srcSize = {
    left: convertor_parse.xmin.toFixed(4) * 1,
    top: convertor_parse.ymin.toFixed(4) * 1,
    width: (convertor_parse.xmax - convertor_parse.xmin).toFixed(4) * 1,
    height: (convertor_parse.ymax - convertor_parse.ymin).toFixed(4) * 1
  };

  return json;

}


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

  if((!obj.scale || !obj.offset) && !json.srcSize){

    parseSrcSize(json);

  }

  if(!obj.offset){
    obj.offset = {
      x: json.srcSize.left,
      y: json.srcSize.top
    };
  }else if(json.srcSize){
    obj.offset.x = json.srcSize.left + obj.config.offset.x;
    obj.offset.y = json.srcSize.top + obj.config.offset.y;
  }

  if(!obj.scale){
    var temx = obj.width / json.srcSize.width,
      temy = obj.height / json.srcSize.height;
    temx > temy ? temx = temy : temy = temx;
    temx = temy * 0.73;
    obj.scale = {
      x: temx,
      y: temy
    };
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

