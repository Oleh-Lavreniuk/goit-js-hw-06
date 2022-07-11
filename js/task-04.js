const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log("decrementBtn:", decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log("incrementBtn:", incrementBtn);

const counterRef = document.querySelector("#value");
console.log("counterRef:", counterRef);

let counterValue = (counterRef.textContent = 0);
console.log("counterValue:", counterValue);

decrementBtn.addEventListener("click", (event) => {
  counterValue += Number(decrementBtn.textContent);
  counterRef.innerHTML = counterValue;
  console.log("counterValue:", counterValue);
});

incrementBtn.addEventListener("click", (event) => {
  counterValue += Number(incrementBtn.textContent);
  counterRef.innerHTML = counterValue;
  console.log("counterValue:", counterValue);
});
