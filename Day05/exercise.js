// Declare an empty array;
let arr = [];
// Declare an array with more than 5 number of elements
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// Find the length of your array
console.log(arr1.length);
// Get the first item, the middle item and the last item of the array
console.log(arr1[0]);
let x = arr1.length / 2;
console.log(arr1[x]);
console.log(arr1[arr1.length - 1]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [5, "hi", true, 4.4, false];
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);
// Print out each company
// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + " are big IT companies");
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Amazon")) {
  console.log(itCompanies.indexOf("Amazon"));
} else {
  console.log("company not found");
}
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
// Slice out the middle IT company or companies from the array
console.log(itCompanies[(itCompanies.length - 1) / 2]);
// Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3,1));
console.log(itCompanies);
// Remove the last IT company from the array
console.log(itCompanies.pop);
// Remove all IT companies
if(itCompanies.length > 0){
    itCompanies.pop;
} else {
    console.log([itCompanies]);
}