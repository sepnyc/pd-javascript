<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Session 2, JavaScript Professional Development

## Programming Language Basics

Software Engineering Pilot | NYC Department of Education | http://sepnyc.org/

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Review: learning goals for these sessions

- Identify and describe the core syntactical elements of JavaScript
- Create small programs using JavaScript
- Differentiate between and compare different JavaScript environments (i.e. Node vs. browser)
- Manipulate elements on a web page with JavaScript
- Add an interactive feature to an existing web page using JavaScript
- ...what else do you want to learn? (we'll cover this at the end of the day)

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Focusing on today...

Let's learn what a programming language is and what it can do.

- Identify and describe the core syntactical elements of JavaScript
- Develop self-learning habits through analysis and experimentation

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Review

What have we learned about the following concepts? (Definition and examples)

**Data Types**<br>

**Variables**<br>

**Operators**<br>

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Review

What have we learned about the following concepts? (Definition and examples)

**Data Types**<br>
The _values_ that programs work with. Numbers, strings, booleans, etc.

**Variables**<br>
Names which "point to" or reference a value.

**Operators**<br>
Basic symbols which perform a simple operation on one or more values.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Concepts we'll be covering

**Control Flow**<br>
The order in which lines of code are executed.

**Iteration**<br>
Running the same piece of code multiple times.

**Functions**<br>
Chunks of code with an explicit purpose, like tiny machines.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

## Resources

Tutorials:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://www.khanacademy.org/computing/computer-programming/programming
- https://www.codecademy.com/en/tracks/javascript
- https://www.codeschool.com/paths/javascript
- https://teamtreehouse.com/learn/javascript
- https://github.com/rkho/javascript-beginners-curriculum
- http://javascriptissexy.com/how-to-learn-javascript-properly/

Documentation:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Books & Readings:

- http://eloquentjavascript.net/
- http://javascript.crockford.com/

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Let's analyze a real JavaScript function.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

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

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

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

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

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

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# This function counts even numbers in an array.

Technical definition:

> `countEvens` is a function which takes one argument, an array of numbers, and returns a single number representing the count of even numbers in the array.

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

# Experiment time!

What can we learn by running controlled experiments on this function?
Which changes will produce errors, change the output, or have no effect?

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

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# The Building Blocks of JavaScript (continued)

Let's explore more of the basic components of writing JavaScript.

We'll be playing with these as we go - code along and ask questions!

***

# More Operators

We've already seen some of the _operators_ in JavaScript: `+`, `-`, `*` (multiply), `/` (divide).

There are more than just those! For example, the modulo operator `%` is for finding the remainder from a division operation. And **comparison operators** like `<` (less than), `>` (greater than), and `===` (equal to) are for comparing two values.

Try it! What does each expression _evaluate to_?

```
10 % 3
8 % 2
8 < 10
5 > 6
4 === 3
4.0 === 4
7 >= 7
3 !== 2
3 !== 3
"apples" === "oranges"
"zip" === "zip"
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Control Flow

One of the main ways that booleans are used is in _control flow_, which is how a program makes decisions on which code to execute.

The standard control flow statement is the **if statement**. It looks like this:

```
if (expression) { code to run }
```

For example:

```
var age = 23
if (age >= 18) { console.log("Rock the vote!") }
```

Try writing a few if statements, some for false, some for true.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Control Flow

Often we want to say not just "if this is true, do x" but "if this is true, do x, otherwise do y". This is called an **if...else statement** and it works just like you'd expect.

To work with these, though, we want to write _multiple lines of code_. This is the same as writing on one line as far as the computer is concerned, but it is a lot easier to work with for us mere mortals.

Open the `JavaScript` tab on JS Bin. We can write multiple lines of code here, and then press the "Run" button to _execute_ our code.

```javascript
var age = 23;
if (age >= 18) {
  console.log("Rock the vote!");
} else {
  console.log("Sorry, no ballot for you.");
}
```

Try changing the value of `age` to alter how the program runs.

_Note the semicolons at the end of each line. Newer versions of JavaScript don't care as much about semicolons, but older versions need them to separate statements._

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Control Flow Mini-Challenge

Now that you have some idea of how to use if...else statements to control the flow of your programs, let's try a little challenge!

**Write a program that checks if a variable called `input` is equal to a variable called `password`. If they are equal, print a confirmation message. If not, print a message telling the user to try again.**

You'll have to define your own variables and write your own if statements. Test at least two values for `input`.

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Control Flow Mini-Challenge: Example

Here's an example solution. Is your code similar?

```javascript
var input = "lasagne";
var password = "macandcheese";

if (input === password) {
  console.log("Access granted!");
} else {
  console.log("Denied! Try again.");
}
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Errors!

Let's take a quick break and talk about errors.

Errors are fantastic. They tell us when we've done something wrong, and often help us figure out how to fix it.

We can use them to learn more about just _how_ a programming language works.

Try these out and see what you get:

```
"b" _ 2
if (3 > 1)
"foo
3 +
myvariable = "blah"
myvariable + othervariable
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Functions

A _function_ is a named block of code that _does something_. Here's a simple function definition:

```javascript
function sum(a, b) {
  return a + b;
}
```

This just _defines_ the function. To use it, we need to _call_ the function like this:

```javascript
sum(3, 5)
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Inputs & Outputs

All functions take zero or more _inputs_ and return an _output_.

Formally, the inputs are called _arguments_ and the outputs is called the _return value_.

What are the inputs and outputs of this function?

```javascript
function sumIfPositive(a, b) {
  var sum = a + b;
  if (sum >= 0) {
    return sum;
  } else {
    return "Negative sum!";
  }
}
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Iteration

When we need to run the same code multiple times, we use _iteration_ (also known as _looping_).

The simplest form of iteration is _iterating through an array_. If we have an array, we can run the same code for each element in the array.

```javascript
var countries = ["England", "Thailand", "Brazil"];

countries.forEach(function(country) {
  console.log("Let's go to..." + country);
});
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Working with Arrays

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

# Back to our function

Given what we now know about JavaScript, how can we now _see_ this code?

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

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Back to the concepts

Where do we find each of these concepts at play in the code?

- control flow
- iteration
- variables
- functions
- data types

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

# FIN

### Post-session input

Please take some time to give input and feedback.

http://goo.gl/forms/IaA1ZbEIMh

### Afternoon session

Go through JS fundamentals course on [Codecademy](https://www.codecademy.com/learn/javascript) or work on project of your choice.

### Next session

- Build a small program from scratch
- Explore more concepts
  - testing
  - debugging
  - interface design
  - data structures
  - iterative development
