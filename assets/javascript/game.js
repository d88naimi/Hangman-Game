//array for random generate a letter
 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

// objects---used to define the properties for the game  
var psychic = {
	// wins,losses life set default to 0 only once to get started
	wins: 0,
	losses: 0,
	life: 10,
	// array for future userGuess incorrect inputs intializing
	incorrect: [],
	// generating a random letter from array alphabet
	computerGuess: alphabet[Math.floor(Math.random() * alphabet.length)],
	// method-- resetting the game but not affecting the win and losses 
	startover: function(){
		this.life=10;
		this.incorrect=[];
		this.computerGuess= alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(this.computerGuess);
	}
}



      


console.log(alphabet);


 console.log(psychic.computerGuess);



// holding the users key input
document.onkeyup = function(event) {

       // asssihning users input to userGuess 
	var userGuess = event.key.toLowerCase();
    // javascript pre-set code for letters of the alphabet on a computer keyboard
    if (event.keyCode >= 65 && event.keyCode <= 90){
    // indexOf is telling computer that userGuess has been logged already resulting in false
    // will not continue running	
    	if (psychic.incorrect.indexOf(userGuess) == -1){ 





    		// if userguess = random computer guess 
			if (userGuess == psychic.computerGuess){
				// add +1 to score
				psychic.wins++
				// function to reset
				psychic.startover();

				console.log("correct");

			}	
    
			else { 
				console.log ("Incorrect");
				// minus a life
				psychic.life--
				// logging the incorrect key press to incorrect display
				psychic.incorrect.push(userGuess);
				// if all lives go to 0 
				if (psychic.life == 0){
					// add 1 to loses
					psychic.losses++
					// function to reset new game
					psychic.startover();	
				}

			} 
			// assighnments are triggered if valid keys are inputed
    		document.getElementById('wins').value = psychic.wins;
    		document.getElementById('losses').value = psychic.losses;
    		document.getElementById('life').value = psychic.life;
    		document.getElementById('incorrect').value = psychic.incorrect;
    	}
    }
}



	


	

	 

		
	

	