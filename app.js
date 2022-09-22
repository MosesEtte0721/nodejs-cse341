// import express package
const express = require('express');
const app = express();

//import mongobd drive

//import dotenv 
require('dotenv/config');
const port = 3000;
const hostname = '127.0.0.1';


//create server and route that displays on the screen
app.get('/', (req, res) => {
  
    res.send('<p><h1> Jackson Idongesit Udofot</h1></>');
});

//listenig to port 30000
app.listen(port, (error) => {
    if(error){ 
        console.log(error, 'Could not connect to the server');
    } else{
        console.log(`Server sucessfully created. Running at ${hostname}:${port}`);
    }
})

const {MongoClient}= require('mongodb');
//const { Db } = require('mongoose/node_modules/mongodb');

// connecting to mongodb
//const client = new mongoClient();
MongoClient.connect(process.env.mongoDB)
.then((client) => {
    let db;
    
        console.log("Bravo! Successfully connected to mongodb")
        db = client.db()
        db.collection('Contact').insertMany([
            {
                "fname": "Jackson",
                "lName": "Idongesit",
                "email": "jack@gmail.jack",
                "major": "Applied Technology"
            },
            {
                "fName": "Etukudo",
                "lName": "Odungide",
                "email":"etuodung@etu.com"
            },
            {
                "fName": "Mike",
                "lName":"Neo",
                "email":"nemi@email.neo"
            }
        ])
    }
) .catch((error)=>{
    console.log(`Could not create the collection ${error}`)
    return error;
});

app.get('/', (req, res) => {
    let array = []
    let db = db();
    db.collection('Contact').find()
    
    .toArray()
    .array.forEach(array => 
        array.push('Contact'))
        .then(()=>{
            res.status(200).json(array)

        })
        .then((err)=>{
            res.status(500).json({error: 'Could not fetch the requested file'})
        })
    
})


