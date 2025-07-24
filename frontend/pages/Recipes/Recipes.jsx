
import { useState, useRef, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import { FaSearch } from "react-icons/fa";
import '../../src/css/Recipes.css'



const Recipes = () => {

    const [item, setItem] = useState([]);
    const inputRef = useRef()
// This is displaying random recipes in the page with letter f, just to the page look good an less empty. 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=f`

    useEffect(() => {

        async function DisplayRecipes() {
            try {
                const response = await fetch(url)
                const data = await response.json();
                if (data.meals) {
                    setItem(data.meals);
                } else {
                    setItem([]);
                }
            } catch (e) {
                console.log(e)
            }
        }
        DisplayRecipes()

    }, [url])



// After 


    async function handleRecipe(e) {
        e.preventDefault();
        let recipe = inputRef.current.value.trim();
        if (!recipe) return;

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
            const data = await response.json();
            setItem(data.meals)
        } catch (e) {
            console.log(e);

        }
        recipe = inputRef.current.value = "";
    }



//User input the name of the recipe he wants to see. and if there's not a recipe it's supossed to show No recipes found.



    return (
        <div className="main-container">
            <form className="search-ingredient" onSubmit={handleRecipe}>
                <input type="text"
                    ref={inputRef}
                    id="search-bar"
                    placeholder="Search a recipe"
                />
                <button type="submit" className="add"><FaSearch /></button>
            </form>
            <div className='recipes-test'>
                {item && (
                    <RecipeItem data={item} />

                )}

                {!item &&  (
                    <p style={{ textAlign: 'center' }}>'No recipes found'</p>


                )}

            </div>

        </div>
    );
}

export default Recipes;
