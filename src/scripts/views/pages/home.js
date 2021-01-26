import GenerateCards from "../../utils/cards-generator";
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
    GenerateCards(dish);
  },
};

export default Home;
