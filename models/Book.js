// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  fullname: {
    //title
    type: String,
    required: true
  },
  email: {
    //isbn
    type: String,
    required: true
  },
  position: {
    //author
    type: String,
    required: true
  },
  degrees: {
    //description
    type: String
  }
});

module.exports = Book = mongoose.model('book', BookSchema);