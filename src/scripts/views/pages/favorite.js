import { Cards } from "../template/creator";
import FavouriteDishIdb from "../../data/fetch-db";

const Favorite = {
  async render() {
    return `
    <div class="container">
      <section class="main__header container__height favourite__header">
        <h2>Your Favorite Dish</h2>
        <p>We serve you the best suggestion for your belly, the best place you can get. All about delicous food discovered by masterpiece.</p>
        <div id="card" class="cards"></div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const favorite = await FavouriteDishIdb.getAllDish();
    const favouriteContainer = document.getElementById("card");
    if (favorite && favorite.length > 0) {
      favorite.forEach((item) => {
        favouriteContainer.innerHTML += Cards(item);
      });
    }
  },
};

export default Favorite;
