class FavoriteDishShowPresenter {
  constructor({ view, favoriteDish }) {
    this._view = view;
    this._favoriteDish = favoriteDish;

    this._showFavoriteDish();
  }

  async _showFavoriteDish() {
    const dish = await this._favoriteDish.getAllDish();
    this._displayDish(dish);
  }

  _displayDish(dish) {
    this._view.showFavoriteDish(dish);
  }
}

export default FavoriteDishShowPresenter;
