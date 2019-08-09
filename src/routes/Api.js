const express = require("express")
const bodyParser = require("body-parser")
const Api = express()

const Clients = require('../models/clientSchema')

Api.get("/clients", function (req, res) {
    Clients.find({}).exec(function (err, clients) {
        // console.log(clients)
        res.send(clients)
    })
})

Api.post("/client", function (req, res) {
    // console.log("hey")
    // console.log(req.body)
    let client = new Clients(req.body)
    client.save()
    console.log(client)
    res.send(client)
})
Api.put('/sold/:id', function (req, res) {
    let id = req.params.id
    Clients.findById(id, function (err, client) {
        client.sold = true
        client.save()
        res.send(client)
    })
})
Api.put('/changeOwner/:id', function (req, res) {
    let id = req.params.id
    const owner = req.body.owner
    Clients.findById(id, function (err, client) {
        client.owner = owner
        client.save()
        res.send(client)
    })
})
Api.put('/updateClient/:name', function (req, res) {
    const objClient = req.body
    const newName = objClient.newName
    const country = objClient.country
    const name = req.params.name
    console.log(objClient)
    console.log(name)
    Clients.findOneAndUpdate({"name": name}, {"name": newName, "country": country} ).then(function(){

    })
    res.end()
})

// ( c => c.name === name).exec(function (err, client) {
//     client.name = objClient.newName
//     client.country = objClient.country
//     client.save()
//     res.send(client)





module.exports = Api






