const divRGBColor = document.getElementById('rgb-color');
const divBallOption = document.getElementById('ball-options');
const answer = document.getElementById('answer');
const idButtonReset = document.getElementById('reset-game');
const idScore = document.getElementById('score');

const color = () => Math.ceil(Math.random() * 255);
let colorSelected = '';
let score = 0;

const showRGBonPage = () => {
  colorSelected = `(${color()}, ${color()}, ${color()})`;
  divRGBColor.innerHTML = colorSelected;
};

const clearSelected = () => {
  for (let index = 0; index < divBallOption.children.length; index += 1) {
    divBallOption.children[index].setAttribute('class', 'ball');
  }
};

const clearOptions = () => {
  clearSelected();
  for (let index = divBallOption.children.length - 1; index >= 0; index -= 1) {
    divBallOption.children[index].remove();
  }
};

const checkAnswer = (e) => {
  clearSelected();
  e.target.className = 'ball selected';
  if (e.target.style.backgroundColor === `rgb${colorSelected}`) {
    answer.innerHTML = '<strong>Acertou!</strong>';
    score += 3;
    idScore.innerHTML = score;
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

const newGame = () => {
  showRGBonPage();
  clearOptions();
  generateOptions(6);
  answer.innerText = 'Escolha uma cor';
};

const showScore = () => {
  idScore.innerHTML = score;
};

window.onload = () => {
  showRGBonPage();
  showScore();
  generateOptions(6);
  idButtonReset.addEventListener('click', newGame);
};
