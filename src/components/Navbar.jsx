import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Welcome Naruto fan!</h1>
        <div className="navbar__links">
            <Link to="/task">Tasks</Link>
            <div></div>
            <Link to="/about">About</Link>
            <div></div>
            <Link to="/mission">Mission</Link>
        </div>
    </div>
  )
}

export default Navbar