import { useState, useRef } from "react";
import IngredientsList from "./IngredientsList";
import RecipeContainer from "./RecipeContainer"
import '../../src/css/MainPage.css'
import { getRecipeFromAPI } from "../../api/recipeAPI";

const SearchBar = () => {

    const [ingredient, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const inputRef = useRef()



    // Each ingredient the user put without spaces.
    function enterIngredient() {

        const newIngredient = inputRef.current.value.trim().toLowerCase();
        if (!newIngredient) return;

        setIngredients((prev) => [...prev, newIngredient])
    }

    //User wants to delete ingredient

    function deleteIngredient(indexDelete) {
        setIngredients((prev) =>
            {  const d = prev.filter((_, index) => index !== indexDelete)
                //console.log(d)
                return d;
               
            });
             setRecipe("")
       
    }
    // Click on btn getRecipe to get the custom recipe with markdowns
    async function getRecipe() {
       
        try {
            const recipeMarkdown = await getRecipeFromAPI(ingredient)
            setRecipe(recipeMarkdown)
        } catch (e) {
            console.log(e)
        }
    }


    async function submitIngredient(e) {
        e.preventDefault();
        enterIngredient();
        inputRef.current.value = "";
    }


    return (
        <div className="main-container">
            <h1 className="main-title">What's in your fridge? 🍴 </h1>
            <form className="search-ingredient" onSubmit={submitIngredient}>
                <input type="text" ref={inputRef}
                    id="search-bar"
                    placeholder="e.g cheese"
                />
                <button type="submit" className="add">ADD INGREDIENT</button>
            </form>
            <IngredientsList
                ingredients={ingredient}
                deleteIngredient={deleteIngredient}
                getRecipe={getRecipe}

            />
            {recipe && <RecipeContainer recipe={recipe} />}
        </div>
    );
}

export default SearchBar;
