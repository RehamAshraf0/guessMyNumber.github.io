'use strict';


//Game variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Check Button functionality

document.querySelector('.check').addEventListener('click', function () {
    //Get the guess number from the user interface
    let guess = Number(document.querySelector('.guess').value);

    //check if the guess is empty
    if (!guess) {
        document.querySelector('.message').textContent = 'Enter a number! ⛔'


    }
    //check if the guess is correct
    else if (guess === secretNumber) {
        //Tell the user he got the correct number
        document.querySelector('.message').textContent = 'Correct number yaaay! 🎉'

        //Update the User interface
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //check if score is higher than the highscore
        if (score > highScore) {
            //If so, update the high score
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    //check if the guess ain't correct
    else if (guess !== secretNumber) {
        //Update the User Interface to tell the user if the guess is too high or too low
        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';

        //check the user score
        if (score > 1) {
            // If the score is higher than one, decrement it and update the user interface
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // If the user is one then the user lost the game and update the user interface
            document.querySelector('.message').textContent = 'You lost the game! 💥'
            document.querySelector('.score').textContent = '0';

        }
    }
});

//The again button functionality

document.querySelector('.again').addEventListener('click', function () {
    //set a new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //set the score back to 20
    score = 20;
    // Update the user interface with the initial states
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#222';

})