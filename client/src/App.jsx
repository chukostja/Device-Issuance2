import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Issuance from './components/Issuance'
import Search from './components/Search'
import DeviceInformation from './components/DeviceInformation'
import Nav from './components/Nav'
import RegisterDevice from './components/RegisterDevice'

function App() {

  return (
    <div className='App'>
      <Router>
        <Nav />
        <div className='main'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='issue' element={<Issuance />} />
            <Route exact path='registerdevice' element={<RegisterDevice />} />
            <Route exact path='search' element={<Search />} >
              <Route path='deviceinfo' element={<DeviceInformation />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
