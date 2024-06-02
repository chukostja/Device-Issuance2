const mongoose = require('mongoose');

const IssuanceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    issuedAt: {  // TODO: validate issuing if not previously returned make user confirm end of previous issuence
      type: Date, // TODO: validate issuedAt<Date.now
      required: true,
      default: Date.now,
      // validate: {
      //   validator: function (v) {
      //     return v<=Date.now
      //   },
      //   message: "Please enter a valid issuance date or leave empty to use current date."
      // }
    },
    returnedAt: Date, // Can be null initially, updated on device return, TODO: validate issuedAt<returnedAt<Date.now
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Recipient',
    },
    device: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Device',
    },
  },
  { collection: 'Issuance' });

module.exports = mongoose.model('Issuance', IssuanceSchema);