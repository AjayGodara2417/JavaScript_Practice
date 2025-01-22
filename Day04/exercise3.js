const prompt = require("prompt-sync")();
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

let month = prompt("Enter Month: ");

if (month == "jan") {
  console.log(`january has 31 days`);
} else if (month == "febuary") {
  console.log(`${month} has 28 days`);
} else if (month == "march") {
  console.log(`${month} has 31 days`);
} else if (month == "april") {
  console.log(`${month} has 30 days`);
} else if (month == "may") {
  console.log(`${month} has 31 days`);
} else if (month == "june") {
  console.log(`${month} has 30 days`);
} else if (month == "july") {
  console.log(`${month} has 31 days`);
} else if (month == "august") {
  console.log(`${month} has 31 days`);
} else if (month == "september") {
  console.log(`${month} has 30 days`);
} else if (month == "octuber") {
  console.log(`${month} has 31 days`);
} else if (month == "november") {
  console.log(`${month} has 30 days`);
} else if (month == "december") {
  console.log(`${month} has 31 days`);
}
// Write a program which tells the number of days in a month, now consider leap year.
