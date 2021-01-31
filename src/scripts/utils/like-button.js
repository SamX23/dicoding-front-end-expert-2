import {
  likeButtonTemplate,
  likedButtonTemplate,
} from "../views/template/creator";
import FavourieDishIdb from "../data/object-db";

const LikeButton = {
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
    const dish = await FavourieDishIdb.getDish(id);
    return !!dish;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = likeButtonTemplate();
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavourieDishIdb.putDish(this._dish);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = likedButtonTemplate();
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavourieDishIdb.deleteDish(this._dish.id);
      this._renderButton();
    });
  },
};

export default LikeButton;
