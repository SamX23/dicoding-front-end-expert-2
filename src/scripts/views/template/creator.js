import ENDPOINT from "../../globals/api-endpoints";

const Cards = (data) =>
  `<div id=${data.id} class='card__item'>
    <a href="${`/#/detail/${data.id}`}">
      <div class='card__image'>
        <img src=${ENDPOINT.IMG.M}${data.pictureId} alt=${data.name} />
        <span class='card__imageLeft'>${data.city}</span>
        <span class='card__imageRight'>${data.rating}</span>
      </div>
      <div class='card__content'>
        <h3>${data.name}</h3>
        <p>${data.description}</p>
      </div>
    </a>
  </div>`;

const DetailedItems = (data) => `
  <div class="detail__header">
    <img class="detail__poster" src=${ENDPOINT.IMG.M}${data.pictureId} alt=${
  data.name
}/>
    <h2 class="detail__title">${data.name.toUpperCase()}</h2>
  </div>
  <div class="detail__info">
    <h4>INFORMATION</h4>
    <p>City : ${data.city}</p>
    <p>Address : ${data.address}</p>
    <p>Rating : ${data.rating}⭐️</p>
    <div class="info__food">
      <h4>FOOD</h4>
      <ul>
        <li>${data.menus.foods[0].name}</li>
        <li>${data.menus.foods[1].name}</li>
        <li>${data.menus.foods[2].name}</li>
      </ul>
    </div>
    <div class="info__drinks">
      <h4>DRINKS</h4>
      <ul>
        <li>${data.menus.drinks[0].name}</li>
        <li>${data.menus.drinks[1].name}</li>
        <li>${data.menus.drinks[2].name}</li>
      </ul>
    </div>
    <div class="info__categories">
      <h4>CATEGORIES</h4>
      <span>${data.categories[0].name}</span>
      ${
        data.categories.length > 1
          ? `<span>${data.categories[1].name}</span>`
          : ``
      }
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

const likeButtonTemplate = () => `
  <button aria-label="Favourite this dish" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const likedButtonTemplate = () => `
  <button aria-label="Unfavourite this dish" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line object-curly-newline
export { DetailedItems, Cards, likeButtonTemplate, likedButtonTemplate };
