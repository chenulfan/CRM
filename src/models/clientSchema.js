const mongoose = require("mongoose")

const Sehcma = mongoose.Schema
const clientSchema = new Sehcma({
    name: String,
    email: String,
    country: String,
    firstContact: Date,
    sold: Boolean,
    owner: String
})
const Clients = mongoose.model("clients", clientSchema)

module.exports = Clients
