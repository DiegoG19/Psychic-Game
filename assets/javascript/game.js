// This is what the computer has from to choose
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set the values of each 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessInput = [];
//runs whatever key is pressed
document.onkeyup = function(event) {
    var userGuess = event.key;
// randomly chooses fron the array and give value to the computerGuess variable
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// this are the options for the user 
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// logic for the outcomes for the win/losses/guessesleft/ reset after a win or lose
if (options.indexOf(userGuess) > -1){

    if (userGuess === computerGuess){
        wins++;
        guessesLeft = 9;
        guessInput = [];
    }
    if (userGuess != computerGuess){
        guessesLeft --;
        guessInput.push(userGuess);
    }
    if (guessesLeft === 0){
        guessesLeft = 9;
        losses++;
        guessInput = [];
    }
}
    // This puts the string together and should be displayed in the html variables
    var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guessesLeft + "</p>" +
			"<p>Your Guesses so far: " + guessInput.join(", ") + "</p>";
    // groups the selectors above to connect it to the div id of Show
			document.querySelector("#Show").innerHTML = html;
}
    