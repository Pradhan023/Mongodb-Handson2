const { database } = require("../config/db")

const collectionlist = database.collection("employee");

const employeeController = async (req,res)=>{
    const details=req.body;
    // const data = await collection.insertOne(details)
    // const data = await collectionlist.insertMany(details)
    // const data = await collectionlist.find({"salary":{$gt:"30000"}})
    // const data = await collectionlist.find({"overallExp":{$gt:"2"}})
    const data = await collectionlist.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}})
    res.send({msg:"Data added successfull",data:data})
}

const updateemployeeController =async (req,res)=>{
    const data = await collectionlist.updateMany({"salary":{$gt:"70000"}},{$set:{"salary":"65000"}})
    res.send({msg:"Data updated successfull",data:data})
}

const deleteemployeeController =async (req,res)=>{
    const data = await collectionlist.deleteMany({"lastCompany":"Y"})
    res.send({msg:"Data deleted successfull",data:data})
}

module.exports = {employeeController,updateemployeeController,deleteemployeeController}