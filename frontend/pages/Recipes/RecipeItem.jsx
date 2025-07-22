import { useState } from "react"
import RecipeDetails from "./RecipeDetails"
import { Link } from 'react-router-dom';


const RecipeItem = ({ data }) => {


    // const [selectId, setSelectedId]= useState(null)

    // function handleClick(id){
    //     setSelectedId((prev)=> (prev === id ? null: id));

    // }

    //Rendering each image of the recipe with name so user can click on it and display the details of the recipe.
    //Missing: When click image, render the ingredients and instruction.

    return (
        <>
            <div className="recipe-grid">
                {data.map(recipe => {
                    return(
                    <div className="recipes-container" key={recipe.idMeal}>
                      <Link to={`/recipes/${recipe.idMeal}`}>
                        <img className="recipe-image"
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            // onClick={()=> handleClick(recipe.idMeal) }
                        />
                        <h3 className="recipe-name"> {recipe.strMeal}</h3>
                        </Link>
                    {/* If user select one and it's the same to the id of the meal. the display the details of it. */}
                        {/* {selectId  === recipe.idMeal && <RecipeDetails recipe={recipe} />} */}

                    </div>
                    )

                    
                })}
            </div>
        </>
    );
}

export default RecipeItem;
