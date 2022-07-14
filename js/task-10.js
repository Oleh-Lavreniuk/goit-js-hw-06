const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

// console.log(refs.input);
refs.createBtn.addEventListener("click", () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.textContent = `${i}`;
    divEl.style.width = `${20 + i * 10}px`;
    divEl.style.height = `${20 + i * 10}px`;
    divEl.style.textAlign = "center";
    divEl.style.alignContent = "center";
    divEl.style.backgroundColor = getRandomHexColor();
    refs.boxes.appendChild(divEl);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
