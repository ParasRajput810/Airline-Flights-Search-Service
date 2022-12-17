const express = require("express");
const {Port} = require("./config/serverConfig");
const bodyparser = require("body-parser");
const apiroutes = require("./routers/index");
const cityrepo = require("./repository/city-repository");

const setttingupp = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));    
    app.use("/api" , apiroutes);
    app.listen(Port,async ()=>{

        console.log("Server Started...");
    })
}

setttingupp();