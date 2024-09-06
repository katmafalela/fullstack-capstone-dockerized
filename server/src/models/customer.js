const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  username: { type: String, 
    required: true, 
    unique: true 

  },
  email: { type: String, 
    required: true, 
    unique: true,
    match: [/^\S+@\S+.\S+$/, 'Please use a valid email address.']
   },
  password: { type: String, 
    required: true, },
  firstName: { type: String, 
    required: true },
  lastName: { type: String, 
    required: true },
  location: {
    city: String,
    state: String,
    country: String,
    zipCode: String
  },
  savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  savedResources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  preferences: {
    jobTypes: [String],
    industries: [String],
    salaryRange: {
      min: Number,
      max: Number
    },
    remoteWork: Boolean
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;