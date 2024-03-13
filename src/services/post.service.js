const Post = require('../models/post.model');

const createpost = (body) => {
    return Post.create(body);
}

const Postid = (postid) => {
    return Post.findById(postid);
}

const getpost = () => {
    return Post.find();
}

const findById = (Postid) => {
    return Post.findById(Postid);
};

const Postbyid = (body) => {
    return Post.findById(body);
};

const deletedPost = (PostId) => {
    return Post.findByIdAndDelete(PostId);
};

const updatePost = async (PostId, updateBody) => {
    return Post.findByIdAndUpdate(PostId, { $set: updateBody }, { new: true });
};

module.exports = {
    createpost,
    Postid,
    getpost,
    findById,
    Postbyid,
    deletedPost,
    updatePost
}