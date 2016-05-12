// using a Player object
var Player = {
  file: function() {
    var fileList = document.querySelector("#fileList");
    var selectedFile = fileList.selectedOptions[0].value;

    return selectedFile;
  },

  repeat: function() {
    var repeatTimes = document.querySelector("#repeatTimes");
    var noOfRepeats = repeatTimes.value;
    noOfRepeats = Number(noOfRepeats);

    return noOfRepeats;
  },

  start: function() {
    var file = this.file();
    var repeat = this.repeat();

    this.play(file, repeat);
  },

  play: function(file, times) {
    var sound = new Audio(file);
    sound.loop = false;

    if (times > 1) {
      var self = this;

      sound.onended = function() {
        self.play(file, times - 1);
      }
    }

    sound.play();
  }
}
