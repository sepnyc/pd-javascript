<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Session 3, JavaScript Professional Development

## Practical Programming in JavaScript

Software Engineering Pilot | NYC Department of Education | http://sepnyc.org/

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Introduction

<!-- TODO: write introduction -->

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Goals for these sessions

- Identify and describe the core syntactical elements of JavaScript
- Create small programs using JavaScript
- Differentiate between and compare different JavaScript environments (i.e. Node vs. browser)
- Manipulate elements on a web page with JavaScript
- Add an interactive feature to an existing web page using JavaScript

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Focusing on today...

Practice developing small programs.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Concepts we'll be covering

- testing
- debugging
- interface
- data structures
- iterative development

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Review

What have we learned about the following concepts? (Definition and examples)

**Functions**<br>

**Iteration**<br>

**Control Flow**<br>

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Review

What have we learned about the following concepts? (Definition and examples)

**Control Flow**<br>
The order in which lines of code are executed.

**Iteration**<br>
Running the same piece of code multiple times.

**Functions**<br>
Chunks of code with an explicit purpose, like tiny machines.

Where do these concepts appear in the example code below?

```javascript
function countEvens(numbers) {
  var numberOfEvens = 0;

  numbers.forEach(function(number) {
    if (number % 2 === 0) {
      numberOfEvens = numberOfEvens + 1;
    }
  });

  return numberOfEvens;
}
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project time

Let's write our own program from scratch.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project for the day: create a grade calculator

It will take a list of number grades (`82`, `67`, etc.) and return a letter grade (`"B"`, `"D"`, etc.).

We'll start with the a simple implementation and work our way towards a more complete one.

## Setup

1. Create a new JS Bin https://jsbin.com/
1. Open both the `JavaScript` and the `Console` tabs
1. Write code in the `JavaScript` tab and press `Run` to execute it

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project: Version 0\*

Calculate average of 2 grades.

Usage:

```javascript
calcGrade(70, 90) // => should return 80
calcGrade(0, 1)   // => should return 0.5
```

\*(We always count from 0 in programming).

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project: Version 1

Calculate average of 3 grades.

Usage:

```javascript
calcGrade(70, 90, 60) // => should return 73.3333
calcGrade(0, 1, 2)    // => should return 1
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project: Version 2

Calculate average of any number of grades.

Usage:

```javascript
calcGrade([70, 90, 60, 55, 88]) // => should return 72.6
calcGrade([0, 1])               // => should return 0.5
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project: Version 3

Calculate average of any number of grades AND return a basic letter grade (e.g. 'B', 'D').

Usage:

```javascript
calcGrade([70, 90, 60, 55, 88]) // => should return 'C'
calcGrade([100, 80, 95])        // => should return 'A'
calcGrade([0, 1])               // => should return 'F'
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project: Version 4

Calculate average of any number of grades AND return a basic letter grade (e.g. 'B', 'D') using separate function.

Usage:

```javascript
calcGrade([70, 90, 60, 55, 88]) // => should return 72.6
makeLetter(72.6)                // => should return 'C'
calcGrade([0, 1])               // => should return 0.5
makeLetter(0.5)                 // => should return 'F'
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Post-Session Questions

- What kinds of projects would you like to build towards?
- Do you have existing web sites that you would like to work with?
- What about programming is most confusing still?
- Which concepts do you want to go over in greater depth?
