
document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) { //Space Key
		updateData();
	}
	if(event.keyCode == 80) { //P Key
		changePace();
	}
})

function loadData() {
	fetch('/api/data').then(function(res) {
		res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			displayData(gameInfo);
		})
	});
}

loadData();

function updateData() {
	fetch('/api/update').then(function(res) {
		return res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			displayData(gameInfo);
		})
	}).then(function() {
		return deathCheck(gameInfo);
	})
}

function resetGame() {
	return fetch('/api/reset').then(function(res) {
		res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			displayData(gameInfo);
		})
	});
}

function deathCheck(info) {
	var deathBox = document.getElementById('deathBox');
	if(info.groupHealth <= 0 || info.daysOnTrail >= 45) {
		deathBox.style.visibility = "visible";
		document.addEventListener("keydown", function(e) {
			if(e.keyCode == 49) {//1 Key
				resetGame();
				deathBox.style.visibility = "hidden";
			}
			else if(e.keyCode == 50) {//2 Key
				resetGame().then(function() {
					window.location = "mainmenu"
				})
			}
		})
	} else {
		winCheck(info);
	}
}

function winCheck(info) {
	var winBox = document.getElementById('winBox');
	if(info.milesTraveled >= 500) {
		winBox.style.visibility = "visible";
		document.addEventListener("keydown", function(e) {
			if(e.keyCode == 13) { //Enter Key
				resetGame().then(function() {
					window.location = "mainmenu";
				})
			}
		})
	}
}

function changePace() {
	var paceName = prompt("Pick your pace: Steady, Strenuous, Grueling, Resting");
	if(!(paceName == "Steady" || paceName == "Strenuous" || paceName == "Grueling" || paceName == "Resting")) {
		alert("Incorrect input.");
	} else {
		if(paceName == "Steady") {
			paceId = 0;
		} else if(paceName == "Strenuous") {
			paceId = 1;
		} else if(paceName == "Grueling") {
			paceId = 2;
		} else if(paceName == "Resting") {
			paceId = 3;
		}
		fetch('/api/setPace/'+paceId, {
			method: 'post',
			headers: {'Content-Type': 'application/json, charset=UTF-8'},
			body: '{"data": "' + paceId + '"}'
		}).then(function(res) {
			if(res.status !== 200)
			 console.log('problem with ajax call! ' + res.status + " msg: " + res.value);
			return;
		});
		console.log("pace " + paceName + " saved");
		document.getElementById('pace').innerHTML = paceName;
	}
}

function displayData(info) {
	document.getElementById('days').innerHTML = info.daysOnTrail;
	document.getElementById('miles').innerHTML = info.milesTraveled;
	var percent = ((info.milesTraveled / 500) * 100);
	document.getElementById('swagon').style.left = percent + "%";
	document.getElementById('health').innerHTML = info.groupHealth;
	document.getElementById('weather').innerHTML = info.currentWeather.type;
	document.getElementById('pace').innerHTML = info.currentPace.name;
	document.getElementById('terrain').innerHTML = info.currentTerrain.name;
	console.log(info.currentTerrain);
	document.getElementById('memberStatus').innerHTML = (function() {
		let aliveCount = 0
		for (let i = 0; i < info.playerStatus.length;i++) {
			if (info.playerStatus[i] == false) {
				aliveCount++
			}
		}
		console.log(info.playerStatus + " " + aliveCount);
		return aliveCount;
	})()
	if(info.currentTerrain.name == "Plains") {
		document.getElementById('background').style.backgroundImage = 'url(/images/plainsTerrain.jpg)';
	} else if(info.currentTerrain.name == "Swamp") {
		document.getElementById('background').style.backgroundImage = 'url(/images/swampTerrain.jpg)';
	} else if(info.currentTerrain.name == "Tundra") {
		document.getElementById('background').style.backgroundImage = 'url(/images/tundraTerrain.jpg)';
	} else if(info.currentTerrain.name == "Desert") {
		document.getElementById('background').style.backgroundImage = 'url(/images/desertTerrain.jpg)';
	}
	document.getElementById('message').innerHTML = info.messages;
}

/*
document.addEventListener("keydown", function(event) {
	if(event.keyCode == 32) {
    updateData();
  }//spacebar
	if(event.keyCode == 80) {
		changePace();
	}//letter p
})

function loadData() {
	console.log('hi');
	fetch('/api/data').then(function(res) {
		console.log(res.status);
		res.json().then(function(data) {
			console.log(data);
			gameInfo = JSON.parse(data);
			console.log(gameInfo);
			displayData(gameInfo);
		})
	});
}

loadData();

function updateData() {
	fetch('/api/update').then(function(res) {
		return res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			console.log(gameInfo);
			displayData(gameInfo);
		})
	}).then(function() {
		return deathCheck(gameInfo);
	})
}

function resetGame() {
	return fetch('/api/reset').then(function(res) {
		res.text().then(function(data) {
			gameInfo = JSON.parse(data);
			displayData(gameInfo);
			console.log(gameInfo);
		})
	});
}

function deathCheck(info) {
	var deathBox = document.getElementById('deathBox');
	if(info.groupHealth <= 0 || info.daysOnTrail >= 45) {
		deathBox.style.visibility = "visible";
		document.addEventListener("keydown", function(e) {
			if(e.keyCode == 49) {
				resetGame();
				deathBox.style.visibility = "hidden";
			}
			else if(e.keyCode == 50) {
				resetGame().then(function() {
					window.location = "mainmenu"
				})
			}
		})
	} else {
		winCheck(info);
	}
}

function winCheck(info) {
	var winBox = document.getElementById('winBox');
	if(info.milesTraveled >= 500) {
		winBox.style.visibility = "visible";
		document.addEventListener("keydown", function(e) {
			if(e.keyCode == 13) {
				//ENTER
				resetGame().then(function() {
					window.location = "mainmenu";
				})
			}
		})
	}
}

function changePace() {
	var paceName = prompt("What would you like to change the pace to? (Steady, Strenuous, Grueling, Resting)");
	if(!(paceName == "Steady" || paceName == "Strenuous" || paceName == "Grueling" || paceName == "Resting")) {
		alert("Incorrect input.");
	} else {
		if(paceName == "Steady") {
			paceId = 0;
		} else if(paceName == "Strenuous") {
			paceId = 1;
		} else if(paceName == "Grueling") {
			paceId = 2;
		} else if(paceName == "Resting") {
			paceId = 3;
		}
		fetch('/api/setPace/'+ paceId, {
			method: 'post',
			headers: {'Content-Type': 'application/json, charset=UTF-8'},
			body: '{"data": "' + paceId + '"}'
		}).then(function(res) {
			if(res.status !== 200)
			 console.log('Problem with ajax call! ' + res.status + " msg: " + res.value);
			return;
		});
		console.log("pace " + paceName + " saved");
		document.getElementById('pace').innerHTML = paceName;
	}
}

function displayData(info) {
	document.getElementById('days').innerHTML = info.daysOnTrail;
	document.getElementById('miles').innerHTML = info.milesTraveled;
	document.getElementById('health').innerHTML = info.groupHealth;
	document.getElementById('weather').innerHTML = info.currentWeather.type;
	document.getElementById('pace').innerHTML = info.currentPace.name;
	document.getElementById('terrain').innerHTML = info.currentTerrain.name;
	document.getElementById('memberStatus').innerHTML = (function() {
		let aliveCount = 0
		for (let i = 0; i < info.playerStatus.length;i++) {
			if (info.playerStatus[i] == false) {
				aliveCount++
			}
		}
		console.log(info.playerStatus + " " + aliveCount);
		return aliveCount;
	})()
	if(info.currentTerrain.name == "Plains") {
		document.getElementById('background').style.backgroundImage = 'url(/images/plains.png)';
	} else if(info.currentTerrain.name == "Mountains") {
		document.getElementById('background').style.backgroundImage = 'url(/images/mountains.png)';
	} else if(info.currentTerrain.name == "Forest") {
		document.getElementById('background').style.backgroundImage = 'url(/images/forest.png)';
	} else if(info.currentTerrain.name == "Desert") {
		document.getElementById('background').style.backgroundImage = 'url(/images/desert.png)';
	}
	document.getElementById('message').innerHTML = info.messages;
}
*/
