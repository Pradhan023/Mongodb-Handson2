const express = require("express");

const app = express();

const Port = 4200;

const Route = require("./RouteComp/Routefile");

const {connection} = require("./config/db");

app.use(express.json)

app.use("/api",Route)

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(Port,async ()=>{
    try{
        await connection()
        console.log("Server is live on Port 4200");
    }
    catch(err){
        console.log("Catch error ",err);
    }
})