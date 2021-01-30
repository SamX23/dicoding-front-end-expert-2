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
  <div class="detail__header">
    <img class="detail__poster" src=${ENDPOINT.IMG.M}${data.pictureId} alt=${
  data.name
}/>
    <h2 class="detail__title">${data.name.toUpperCase()}</h2>
  </div>
  <div class="detail__info">
    <h3>Information</h3>
    <p>Kota : ${data.city}</p>
    <p>Alamat : ${data.address}</p>
    <p>Rating : ${data.rating}</p>
    <div class="info__food">
      <h4>Food</h4>
      <ul>
        <li>${data.menus.foods[0].name}</li>
        <li>${data.menus.foods[1].name}</li>
        <li>${data.menus.foods[2].name}</li>
      </ul>
    </div>
    <div class="info__drinks">
      <h4>Drinks</h4>
      <ul>
        <li>${data.menus.drinks[0].name}</li>
        <li>${data.menus.drinks[1].name}</li>
        <li>${data.menus.drinks[2].name}</li>
      </ul>
    </div>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${data.description}</p>
  </div>
  <div class="detail__reviews">
    <h4>Reviews</h4>
    <p>Oleh ${data.customerReviews[0].name} : </p>
    <p>${data.customerReviews[0].review}</p>
    <p>Pada ${data.customerReviews[0].date}</p>
  </div>
`;

export { DetailedItems, Cards };
