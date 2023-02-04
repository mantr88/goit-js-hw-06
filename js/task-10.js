function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
}


let amount = 0;
// console.log(refs.input)

refs.input.addEventListener('input', receivesAmount);
// refs.createBtn.addEventListener('click', createBoxes);


function receivesAmount(event) {
  // console.log(Number(event.currentTarget.value))
  amount = Number(event.currentTarget.value);
}

console.log(amount);

// let array = [];

// function createBoxes(amount) {
//   for (let i = 0; i < amount; i+= 1) {
//     array.push(document.createElement('div'));
    
//   }
//   return console.log(array)
// }

