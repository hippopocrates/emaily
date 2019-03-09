//keys.js
if (process.env.NODE_ENV === "production") {
  //we're in production
  module.exports = require("./prod");
} else {
  //we're in dev
  module.exports = require("./dev");
}

//hippopocrates
//iJZ6evfh2yP5VZ8C

//mongodb+srv://myuser:m7f0cMoYuaJdfy6c@cluster0-xyjbu.mongodb.net/test?retryWrites=true
