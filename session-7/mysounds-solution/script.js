function play() {
  // the main function to run

  // Get the list of audio files
  var fileList = document.querySelector("#fileList");
  console.log(typeof fileList);
  console.log(fileList.constructor);

  // Get the selected file
  var selectedOption = fileList.selectedOptions[0];
  var selectedFile = selectedOption.value;
  console.log(selectedFile);
  console.log(typeof selectedFile);

  // Get the number of repeats
  var repeats = getRepeats();

  // Make an audio object
  var sound = new Audio(selectedFile);

  // Play the sound
  // sound.play();

  // Play the sound repeatedly
  // for (var i = 0; i < repeats; i++) {
  //   sound.play();
  // }
  // Ok, something is wrong

  // A working repeat
  sound.onended = function() {
    repeats = repeats - 1;

    if (repeats >= 1) {
      sound.play();
    }
  };

  sound.play();
}

// Move code for repeats into its own function
function getRepeats() {
  var repeatTimes = document.querySelector("#repeatTimes");
  var noOfRepeats = repeatTimes.value;

  // Repeats needs to be a number
  console.log(typeof noOfRepeats);
  noOfRepeats = Number(noOfRepeats);
  console.log(typeof noOfRepeats);

  return noOfRepeats;
}
