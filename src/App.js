import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Navigation from './components/navigation/navigation'
import Home from './components/home/home'
import DataStructures from './components/data_structures/dataStructures'
import StackComponent from './components/data_structures/stack/stackComponent'

//CSS
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* Data Structures Routes */}
            <Route exact path="/data-structures">
              <DataStructures />
            </Route>
            <Route path="/data-structures/stack">
              <StackComponent />
            </Route>

            {/* Pathfinding Algorithms Routes */}
            <Route path="/pathfinding"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
