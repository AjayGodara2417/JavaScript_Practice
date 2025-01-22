// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let str1 = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log("The quote ", str1 ,"by John Holmes teaches us to help one another");

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let str2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(str2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = 10;
let num2 = '10';
let num3 = Number(num2);
console.log(typeof(num3));

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numb = 9.8;
let numb2 = parseFloat(+numb);
console.log(numb2);

// Check if 'on' is found in both python and jargon
let str3 = "python";
let  str4 = "jargon";
console.log(str3&&str4.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let newstr = "I hope this course is not full of jargon.";
console.log(newstr.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
let x = Math.random();
let a = x * 101;
console.log(a);

// Generate a random number between 50 and 100 inclusively.
let ran = Math.floor(50 + Math.random()*51);
console.log(ran);

// Generate a random number between 0 and 255 inclusively.
let y = Math.floor(Math.random()*255);
console.log(y);

// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sent = 'You cannot end a sentence with because because because is a conjunction';
console.log(sent.substring('because'));