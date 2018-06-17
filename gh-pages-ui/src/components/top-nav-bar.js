// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import logo from './static/logo.svg'
import './top-nav-bar.css'

export class TopNavBar extends React.Component<{}, {}> {
  render () {
    return (
      <div className="topnavbar">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/blog" className="App-title">Blog</Link>
        <Link to="/" className="App-title">Home</Link>
      </div>
    )
  }
}

export default TopNavBar
