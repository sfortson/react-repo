// @flow

import React from 'react'
import logo from './static/logo.svg'
import './top-nav-bar.css'

export class TopNavBar extends React.Component<{}, {}> {
  render () {
    return (
      <div className="topnavbar">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://sfortson.github.io/react-repo" className="App-title">Home</a>
      </div>
    )
  }
}

export default TopNavBar
