<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Session 1, JavaScript Professional Development

## Programming Language Basics

Software Engineering Pilot | NYC Department of Education | http://sepnyc.org/

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Introduction

- Who I am.
- Who you are.
- What we're doing here.

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

### We won't be covering

- Advanced JavaScript or concepts
- Web frameworks (Ember, Angular, etc.)
- SEP curriculum-specific topics

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# You're in the right place if you...

- are new to programming and JavaScript
- want to refresh your knowledge of the basics
- want to focus on understanding the fundamentals of programming
- enjoy a good challenge :D

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Pre-Session Questions

- What is a programming language?
- What is JavaScript and what is it used for?
- How do you think JavaScript works?
  - On a computer?
  - On the web?

_Form groups of 2 or 3, answer these questions together on paper._

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

# Concepts we'll be covering

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

# JavaScript in the wild

There are many programming languages in the world. JavaScript is only one of them.

It is used primarily as the language of the web: every major web browser runs JavaScript.

Look at https://twitter.com. Where is the JavaScript on this site?

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Where do we work with JavaScript?

- Consoles
- Files and Editors
- On the web and off

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Let's get our hands dirty

1. Open up JS Bin https://jsbin.com/
1. Switch the panes to show just `Console`

This is a JavaScript _interpreter_: we can write JavaScript code here, and it will run as soon as we press "Enter".

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# The Building Blocks of JavaScript

Let's explore the basic components of writing JavaScript.

We'll be playing with these as we go - code along and ask questions!

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Basic Math

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

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Data Types

Numbers are just one of JavaScript's _data types_. Another core data type is the String data type, used to store strings of characters (i.e. text).

Strings are surrounded by single or double quotes, `"like this!"`. Try playing with strings, see what you get:

```
"apple"
"apple" + "banana"
"23" + 1
"apple".toUpperCase()
"i like cats".replace("cats", "dogs")
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Variables

_Variables_ are how we assign a name to a _value_ (a piece of data). In JavaScript, they are preceded by the `var` keyword.

Anywhere we can use a value, we can also use a variable. JavaScript will look at the variable, and _evaluate_ the code using the variable's value.

Try these out:

```
var width = 40
width / 2
var height = 25
width + height
var area = width * height
var firstName = "Ada"
var surname = "Lovelace"
var fullName = firstName + " " + surname
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Beyond numbers and strings

Programming languages can work with more than just numbers and strings. There are other kinds of _types_ of data that we can use.

`Boolean` types are simple: they are either `true` or `false`!
`Array` types are for storing collections of things.

```
var isProgrammingFun = true
var answer = false
var countries = ["England", "Thailand", "Brazil"]
var coordinates = [36.42, 129.38]
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# Operators

We've already seen some of the _operators_ in JavaScript: `+`, `-`, `*` (multiply), `/` (divide).

They are called _operators_ because they are used to perform basic operations on one or more value.

Try it! What does each expression _evaluate to_?

```
10 * 3
8 - 2
8 + 10
5 / 6
3 * 3 * 3
"apples" + "oranges"
"zip" - "zip"
```

***

<!-- background: #3e7997 -->
<!-- color: #fff -->
<!-- font: frutiger -->

# FIN

Preview of next session:

- Code analysis
- Explore more concepts
  - control flow
  - iteration
  - functions
- Practice writing small scripts
