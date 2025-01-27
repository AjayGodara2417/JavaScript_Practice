const student = {
    name : "Ajay",
    class : 10,
    uid : 2172,
    school : "HAS",
    getname : function () {
        return `${this.name}`
    }
}
student.lastName = "Godara"

student.getSkills = function () {
    let skills = [
        "HTML",
        "CSS",
        "JS",
        "MERN"
    ]
    return skills
}
console.log(student.getname())
console.log(student.getSkills())

const person = Object.assign({}, student);
// console.log("New")
// console.log(person)

const skills = Object.keys(student.skills)
console.log(skills)

const values = Object.values(student)
console.log(values)

const entries = Object.entries(student)
console.log(entries)

console.log(student.hasOwnProperty("name"))