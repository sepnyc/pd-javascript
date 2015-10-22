//
// Version 0
//
// Calculate average of 2 grades
//
// Usage:
//  calcGrade(70, 90) => 80
//  calcGrade(0, 1) => 0.5
//
function calcGrade(gradeOne, gradeTwo) {
  var total = gradeOne + gradeTwo;
  var average = total / 2;

  return average;
}

var myGrade = calcGrade(60, 80);

console.log(myGrade);
