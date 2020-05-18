const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageModel = new Schema({
  author: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

  creation: { type: Date, default: Date.now },
});
module.exports = Message = mongoose.model('message', MessageModel);
