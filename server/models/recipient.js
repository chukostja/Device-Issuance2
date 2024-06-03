const mongoose = require('mongoose');

const RecipientSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Use MongoDB's ObjectIds for unique identifiers
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    firstname: String,
    department: {
      type: String,
      required: true,
      trim: true,
    },
    contactInfo: {
      phone: String, // TODO: validate phone number.
      email: String, 
      // TODO: validate email:
      // validate: {
      //   validator: function (v) {
      //     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      //   },
      //   message: "Please enter a valid email",
      // },
      // TODO: address
    },
  },
  { collection: 'Recipient' });

module.exports = mongoose.model('Recipient', RecipientSchema);