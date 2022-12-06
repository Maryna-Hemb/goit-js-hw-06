const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onInputChangeFontSize);

function onInputChangeFontSize(event) {
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}
