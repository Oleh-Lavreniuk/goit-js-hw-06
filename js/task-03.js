const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// !--- Variant-1 map---
// *-1-short version
const galleryMarkup = images.map(
  ({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="400"></li>`
);

// *-2-long version
// const galleryImg = ({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`;
// const galleryMarkup = images.map((item) => galleryImg(item));

// !--- Variant-2 reduce---
// const galleryImg = ({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`;
// const galleryMarkup = images.reduce((acc, item) => acc + galleryImg(item), "");

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryList.setAttribute(
  "style",
  "list-style-type:none; display:flex; flex-direction:column;"
);

// galleryList.classList.add("js-gallery");
// galleryList.style.listStyleType = "none";
// galleryList.style.display = "flex";
// galleryList.style.flexDirection = "column";

console.log(galleryList);
