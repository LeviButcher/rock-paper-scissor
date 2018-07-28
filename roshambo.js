//Randomly returns Rock, Paper, Scissor
function computerPlay(){
  var randomNumber;
  randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(`Random Number: ${randomNumber}`);
  switch (randomNumber) {
    case 1:
      return "ROCK"
    case 2:
      return "SCISSORS"
    case 3:
      return "PAPER"
    default:
      console.error("computerPlay: Random Number wasn't within desired results");
      return 0;
  }
}

//Assert test for computerPlay
function assertComputerPlay(){
  var result = computerPlay();
  console.assert(testForProperChoice(result), "Result did not fall within desired values");
}

//Test ComputerPlay for number of iterations passed
function loopAssertComputerPlay(iterations){
  let i = 0;
  while(i < iterations){
    assertComputerPlay();
    i++;
  }
  return i;
}

//Make sure ROCK, PAPER, Or SCISSOR was passed in
function testForProperChoice(choice){
  switch(choice){
    case "ROCK":
    case "SCISSORS":
    case "PAPER":
      return true;
    default:
      return false;
  }
}

//Plays a round of Rock, Paper, Scissor
function playRound(player1Selection, player2Selection){
        var player1HasWon = true;
        var tied = false;
        player1Selection = player1Selection.toUpperCase();
        player2Selection = player2Selection.toUpperCase();
        if(player1Selection === "ROCK" && player2Selection === "PAPER"){
          player1HasWon = false;
        }
        if(player1Selection === "SCISSORS" && player2Selection === "ROCK"){
          player1HasWon = false;
        }
        if(player1Selection === "PAPER" && player2Selection === "SCISSORS"){
          player1HasWon = false;
        }
        if(player1Selection === player2Selection){
          tied = true;
        }

        if(tied){
          return 3;
        }
        if(player1HasWon){
          return 1;
        }
        else{
          return 2;
        }
}

//Plays a game of RPS agaist a Computer, Must win by 2
function game(){
  let playAgain = true;
  while(playAgain){
    let playerScore = 0, aiScore = 0;
    let noWinner = true;

    console.log("WELCOME TO ROCK, PAPER, SCISSOR agaist a AI");
    while(noWinner){
        console.log(`Scoreboard: P-${playerScore} vs. AI-${aiScore}`);
        console.log("Type Rock, Paper, or Scissors: ");
        let playerChoice = prompt();
        let aiChoice = computerPlay();
        console.log(`P-${playerChoice} vs. AI-${aiChoice}`);
        let results = playRound(playerChoice, aiChoice);
        if(results == 1){
          console.log("Player 1 has won, congrats");
          playerScore++;
        }
        if(results == 2){
          console.log("AI has won, should of choosen better");
          aiScore++;
        }
        if(results == 3){
          console.log("Round was a tie, do over");
        }
        if(playerScore == aiScore + 2 || playerScore == aiScore - 2){
            noWinner = false;
        }
    }
    if(playerScore == aiScore + 2){
      console.log("You have beaten the ai \n YOU ARE LEGENDARY")
    }
    else{
      console.log("You lost to the ai, wow");
    }
      console.log("try again? 1 = YES, 2 = NO")
      playerChoice = prompt();
      if(playerChoice != 1){
        console.log("GOODBYE");
        playAgain = false;
      }
  }
}