////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    var answer = prompt();
    return answer;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

// var playerMove = getPlayerMove();
// var computerMove = getComputerMove();

function getWinner(playerMove, computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
    var winner;
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        if (computerMove === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } return winner;
}

function playToFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  while (playerWins < 5 && computerWins < 5) {
    var roundWinner = getWinner(getPlayerMove(), getComputerMove());
    if (roundWinner === "player") {
      playerWins += 1;
      console.log("Player wins!");
    } else if (roundWinner === "computer") {
      computerWins += 1;
      console.log("Computer wins!");
    } else {
      console.log("It's a tie!");
    } console.log("Player has a score of " + playerWins + "," + " Computer has a score of " + computerWins + ".");
  } 
  if (playerWins === 5) {
    console.log("Player wins, 5 games to " + computerWins + ".");
  } else {
    console.log("Computer wins, 5 games to " + playerWins + ".");
  }
} 