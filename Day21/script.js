const tags = document.getElementsByTagName("h1");
// console.log(tags);
for (let i = 0; i < tags; i++) {
  console.log(tags[i]); // prints each elements in the HTMLCollection
}

const classTags = document.getElementsByClassName('title')

const idTags = document.getElementById('first-title')

const querySel = document.querySelector('h1')

const allquerySel = document.querySelectorAll('h1')

// adding attribute
// allquerySel[3].className = 'title';
// allquerySel[3].id = 'fourth-title';
// titles[3].setAttribute('class', 'title')
// titles[3].classList.add('title', 'header-title')
// remove
// titles[3].classList.remove('title', 'header-title')

// add text
allquerySel[3].textContent = 'Fouth Title';

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.fontSize = '20px'
//   } else {
//     title.style.fontSize = '30px'
//   }
// })

// title.style.fontSize = '44px'