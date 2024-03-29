var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("ftus_instrument_drum_large_gamelan_hit_single_004_475.mp3");
	sound1.play();
	break;

	case "a":
	var sound2 = new Audio("ftus_instrument_drum_large_gamelan_hit_single_004_475.mp3");
	sound2.play();
	break;

	case "s":
	var sound3 = new Audio('zapsplat_musical_drum_tom_hit_strike_single_mid_low_001_58459.mp3');
	sound3.play();
	break;

	case "d":
	var sound4 = new Audio('zapsplat_musical_drum_tom_hit_strike_single_mid_low_001_58459.mp3');
	sound4.play();
	break;

	case "j":
	var sound5 = new Audio("mixkit-toy-drums-and-bell-ding-560.wav");
	sound5.play();
	break;

	case "k":
	var sound6 = new Audio('Hi-Hat-Open-Hit-C3-www.fesliyanstudios.com.mp3');
	sound6.play();
	break;

	case "l":
	var sound7 = new Audio('Bass-Drum-Hit-Level-6b-www.fesliyanstudios.com.mp3');
	sound7.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
