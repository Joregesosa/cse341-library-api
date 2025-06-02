const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 15,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
    },
    dateOfBirth: {
      type: Date,
    },
    githubId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true },
);
const User = mongoose.model('User', userSchema);
module.exports = User;
