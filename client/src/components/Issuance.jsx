import React, { useState } from 'react'

export default function Issuance() {
  const [deviceID, setDeviceID] = useState('')
  const [recipientId, setRecipientId] = useState('')
  const [issuanceDate, setIssuanceDate] = useState('')

  async function handleSubmit() {
    const res = await fetch('http://localhost:5173/api/issuance', {
      method: POST,
      body: JSON.stringify({
        deviceID,
        recipientId,
        issuanceDate
      })
    }).then((t) => t.json())

    console.log(res)
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Form for issuing the Devices</h1>
          <label htmlFor="deviceID">Device ID:</label>
          <input
            type="text"
            id="deviceID"
            placeholder='device id'
            value={deviceID}
            onChange={(e) => setDeviceID(e.target.value)}
            required
          />
          <label htmlFor="recipientID">Recipient ID:</label>
          <input
            type="text"
            id="recipientID"
            placeholder='recipient id'
            value={recipientId}
            onChange={(e) => setRecipientId(e.target.value)}
            required
          />
          <label htmlFor="issuanceDate">Date device was issued on:</label>
          <input
            type="date"
            id="issuanceDate"
            placeholder='date'
            value={issuanceDate}
            onChange={(e) => setIssuanceDate(e.target.value)}
          />
          <button type='submit'>Issue</button>
      </form>
    </div>
  )
}