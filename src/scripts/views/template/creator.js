import ENDPOINT from "../../globals/api-endpoints";

const GenerateCards = (Data) =>
  `<div id=${Data.id} class='card__item'>
    <div class='card__image'>
      <img src=${ENDPOINT.IMG.M}${Data.pictureId} alt=${Data.name} />
      <span class='card__imageLeft'>${Data.city}</span>
      <span class='card__imageRight'>${Data.rating}</span>
    </div>
    <div class='card__content'>
      <h3><a href="${`/#/detail/${Data.id}`}">${Data.name}</a></h3>
      <p>${Data.description}</p>
    </div>
  </div>`;

export default GenerateCards;
