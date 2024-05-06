import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import transportRoute from "./routes/transportRoute.js";
import cors from "cors";


const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern");
});
0;

app.use("/transport", transportRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connect to database");
    app.listen(PORT, () => {
      console.log(`App listen to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
