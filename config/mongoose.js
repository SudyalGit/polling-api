const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://placement:1UbhMXi13RXuCwSn@cluster0.p5gbb.mongodb.net/myDBpolling_api?retryWrites=true&w=majority'
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting the database"));

db.once("open", () => {
  console.log("succesfully connected to database");
});

module.exports = db;