const divRGBColor = document.getElementById('rgb-color');
const divBallOption = document.getElementById('ball-options');

const color = () => Math.ceil(Math.random() * 255);

const showRGBonPage = () => {
  divRGBColor.innerHTML = `(${color()}, ${color()}, ${color()})`;
};

const generateOptions = (num) => {
  for (let index = 0; index < num; index += 1) {
    const newEl = document.createElement('div');
    newEl.className = 'ball';
    newEl.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
    divBallOption.appendChild(newEl);
  }
};

window.onload = () => {
  showRGBonPage();
  generateOptions(6);
};
