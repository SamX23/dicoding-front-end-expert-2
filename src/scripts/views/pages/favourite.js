import GenerateCards from "../template/cards-generator";
import FavourieDishIdb from "../../data/object-db";

const Favourite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Movie</h2>
      <div id="movies" class="movies"></div>
    </div>`;
  },

  async afterRender() {
    const favourite = await FavourieDishIdb.getAllDish();
    const moviesContainer = document.querySelector("#movies");
    moviesContainer.innerHTML = GenerateCards(favourite);
  },
};

export default Favourite;
