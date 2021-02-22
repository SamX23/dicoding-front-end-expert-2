import App from "./views/app";
import RegisterSW from "./utils/sw-register";
import "../styles/main.css";
import "../styles/responsive.css";

const button = document.querySelector("#hamburger");
const drawer = document.querySelector("#drawer");
const content = document.querySelector("#main");

const app = new App({
  button,
  drawer,
  content,
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  RegisterSW();
});
