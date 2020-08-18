const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  username: { type: String, required: true },
  major: {type: String, required: true},
  description: { type: String, required: true },    // change to false for optional??
  year: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;