const drinkList = document.querySelector(".cocktail-list");

const displayDrinks = function (obj) {
  const markup = obj
    .map((drink) => {
      const {
        idDrink: drinkId,
        strDrinkThumb: imgSrc,
        strDrink: drinkName,
      } = drink;
      return `
    <li>
      <a href="/drink.html" class="single-drink-view">
        <article class="drink" data-id="${drinkId}">
          <img
            src="${imgSrc}"
            alt="cocktail-img"
            class="drink-img"
          />
          <h3>${drinkName}</h3>
        </article>
      </a>
    </li>
    `;
    })
    .join("");
  drinkList.innerHTML = markup;
  return drinkList;
};

export default displayDrinks;
