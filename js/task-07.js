const inputRefs = document.querySelector('#font-size-control');
const textRefs = document.querySelector('#text');


inputRefs.addEventListener('change', chengesFont);

function chengesFont(event) {
    textRefs.style.fontSize = `${event.currentTarget.value}px`;
};