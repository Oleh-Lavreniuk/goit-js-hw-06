function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
let spanColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const takeColor = getRandomHexColor();
  body.style.backgroundColor = takeColor;
  spanColor.textContent = takeColor;
}
