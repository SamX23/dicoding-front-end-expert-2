import GenerateCards from "../template/creator";
import Source from "../../data/source";

const Home = {
  async render() {
    return `
    <section class="main__header">
        <h2>Our Best Offering</h2>
        <p>
          We serve you the best suggestion for your belly, the best place you
          can get. All about delicous food discovered by masterpiece.
        </p>
    </section>
    <section id="card" class="cards"></section>
    `;
  },

  async afterRender() {
    const dish = await Source.List();
    const dishContainer = document.getElementById("card");
    if (dish && dish.length > 0) {
      dish.forEach((item) => {
        dishContainer.innerHTML += GenerateCards(item);
      });
    }
  },
};

export default Home;
