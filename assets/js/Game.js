// Initialize variables
var wins = 0;
var computerWins = 0;
var ties = 0;

// Computer chooses randomly between choices
function computerChoice() {
  var choices = ['R', 'P', 'S'];
  var randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// Compare user choice to computer choice
function playRound(userSelection) {
  var computerSelection = computerChoice();

  if (userSelection === computerSelection) {
    ties++;
    alert("It's a tie!");
  } else if (
    (userSelection === 'R' && computerSelection === 'S') ||
    (userSelection === 'P' && computerSelection === 'R') ||
    (userSelection === 'S' && computerSelection === 'P')
  ) {
    wins++;
    alert('Congrats! You got the W!');
  } else {
    alert('Sorry, take this L');
  }
  alert("Stats:\nW's: " + wins + "\nL's: " + computerWins + '\nTies ' + ties);
  var rematch = confirm('Would you lik a rematch?');
  if (rematch) {
    startGame();
  } else {
    alert('Thanks for playing!');
  }
}
