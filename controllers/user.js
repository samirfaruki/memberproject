const user = require("../models/users");
const mongoose = require("mongoose");

exports.users = async (req, res, next) => {
  try {
    const data = await user.find({});
    res.send(data);
  } catch (e) {
    console.log(e.message);
  }
};
