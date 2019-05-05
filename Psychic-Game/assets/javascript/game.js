// Global Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphSplit = alphabet.split("");

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guesses-left");
var guessesSoFarText = document.getElementById("guesses-so-far");


// Computer randomly picks a letter
var randomLetter = alphSplit[Math.floor(Math.random() * alphSplit.length)];

// Reset function to reset the game
function reset() {
    guessesLeft = 9;
    guessesSoFar = [];
    randomLetter = alphSplit[Math.floor(Math.random() * alphSplit.length)];
};

// What happens when user presses a key...
document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess === randomLetter) {  // When user presses correct key...
        wins += 1;
        reset();
    } else if (guessesLeft === 0) {  // Reset game when guessesLeft = 0
        losses += 1;
        reset();
        }

    else {  // When user presses incorrect key...
        if (guessesSoFar.includes(userGuess)) {
            alert("You have already guessed: " + userGuess.toUpperCase())
        }
        else {
        guessesLeft -= 1;
        guessesSoFar.push(userGuess);
        }    
    }

    // Display information to the page
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Your Guesses So Far: " + guessesSoFar.join(", ");

    console.log(userGuess)
    console.log(randomLetter)
    console.log(wins)
    console.log(losses)
    console.log(guessesLeft)
};

