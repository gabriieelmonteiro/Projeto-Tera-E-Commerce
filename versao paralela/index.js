"use strict";

const dataContainer = document.getElementById("data-container");

// create add to favorite btn
const addToFav = document.createElement("button");
const heart = document.createElement("img");

heart.setAttribute("src", "https://icons8.com/icon/581/favorite");
heart.setAttribute("alt", "favorite");
heart.setAttribute("class", "addFavorite");

addToFav.appendChild(heart);

// create buy now btn
const buyNow = document.createElement("button");
const buy = document.createElement("img");

buy.setAttribute(
  "src",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shareicon.net%2Fcircumference-rounded-commerce-buy-button-740215&psig=AOvVaw0LP0XrAUcSquKqJLAZZZxn&ust=1690421728552000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCIkeWdq4ADFQAAAAAdAAAAABAJ"
);
buy.setAttribute("alt", "buy now");
buy.setAttribute("class", "buyNow");

buyNow.appendChild(buy);

// load initial arts from database
function displayDataInDiv(data) {
  data.forEach((item) => {
    const html = `
      <sector class="col text-center">
        <img class="img-fluid img-thumbnail w-100"
            src="${item.image}"
            alt="${item.name}"
        />

        <div class="w-25 p-3 w-100">Título: ${item.name}</div>
        <div class="w-25 p-3 w-100">Artista: ${item.artist}</div>
        <div class="w-25 p-3 w-100">Quantidade: ${
          String(item.quantity).length == 1
            ? `0${item.quantity}`
            : `${item.quantity}`
        }</div>
        <div class="w-25 p-3 w-100">Preço: ${item.price} R$</div>
      </sector>
      `;
    dataContainer.insertAdjacentHTML("beforeend", html);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/arts/")
    .then((response) => response.json())
    .then((data) => {
      displayDataInDiv(data.data.arts);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

// when we click in an art, it opens up a bigger picture and a full description and a button to buy it and when we click outside, it goes back to the previous state
window.addEventListener("click", (e) => {
  const childCards = dataContainer.children;
  const clickedCard = e.target.closest("sector");

  if (clickedCard) {
    Array.from(childCards).forEach((el) => el.classList.add("hidden"));

    clickedCard.classList.toggle("hidden");
    clickedCard.classList.toggle("openPic");

    clickedCard.appendChild(addToFav);
    clickedCard.appendChild(buyNow);
  }

  if (!clickedCard) {
    Array.from(childCards).forEach((el) => {
      el.classList.remove("hidden", "openPic");

      if (el.contains(addToFav)) {
        el.removeChild(addToFav), el.removeChild(buyNow);
      }
    });
  }
});

// add event listeners to add work art to the data base in the category of FAVORITES
addToFav.addEventListener("click", () => {
  window.location.href = "log&cad.html";
});

// add event listeners to add work art to the data base in the CART
buyNow.addEventListener("click", () => {
  window.location.href = "log&cad.html";
});
