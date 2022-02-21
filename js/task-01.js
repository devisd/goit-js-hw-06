const categories = document.querySelector("#categories");
const categoriesAll = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`);
categoriesAll.forEach(elem => {
  console.log(`Category: ${elem.querySelector("h2").textContent}
Elements: ${elem.querySelector("ul").children.length}`);
});