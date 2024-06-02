import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <Link to='/' className='navleft'><h1>Home</h1></Link>
      <nav className='navright'>
        <NavLink to='/issue' className='navright'>Issuance</NavLink>
        <NavLink to='/search' className='navright'>Search</NavLink>
        <NavLink to='/registerdevice' className='navright'>Register a Device</NavLink>
      </nav>
    </header>
  )
}