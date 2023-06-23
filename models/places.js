const mongoose = require("mongoose")
const placeSchema = new mongoose.Schema({
    name: { type: String, required: true},
    pic: { type: String, default: "http://placekitten.com/350/350" },
    cuisines: { type: String, required: true },
    city: { type: String, default: "Anytown"},
    state: { type: String, default: "USA"},
    founded: {  type: Number,
                min: [1673, "Surely not that old?!"],
                max: [new Date().getFullYear(), "Hey, this year is in the future!"]}
})

modules.exports = mongoose.model("Place", placeSchema)