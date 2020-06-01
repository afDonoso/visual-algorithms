import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

//CSS
import './css/style.css'

const DataStructures = () => {
  let match = useRouteMatch()

  return (
    <div>
      <h1>Data Structures</h1>
      <div className="structure-list">
        <Link to={`${match.url}/stack`}>
          <div className="card">
            <img
              src="Stack.svg"
              alt="Stack illustration"
              className="card-img"
            />
            <div className="overlay">
              <h2 className="text">Stack</h2>
            </div>
          </div>
        </Link>
        <Link to={`${match.url}/queue`}>
          <div className="card">
            <img
              src="Queue.svg"
              alt="Queue illustration"
              className="card-img"
            />
            <div className="overlay">
              <h2 className="text">Queue</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DataStructures
