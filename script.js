const divRGBColor = document.getElementById('rgb-color');
const divBallOption = document.getElementById('ball-options');
const answer = document.getElementById('answer');

const color = () => Math.ceil(Math.random() * 255);
let colorSelected = '';

const showRGBonPage = () => {
  colorSelected = `(${color()}, ${color()}, ${color()})`;
  divRGBColor.innerHTML = colorSelected;
};

const clearSelected = () => {
  for (let index = 0; index < divBallOption.children.length; index += 1) {
    divBallOption.children[index].setAttribute('class', 'ball');
  }
};

const checkAnswer = (e) => {
  clearSelected();
  e.target.className = 'ball selected';
  if (e.target.style.backgroundColor === `rgb${colorSelected}`) {
    answer.innerHTML = '<strong>Acertou!</strong>';
  } else {
    answer.innerHTML = '<strong>Errou! Tente novamente!</strong>';
  }
};

const generateOptions = (num) => {
  const positionAnswer = Math.ceil(Math.random() * 6);
  for (let index = 0; index < num; index += 1) {
    const newEl = document.createElement('div');
    newEl.className = 'ball';
    newEl.style.backgroundColor = positionAnswer === index
      ? `rgb${colorSelected}`
      : `rgb(${color()}, ${color()}, ${color()})`;
    newEl.addEventListener('click', checkAnswer);
    divBallOption.appendChild(newEl);
  }
};

window.onload = () => {
  showRGBonPage();
  generateOptions(6);
};
