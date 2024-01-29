import "dotenv/config";
import mongoose from "mongoose";
import app from "../app.js";

const port = process.env.PORT || 5000;

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.13chm8y.mongodb.net/?retryWrites=true&w=majority`;

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
