const gif = document.querySelector(".loading-gif");

const displayGif = function (show = false) {
  show ? gif.classList.remove("hide-load") : gif.classList.add("hide-load");
};

export default displayGif;
