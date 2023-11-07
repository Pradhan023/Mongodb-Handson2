const Route = require("express").Router();

const {employeeController,updateemployeeController,deleteemployeeController} = require("../Controller/list")

Route.post("/addemployee",employeeController)

Route.put("/updateemployee",updateemployeeController)

Route.delete("/deleteemployee",deleteemployeeController)

module.exports = Route