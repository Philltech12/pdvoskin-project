var gameData = require('../models/gameData');
var profession = require('../models/profession');
var gameController = require('../controllers/gameController');

exports.currentGameData = gameController.getData();

exports.savePlayerName = function(req, res) {
  exports.currentGameData.playerNames.push(req.params.names);
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.playerNames);
}

exports.saveProfession = function(req, res) {
  var work = professions.getAllProfessions()[req.params.id];
  console.log(picked)
  exports.currentGameData.playerProfession = work.name;
  exports.currentGameData.playerMoney = work.money;
  res.setHeader('Content-Type', 'application/json');
  console.log(exports.currentGameData);
  res.send(exports.currentGameData.playerProfession + ", " + exports.currentGameData.playerMoney);
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

exports.saveStartMonth = function(req, res) {
  exports.currentGameData.startMonth = months[req.params.id];
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.startMonth);
}

exports.setupScreens = []

var screen1 = "<p>Choose your Profession</p>"
  "<ol id=\"professionsQuestions\">"
    + "<li id=\"bankerOption\" >Be a banker from Boston</li>"
    + "<li id=\"carpenterChoice\" >Be a carpenter from Ohio</li>"
    + "<li id=\"farmerChoice\" >Be a farmer from Illinois</li>"
    + "<li id=\"differencesChoice\" >Find out the differences</li>"
    + "</ol>"
    + "<p id=\"selectedOption\" >Which would you like to choose?</p>"
    + "<form action=\"oregonTrail\" method=\"POST\">"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen2 = "<p>Enter your wagon leader's name</p>"
    + "<form action=\"oregonTrail.js\" method=\"POST\">"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen3 = "<p>Enter the rest of your wagon members' names</p>"
    + "<form action=\"oregonTrail.js\" method=\"POST\">"
    + "<input type = \"text\" id = \"member1\"><br />"
    + "<input type = \"text\" id = \"member2\"><br />"
    + "<input type = \"text\" id = \"member3\"><br />"
    + "<input type = \"text\" id = \"member4\"><br />"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen4 = "<p>screen4</p>"

exports.setupScreens.push(screen1);
exports.setupScreens.push(screen2);
exports.setupScreens.push(screen3);
exports.setupScreens.push(screen4);

exports.getSetupScreen = function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(exports.setupScreens[req.paramd.id]);
}
