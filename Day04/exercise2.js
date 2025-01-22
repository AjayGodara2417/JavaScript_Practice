const prompt = require("prompt-sync")();
// Exercises: Level 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let marks = prompt("Enter your score: ");
let score = marks;
if (score>=80) {
    console.log("Your Grade is A");
} else if (score >= 70){
    console.log("Your Grade is B");
} else if (score >= 60){
    console.log("Your Grade is C");
} else if (score >= 50){
    console.log("Your Grade is D");
} else if (score >= 0){
    console.log("Your Grade is F");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("Enter month: ");
if (month == "september" || "octuber" || "november") {
  console.log("the season is Autumn");
} else if (month == "december" || "january" || "february") {
  console.log("the season is Winter.");
} else if (month == "march" || "april" || "may") {
  console.log("the season is Spring");
} else {
  console.log("the season is Summer");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

let day = prompt("What is the day today?")
switch (day) {
    case "monday" :
        console.log(`${day} is a working day`);
        break;
    case "tuesday" :
        console.log(`${day} is a working day`);
        break;
    case "wednesday" :
        console.log(`${day} is a working day`);
        break;
    case "thursday" :
        console.log(`${day} is a working day`);
        break;
    case "friday" :
        console.log(`${day} is a working day`);
        break;
    case "saturday" :
        console.log(`${day} is a weekend`);
        break;
    case "sunday" :
        console.log(`${day} is a weekend`);
        break;
}