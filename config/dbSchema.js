const mongoose = require('mongoose')

let patientsSchema = new mongoose.Schema({
    name : {type:'string', required:true},
    mobile : { type:'string', required:true},
    age : {type:'string'},
    treatment : {type:'string', required:true},
    createdAt : {type:Date, default:Date.now()},
})

const patientModel = mongoose.model('patients', patientsSchema)

module.exports = {mongoose, patientModel}