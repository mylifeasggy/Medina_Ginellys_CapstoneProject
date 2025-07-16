function IngredientsList({ ingredients, getRecipe, deleteIngredient }) {

    const ing = ingredients.map((ing, index) => (
        <li key={index}>
            {ing} <button className="delete-btn" onClick={() => deleteIngredient(index)}> ❌ </button>


        </li>
    ));




}
