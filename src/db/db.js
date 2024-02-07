import "dotenv/config";
import mongoose from "mongoose";
import app from "../app.js";

const port = process.env.PORT || 5000;

// const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.13chm8y.mongodb.net/?retryWrites=true&w=majority`;


const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-hxnfwjl-shard-00-00.13chm8y.mongodb.net:27017,ac-hxnfwjl-shard-00-01.13chm8y.mongodb.net:27017,ac-hxnfwjl-shard-00-02.13chm8y.mongodb.net:27017/?ssl=true&replicaSet=atlas-dw7rdk-shard-0&authSource=admin&retryWrites=true&w=majority`


export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URL}`);
        console.log(
            `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
        );
        app.listen(port, () => {
            console.log("Server at ", port);
        });
    } catch (error) {
        return console.log("mongodb connection failed", error);
    }
};
