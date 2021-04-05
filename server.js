const { MongoClient } = require("mongodb")




//connect to Database
let db,
    dbConnectionStr = DB_String,
    dbName ="magic"

MongoClient.connect(DB_String, {useUnifiedTopology: true})
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
 