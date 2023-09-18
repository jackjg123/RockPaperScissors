// Initialize variables
var wins = 0;
var computerWins = 0;
var ties = 0;

function computerChoice() {
  var choices = ['R', 'P', 'S'];
  var randomChoice = Math.floor(Math.random() * choices.length);
  return choiices[randomChoice];
}
