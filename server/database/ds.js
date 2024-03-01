import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo-app.kic2xmj.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo-app`

    mongoose.connect(MONGODB_URI);

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Database disconnected");
    })

    mongoose.connection.on('error', (error) => {
        console.log(`Error while connecting with the database `, error);
    })
}

export default Connection;