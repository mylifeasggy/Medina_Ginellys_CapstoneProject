import express from "express";
import cors from "cors"
import 'dotenv/config.js'
import { getRecipeFromAPI } from "./api/recipeAPI.js";

// import Ingredients from "./models/IngredientsModel.js"

import connectDb from "./db.js";

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors())

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`



app.post('/', async (req, res)=> {

    //Getting the ingredients from the front end
    const ingredients = req.body.ingredients;

    try { 
        const recipe = await getRecipeFromAPI(ingredients)

        //sending the recipe
        res.json({recipe})
    } catch(e) {
        console.log(e)
        res.status(500).json({e: "API error"})
    }
 
})

app.listen(port, () => {
    console.log(`Server listening on port:http://localhost:${port}`)
    connectDb()
});