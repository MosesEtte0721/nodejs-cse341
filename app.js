//const host = 'localhost';

const port = 3000;

const express = require('express');

const  app = express();

app.get('/', (req, res) => {
    res.send('FIRST MESSAGE ON THE SERVER type "/fullName" in the address box after the 3000 ');
})

app.get('/firstName', (req, res) => {
    res.send('Jackson ');
});

app.get('/middleName', (req, res) => {
    res.send('Idongesit ');
});

app.get('/lastName', (req, res) => {
    res.send('Udofot ');
});
app.get('/fullName', (req, res) => {
    res.send('Jackson Idongesit Udofot is my childhood best friend');
})

app.listen(port,()=>{console.log('connected to the server')});
