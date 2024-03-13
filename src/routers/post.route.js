const express= require('express');
const route= express.Router();
const post_controller =require('../controllers/post.controller')
const {autheticate}= require('../middleware/auth');


// register
route.post('/register',autheticate,post_controller.createpost);

// postget
route.get('/postget',autheticate,post_controller.postget);

// postupdate
route.put('/postupdate',autheticate,post_controller.postupdate);

// postdelete
route.delete('/postdelete/:id',autheticate,post_controller.postdelete);

module.exports=route;
