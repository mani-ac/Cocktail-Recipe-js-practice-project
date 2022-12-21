import presentDrinks from "./js/presentDrinks.js";
import queryDrinks from "./js/queryDrinks.js";

// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a [25 results]

// https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007 [search by id]

window.addEventListener("DOMContentLoaded", () => presentDrinks());

const searchInput = document.querySelector(".search-bar");
searchInput.addEventListener("keyup", queryDrinks);
