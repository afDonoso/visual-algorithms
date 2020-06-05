import React, { useEffect } from 'react'

//CSS
import './css/style.css'

//Animation
import { gsap } from 'gsap'

const Home = () => {
  useEffect(() => {
    var tl = gsap.timeline()

    tl.from('.title', {
      duration: 0.8,
      opacity: 0,
      y: -20,
      ease: 'power2.inOut',
    })
      .from('.intro', {
        duration: 0.8,
        opacity: 0,
        ease: 'power2.inOut',
      })
      .from(
        '#hero',
        {
          duration: 0.8,
          opacity: 0,
          y: 20,
          ease: 'power2.inOut',
        },
        '-=0.5'
      )
  })

  return (
    <div className="home-container">
      <img src="Logo.svg" alt="Visual Algorithms Complete Logo" id="hero" />
      <h1 className="title">Visual Algorithms</h1>
      <h2 className="intro">Watch well-known algorithms in action.</h2>
    </div>
  )
}

export default Home
