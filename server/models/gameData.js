var pace = require('./pace');
var terrain = require('./terrain');
var weather = require('./weather');

function gameData(names, status, profession, money, month, traveled, myhealth, mypace, days, myweather, myterrain, message) {
  //this.playerNames = [];
  this.playerNames = ["", "", "", "", ""];
  this.playerStatus = [false, false, false, false, false];
  this.playerProfession = "";
  this.playerMoney = 0;
  this.startMonth = "" ;
  this.milesTraveled = 0;
  this.groupHealth = 100;
  this.daysOnTrail = 0;
  this.currentPace = pace.getAllPaces()[0];
  this.currentWeather = weather.getRandomWeather();
  this.currentTerrain = terrain.getTerrain();
  this.messages = "Your journey begins";
}

exports.getData = function() {
  var data = new gameData();
  return data;
}
