const storeDrink = function (drinkList) {
  drinkList.addEventListener("click", function (e) {
    const targetEl = e.target.closest(".single-drink-view");
    if (!targetEl) return;

    const articleEl = targetEl.querySelector(".drink");
    const dataId = articleEl.dataset.id;
    localStorage.setItem("drink", dataId);
  });
};

export default storeDrink;
