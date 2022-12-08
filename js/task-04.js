let counterValue = 0;
const removeListenerEl = document.querySelector('[data-action="decrement"]');
const addListenerEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
valueEl.textContent = counterValue;

const onCounterAdd = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const onCounterRemove = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

addListenerEl.addEventListener('click', onCounterAdd);
removeListenerEl.addEventListener('click', onCounterRemove);
