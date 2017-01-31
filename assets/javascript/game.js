//array
 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

 	 
      // var wins = 0;
      // var losses = 0;
      

      // document.onkeyup = function(event) {

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(alphabet);


 console.log(computerGuess);



var guess= prompt("Guess a letter, or click cancel to stop playing");
// prompt takes guess from player break;???
	if (guess===null) {
		
	}
// checking if guess = one letter

	else if (guess.length !==1){
		alert("Please enter single letter")

	}

	  else if ( guess == computerGuess){
		console.log(guess + " Great Job ");
	
	}

	else if (guess!== computerGuess){
		alert( guess + " Sorry Incorrect")
	} 

	

	wins=( guess+ 1)	
	

	