function terrain(type, image) {
  this.type = type;
  this.image = image;
}

var allTerrains = [];
allTerrains.push(new terrain("Plains", "images/plainsTerrain"));
allTerrains.push(new terrain("Swamp", "images/swampTerrain"));
allTerrains.push(new terrain("Tundra", "tundraTerrain"));
allTerrains.push(new terrain("Desert", "desertTerrain"));

// add a treasure map event for each terrain

exports.getTerrain = function() {
  var num = Math.floor(Math.random() * terrain.length);
  return allTerrains[num];
}

exports.getAllTerrains = function() {
  return allTerrains;
}
