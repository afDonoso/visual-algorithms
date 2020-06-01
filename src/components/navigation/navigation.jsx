import React from 'react'
import { Link } from 'react-router-dom'
import './css/style.css'

const Navigation = () => {
  return (
    <header>
      <div className="logo-section">
        <Link to="/">
          <span id="brand">Visual Algorithms</span>{' '}
          <img src="Icon.svg" alt="logo" id="logo" />
        </Link>
      </div>

      <nav>
        <Link to="/" className="main-link">
          Home
        </Link>
        <div className="dropdown">
          <Link to="/data-structures" className="drop-link main-link">
            Data Structures
          </Link>
          <div className="dropdown-content">
            <Link to="#">Stack</Link>
            <Link to="#">Queue</Link>
          </div>
        </div>
        <Link to="/pathfinding" className="main-link">
          Pathfinding
        </Link>
      </nav>
    </header>
  )
}

export default Navigation
