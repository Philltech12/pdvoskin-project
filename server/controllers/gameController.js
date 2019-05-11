var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

exports.currentData = gameData.getData();

exports.getGameData = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.updateGameData = function(req, res) {
    exports.currentData.currentTerrain = terrain.getTerrain();
    console.log(exports.currentData.currentTerrain);
    exports.currentData.currentWeather = weather.getRandomWeather();

    exports.currentData.daysOnTrail++;
    exports.currentData.milesTraveled += Math.floor(exports.currentData.currentPace.miles * exports.currentData.currentWeather.miles);
    exports.currentData.groupHealth += exports.currentData.currentWeather.health;
    exports.currentData.groupHealth += exports.currentData.currentPace.health;
    if(exports.currentData.daysOnTrail >= 45) {
        exports.currentData.messages = "I diagnose you with ded.";
        exports.currentData.groupHealth = 0;
        exports.currentData.playerStatus = [true, true, true, true, true];
    }
    if(exports.currentData.milesTraveled >= 500) {
        exports.currentData.messages = "CONGRATULATIONS you didn't die!";
    }
    if(exports.currentData.groupHealth > 100) {
        exports.currentData.groupHealth = 100;
    }

    var ranDeath = Math.floor(Math.random() * 100) + 1;
    if(exports.currentData.groupHealth <= 0) {
        exports.currentData.messages = "Everyone died."
        exports.currentData.playerStatus = [true, true, true, true, true];
    } else if(exports.currentData.groupHealth < 20) {
        if(ranDeath <= 10) {
            var i = 4;
            while(exports.currentData.playerStatus[i] == true) {
                i--;
            }
            exports.currentData.playerStatus[i] = true;
            exports.currentData.messages = "You have lost a member to death.";
        }
    } else if(exports.currentData.groupHealth < 50) {
        if(ranDeath <= 3) {
            var i = 4;
            while(exports.currentData.playerStatus[i] == true) {
                i--;
            }
            exports.currentData.playerStatus[i] = true;
            exports.currentData.messages = "You have lost a memeber to death.";
        }
    } else {
        exports.currentData.messages = "On the trail again...";
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.getPace = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.setPace = function(req, res) {
    console.log("Set pace to: " + pace.getAllPaces()[req.params.id].name);
    exports.currentData.currentPace = pace.getAllPaces()[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.resetGameData = function(req, res) {
    exports.currentData = gameData.getData();
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

/*
var gameData = require('../models/gameData');
var pace = require('../models/pace');
var terrain = require('../models/terrain');
var weather = require('../models/weather');

exports.currentData = gameData.getData();

exports.getGameData = function(req, res) {
  res.setHeader('Content-Type','application/json')
  res.send(exports.currentData);
}

exports.updateGameData = function(req, res) {
    exports.currentData.currentTerrain = terrain.getTerrain();
    exports.currentData.currentWeather = weather.getRandomWeather();

    exports.currentData.daysOnTrail++;
    exports.currentData.milesTraveled += Math.floor(exports.currentData.currentPace.miles * exports.currentData.currentWeather.miles);
    exports.currentData.groupHealth += exports.currentData.currentWeather.health;
    exports.currentData.groupHealth += exports.currentData.currentPace.health;
    exports.currentData.groupHealth = 100;
    if(exports.currentData.daysOnTrail >= 45) {
        exports.currentData.messages = "You have stayed on the train too long and have died!";
        exports.currentData.groupHealth = 0;
        exports.currentData.playerStatus = [true, true, true, true, true];
    }
    if(exports.currentData.milesTraveled >= 500) {
        exports.currentData.messages = "CONGRATS you have finished the trail!";
    }
    if(exports.currentData.groupHealth > 100) {
        exports.currentData.groupHealth = 100;
    }

    var ranDeath = Math.floor(Math.random() * 100) + 1;
    if(exports.currentData.groupHealth <= 0) {
        exports.currentData.messages = "Everyone in your party has died."
        exports.currentData.playerStatus = [true, true, true, true, true];
    } else if(exports.currentData.groupHealth < 20) {
        if(ranDeath <= 10) {
            var i = 4;
            while(exports.currentData.playerStatus[i] == true) {
                i--;
            }
            exports.currentData.playerStatus[i] = true;
            exports.currentData.messages = "A member of your party has died.";
        }
    } else if(exports.currentData.groupHealth < 50) {
        if(ranDeath <= 3) {
            var i = 4;
            while(exports.currentData.playerStatus[i] == true) {
                i--;
            }
            exports.currentData.playerStatus[i] = true;
            exports.currentData.messages = "A member of your party has died.";
        }
    } else {
        exports.currentData.messages = "You are now on the trail";
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData);
}

exports.getPace = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.setPace = function(req, res) {
    console.log("Set pace to: " + pace.getpaces()[req.params.id].name);
    exports.currentData.currentPace = pace.getpaces()[req.params.id];
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentData.currentPace);
}

exports.resetGameData = function(req, res) {
  exports.currentData = gameData.getData();
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentData);
}
*/
