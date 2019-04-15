var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

exports.currentGameData = gameData.getData();

exports.getGameData = function(req, res) {
  res.setHeader('Content-Type','application/json');
  res.send(exports.currentGameData);
}

exports.nextDay = function(req, res) {
  res.setHeader('Content-Type','application/json');
  res.send(exports.currentGameData.daysOnTrail);
}
exports.resetGameData = function(req, res) {
  exports.currentGameData = gameData.getData();
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData);
}

exports.updateGameData = function(req, res) {
  res.currentGameData.currentWeather = weather.getRandomWeather();
  res.currentGameData.currentTerrain = terrain.getTerrain();

  exports.currentGameData.daysOnTrail++;
  exports.currentGameData.milesTraveled += Math.floor(exports.currentGameData.currentPace.miles * exports.currentGameData.currentWeather.miles);
  exports.currentGameData.groupHealth += exports.currentGameData.currentWeather.health;
  exports.currentGameData.groupHealth += exports.currentGameData.currentPace.health;

  if(exports.currentGameData.daysOnTrail >= 45) {
    exports.currentGameData.messages = "Looks like your journey took more time than needed and your group perished.";
    exports.currentGameData.groupHealth = 0;
    exports.currentGameData.playerStatus = [true,true,true,true,true];
  }
  if(exports.currentGameData.milesTraveled >= 500) {
    exports.currentGameData.messages = "Great job you completed the whole trip!";
  }
  if(exports.currentGameData.groupHealth > 100) {
    exports.currentGameData.groupHealth = 100;
  }

  var deathChance = Math.floor(Math.random() * 100) + 1;
  if(exports.currentGameData.groupHealth <= 0) {
    exports.currentGameData.playerStatus = [true,true,true,true,true];
    exports.currentGameData.messages = "Your whole group has perished!";
  }
  else if(exports.currentGameData.groupHealth <= 20) {
    if(deathChance <= 10) {
      var i = 4;
      while (exports.currentGameData.playerStatus[i] == true) {
        i--;
      }
      exports.currentGameData.playerStatus[i] = true;
      exports.currentGameData.messages = "A member of your group has perished!";
    }
  }
  else if(exports.currentGameData.groupHealth > 50) {
    if(deathChance <= 3) {
      var i = 4;
      while(exports.currentGameData.playerStatus[i] == true) {
        i--;
      }
      exports.currentGameData.playerStatus[i] = true;
      exports.currentGameData.messages = "A member of your group has perished!";
    }
  }
  else {
    exports.currentGameData.messages = "Your group is lives on another day"
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData);
  }

exports.getPace = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.currentPace);
}

exports.setPace = function(req, res) {
  console.log("Change pace to:" + pace.getAllPaces()[req.params.id].name);
  exports.currentGameData.currentPace = pace.getAllPaces()[req.params.id];
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.currentPace);
}
