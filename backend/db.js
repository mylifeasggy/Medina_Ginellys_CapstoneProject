import mongoose from "mongoose";

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log('Database Connected')
    } catch (e) {

        console.log("Database connection failed:", e.message)
    }

};

export default connectDb;

