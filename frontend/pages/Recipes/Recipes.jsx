
import { useState, useRef, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import { FaSearch } from "react-icons/fa";
import '../../src/css/Recipes.css'



const Recipes = () => {

    const [item, setItem] = useState(null);
    const inputRef = useRef()

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=f`

    useEffect(() => {

        async function DisplayRecipes() {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setItem(data.meals)
            } catch (e) {
                console.log(e)
            }
        }
        DisplayRecipes()

    }, [url])

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
            <div>
                {item && item.length > 0 && (
                    <RecipeItem data={item} />

                )}

                {item && item.length === 0 && (
              <p style={{ textAlign: 'center' }}>'No recipes found'</p>


                )}

            </div>

        </div>
    );
}

export default Recipes;
