import { createDishItemTemplate } from "../template/creator";
import Source from "../../data/source";
import scrollTop from "../template/scrollTop";

const Home = {
  async render() {
    return `
    <header>
        <div class="hero">
          <picture>
            <source media="(max-width: 600px)" srcset="/images/hero-image-small.jpg">
            <img class="hero__img lazyload" data-src="/images/hero-image-large.jpg" alt="hero images"/>
          </picture>
          <div class="hero__text">
            <h1 class="hero__heading">DELICIOUS DISH</h1>
          </div>
        </div>
    </header>
    <div class="container">
      <section class="main__header ">
          <h2>Our Best Offering</h2>
          <p>
            We serve you the best suggestion for your belly, the best place you
            can get. All about delicous food discovered by masterpiece.
          </p>
      </section>
      <section id="card" class="cards "></section>
    </div>
    <button aria-label="scroll to top" id="scrollTopButton">TOP</button>
    `;
  },

  async afterRender() {
    const dish = await Source.List();
    const dishContainer = document.getElementById("card");
    if (dish && dish.length > 0) {
      dish.forEach((item) => {
        dishContainer.innerHTML += createDishItemTemplate(item);
      });
    }
    scrollTop();
  },
};

export default Home;
