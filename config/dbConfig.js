const mongoDb = require('mongodb')
const dbName = 'patient_details'
require('dotenv').config();
const dbUser = process.env.DB_USER 
const dbPass = process.env.DB_PASS 
const dbUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0.lowctzs.mongodb.net/${dbName}`

module.exports = {mongoDb, dbName, dbUrl}