const assert = require("assert");

Feature("Liking Dish");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked dish", ({ I }) => {
  I.see("Shows no result", "#no_result");
});

Scenario("liking one dish", async ({ I }) => {
  I.see("Shows no result", "#no_result");
  I.amOnPage("/");

  I.seeElement(".card__item");

  const sampleDish = locate(".card__item").first();
  const sampleDishTitle = await I.grabTextFrom(sampleDish);
  I.click(sampleDish);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".card__item");
  const likedDishTitle = await I.grabTextFrom(".card__item");

  assert.strictEqual(sampleDishTitle, likedDishTitle);
});
