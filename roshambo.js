let playerScore = 0;
let aiScore = 0;
const rockImagePath = './images/rock.png';
const sissorsImagePath = './images/scissors.png';
const paperImagePath = './images/paper.png';

window.onload = () => {
  const rockChoice = document.querySelector('#rock');
  rockChoice.addEventListener('click', () => {
    clearChoosen();
    console.log(rockChoice);
    rockChoice.classList.add('choosen');
  });

  const paperChoice = document.querySelector('#paper');
  paperChoice.addEventListener('click', () => {
    clearChoosen();
    console.log(paperChoice);
    paperChoice.classList.add('choosen');
  });

  const scissorsChoice = document.querySelector('#scissors');
  scissorsChoice.addEventListener('click', () => {
    clearChoosen();
    console.log(scissorsChoice);
    scissorsChoice.classList.add('choosen');
  });

  const shootButton = document.querySelector('#shoot');
  shootButton.addEventListener('click', () => {
    const choosen = document.querySelector('.choosen');
    if (!choosen) return;
    let choiceValue = choosen.id.toUpperCase();
    let computerChoice = computerPlay();
    let result = playRound(choiceValue, computerChoice);
    setResults(result);
    setVsImages(choiceValue, computerChoice);
    clearChoosen();
  });
};

/* Sets the infoMessage to the appropriate message
    depending on the results passed in and updates scoreboard*/
function setResults(result) {
  const info = document.querySelector('#infoMessage');
  const scores = document.querySelector('#scores');
  console.log(result);
  if (result == 1) {
    playerScore++;
    info.textContent = 'You have won';
  } else if (result == 2) {
    aiScore++;
    info.textContent = 'You have lost';
  } else {
    info.textContent = 'tied, try again';
  }

  scores.textContent = `${playerScore} - ${aiScore}`;
}

//Clears choosen class from any elements
function clearChoosen() {
  const alreadyChoosen = document.querySelector('.choosen');
  if (alreadyChoosen)
    alreadyChoosen.classList.remove('choosen');
}

function setVsImages(playerChoice, aiChoice) {
  const playerImg = document.querySelector('#playerChoice');
  const aiImg = document.querySelector('#aiChoice');
  console.log(playerImg.src);
  setImage(playerImg, playerChoice);
  setImage(aiImg, aiChoice);
}

function setImage(element, type) {
  switch (type){
    case 'ROCK':
      element.src = rockImagePath;
      element.style = 'display: inline';
      break;
    case 'SCISSORS':
      element.src = sissorsImagePath;
      element.style = 'display: inline';
      break;
    case 'PAPER':
      element.src = paperImagePath;
      element.style = 'display: inline';
      break;
    default:
      console.err(type);
      break;
  }
}

//Randomly returns Rock, Paper, Scissor
function computerPlay() {
  var randomNumber;
  randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(`Random Number: ${randomNumber}`);
  switch (randomNumber) {
    case 1:
      return 'ROCK';
    case 2:
      return 'SCISSORS';
    case 3:
      return 'PAPER';
    default:
      console.error("computerPlay: Random Number wasn't within desired results");
      return 0;
  }
}

//Make sure ROCK, PAPER, Or SCISSOR was passed in
function testForProperChoice(choice) {
  switch (choice){
    case 'ROCK':
    case 'SCISSORS':
    case 'PAPER':
      return true;
    default:
      return false;
  }
}

//Plays a round of Rock, Paper, Scissor
function playRound(player1Selection, player2Selection) {
  var player1HasWon = true;
  var tied = false;
  player1Selection = player1Selection.toUpperCase();
  player2Selection = player2Selection.toUpperCase();
  if (player1Selection === 'ROCK' && player2Selection === 'PAPER') {
    player1HasWon = false;
  }

  if (player1Selection === 'SCISSORS' && player2Selection === 'ROCK') {
    player1HasWon = false;
  }

  if (player1Selection === 'PAPER' && player2Selection === 'SCISSORS') {
    player1HasWon = false;
  }

  if (player1Selection === player2Selection) {
    tied = true;
  }

  if (tied) {
    return 3;
  }

  if (player1HasWon) {
    return 1;
  } else {
    return 2;
  }
}

//Plays a game of RPS agaist a Computer, Must win by 2
function game() {
  let playAgain = true;
  while (playAgain) {
    let playerScore = 0;
    let aiScore = 0;
    let noWinner = true;

    console.log('WELCOME TO ROCK, PAPER, SCISSOR agaist a AI');
    while (noWinner) {
      console.log(`Scoreboard: P-${playerScore} vs. AI-${aiScore}`);
      console.log('Type Rock, Paper, or Scissors: ');
      let playerChoice = prompt();
      let aiChoice = computerPlay();
      console.log(`P-${playerChoice} vs. AI-${aiChoice}`);
      let results = playRound(playerChoice, aiChoice);
      if (results == 1) {
        console.log('Player 1 has won, congrats');
        playerScore++;
      }

      if (results == 2) {
        console.log('AI has won, should of choosen better');
        aiScore++;
      }

      if (results == 3) {
        console.log('Round was a tie, do over');
      }

      if (playerScore == aiScore + 2 || playerScore == aiScore - 2) {
        noWinner = false;
      }
    }

    if (playerScore == aiScore + 2) {
      console.log('You have beaten the ai \n YOU ARE LEGENDARY');
    } else {
      console.log('You lost to the ai, wow');
    }

    console.log('try again? 1 = YES, 2 = NO');
    playerChoice = prompt();
    if (playerChoice != 1) {
      console.log('GOODBYE');
      playAgain = false;
    }
  }
}
