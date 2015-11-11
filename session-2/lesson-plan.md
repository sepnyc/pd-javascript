# Session 2: Programming Language Basics

Lesson Plan for JavaScript Professional Development

##### Learning Outcomes

- Identify and describe the core syntactical elements of JavaScript
- Develop self-learning habits through analysis and experimentation

##### Concepts

- control flow
- iteration
- functions

##### Outline

- Morning Lesson
  - Introduction & Review (15 min)
  - Code Analysis (30 min)
  - The Building Blocks of JavaScript (continued) (70 min)
  - Code Analysis Reflection (25 min)
  - Wrap-up (10 min)
- Afternoon Project
  - Go through JS fundamentals course on [Codecademy](https://www.codecademy.com/learn/javascript)
  - Or work on project of teacher's choice

## Morning Lesson

Total time: ~2.5 hours  
Presentation: [slides][s2-slides] | [source file](slides.md)

The presentation is designed to cover the full scope of the session. It provides most of the prompts needed to run this session, with the below serving as notes for the instructor.

- Introduction & Review (15 min)
  - Review goals for this session and overall workshop
    - Emphasize that these sessions are for general programming training and do not address specific SEP curricula
    - Explain that the priority is for teachers to understand the fundamental concepts, so we may not get to the more "exciting" topics like frameworks
    - Recommend going through supplementary materials to continue learning in the gap between sessions (direct to [list of learning resources](../README.md#resources))
  - Introduce new structure
    - Morning seminar
    - Afternoon practice
- Code Analysis (30 min)
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
- The Building Blocks of JavaScript (continued) (70 min)
  - Use JS Bin console to live-code along with teachers
    - Make sure all teachers have a working console before beginning
    - Encourage teachers to ask any questions
  - For each statement, be explicit about the language used to describe code
    - Talking about code is important
    - Encourage teachers to use correct and specific language
  - Deliberately induce errors
    - Point out the utility of errors: help us learn more about how the program works
    - Read and solve an error or two (esp. syntax errors)
- Code Analysis Reflection (25 min)
  - Revisit function and apply concepts from "Building Blocks"
  - How & where are the following concepts applied in the example?
    - data types
    - variables
    - operators
    - control flow
    - iteration
    - functions
- Wrap-up (10 min)
  - Go over post-session questions as group
  - Request feedback, suggestions for future sessions
  - Explain afternoon session
  - Remind teachers about [list of learning resources](../README.md#resources)

[s2-slides]:https://swipe.to/3534fx
