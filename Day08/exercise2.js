// Exercises: Level 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
// Find the person who has many skills in the users object.

// Count logged in users, count users having greater than equal to 50 points from the following object.
// const count = Object.values(users).filter(user => user.isLoggedIn).length;
// console.log(count);
// const count = Object.values(users).filter(user => (user.points>=50)).length;
// console.log(count);
const point = () => {
    let count = 0;
    for (obj in users) {
        if(users[obj].points>=50){
            count++;
        }
    }
    console.log(count);
}
// point();

// Find people who are MERN stack developer from the users object
let MERN = "MongoDB" && "Node" && "React" && "Express";
let c = 0;
for (obj in users) {
    if(users[obj].skills.includes(MERN)){
        c++;
    }
}
console.log(c)

// Set your name in the users object without modifying the original users object
const newObj = Object.assign({}, users);
const Ajay = {};
newObj.Ajay = {name : "Ajay"};
// console.log(newObj)


// Get all keys or properties of users object
const userskeys = () => {
    const keys = Object.keys(users[obj]);
    console.log(keys)
}
// userskeys();

const allKeys = () => {
    for (obj in users) {
        const keys = Object.keys(users[obj]);
        console.log(keys)
    }
}
// allKeys();

// Get all the values of users object

// Use the countries object to print a country name, capital, populations and languages.