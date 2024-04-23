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

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 8000; // Default to port 8000 if PORT is not provided in the environment

Connection();

app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT}`)
});
