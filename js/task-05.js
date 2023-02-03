const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        textRef.textContent = 'Anonymous'
    } else {

        textRef.textContent = event.currentTarget.value;
    }
};

