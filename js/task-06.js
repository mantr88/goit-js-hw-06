const inputRefs = document.querySelector('#validation-input');

inputRefs.addEventListener('blur', checksText);


function checksText(event) {
    if (event.currentTarget.value.length === Number(inputRefs.dataset.length)) {
        if (inputRefs.classList.contains('invalid')) {
            inputRefs.classList.remove('invalid');
        }
        inputRefs.classList.add('valid');
    } else {
        if (inputRefs.classList.contains('valid')) {
            inputRefs.classList.remove('valid');
        }
        inputRefs.classList.add('invalid');
    }
};