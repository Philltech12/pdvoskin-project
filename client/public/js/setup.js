document.addEventListener("keypress", function(event) {
	if(event.keyCode == 32) {
		window.location = "mainmenu"
	}
})
var professionName = "";
var startingMoney = 0;
var memberNames = [];
var startingMonth = "";

var gameContainer = document.getElementById('setupContent');
getScreen(0);
var currentScreen = 0;
document.getElementById('setupContent').addEventListener('click',
	function(event) {
		var click = event.target;
		if(click.id == "bankerChoice") {
			prof = 0;
			professionName = "Banker";
			startingMoney = 2000;
			console.log("Banker, $2000");
			saveProfession(prof);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "carpenterChoice") {
			prof = 1;
			professionName = "Carpenter";
			startingMoney = 1800;
			console.log("Carpenter, $1800");
			saveProfession(prof);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "farmerChoice") {
			prof = 2;
			professionName = "Farmer";
			startingMoney = 1500;
			console.log("Farmer, $1500");
			saveProfession(prof);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "differencesChoice") {
			alert("Banker starting money: $2000, Carpenter starting money: $1800, Farmer starting money: $1500");
		}
		if(click.id == "submit" && currentScreen == 0) {
			data = document.getElementById('selection').value;
			console.log(data);
			if(data == "") {
				alert("Please enter a value");
			} else if(data > 4 || data < 1) {
				alert("Please enter a valid number");
			} else if(data == 4) {
				alert("Banker starting money: $2000, Carpenter starting money: $1800, Farmer starting money: $1500");
			} else {
				if(data == 1) {
					professionName = "Banker";
					startingMoney = 1000;
				} else if(data == 2) {
					professionName = "Carpenter";
					startingMoney = 750;
				} else if(data == 3) {
					professionName = "Farmer";
					startingMoney = 400;
				}
				data--;
				saveProfession(data);
				currentScreen++;
				getScreen(currentScreen);
			}
		}
		if(click.id == "submit" && currentScreen == 1) {
			data = document.getElementById('selection').value;
			if(data == "") {
				alert("Your wagon leader needs a name");
			} else {
				console.log(data);
				memberNames.push(data);
				saveNames(data);
				currentScreen++;
				getScreen(currentScreen);
			}
		}
		if(click.id == "submit" && currentScreen == 2) {
			data1 = document.getElementById('member1').value;
			data2 = document.getElementById('member2').value;
			data3 = document.getElementById('member3').value;
			data4 = document.getElementById('member4').value;
			if(data1 == "" || data2 == "" || data3 == "" || data4 == "") {
				alert("Please name your wagon members");
			} else {
				console.log(data1+" "+data2+" "+data3+" "+data4);
				memberNames.push(data1);
				memberNames.push(data2);
				memberNames.push(data3);
				memberNames.push(data4);
				saveNames(data1);
				saveNames(data2);
				saveNames(data3);
				saveNames(data4);
				currentScreen++;
				getScreen(currentScreen);
			}
		}
		if(click.id == "march") {
			month = 0;
			console.log("march");
			startingMonth = "March";
			saveMonth(month);
			currentScreen++;
			gameContainer.innerHTML = "<p>Congratulations! You're ready to travel the trail!</p>"
			+ "<p>Your selections:</p>"
			+ "<br/ >"
			+ "<p>Profession: " + professionName + "</p>"
			+ "<p>Starting money: " + startingMoney + "</p>"
			+ "<p>Caravan leader: " + memberNames[0] + "</p>"
			+ "<p>Member 1: " + memberNames[1] + "</p>"
			+ "<p>Member 2: " + memberNames[2] + "</p>"
			+ "<p>Member 3: " + memberNames[3] + "</p>"
			+ "<p>Member 4: " + memberNames[4] + "</p>"
			+ "<p>Start month: " + startingMonth + "</p><br />"
			+ "<input type = \"button\" id = \"begin\" value = \"Begin Journey\" />"
		}
		if(click.id == "april") {
			month = 1;
			console.log("april");
			startingMonth = "April";
			saveMonth(month);
			currentScreen++;
			gameContainer.innerHTML = "<p>Congratulations! You're ready to travel the trail!</p>"
			+ "<p>Your selections:</p>"
			+ "<br/ >"
			+ "<p>Profession: " + professionName + "</p>"
			+ "<p>Starting money: " + startingMoney + "</p>"
			+ "<p>Caravan leader: " + memberNames[0] + "</p>"
			+ "<p>Member 1: " + memberNames[1] + "</p>"
			+ "<p>Member 2: " + memberNames[2] + "</p>"
			+ "<p>Member 3: " + memberNames[3] + "</p>"
			+ "<p>Member 4: " + memberNames[4] + "</p>"
			+ "<p>Start month: " + startingMonth + "</p><br />"
			+ "<input type = \"button\" id = \"begin\" value = \"Begin Journey\" />"
		}
		if(click.id == "may") {
			month = 2;
			console.log("may");
			startingMonth = "May";
			saveMonth(month);
			currentScreen++;
			gameContainer.innerHTML = "<p>Congratulations! You're ready to travel the trail!</p>"
			+ "<p>Your selections:</p>"
			+ "<br/ >"
			+ "<p>Profession: " + professionName + "</p>"
			+ "<p>Starting money: " + startingMoney + "</p>"
			+ "<p>Caravan leader: " + memberNames[0] + "</p>"
			+ "<p>Member 1: " + memberNames[1] + "</p>"
			+ "<p>Member 2: " + memberNames[2] + "</p>"
			+ "<p>Member 3: " + memberNames[3] + "</p>"
			+ "<p>Member 4: " + memberNames[4] + "</p>"
			+ "<p>Start month: " + startingMonth + "</p><br />"
			+ "<input type = \"button\" id = \"begin\" value = \"Begin Journey\" />"
		}
		if(click.id == "june") {
			month = 3;
			console.log("june");
			startingMonth = "June";
			saveMonth(month);
			currentScreen++;
			gameContainer.innerHTML = "<p>Congratulations! You're ready to travel the trail!</p>"
			+ "<p>Your selections:</p>"
			+ "<br/ >"
			+ "<p>Profession: " + professionName + "</p>"
			+ "<p>Starting money: " + startingMoney + "</p>"
			+ "<p>Caravan leader: " + memberNames[0] + "</p>"
			+ "<p>Member 1: " + memberNames[1] + "</p>"
			+ "<p>Member 2: " + memberNames[2] + "</p>"
			+ "<p>Member 3: " + memberNames[3] + "</p>"
			+ "<p>Member 4: " + memberNames[4] + "</p>"
			+ "<p>Start month: " + startingMonth + "</p><br />"
			+ "<input type = \"button\" id = \"begin\" value = \"Begin Journey\" />"
		}
		if(click.id == "monthSelection") {
			data = document.getElementById('selection');
			console.log(data);
			if(data == "") {
				alert("Please enter a value");
			} else if(data > 4 || data < 1) {
				alert("Please enter a valid number");
			} else {
				if(data == 1) {
					startingMonth = "March";
				} else if(data == 2) {
					startingMonth = "April";
				} else if(data == 3) {
					startingMonth = "May";
				} else if(data == 4) {
					startingMonth = "June";
				}
				data--;
				saveMonth(data);
				currentScreen++;
				gameContainer.innerHTML = "<p>Congratulations! You're ready to travel the trail!</p>"
				+ "<p>Your selections:</p>"
				+ "<br/ >"
				+ "<p>Profession: " + professionName + "</p>"
				+ "<p>Starting money: " + startingMoney + "</p>"
				+ "<p>Caravan leader: " + memberNames[0] + "</p>"
				+ "<p>Member 1: " + memberNames[1] + "</p>"
				+ "<p>Member 2: " + memberNames[2] + "</p>"
				+ "<p>Member 3: " + memberNames[3] + "</p>"
				+ "<p>Member 4: " + memberNames[4] + "</p>"
				+ "<p>Start month: " + startingMonth + "</p><br />"
				+ "<input type = \"button\" id = \"begin\" value = \"Begin Journey\" />"
			}
		}
		if(click.id == "begin") {
			window.location = "trail";
		}
	}
);

function getScreen(newScreen) {
	fetch('/api/setup/'+newScreen).then(function(res) {
		res.text().then(function(data) {
			gameContainer.innerHTML = data;
		});
	});
	console.log(newScreen)
};


function saveNames(data) {
	fetch('/api/setPlayerNames/'+data, {
		method: 'post',
		headers: {'Content-Type': 'application/json, charset=UTF-8'},
		body: '{"data": "' + data + '"}'
	}).then(function(res) {
		if(res.status !== 200)
 		console.log('problem with ajax call! ' + res.status + " msg: " + res.value);
		return;
	});
	console.log("name " + data + " saved");
}

function saveProfession(data) {
	fetch('/api/setProfession/'+data, {
		method: 'post',
		headers: {'Content-Type': 'application/json, charset=UTF-8'},
		body: '{"data": "' + data + '"}'
	}).then(function(res) {
		if(res.status !== 200)
		console.log('problem with ajax call! ' + res.status + " msg: " + res.value);
		return;
	});
	console.log("profession " + data + " saved");
}

function saveMonth(data) {
	fetch('/api/setStartMonth/'+data, {
		method: 'post',
		headers: {'Content-Type': 'application/json, charset=UTF-8'},
		body: '{"data": "' + data + '"}'
	}).then(function(res) {
		if(res.status !== 200)
		console.log('problem with ajax call! ' + res.status + "msg: " + res.value);
		return;
	});
	console.log("month " + data + " saved");
}
