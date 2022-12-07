function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const fieldControlsEl = document.querySelector('#controls');
const inputNumberEl = fieldControlsEl.querySelector('input');
const btnCreateEl = fieldControlsEl.querySelector('[data-create]');
const btnDestroyEl = fieldControlsEl.querySelector('[data-destroy]');
const boxCollectionEl = document.querySelector('#boxes');

inputNumberEl.addEventListener('input', onCreateCollection);

function onCreateCollection(event) {
  btnCreateEl.addEventListener('click', createBoxes);
}

let amount;
function createBoxes(amount) {
  amount = Number(inputNumberEl.value);
  console.log(amount);
  const allBoxes = '<div></div>'.repeat(`${amount}`);
  boxCollectionEl.insertAdjacentHTML('afterbegin', allBoxes);
  const addBoxesEl = boxCollectionEl.querySelectorAll('div');

  let boxWidth = 20;
  let boxHeight = 20;
  for (let i = 0; i < amount; i += 1) {
    boxWidth += 10;
    boxHeight += 10;
    addBoxesEl[i].style.width = `${boxWidth}px`;
    addBoxesEl[i].style.height = `${boxHeight}px`;
    addBoxesEl[i].style.backgroundColor = `${getRandomHexColor()}`;
  }

  btnDestroyEl.addEventListener('click', destroyBoxes);
  function destroyBoxes() {
    inputNumberEl.value = '';
    for (let i = 0; i < amount; i += 1) {
      addBoxesEl[i].removeAttribute('style');
    }
  }
}
