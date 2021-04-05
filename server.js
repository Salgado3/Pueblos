const { MongoClient } = require("mongodb")

let db,
    dbConnectionStr = DB_String,
    dbName ="magic"

MongoClient.connect(DB_String, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })