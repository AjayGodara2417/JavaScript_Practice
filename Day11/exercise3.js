// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const stud = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [nam, skills, score] = stud;
let [HTMLScore, CSSScore, JSScore, ReactScore] = score;
console.log(nam, skills, JSScore, ReactScore);

//   console.log(name, skills, jsScore, reactScore)
// David (4) ["HTM", "CSS", "JS", "React"] 90 95

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
let [na, skil, sco] = students;
const convertArrayToObject = () => {
  let student = students.map((std, std1) => ({ std, std1 }));
  console.log(student);
};
convertArrayToObject();

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
let newStudent = {...student};
console.log(newStudent);

// let {fEnd, bEnd, dBase, dScience} = newStudent.skills;
// console.log(fEnd)
// for (std in student) {
//   let [name, age, skills] = student;
//   let [frontEnd, backEnd, dataBase, dataScience] = skills;
//   frontEnd.add("Bootstrap");
//   console.log(skills);
// }

// Add Bootstrap with level 8 to the front end skill sets
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
console.log(newStudent.skills.frontEnd)

// Add Express with level 9 to the back end skill sets
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });

// Add SQL with level 8 to the data base skill sets
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });

// Add SQL without level to the data science skill sets
newStudent.skills.dataScience.push("SQL");