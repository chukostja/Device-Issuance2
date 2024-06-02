const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    deviceNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    deviceName: {
      type: String,
      required: true,
      trim: true,
    },
    manufacturer: {
      type: String,
      trim: true,
    },
    // TODO: a separate type (mobile phone, laptop etc) among other things
    // to simplify search and make it easier to view only devices of a type
  },
  { collection: 'Device'}
);

module.exports = mongoose.model('Device', DeviceSchema);