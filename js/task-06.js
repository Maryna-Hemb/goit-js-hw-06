const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputCheckValidation);

function onInputCheckValidation(event) {
  if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.add('valid');
  }
}
