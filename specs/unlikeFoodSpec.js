import LikeButton from "../src/scripts/utils/like-button";
import FavouriteDishIdb from "../src/scripts/data/object-db";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A dish", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavouriteDishIdb.putDish({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteDishIdb.deleteDish(1);
  });

  it("should display unlike widget when the dish has been liked", async () => {
    await LikeButton.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      dish: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="Unfavourite this dish"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the dish has been liked", async () => {
    await LikeButton.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      dish: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="Favourite this dish"]')
    ).toBeFalsy();
  });
});
