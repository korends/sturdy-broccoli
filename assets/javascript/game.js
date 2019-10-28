
// Computer choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables 
var wins = 0;
var loss = 0;
var guessesLeft = 10;
var guesses = [];

// Call the html "p" tags

var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("loss-text");
var userguessText = document.getElementById("userguess-text");
var guessesleftText = document.getElementById("guessesleft-text")

// Generate a random letter from the array

function startGame() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

// when user presses a key to guess

document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        guesses = [];
        startGame()
    } if (userGuess !== computerGuess) {
        guessesLeft--;
        guesses.push(userGuess);
    } if (guessesLeft === 0) {
        loss++;
        guessesLeft = 10;
        guesses = [];
        startGame();
    }

    winsText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + loss;
    guessesleftText.textContent = "Guesses left: " + guessesLeft;
    userguessText.textContent = "Your guesses so far: ";
    var newguesses = guesses.join(", ");

    // guesses.push(userGuess);
    document.getElementById("allguesses-text").innerHTML = newguesses;
};

startGame()

