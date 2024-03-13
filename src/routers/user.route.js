const express= require('express');
const route= express.Router();
const user_controller =require('../controllers/user.controller')
const {autheticate}= require('../middleware/auth');

// register
route.post('/register',user_controller.register);

// login
route.post('/login',user_controller.login);

// userget
route.get('/userget',autheticate,user_controller.userget);

// userupdate
route.put('/userupdate',autheticate,user_controller.userupdate);

// userdelete
route.delete('/userdelete/:id',autheticate,user_controller.userdelete);

module.exports=route;
