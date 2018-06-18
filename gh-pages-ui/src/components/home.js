// @flow

import React from 'react'
import vtLogo from './static/virginia_tech_football.png'
import '../css/App.css'

class Home extends React.Component<{}, {}> {
  render () {
    return (
      <div>
        <p className="App-intro">
          <img src={vtLogo} alt="VT Logo"/>
          <br />
          Say Something here.
        </p>
      </div>
    )
  }
}

export default Home
