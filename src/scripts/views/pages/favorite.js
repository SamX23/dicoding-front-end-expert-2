import { Cards } from "../template/creator";
import FavouriteDishIdb from "../../data/fetch-db";
import FavoriteDishView from "./liked-dish/favorite-dish-view";
import FavoriteDishShowPresenter from "./liked-dish/favorite-dish-show-presenter";

const view = new FavoriteDishView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteDishShowPresenter({ view, favoriteDish: FavouriteDishIdb });
    // const favorite = await FavouriteDishIdb.getAllDish();
    // const favouriteContainer = document.getElementById("card");
    // if (favorite && favorite.length > 0) {
    //   favorite.forEach((item) => {
    //     favouriteContainer.innerHTML += Cards(item);
    //   });
    // }
  },
};

export default Favorite;
