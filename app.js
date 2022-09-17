//import mongoose package
const mongoose = require("mongoose");
//import express package
const express = require('express');
const port = 3000;
const host = 'localhost';

//require('dotenv/config');

const  app = express();

 //connect to MongoDB
 mongoose.connect('mongodb+srv://MosesEtte:MosesEtte@cluster0.cr9frgg.mongodb.net/test', ()=>{console.log('connected to mongoDB')});

// creating server/router with express package
app.get('/', (req, res) => {
    res.send('FIRST MESSAGE ON THE SERVER type "/fullName" in the address box after the 3000 ', ()=>{console.log('we are now connected to mongoDB')});
});

app.get('/firstName', (req, res) => {
    res.send('Jackson ');
});

app.get('/middleName', (req, res) => {
    res.send('Idongesit ');
});

app.get('/lastName', (req, res) => {
    res.send('Udofot');
});
app.get('/fullName', (req, res) => {
    res.send('Jackson Idongesit Udofot is my childhood best friend');
});

 app.listen(port,()=>{console.log('connected to the server')})

