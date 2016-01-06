// --- SOURCE CODE ---

function makeGame() {
  var game = {
    turns: 5,
    pattern: '',
    guess: '',
    isOver: function() {
      if (this.guess.length < this.pattern.length) {
        return false
      } else if (this.pattern.length >= this.turns) {
        return true
      } else if (this.guess !== this.pattern) {
        return true
      } else {
        return false
      }
    },
    isCorrect: function() {
      return this.guess === this.pattern
    }
  }

  return game
}

function playGame(game, pattern) {
  for (var i = 0; i < pattern.length; i++) {
    game.pattern = pattern.slice(0, i + 1)
    ui.showPattern(game.pattern)

    game.guess = ui.getGuess()

    if (game.isCorrect()) {
      ui.message('correct!')
    } else {
      ui.message('incorrect!')
    }

    if (game.isOver()) {
      ui.message('game over')
      break
    }
  }
}

var ui = {
  message: function(text) {
    console.log(text);
  },
  showPattern: function(pattern) {
    console.log(pattern);
  },
  getGuess: function() {
    return prompt("repeat the pattern:")
  }
}

playGame(makeGame(), 'ABCD')

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
assertEqual('game is over after guessing number of turns', game.isOver(), true)
