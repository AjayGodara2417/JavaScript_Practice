// Exercises for Different Levels


// Beginner Level

// Destructure the following array and assign the values to variables:
const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, f, d, l] = constants;
// console.log(e)

// Destructure and assign values from this array:
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [Fin, Est, Swe, Den, Nor] = countries;
// console.log(Fin)

// Destructure the properties of the following object:
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};
const {width, height, area, perimeter} = rectangle;
console.log(width)



// Intermediate Level

// Iterate through the users array and destructure each object to get all keys.
const users = [
  { name: 'Brook', scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 16 },
  { name: 'Alex', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
  { name: 'David', scores: 75, skills: ['HTM', 'CSS'], age: 22 }
];
for (const {name, scores, skills, age} of users) {
    console.log(name, scores, skills, age)
}
// const [name, score, skills, age] = users;
// console.log(name)

// Find the people who have fewer than two skills from the users array.
users.forEach(user => {
    if(user.skills.length > 2) {
        console.log(user.name)
    }
})



// Advanced Level

// Destructure a countries object and print the name, capital, population, and languages.

// Destructure the following student array in a single line:
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, score] = student;
// console.log(name)
// David (4) ["HTM", "CSS", "JS", "React"] 90 95

// Write a function convertArrayToObject that converts an array into an object:

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = (arr) => {
    const obj = arr;
    const oo = obj.map(([name, skills, scores]) => ({name, skills, scores}));
    console.log(oo)
}
convertArrayToObject(students);

// [
//   { name: 'David', skills: ['HTM', 'CSS', 'JS', 'React'], scores: [98,85,90,95] },
//   { name: 'John', skills: ['HTM', 'CSS', 'JS', 'React'], scores: [85, 80,85,80] }
// ]

// Copy the student object and add new skills while keeping the original unchanged.
const stud = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 }
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

const stu = {...stud}
// console.log(stu)

// New Additions:

// Add Bootstrap with level 8 to frontEnd
stu.skills.frontEnd.push({skill: "Bootstrap", level: 8})
console.log(stu)

// Add Express with level 9 to backEnd
stu.skills.backEnd.push({skill: "Express", level: 9})

// Add SQL with level 8 to dataBase
stu.skills.dataBase.push({skill: "SQL", level: 8})

// Add SQL (without level) to dataScience
stu.skills.dataScience.push({skill: "SQL"})

console.log(JSON.stringify(stu, undefined, 2))