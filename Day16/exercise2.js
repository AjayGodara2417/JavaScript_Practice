// Exercises Level 2
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
// Stringify the students object with only firstName, lastName and skills properties
const std = JSON.stringify(student, ["firstName", "lastName", "skills"], 2)
console.log(std)