const mongoose = require('mongoose')

const conectdb = ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log("conectdb successfully");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = conectdb;