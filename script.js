const color = () => Math.ceil(Math.random() * 255);

function showRGBonPage() {
  const divRGB = document.getElementById('rgb-color');
  divRGB.innerHTML = `(${color()}, ${color()}, ${color()})`;
}

window.onload = () => {
  showRGBonPage();
};
