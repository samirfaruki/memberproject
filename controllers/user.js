const user = require("../models/users");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const { body, validationResult } = require("express-validator");

const usersSchema = require("../models/users");

exports.users = async (req, res, next) => {
  try {
    const data = await user.find({});
    res.send(data);
  } catch (e) {
    console.log(e.message);
  }
};
exports.signUpPost = [
  // normalizeEmail() and toDate() are sanitizers, also available in the Sanitization Chain

  body("email").isEmail().normalizeEmail(),
  body("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long")
    .matches(/\d/)
    .withMessage("must contain a number"),

  (req, res) => {
    let err = validationResult(req);
    if (err) {
      console.log(err);
    }
    var newuser = new usersSchema({
      fName: req.body.fName,

      lName: req.body.lName,

      email: req.body.email,

      password: req.body.password,

      confirmPassword: req.body.confirmPassword,

      memberpasscode: req.body.memberpasscode,
      adminpasscode: req.body.adminpasscode,
      // _id: req.params.id,
    });

    console.log(newuser);

    newuser.save(function (err) {
      if (err) throw err;

      res.redirect("/login");
    });
  },
];

exports.post =
  ("/login",
  (req, res) => {
    passport.authenticate("local", { failureRedirect: "/login" }),
      res.render("message.ejs");
  });


  