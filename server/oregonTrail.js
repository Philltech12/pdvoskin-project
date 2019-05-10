
const express = require('express')
const app = express()
app.use(express.static('client/public'))
const port = 1337

var bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}));

var topTen = require('./controllers/topTenController');
var gameData = require('./controllers/gameController');
var setup = require('./controllers/setupController');

app.route('/api/topTen')
	.get(topTen.getCurrentScores);

//app.route('/api/topTen')
//	.post(topTen.saveTopScore);

app.route('/api/getPace/pace')
		.get(gameData.getPace);

app.route('/api/setPace/:id')
	.post(gameData.setPace);

app.route('/api/data')
	.get(gameData.getGameData);

app.route('/api/update')
	.get(gameData.updateGameData);

app.route('/api/reset')
	.get(gameData.resetGameData)
/*
app.route('/api/nextDay')
	.get(gameData.nexDay)
*/

//app.route('/api/setup/screen')
	//.get(setup.getSetupScreen);

//app.route('api/setup/player')
//	.get(setup.getAllPlayerNames);

app.route('/api/setup/:id')
	.get(setup.getSetupScreen);

app.route('/api/setProfession/:id')
	.post(setup.setProfession);
	/*
	app.route('/api/getPlayerNames/player')
		.get(setup.setPlayerNames);
	*/
app.route('/api/setPlayerNames/:names')
	.post(setup.setPlayerNames);
/*
	app.route('/api/getStartMonth/month')
		.get(setup.setStartMonth);
*/
app.route('/api/setStartMonth/:id')
	.post(setup.setStartMonth);

/*
app.route('/api/getProfession/profession')
	.get(gameData.gameData.playerProfession);
*/

app.get('/plains', function(req, res) {
	res.sendFile('plainsTerrain.jpg', {root: 'client/public/images'})
})

app.get('/swamp', function(req, res) {
	res.sendFile('swampTerrain.jpg', {root: 'client/public/images'})
})

app.get('/tundra', function(req, res) {
	res.sendFile('tundraTerrain.jpg', {root: 'client/public/images'})
})

app.get('/desert', function(req, res) {
	res.sendFile('desertTerrain.jpg', {root: 'client/public/images'})
})

app.get('/', function (req, res) {
res.sendFile('index.html', {root: './client/views' })
})

app.get('/mainmenu', function (req, res) {
res.sendFile('mainmenu.html', {root: './client/views' })
})

app.get('/setup', function (req, res) {
res.sendFile('setup.html', {root: './client/views' })
})

app.get('/topten', function (req, res) {
res.sendFile('topten.html', {root: './client/views' })
})

app.get('/trail', function (req, res) {
res.sendFile('trail.html', {root: './client/views' })
})

app.listen(port, () => console.log('Example app listening on port ${port}!'))
