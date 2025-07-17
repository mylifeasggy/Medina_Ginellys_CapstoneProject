import express from "express";
import cors from "cors"
import 'dotenv/config.js'
import formRoute from "./routes/formRoute.js"



// import Ingredients from "./models/IngredientsModel.js"

import connectDb from "./db.js";

const app = express()
const port = process.env.PORT

app.use(express.json());
app.use(cors())

/* Routes */
app.use('/form', formRoute )

//Recipes route 

app.listen(port, () => {
    console.log(`Server listening on port:http://localhost:${port}`)
    connectDb()
});