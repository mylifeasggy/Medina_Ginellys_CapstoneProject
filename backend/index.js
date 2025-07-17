import express from "express";
import cors from "cors"
import 'dotenv/config.js'
import Ingredients from "./models/ingredientsModel.js";
import recipesRoute from "./routes/recipes.js";
import { getRecipeFromAPI } from "./api/ingredientsAPI.js";

// import Ingredients from "./models/IngredientsModel.js"

import connectDb from "./db.js";

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors())

/* Routes */

//Recipes route 
app.use('/recipes', recipesRoute);

app.post('/', async (req, res) => {

    const { ingredients } = req.body;
    try {
        //Getting the ingredients from the front end
        const ingredientsInput = new Ingredients({ ingredients })
        await ingredientsInput.save()

        const recipe = await getRecipeFromAPI(ingredients);

        //sending the recipe
        res.json({ recipe } );
    } catch (e) {
        console.log(e)
        res.status(500).json({ e: "API error" })
    }

})

app.listen(port, () => {
    console.log(`Server listening on port:http://localhost:${port}`)
    connectDb()
});