const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItemsEl = document.querySelector('#ingredients');

const makeMarkupIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    listItemEl.classList.add('item');
    return listItemEl;
  });
};

const fullListItemsEl = makeMarkupIngredientsEl(ingredients);
ingredientsItemsEl.append(...fullListItemsEl);
console.log(ingredientsItemsEl);

// ВАРІАНТИ РОЗВ'ЯЗКУ альтернативний запис
// Перебирання масиву

// A) forEach + .push()

// const fullListItemsEl = [];
// ingredients.forEach(ingredient => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = ingredient;
//   listItemEl.classList.add('item');
//   fullListItemsEl.push(listItemEl);
// });
// ingredientsItemsEl.append(...fullListItemsEl);

// Б) .map() для циклу

// const fullListItemsEl = ingredients.map(ingredient => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = ingredient;
//   listItemEl.classList.add('item');
//   return listItemEl;
// });
// ingredientsItemsEl.append(...fullListItemsEl);

// В) функція для одного елемента як параметра для .map()

// const makeMarkupIngredientsEl = ingredient => {
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = ingredient;
//   listItemEl.classList.add('item');
//   return listItemEl;
// };

// const fullListItemsEl = ingredients.map(makeMarkupIngredientsEl);
// ingredientsItemsEl.append(...fullListItemsEl);
// console.log(ingredientsItemsEl);
