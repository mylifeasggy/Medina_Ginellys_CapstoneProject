import { useEffect } from "react"
import { useState } from "react"
import FormItem from "./FormItem"

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


    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function getForm() {

        try {
            const response = await fetch(url + '/form')
            const data = await response.json();
            setRecipes(data)

        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }

    useEffect(() => {
        getForm()
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
            const response = await fetch(url + '/form', {
                method: 'POST',
                body: JSON.stringify(recipe),
                headers: {
                    'Content-Type': 'application/json'
                },

            })

            const newForm = await response.json()
            console.log(newForm)
            setForm(initialForm);

        } catch (e) {
            console.log(e)
        }
    }

    async function handleDelete(id) {

        console.log("handleDelete called with:", id);
        await fetch(`${url}/form/${id}`, {
            method: 'DELETE'
        });

        getForm()

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
                <input
                    type='text'
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                />
                <button>Submit Recipe</button>
            </form>

            <div className="form-item">

                <FormItem
                />

            </div>
        </div>
    );
}





export default Form;
