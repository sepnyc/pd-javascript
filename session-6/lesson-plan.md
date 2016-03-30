# Session 6: JavaScript and the Web

Lesson Plan for JavaScript Professional Development

##### Learning Outcomes

- Write JavaScript in files that changes a web page.
- Write JavaScript in a browser console that changes a web page.
- Render content to a user interface (UI) in HTML with JavaScript.
- Delay code execution in the browser.

In this lesson, we'll continue exploring how to integrate JavaScript into a web page. Using the memory game we worked on in previous lessons as a base, we'll see how JavaScript can be used in a browser to manipulate the elements on the page, respond to user input, render text, and set "timeouts" for delayed execution.

##### Concepts

- tree structure
- document object model (DOM)
- user input
- time-delays

##### Outline

- Introduction & Review (30 min)
- Create a multi-file, interactive game (110 min)
- Wrap-up (10 min)

## Morning Lesson

Total time: ~2.5 hours

### Introduction (10 min)
- Plan for the day
  - Start by warming up with a bunch of JS + browser exercises
    - This will get us re-acquainted with the browser and JavaScript
    - And then we can talk about the DOM
  - Then, we'll continue building the Simon Says memory game from last time


### JS on the Web Exercises (40 min)
1. Open the `./game/page.html` web page in Google Chrome
1. Open the web developer console
1. Using only JavaScript in the console, accomplish the following tasks:
  1. Change the background color of the page to `purple`
  1. Find the first `<h1>` element and assign to a variable
  1. Change the text color of the first `<h1>` element to `#eee`
  1. Change the font family of the element with id `message` to `monospace`
  1. Remove the element with id `message` from the page
  1. Move the `<span#success>` element "into" the `<p#message>` element (i.e. make it a child of the `<p#message>` element)
  1. Move the `<span#failure>` element into the `<p#message>` element
  1. Hide the `<span#success>` element
  1. Hide the `<span#failure>` element
  1. Hide the `<span#begin>` element
  1. Show the `<span#begin>` element
  1. Add an `onclick` event handler to the `<button>` that hides the `<span#default>` and shows the `<span#begin>` element

### Create a multi-file, interactive game (90 min)
- Start building the UI for a Simon Says game (see the [/game](./game/) directory)
- First task is to replicate the files in JS Bin
  - HTML file goes in the HTML tab, and so forth
- The goal for today is to solve the _pattern display_ component of the game
  - User input will come later, it's too complex for now
- As a group, code each of the `TODO` sections of `game.js`

### Wrap-up (10 min)
- What was important?
- What was useful?
- What can we do better next time?
