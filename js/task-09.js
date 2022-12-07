function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundEl = document.querySelector('.widget');
const btnChangeColorEl = document.querySelector('.change-color');
const nameColorEl = document.querySelector('.color');

btnChangeColorEl.addEventListener('click', onBackgroundChangeColor);

function onBackgroundChangeColor(event) {
  backgroundEl.style.backgroundColor = `${getRandomHexColor()}`;
  nameColorEl.textContent = backgroundEl.style.backgroundColor;
}
