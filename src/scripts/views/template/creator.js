import ENDPOINT from "../../globals/api-endpoints";

const Cards = (data) =>
  `<div id=${data.id} class='card__item'>
    <div class='card__image'>
      <img src=${ENDPOINT.IMG.M}${data.pictureId} alt=${data.name} />
      <span class='card__imageLeft'>${data.city}</span>
      <span class='card__imageRight'>${data.rating}</span>
    </div>
    <div class='card__content'>
      <h3><a href="${`/#/detail/${data.id}`}">${data.name}</a></h3>
      <p>${data.description}</p>
    </div>
  </div>`;

const DetailedItems = (data) => `
<h2 class="detail__title">${data.title}</h2>
  <img class="detail__poster" src=${ENDPOINT.IMG.M}${data.pictureId} alt=${data.name} />
  <div class="detail__info">
    <h3>Information</h3>
    <p>${data.city}</p>
    <p>${data.rating}</p>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${data.description}</p>
  </div>
  
`;

export { DetailedItems, Cards };
