import presentDrinks from "./presentDrinks.js";

const queryDrinks = function (e) {
  let query = e.target.value;
  if (!query) return;
  presentDrinks(query);
};

export default queryDrinks;
