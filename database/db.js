import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('DB connected successfully');
    }catch (error) {
        console.log('Error while connecting the DB', error.message);
    }
};


export default Connection;