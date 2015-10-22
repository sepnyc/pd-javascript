//
// Version 1
//
// Calculate average of 3 grades
//
// Usage:
//  calcGrade(70, 90, 60) => 73.3333
//  calcGrade(0, 1, 2) => 1
//
function calcGrade(gradeOne, gradeTwo, gradeThree) {
  var total = gradeOne + gradeTwo + gradeThree;
  var average = total / 3;

  return average;
}

var myGrade = calcGrade(60, 80, 85);

console.log(myGrade);
