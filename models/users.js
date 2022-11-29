const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  fName: { type: String, required: true, maxLength: 100 },
  lName: { type: String, required: true, maxLength: 100 },
  email: { type: String, required: true, maxLength: 100 },
  password: { type: String, required: true, maxLength: 100 },
  confirmPassword: { type: String, required: true, maxLength: 100 },
  memberpasscode: { type: String, required: true, maxLength: 100 },
  adminpasscode: { type: String, required: true, maxLength: 100 },
});

module.exports = mongoose.model("Users", UsersSchema);
