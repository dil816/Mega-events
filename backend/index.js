import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import feedbackRoute from "./routes/feedbackRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
/*
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
*/

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern");
});0 

app.use("/feedback", feedbackRoute);

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
