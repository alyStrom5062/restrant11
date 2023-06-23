const db = require('./models')

db.Place.create([
    {
        name: "Birds of a Feather",
        city: "New York City",
        state: "NY",
        cuisines: "Chinese",
        pic: "NY.png", 
        founded: ""
    },
    {
        name: "Shun",
        city: "Houston",
        state: "TX",
        cuisines: "Japanese",
        pic: "TX.png", 
        founded: "2018"
    },
    {
        name: "The Little Door  ",
        city: "Los Angeles",
        state: "CA",
        cuisines: "French",
        pic: "CA.png", 
        founded: "2014"
    },
    {
        name: "Communion",
        city: "Seattle",
        state: "WA",
        cuisines: "Soul Food",
        pic: "WA.png", 
        founded: "2020"
    },
    {
        name: "Sam's Burger Joint",
        city: "San Antionio",
        state: "TX",
        cuisines: "American",
        pic: "TXSA.png", 
        founded: "2021"
    }

])
.then(() => {
    console.log("Success.")
    process.exit()
})
.catch(err => {
    console.log("Failure", err)
    process.exit()
})