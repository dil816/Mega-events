import express from "express";
import { PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Order} from './models/orderModel.js';
import orderRoute from "./routes/orderRoute.js";
import cors from 'cors';



/*
async function run(){

    await client.connect();
    

    app.post('/Cart',async(req,res) => {
        const result= await menuCollections.find().toArray();
        res.send(result)
    })




}

*/
const app = express();

app.use(express.json());
//option1
app.use(cors());
//option2

//app.use(
  //  cors({
    //    origin: 'http://localhost:5555',
      //  methods: ['GET', 'POST','PUT','DELETE'],
        //allowedHeaders: ['Content-Type'],
    //})
//);



app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("welcome");
});

app.use('/order', orderRoute);










mongoose
.connect(mongoDBURL)
.then( () => {
    console.log('connected');

    app.listen(PORT, () => {
        console.log(`app is listening to port: ${PORT}`);
    });
    
}
)
.catch((error) => {
    console.log(error)
});
