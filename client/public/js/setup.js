/*
document.body.onkeyup = function(spacePress){
	if(spacePress.keyCode == 32){
		window.location = "/mainmenu";
	}
}
*/
var gameContainer = document.getElementById('setupContent');
getScreen(0);
var currentScreen = 0;
document.getElementById('setupContent').addEventListener('click',
	function(event) {
		var click = event.target;
		if(click.id == "bankerChoice") {
			prof = 0;
			console.log("Banker, $900");
			saveProfession(prof);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "carpenterChoice") {
			prof = 1;
			console.log("Carpenter, $600");
			saveProfession(prof);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "farmerChoice") {
			prof = 2;
			console.log("Farmer, $300");
			saveProfession(prof);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "differencesChoice") {
			alert("Banker starting money: $900, Carpenter starting money: $600, Farmer starting money: $e00");
		}
		if(click.id == "submit" && currentScreen == 0) {
			data = document.getElementById('selection').value;
			console.log(data);
			if(data == "") {
				alert("Please enter a value");
			} else if(data > 4 || data < 1) {
				alert("Please enter a valid number");
			} else if(data == 4) {
				alert("Banker starting money: $900, Carpenter starting money: $600, Farmer starting money: $e00");
			} else {
				data--;
				saveProfession(data);
				currentScreen++;
				getScreen(currentScreen);
			}
		}
		if(click.id == "submit" && currentScreen == 1) {
			data = document.getElementById('selection').value;
			console.log(data);
			saveNames(data);
			currentScreen++;
			getScreen(currentScreen);
		}
		if(click.id == "submit" && currentScreen == 2) {
			data1 = document.getElementById('member1').value;
			data2 = document.getElementById('member2').value;
			data3 = document.getElementById('member3').value;
			data4 = document.getElementById('member4').value;
			console.log(data1+" "+data2+" "+data3+" "+data4);
			saveNames(data1);
			saveNames(data2);
			saveNames(data3);
			saveNames(data4);
			currentScreen++;
			getScreen(currentScreen);
		}
  }
);

function getScreen(newScreen) {
  fetch('/api/setup/'+newScreen).then(function(res) {
    res.text().then(function(data)) {
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
 		console.log('Problem with call to ajax!' + res.status + "msg:" + res.value);
		return;
	});
	console.log("name" + data + "saved");
}

function saveProfession(data) {
	fetch('/api/setProfession/'+data, {
		method: 'post',
		headers: {'Content-Type': 'application/json, charset=UTF-8'},
		body: '{"data": "' + data + '"}'
	}).then(function(res) {
		if(res.status !== 200)
		console.log('Problem with call to ajax!' + res.status + "msg:" + res.value);
		return;
	});
	console.log("profession" + data + "saved");
}
