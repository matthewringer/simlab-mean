'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Service Schema
 */
var ServiceSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Service name',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill Service description',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Service', ServiceSchema);
