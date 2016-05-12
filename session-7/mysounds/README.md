# Project: Web Audio Player

Let's build a web audio player.

We'll walk through the steps piece-by-piece, and in the process we'll cover most of the topics we've discussed in the past 6 sessions.

## Setup

With a pair, load the starter code into a JS Bin.

https://github.com/sepnyc/pd-javascript/tree/master/session-7/mysounds

You'll be writing code inside of the `play()` function.

Let's go over the _purpose_ of this project.

## Get the list of audio files

Create a **variable** called `fileList` and **assign it** to the value `document.querySelector("#fileList")`.

What is the **type** of this variable? **Print out** the result of `typeof fileList` to the console using `console.log()`. Also print out `fileList.constructor` to find out more.

## Get the selected file

Because `fileList` is an `HTMLSelectElement`, it has a list of selected options in the property `selectedOptions`.

Assign the **first item** in the **array** of `selectedOptions` to a variable called `selectedOption`.

Then, get the `value` **property** of the `selectedOption` and assign it to the variable `selectedFile`.

Use `console.log()` to inspect `selectedFile`. What is its **data type**?

## Get the number of repeats

Select the **DOM element** with the id `repeatTimes` (using `document.querySelector()`) and assign it to a variable.

Then, assign the `value` property of the selected element to the variable `noOfRepeats`.

## Repeats needs to be a number

What is the **data type** of the `noOfRepeats` variable?

**Convert** the value of `noOfRepeats` to be of type `Number`. Ensure that it is the correct type.

## Move code for repeats into its own function

**Define** a function called `getRepeats()` that returns the number of repeats as a `Number` **type**.

Move the code responsible for getting the number of repeats into the `getRepeats()` function.

In the **body** of the `play()` function, **call** `getRepeats()` and assign its **return value** to a variable `repeats`.

## Make an audio object

Create a new `Audio` object, passing the `selectedFile` variable **as an argument**.

Assign this new object to a variable called `sound`.

## Play the sound

Call the `play()` **method** of the `sound` **object** to play the audio file.

It should play the currently selected sound. **Test** your code to see if the button works.

## Play the sound repeatedly

Write a **for loop** or a **while loop** to play the sound as many times as signified by `noOfRepeats`.

Test it out by **calling** the `play()` function from the **console** with different numbers in the `<input#repeatTimes>` element.

Also test the **user interface** to see if it works as expected. Why not?

## Ok, something is wrong

Time to do some **debugging**. First, let's **reproduce the error**. Then, let's **isolate it** (remove extra, unaffected code). What is the source of the problem?

After doing this, come up with a few ideas for why the code might not be working the way you want it to. How do you _think_ it is supposed to work? How is it _actually_ working? What could be causing the difference?

## A working repeat

There is a better way to make the sound repeat. Here's a hint: it has to do with using **events**.

If you are really stuck and can't figure out how to make the sound repeat, take a look at one [solution](../mysounds-solution).
