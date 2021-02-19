import UrlParser from "../../routes/url-parser";
import Source from "../../data/source";
import { createDishItemTemplate } from "../template/creator";
import LikeButtonPresenter from "../../utils/like-button-presenter";
import FavouriteDishIdb from "../../data/fetch-db";

const Details = {
  async render() {
    return `
    <div class="container">
      <div id="dish__details" class="detail container__height"></div>
      <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await Source.Details(url.id);
    const detailContainer = document.getElementById("dish__details");
    detailContainer.innerHTML = createDishItemTemplate(items.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.getElementById("likeButtonContainer"),
      favoriteDish: FavouriteDishIdb,
      dish: {
        id: items.restaurant.id,
        name: items.restaurant.name,
        city: items.restaurant.city,
        rating: items.restaurant.rating,
        description: items.restaurant.description,
        pictureId: items.restaurant.pictureId,
      },
    });
  },
};

export default Details;
