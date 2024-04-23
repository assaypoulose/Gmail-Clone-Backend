import express from "express";
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(express.json({  extended:true }));
app.use('/',routes);

const PORT = process.env.PORT;

Connection();

app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT}`)
});