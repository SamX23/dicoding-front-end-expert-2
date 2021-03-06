import { createDishItemTemplate } from "../../template/creator";

class FavoriteDishView {
  getTemplate() {
    return `
        <div class="container">
            <section class="main__header container__height favourite__header">
                <h2>Your Favorite Dish</h2>
                <p>We serve you the best suggestion for your belly, the best place you can get. All about delicous food discovered by masterpiece.</p>
                <div id="card" class="cards"></div>
            </section>
        </div>
        `;
  }

  showFavoriteDish(dishes = []) {
    let html;
    if (dishes.length) {
      html = dishes.reduce(
        (carry, dish) => carry.concat(createDishItemTemplate(dish)),
        ""
      );
    } else {
      document.getElementById("card").style.display = "block";
      html = this._getEmptyDishTemplate();
    }

    document.getElementById("card").innerHTML = html;
    document.getElementById("card").dispatchEvent(new Event("card:updated"));
  }

  _getEmptyDishTemplate() {
    return `<div id="no_result">Shows no result</div>`;
  }
}

export default FavoriteDishView;
