const router = require("express").Router()
const db = require("../models")
 
// GET /
router.get("/", (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render("places/index", { places })
    })
    .catch(err => {
        console.log(err)
        res.render("error404")
    })
})

// POST /
router.post("/", (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect("/places")
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
})

// GET /new
router.get("/new", (req, res) => {
    res.send("places/new")
})

// GET /:id
router.get("/:id", (req, res) => {
    db.Place.findById(req.params.id)
    .populate("Comments")
    .then(place => {
        console.log(place.comments)
        res.render("places/show", { place })
    })
    .catch(err => {
        console.log("err", err)
        res.render("error404")
    })
  })

// PUT /:id
router.put("/:id", (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render("error404")
    } else if (!places[id]) {
        res.render("error404")
    } else {
        // Validated req.body data
            if (!req.body.pic) {
                req.body.pic = "http://placekitten.com/400/400"
            }
            if (!req.body.city){
                req.body.city = "Anytown"
            }
            if (!req.body.state){
                req.body.state = "USA"
            }
    }
        places[id] = req.body
        res.send("PUT /places/:id stub")
    })

// DELETE /:id
router.delete("/:id", (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render("error404")
    }
    else if (!places[id]){
        res.render("error404")
    }
    else {
        places.splice(id, 1)
        res.send("DELETE /places/:id stub")
    }
})

// GET /:id/edit
router.get("/:id/edit", (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render("error404")
    }
    else if (!places[id]){
        res.render("error404")
    } else {
    res.render("GET edit form stub")
    }
})

// POST /:id/comment
router.post("/:id/comment", (req, res) => {
    console.log(req.body)
    req.body.rant = req.body.rant ? true : false
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render("error404")
        })
    })
    .catch(err => {
        res.render("error404")
    })
})

// DELETE /:id/comment/:commenttId
router.delete("/:id/comment/:commentId", (req, res) => {
    res.send("GET /places/:id/comment/:commentId stub")
})


module.exports = router