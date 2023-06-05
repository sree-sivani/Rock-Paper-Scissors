let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
  score = savedScore;
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickCompMove();
  const resultElement = document.querySelector('.js-result');
  if (playerMove === computerMove) {
    resultElement.innerHTML = `Tie.`;
    score.ties += 1;

  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    resultElement.innerHTML = `You win.`;
    score.wins += 1;

  } else {
    resultElement.innerHTML = `You lose.`;
    score.losses += 1;
  }

    
  document.querySelector(".js-moves").innerHTML = `You : <img
  src="${playerMove}-emoji.png"
/>
, Computer :
<img
 src="${computerMove}-emoji.png"/>`;


updateScoreElement();
  localStorage.setItem("score", JSON.stringify(score)); //step1

}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScoreElement();
  localStorage.removeItem('score');
}



let result = "";

function pickCompMove() {
  const randNumber = Math.random();
let compMove;
  if (randNumber < (1 / 3)
   ) {
    compMove = "Rock";
  } else if ( randNumber < (2 / 3)) {
    compMove = "Paper";
  } else {
    compMove = "Scissors";
  }
  return compMove;
}
// let playerMove;


function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `\nWins : ${score.wins}  Losses : ${score.losses} Ties : ${score.ties}`;
}

