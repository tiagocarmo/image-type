const createBit = (color) => {
  let div = document.createElement('div');
  div.style = `background-color: ${color}`;
  return div;
};

const createBR = () => document.createElement('br');

const createFakeBitMap = (array, where) => {
  array.map((line) => {
    line.map((bit) => where.appendChild(createBit(bit)));
    where.appendChild(createBR());
  });
}

const showContent = (oldId, newId) => {
  document.querySelector(oldId).className = 'hide';
  document.querySelector(newId).className = 'show';
}
