//noprotect

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

    playGame: function(){
      //if the strings match, add one letter....
      while (this.isCorrect()) {
        this.addOneLetter(); //add one letter to the pattern
        alert(this.pattern); //display the pattern
        this.echo = prompt("Do you remember the pattern?");
        //check user input to see if it equals pattern
        if (this.isCorrect()){
          alert("You're right!");
          //continue
        } else {
          alert("Sorry, Charlie.");
          //end game
        }
      }
      //if game play ends, tell user that game is over
      alert("Game over.");
    }
  };

  return emptyGame;
}

var myGame = makeGame();
myGame.playGame();
console.log(myGame.pattern);
console.log(myGame.echo);
