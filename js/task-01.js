const categoriesListRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesListRef.length);

// !--- Variant-1 ---
for (const elem of categoriesListRef) {
  const categoryNameRef = elem.querySelector("h2");
  console.log("Category:", categoryNameRef.textContent);

  const categoryElListRef = elem.querySelectorAll("li");
  console.log("Elements:", categoryElListRef.length);
}

// !--- Variant-2 ---
// categoriesListRef.forEach(function (el) {
//   const categoryNameRef = el.querySelector("h2");
//   console.log("Category:", categoryNameRef.textContent);

//   const categoryElListRef = el.querySelectorAll("li");
//   console.log("Elements:", categoryElListRef.length);
// });
