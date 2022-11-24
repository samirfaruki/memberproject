const message = require("../models/message");

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

    let post = new message({
      name: req.body.name,

      text: req.body.text,

      time: date,
    });

    post.save(function (err) {
      if (err) {
        return err;
      }

      res.redirect("/");
    });
  });
