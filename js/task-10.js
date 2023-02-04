function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('#boxes'),
}

console.log(refs.boxesDiv)

function receivesAmount() {
  let amount = refs.input.value;
  
  createBoxes(amount);
  }

  
  
function createBoxes(amount) {
  let arrayElements = [];

  for (let i = 0; i < amount; i += 1) {
      const newBoxes = document.createElement('div');
      newBoxes.style.backgroundColor = getRandomHexColor();
      newBoxes.style.with = `${30 + i * 10}px`;
      newBoxes.style.hight = `${30 + i * 10}px`;
      arrayElements.push(newBoxes);    
  }

  refs.boxesDiv.append(...arrayElements);
}
   

      
refs.createBtn.addEventListener('click', receivesAmount);
      


// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor 
// для отримання кольору.











