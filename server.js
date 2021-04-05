const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()


//connect to Database
let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName ="magic"

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

//Setting up Server
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})
 