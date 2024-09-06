const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true 
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true 
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', 
    required: true
  },
  parentComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', 
    default: null 
  },
  likes: {
    type: Number,
    default: 0
  },
  isApproved: { 
    type: Boolean,
    default: true 
  },
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
