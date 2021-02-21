import {
  createLikeDishButtonTemplate,
  createUnlikeDishButtonTemplate,
} from "../views/template/creator";

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteDish: FavoriteDish, dish }) {
    this._likeButtonContainer = likeButtonContainer;
    this._dish = dish;
    this._favoriteDish = FavoriteDish;

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
    const dish = await this._favoriteDish.getDish(id);
    return !!dish;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeDishButtonTemplate();
    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteDish.putDish(this._dish);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeDishButtonTemplate();
    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", async () => {
      await this._favoriteDish.deleteDish(this._dish.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
