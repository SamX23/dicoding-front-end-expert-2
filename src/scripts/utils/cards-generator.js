const GenerateCards = ({ data }) => {
  const Data = data.restaurants;

  Data.forEach((id, idx) => {
    document.getElementById(
      "card"
    ).innerHTML += `<div id=${idx} class='card__item'><div class='card__image'><img src=${id.pictureId} alt=${id.name} /><span class='card__imageLeft'>${id.city}</span><span class='card__imageRight'>${id.rating}</span></div><div class='card__content'><h3>${id.name}</h3><p>${id.description}</p></div></div></div>`;
  });
};

export default GenerateCards;
