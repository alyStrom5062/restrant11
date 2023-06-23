const mongoose = reqire("mongoose")

let commentSchema = new mongoose.Schema({
    author: { type: String, default: "Anonymous"},
    
    content: { type: String, default: ""},

    stars: { type: Number, required: true},

    rant: { type: Boolean, default: false}
})

module.exports = mongoose.model("Comment", commentSchema)