'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.label-highscore').textContent = 'The highest score:';
// console.log(document.querySelector('.label-highscore').textContent);

// document.querySelector('.score').textContent = '12';
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value = '18';
// console.log(document.querySelector('.guess').value);

// document.querySelector('.between').textContent =
//   'Enter a number between 1 to 20😉';
// console.log(document.querySelector('.between').textContent);

// const randomNumber = Math.random();

/*
start making the "Guess My Number!" game.
*/
const randomNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  // console.log(guessNumber);
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guessNumber === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    //
    document.querySelector(body);
  } else if (guessNumber > randomNumber) {
    document.querySelector('.message').textContent = '📈 Too High';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guessNumber < randomNumber) {
    document.querySelector('.message').textContent = '📉 Too Low';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
});
