const { Result } = require("express-validator");
const messageModel = require("../models/message");

exports.get =
  ("/message",
  (req, res) => {
    res.render("/message");
  });

exports.post =
  ("/message",
  (req, res) => {
    console.log(req.body);

    const date = new Date().toLocaleTimeString("en-US", {
      weekday: "short",

      month: "short",

      day: "numeric",

      hour: "numeric",

      minute: "numeric",
    });
    console.log(date);
    let post = new messageModel({
      name: req.body.name,
      text: req.body.text,
      date: date,
    });
    console.log(post);
    post.save(function (err) {
      if (err) throw err;

      res.render("welcome",{result:post});
    });
  });
