import "regenerator-runtime";
import App from "./views/app";
import RegisterSW from "./utils/sw-register";
import "../styles/main.css";
import "../styles/responsive.css";

const app = new App({
  button: document.querySelector("#hamburger"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  RegisterSW();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
