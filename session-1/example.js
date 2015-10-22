function countEvens(numbers) {
  var numberOfEvens = 0;

  numbers.forEach(function(number) {
    if (number % 2 === 0) {
      numberOfEvens = numberOfEvens + 1;
    }
  });

  return numberOfEvens;
}

console.log( countEvens([4, 2, 1, 7, 6, 9]) );
