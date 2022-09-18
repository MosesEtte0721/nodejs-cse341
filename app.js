//import mongoose package
const mongoose = require("mongoose");

//import express package
const express = require('express');
const  app = express();

const port =  3000;


//access .env file
const dotenv = require('dotenv');
dotenv.config();



 //connect to MongoDB
 mongoose.connect(process.env.mongodb, ()=>{console.log('connected to mongoDB')});

// creating server/router with express package

app.get('/', (req, res)=>{
    res.send('GIVEN THE SITUATION OF THINGS')
})

app.get('/mName',(req, res)=>{
    res.send('ARCHIBONG is the middle name. Type "/fName"')
})

app.get('/lName',(req, res)=>{
    res.send('ETTE is the last name. Type"/mName"')
})

app.get('/fName',(req, res)=>{
    res.send(' MOSES ARCHIBONG ETTE full name')
})


 app.listen(port,()=>{console.log('connected to the server')})
