# Session 1: Programming Language Basics

Lesson Plan for JavaScript Professional Development

##### Learning Outcomes

- Identify and describe the core syntactical elements of JavaScript
- Create small programs using JavaScript

##### Concepts

- control flow
- iteration
- variables
- functions
- types

##### Outline

- Introduction, overview of sessions, questions
- Show an example of JavaScript in the "wild" (Twitter: posting tweets, following)
- Analyze a basic JavaScript program: what is its purpose, how do we use it, how is it implemented?
- Define project for the day: grade calculator (input series of grades, calculate average with letter grade)
- Work through project together in small steps, discussing errors as they arise
- Conclusion, final questions

## Lesson

Total time: ~2.5 hours  
Presentation: [slides](https://swipe.to/2003cq) | [source file](slides.md)

The presentation is designed to cover the full scope of the session. It provides most of the prompts needed to run this session, with the below serving as notes for the instructor.

- Introduction & Orientation (20 min)
  - Introduce self
  - Ask for teachers to introduce themselves, state background and intent for session
  - Go over goals for this session and overall workshop (at least 2 more sessions)
    - Emphasize that these sessions are intended for teachers with little to no programming knowledge
    - We will be moving quickly given the time constraints, with a priority for content exposure over deep analysis
    - Recommend going through supplementary materials to continue learning in the gap between sessions (direct to [list of learning resources](../README.md#resources))
  - Lead discussion on pre-session questions
    - Good opportunity to get a sense of the teachers' experience and understanding
  - Talk about the purpose of JavaScript
    - Why is it useful for teachers & students to know?
    - How is it used in the world?
    - Open a website or two and point out features that are enabled by JS
- Starting with the Basics (20 min)
  - Use JS Bin console to live-code along with teachers
    - Make sure all teachers have a working console before beginning
    - Encourage teachers to ask any questions
  - Describe what a console is and why it is useful
    - Gives us immediate feedback
    - Great place to play and test ideas
  - Deliberately induce errors
    - Point out the utility of errors: help us learn more about how the program works
    - Read and solve an error or two (esp. syntax errors)
- Code Analysis (40 min)
  - Setup: put teachers into pairs, use only one computer between the two
    - Open both JavaScript and Console tab in JS Bin
  - Introduce analysis as scientific process: observe a phenomenon and deduce knowledge by running controlled experiments
    - Have each pair copy down the function and make sure they have a working version
  - Go through one experiment together
    - Question: what is the purpose of the variable `numberOfEvens`?
    - Hypothesis: changing the initial value of `numberOfEvens` will affect the number returned by the same amount
    - Process: open a new JS Bin and copy the original function (to serve as control), then change code, run, and observe results
    - Observation: cannot see anything without `console.log()`; inspect results and stages
    - Conclusion: `numberOfEvens` keeps a tally of evens, and so its initial value must be 0 because no numbers have been counted yet
  - Have teacher pairs define and go through experiments on their own
  - Re-group, share knowledge
    - What kinds of experiments did you run? What did you learn?
  - Go over annotated function, map concepts to their implementation
- Project (60 min)
  - Setup: rotate pairs
    - Open both JavaScript and Console tab in JS Bin
  - Define project purpose: grading calculator
  - Identify development process: building a simple program and then slowly making it more complex
  - Go through 10-min development cycles
    - Define goal for cycle (write test for goal)
    - Teachers code in pairs to solve goal
    - Re-group and show example solutions (in [project](project/) directory)
- Wrap-up (10 min)
  - Go over post-session questions as group
  - Request feedback, suggestions for future sessions
  - Remind teachers about [list of learning resources](../README.md#resources)
