import React, { useState } from "react";

function RecipeCreate({ addNewRecipe }) {
  //create the blank form state to reset the form after submission

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  //introduce the form state and set the default to the above blank state
  const [formData, setFormData] = useState({ ...initialFormState });

  //introduce the change handler to set the form data 
  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  //introduce the submit handler to add the recipe with the addNewRecipe function
  //and reset the form to the blank state
  const submitHandler = (event) => {
    event.preventDefault();
    addNewRecipe(formData);
    setFormData({ ...initialFormState });
  };

  //return the form with inputs appropriately labeled including
  //the submitHandler and changeHandler
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                placeholder="Name"
                type="text"
                onChange={changeHandler}
                value={formData.name}
                required={true}
              />
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                type="text"
                onChange={changeHandler}
                value={formData.cuisine}
                required={true}
              />
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                placeholder="Photo URL"
                type="url"
                onChange={changeHandler}
                value={formData.photo}
                required={true}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                type="text"
                onChange={changeHandler}
                value={formData.ingredients}
                required={true}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                type="text"
                onChange={changeHandler}
                value={formData.preparation}
                required={true}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
