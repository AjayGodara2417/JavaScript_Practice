// Exercises:Level 3
// Check the speed difference among the following loops: while, for, for of, forEach
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
//   console.time('Regular for loop')
//   for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i][0], countries[i][1])
//   }
//   console.timeEnd('Regular for loop')
  
//   console.time('for of loop')
//   for (const [name, city] of countries) {
//     console.log(name, city)
//   }
//   console.timeEnd('for of loop')
  
//   console.time('forEach loop')
//   countries.forEach(([name, city]) => {
//     console.log(name, city)
//   })
//   console.timeEnd('forEach loop')

  console.time('while loop')
  let i=0;
  while(i <countries.length){
      console.log(countries[i][0], countries[i][1])
      i++;
  }

  console.timeEnd('while loop')