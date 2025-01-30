// Exercises on Set and Map

// Level 1: Beginner

// Create an empty set.
const newSet = new Set();

// Create a set containing numbers from 0 to 10 using a loop.
const numbers = new Set();
let i = 0;
while (i <= 10) {
  numbers.add(i);
  i++;
}
// console.log(numbers)

// Remove an element from the set.
numbers.delete(5);

// Clear the set.
numbers.clear();

// Create a set of 5 string elements from an array.
let arr = ["a", "b", "c", "d", "e", "f"];
const setStr = new Set();
for (let i = 0; i < 5; i++) {
  setStr.add(arr[i]);
}
// console.log(setStr)

// Create a map of countries with the number of characters in their names.
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const str = new Map();
countries.forEach((country) => {
  str.set(country, country.length);
});
console.log(str);
// console.log(countryMap)

// Level 2: Intermediate

// Find the union of two sets.
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];
let C = new Set(c);
console.log(C);

// Find the intersection of a and b.
let B = new Set(b);
let D = a.filter((num) => B.has(num))
console.log(D)

// Find the difference between a and b.
let e = a.filter((num) => !B.has(num))
let E = new Set(e)
console.log(E)

// Level 3: Advanced
const countriesData = [
    { name: "Finland", languages: ["Finnish", "Swedish"] },
    { name: "Sweden", languages: ["Swedish"] },
    { name: "Norway", languages: ["Norwegian"] },
    { name: "Denmark", languages: ["Danish"] },
    { name: "Iceland", languages: ["Icelandic"] },
    { name: "Canada", languages: ["English", "French"] },
    { name: "Belgium", languages: ["Dutch", "French", "German"] },
    { name: "Switzerland", languages: ["German", "French", "Italian", "Romansh"] },
    { name: "Nigeria", languages: ["English"] },
    { name: "United States", languages: ["English"] },
    { name: "Mexico", languages: ["Spanish"] },
    { name: "Brazil", languages: ["Portuguese"] },
    { name: "Argentina", languages: ["Spanish"] },
    { name: "Russia", languages: ["Russian"] },
    { name: "China", languages: ["Chinese"] },
    { name: "India", languages: ["Hindi", "English"] },
    { name: "South Africa", languages: ["Afrikaans", "English", "Zulu", "Xhosa"] },
    { name: "Egypt", languages: ["Arabic"] },
    { name: "Morocco", languages: ["Arabic", "Berber"] },
    { name: "Kenya", languages: ["Swahili", "English"] }
];
// How many unique languages are there in the countries dataset?
const lang = [];
countriesData.forEach((country) => {
    country.languages.forEach(language => {
        lang.push(language)
    })
})
const langUnique = new Set(lang);

console.log(langUnique)

// Use the countries data to find the 10 most spoken languages.
const languageCount = {};
countriesData.forEach(country => {
    country.languages.forEach(language => {
        if (languageCount[language]) {
            languageCount[language]++;
        } else {
            languageCount[language] = 1;
        }
    });
});

const mostSpokenLanguages = Object.entries(languageCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([language, count]) => ({ [language]: count }));

// console.log(mostSpokenLanguages);

// Use the countries data to find the 10 most spoken languages.
// console.log(mostSpokenLanguages(countries, 10));
// [
//   { English: 91 },
//   { French: 45 },
//   { Arabic: 25 },
//   { Spanish: 24 },
//   { Russian: 9 },
//   { Portuguese: 9 },
//   { Dutch: 8 },
//   { German: 7 },
//   { Chinese: 5 },
//   { Swahili: 4 }
// ]
