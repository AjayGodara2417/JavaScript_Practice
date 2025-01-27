// Exercises: Level 1
const countries = ["Finland", "Sweden", "Eden", "Denmark", "Norway", "Ac", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];
// Explain the difference between forEach, map, filter, and reduce.
// Define a callback function before you use it in forEach, map, filter or reduce.
// const callback = () => {
//     console.log(nam);
// }

// Use forEach to console.log each country in the countries array.
// countries.forEach(function (nam) {
// console.log(nam)
// })
// countries.forEach((nam) => console.log(nam))

// Use forEach to console.log each name in the names array.
// names.forEach((nam) => console.log(nam))

// Use forEach to console.log each number in the numbers array.
// numbers.forEach((num) => console.log(num))

// Use map to create a new array by changing each country to uppercase in the countries array.
// countries.forEach((element) => console.log(element.toUpperCase()))
// const newCountries = countries.map((element) => console.log(element.toUpperCase()))

// Use map to create an array of countries length from countries array.
// const countLength = countries.map((element, index) => {
//     console.log(index);
//     // countLength.push(index)
// })
// console.log(countLength)

// Use map to create a new array by changing each number to square in the numbers array
// const sq = numbers.map((num) => num * 2)
// console.log(sq)

// Use map to change to each name to uppercase in the names array
// const upper = names.map((nam) => console.log(nam.toUpperCase()))

// Use map to map the products array to its corresponding prices.
// const pr = products.map((product) => console.log(product.price))

// Use filter to filter out countries containing land.
const countryland = countries.filter((country) => country.includes("land"));
// console.log(countryland);

// Use filter to filter out countries having six character.
const six = countries.filter((country) => (country.length == 6))
// console.log(six)

// Use filter to filter out countries containing six letters and more in the country array.
const morethansix = countries.filter((country) => (country.length >= 6))
// console.log(morethansix)

// Use filter to filter out country start with 'E';
const E = countries.filter((country) => (country.charAt(0) == "E"))
    // {
    // let first = country.charAt(0);
    // if (first == "E") {
    //     console.log(country)
    // }
// })
// console.log(E)

// Use filter to filter out only prices with values.
const pr = products.filter((element) => (element.price > 0))
// console.log(pr)

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = () => {
    let arr = [1,2,3,"Ajay", "Godara"]
    const str = arr.map((ele) => console.log(typeof ele == typeof("Str")))
    // const str = arr.filter((ele) => {
    //     if(typeof(ele) === "string"){
    //         console.log(ele)
    //     }
    // })
}
// getStringLists()

// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc+cur, 0)
// console.log(sum)

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const con = countries.reduce((acc, cur) => acc +" "+cur);
// console.log(`${con} are north European countries`)

// Explain the difference between some and every

// Use some to check if some name's length greater than seven in names array
const som = names.some((nam) => nam.length >= 7)
console.log(som)

// Use every to check if all the countries contain the word land
const evr = countries.every((country) => country.includes("land"))
console.log(evr)

// Explain the difference between find and findIndex.

// Use find to find the first country containing only six letters in the countries array
const fir = countries.find((country) => country.length == 6)
console.log(fir)

// Use findIndex to find the position of the first country containing only six letters in the countries array
const ffir = countries.findIndex((country) => country.length == 6)
console.log(ffir)

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const nfir = countries.findIndex((country) => country == "Russia")
console.log(nfir)