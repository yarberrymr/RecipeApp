import React from "react";
import AddRecipe from "./AddRecipe";

function RecipeList({ recipes, deleteRecipe }) {
  // accept an array of recipes and a deleteRecipe function that is passed
  //into the AddRecipe component

//Create a table that displays all of the recipes in the array in a table.
//Also returns the AddRecipe component with the map method to create the rows of the table
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => ( 
          <AddRecipe 
          recipe={recipe} 
          deleteRecipe={deleteRecipe}
          index={index}
          />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
