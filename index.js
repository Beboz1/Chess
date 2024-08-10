let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')

require('dotenv').config()


app.use(cors())
//i act like i know what is this
app.set('views', (__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})
//it is fine i dont need to know









app.listen(3000, ()=>{
    console.log("App is listening on port " + process.env.PORT)
})