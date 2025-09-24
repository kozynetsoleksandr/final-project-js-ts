import { BaseGame } from "./classes/BaseGame";
import { Expansion } from "./classes/Expansion";
import { Collection } from "./classes/Collection";

// Create BaseGame
const catan = new BaseGame("Catan");
catan.fillData([3, 4], 10, ["Strategy"]);
catan.setMyRating(5);
catan.setMyRating(4);

// Greate second BaseGame
const carcassonne = new BaseGame("Carcassonne");
carcassonne.fillData([2, 5], 8, ["Tile-laying"]);
carcassonne.setMyRating(4);

// Create Expansion
const catanExpansion = new Expansion("Seafarers", catan, "Adds ships and exploration");

// Create Collection
const myCollection = new Collection("My Board Games");

// add games and expansion
myCollection.addItem(catan);
myCollection.addItem(carcassonne);
myCollection.addItem(catanExpansion);

// using client code
console.log("Collection name:", myCollection.CollectionName);
console.log("Total items:", myCollection.countList());
console.log("Base games:", myCollection.countBaseGames());
console.log("Expansions:", myCollection.countExpansions());

console.log("Expansion belongs to:", catanExpansion.getBaseGameName());
