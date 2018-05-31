

// Create variables to record wins, guesses, number of guesses, and the current guess

var wins = 0;
var yourGuesses = [];
var numberOfGuessesPossible = 15;
var numberOfGuessesLeft = (numberOfGuessesPossible - yourGuesses.length);
var guess = ""; 

// Create array of words 
var words = [
    "piano",
    "clarinet",
    "saxophone",
    "violin",
    ];

// Randomize words
var word = words[Math.floor(Math.random() * words.length)];

// Create array of underscores to represent letters
  
var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
    };

// Display blank word to guess on screen

document.getElementById("wordToGuess").innerHTML = answerArray.join (" ");

// Create a function to display the variables in the browser

function showStats(){
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("yourGuesses").innerHTML = yourGuesses.join (" ");
    document.getElementById("numberOfGuessesLeft").innerHTML = numberOfGuessesLeft;
    document.getElementById("wordToGuess").innerHTML = answerArray.join (" ");}

// Execute the function
    
    showStats();

// Create a function to save input value when key is pressed

document.onkeyup = function (event){
    guess = event.key;
    yourGuesses.push(guess);
    numberOfGuessesLeft = (numberOfGuessesPossible - yourGuesses.length);

// Create for loop to check key inputs against the letters in the word array
    
    for (var k = 0; k < word.length; k ++) {
        if (word.charAt(k) == guess) {
            answerArray[k] = guess;
        } else {
            false;
        }
    };
    showStats(); 

// Display lose statement if the user runs out of guesses

    if (numberOfGuessesLeft === 0){
        document.getElementById("winOrLose").innerHTML ="You Lose!";
    };

// Check to see if the answer array has any blanks

    if (answerArray.includes("_")){

// If the answer array does not have blanks, display win statement and add 1 to the number of wins       
    } else {
        document.getElementById("winOrLose").innerHTML ="You Win!";
        wins = wins +1;
        showStats();
        var winningWord = [word];
        document.getElementById("word").innerHTML = winningWord;


// Reset variables
        yourGuesses = [];
        numberOfGuessesPossible = 15;
        numberOfGuessesLeft = (numberOfGuessesPossible - yourGuesses.length);
        guess = ""; 
        word = words[Math.floor(Math.random() * words.length)];
        answerArray = [];

        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_"
            };
        document.getElementById("wordToGuess").innerHTML = answerArray.join (" ");

    };
    showStats();   
}



    

