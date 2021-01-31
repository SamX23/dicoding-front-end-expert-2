import UrlParser from "../../routes/url-parser";
import Source from "../../data/source";
import { DetailedItems } from "../template/creator";
import LikeButton from "../../utils/like-button";

const Details = {
  async render() {
    return `
    <div id="dish__details" class="detail container__height"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await Source.Details(url.id);
    const detailContainer = document.querySelector("#dish__details");
    detailContainer.innerHTML = DetailedItems(items.restaurant);

    LikeButton.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      dish: {
        id: items.id,
        name: items.name,
        city: items.city,
        rating: items.rating,
        description: items.description,
        address: items.address,
        menu: items.menu,
        customerReviews: items.customerReviews,
        pictureId: items.pictureId,
      },
    });
  },
};

export default Details;
