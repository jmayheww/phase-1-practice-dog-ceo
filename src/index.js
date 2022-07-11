const dogContainer = document.querySelector("#dog-image-container");
const makeUl = document.createElement("ul");

document.addEventListener("DOMContentLoaded", () => {
  console.log("%c HI", "color: firebrick");

  fetchDogPictures();
  fetchDogBreeds();



 // Event Listeners

  const ulContainer = document.getElementById("dog-breeds");

  ulContainer.addEventListener("click", (e) => {
    e.target.style.color = "rgb(9, 255, 0)";
  });
});

// ASYNC Functions and JSON

// retrives dog img files as json and parses it into object literal

const fetchDogPictures = () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      data.message.forEach((dogImg) => {
        makeEl(dogImg);
      });
    });
};

// retrieves dog breeds from api as json and parses into object literal

const breedUrl = "https://dog.ceo/api/breeds/list/all";

const fetchDogBreeds = () => {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      Object.keys(data.message).forEach((key) => {
        createAppendLiEl(key);
      });
    });
};

// DOM Manipulations

// Makes Img element to be appended to DOM

function makeEl(img) {
  let newImg = document.createElement("img");
  newImg.src = img;

  let newLi = document.createElement("li");

  appendEl(newImg, newLi, "dog-image-container");
}

// makes element from dog breed data that is appeneded to the DOM

function createAppendLiEl(objKey) {
  let newListItem = document.createElement("li");

  newListItem.classList.add("breed-list");
  newListItem.textContent = objKey;

  document.getElementById("dog-breeds").append(newListItem);
}
// function that appends any elements passed to it to the dog container of document

function appendEl(el1, el2, el3) {
  el2.append(el1);

  document.getElementById(el3).append(el2);
}

function addSelectDropDownOptions() {
    const dropDown = document.querySelector("#breed-dropdown");
    const option = document.createElement("option");
}
