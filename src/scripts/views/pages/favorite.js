import FavoriteDish from "../../data/fetch-db";
import FavoriteDishView from "./liked-dish/favorite-dish-view";
import FavoriteDishShowPresenter from "./liked-dish/favorite-dish-show-presenter";

const view = new FavoriteDishView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteDishShowPresenter({ view, favoriteDish: FavoriteDish });
  },
};

export default Favorite;
