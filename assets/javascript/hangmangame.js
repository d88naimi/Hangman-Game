 var words = [ "monkey", "david", "turtle", "yummy"];

 var words =words[Math.floor(Math.random()* words.length)];

 var guess;
 var lives;
 var counter;
 var space;

 var showLives = document.getElementById("mylives");

 var words =words[Math.floor(Math.random()* words.length)];

 var answerArray= [];
for (var i = 0; i< words.length; i++) {
	answerArray[i] = "_";
	var guess = document.getElementById("user-text");
	document.onkeyup = funtion(){
	userText.textContent = event.key;
}