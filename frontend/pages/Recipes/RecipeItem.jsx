import { useState } from "react"
import RecipeDetails from "./RecipeDetails"
import { Link } from 'react-router-dom';

const RecipeItem = ({ data }) => {


    const [selectId, setSelectedId]= useState(null)

    function handleClick(id){
        setSelectedId((prev)=> (prev === id ? null: id));

    }

    //Rendering each image of the recipe with name;
    //Missing: When click image, render the ingredients and instruction.

    return (
        <>
            <div className="recipe-grid">
                {data.map(item => {
                    return(
                    <div className="recipes-container" key={item.idMeal}>
                      
                        <img className="recipe-image"
                            src={item.strMealThumb}
                            alt={item.strMeal}
                            onClick={()=> handleClick(item.idMeal) }
                        />
                        <h3 className="recipe-name"> {item.strMeal}</h3>


                        {selectId  === item.idMeal && <RecipeDetails item={item} />}

                    </div>
                    )

                    
                })}
            </div>
        </>
    );
}

export default RecipeItem;
