import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import Data from "../DATA.json";

const data = Data.restaurants;

data.forEach((id) => {
  document.getElementById(
    "card"
  ).innerHTML += `<div class='card__item'><div class='card__image'><img src='${id.pictureId}' alt='${id.name}' /><p>${id.city}</p></div><div class='card__content'><h4>${id.name}</h4><p>${id.description}</p></div></div></div>`;
});
