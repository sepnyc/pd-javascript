# Session 1

## Programming Language Basics

Software Engineering Pilot | NYC Department of Education | http://sepnyc.org/

***

# Introduction

- Who I am.
- Who you are.
- What we're doing here.

***

# Goals for these sessions

- Identify and describe the core syntactical elements of JavaScript
- Create small programs using JavaScript
- Differentiate between and compare different JavaScript environments (i.e. Node vs. browser)
- Manipulate elements on a web page with JavaScript
- Add an interactive feature to an existing web page using JavaScript

***

# Focusing on today...

Let's learn what a programming language is and what it can do.

***

# Concepts we'll be covering

- control flow
- iteration
- variables
- functions
- types

***

# Pre-Session Questions

- What is a programming language?
- What is JavaScript and where is it used?
- How have you used programming in the past?
- Who has ever learned a new (human) language?

***

# JavaScript in the wild

There are many programming languages in the world. JavaScript is only one of them.

It is used primarily as the language of the web: every major web browser runs JavaScript.

Look at https://twitter.com. Where is the JavaScript on this site?

***

# Let's get our hands dirty

1. Open up JS Bin https://jsbin.com/
1. Switch the panes to show just `Console`

This is a JavaScript _interpreter_: we can write JavaScript code here, and it will run as soon as we press "Enter".

***

# Try some basic JavaScript

The most simple operation a programming language can do is manipulate numbers.

Try entering some math expressions into the console and see what you get:

```
1 + 2
4.2 + 10
3 - 1
3.5 - 6
5 * 5
9 / 3
```

***

# More fun with variables

_Variables_ are how we assign a name to a _value_ (a piece of data). In JavaScript, they are preceded by the `var` keyword.

Anywhere we can use a value, we can also use a variable. JavaScript will look at the variable, and _evaluate_ the code using the variable's value.

Try this out:

```
var size = 40
size / 2
size + 1
size + size
```

***

# Beyond numbers

Programming languages can work with more than just numbers. There are other kinds of _types_ of data that we can use.

`String` types are for _strings_ of characters (like words and sentences!).
`Array` types are for storing collections of things.
`Boolean` types are simple: they are either `true` or `false`!

```
var name = "Ada"
var countries = ["England", "Thailand", "Brazil"]
var isProgrammingFun = true
```

***

# Let's look at some more complex JavaScript.

***

# What is this?

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

Let's analyze it together.

***

# First, what are we looking at?

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

# Ok, so it's a function. How do we use it?

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

countEvens( [3, 2, 5, 1, 4] );

var listOfAges = [32, 45, 27, 58];
countEvens( listOfAges );
```

***

# A function that counts even numbers in an array

So, how does it work? Let's walk through it line by line.

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

# An annotated version of this function

These comments tell exactly _what_ is happening, but not _why_.

```javascript
function countEvens(numbers) {            // Define a function that takes
                                          //  one argument
  var numberOfEvens = 0;                  // Declare a variable and set its
                                          //  value to the number 0

  numbers.forEach(function(number) {      // Iterate through each element in
                                          //  the array called `numbers`
    if (number % 2 === 0) {               // If the remainder of the current
                                          //  element divided by 2 is equal to 0
      numberOfEvens = numberOfEvens + 1;  // Then add 1 to the variable
                                          //  `numberOfEvens`
    }                                     // End the if block
  });                                     // End the iteration

  return numberOfEvens;                   // Return the value of `numberOfEvens`
}                                         // End the function definition
```

***

# Back to the concepts

Where do we find each of these concepts at play in the code?

- control flow
- iteration
- variables
- functions
- types

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

# Project time

Let's write our own program from scratch.

***

# Project for the day: create a grade calculator

It will take a list of number grades (`82`, `67`, etc.) and return a letter grade (`"B"`, `"D"`, etc.).

We'll start with the a simple implementation and work our way towards a more complete one.

## Setup

1. Create a new JS Bin https://jsbin.com/
1. Open both the `JavaScript` and the `Console` tabs
1. Write code in the `JavaScript` tab and press `Run` to execute it

***

# Project: Version 0\*

Calculate average of 2 grades.

Usage:

```
calcGrade(70, 90) => 80
calcGrade(0, 1) => 0.5
```

\*(We always count from 0 in programming).

***

# Project: Version 1

Calculate average of 3 grades.

Usage:

```
calcGrade(70, 90, 60) => 73.3333
calcGrade(0, 1, 2) => 1
```

***

# Project: Version 2

Calculate average of any number of grades.

Usage:

```
calcGrade([70, 90, 60, 55, 88]) => 72.6
calcGrade([0, 1]) => 0.5
```

***

# Project: Version 3

Calculate average of any number of grades AND return a basic letter grade (e.g. 'B', 'D').

Usage:

```
calcGrade([70, 90, 60, 55, 88]) => C
calcGrade([100, 80, 95]) => A
calcGrade([0, 1]) => F
```

***

# Project: Version 4

Calculate average of any number of grades AND return a basic letter grade (e.g. 'B', 'D') using separate function.

Usage:

```
calcGrade([70, 90, 60, 55, 88]) => 72.6
makeLetter(72.6) => 'C'
calcGrade([0, 1]) => 0.5
makeLetter(0.5) => 'F'
```

***

# Post-Session Questions

- What kinds of projects would you like to build towards?
- Do you have existing web sites that you would like to work with?
- What about programming is most confusing still?
- Which concepts do you want to go over in greater depth?
