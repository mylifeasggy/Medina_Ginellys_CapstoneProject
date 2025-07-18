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

        res.status(400).json(e)
    }
});


formRoute.put('/:id', async (req, res) => {

    const {id} =req.params;
    try {
        const response = await Form.findByIdAndDelete(id)
        console.log(response)
        res.status(200).json(response)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

formRoute.put('/:id', async (req, res)=> {


})


export default formRoute