
import mongoose from "mongoose"

const ingredientsModel = mongoose.Schema({
    ingredients: {
        type: String
    }
})

const Ingredients = mongoose.model('ingredients', ingredientsModel)

export default Ingredients