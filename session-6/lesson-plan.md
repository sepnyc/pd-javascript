# Session 6: JavaScript and the Web

Lesson Plan for JavaScript Professional Development

##### Learning Outcomes

- Write JavaScript that changes a web page.
- Render content to a user interface (UI) in HTML with JavaScript.
- Delay code execution in the browser.
- Explain the purposes of and differences between HTML, CSS, and JavaScript.

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

### Introduction & Review (30 min)
- Warm up: review last session (20 min)
  1. Work in pairs or groups of three
  1. Open up project code ([session-4/makeGame-rachel.js](../session-4/makeGame-rachel.js))
  1. Go through the file and run the code in your "brain simulators"
  1. Take note of places in the code where you have questions
  1. After 10 min, come back together and discuss questions
- Introduction: JavaScript in the Browser (10 min)
  - Discuss questions: what is HTML? what is CSS? how does a browser "read" them?
    - Analogy: browsers vs. word processor programs (content = HTML, styles = CSS)
  - Discuss questions: what is the role of JavaScript in relation to HTML and CSS? how does a browser "read" a JavaScript file?
    - Analogy: browsers vs. spreadsheet programs (formulas = JS)

### Create a multi-file, interactive game (110 min)
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
