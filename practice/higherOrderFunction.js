// Beginner Level Exercises

const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
  "Singapore",
  "Bharat",
  "Newzeland",
  "America",
  "Ukrain",
  "Russia",
  "Nepal",
  "Bhutan",
  "Finland",
  "Sweden",
  "Denmark",
];
// Use forEach to print each element in the countries array.
countries.forEach((country) => console.log(country));

// Use map to create a new array where each country's name is in uppercase.
const countriesUpper = countries.map((country) => country.toUpperCase());
console.log(countriesUpper);

// Use map to create an array of country name lengths.
const countryLength = countries.map((country) => country.length);
console.log(countryLength);

// Use filter to filter out country names that contain the word "land".
const countryLand = countries.filter((country) => country.includes("land"));
console.log(countryLand);

// Use reduce to sum up all the numbers in the following array:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nums = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(nums);

// Use some to check if there is a country with more than 6 letters.
console.log(countries.some((country) => country.length == 6));

// Use every to check if all country names start with an uppercase letter.
// const allStartWithUppercase = countries.every(country => /^[A-Z]/.test(country));
// console.log(allStartWithUppercase);
const allStartWithUppercase = countries.every(
  (country) => country.charAt(0) === country.charAt(0).toUpperCase()
);
console.log(allStartWithUppercase);

// Use find to return the first country in the array that contains the letter "o".
console.log(countries.find((country) => country.includes("o")));

// Use findIndex to find the index of "Norway" in the countries array.
console.log(countries.findIndex((country) => country == "Norway"));

// Sort the countries array in alphabetical order.
console.log(countries.sort());

// Intermediate Level Exercises
// Chain map, filter, and reduce to find the sum of squared even numbers from numbers array.
const sum = numbers
  .filter((num) => num % 2 == 0)
  .map((num) => num * num)
  .reduce((acc, cur) => acc + cur, 0);
// console.log(sum)

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Find total product price using map and reduce from the following array:
const totalPrice = products
  .map((product) => product.price)
  .reduce((acc, cur) => Number(acc) + Number(cur), 0);
// console.log(totalPrice)

// Create a function categorizeCountries that returns an array of countries that contain a common pattern (like "land", "ia", "stan").
const categorizeCountries = (pattern) => {
  const pat = countries.filter((country) => country.includes(pattern));
  console.log(pat);
};
// categorizeCountries("land")

// Find the most common first letter used in country names.
const firstLetters = countries.map((country) => country.charAt(0));
const letterCounts = firstLetters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});

const mostCommonLetter = Object.keys(letterCounts).reduce((a, b) =>
  letterCounts[a] > letterCounts[b] ? a : b
);

// console.log(mostCommonLetter);
const common = countries.map((country) => country.charAt(0));
// console.log(common)

// Create getFirstTenCountries function to return the first ten countries from a list.
const getFirstTenCountries = () => {
  console.log(countries.slice(0, 10));
};
// getFirstTenCountries()

// Create getLastTenCountries function to return the last ten countries.
const getLastTenCountries = () => {
  console.log(countries.slice(-10));
};
// getLastTenCountries()

// Create a function countOccurrences that takes an array of strings and returns an object with the count of each string.
const countOccurrences = (arr) => {
  return arr.reduce((acc, str) => {
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});
};
const occurrences = countOccurrences(countries);
// console.log(occurrences);

// const countOccurrences = () => {
  // countries.map((country) => country.sort((a,b), a - b))
// };

// Use sort to order an array of numbers in descending order.
let num = [1,3,5,9,8,7,6,21]
// console.log(num.sort((a,b) => b - a))

// Use every and some to check if all or some countries in the array have names longer than five letters.
// console.log(countries.every((country) => country.length >= 5))
// console.log(countries.some((country) => country.length >= 5))

// Implement a function sumOfDigits that takes an array of numbers and returns the sum of all individual digits using map and reduce.
const sumOfDigits = (arr) => {
  return arr
    .map((num) => num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0))
    .reduce((acc, cur) => acc + cur, 0);
}
// console.log(sumOfDigits(num))
// sumOfDigits([12, 34, 56]); // Output: 21 (1+2+3+4+5+6)

// Advanced Level Exercises
const countriesData = [
  { name: "Finland", language: "Finnish", capital: "Helsinki", population: 5527573, area: 338424 },
  { name: "Sweden", language: "Swedish", capital: "Stockholm", population: 10327589, area: 450295 },
  { name: "Denmark", language: "Danish", capital: "Copenhagen", population: 5818553, area: 43094 },
  { name: "Norway", language: "Norwegian", capital: "Oslo", population: 5421241, area: 385207 },
  { name: "Iceland", language: "Icelandic", capital: "Reykjavik", population: 366425, area: 103000 },
  { name: "Singapore", language: "English", capital: "Singapore", population: 5685807, area: 728 },
  { name: "India", language: "Hindi", capital: "New Delhi", population: 1393409038, area: 3287263 },
  { name: "New Zealand", language: "English", capital: "Wellington", population: 5084300, area: 268838 },
  { name: "United States", language: "English", capital: "Washington, D.C.", population: 331893745, area: 9833520 },
  { name: "Ukraine", language: "Ukrainian", capital: "Kyiv", population: 41732779, area: 603500 },
  { name: "Russia", language: "Russian", capital: "Moscow", population: 145912025, area: 17098242 },
  { name: "Nepal", language: "Nepali", capital: "Kathmandu", population: 29609623, area: 147181 },
  { name: "Bhutan", language: "Dzongkha", capital: "Thimphu", population: 771608, area: 38394 },
  { name: "China", language: "Chinese", capital: "Beijing", population: 1444216107, area: 9596961 },
  { name: "Japan", language: "Japanese", capital: "Tokyo", population: 125836021, area: 377975 },
  { name: "South Korea", language: "Korean", capital: "Seoul", population: 51780579, area: 100210 },
  { name: "Australia", language: "English", capital: "Canberra", population: 25687041, area: 7692024 },
  { name: "Canada", language: "English", capital: "Ottawa", population: 38005238, area: 9984670 },
  { name: "Brazil", language: "Portuguese", capital: "Brasília", population: 213993437, area: 8515767 },
  { name: "Argentina", language: "Spanish", capital: "Buenos Aires", population: 45605823, area: 2780400 },
  { name: "Mexico", language: "Spanish", capital: "Mexico City", population: 130262216, area: 1964375 },
  { name: "Germany", language: "German", capital: "Berlin", population: 83240525, area: 357022 },
  { name: "France", language: "French", capital: "Paris", population: 67391582, area: 551695 },
  { name: "United Kingdom", language: "English", capital: "London", population: 68207114, area: 243610 },
  { name: "Italy", language: "Italian", capital: "Rome", population: 59554023, area: 301340 },
  { name: "Spain", language: "Spanish", capital: "Madrid", population: 47351567, area: 505992 },
  { name: "Portugal", language: "Portuguese", capital: "Lisbon", population: 10305564, area: 92212 },
  { name: "Netherlands", language: "Dutch", capital: "Amsterdam", population: 17441139, area: 41543 },
  { name: "Belgium", language: "Dutch", capital: "Brussels", population: 11589623, area: 30528 },
  { name: "Switzerland", language: "German", capital: "Bern", population: 8654622, area: 41284 },
  { name: "Austria", language: "German", capital: "Vienna", population: 8917205, area: 83879 },
  { name: "Poland", language: "Polish", capital: "Warsaw", population: 38386000, area: 312696 },
  { name: "Czech Republic", language: "Czech", capital: "Prague", population: 10708981, area: 78865 },
  { name: "Hungary", language: "Hungarian", capital: "Budapest", population: 9769526, area: 93028 },
  { name: "Greece", language: "Greek", capital: "Athens", population: 10423054, area: 131957 },
  { name: "Turkey", language: "Turkish", capital: "Ankara", population: 84339067, area: 783356 },
  { name: "Saudi Arabia", language: "Arabic", capital: "Riyadh", population: 34813871, area: 2149690 },
  { name: "Iran", language: "Persian", capital: "Tehran", population: 85028760, area: 1648195 },
  { name: "South Africa", language: "English", capital: "Pretoria", population: 59308690, area: 1221037 },
  { name: "Egypt", language: "Arabic", capital: "Cairo", population: 104258327, area: 1002450 },
  { name: "Nigeria", language: "English", capital: "Abuja", population: 206139589, area: 923768 },
  { name: "Kenya", language: "Swahili", capital: "Nairobi", population: 53771296, area: 580367 },
  { name: "Ethiopia", language: "Amharic", capital: "Addis Ababa", population: 114963588, area: 1104300 },
  { name: "Ghana", language: "English", capital: "Accra", population: 31072940, area: 238533 },
  { name: "Uganda", language: "English", capital: "Kampala", population: 45741000, area: 241038 },
  { name: "Tanzania", language: "Swahili", capital: "Dodoma", population: 59734218, area: 945087 },
  { name: "Algeria", language: "Arabic", capital: "Algiers", population: 43851044, area: 2381741 },
  { name: "Morocco", language: "Arabic", capital: "Rabat", population: 36910560, area: 446550 },
  { name: "Sudan", language: "Arabic", capital: "Khartoum", population: 43849260, area: 1886068 },
  { name: "Angola", language: "Portuguese", capital: "Luanda", population: 32866272, area: 1246700 },
];
// Find the ten most spoken languages from a dataset.
const mostSpokenLanguages = (data, topN) => {
  const languageCounts = data.reduce((acc, country) => {
    acc[country.language] = (acc[country.language] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([language, count]) => ({ language, count }));
};

console.log(mostSpokenLanguages(countriesData, 10));

// const mostSpokenLanguages = () => {
//   countriesData.sort(())
// }
// console.log(mostSpokenLanguages(countries, 10));

// Find the 10 most populated countries from a dataset.
const mostPopulated = (data, top) => {
  const popCount = countriesData.reduce((acc, country) => {
    acc[country.population] = (acc[country.population] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(popCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, top)
    .map(([population, count]) => ({population, count}))
}
// console.log(mostPopulated(countriesData, 10))

// Create a function getStatistics that calculates:
// Mean
// const mean = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// // Median
// const median = (arr) => {
//   const sorted = arr.slice().sort((a, b) => a - b);
//   const mid = Math.floor(sorted.length / 2);
//   return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
// };

// // Mode
// const mode = (arr) => {
//   const frequency = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
//   const maxFreq = Math.max(...Object.values(frequency));
//   return Object.keys(frequency).filter((key) => frequency[key] === maxFreq);
// };

// // Range
// const range = (arr) => Math.max(...arr) - Math.min(...arr);

// // Variance
// const variance = (arr) => {
//   const meanValue = mean(arr);
//   return arr.reduce((acc, val) => acc + (val - meanValue) ** 2, 0) / arr.length;
// };

// // Standard deviation
// const standardDeviation = (arr) => Math.sqrt(variance(arr));

// // Frequency distribution
// const frequencyDistribution = (arr) => {
//   const frequency = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
//   return Object.entries(frequency).map(([value, count]) => ({ value, count }));
// };
// Example:
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
// console.log(getStatistics(ages));

// Create a function mostFrequentElement that returns the most frequent number in an array.

// Find the highest-rated product from a list using reduce.

// Create a function groupBy that groups an array of objects based on a key.

// Write a function isPalindrome that checks if a word is a palindrome.

// Write a function deepClone that deeply clones an object.

// Create a memoized function that caches the results of expensive function calls.

// Create a debounce function that ensures a function is called only after a specified time interval.