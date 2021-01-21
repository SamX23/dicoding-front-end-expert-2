const Drawer = ({ button, drawer, content }) => {
  button.addEventListener("click", (event) => {
    drawer.classList.toggle("open");
    event.stopPropagation();
  });

  content.addEventListener("click", (event) => {
    drawer.classList.remove("open");
    event.stopPropagation();
  });
};

export default Drawer;
