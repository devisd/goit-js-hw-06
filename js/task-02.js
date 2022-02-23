const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const creatingTag = elem => {
  const tagList = document.createElement("li");
  tagList.textContent = elem;
  tagList.classList.add("item");
  return tagList;
};

const ingredientsAll = ingredients.map(creatingTag);
document.querySelector("ul").append(...ingredientsAll);