import express from "express";
import cors from "cors"
import 'dotenv/config.js'
import Anthropic from "@anthropic-ai/sdk";
import Ingredients from "./models/recipesModel.js"

import connectDb from "./db.js";

const app = express()
const port = process.env.PORT

app.use(express.json);
app.use(cors())


const api_key=process.env.API_KEY

const anthropic = new Anthropic({
    apiKey: api_key,
});

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`



app.post('/', async (req, res)=> {

    const ingredients = await Ingredients.create(req.body)
    const ingredientsString= ingredients.join(",")

    try { 
        const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        temperature:1,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    res.json({recipe: msg.content[0].text});
    } catch(e) {
        console.log(e)
        res.status(500).json({e: "API error"})
    }
 
})

app.listen(port, () => {
    console.log(`Server listening on port:http://localhost:${port}`)
    connectDb()
});