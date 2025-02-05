// Exercises: Level 1
const isPrime = (i) => {
    let isPrime = true;
    
    if (i <= 1) {
        return false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
                
            }
        }
    }
    return true;
};

// Create a div container on HTML document and create 0 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

const titles = document.getElementById("nums");
for (i = 0; i <= 101; i++) {
  let title = document.createElement("h2");
  title.textContent = i;
  titles.appendChild(title);
  if (i % 2 == 0) {
    title.style.backgroundColor = "green";
  } else if (isPrime(i)) {
    title.style.backgroundColor = "red"
  } else {
    title.style.backgroundColor = "yellow";
  }
}


