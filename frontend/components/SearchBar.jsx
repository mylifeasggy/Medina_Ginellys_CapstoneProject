import { useState, useRef } from "react";

const SearchBar = () => {
    
    const [ingrediente, setIngredient]= useState([])














    return (
        <div className="main-container">
            <form className="search-ingredient">
                <input type="text"
                id="search-bar"
                name="ingredient"
                placeholder="e.g cheese"
                /> 
                <button type="submit" className="add">ADD INGREDIENT</button>
            </form>
            
        </div>
    );
}

export default SearchBar;
