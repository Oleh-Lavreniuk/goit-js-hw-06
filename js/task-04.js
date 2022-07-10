const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log("decrementBtn", decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log("incrementBtn", incrementBtn);

const counterRef = document.querySelector("#value");
console.log("counterRef", counterRef);

const counterValue = (counterRef.textContent = 0);
console.log("counterValue", counterValue);

decrementBtn.addEventListener("click", (event) => {
  counterValue += decrementBtn.textContent;
});

incrementBtn.addEventListener("click", (event) => {
  counterValue += incrementBtn.textContent;
});

console.log((counterRef.innerHTML = counterValue));
