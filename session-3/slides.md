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

Today is all about how to work on projects: how to take an idea and iteratively translate into a functional program.

To make it more interesting, we're going to be building a project _together_.

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

# Programming Essentials: Working with Arrays

Besides iteration, there are lots of other ways to work with arrays.

For example, we may want to add or remove elements from an array, or retrieve certain elements at a particular index.

Try these different array operations:

```javascript
var groceries = ["bread", "zucchini", "bacon", "tomatoes", "butter"];
groceries[0]
groceries.length
groceries[4]
groceries[5]
groceries[3] = "tofu"
groceries
groceries.pop()
groceries
groceries.push("olive oil")
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

# What does it mean to work on a coding project?

How do we begin?

Start with a problem.

Let's say we are constantly forgetting what we want to buy at the grocery store.

How can we solve this problem with code? What should our steps be?

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Development Process

A good development process looks something like this.

1. Define the problem
1. Set goals
1. Define versions, simplify as much as possible
1. Clarify use (interface)
1. Write expectations (testing)
1. Write code to pass tests

This is what we'll be practicing today.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Morning Project

Let's make it easier to take attendance.

- What is the goal?
- What is the simplest solution?
- What is the interface?
- What is the first test we can write?

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Let's Get Started

Now that we have a test, we can write code to solve it. Here's the cycle we'll follow:

1. Write a test
1. Switch out the person typing
1. Write code to pass the test
1. Repeat until feature is complete

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Reflection

How do these concepts apply to our project?

- testing
- debugging
- interface
- data structures
- iterative development

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Reflection

- Was this process similar to other learning or working processes you use?
- What was new and different about it?
- What did we learn?
- What did we build?

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Debugging!

We found a bug! Hooray!

Let's practice a _debugging process_:

- Is there an error?
  - If so, what line is it on?
  - What is the program state when the error occurs?
- What is the expected result?
- What is the actual result?
- How can we isolate and reproduce the error?
- What is our hypothesis for fixing it?
- How can we conduct an experiment to remedy the error?

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Afternoon Project: Grade Calculator

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
