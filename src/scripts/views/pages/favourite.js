import GenerateCards from "../template/creator";
import FavourieDishIdb from "../../data/object-db";

const Favourite = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Dish</h2>
      <div id="favourite" class="favourite"></div>
    </div>`;
  },

  async afterRender() {
    const favourite = await FavourieDishIdb.getAllDish();
    const favouriteContainer = document.querySelector("#favourite");
    favourite.forEach((dish) => {
      favouriteContainer.innerHTML += GenerateCards(dish);
    });
  },
};

export default Favourite;
