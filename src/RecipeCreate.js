import React, { useState } from "react";
import "./App.css"

function RecipeCreate({ recipes, setRecipes }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [form, setForm] = useState({ ...initialFormState })

  const handleChange = ({ target }) => {
    setForm({...form, [target.name]: target.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, form])
    setForm({ ...initialFormState })
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required={true}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
            </td>
            <td>
              <div>
                <label htmlFor="cuisine">Cuisine</label>
                <input
                  name="cuisine"
                  type="text"
                  id="cuisine"
                  required={true}
                  onChange={handleChange}
                  placeholder="Cuisine"
                />
              </div>
            </td>
            <td>
              <div>
                <label htmlFor="photo">Photo</label>
                <input
                  type="url"
                  id="photo"
                  name="photo"
                  required={true}
                  onChange={handleChange}
                  placeholder="URL"
                />
              </div>
            </td>
            <td>
              <div>
                <label htmlFor="ingredients"></label>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  required={true}
                  onChange={handleChange}
                  placeholder="Ingredients"
                />
              </div>
            </td>
            <td>
              <div>
                <label htmlFor="preparation"></label>
                <textarea
                  id="preparation"
                  name="preparation"
                  required={true}
                  onChange={handleChange}
                  placeholder="Preparation"
                />
              </div>
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
