//
// Version 2
//
// Calculate average of any number of grades
//
// Usage:
//  calcGrade([70, 90, 60, 55, 88]) => 72.6
//  calcGrade([0, 1]) => 0.5
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

var allGrades = [90, 83, 91, 72, 85, 77];
var myGrade = calcGrade(allGrades);

console.log(myGrade);
