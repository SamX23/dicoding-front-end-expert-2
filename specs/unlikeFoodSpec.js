import LikeButton from "../src/scripts/utils/like-button";
import FavouriteDishIdb from "../src/scripts/data/fetch-db";

/*
Scenario of dislike a dish
- Dish has been liked
- Unlike button shows
- Unlike button clicked
- Dish deleted from favorite list
  - There are no dish displayed
*/

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

  it("should be able to remove liked dish from the list", async () => {
    await LikeButton.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      dish: {
        id: 1,
      },
    });

    document
      .querySelector('[aria-label="Unfavourite this dish"]')
      .dispatchEvent(new Event("click"));

    expect(await FavouriteDishIdb.getAllDish()).toEqual([]);
  });

  it("should not throw error if the unliked dish is not in the list", async () => {
    await LikeButton.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      dish: {
        id: 1,
      },
    });

    await FavouriteDishIdb.deleteDish(1);

    document
      .querySelector('[aria-label="Unfavourite this dish"]')
      .dispatchEvent(new Event("click"));

    expect(await FavouriteDishIdb.getAllDish()).toEqual([]);
  });
});
