import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL;

const dbConnect = async () => {
    try {
        if (!MONGODB_URI){
            throw new Error("Missing MONGODB_URI");
        }
        console.log("Attempting to connect to MongoDB...");

        const connection = await mongoose.connect(MONGODB_URI);
        
        console.log("Connected to MongoDB successfully");

        return connection;
    } catch(err){
        console.error(err, "Error in /mongodb.ts/dbConnect")
        throw err;
    }
}

export default dbConnect;