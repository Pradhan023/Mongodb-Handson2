const {MongoClient} = require("mongodb");

const url = "mongodb://0.0.0.0:27017"

const mongoserver = new MongoClient(url)
console.log(mongoserver);

const connection = async ()=>{
    try{
        await mongoserver.connect();
        console.log("Connection successfull");
    }
    catch(err){
        console.log("Connection failed",err);
    }
}

const database = mongoserver.db("Human_Resource");

module.exports = {connection,database}