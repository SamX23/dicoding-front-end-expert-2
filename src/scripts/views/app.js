import Drawer from "../utils/show-drawer";
import GenerateCards from "../utils/cards-generator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    Drawer({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
