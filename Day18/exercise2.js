// Exercises: Level 2
// Print out all the cat names in to catNames variable.

const catsAPI = "https://api.thecatapi.com/v1/breeds";
let catName = [];
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      catName.push(element.name);
    });
    console.log(catName)
  })
  .catch((error) => console.error(error));

