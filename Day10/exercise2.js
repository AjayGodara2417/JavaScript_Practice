// Exercises:Level 2
let a = [1,2,3,4,5,6]
let b = [3,4,5,6,7,8]
// Find a union b
let c = [...a, ...b]
const C = new Set(c);
console.log(C)

// Find a intersection b
let A = new Set(a);
let B = new Set(b);
let d = a.filter((num) => B.has(num));
const D = new Set(d)
console.log(D);

// Find a with b difference
let e = a.filter((num) => !B.has(num))
let E = new Set(e)
console.log(E)