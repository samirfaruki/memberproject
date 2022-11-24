const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  text: { type: String, required: true, maxLength: 100 },
  date: { type: String, required: true },
});

module.exports = mongoose.model("message", messageSchema);
