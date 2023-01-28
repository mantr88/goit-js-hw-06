const categoryRef = document.querySelectorAll('.item');
console.log(categoryRef);
console.log(`Number of categories: ${categoryRef.length}`);

const categoryElementsLog = categoryRef.forEach(category => {
    let firstElementInItem = category.firstElementChild;
    let lastElementInItem = category.lastElementChild;
    return console.log( `Category: ${firstElementInItem.textContent} 
Elements: ${lastElementInItem.children.length}`);
});





