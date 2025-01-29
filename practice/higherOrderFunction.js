// Beginner Level Exercises

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'Singapore'];
// Use forEach to print each element in the countries array.
countries.forEach(country => console.log(country))

// Use map to create a new array where each country's name is in uppercase.
const countriesUpper = countries.map((country) => country.toUpperCase());
console.log(countriesUpper);

// Use map to create an array of country name lengths.
const countryLength = countries.map((country) => country.length)
console.log(countryLength)

// Use filter to filter out country names that contain the word "land".
const countryLand = countries.filter((country) => country.includes("land"))
console.log(countryLand);

// Use reduce to sum up all the numbers in the following array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums = numbers.reduce((acc, cur) => acc + cur,0);
console.log(nums);

// Use some to check if there is a country with more than 6 letters.
console.log(countries.some((country) => country.length == 6))

// Use every to check if all country names start with an uppercase letter.
// const allStartWithUppercase = countries.every(country => /^[A-Z]/.test(country));
// console.log(allStartWithUppercase);
const allStartWithUppercase = countries.every(country => country.charAt(0) === country.charAt(0).toUpperCase());
console.log(allStartWithUppercase);

// Use find to return the first country in the array that contains the letter "o".
console.log(countries.find((country) => country.includes("o")))

// Use findIndex to find the index of "Norway" in the countries array.
console.log(countries.findIndex((country) => country == "Norway"))

// Sort the countries array in alphabetical order.
console.log(countries.sort())


// Intermediate Level Exercises
// Chain map, filter, and reduce to find the sum of squared even numbers from numbers array.
const sum = numbers.filter((num) => num % 2 == 0).map((num) => num * num).reduce((acc, cur) => acc + cur,0);
console.log(sum)

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
// Find total product price using map and reduce from the following array:
const totalPrice = products.map((product) => product.price).reduce((acc, cur) => Number(acc) + Number(cur), 0);
console.log(totalPrice)

// Create a function categorizeCountries that returns an array of countries that contain a common pattern (like "land", "ia", "stan").
const categorizeCountries = (pattern) => {
    const pat = countries.filter((country) => country.includes(pattern))
    console.log(pat)
}
// categorizeCountries("land")

// Find the most common first letter used in country names.
const firstLetters = countries.map(country => country.charAt(0));
const letterCounts = firstLetters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

const mostCommonLetter = Object.keys(letterCounts).reduce((a, b) => letterCounts[a] > letterCounts[b] ? a : b);

console.log(mostCommonLetter);
const common = countries.map((country) => country.charAt(0))
console.log(common)

// Create getFirstTenCountries function to return the first ten countries from a list.

// Create getLastTenCountries function to return the last ten countries.

// Create a function countOccurrences that takes an array of strings and returns an object with the count of each string.

// Use sort to order an array of numbers in descending order.

// Use every and some to check if all or some countries in the array have names longer than five letters.

// Implement a function sumOfDigits that takes an array of numbers and returns the sum of all individual digits using map and reduce.


// sumOfDigits([12, 34, 56]); // Output: 21 (1+2+3+4+5+6)



// Advanced Level Exercises
// Find the 10 most spoken languages from a dataset.


// console.log(mostSpokenLanguages(countries, 10));
// Find the 10 most populated countries from a dataset.

// Create a function getStatistics that calculates:

// Mean
// Median
// Mode
// Range
// Variance
// Standard deviation
// Frequency distribution
// Example:
// const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
// console.log(getStatistics(ages));
// Create a function mostFrequentElement that returns the most frequent number in an array.

// Find the highest-rated product from a list using reduce.

// Create a function groupBy that groups an array of objects based on a key.

// Write a function isPalindrome that checks if a word is a palindrome.

// Write a function deepClone that deeply clones an object.

// Create a memoized function that caches the results of expensive function calls.

// Create a debounce function that ensures a function is called only after a specified time interval.