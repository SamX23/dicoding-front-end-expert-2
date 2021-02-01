import { Cards } from "../template/creator";
import FavourieDishIdb from "../../data/object-db";

const Favourite = {
  async render() {
    return `
    <div class="container">
      <section class="main__header container__height favourite__header">
        <h2>Your Favourite Dish</h2>
        <p>We serve you the best suggestion for your belly, the best place you can get. All about delicous food discovered by masterpiece.</p>
        <div id="card" class="cards"></div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    const favourite = await FavourieDishIdb.getAllDish();
    const favouriteContainer = document.getElementById("card");
    if (favourite && favourite.length > 0) {
      favourite.forEach((item) => {
        favouriteContainer.innerHTML += Cards(item);
      });
    }
  },
};

export default Favourite;
