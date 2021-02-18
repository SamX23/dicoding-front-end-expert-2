import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";

const likeButtonPresenterWithDish = async (dish) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    dish,
  });
};

export { likeButtonPresenterWithDish };
