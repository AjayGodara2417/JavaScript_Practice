// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from "./countries.js";
import { webtech } from "./webtech.js";
console.log(countries);
console.log(webtech);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
console.log(words);
let arr = words.split(" ");
console.log(arr);
console.log(arr.length);
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (shoppingCart.includes("Mart")) {
  console.log("It already exists");
} else {
  shoppingCart.unshift("Mart");
  console.log(shoppingCart);
}
// add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.includes("Sugar")) {
  console.log("It already exists");
} else {
  shoppingCart.push("Sugar");
  console.log(shoppingCart);
}
// remove 'Honey' if you are allergic to honey
if (shoppingCart.includes("Honey")) {
  let x = shoppingCart.indexOf("Honey");
  shoppingCart.splice(x, 1);
  console.log(shoppingCart);
} else {
  console.log(shoppingCart);
}
// modify Tea to 'Green Tea'
if (shoppingCart.includes("Tea")) {
  let x = shoppingCart.indexOf("Tea");
  shoppingCart.splice(x, 1, "Green Tea");
  console.log(shoppingCart);
} else {
  console.log(shoppingCart);
}
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("ETHIOPIA")) {
  console.log("It exists");
} else {
  countries.push("ETHIOPIA");
  console.log(countries);
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webtech.includes("Saas")) {
    console.log("Sass is a CSS preprocess");
  } else {
    webtech.push("Saas");
    console.log(webtech);
  }

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]