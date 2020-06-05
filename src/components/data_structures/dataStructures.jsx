import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

//CSS
import './css/style.css'

//Animation
import { gsap } from 'gsap'

const DataStructures = () => {
  let match = useRouteMatch()
  const [structures] = useState([
    {
      link: `${match.url}/stack`,
      imgSrc: 'Stack.svg',
      imgAlt: 'Stack illustration',
      name: 'Stack',
    },
    {
      link: `${match.url}/queue`,
      imgSrc: 'Queue.svg',
      imgAlt: 'Queue illustration',
      name: 'Queue',
    },
  ])

  useEffect(() => {
    let tl = gsap.timeline()

    tl.from('.title', {
      duration: 0.8,
      opacity: 0,
      y: -20,
      ease: 'power2.Out',
    }).from(
      '.card',
      {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: 'power2.inOut',
      },
      '-=0.2'
    )
  }, [])

  return (
    <div>
      <h1 className="title">Data Structures</h1>
      <div className="structure-list">
        {structures.map((structure) => (
          <Link to={structure.link} key={structure.name}>
            <div className="card">
              <img
                src={structure.imgSrc}
                alt={structure.imgAlt}
                className="card-img"
              />
              <div className="overlay">
                <h2 className="text">{structure.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DataStructures
