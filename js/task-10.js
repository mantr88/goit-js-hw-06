function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
}

function receivesAmount(event) {
  let amount = event.currentTarget.value;
  
  createBoxes(amount)
  }

  
let array = [];
  
function createBoxes(amount) {
  const totalAmount = array.length + amount;
  for (let i = array.length; i < totalAmount; i += 1) {
    array.push(document.createElement('div'));    
  }
      
}
      
console.log(array)
      
      refs.input.addEventListener('input', receivesAmount);
      // // refs.createBtn.addEventListener('click', );
      


// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor 
// для отримання кольору.


// const onInputClick = event => {
//   const newDiv = refs.input.value;
  
//   console.log(newDiv)
//   // createBoxes(newDiv);
// }

// refs.input.addEventListener('input', onInputClick);










