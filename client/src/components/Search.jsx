import React, { useState } from 'react'

export default function Search() {
  const [deviceID, setDeviceID] = useState('')

  async function handleSubmit() {
    const res = await fetch('http://localhost:5173/', {
      method: POST,
      body: JSON.stringify({deviceID})
    }).then((t) => t.json())

    console.log(res)
  }

  return (
    <div>
      <form>
          <label htmlFor="deviceID">Device ID:</label>
          <input
            type="text"
            id="deviceID"
            placeholder='id'
            value={deviceID}
            onChange={(e) => setDeviceID(e.target.value)}
            required
          />
          <button type='submit'>Find</button>
      </form>
    </div>
  )
}