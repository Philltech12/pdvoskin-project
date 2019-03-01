document.body.onkeyup = function(spacePress){
	if(spacePress.keyCode = 32){
		window.location = "/mainmenu";
	}
}

document.getElementById("returnMain").onclick = function(){spacePress()};

function spacePress() {
	document.getElementById("returnMain").innerHTML = window.location = "/mainmenu";
}