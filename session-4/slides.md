<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Session 4, JavaScript Professional Development

## Working with Objects

Software Engineering Pilot | NYC Department of Education | http://sepnyc.org/

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Introduction

Today we're going to explore the world of **objects**. Not physical objects, but objects in code.

We'll be doing this via a different teaching technique: a just-in-time approach to skills building.

## Outcomes

- Model concepts as objects that encapsulate behavior and state
- Utilize the `this` keyword to represent the object-in-context
- Differentiate between index-based and key-value storage
- Separate logic layer from view/interaction layer

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Concepts we'll be covering

- encapsulation
- index-based store
- key-value store
- properties
- methods

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Review

What have we learned about the following concepts? (Definition and examples)

- functions
- testing
- operators
- control flow
- data types
- variables
- iteration
- interface

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Review

How can we talk about the below code?

Ways to talk about it:
- interface / usage
- purpose / objective / utility
- implementation / procedure / algorithm

```javascript
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
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Project time

We're going to build a game together, but first let's discuss the pedagogical (andragogical) method to be used.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Just-in-Time Knowledge

A just-in-time technique is a way of breaking down a project- or challenge-based method into small stages in which the minimum amount of information needed to complete the stage is presented at the beginning of each stage.

The general flow works like this:

1. Define task
1. Share information needed to perform task
1. Learners apply information to context
1. After completion, reflect on meaning and utility of information
1. Expand and adapt information to other contexts
1. Repeat

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Defining the project

Here's the project for the day: we're going to build a simple memory game.

These are the initial criteria for the game:

- Game displays a pattern of characters, starting with 1
- User has to input the correct pattern
- If pattern is correct, move to next level
- If incorrect, game is over
- Game ends after set number of turns

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Afternoon Project: Choose Your Adventure

Which should we do?

1. Design, model, and code a small game or application together
2. Continue building on the morning game, adding more features

## Setup

1. Create a new JS Bin https://jsbin.com/
1. Open both the `JavaScript` and the `Console` tabs
1. Write code in the `JavaScript` tab and press `Run` to execute it
