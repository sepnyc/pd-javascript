console.log("The file 'game.js' has been loaded.");

var showMessage = function(message) {
  var container = document.querySelector('#message');
  container.innerText = message;
}

var BOARD = {
  clickLog: [],

  clearLog: function() {
    this.clickLog = [];
  },

  greenClicked: function() {
    this.clickLog.push('green');
  },

  redClicked: function() {
    this.clickLog.push('red');
  },

  yellowClicked: function() {
    this.clickLog.push('yellow');
  },

  blueClicked: function() {
    this.clickLog.push('blue');
  },

  flashPattern: function(pattern) {
    if (!pattern || pattern.length == 0) {
      return false;
    }

    var current = pattern[0];
    var self = this;

    this.flash(current, function() {
      self.flashPattern(pattern.slice(1));
    });
  },

  flash: function(color, nextFlash) {
    var box = document.querySelector('#' + color);

    box.style['opacity'] = 0.2;

    setTimeout(function() {
      box.style['opacity'] = 1;

      if (nextFlash) {
        nextFlash();
      }
    }, 500);
  }
}

var GAME = {
  pattern: [],
  echo: [],
  colors: ['green', 'red', 'yellow', 'blue'],

  play: function() {
    BOARD.flashPattern(this.pattern);

    while (this.isCorrect()) {
      this.addOneColor();
      showMessage(this.pattern);
      BOARD.flashPattern(this.pattern);
      showMessage("Do you remember the pattern?");
      // this.echo.push(prompt("Do you remember the pattern?"));

      if (this.isCorrect()){
        showMessage("You're right!");
      } else {
        showMessage("Sorry, Charlie.");
      }
    }

    showMessage("Game over.");
  },

  isCorrect: function() {
    if (this.pattern.join('') === this.echo.join('')) {
      return true;
    }
    else {
      return false;
    }
  },

  isOver: function() {
    return !this.isCorrect();
  },

  randomColor: function() {
    var randomInt = Math.floor(Math.random() * this.colors.length)
    return this.colors[randomInt];
  },

  addOneColor: function() {
    this.pattern.push(this.randomColor());
  }
};
