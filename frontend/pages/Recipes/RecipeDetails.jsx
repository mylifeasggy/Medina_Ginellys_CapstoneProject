import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const RecipeDetails = () => {

    const [details, setDetails]= useState(null)

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

    //For loop to get the list of ingredients. 
    const ingredients= []

    for(let i = 1; i <= 20; i++){

        const ingredient = details[`strIngredient${i}`]
        const measure = details[`strMeasure${i}`]

        if(ingredient && ingredient.trim() !== ""){
            ingredients.push({ingredient,measure})
        }
    }


    return (
        <>

            <div className="recipe-details">
                <h4>Ingredients:</h4>
                <ul> 
            {ingredients.map((ing, i)=>(
                <li key={i}>{ing.measure} {ing.ingredient}</li>

            ))}
        </ul> 

                <h4>Instructions:</h4>
        <p>{details.strInstructions}</p>
            </div>

            <Link to="/recipes"> <button className="go-backbtn"> Back to Recipes </button> </Link>
        </>
    )

}
export default RecipeDetails
