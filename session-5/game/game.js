console.log("The file 'game.js' has been loaded.");

var showMessage = function(message) {
  // TODO: render a message in the paragraph tag with id "message" in page.html
}

var BOARD = {
  flashPattern: function(pattern) {
    // TODO: flash a pattern of colors on the screen
  },

  flash: function(color) {
    // TODO: flash one color on the screen
  }
}

var GAME = {
  pattern: [],
  echo: [],
  colors: ['green', 'red', 'yellow', 'blue'],

  play: function(){
    // TODO: Modify the play() function to show a pattern of colors
    
    while (this.isCorrect()) {
      this.addOneLetter();
      alert(this.pattern);
      this.echo = prompt("Do you remember the pattern?");

      if (this.isCorrect()){
        alert("You're right!");
      } else {
        alert("Sorry, Charlie.");
      }
    }

    alert("Game over.");
  }

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
