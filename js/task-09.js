function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const printColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

btnRef.addEventListener('click', changeColorBgrBody)

function changeColorBgrBody(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  printColorRef.textContent = getRandomHexColor();
}