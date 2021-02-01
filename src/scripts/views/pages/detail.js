import UrlParser from "../../routes/url-parser";
import Source from "../../data/source";
import { DetailedItems } from "../template/creator";
import LikeButton from "../../utils/like-button";

const Details = {
  async render() {
    return `
    <div id="dish__details" class="detail container__height"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await Source.Details(url.id);
    const detailContainer = document.getElementById("dish__details");
    detailContainer.innerHTML = DetailedItems(items.restaurant);

    LikeButton.init({
      likeButtonContainer: document.getElementById("likeButtonContainer"),
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
