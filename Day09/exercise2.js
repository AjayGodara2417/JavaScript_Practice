// Exercises: Level 2
// const countries = ["Finland", "Sweden", "Eden", "Denmark", "Norway", "Ac", "Iceland"];
const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 78014,
    flag: "https://restcountries.eu/data/and.svg",
    currency: "Euro",
  },
  {
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 25868000,
    flag: "https://restcountries.eu/data/ago.svg",
    currency: "Angolan kwanza",
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://restcountries.eu/data/aia.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Antarctica",
    capital: "",
    languages: ["English", "Russian"],
    population: 1000,
    flag: "https://restcountries.eu/data/ata.svg",
    currency: "Australian dollar",
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 86295,
    flag: "https://restcountries.eu/data/atg.svg",
    currency: "East Caribbean dollar",
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish", "Guaraní"],
    population: 43590400,
    flag: "https://restcountries.eu/data/arg.svg",
    currency: "Argentine peso",
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian", "Russian"],
    population: 2994400,
    flag: "https://restcountries.eu/data/arm.svg",
    currency: "Armenian dram",
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    languages: ["Dutch", "(Eastern) Punjabi"],
    population: 107394,
    flag: "https://restcountries.eu/data/abw.svg",
    currency: "Aruban florin",
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 24117360,
    flag: "https://restcountries.eu/data/aus.svg",
    currency: "Australian dollar",
  },
  {
    name: "Austria",
    capital: "Vienna",
    languages: ["German"],
    population: 8725931,
    flag: "https://restcountries.eu/data/aut.svg",
    currency: "Euro",
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    languages: ["Azerbaijani"],
    population: 9730500,
    flag: "https://restcountries.eu/data/aze.svg",
    currency: "Azerbaijani manat",
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 378040,
    flag: "https://restcountries.eu/data/bhs.svg",
    currency: "Bahamian dollar",
  },
  {
    name: "Bahrain",
    capital: "Manama",
    languages: ["Arabic"],
    population: 1404900,
    flag: "https://restcountries.eu/data/bhr.svg",
    currency: "Bahraini dinar",
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    languages: ["Bengali"],
    population: 161006790,
    flag: "https://restcountries.eu/data/bgd.svg",
    currency: "Bangladeshi taka",
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    languages: ["English"],
    population: 285000,
    flag: "https://restcountries.eu/data/brb.svg",
    currency: "Barbadian dollar",
  },
  {
    name: "Belarus",
    capital: "Minsk",
    languages: ["Belarusian", "Russian"],
    population: 9498700,
    flag: "https://restcountries.eu/data/blr.svg",
    currency: "New Belarusian ruble",
  },
  {
    name: "Belgium",
    capital: "Brussels",
    languages: ["Dutch", "French", "German"],
    population: 11319511,
    flag: "https://restcountries.eu/data/bel.svg",
    currency: "Euro",
  },
  {
    name: "Belize",
    capital: "Belmopan",
    languages: ["English", "Spanish"],
    population: 370300,
    flag: "https://restcountries.eu/data/blz.svg",
    currency: "Belize dollar",
  },
  {
    name: "Benin",
    capital: "Porto-Novo",
    languages: ["French"],
    population: 10653654,
    flag: "https://restcountries.eu/data/ben.svg",
    currency: "West African CFA franc",
  },
  {
    name: "Bermuda",
    capital: "Hamilton",
    languages: ["English"],
    population: 61954,
    flag: "https://restcountries.eu/data/bmu.svg",
    currency: "Bermudian dollar",
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    languages: ["Dzongkha"],
    population: 775620,
    flag: "https://restcountries.eu/data/btn.svg",
    currency: "Bhutanese ngultrum",
  },
  {
    name: "Bolivia (Plurinational State of)",
    capital: "Sucre",
    languages: ["Spanish", "Aymara", "Quechua"],
    population: 10985059,
    flag: "https://restcountries.eu/data/bol.svg",
    currency: "Bolivian boliviano",
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    capital: "Kralendijk",
    languages: ["Dutch"],
    population: 17408,
    flag: "https://restcountries.eu/data/bes.svg",
    currency: "United States dollar",
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    languages: ["Bosnian", "Croatian", "Serbian"],
    population: 3531159,
    flag: "https://restcountries.eu/data/bih.svg",
    currency: "Bosnia and Herzegovina convertible mark",
  },
];
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
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const res = products.filter((product) => product.price > 0);
// const sum = res.reduce((products.acc, products.cur){
//     products.price + products.cur;
// })
// console.log(sum)

// Find the sum of price of products using only reduce reduce(callback))
const sum = products.reduce((acc, cur) => acc + Number(cur.price), 0);
// console.log(sum)

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
let str = 'land' || 'ia' || 'island' || 'stan';
// const fin = countries.filter((country) => country.includes("land"));
const fin = countries.filter((country) => country.name.includes("land"));
console.log(fin);

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// Declare a getFirstTenCountries function which which returns the first ten countries in the countries array using map, filter, reduce
const getFirstTenCountries = (countries) => {
  return countries
    .map((country, index) => ({ country, index }))
    .filter((item) => item.index < 10)
    .reduce((acc, item) => {
      acc.push(item.country);
      return acc;
    }, []);
};
// console.log(getFirstTenCountries(countries));

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array using map, filter, reduce
function getLastTenCountries(countries) {
  return countries
    .map((country, index) => ({ country, index }))
    .filter((item) => item.index >= countries.length - 10)
    .reduce((acc, item) => {
      acc.push(item.country);
      return acc;
    }, []);
}
// console.log(getLastTenCountries(countries));

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)