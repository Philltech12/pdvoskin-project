var gameData = require('../models/gameData');
var profession = require('../models/profession');

exports.currentGameData = gameData.getData();

exports.setPlayerNames = function(req, res) {
  exports.currentGameData.playerNames.push(req.params.names);
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.playerNames);
}

exports.setProfession = function(req, res) {
  var work = professions.getAllProfessions()[req.params.id];
  exports.currentGameData.playerProfession = work.name;
  exports.currentGameData.playerMoney = work.money;
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.playerProfession + ", " + exports.currentGameData.playerMoney);
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

exports.startMonth = function(req, res) {
  exports.currentGameData.startMonth = months[req.params.id];
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.startMonth);
}
