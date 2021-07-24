var nRadius = Math.PI / 180;

var convertor_3d = {
  "center": [0, 0],
  "formatPoint": function(p){

    var self = this;

    var x = p[0] * nRadius;
    var y = p[1] * nRadius;

    return [x, y];
  },
  "makePoint": function(p){
    var self = this;
    return self.formatPoint(p);
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

function json2path_3d(json){
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
    str = convertor_3d[shapeType](shapeCoordinates);
    pathArray.push({
      type: shapeType,
      path: str,
      properties: shape.properties,
      id: shape.id
    });
  }
  return pathArray;
}
