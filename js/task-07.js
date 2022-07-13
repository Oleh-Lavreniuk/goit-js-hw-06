const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputChange);

function onInputChange(ev) {
  const inputValue = ev.currentTarget.value;
  textRef.style.fontSize = `${inputValue}px`;

  console.log(`Text font-size = ${inputValue}px`);
}
