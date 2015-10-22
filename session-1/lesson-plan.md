# Session 1: Programming Language Basics

Lesson Plan for JavaScript Professional Development

##### Learning Outcomes

- Identify and describe the core syntactical elements of JavaScript
- Develop self-learning habits through analysis and experimentation

##### Concepts

- control flow
- iteration
- variables
- functions
- data types

##### Outline

- Introduction, overview of sessions, questions
- Show an example of JavaScript in the "wild" (Twitter: posting tweets, following)
- Explore core features of JavaScript language: data types, conditionals, iteration
- Analyze a basic JavaScript program: what is its purpose, how do we use it, how is it implemented?
- Conclusion, final questions

## Lesson

Total time: ~2.5 hours  
Presentation: [slides](https://swipe.to/2003cq) | [source file](slides.md)

The presentation is designed to cover the full scope of the session. It provides most of the prompts needed to run this session, with the below serving as notes for the instructor.

- Introduction & Orientation (30 min)
  - Introduce self
  - Ask for teachers to introduce themselves, state background and intent for session
  - Go over goals for this session and overall workshop (at least 2 more sessions)
    - Emphasize that these sessions are for general programming training and do not address specific SEP curricula
    - Explain that the priority is for teachers to understand the fundamental concepts, so we may not get to the more "exciting" topics like frameworks
    - Recommend going through supplementary materials to continue learning in the gap between sessions (direct to [list of learning resources](../README.md#resources))
  - Lead discussion on pre-session questions
    - Good opportunity to get a sense of the teachers' experience and understanding
    - Have groups answer questions, discuss their answers
  - Talk about the purpose of JavaScript
    - Why is it useful for teachers & students to know?
    - How is it used in the world?
    - Open a website or two and point out features that are enabled by JS
  - Explain where and how JS is used (show examples)
    - Web consoles (like Chrome console)
    - Files and text editors
    - Online and offline use
- The Building Blocks of JavaScript (50 min)
  - Use JS Bin console to live-code along with teachers
    - Make sure all teachers have a working console before beginning
    - Encourage teachers to ask any questions
  - Describe what a console is and why it is useful
    - Gives us immediate feedback
    - Great place to play and test ideas
  - For each statement, be explicit about the language used to describe code
    - Talking about code is important
    - Encourage teachers to use correct and specific language
  - Deliberately induce errors
    - Point out the utility of errors: help us learn more about how the program works
    - Read and solve an error or two (esp. syntax errors)
- Code Analysis (60 min)
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
- Wrap-up (10 min)
  - Go over post-session questions as group
  - Request feedback, suggestions for future sessions
  - Remind teachers about [list of learning resources](../README.md#resources)
