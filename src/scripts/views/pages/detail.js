import UrlParser from "../../routes/url-parser";
import Source from "../../data/source";
import { DetailedItems } from "../template/creator";
// import LikeButtonInitiator from "../../utils/like-button-initiator";

const Details = {
  async render() {
    return `
    <div id="dish__details" class="detail container__height"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const items = await Source.Details(url.id);
    console.log(items.restaurant);
    const detailContainer = document.querySelector("#dish__details");
    detailContainer.innerHTML = DetailedItems(items.restaurant);
  },
};

export default Details;
