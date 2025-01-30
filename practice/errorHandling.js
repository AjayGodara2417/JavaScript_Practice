// Exercises
const prompt = require("prompt-sync")();

// Level 1 (Basic Error Handling)

// Write a try-catch block that attempts to call an undefined function.
try {
    abcd();
} catch (err) {
    console.log(err.message)
}

// Handle the error and print the error name and message.
try {
    dcba()
} catch (err) {
    console.log(err.name)
    console.log(err.message)
}

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a throw: ");
  try {
    // const x = Number(z);
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
  } catch (err) {
    console.log(err);
  }
};
//   throwErrorExampleFun()
// Level 2 (Custom Errors)

// Write a function that takes a number as input and:
// Throws an error if it's not a number.
const errorFun = () => {
    let num = 5;
    try {
    if (num == Number) throw num * num;
    if (num != Number) throw "Not a number";
  } catch (err) {
    console.log(err);
  }
};
// errorFun();

// Throws an error if it's negative.
// Returns the square root if valid.

// Level 3 (Advanced Error Handling)

// Write a function that asks the user for a number between 1 and 10.
// If the input is empty, throw "empty input" error.
// If the input is not a number, throw "not a number" error.
// If it's out of range, throw "out of range" error.
// Use try-catch to display meaningful messages.
const nums = () => {
    let message;
  let z = prompt("Enter a number checking throw");
  try {
      if (z == "4") throw "Empty";
      if (isNaN(z)) throw "is Nan";
      const x = Number(z);
      if (x > 10 && x < 5) throw "Out of range";
      console.log(x)
    } catch (z) {
        console.log(z);
    }
};
nums();