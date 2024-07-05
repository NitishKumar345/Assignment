const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');



require("dotenv").config();
require("./Models/User");
 


//mongoose index
const MONGO_URL = 'mongodb://127.0.0.1:27017/auth-db';

main().then(() => {
   console.log("connected to DB");
})
 .catch((err) =>{
    console.log("MongoDB Connection Error: ", err);
 });
 
async function main(){
    await mongoose.connect(MONGO_URL);
}


const PORT = process.env.PORT || 8080;



app.get("/Nitish", (req, res) =>{
    res.send("Kumar");
});

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})