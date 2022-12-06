let counterValue = 0;
const removeListenerEl = document.querySelector('[data-action="decrement"]');
const addListenerEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
valueEl.textContent = counterValue;

// const onCounterAdd = () => {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// };

// const onCounterRemove = () => {
//   if (counterValue >= 1) {
//     counterValue -= 1;
//     valueEl.textContent = counterValue;
//   }
// };

// addListenerEl.addEventListener('click', onCounterAdd);
// removeListenerEl.addEventListener('click', onCounterRemove);

addListenerEl.addEventListener('click', () => {
  addListenerEl.classList.add('js-click');
});
removeListenerEl.addEventListener('click', () => {
  removeListenerEl.classList.add('js-click');
});

const counterValueChange = () => {
  if (addListenerEl.classList.contains('js-click')) {
    counterValue += 1;
    console.log(counterValue);
    return counterValue;
  }
  // else if (removeListenerEl.classList.contains('js-click')) {
  //   return (counterValue -= 1);
  // }
};

// window.onload = function () {
//   let counterValue = 0;
//   let addListenerEl = document.querySelector('[data-action="increment"]');
//   const valueEl = document.querySelector('#value');
//   let removeListenerEl = document.querySelector('[data-action="decrement"]');
//   addListenerEl.addEventListener('click', () => {
//     counterValue += 1;
//     valueEl.textContent = counterValue;
//     return counterValue;
//   });
//   removeListenerEl.addEventListener('click', () => {
//     counterValue -= 1;
//     valueEl.textContent = counterValue;
//     return counterValue;
//   });
//   console.log(counterValue);
// };

// window.onload = function () {
//   let counterValue = 0;
//   const addListenerEl = document.querySelector('[data-action="increment"]');
//   const valueEl = document.querySelector('#value');
//   const removeListenerEl = document.querySelector('[data-action="decrement"]');
//   const change = () => {
//     addListenerEl.addEventListener('click', () => {
//       counterValue += 1;
//       valueEl.textContent = counterValue;
//     });
//     // removeListenerEl.addEventListener('click', () => {
//     //   if (counterValue >= 1) {
//     //     counterValue -= 1;
//     //     valueEl.textContent = counterValue;
//     //   }
//     // });
//   };
//   counterValue = change;
//   console.log(counterValue);
// };
