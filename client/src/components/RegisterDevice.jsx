import React, { useState } from 'react'

export default function RegisterDevice() {
  const [deviceID, setDeviceID] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  async function handleSubmit() {
    console.log('Sending '+JSON.stringify({
      deviceID,
      deviceName,
      manufacturer
    }))
    const res = await fetch('http://localhost:5174/api/registerdevice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({
        deviceID,
        deviceName,
        manufacturer
      })
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }

  return (
    <div className='form'>
      <form>
        <h1>Form for issuing the Devices</h1>
          <label htmlFor="deviceID">Device ID:</label>
          <input
            type="text"
            id="deviceID"
            placeholder='id'
            value={deviceID}
            onChange={(e) => setDeviceID(e.target.value)}
            required
          />
          <label htmlFor="deviceName">Device Name:</label>
          <input
            type="text"
            id="deviceName"
            placeholder='name'
            value={deviceName}
            onChange={(f) => setDeviceName(f.target.value)}
          />
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            placeholder='manufacturer'
            value={manufacturer}
            onChange={(g) => setManufacturer(g.target.value)}
          />
          <button type='submit' onSubmit={handleSubmit}>Issue</button>
      </form>
    </div>
  )
}