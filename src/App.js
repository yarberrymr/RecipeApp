import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //create the ability to add the newest recipe to the recipes state
  //which allows the RecipeList to display the array of recipes in the table
const addNewRecipe = (newRecipe) => {
  setRecipes((currentRecipes) => [...currentRecipes, newRecipe])
}

//create the ability to delete a recipe which is passed into the RecipeList
//as a prop
function deleteRecipe(idxToDelete) {
  setRecipes(recipes.filter((recipe, index) => index !== idxToDelete));
};
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addNewRecipe={addNewRecipe}/>
    </div>
  );
}

export default App;
