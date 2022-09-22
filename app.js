// import express package
const express = require('express');
const res = require('express/lib/response');
const app = express();

//import mongobd drive

//import dotenv 
require('dotenv/config');
const port = process.env.port || 3000;
const hostname = '127.0.0.1';


//create server and route that displays on the screen
app.get('/', (req, res) => {
  
    res.send('<p><h1> Jackson Idongesit Udofot</h1></>');
});

//listenig to port 30000


const {MongoClient}= require('mongodb');
const {ObjectId} = require('mongodb');
//const { Db } = require('mongoose/node_modules/mongodb');

// connecting to mongodb
//const client = new mongoClient();

MongoClient.connect(process.env.mongoDB)
.then(client=>{
    let db = client.db('CSE341');

  
     console.log("Bravo! Successfully connected to mongodb")
    
    app.listen(port, (error) => {
    if(error){ 
        console.log(error, 'Could not connect to the server');
    } else{
        console.log(`Server sucessfully created. Running at ${hostname}:${port}`);
    }
})
    //write multiple documents to the database
    app.post('/', (req, res)=> {
        
        
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
        
    //return documents from the collection to the browser
/*app.get('/docs', (req, res) => {
    
     //db = db();
   // let array = []
    db.collection('Contact').find()
    
    
})


//return a single document from the collection to the browser
app.get('/docs/id', (req, res)=>{
    
    
    db.collection('Contact')
    .findOne({_id: ObjectId(req.params.id)})

    
})

*/
app.post('/', (req, res)=> {
        
        db.collection('Close_contacts').insertMany([
            {
                "fname": "Moses",
                "lName": "ette",
                "email": "senatoette@gmail.com",
                "major": "Applied Technology"
            },
            {
                "fName": "Daniel",
                "lName": "Ette",
                "email":"dannyette@gmail.com"
            },
            {
                "fName": "Edem",
                "lName":"Edem",
                "email":"mikereal@gmail.com"
            }
        ])
    })


})
.catch( err => {
    res.status(500).json({error: "Could not fetch the requested data"})
})

    
    
    
    
    
    
    
   