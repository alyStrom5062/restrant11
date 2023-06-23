require("dotenv").config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports.Place = require("./places")
module.exports.Comment = require("./comment")