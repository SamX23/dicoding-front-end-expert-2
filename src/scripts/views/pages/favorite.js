import FavoriteDishIdb from "../../data/fetch-db";
import FavoriteDishView from "./liked-dish/favorite-dish-view";
import FavoriteDishShowPresenter from "./liked-dish/favorite-dish-show-presenter";

const view = new FavoriteDishView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteDishShowPresenter({ view, favoriteDish: FavoriteDishIdb });
    // const favorite = await FavoriteDishIdb.getAllDish();
    // const favouriteContainer = document.getElementById("card");
    // if (favorite && favorite.length > 0) {
    //   favorite.forEach((item) => {
    //     favouriteContainer.innerHTML += createDishItemTemplate(item);
    //   });
    // }
  },
};

export default Favorite;
