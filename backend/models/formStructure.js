import mongoose from "mongoose";

const formModel = mongoose.Schema({
    title: {
        type: String,
        required:true,
    },

    author: {
        type:String,
        required:true,
    },
    cook_time: {
        type:String,
        required:true
    },
    servings: {
        type:Number,
        default:1
    },
     ingredients: {
        type:[String],
        required:true
    },
    directions: {
        type:String,
        required:true
    },
    notes:{
        type:String

    }

});

formModel.index({servings: 1 });

export default mongoose.model('recipes', formModel);