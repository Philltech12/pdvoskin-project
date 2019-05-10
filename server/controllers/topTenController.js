var topTen = require('../models/topTen');
var mysql = require('mysql');

exports.currentTopScores = [];
/*
exports.currentTopScores.push(topTen.addScore("Phill", 99999, "01/22/2019"));
exports.currentTopScores.push(topTen.addScore("Dale", 8975, "01/12/2019"));
exports.currentTopScores.push(topTen.addScore("Jake", 8541, "03/01/2019"));
exports.currentTopScores.push(topTen.addScore("Bob", 7352, "03/05/2019"));
exports.currentTopScores.push(topTen.addScore("Bill", 7278, "01/01/2019"));
exports.currentTopScores.push(topTen.addScore("Samantha", 6787, "03/07/2019"));
exports.currentTopScores.push(topTen.addScore("Sarah", 6335, "02/27/2019"));
exports.currentTopScores.push(topTen.addScore("Brian", 6154, "03/08/2019"));
exports.currentTopScores.push(topTen.addScore("Jennifer", 5322, "02/27/2019"));
exports.currentTopScores.push(topTen.addScore("Jill", 2656, "03/03/2019"));
*/
exports.getCurrentScores = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.currentTopScores);
}
