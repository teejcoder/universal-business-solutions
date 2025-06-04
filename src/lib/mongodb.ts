import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URL;

const dbConnect = async () => {
    try {
        if (!MONGODB_URI){
            console.log('no mongodb_URI')
            return;
        }
       await mongoose.connect(MONGODB_URI)
       console.log('Connected to db!')
    } catch(err){
        console.error(err, "Error in /mongodb.ts/dbConnect")
    }
}

export default dbConnect;