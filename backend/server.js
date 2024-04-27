const express=require('express');
// import express = require('express');
const dotenv =require('dotenv');
const morgan =require('morgan');
const colors =require('colors');
const connectToMongo = require("./mongo.js");


dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan('dev'))

//routes
app.get('/',(req,res)=>{
    res.status(200).send({
        message:"this port is running"
    })
})

//port
const port = process.env.PORT || 8080;

//listen
app.listen(port,()=>{
    console.log("port is running")

})