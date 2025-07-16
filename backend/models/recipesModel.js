
import mongoose from "mongoose"

const recipesModel = mongoose.Schema({
    text: {
        type: String
    }
})

const Recipes = mongoose.model('recipes', recipesModel)

export default Recipes