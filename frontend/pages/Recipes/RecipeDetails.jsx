import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const RecipeDetails = () => {

    // Getting the information by ID, when user click the card of the recipe he wants to see.

    const [details, setDetails] = useState(null)

    const { id } = useParams();

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

    useEffect(() => {

        async function DisplayRecipes() {
            try {
                const response = await fetch(url)
                const data = await response.json();
                console.log(data.meals[0])
                setDetails(data.meals[0])
            } catch (e) {
                console.log(e)

            }

        }
        DisplayRecipes()

    }, [id])



    if (!details) {
        return;
    }

    //For loop to get the list of ingredients because its a object
    const ingredients = []

    for (let i = 1; i <= 20; i++) {

        const ingredient = details[`strIngredient${i}`]
        const measure = details[`strMeasure${i}`]

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ ingredient, measure })
        }
    }



    return ( 

        // The details of the recipe, name, ingrediets etc
        <>

            <div className="recipe-details">
                <h2 className="details-title">{details.strMeal}</h2>
                <img className="details-image" src={details.strMealThumb} alt={details.strMeal} />

                <h4 className="details-title" >Ingredients:</h4>
                <ul className="details-list">
                    {ingredients.map((ing, i) => (
                        <li key={i}>{ing.measure} {ing.ingredient}</li>

                    ))}
                </ul>

                <h4 className="details-title">Instructions:</h4>
                <p className="instructions">{details.strInstructions}</p>

                <div className="link">
                    <Link to="/recipes" className="go-back" >Back</Link>
                </div>
            </div>


        </>
    )

}
export default RecipeDetails
