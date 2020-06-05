import React, { useState, useEffect } from 'react'

import { useInput } from '../../../hooks/useInput.jsx'

import StackNode from '../../../assets/StackNode'

//Algorithm
import Stack from './stack.js'

//CSS
import './css/style.css'

//Animation
import { gsap } from 'gsap'

const StackComponent = () => {
  const inputFormat = /^((\d+,\s?)*\d+)$/g

  const [showError, setShowError] = useState(false)
  const [stack, setStack] = useState(new Stack())
  const [pushedValue, setPushedValue] = useState('')

  /**
   * Shows an error message if the input format is incorrect.
   * @param {*} valueParam
   */
  const handleChange = (valueParam) => {
    if (!inputFormat.test(valueParam)) {
      setShowError(true)
    } else {
      setShowError(false)
    }
  }

  const { value, bind } = useInput('', handleChange)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (value.trim().length === 0) {
      alert('Introduce values into the stack')
      return
    }
    let values = value.split(/,\s?/)
    setStack(new Stack(values))
  }

  const handleChangePushedValue = (e) => {
    setPushedValue(e.target.value)
  }

  const handlePushedValue = (e) => {
    e.preventDefault()
    if (pushedValue.trim().length === 0) {
      alert('Introduce a valid number')
      return
    }

    stack.push(e.target.value)
    e.target.value = ''
  }

  useEffect(() => {
    if (stack.size !== 0) {
      gsap.from('.stack-node', {
        y: -20,
        opacity: 0,
        stagger: 0.5,
        reversed: true,
      })
    }
  }, [stack])

  return (
    <div>
      <h1>Data Structures: Stack</h1>
      <hr />

      <div className="canvas">
        <div className="menu">
          <form onSubmit={handleSubmit}>
            <label htmlFor="stack-input">Insert values:</label>
            <div className="input-area">
              <input
                type="text"
                id="stack-input"
                className="input create"
                name="stack-input"
                pattern="(\d+,\s?)*\d+"
                placeholder="1, 2, 3"
                {...bind}
              />
              {showError && (
                <small className="format-error">
                  The input has a wrong format. Format example: 1, 2, 3
                </small>
              )}
            </div>
            <input type="submit" value="Create Stack" className="submit" />
          </form>

          <form onSubmit={handlePushedValue}>
            <label htmlFor="stack-push">Push new value</label>
            <div className="input-area">
              <input
                type="text"
                id="stack-push"
                className="input push"
                name="stack-push"
                pattern="\d+"
                placeholder="12"
                value={pushedValue}
                onChange={handleChangePushedValue}
              />
            </div>
            <input type="submit" value="Push" className="submit push" />
          </form>
        </div>

        {stack.getStackAsArray().map((node) => (
          <StackNode
            className="stack-node"
            style={{
              zIndex: `${node.id}`,
              position: 'absolute',
              bottom: `${1 + 8 * node.id}%`,
            }}
            content={node.getObject()}
            key={node.id}
          />
        ))}
      </div>
    </div>
  )
}

export default StackComponent
