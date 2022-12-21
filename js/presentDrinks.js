import displayDrinks from "./displayDrinks.js";
import displayGif from "./displayGif.js";
import fetchDrinks from "./fetchDrinks.js";
import storeDrink from "./storeDrink.js";

const drinkList = document.querySelector(".cocktail-list");
const noDrinkMsg = document.querySelector(".no-data");

const presentDrinks = async function (query = "a") {
  try {
    displayGif(true);
    const data = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
    displayGif();
    if (!data.drinks) {
      noDrinkMsg.textContent = "Sorry, No drinks matched your search";
      drinkList.innerHTML = "";
      throw new Error(`Something went wrong. Please try again`);
    } else {
      noDrinkMsg.textContent = "";
      const drinkList = displayDrinks(data.drinks);
      storeDrink(drinkList);
    }
  } catch (error) {
    console.error(`Something went wrong ${error.message}`);
  }
};

export default presentDrinks;
