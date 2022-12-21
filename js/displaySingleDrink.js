import displayGif from "./displayGif.js";
import fetchDrinks from "./fetchDrinks.js";

const singleDrinkContainer = document.querySelector(".single-drink");

const displaySingleDrink = async function () {
  try {
    const drinkId = localStorage.getItem("drink");
    if (!drinkId) {
      window.location.replace("index.html");
    } else {
      displayGif(true);
      const res = await fetchDrinks(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
      );
      const [data] = res.drinks;
      const {
        strDrinkThumb: imgSrc,
        strDrink: drinkName,
        strInstructions: recipe,
      } = data;
      let ingredients = Object.entries(data).filter(
        (entry) => entry[0].startsWith("strIngredient") && entry[1] !== null
      );
      if (ingredients.length > 5) {
        ingredients = ingredients.slice(0, 5);
      }
      const markup = `
      <div class="img-box">
          <img
            src="${imgSrc}"
            alt="cocktail-img"
            class="cocktail-img"
          />
      </div>
      <div class="drink-text">
        <h2 class="drink-name">${drinkName}</h2>
        <p class="drink-desc">
          ${recipe}
        </p>
        <ul class="ing-list">
        ${ingredients
          .map((ing) => {
            return `
          <li>
            <ion-icon name="checkbox-outline" class="icon"></ion-icon>
            <p>${ing[1]}</p>
          </li>
          `;
          })
          .join("")}
        </ul>
        <a href="/index.html" class="all-drinks-link"> All Cocktails </a>
      </div>
    `;
      displayGif();
      singleDrinkContainer.insertAdjacentHTML("beforeend", markup);
    }
  } catch (error) {
    console.error(`Something went wrong ${error.message}`);
  }
};

window.addEventListener("DOMContentLoaded", displaySingleDrink);
