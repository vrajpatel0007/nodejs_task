const { Schema, model } = require('mongoose')

const PostSchema = new Schema({
    post_Titel: {
        type: String,
        required: true
    },
    post_dtels: {
        type: String,
        required: true
    },
    post_By:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Post = model('Post', PostSchema)
module.exports = Post;