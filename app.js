// import express package
const express = require('express');
const res = require('express/lib/response');
const app = express();

//import mongobd drive

//import dotenv 
require('dotenv/config');
const port = process.env.PORT || 3000;
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
const {ObjectId} = require('mongodb');
//const { Db } = require('mongoose/node_modules/mongodb');

// connecting to mongodb
//const client = new mongoClient();
MongoClient.connect(process.env.mongoDB)
.then((client) => {
     console.log("Bravo! Successfully connected to mongodb")
    let db;

    //write multiple documents to the database
    app.post('/docs', (req, res)=> {
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
    })
       
        
    }
) .catch((error)=>{
    console.log(`Could not create the collection ${error}`)
    
});

//return documents in collection to the browser
app.get('/', (req, res) => {
    let array = []
    let db = db();
    db.collection('Contact').find()
    
        .then(()=>{
            res.status(200).json(array)

        })
        .then((err)=>{
            res.status(500).json({error: 'Could not fetch the requested file'})
        })
    
})


app.get('/Contact/id', (req, res)=>{
    let db = db();
    db.collection('Contact').findOne({_id: ObjectId(req.params.id)})

.then(doc => {
    res.status(200).json(doc)
}).catch( err=> {
    res.status(500).json({error: "Could not fetch the requested data"})
})
})