const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

function duplicate(err, doc, next) {
  if (err.name === 'MongoError' && err.code === 11000) {
    return next(new Error('Email already exists'));
  }

  return next();
}

UserSchema.post('save', duplicate);
UserSchema.post('findOneAndUpdate', duplicate);

const User = mongoose.model('User', UserSchema);

module.exports = User;
