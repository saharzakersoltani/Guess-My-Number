'use strict';
// start making the "Guess My Number!" game.

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// We can use this function in order to not repeating document.querySelector...
const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  // empty guess number(when there is no input)
  if (!guessNumber) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    dispalyMessage('⛔ No Number!');
  }
  // guess number is equal to random number(When player wins)
  else if (guessNumber === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess number is diffrent from random number
  } else if (guessNumber !== randomNumber) {
    document.querySelector('.message').textContent =
      guessNumber > randomNumber ? '📈 Too High' : '📉 Too Low';

    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
  // // when guess number is too high
  // else if (guessNumber > randomNumber) {
  //   document.querySelector('.message').textContent = '📈 Too High';
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
  // // when guess number is too low
  // else if (guessNumber < randomNumber) {
  //   document.querySelector('.message').textContent = '📉 Too Low';
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = '0';
  //   }
  // }
});
// Challenge: Implement a game reset functionality, so that the player can make a new guess!
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
