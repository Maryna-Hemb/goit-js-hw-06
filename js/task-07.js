const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `${Number(fontSizeControlEl.value)}px`;

fontSizeControlEl.addEventListener('input', onInputChangeFontSize);

function onInputChangeFontSize(event) {
  textEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
}
