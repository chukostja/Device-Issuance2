const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const Device = require('./models/device')

mongoose.connect('mongodb://localhost:27017/VirittamoDeviceIssuance')

mongoose.connection.on('connected', () => {
  console.log('Connected to database')
})

mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err)
})

app.use(bodyParser.json())

app.post('/api/registerdevice', async (req, res) => {
  console.log('Posted something')
  try {
    const {deviceID, deviceName, manufacturer} = req.body

    if(!deviceID) {
      return res.json({ status: 'error', error: 'Invalid device or recipient ID.'})
    }

    const device = new Device({deviceID, deviceName, manufacturer})
    const savedEntry = await device.save()
    res.json(savedEntry)

  } catch(error) {
    console.log('Error', error)
    res.json({ status: 'error', error: "Couldn't "})
  }
})

app.listen(5174)