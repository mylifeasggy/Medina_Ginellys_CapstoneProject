import { MdDeleteOutline } from "react-icons/md";



function IngredientsList({ ingredients, getRecipe, deleteIngredient }) {


  return (
    <section>
      <>
      {ingredients.length > 0 && (
        <div className="ing-container">
          <ul className="ingredient-list">
            {ingredients.map((ing, i) => (
              <li key={i}>
                {ing}
                <div>
                  <button className="delete-btn" onClick={() => deleteIngredient(i)}>
                    <MdDeleteOutline />
                  </button>
                </div>  </li>))}

          </ul> </div>
          )}

        {ingredients.length >= 3 && <div className="get-recipe">
          <div>
            <h3> Generate a recipe from your list of ingredients</h3>
          </div>
          <button onClick={getRecipe}> Get a recipe </button>

        </div>}
      </>
    </section>
  );
}

export default IngredientsList;


