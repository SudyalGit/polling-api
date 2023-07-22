const mongoose = require("mongoose");

mongoose.connect(
  'mongodb://127.0.0.1:27017/Polling_api_db'
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting the database"));

db.once("open", () => {
  console.log("succesfully connected to database");
});

module.exports = db;