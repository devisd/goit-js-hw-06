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

const firstItem = document.createElement("li");
firstItem.classList.add("item");
firstItem.insertAdjacentHTML(
  "afterbegin",
  '<img src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "White and Black Long Fur Cat" width = 640>'
);
firstItem.style.marginRight = "20px";

const secondItem = document.createElement("li");
secondItem.classList.add("item");
secondItem.insertAdjacentHTML(
  "afterbegin",
  '<img src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Orange and White Koi Fish Near Yellow Koi Fish" width = 640>'
);

const thirdItem = document.createElement("li");
thirdItem.classList.add("item");
thirdItem.insertAdjacentHTML(
  "afterbegin",
  '<img src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt = "Group of Horses Running" width = 640>'
);
thirdItem.style.marginLeft = "20px";

const imagesGallery = document.querySelector(".gallery");
imagesGallery.style.display = "flex";
imagesGallery.append(firstItem, secondItem, thirdItem);
