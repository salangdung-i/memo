'use strict'

const items = document.querySelector('.items');
const input = document.querySelector('.footer__text');
const form = document.querySelector('.new-form');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  addText();
});

function addText() {
  const text = input.value;

  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}

let id = 0;
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete" data-target-id=${id}>
            <i class="fas fa-trash-alt" data-target-id=${id}></i>
          </button >
        </div>
    <div class="item__divider"></div>`;

  id++;
  return itemRow;
}

items.addEventListener('click', event => {
  const id = event.target.dataset.targetId;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});