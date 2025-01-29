// Exercises: Level 3

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Read the cats api and find the average weight of cat in metric unit.
let w1 = [];
let w2 = [];

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      w1.push(element.weight.metric[0]);
      w2.push(element.weight.metric[4]);
    });
    let w1sum = w1.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    let w2sum = w2.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    console.log(w1sum);
    console.log(w2sum);
    let avgWeight = (w2sum + w1sum) / 2;
    console.log(avgWeight);
  });

// Read the countries api and find out the 10 largest countries
let arrOfCountries = [];
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      arrOfCountries.push(element.area);
    });
    arrOfCountries.sort();
    let lar = arrOfCountries.slice(0, 10);
    console.log(lar);
  });

// Read the countries api and count total number of languages in the world used as officials.
let offlang = new Set();
fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            element.languages.forEach((language) => {
                offlang.add(language.name)
            })
        });
        console.log(offlang.size);
    })
