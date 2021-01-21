const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//importing controller
const userController = require("../controllers/users");
 
const router = express.Router();
 
//importing user model
const User = require('../models/user');
 
//signing up
router.post('/signup', userController.user_sign_up);
 
//deleting user
router.delete('/:userId', userController.user_delete);
 
//logging in
router.post('/login', userController.user_login);
 
module.exports = router;