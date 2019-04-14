var gameData = require('../models/gameData');
var profession = require('../models/profession');
var gameController = require('../controllers/gameController');

exports.currentGameData = gameData.getData();

exports.getAllPlayerNames = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.playerNames);
}

exports.savePlayerName = function(req, res) {
  exports.currentGameData.playerNames.push(req.params.names);
  res.setHeader('Content-Type', 'application/json');
  res.send(exports.currentGameData.playerNames);
}

exports.saveProfession = function(req, res) {
  var work = professions.getAllProfessions()[req.params.id];
  console.log(chosen)
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
    + "<form>"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen2 = "<p>Enter your wagon leader's name</p>"
    + "<form>"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen3 = "<p>Enter the rest of your wagon members' names</p>"
    + "<form>"
    + "<input type = \"text\" id = \"member1\"><br />"
    + "<input type = \"text\" id = \"member2\"><br />"
    + "<input type = \"text\" id = \"member3\"><br />"
    + "<input type = \"text\" id = \"member4\"><br />"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen4 = "<p>Select your start month</p>"
    + "<ol id=\"months\">"
    + "<li id=\"march\">March</li>"
    + "<li id=\"april\">April</li>"
    + "<li id=\"may\">May</li>"
    + "<li id=\"june\">June</li>"
    + "</ol>"
    + "<form>"
    + "<input type = \"text\" id = \"selection\">"
    + "<input type = \"button\" id = \"submit\" value = \"Submit\" />"
    + "</form>";

var screen5 = "<p>Congratulations! You're ready to travel the trail!</p>"
    + "<p>Your selections:</p>"
    + "<br/ >"
    + "<p>Profession: " + exports.currentGameData.playerProfession + "</p><br />"
    + "<p>Starting money: " + exports.currentGameData.playerMoney + "</p><br />"
    + "<p>Caravan leader: " + exports.currentGameData.playerNames[0] + "</p><br />"
    + "<p>Member 1: " + exports.currentGameData.playerNames[1] + "</p><br />"
    + "<p>Member 2: " + exports.currentGameData.playerNames[2] + "</p><br />"
    + "<p>Member 3: " + exports.currentGameData.playerNames[3] + "</p><br />"
    + "<p>Member 4: " + exports.currentGameData.playerNames[4] + "</p><br />"
    + "<p>Start month: " + exports.currentGameData.startMonth + "</p><br />"


exports.setupScreens.push(screen1);
exports.setupScreens.push(screen2);
exports.setupScreens.push(screen3);
exports.setupScreens.push(screen4);

exports.getSetupScreen = function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(exports.setupScreens[req.paramd.id]);
}
