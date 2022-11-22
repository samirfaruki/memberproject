#! /usr/bin/env node

console.log(
  "This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
  if (!userArgs[0].startsWith('mongodb')) {
      console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
      return
  }
  */
var async = require("async");

var User = require("./models/users");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var users = [];

function userCreate(
  fName,
  lName,
  email,
  password,
  confirmPassword,
  memberpasscode,
  adminpasscode
) {
  userdetail = {
    fName: fName,
    lName: lName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    memberpasscode: memberpasscode,
    adminpasscode: adminpasscode,
  };
  var user = new User(userdetail);
  user.save(function (err) {
    if (err) {
      err, null;
      return;
    }
    console.log("user: " + user);
    users.push(users);
    user, null;
  });
}

function createUsers() {
  async.series(
    [
      function (callback) {
        userCreate("Patrick", "Rothfuss", "sam", "123", "123", "1234", "12345");
      },
    ]
    // optional callback
  );
}

async.series(
  [createUsers],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("create user: " + User);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
