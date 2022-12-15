const express = require("express");
const {Port} = require("./config/serverConfig");
const bodyparser = require("body-parser");

const setttingupp = async()=>{
    const app = express();
    app.use(bodyparser.json);
    app.use(bodyparser.urlencoded({extended:true}));    
    app.listen(Port,async ()=>{
        console.log("Server Started...");
        
       
        
    })
}

setttingupp();