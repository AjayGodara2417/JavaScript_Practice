// Exercise 3:

// Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

const {
  description,
  challengeTitle,
  challengeSubtitle,
  challengeYear,
  keywords,
  author,
  challenges,
} = asabenehChallenges2020;
const [
  Python,
  JavaScript,
  HTMLCSS,
  React,
  ReactNative,
  Fullstack,
  DataAnalysis,
  MachineLearning,
] = challenges;
const {
  nam,
  topics,
  days,
  status,
  questions,
  projects,
  interviewQns,
  githubUrl,
} = Python;

// // wrapper
let divwrapper = document.getElementById("wrapper");

// // divwrapper.style.color = "green";
// divwrapper.style.display = "flex";
// divwrapper.style.flexDirection = "column";
// // divwrapper.style.justifyContent = "center";
// divwrapper.style.alignItems = "center";

// // heading
// let divwrapperheading = document.createElement("h2");
// divwrapperheading.textContent = "Asabeneh JS Challenge in 2025";

// divwrapperheading.style.fontSize = "34px";

// // content
// let divwrappercontext = document.createElement("p");
// divwrappercontext.textContent = "30 Days of JavaScript";

// divwrappercontext.style.fontSize = "24px";

// // date
// const dd = () => {
//   const today = new Date();
//   const dt = `${today.toLocaleString("default", {
//     month: "long",
//   })} ${today.getDay()} , ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
//   const datediv = document.getElementById("date");
//   datediv.textContent = dt;

//   datediv.style.width = "420px";
//   datediv.style.height = "30px";
//   datediv.style.textAlign = "center";

//   const dtrgbColor = () => {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);

//     let rgb = `rgb(${r},${g},${b})`;

//     return rgb;
//   };

//   setInterval(() => {
//     datediv.style.backgroundColor = dtrgbColor();
//   }, 1000);
// };

// // const datetoday = dd();

// // ul
// const unli = document.createElement("li");
// unli.style.display = "flex";
// unli.style.width = "650px";
// unli.style.backgroundColor = "red";
// unli.style.justifyContent = "space-between";
// unli.style.padding = "15px";
// unli.style.alignItems = "center";

// const unliheading = document.createElement("h3");
// unliheading.textContent = "30days of JS";

// const unlidropdown = document.createElement("details");
// const sum = document.createElement("summary");
// sum.textContent = "python";
// unlidropdown.appendChild(sum);
// const arr = [
//   "Python",
//   "Flask",
//   "Numpy",
//   "Pandas",
//   "Statistics",
//   "API",
//   "MongoDB",
// ];
// for (items of arr) {
//   let para = document.createElement("p");
//   para.innerHTML = items;
//   unlidropdown.appendChild(para);
// }

// const unlistatus = document.createElement("p");
// unlistatus.textContent = "Done";

// unli.appendChild(unliheading);
// unli.appendChild(unlidropdown);
// unli.appendChild(unlistatus);

// // append
// divwrapper.appendChild(divwrapperheading);
// divwrapper.appendChild(divwrappercontext);
// divwrapper.appendChild(unli);

// challenges: [
//     {
//       name: "30 Days Of Python",
//       topics: [
//         "Python",
//         "Flask",
//         "Numpy",
//         "Pandas",
//         "Statistics",
//         "API",
//         "MongoDB",
//       ],
//       days: 30,
//       status: "Done",
//       questions: "Above 500",
//       projects: "Two",
//       interviewQns: "",
//       githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
//     },

const addlist = () => {
  for (let i = 0; i <= 4; i++) {
    const addli = document.createElement("li");

    // heading
    // asabenehChallenges2020.challenges.forEach(element => {
    let addname = document.createElement("h3");
    addname.innerHTML = nam;
    addli.appendChild(addname);
  }

  // details
  const adddetail = document.createElement("details");
  const detailsummary = document.createElement("summary");
  detailsummary.textContent = nam;
  // const skillsarray = [];
  // skillsarray.forEach((ele) => {

  // })
  adddetail.appendChild(detailsummary);
  // adddetail.appendChild(skillsarray)

  // const status = document.createElement("p");

//   divwrapper.appendChild(addli);
  divwrapper.appendChild(adddetail);
};

addlist();
