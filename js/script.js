'use strict'
let numberReset;
const picker = document.querySelector('#color_pallete');
const containerGrid = document.querySelector('.grid')
const update = document.querySelector('.update');
const randm_color = document.querySelector('.random_color');
const default_color = document.querySelector('.default_color');
const erease_color = document.querySelector('.erase_color');
const toggle_line = document.querySelector('.remove_line');
const reset = document.querySelector('.reset');
const down = document.querySelector('.main_grid');


let toggleGrids = function () {
  let getArray = containerGrid.children
  for (let i = 0; i < getArray.length; i++) {
    if (getArray[i].hasAttribute('class')) {
      getArray[i].classList.replace('square', 'toggle_grid_line')
    }
  }
}

// toggle_line.removeEventListener('click', toggleGrids, true);
toggle_line.addEventListener('click', toggleGrids, true);

default_color.addEventListener('click', () => {
  containerGrid.addEventListener('mouseover', (e) => e.target.style.background = '#FC28FB');
})

picker.addEventListener('change', (e) => {
  let input = document.querySelector('input')
  input = e.target.value
  containerGrid.addEventListener('mouseover', (e) => e.target.style.background = input);
})

erease_color.addEventListener('click', (e) => {
  containerGrid.addEventListener('mouseover', (e) => e.target.style.background = '#FFF');
})

let resetGrid = function () {
  containerGrid.style.background = ''
  containerGrid.textContent = '';
  containerGrid.style.setProperty('grid-template-columns', `repeat(16, 2fr)`);
  containerGrid.style.setProperty('grid-template-rows', `repeat(16, 2fr)`);
  createGrid()
}
reset.addEventListener('click', resetGrid)


let updateGrid = function () {
  numberReset = prompt('Enter number between 1 to 100...')
  if (numberReset) {
    while (numberReset > 100 || numberReset < 1) {
      alert('Are allowed only number between 1 to 100')
      numberReset = prompt('enter a number betwen 1 to 100 please')
    }
    gridUpdate()
  }
}

update.addEventListener('click', updateGrid)


randm_color.addEventListener('click', () => {
  containerGrid.addEventListener('mouseover', (e) => e.target.style.background = getRandomColor())
})

let getRandomColor = function () {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

function gridUpdate() {
  containerGrid.textContent = '';
  containerGrid.style.setProperty('grid-template-columns', `repeat(${numberReset}, 2fr)`);
  containerGrid.style.setProperty('grid-template-rows', `repeat(${numberReset}, 2fr)`);
  for (let i = 0; i < numberReset * numberReset; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    containerGrid.appendChild(div);
  }
}


let createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    containerGrid.appendChild(div);
  }
};

createGrid()