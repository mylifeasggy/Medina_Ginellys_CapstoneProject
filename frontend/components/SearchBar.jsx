import { useState, useRef, useEffect } from "react";

const SearchBar = () => {

    const [ingredient, setIngredient] = useState([])
    const [recipe, setRecipe] = useState("")

    const inputRef = useRef()

    function enterIngredient(formData) {

        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() === "") return;

        setIngredient((prev) => [...prev, newIngredient])

    }


    async function submitIngredient(e) {
        e.preventDefault();
        const formData = {
            text: inputRef.current.value
        }
        const response = await fetch('http://localhost:3000/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        await response.json()

    }


    return (
        <div className="main-container">
            <form className="search-ingredient" onSubmit={submitIngredient}>
                <input type="text" ref={inputRef}
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
