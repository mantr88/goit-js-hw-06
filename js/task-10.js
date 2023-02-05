function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
}


function receivesAmount() {
  let amount = refs.input.value;

  createBoxes(amount);
  }

  
  
function createBoxes(amount) {
  let arrayElements = [];

  for (let i = 0; i < amount; i += 1) {
      const newBoxes = document.createElement('div');
      newBoxes.style.backgroundColor = getRandomHexColor();
      newBoxes.style.width = `${30 + i * 10}px`;
      newBoxes.style.height = `${30 + i * 10}px`;
      arrayElements.push(newBoxes);    
  }

  refs.boxesDiv.append(...arrayElements);
}
   
function destroyBoxes() {
  refs.boxesDiv.innerHTML = '';
}
      
refs.createBtn.addEventListener('click', receivesAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);












