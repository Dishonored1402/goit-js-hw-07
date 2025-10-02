function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const controls = document.querySelector('#controls');
const inputNum = controls.querySelector('input[type="number"]');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(inputNum.value);
  if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
    return; // out of range — do nothing
  }

  boxes.innerHTML = '';

  const base = 30;
  const fr = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = base + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.borderRadius = '6px';
    div.style.marginRight = '12px';
    div.style.marginBottom = '12px';
    fr.appendChild(div);
  }
  boxes.appendChild(fr);
  inputNum.value = '';
});

destroyBtn.addEventListener('click', () => {
  boxes.innerHTML = '';
});
