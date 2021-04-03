const { MongoClient } = require("mongodb")

let db,
    dbConnectionStr = DB_String,
    dbName ="magic"

MongoClient.connect()