// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
localStorage.clear();
const student = {
    firstName : "Ajay",
    lastName: "Godara",
    age : 18,
    skills : [
        "HTML",
        "CSS",
        "JS"
    ],
    country : "Bharat",
    enrolledKey : 2172,
}

const stud = JSON.stringify(student, undefined, 2);
localStorage.setItem("student", stud);
console.log(localStorage);