import { useState, useRef, useEffect } from "react";
import IngredientsList from "./IngredientsList";
import RecipeContainer from "./RecipeContainer"

const SearchBar = () => {

    const [ingredient, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const inputRef = useRef()



    // Each ingredient the user put without spaces.
    function enterIngredient() {

        const newIngredient = inputRef.current.value.trim();
        if (!newIngredient) return;

        setIngredients((prev) => [...prev, newIngredient])

    }

    //User wants to delete ingredient or maybe type it wrong

    function deleteIngredient(indexDelete) {
        setIngredients((prev) =>
            prev.filter((_, index) => index !== indexDelete));

    }

    //Connection to the back end to send the ingredients an receive the recipes.
    async function getRecipe() {

        try {
            const response = await fetch('http://localhost:3000/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ingredients: ingredient }),
            })

            const data = await response.json();
            setRecipe(data.recipe);
            console.log(data.recipe)
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
