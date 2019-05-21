const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");
const Mailer = require("../services/Mailer");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      // id is a property provided to any mongoose model
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, template);
  });
};
