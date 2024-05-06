
import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Salary } from "./models/salaryModel.js";
import salaryRoute from './routes/salaryRoute.js'
import feedbackRoute from "./routes/feedbackRoute.js";
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());


app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send(`Welcome to mern stack tutorial`);
});

app.use('/salary',salaryRoute);
app.use("/feedback", feedbackRoute);


       
mongoose.
connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });

