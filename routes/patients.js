var express = require('express');
var router = express.Router();
const {mongoDb, dbName, dbUrl} = require('../config/dbConfig')
const {mongoose, patientModel} = require('../config/dbSchema')
mongoose.connect(dbUrl)

router.post('/', async(req, res) => {
  try{
    let patient = await patientModel.create(req.body)
    res.send({
      statusCode:200,
      message:"Patient details added successfully.",
      patient
    })
  }
  catch(err){
    console.log(err)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
})

router.get('/', async(req, res) => {
  try{
    let patient = await patientModel.find()
    res.send({
      statusCode:200,
      message:"Patient details added successfully.",
      patient
    })
  }
  catch(err){
    console.log(err)
    res.send({
      statusCode:500,
      message:"Internal server error"
    })
  }
})


module.exports = router;
