const dogContainer = document.querySelector("#dog-image-container");
const makeUl = document.createElement("ul");

document.addEventListener("DOMContentLoaded", () => {
  console.log("%c HI", "color: firebrick");

  fetchDogPictures();
});

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

const breedUrl = 'https://dog.ceo/api/breeds/list/all';




// Makes Img element to be appended to DOM

function makeEl(img) {
  let newImg = document.createElement("img");
  newImg.src = img;

  let newLi = document.createElement("li");

  appendEl(newImg, newLi);
}

// function that appends any elements passed to it to the dog container of document

function appendEl(el1, el2) {
  el2.append(el1);

  document.getElementById("dog-image-container").append(el2);
}
