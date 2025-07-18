import React from 'react';



const url = import.meta.env.VITE_BASE_URL


const Form = () => {

  

    /*async function getForm() {
        const response = await fetch(`${url}/form`)
        const data =
        
        
    }
*/

    async function handleSubmite(e) {

    }





    return (
        <div className='create-recipe'>
            <h2> CREATE YOUR RECIPE</h2>
            <form>
                <label>RECIPE NAME</label>
                <input 
                type="text" 
                name='recipe_name' 
                required 
                />
                <label>AUTHOR</label>
                <input 
                type='text' 
                name="author" 
                required 
                />
                <label>INGREDIENTS</label>
                <input 
                type="text" 
                name="ingredients" 
                required />
                <label>COOK TIME</label>
                <input 
                type='number' 
                name='cook_time' 
                required 
                />
                <label>SERVINGS</label>
                <input 
                type='number' 
                name='servings' 
                />
                <label>INSTRUCTIONS</label>
                <textarea 
                name='directions'> 
                </textarea>
                <label>NOTES</label>
                <input 
                type='text' 
                name="notes" 
                />
                <button>Submit Recipe</button>
            </form>

        </div>
    );
}



/*  recipe_name: {
        type: String,
        required:true,
    },

    author: {
        type:String,
        required:true,
    },
    ingredients: {
        type:[String],
        required:true
    },
    cook_time: {
        type:Number,
        required:true
    },
    servings: {
        type:Number
    },
    directions: {
        type:String,
        required:true
    },
    notes:{
        type:String

    }
 */


export default Form;
