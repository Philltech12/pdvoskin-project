function terrain(name, image) {
  this.name = name;
  this.image = image;
}

var allTerrains = [];
allTerrains.push(new terrain("Plains", "/images/plainsTerrain.jpg"));
allTerrains.push(new terrain("Swamp", "/images/swampTerrain.jpg"));
allTerrains.push(new terrain("Tundra", "/images/tundraTerrain.jpg"));
allTerrains.push(new terrain("Desert", "/images/desertTerrain.jpg"));

// add a treasure map event for each terrain

exports.getTerrain = function() {
  var num = Math.floor(Math.random() * (4-0));
  return allTerrains[num];
}

exports.getAllTerrains = function() {
  return allTerrains;
}
