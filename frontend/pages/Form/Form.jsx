import { useState } from "react"

const url = import.meta.env.VITE_BASE_URL

const initialForm = {
    title: "",
    author:"",
    ingredients:"",
    cook_time:0,
    servings:0,
    directions:"",
    notes:"",
    
}
const Form = () => {

    const [form, setForm] = useState(initialForm)
    

function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
}


async function handleSubmit(e) {
    e.preventDefault()

    const recipe = {
        title: form.title,
        author: form.author,
        ingredients: form.ingredients,
        cook_time: form.cook_time,
        servings: form.servings,
        directions: form.directions,
        notes: form.notes,

    }

        const response = await fetch(url+'/form',{
            method:'POST',
            body:JSON.stringify(recipe),
            headers:{
                'Content-Type': 'application/json'
            }

    })

    const newForm = await response.json()
    console.log(newForm)
    setForm(initialForm);
    
}

    




    return (
        <div className='create-recipe'>
            <h2> CREATE YOUR RECIPE</h2>
            <form onSubmit={handleSubmit}>
                <label>RECIPE NAME</label>
                <input
                    type="text"
                    name='title'
                    required
                    value={form.title}
                    onChange={handleChange}
                />
                <label>AUTHOR</label>
                <input
                    type='text'
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    required
                />
                <label>INGREDIENTS</label>
                <input
                    type="text"
                    name="ingredients"
                    value={form.ingredients}
                    onChange={handleChange}
                    required            
                    />
                <label>COOK TIME</label>
                <input
                    type='number'
                    name='cook_time'
                    value={form.cook_time}
                     onChange={handleChange}
                    required
                />
                <label>SERVINGS</label>
                <input
                    type='number'
                    name='servings'
                    value={form.servings}
                    onChange={handleChange}
                />
                <label>INSTRUCTIONS</label>
                <textarea
                    name='directions'
                    value={form.directions}
                    onChange={handleChange}
                    >
                </textarea>
                <label>NOTES</label>
                <input
                    type='text'
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
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
