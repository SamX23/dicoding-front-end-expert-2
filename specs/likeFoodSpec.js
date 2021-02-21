import FavoriteDishIdb from "../src/scripts/data/fetch-db";
import * as TestFactories from "./helpers/testFactories";

/*
Scenario of liking a dish
- Dish has not been liked
- Like button shows
- Like button clicked
- Dish added to the favorite list
  - If dish has been liked
    - No need to be added
  - If dish has no id
    - No need to process
    - System not failed
*/

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Liking a food", () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show like button when food has not been liked before", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    expect(
      document.querySelector('[aria-label="Favorite this dish"]')
    ).toBeTruthy();
  });

  it("should not show unlike button when food has not been liked before", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    expect(
      document.querySelector('[aria-label="Unfavourite this dish"]')
    ).toBeFalsy();
  });

  it("should be able to like a dish when button clicked", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const dish = await FavoriteDishIdb.getDish(1);

    expect(dish).toEqual({ id: 1 });

    FavoriteDishIdb.deleteDish(1);
  });

  it("should not add a dish again when its already liked", async () => {
    await TestFactories.likeButtonPresenterWithDish({ id: 1 });

    await FavoriteDishIdb.putDish({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteDishIdb.getAllDish()).toEqual([{ id: 1 }]);

    FavoriteDishIdb.deleteDish(1);
  });

  it("should not add a dish when it has no id", async () => {
    await TestFactories.likeButtonPresenterWithDish({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteDishIdb.getAllDish()).toEqual([]);
  });
});
