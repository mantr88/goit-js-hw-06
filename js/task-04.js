const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrement.addEventListener('click', () => {
    return counterValue -= 1;
});
refs.increment.addEventListener('click', () => {
    return counterValue += 1;
});

console.log(counterValue);
refs.value.textContent = counterValue;

