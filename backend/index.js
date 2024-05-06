import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoute.js";
import registeRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
//import Register from './Models/Register.js';

import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling cors policy
//option1: Allow All Original with Default of cors(*)
app.use(cors());
//Option 2: Allow Custom Origins
/*app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
    
);
*/

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.use("/users", usersRoute);
app.use("/register", registeRoute);
app.use("/login", loginRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connect to database");
    app.listen(PORT, () => {
      console.log(`App listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
