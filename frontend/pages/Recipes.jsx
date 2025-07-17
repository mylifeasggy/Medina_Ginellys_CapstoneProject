
import { useState, useRef, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import { FaSearch } from "react-icons/fa";



const Recipes = () => {
    const [item, setItem]=useState([]);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=a`

    useEffect(() => {

        async function DisplayRecipes() {
            try {
                const response = await fetch(url)
                const data = await response.json();
                console.log(data.meals)
                setItem(data.meals)


            } catch (e) {
                console.log(e)

            }

        }
        DisplayRecipes()

    }, [url])



    return (
        <div className="main-container">
            <form className="search-ingredient" >
                <h1> Search a Recipe </h1>
                <input type="text"
                    id="search-bar"
                    placeholder="e.g Pasta"
                />
                <button type="submit" className="add"><FaSearch /></button>
            </form>
            <div>
                <RecipeItem
                data={item}
                 />

            </div>

        </div>
    );
}

export default Recipes;
