//
// Version 3
//
// Calculate average of any number of grades
// AND return a basic letter grade (e.g. 'B', 'D')
//
// Usage:
//  calcGrade([70, 90, 60, 55, 88]) => C
//  calcGrade([100, 80, 95]) => A
//  calcGrade([0, 1]) => F
//
function calcGrade(grades) {
  var total = 0;

  grades.forEach(function(grade) {
    total = total + grade;
  });

  var gradeCount = grades.length;
  var average = total / gradeCount;

  var letterGrade;

  if (average >= 90) {
    letterGrade = 'A';
  } else if (average >= 80) {
    letterGrade = 'B';
  } else if (average >= 70) {
    letterGrade = 'C';
  } else if (average >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return letterGrade;
}

var allGrades = [90, 83, 91, 72, 85, 77];
var myGrade = calcGrade(allGrades);

console.log(myGrade);
