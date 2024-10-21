const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Genre Schema define kar rahe hain
const GenreSchema = new Schema({
  name: {
    type: String,
    required: true, // Name field required hai
    minlength: 3,   // Kam se kam 3 characters hone chahiye
    maxlength: 100  // Maximum 100 characters allowed
  }
});

// Virtual property create karte hain genre ke URL ke liye
GenreSchema
  .virtual('url')
  .get(function() {
    return '/catalog/genre/' + this._id; // Genre ka URL return karega based on id
  });

// Genre model export kar rahe hain
module.exports = mongoose.model('Genre', GenreSchema);
