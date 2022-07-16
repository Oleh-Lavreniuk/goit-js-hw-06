const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulRef = document.querySelector("#ingredients");

// !--- Variant-1 -wrong---
// ingredients.forEach(function (el) {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = `${el}`;
//   ulRef.appendChild(ingredient);
// });
// console.log(ulRef);

// !--- Variant-2 ---
const createList = (elementsArray) => {
  return elementsArray.map((ingredient) => {
    const newLi = document.createElement("li");
    newLi.classList.add("item");
    newLi.textContent = ingredient;
    return newLi;
  });
};

const elements = createList(ingredients);
ulRef.append(...elements);
console.log(ulRef);
