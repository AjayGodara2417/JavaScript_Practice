// // const  obj = {
// //     obj2 : {
// //         obj3 : {
// //             a1:[1, 2],
// //             a2:[3, 4]
// //         }
// //     },
// //     fn : function () {
// //         console.log(this.obj2.obj3)
// //     }
// // }
// // console.log(obj.fn())

// // const names = ['Asabeneh', 'Brook', 'David', 'John']
// // console.table(names)
// // console.error('This is an error message')
// // console.error('We all make mistakes')
// // const user = {
// //     name: 'Asabeneh',
// //     title: 'Programmer',
// //     country: 'Finland',
// //     city: 'Helsinki',
// //     age: 250
// //   }
// //   console.table(user)
// //   const countries = [
// //     ['Finland', 'Helsinki'],
// //     ['Sweden', 'Stockholm'],
// //     ['Norway', 'Oslo']
// //   ]
  
// //   console.time('Regular for loop')
// //   for (let i = 0; i < countries.length; i++) {
// //     console.log(countries[i][0], countries[i][1])
// //   }
// //   console.timeEnd('Regular for loop')
  
// //   console.time('for of loop')
// //   for (const [name, city] of countries) {
// //     console.log(name, city)
// //   }
// //   console.timeEnd('for of loop')
  
// //   console.time('forEach loop')
// //   countries.forEach(([name, city]) => {
// //     console.log(name, city)
// //   })
// //   console.timeEnd('forEach loop')
// const names = ['Asabeneh', 'Brook', 'David', 'John']
// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo']
// ]
// const user = {
//   name: 'Asabeneh',
//   title: 'Programmer',
//   country: 'Finland',
//   city: 'Helsinki',
//   age: 250
// }
// const users = [
//   {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   },
//   {
//     name: 'Eyob',
//     title: 'Teacher',
//     country: 'Sweden',
//     city: 'London',
//     age: 25
//   },
//   {
//     name: 'Asab',
//     title: 'Instructor',
//     country: 'Norway',
//     city: 'Oslo',
//     age: 22
//   },
//   {
//     name: 'Matias',
//     title: 'Developer',
//     country: 'Denmark',
//     city: 'Copenhagen',
//     age: 28
//   }
// ]

// console.group('Names')
// console.log(names)
// console.groupEnd()

// console.group('Countries')
// console.log(countries)
// console.groupEnd()

// console.group('Users')
// console.log(user)
// console.log(users)
// console.groupEnd()

// const func = () => {
//     console.count('Function has been called')
//   }
//   func()
//   func()
//   func()
//   console.clear()