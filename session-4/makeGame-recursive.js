function makeGame() {
  var emptyGame = {
    pattern: "",
    echo: "",

    isCorrect: function() {
      if (this.pattern === this.echo){
        return true;
      }
      else{
        return false;
      }
    },

    isOver: function() {
      return !this.isCorrect();
    },

    randomLetter: function(){
      var possibleLetters = ['A','B','C','D'];
      return possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    },

    addOneLetter: function(){
      this.pattern = this.pattern + this.randomLetter();
     // this.pattern.push(this.randomLetter());
    },

    playGame: function() {
      alert("get ready...");
      this.nextTurn();
    },

    nextTurn: function(){
      this.addOneLetter();

      alert(this.pattern);

      this.echo = prompt("Do you remember the pattern?");

      if (this.isCorrect()){
        alert("You're right!");
        this.nextTurn();
        //continue
      } else {
        alert("Sorry, Charlie. Game Over.");
        //end game
      }
    }
  };

  return emptyGame;
}

var myGame = makeGame();
myGame.playGame();
console.log(myGame.pattern);
console.log(myGame.echo);
