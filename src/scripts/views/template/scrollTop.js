const scrollTop = () => {
  const button = document.getElementById("scrollTopButton");

  button.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  function scrollFunction() {
    if (document.documentElement.scrollTop > 40) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }
  window.onscroll = () => {
    scrollFunction();
  };
};

export default scrollTop;
