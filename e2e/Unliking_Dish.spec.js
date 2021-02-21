const assert = require("assert");

Feature("Unliking Dish");

Before(({ I }) => {
  I.amOnPage("/");
});

Scenario("unliking one dish", async ({ I }) => {
  I.seeElement(".card__item");

  const sampleDish = locate(".card__item").first();
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card__item");
  const likedDish = locate(".card__item").first();
  const likedDishTitle = await I.grabTextFrom(".card__item");

  assert.strictEqual(sampleDishTitle, likedDishTitle);

  I.click(likedDish);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.see("Shows no result", "#no_result");
});
