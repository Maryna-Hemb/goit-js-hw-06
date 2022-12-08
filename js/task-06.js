const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputCheckValidation);

function onInputCheckValidation(event) {
  inputEl.classList.add('invalid');
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    console.log(inputEl.value.length);
    console.log(Number(inputEl.dataset.length));
    inputEl.classList.replace('invalid', 'valid');
  } else {
    inputEl.classList.remove('valid');
  }
}
