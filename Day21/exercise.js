// Exercise: Level 1
// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParaSele = document.querySelector("p");

// Get each of the the paragraph using document.querySelector('#id') and by their id
const FirstPara = document.getElementById('first');
const SecondPara = document.getElementById('second');
const ThirdPara = document.getElementById('third');
const FourthPara = document.getElementById('fourth');

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const nodePara = document.querySelectorAll('p')

// Loop through the nodeList and get the text content of each paragraph
for(let i=0; i<nodePara.length; i++) {
    console.log(nodePara[i].textContent);
}
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
nodePara[3].textContent = 'Fourth Paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods
nodePara[1].setAttribute('class', 'fPara');
nodePara[2].className = 'sPara';
nodePara[3].classList.add('tPara');