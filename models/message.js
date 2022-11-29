const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String }
});

module.exports = mongoose.model("message", messageSchema);
