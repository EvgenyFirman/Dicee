var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomNumber2 = Math.round(Math.random() * 5) + 1;

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);

if(randomNumber1 > randomNumber2){
	document.querySelector("h1").textContent = "🥃 Player 1 Wins";
} else if (randomNumber2 == randomNumber1){
 	document.querySelector("h1").textContent = "it is a draw"
} else {
	document.querySelector("h1").textContent = "Player 2 wins 🥃"
}
