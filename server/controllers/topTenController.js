/*
var topTen = require('../models/topTen');
var mysql = require('mysql');

exports.currentTopScores = [];
exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentTopScores);
}
*/
//linking controller to model files

var topTen = require('../models/topTen');

exports.currentTopScores = [];
exports.currentTopScores.push(topTen.addScore("Ford", 1970, "11/04/2018"));

exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentTopScores);
}

//This is my SQL connection

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "DbUser",
	password: "12345"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("MySQL DB Connected");
	var sql = "use otTopTen;";
	con.query(sql, function (err, resume){
	if (err) throw err;
  });
});
//SQL Exports

exports.getTopScores = function (req, res) {
	var currentTopScores = [];

	var sql = "select playerName, playerScore, dataEarned from topTen;";
	con.query(sql, function (err, rows, fields) {
		if (err) throw err;
		for(var i=0; i<rows.length; i++){
			currentTopScores[i] = topTen.addscore(rows[i].playerName, rows[i].playerScore)
		}

		res.setHeader('Content-Type', 'application/json');
		res.send(currentTopScores);
	});
}

exports.saveTopScore = function (req, res) {
	console.log("request body: " + req.body);

	var sql = "insert into topTen (playerName, playerScore, dataEarned) values"
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Result: " + result);
	});

	res.setHeader('Content-Type', 'application/json');
	res.send("saved score for: " + req.body.playerName);
}
