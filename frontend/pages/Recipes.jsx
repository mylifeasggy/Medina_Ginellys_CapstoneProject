
import { useState,useRef } from 'react';
import { FaSearch } from "react-icons/fa";


const Recipes = () => {

    return (
        <div className="main-container">
            <form className="search-ingredient" onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}
                    id="search-bar"
                    placeholder="e.g Pasta"
                />
                <button type="submit" className="add"><FaSearch /></button>
            </form>
            </div>
    );
}

export default Recipes;
