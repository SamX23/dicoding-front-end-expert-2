import ENDPOINT from "../globals/api-endpoints";

const GenerateCards = (Data) => {
  if (Data && Data.length > 0) {
    Data.forEach((id, idx) => {
      const MediumImg = `${ENDPOINT.IMG.M}${id.pictureId}`;
      document.getElementById(
        "card"
      ).innerHTML += `<div id=${idx} class='card__item'><div class='card__image'><img src=${MediumImg} alt=${id.name} /><span class='card__imageLeft'>${id.city}</span><span class='card__imageRight'>${id.rating}</span></div><div class='card__content'><h3>${id.name}</h3><p>${id.description}</p></div></div></div>`;
    });
  }
};

export default GenerateCards;
