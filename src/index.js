const express = require("express");
const {Port} = require("./config/serverConfig");

const setttingupp = async()=>{
    const app = express();
    
    app.listen(Port,()=>{
        console.log("Server Started...");
        console.log(process.env);

    })
}

setttingupp();