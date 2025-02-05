// const constants = [2.72, 3.14, 9.81, 37, 100];
// const [, , , b] = constants
// console.log(b)






// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// };
// const {width, height, area, perimeter} = rectangle
// console.log(perimeter)





// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
// const [name, skils, score]= student
// console.log(typeof(skils))

// const skills = ['HTM', 'CSS', 'JS', 'React'];
// console.log(typeof(skills))





// // const students = [
// //   ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
// //   ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
// // ];

// // const convertArrayToObject = (arr) => {
// //     const obj = arr;
// //     const oo = obj.map(([name, skills, scores]) => ({name, skills, scores}));
// //     console.log(oo)
// // }
// // convertArrayToObject(students);









// // const stu = 









// // let stud = {
// //   name: "David",
// //   age: 25,
// //   skills: {
// //     frontEnd: [
// //       { skill: "HTML", level: 10 },
// //       { skill: "CSS", level: 8 },
// //       { skill: "JS", level: 8 },
// //       { skill: "React", level: 9 },
// //     ],
// //     backEnd: [
// //       { skill: "Node", level: 7 },
// //       { skill: "GraphQL", level: 8 },
// //     ],
// //     dataBase: [{ skill: "MongoDB", level: 7.5 }],
// //     dataScience: ["Python", "R", "D3.js"],
// //   },
// // };











// // const countriesAPI = "https://restcountries.com/v2/all";










// // let { name, age, skills } = stud;
// // age = 30;
// // console.log(age);
// // stud.skills.dataBase.push({skill: "MySql", level: 9})
// // skills.frontEnd.push({skill: "SpringBoot", level: 10})
// // let {frontEnd, backEnd, dataBase, dataScience} = skills
// // backEnd.push({skill: "Express", level: 7})
// // console.log(skills)

// // const bb = JSON.stringify(backEnd, undefined, 5)
// // console.log(bb)








// // const names = ['Asabeneh', 'Brook', 'David', 'John']

// // const countries = [
// //   ['Finland', 'Helsinki'],
// //   ['Sweden', 'Stockholm'],
// //   ['Norway', 'Oslo']
// // ]
// // const user = {
// //   name: 'Asabeneh',
// //   title: 'Programmer',
// //   country: 'Finland',
// //   city: 'Helsinki',
// //   age: 250
// // }

// // const users = [
// //   {
// //     name: 'Asabeneh',
// //     title: 'Programmer',
// //     country: 'Finland',
// //     city: 'Helsinki',
// //     age: 250
// //   },
// //   {
// //     name: 'Eyob',
// //     title: 'Teacher',
// //     country: 'Sweden',
// //     city: 'London',
// //     age: 25
// //   },
// //   {
// //     name: 'Asab',
// //     title: 'Instructor',
// //     country: 'Norway',
// //     city: 'Oslo',
// //     age: 22
// //   },
// //   {
// //     name: 'Matias',
// //     title: 'Developer',
// //     country: 'Denmark',
// //     city: 'Copenhagen',
// //     age: 28
// //   }
// // ]


try {
    let a =2;
    let sum = a+b;
    console.log(sum)
} catch (err) {
    console.error("Error in code")
    // console.log(err.name)
}


// // // Display the countries array as a table
// // console.table(countries)

// // // Display the countries object as a table
// // console.table(users)

// // // Use console.group() to group logs
// // console.group("logs");
// // console.log(countries);
// // console.groupEnd();