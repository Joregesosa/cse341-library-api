// mongoos model for book
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    coverUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    publishedYear: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true },
);

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
