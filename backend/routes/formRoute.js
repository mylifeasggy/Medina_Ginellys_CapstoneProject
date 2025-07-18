import express from "express"
import cors from 'cors'

import Form from "../models/formStructure.js"

const formRoute = express.Router()

formRoute.use(express.json())
formRoute.use(cors())

formRoute.get('/', async (req,res)=>{

    try {

        const form = await Form.find({})
        res.status(200).json(form)
    } catch(e) {
        console.log(e)
        res.status(400).json({ error: e.message })
    }

});


formRoute.post('/', async(req, res)=>{

    // const {title, author, ingredients, cook_time, servings, directions,notes }=req.body
    try{

        const recipe = await Form.create(req.body)
        res.status(200).json(recipe)

        console.log(recipe)

    }catch(e) {

        res.status(400).json(e)
    }



})



export default formRoute