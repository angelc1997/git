// closure = function inside a function
// allow for private variables and state maintenance

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points} pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points} pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(3);
game.increaseScore(5);
game.decreaseScore(2);

console.log(`The final score is ${game.getScore()}`);
