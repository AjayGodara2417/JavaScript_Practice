// Exercises:Level 1
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
const ccd = new Set()
console.log(ccd)

// Create a set containing 0 to 10 using loop
const set0_10 = new Set();
for(let i=0; i<=10; i++){
    set0_10.add(i);
}
console.log(set0_10)

// Remove an element from a set
set0_10.delete(10);
console.log(set0_10)

// Clear a set
set0_10.clear();
console.log(set0_10)

// Create a set of 5 string elements from array
let arr = ["aaa", "aaaaa", "abcd", "ccd", "sfd"];
for (const ele of arr) {
    set0_10.add(ele);
}
console.log(set0_10)

// Create a map of countries and number of characters of a country
const countries = new Map();
const countriesChar = new Map();