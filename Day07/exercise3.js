const prompt = require("prompt-sync")();
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
let n = prompt("Enter number of charaters");
let m = prompt("Number of ids");
let userId = "";
let char_list =
  "A1BC2DEF3GH5IJKLMNO4PQR6STU9VWX8YZ7abc0defghijklmnopqrstuvwxyz";
const userIdGeneratorByUser = () => {
  for (j=0; j < m; j++){
    for (let i = 0; i < n; i++) {
        let num = Math.floor(Math.random() * 10);
        userId += char_list.charAt(num);
      }
      console.log(userId);
  }
};
userIdGeneratorByUser();

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgb = (`${r}, ${g}, ${b}`);
  console.log(`rgb(${rgb})`)
}
rgbColorGenerator();
// rgbColorGenerator()
// rgb(125,244,255)

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let x = prompt("Enter a hexadecimal");
const arrayOfHexaColors = () => {
  let arr = [];
  for (let i=0; i<x; i++) {
    let num = Math.floor(Math.random() * 16777215).toString(16);
    arr.push(`#${num}`);
  }
  return arr;
}
console.log(arrayOfHexaColors())

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let numRgbColors = prompt("Number of RGB colors");
const arrayOfRgbColors = () => {
  let arr = [];
  for (let i=0; i<numRgbColors; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = (`rgb(${r}, ${g}, ${b})`);
    arr.push(rgb);
  }
  return arr;
}
console.log(arrayOfRgbColors())

 // Write a function generateRandomUserIp which generates a random user ip.
 const generateRandomUserIp = () => {
  let ip = '';
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * 256);
    ip += `${num}.`;
  }
  return ip.slice(0, -1);
 }
 console.log(`Your I.P. is: ${generateRandomUserIp()}`); // 192.168.1.112

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// Write a function generateColors which can generate any number of hexa or rgb colors.

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const shuffleArray = () => {
  let newarr = [];
  for (let i=0; i<arr.length; i++) {
    let num = Math.floor(Math.random() * arr.length);
    let newchar = arr.slice(num, num+1);
    newarr.push(newchar);
  } console.log(newarr)
}
// let arr = [1,2,3,4,5];
// let z = arr.length;
// const shuffleArray = () => {
//   let newarr = [];
//   for (let i=0; i<arr.length; i++) {
//     let num = Math.floor(Math.random() * z);
//     let newchar = arr.slice(num, num+1);
//     newarr.push(newchar);
//   } console.log(newarr)
// }
// shuffleArray(arr);

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
let wholeNum = prompt("Enter a number");
let res = 1;
for (let i=2; i<=wholeNum; i++) {
  res *= i;
  console.log(res)
}
console.log(wholeNum);

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not

// Call your function sum, it takes any number of arguments and it returns the sum.
const sum = () => {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i]!== 'number') {
      return 'Error: All arguments must be numbers';
    }
    sum += arguments[i];
  }
  return sum;
}

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
const modifyArray = () => {
  let arr = ['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
  if (arr.length < 5) {
    return 'Item not found';
  }
  arr[4] = arr[4].toUpperCase();
  return arr;
}

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Write a function called isPrime, which checks if a number is prime number.

// Write a functions which checks if all items are unique in the array.

// Write a function which checks if all the items of the array are the same data type.

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
const reverseCountries = (countries) => {
  let newCountries = [...countries];
  return newCountries.reverse();
}

console.log(reverseCountries(countries));