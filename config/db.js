/**
 * @author @JimmyCSH
 *
 * The following script is used to interact with our MongoDB
 * database where we store the articles that we will use
 * for our SPEED application.
 */

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
