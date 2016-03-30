console.log("The file 'game.js' has been loaded.");

var showMessage = function(message) {
  var messageView = document.querySelector('#message');
  messageView.innerText = message;
}

var BOARD = {
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
        setTimeout(nextFlash, 200);
      }
    }, 500);
  }
}

var GAME = {
  pattern: [],
  echo: [],
  colors: ['green', 'red', 'yellow', 'blue'],

  play: function() {
    BOARD.flashPattern(['red', 'red', 'blue', 'green', 'yellow']);

    // while (this.isCorrect()) {
    //   this.addOneColor();
    //
    //   BOARD.flashPattern(this.pattern);
    //   showMessage("Do you remember the pattern?");
    //
    //   // TODO: collect echo
    //
    //   if (this.isCorrect()){
    //     showMessage("You're right!");
    //   } else {
    //     showMessage("Sorry, Charlie.");
    //   }
    // }
    //
    // showMessage("Game over.");
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
