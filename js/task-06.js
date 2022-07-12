const inputRef = document.querySelector("#validation-input");
const validLength = Number(inputRef.dataset.length);
console.log("valid length:", validLength);

inputRef.addEventListener("blur", onCheckValidation);

function onCheckValidation(ev) {
  const inputLength = Number(ev.currentTarget.value.length);

  if (inputLength === validLength) {
    ev.currentTarget.classList.add("valid");
    ev.currentTarget.classList.remove("invalid");
    console.log(`Value "${ev.currentTarget.value}" has valid length`);
  } else {
    ev.currentTarget.classList.add("invalid");
    ev.currentTarget.classList.remove("valid");
    console.log(`Value "${ev.currentTarget.value}" has invalid length`);
  }
}
