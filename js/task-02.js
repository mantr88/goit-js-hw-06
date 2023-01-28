const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeListIngredients = ingredients => {
  return ingredients.map(ingredient => {
    let item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add('item');
    return item;
  });
};
  
const items = makeListIngredients(ingredients);

const listRef = document.querySelector('#ingredients');
listRef.append(...items);

