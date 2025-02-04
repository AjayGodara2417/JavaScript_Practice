// Exercise: Level 2

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const nodes = document.querySelectorAll('p')
nodes.forEach((node, i) => {
    node.style.fontSize = '24px';
    // node.style.color = 'green';
    // node.style.backgroundColor = 'yellow'
})


// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
nodes.forEach((node, i) => {
    node.style.fontSize = '24px';
    if(i%2==0){
        node.style.color = 'green';
    } else {
        node.style.color = 'red';
    }
    // node.style.backgroundColor = 'yellow'
})

// Set text content, id and class to each paragraph
nodes[1].setAttribute('id', 'para1')
nodes[2].id = 'para2'
nodes[3].textContent = 'para4'