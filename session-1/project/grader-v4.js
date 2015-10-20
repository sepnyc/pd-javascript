//
// Version 4
//
// Calculate average of any number of grades
// AND return a basic letter grade (e.g. 'B', 'D') using separate function
//
// Usage:
//  calcGrade([70, 90, 60, 55, 88]) => 72.6
//  makeLetter(72.6) => 'C'
//  calcGrade([0, 1]) => 0.5
//  makeLetter(0.5) => 'F'
//
function calcGrade(grades) {
  var total = 0;

  grades.forEach(function(grade) {
    total = total + grade;
  });

  var gradeCount = grades.length;
  var average = total / gradeCount;

  return average;
}

function makeLetter(grade) {
  var letterGrade;

  if (grade >= 90) {
    letterGrade = 'A';
  } else if (grade >= 80) {
    letterGrade = 'B';
  } else if (grade >= 70) {
    letterGrade = 'C';
  } else if (grade >= 60) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  return letterGrade;
}

var allGrades = [90, 83, 91, 72, 85, 77];
var myGrade = calcGrade(allGrades);
var myLetterGrade = makeLetter(myGrade);

console.log(myGrade);
console.log(myLetterGrade);
