import React from "react";

//This file adds the ability to create and return a recipe listing
//that shows a single recipe on a row with ecah column appropriately
//labeled to match the piece of the recipe that is added with an added delete button

function AddRecipe({ recipe, deleteRecipe, index }) {
//destructure recipe for easier use of key/value pairs
  const { name, cuisine, photo, ingredients, preparation } = recipe;

  //return table row with recipe built with key/value pairs
  return (
    <>
      <tr key={index}>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td>
          <img src={photo} alt={photo} />
        </td>
        <td className="content_td">
          <p>{ingredients}</p>
        </td>
        <td className="content_td">
          <p>{preparation}</p>
        </td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default AddRecipe;
