const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
    name:String,
    age:String,
    mobile:String
})

const CrudModel = mongoose.model('crud',crudSchema)

 module.exports = CrudModel;