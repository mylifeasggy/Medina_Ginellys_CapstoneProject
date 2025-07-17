import mongoose from "mongoose";

const formModel = mongoose.Schema({
    recipe_name: {
        type: String,
        required:true,
    },

    author: {
        type:String,
        required:true,
    },
    ingredients: {
        type:[String],
        required:true
    },
    cook_time: {
        type:Number,
        required:true
    },
    servings: {
        type:Number
    },
    directions: {
        type:String,
        required:true
    },
    notes:{
        type:String

    }

});

formModel.index({cook_time: 1 });

export default mongoose.model('recipes', formModel);