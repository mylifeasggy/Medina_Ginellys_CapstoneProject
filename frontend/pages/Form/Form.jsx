import { useEffect } from "react"
import { useState } from "react"
import FormCard from "./FormCard"
import '../../src/css/Form.css'

const url = import.meta.env.VITE_BASE_URL

const initialForm = {
    title: "",
    author: "",
    ingredients: "",
    cook_time: "",
    servings: 0,
    directions: "",
    notes: "",

}
const Form = () => {

    const [form, setForm] = useState(initialForm)
    const [recipe, setRecipes] = useState(null)
    const [id, setId]= useState(null)
    const [updateForm, setUpdateForm] = useState(false)


    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function fetchForm() {

        try {
            const response = await fetch(url + '/form')
            const data = await response.json();
            setRecipes(data)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchForm()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        const recipe = {
            title: form.title,
            author: form.author,
            cook_time: form.cook_time,
            servings: form.servings,
            ingredients: form.ingredients.split(","),
            directions: form.directions,
            notes: form.notes,

        }

        try {
            let response; 

            if (updateForm && id) {

                    response = await fetch(`${url}/form/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(recipe),
                    headers: { 'Content-Type': 'application/json' },
                });
            } else {
                    response = await fetch(url + '/form', {
                    method: 'POST',
                    body: JSON.stringify(recipe),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            }
            const newForm = await response.json()
            console.log(newForm)
            setForm(initialForm);
            setUpdateForm(false)
            fetchForm();

        } catch (e) {
            console.log(e)
        }
    }


    async function handleUpdate(e, id) {

        let response = await fetch(`${url}/form/${id}`)
        let data = await response.json();

        console.log(data)

        const formData = {
            title: data.title,
            author: data.author,
            cook_time: data.cook_time,
            servings: data.servings,
            ingredients: data.ingredients.join(","),
            directions: data.directions,
            notes: data.notes,
        }
        setId(id)
        setUpdateForm(true)
        setForm(formData)


    }


    return (
        <div className='create-recipe'>
            <h2> CREATE YOUR RECIPE</h2>
            <form onSubmit={handleSubmit}>
                <label>RECIPE TITLE</label>
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
                <label>INGREDIENTS</label>
                <textarea
                    type="text"
                    name="ingredients"
                    row='5'
                    value={form.ingredients}
                    placeholder="separated by comma"
                    onChange={handleChange}
                    required
                >
                </textarea>
                <label>INSTRUCTIONS</label>
                <textarea
                    name='directions'
                    row="5"
                    value={form.directions}
                    onChange={handleChange}
                >
                </textarea>
                <label>NOTES</label>
                <textarea
                    type='text'
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                >
                </textarea>
                <button type="submit"> 
                    {updateForm ? "Update Recipe" : "Submit Recipe"}</button>
            </form>

            <div className="grid-form">
                {recipe && recipe.map((recipe) => (
                    <div key={recipe._id} className="form-container">

                        <FormCard
                            recipe={recipe}
                            onDelete={(id) => {
                                setRecipes(prev => prev.filter(item => item._id !== id));
                            }}

                            handleUpdate={handleUpdate}
                        />

                    </div>

                ))}
            </div>

        </div>
    );
}





export default Form;
