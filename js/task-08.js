const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    if (email !== '' && password !== '') {
        console.log({ email, password });
        formRef.reset();
    } else {
        alert('Увага! Всі поля повинні бути заповнені!');
    }
};

