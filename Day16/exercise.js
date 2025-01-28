const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
const ski = JSON.stringify(skills, undefined, 4)
console.log(ski)

// Stringify the age variable
const ag = JSON.stringify(age, undefined, 4)
console.log(ag)

// Stringify the isMarried variable
const isMar = JSON.stringify(isMarried, undefined, 2)
console.log(isMar);

// Stringify the student object
const std = JSON.stringify(student, undefined, 2)
console.log(std)