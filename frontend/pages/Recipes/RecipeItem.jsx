
import { Link } from 'react-router-dom';


const RecipeItem = ({ data }) => {

    //Rendering each image of the recipe with name so user can click on it and display the details of the recipe.

    return (
        <>
            <div className="recipe-grid">
                {data.map(recipe => {
                    return(
                    <div className="recipes-container" key={recipe.idMeal}>
                      <Link className="link-container" to={`/recipes/${recipe.idMeal}`}>
                        <img className="recipe-image"
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                        />
                        <h3 className="recipe-name"> {recipe.strMeal}</h3>
                        </Link>
                   
                    </div>
                    )

                    
                })}
            </div>
        </>
    );
}

export default RecipeItem;
