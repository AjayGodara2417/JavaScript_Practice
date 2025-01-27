// Exercises: Level 1
// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Jackey";
dog.legs = 4;
dog.color = "Black";
dog.age = "5 years";
dog.bark = "woof woof";
// console.log(dog)
// Get name, legs, color, age and bark value from the dog object
const values = Object.values(dog);
console.log(values);
// Set new properties the dog object: breed, getDogInfo
dog.breed = "Labrador"

dog.getDogInfo = function () {
    let entries = Object.entries(dog);
    console.log(entries)
}

console.log(dog.getDogInfo());