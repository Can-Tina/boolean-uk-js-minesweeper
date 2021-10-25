const difficulty = prompt("Easy, medium or hard? (please use all lowercase)")
let mineField = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let minePlace = 0
let mineNumber = 1
let placedAlready = false
let hitMine = false
let guess = 0
let correct = 0
let guesses = []
let guessesAsString = ""
let mines = []

function mineCreation() {
    if (difficulty === "easy") {
        mineNumber = 1
    }

    else if (difficulty === "medium") {
        mineNumber = 3
    }

    else if (difficulty === "hard") {
        mineNumber = 5
    };

    for(let i = 0; i < mineNumber; i++) {
        minePlace = Math.random() * (9 - 0) + 0;
        minePlace = minePlace.toFixed(0); //create array to prevent duplicates
        mineField[minePlace] = "mine"
    };
};



function playing() {
    while (hitMine === false && correct < (mineField.length - 1)) {
        guessesAsString = guesses.join(', ');
        guess = prompt("Guess a number between 0 and 9 (inclusive). You have so far guessed: " + guessesAsString) 
        if (mineField[guess] === "mine") {
            hitMine = true
            alert("You hit a mine!")
        }
        else {
            alert("You are safe... For now!")
            correct++
            0
        };
        guesses.push(guess)
    };
    alert("You got " + correct + " out of " + (mineField.length - 1))
}


mineCreation()
console.log(mineField)
playing()

/*if (mineField[minePlace] === "mine"){
    placedAlready = true
    while (placedAlready = true) {
        if (mineField[minePlace] === "mine"){
            placedAlready = true
            minePlace = Math.random() * (10 - 0) + 0;
            minePlace = minePlace.toFixed(0);
        }
        else {
            mineField[minePlace] = "mine"
            placedAlready = false
        };
    };
}
else {
    mineField[minePlace] = "mine"
};*/

/*while (minePlace === mines[0] || minePlace === mines[1] || minePlace === mines[2] || minePlace === mines[3] || minePlace === mines[4]) {
            minePlace = Math.random() * (9 - 0) + 0;
            minePlace = minePlace.toFixed(0);
        };*/

