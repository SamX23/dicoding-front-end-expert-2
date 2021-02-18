import {
  createLikeDishButtonTemplate,
  createUnlikeDishButtonTemplate,
} from "../views/template/creator";
import FavouriteDishIdb from "../data/fetch-db";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, dish }) {
    this._likeButtonContainer = likeButtonContainer;
    this._dish = dish;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._dish;

    if (await this._isDishExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDishExist(id) {
    const dish = await FavouriteDishIdb.getDish(id);
    return !!dish;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeDishButtonTemplate();
    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", async () => {
      await FavouriteDishIdb.putDish(this._dish);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeDishButtonTemplate();
    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", async () => {
      await FavouriteDishIdb.deleteDish(this._dish.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
