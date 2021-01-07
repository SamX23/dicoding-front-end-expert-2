import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import Data from "../DATA.json";

function GenerateCards() {
  const data = Data.restaurants;

  data.forEach((id, idx) => {
    document.getElementById(
      "card"
    ).innerHTML += `<div id=${idx} class='card__item'><div class='card__image'><img src=${id.pictureId} alt=${id.name} /><span class='card__imageLeft'>${id.city}</span><span class='card__imageRight'>${id.rating}</span></div><div class='card__content'><h4>${id.name}</h4><p>${id.description}</p></div></div></div>`;
  });
}

GenerateCards();
