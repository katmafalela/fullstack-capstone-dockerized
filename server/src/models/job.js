const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  requiredSkills: [{
    type: String,
    required: true
  }],
  applicationStatus: {
    type: String,
    enum: ['pending', 'rejected', 'accepted'],
    default: 'pending'
  }
}, { timestamps: true }); 


const userMatchSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  status: {
    type: String,
    enum: ['matched', 'unmatched'],
    default: 'unmatched'
  }
}, { timestamps: true }); 


const Job = mongoose.model('Job', jobSchema);
const UserMatch = mongoose.model('UserMatch', userMatchSchema);

module.exports = { Job, UserMatch };
