const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onFormInputChange);

function onFormInputChange(evt) {
  const inputValue = evt.currentTarget.value;

  outputRef.textContent = inputValue.trim() === "" ? "Anonymous" : inputValue;
  console.log(inputValue);
}

// !--- Variant-2 ---
// let inputEl = document.querySelector("#name-input");
// let outputEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", onInputChange);

// function onInputChange(event) {
//   inputEl = event.currentTarget.value;
//   console.log(inputEl);

//   inputEl !== " " ? (outputEl.innerText = inputEl.trim()) : "Anonymous";
// }
