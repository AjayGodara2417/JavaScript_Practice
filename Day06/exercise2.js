// Exercises: Level 2
// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.
// '#ee33df'

// Write a script which generates a random rgb color number.
// rgb(240,180,80)
const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
console.log(`rgb:(${r}, ${g}, ${b})`);

// Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let arr = [];
for (let i = 0; i < countries.length; i++) {
  let newcount = countries[i].toUpperCase();
  arr.push(newcount);
}
console.log(arr);

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// for (let i=0; i<=countries.length; i++) {
//     let count = 0;
//     for (let j=0; j<=i.length; j++) {
//         count++;
//     } console.log(count);
// }

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    console.log(countries[i]);
  }
}
// ['Finland','Ireland', 'Iceland']

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia")) {
      console.log(countries[i]);
    }
  }
  // ['Albania', 'Bolivia','Ethiopia']

// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let tech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let items of tech) {
    console.log(items);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ['banana', 'orange', 'mango', 'lemon'];
for (let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i])
    // let x = fruits.pop(i);
    // console.log(x)
    // fruits.unshift(fruits[x]);
}

// Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
for (let j=0; j<=fullStack.length-1; j++) {
    for (let i=0; i<=arr[1].length; i++) {
        console.log(tech[i]);
    }
}