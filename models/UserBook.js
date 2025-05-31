const mongoose = require('mongoose');

const userBookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
    status: {
      type: String,
      enum: ['reading', 'completed', 'want to read'],
      default: 'want to read',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true },
);

const UserBook = mongoose.model('UserBook', userBookSchema);

module.exports = UserBook;
