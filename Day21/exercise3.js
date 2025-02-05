// Exercise: Level 3

// DOM: Mini project 1

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
const yy = document.querySelector("span");
const rgbColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  let rgb = `rgb(${r},${g},${b})`;

  return rgb;
};

setInterval(() => {
  yy.style.color = rgbColor();
}, 1000);

// The date and time background color is changing every on seconds
const today = new Date();
const dt = `${today.toLocaleString("default", {
  month: "long",
})} ${today.getDay()} , ${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const datediv = document.getElementById("date");
datediv.textContent = dt;

const dtrgbColor = () => {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let rgb = `rgb(${r},${g},${b})`;

    return rgb;
}

setInterval(() =>{
    datediv.style.backgroundColor = dtrgbColor();
},1000)

// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

const nodeli = document.querySelectorAll('li')
nodeli.forEach((cl) => {
    if(cl.className == 'done') {
        cl.style.backgroundColor = 'green';
    }
    if(cl.className == 'ongoing') {
        cl.style.backgroundColor = 'yellow';
    }
    if(cl.className == 'coming') {
        cl.style.backgroundColor = 'red';
    }
})