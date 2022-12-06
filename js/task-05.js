const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const onInputNameInput = event => {
  if (event.currentTarget.value !== '') {
    nameOutputEl.textContent = event.currentTarget.value;
  } else {
    nameOutputEl.textContent = 'Anonymous';
  }
};

nameInputEl.addEventListener('input', onInputNameInput);
