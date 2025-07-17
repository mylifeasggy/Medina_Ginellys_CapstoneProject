

import React from 'react';
import { useState,useRef } from 'react';
import { FaSearch } from "react-icons/fa";


const Recipes = () => {

//const [getData, setData]= useState("")
  const inputRef = useRef()

/*Connection with Backend */

/*
async function getDataRecipe(name) {
    
    try{
        const response= await fetch(`http://localhost:3000/recipes/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },

        })

    }catch(e) {
        console.log(e)
    }
    
}

 async function handleSubmit(e) {
        e.preventDefault();
        const newRecipe = inputRef.current.value.trim();
        if (!newRecipe) return;
        newRecipe= "";
    }
*/


    return (
        <div className="main-container">
            <form className="search-ingredient" onSubmit={handleSubmit}>
                <input type="text" ref={inputRef}
                    id="search-bar"
                    placeholder="e.g cheese"
                />
                <button type="submit" className="add"><FaSearch /></button>
            </form>
            </div>
    );
}

export default Recipes;
