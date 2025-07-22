import { TiDelete } from "react-icons/ti";




function IngredientsList({ ingredients, getRecipe, deleteIngredient }) {

  const ing = ingredients.map((ing, index) => (
    <li key={index}>
      {ing}
      <button className="delete-btn" onClick={() => deleteIngredient(index)}> <TiDelete />
      </button>
    </li>
  ));

  return (
    <section>

      <ul className="ingredient-list"> {ing} </ul>
      {ingredients.length >= 3 && <div className="get-recipe">
        <div>
          <h3> Generate a recipe from your list of ingredients</h3>
        </div>
        <button onClick={getRecipe}> Get a recipe </button>

      </div>}
    </section>
  );
}

export default IngredientsList;


