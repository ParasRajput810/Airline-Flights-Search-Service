const express = require("express");
const sequelize = require("sequelize");
const {Port} = require("./config/serverConfig");
const bodyparser = require("body-parser");
const apiroutes = require("./routers/index");
const cityrepo = require("./repository/city-repository");
const db = require("./models/index");

const setttingupp = async()=>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));    
    app.use("/api" , apiroutes);
    app.listen(Port,async ()=>{
        // if(process.env.SYNC_DB){
        //     db.sequelize.sync({alter : true});
        // }
        console.log("Server Started...");
    })
}

setttingupp();