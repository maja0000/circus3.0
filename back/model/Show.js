const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  new: {
    type: Boolean,
  },
  likes: {
    type: Number,
  },
  tag: {
    type: String,
  },
  creation: { type: Date, default: Date.now },
});
module.exports = Show = mongoose.model('show', ShowModel);
