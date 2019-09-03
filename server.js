const express =require("express")
const bodyParser =require("body-parser")
const app =express()
const mongoose = require("mongoose")
const Api = require( "./src/routes/Api")
const path = require("path")
app.use(express.static(path.join(__dirname, 'build')));
const PORT = 3030


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
app.use('/', Api)

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/clients", { useNewUrlParser: true } )

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(process.env.PORT || PORT, function(){
    console.log("listeing")
})
