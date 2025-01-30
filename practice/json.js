// JSON Exercises

// Level 1: Basic

// Convert the following skills array to JSON using JSON.stringify().
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const skillJSON = JSON.stringify(skills, undefined, 4);
console.log(skillJSON);

// Stringify the age variable:
let age = 250;
const ageJson = JSON.stringify(age);
console.log(ageJson);

// Stringify the isMarried variable:
let isMarried = true;
console.log(JSON.stringify(isMarried));

// Stringify the student object:
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
console.log(JSON.stringify(student));

// Level 2: Intermediate

// Stringify the student object but only include firstName, lastName, and skills.
console.log(JSON.stringify(student, ["firstName", "lastName", "skills"], 4));

// Level 3: Advanced

// Parse the given txt JSON string to an object.
// Sample JSON Data:
const txt = `{
    "Alex": { "skills": ["HTML", "CSS", "JavaScript"] },
    "Asab": { "skills": ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"] },
    "Brook": { "skills": ["HTML", "CSS", "JavaScript", "React", "Redux"] }
    }`;
const txtObj = JSON.parse(txt);
console.log(txtObj)

// Find the user with the most skills from the txt JSON object.
let maxSkillsUser = "";
let maxSkillsCount = 0;

for (const user in txtObj) {
    const skillsCount = txtObj[user].skills.length;
    if (skillsCount > maxSkillsCount) {
        maxSkillsCount = skillsCount;
        maxSkillsUser = user;
    }
}

console.log(`${maxSkillsUser} has the most skills: ${maxSkillsCount}`);
// for (let obj in txtObj) {
//    for (let skills in obj) {
//     console.log(skills)
//    }
// }

// Expected Output:
// "Asab" has the most skills: 8
