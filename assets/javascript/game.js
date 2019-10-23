
// Computer choices
var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables 
var wins = 0;
var loss = 0;
var guesses = [];

// Call the html "p" tags

var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");
var userguessText = document.getElementById("userguess-text");

// when user presses a key

document.addEventListener('keydown', function(e) {
    const key = event.key.toLowerCase();

    guesses.push(key);
    console.log(guesses);
});

