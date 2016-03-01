console.log("The file 'game.js' has been loaded.");

var game = {
  pattern: [],
  echo: [],
  colors: ['green', 'red', 'yellow', 'blue'],

  play: function() {
    while (this.isCorrect()) {
      this.addOneColor();
      alert(this.pattern);
      this.echo.push(prompt("Do you remember the pattern?"));

      if (this.isCorrect()){
        alert("You're right!");
      } else {
        alert("Sorry, Charlie.");
      }
    }

    alert("Game over.");
  },

  isCorrect: function() {
    if (this.pattern.join('') === this.echo.join('')) {
      return true;
    }
    else{
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

var board = {
  greenClicked: function() {

  },

  redClicked: function() {

  },

  yellowClicked: function() {

  },

  blueClicked: function() {

  },

}
