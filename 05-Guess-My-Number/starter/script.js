'use strict';

let number;
let guess;
let scoreLabel = document.querySelector('.score');
let score = 20;
let highscore = 0;
let highscoreLabel = document.querySelector('.highscore');

let random = function () {
  number = Math.floor(Math.random() * 20) + 1;
};

let displayMessage = function (message) {
  document.querySelector('.message').textContent = `${message}`;
};

random();

document.querySelector('.again').addEventListener('click', function () {
  random();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  highscore = 0;
});

let loseGame = function () {
  if (score === 0) {
    displayMessage('You lose! 😥');
  }
};

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    if (!guess || guess > 20 || guess < 0) {
      displayMessage('Not in range 🫣');
    } else if (guess < number) {
      displayMessage('Too low 😛');
      scoreLabel.textContent = --score;
    } else if (guess > number) {
      displayMessage('Too high 🛩');
      scoreLabel.textContent = --score;
    } else if (guess === number) {
      displayMessage('You got it! 🥳');
      document.querySelector('body').style.backgroundColor = 'rgb(51, 158, 51)';
      document.querySelector('.number').textContent = number;
      document.querySelector('.number').style.fontWeight = '800';
      scoreLabel.textContent = score = score + 2;
      highscore++;
      random();
    }
    if (highscore > Number(highscoreLabel.textContent)) {
      highscoreLabel.textContent = highscore;
    }
    loseGame();
  }
});
