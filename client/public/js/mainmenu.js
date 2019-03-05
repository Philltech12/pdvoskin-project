var x = document.getElementById("myDiv");
var y = document.getElementById("yourDiv");
var count = 1;

function soundOn(x) {
	if (x.style.display === "none") {
		x.style.display = "inline";
	}
	else {
		x.style.display = "none"
	}
}
function soundOff(y) {
	if (y.style.display === "inline") {
		y.style.display = "none";
	}
	else {
		y.style.display = "inline"
	}
}
function menuSound() {
	if (music.paused) {
		soundOn(x);
		soundOff(y);
		music.play();
	}
	else {
		soundOff(y);
		soundOn(x);
		music.pause();
	}
}

if(count = 1) {
	menuSound();
	count++;
}

document.body.onkeyup = function(keyPress){
	if(keyPress.keyCode == 49){
		window.location = "/setup";
	}
	else if(keyPress.keyCode == 51) {
		window.location = "/topten";
	}
	else if(keyPress.keyCode == 52) {
		menuSound();
	}
}

 