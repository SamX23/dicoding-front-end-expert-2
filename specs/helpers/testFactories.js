import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteDish from "../../src/scripts/data/fetch-db";

const likeButtonPresenterWithDish = async (dish) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteDish: FavoriteDish,
    dish,
  });
};

export { likeButtonPresenterWithDish };
