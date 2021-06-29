// imports 
let bodyParser = require("body-parser");
let express = require("express");

//config body-parser
server.use(bodyParser.urlencoded({ extended : true}));
server.use(bodyParser.json());
//instatiation of express
const server = express();

//config route

server.get("/", (req, res)=>
    {
        res.setHeader('Content-Type', 'text/html');    
        res.status(200).send('<h1> Hello server </h1>');
    });

//launch server

server.listen(5500, ()=>
    {
        console.log('Server work full')
    });