// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// we make variable name and set it to "Dane" as a string 
// we create condition and check if variable name is set to "mary"
//we  check condition if variable is not set to "mary"
//if the condition is true , the outcome will be "hi mary"
//if the condition is not true , the outcome will be "How do you do"
//
//
// OUTCOME:
//the console will print "How do you do"

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// we create a variable  secret and set the value to be empty
//we create a variable and set  the value to be a number 123 
// we check a condition if code is equal to 123
//if condition is true , we set the value of secret to "super " and get the value of code and multiply by two
//we check another condition and check if the value of code is greater than 250
// OUTCOME:
//super will be displayed in the console because code ===123

// CODE:

/* 

let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// we create a variable isStudent and set it to a boolean true
// we create a varibale age and set it to number 34
// we create a variable zip and set it to a number 55407
// we check for a condition if student is true and zip is greater than 8000
// we check for a condition if isStudent is false or age is less than 30
//we check for one condition if student is true 
// we check if none of the condition is true 

// OUTCOME:
// Welcome to prime will be displayed in the console as this is the only true statement 

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/
//FIX - variable names and the value does not match , colorOne is set to red instead of blue
// colorTwo variable is set to blue instead of red 
/* let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
  // outcome 
  // mix is true , the value of colorOne will be purple
//
// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!!'

// CODE:
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/
//FIX 
// the condition checks if temp is set to 40 AND time is greater than 4
// CODE:
/*
let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}


// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

// CODE:
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {`
  console.log('no entry');
} else {
  console.log('enter');
}
*/
//FIX 
// the condition is set incorectly , change the minAge <= age to age is >= minAge
//// CODE:
/*
let age = 21;
const minAge = 21;

if(age >= minAgege) {
  console.log('no entry');
} else {
  console.log('enter');
}
  enter will be displayed in the console 
  */
