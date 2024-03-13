const User = require('../models/user.model');

const register = (body) => {
    return User.create(body);
}

const userid = (userid) => {
    return User.findById(userid);
}

const getuser = () => {
    return User.find();
}

const findById = (userid) => {
    return User.findById(userid);
};

const userbyid = (body) => {
    return User.findById(body);
};

const deletedUser = (userId) => {
    return User.findByIdAndDelete(userId);
};

const findemail = (email) => {
    return User.findOne({ email });
};

const updateuser = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody }, { new: true });
};

module.exports = {
    register,
    userid,
    getuser,
    findemail,
    findById,
    userbyid,
    deletedUser,
    updateuser
}