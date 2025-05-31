const mongoose = require('mongoose');

const favoriteListSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
  { timestamps: true },
);

const FavoriteList = mongoose.model('FavoriteList', favoriteListSchema);
module.exports = FavoriteList;
