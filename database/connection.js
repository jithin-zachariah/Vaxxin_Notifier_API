const mongoose = require("mongoose");
const { db } = require("../config");

console.log(db.URI);
mongoose
  .connect(db.URI, db.options)
  .then(() => {
    console.info("Mongoose connection done");
  })
  .catch((e) => {
    console.log(e);
    console.info("Mongoose connection error");
    process.exit(0);
  });
