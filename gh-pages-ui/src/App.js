// @flow

import React from 'react'
import vtLogo from './components/static/virginia_tech_football.png'
import TopNavBar from './components/top-nav-bar.js'
import './css/App.css'
import './components/top-nav-bar.css'

class App extends React.Component<{}, {}> {
  render () {
    return (
      <div className="App">
        <TopNavBar />
        <p className="App-intro">
          <img src={vtLogo} />
        </p>
      </div>
    )
  }
}

export default App
