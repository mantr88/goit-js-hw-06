const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};

decrementBtnRef.addEventListener('click', () => {
    counter.decrement();
    valueRef.textContent = counter.counterValue;
});
incrementBtnRef.addEventListener('click', () => {
    counter.increment();
    valueRef.textContent = counter.counterValue;
});




