// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Aj";
let lastName = "Godara";
let country = "Bharat";
let city = "Malout";
let age = 18;
let isMarried = "No";
let year = 1998;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// Check if type of '10' is equal to 10

// Check if parseInt('9.8') is equal to 10

// Boolean value is either true or false.
// 1.Write three JavaScript statement which provide truthy value.
console.log(2<5);
console.log('a'>'A');
console.log(10=='10');

// 2.Write three JavaScript statement which provide falsy value.
console.log(2>5);
console.log(5==='5');
console.log(true==false);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
let l1 = 'python';
let l2 = 'jargon';
let x = l1.length;
let y = l2.length;
console.log(l1.length);
console.log(l2.length);
console.log(l1===l2);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
let a = 'dargon';
let b = 'python';
console.log(!(a.includes('on')&&b.includes('on')));

// Use the Date object to do the following activities
let today = new Date();

// What is the year today?
console.log(today.getFullYear());
// What is the month today as a number?
console.log(today.getMonth());
// What is the date today?
console.log(today.getDate());
// What is the day today as a number?
console.log(today.getDay());
// What is the hours now?
console.log(today.getHours());
// What is the minutes now?
console.log(today.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now());