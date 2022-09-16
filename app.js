//const res = require("express/lib/response");
//const http = require("http");
const port = 3000;
const host = "localhost";
const express = require("express");
const app = express();

app.get("/", (req, res) => {res.send("The first line of text on the server")});
app.get("/lord", (req, res) => {res.send("The Lord is my strength and my salvation, who shall fear")});



app.listen(port,() => {
    console.log("now connected to the server with port 3000")
});



