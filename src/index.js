const dogContainer = document.querySelector("#dog-image-container");
const makeUl = document.createElement("ul");
let breedsArray = [];
document.addEventListener("DOMContentLoaded", () => {
  console.log("%c HI", "color: firebrick");

  fetchDogPictures();
  fetchDogBreeds();

  // Event Listeners

  // change color of breeds in list on clicking

  const ulContainer = document.getElementById("dog-breeds");

  ulContainer.addEventListener("click", (e) => {

    if (e.target.nodeName === "LI") {
        if (e.target.style.color === "rgb(9, 255, 0)") {
          e.target.style.color = "black";
        } else {
          e.target.style.color = "rgb(9, 255, 0)";
        }

    }
  });

  // add listener to dropdown list

  const dropDown = document.getElementById("breed-dropdown");

  dropDown.addEventListener("change", (event) => {
    const letter = event.target.value;

    // filter out the breeds that begin with letter selected from dropdown

    const filteredBreeds = breedsArray.filter((breed) =>
      breed.startsWith(letter)
    );



    // remove previous breed list from ul breed container

    ulContainer.innerHTML = " ";

    // append new filtered list

    filteredBreeds.forEach((breed) => createAppendLiEl(breed));
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
      breedsArray = Object.keys(data.message);

      breedsArray.forEach((key) => {
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
