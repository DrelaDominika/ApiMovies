const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mailing = require("../mailer");
 
const router = express.Router();
 
//import user model
const User = require('../models/user');
 
//creating user account 
exports.user_sign_up =  (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ message: err });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then((user) => {
          console.log(user)
          try{
           mailing.send_account_creation_email(user)
          }
          catch(e){console.log(e)}
           console.log("akshdbasn")
           res.status(201).json({
            message: 'Account created',
            info: user,
          });
        })
        .catch((err) => res.status(500).json({ message: err }));
    }
  });
};

//deleting user
 exports.user_delete =  (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .then((user) => {
      res.status(200).json({ message: 'Account deleted' });
    })
    .catch((err) => res.status(500).json({ message: err }));
};
 
//logging into the account

exports.user_login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: 'Authorization error' });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ message: err });
        }
        if (result) {
          //creating JWT
          const token = jwt.sign(
            {
              email: user.email,
              userId: user._id,
            },
            process.env.passwordJWT,
            {
              expiresIn: "1h"
            }
          );
          res.status(200).json({
            message: 'User logged in',
            token: token
          });
        } else {
          res.status(401).json({ message: 'Authorization error' });
        }
      });
    })
    .catch((err) => res.status(500).json({ message: err }));
};
 
