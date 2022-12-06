const categoriesItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach(item => {
  const categoryListNameEl = item.querySelector('h2');
  console.log(`Category: ${categoryListNameEl.textContent}`);
  const categoryInnerList = item.querySelectorAll('li');
  console.log(`Elements: ${categoryInnerList.length}`);
});

// ВАРІАНТИ РОЗВ'ЯЗКУ альтернативний запис

// A) for... of
// for (const categoryListDataEl of categoriesItemEl) {
//   const categoryListNameEl = categoryListDataEl.querySelector('h2');
//   console.log(`Category: ${categoryListNameEl.textContent}`);
//   const categoryInnerList = categoryListDataEl.querySelectorAll('li');
//   console.log(`Elements: ${categoryInnerList.length}`);
// }
