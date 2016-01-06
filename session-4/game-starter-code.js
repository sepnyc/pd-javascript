// --- SOURCE CODE ---

function makeGame() {

}

// --- TESTS ---

function assertEqual(message, actual, expected) {
  if (actual === expected) {
    console.log(message + " - PASS");
  } else {
    console.error(message + " - FAIL");
    console.error("actual: " + String(actual) + " ; expected: " + String(expected));
  }
}

var game = makeGame()
game.pattern = 'A'
game.guess = 'A'
assertEqual('game is correct with correct guess', game.isCorrect(), true)

var game = makeGame()
game.pattern = 'AB'
game.guess = 'AC'
assertEqual('game is not correct with incorrect guess', game.isCorrect(), false)

var game = makeGame()
game.pattern = 'A'
game.guess = 'A'
assertEqual('game is not over with correct guess', game.isOver(), false)

var game = makeGame()
game.pattern = 'AB'
game.guess = 'AC'
assertEqual('game is over with incorrect guess', game.isOver(), true)

var game = makeGame()
game.turns = 4
game.pattern = 'ABAD'
game.guess = 'ABAD'
assertEqual('game is over after guessing max length', game.isOver(), true)
