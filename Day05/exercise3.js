import { countries } from "./countries.js";

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 23, 25, 26]

// Sort the array and find the min and max age
let newarr = ages.sort();
let min = newarr[0];
console.log(min);
let max = newarr.length-1;
console.log(newarr[max]);

// Find the median age(one middle item or two middle items divided by two)
let mid = Math.floor((newarr.length-1)/2);
console.log(newarr[mid]);

// Find the average age(all items divided by number of items)
let sum = eval(ages.join("+"));
let avg = sum/ages.length-1;
console.log(avg);

// Find the range of the ages(max minus min)
// console.log(avg.range(min, max));

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
let minavg = min - avg;
let maxavg = max - avg;
let comp = Math.abs(maxavg-minavg);
console.log(comp);

// Find the middle country(ies) in the countries array
let middle = Math.ceil(countries.length / 2);
console.log(countries[middle]);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(middle)
let first = countries.splice(0, middle);
let second = countries.splice(-middle);
console.log(first);
console.log(second);