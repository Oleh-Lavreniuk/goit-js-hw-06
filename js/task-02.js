const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("#ingredients");

// !--- Variant-1 ---
ingredients.forEach(function (el) {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = `${el}`;
  ulRef.appendChild(ingredient);
});

// !--- Variant-2 ---
// for (const elem of ingredients) {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = `${elem}`;
//   ulRef.appendChild(ingredient);
// }

console.log(ulRef);
