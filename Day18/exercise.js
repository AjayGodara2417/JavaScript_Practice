// // Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 5) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })

//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))

// const url = 'https://restcountries.com/v2/all'
// const fetchData = async () => {
//     try {
//       const response = await fetch(url)
//       const countries = await response.json()
//       console.log(countries)
//     } catch (err) {
//       console.error(err)
//     }
//   }
//   console.log('===== async and await')
//   fetchData()

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area
// fetch(countriesAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((country) => {
//             console.log(country.name);
//             console.log(country.capital);
//             console.log(country.languages);
//             console.log(country.population);
//             console.log(country.area);
//         });
//     })
//     .catch((error) => console.error(error));

// fetch(countriesAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(({ name, capital, languages, population, area }) => {
//             console.log(`Name: ${name}`);
//             console.log(`Capital: ${capital}`);
//             console.log(`Languages: ${languages.map(lang => lang.name).join(', ')}`);
//             console.log(`Population: ${population}`);
//             console.log(`Area: ${area}`);
//         });
//     })
//     .catch((error) => console.error(error));

fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(({name, capital, language, population, area}) => {
            console.log(name)            
        });
 })