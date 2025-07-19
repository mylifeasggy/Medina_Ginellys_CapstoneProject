import express from "express"
import cors from 'cors'

import Form from "../models/formStructure.js"

const formRoute = express.Router()

formRoute.use(express.json())
formRoute.use(cors())

formRoute.get('/', async (req, res) => {

    try {

        const form = await Form.find({})
        res.status(200).json(form)
    } catch (e) {
        console.log(e)
        res.status(400).json({ error: e.message })
    }

});


formRoute.post('/', async (req, res) => {


    try {
        const {
            title, author, cook_time,
            servings, ingredients, directions, notes
        } = req.body;

        const newRecipe = await Form.create({
            title,
            author,
            cook_time,
            servings,
            ingredients,
            directions,
            notes,
        });
        res.status(200).json(newRecipe)

        console.log(newRecipe)

    } catch (e) {

        res.status(400).json({ error: e.message })
    }
});


formRoute.put('/:id', async (req, res) => {

    const { id } = req.params;
    try {
        const updatedRecipe = await Form.findByIdAndUpdate(id, req.body, { new: true })
        console.log(updatedRecipe)


        if (!updatedRecipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json(updatedRecipe)


    } catch (e) {
        console.log(e)
        res.status(400).json({ error: e.message })
    }
})

formRoute.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRecipe = await Form.findByIdAndDelete(id)

        if (!deletedRecipe) {
            return res.status(404).json({ error: "Recipe not found" });


        }
        res.status(200).json({ message: "Recipe deleted successfully", recipeForm });


    } catch (e) {
        console.log(e)
        res.status(400).json({ error: e.message })
    }

})


export default formRoute;